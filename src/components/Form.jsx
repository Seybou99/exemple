import React from 'react'
import { useState } from 'react';

const Form = () => {

    const Email = {
      send: function (a) {
        return new Promise(function (n, e) {
          a.nocache = Math.floor(1e6 * Math.random() + 1);
          a.Action = "Send";
          var t = JSON.stringify(a);
          Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
            n(e);
          });
        });
      },
      ajaxPost: function (e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        a.onload = function () {
          var e = a.responseText;
          null != t && t(e);
        };
        a.send(n);
      },
      createCORSRequest: function (e, n) {
        var t = new XMLHttpRequest();
        if ("withCredentials" in t) {
          t.open(e, n, !0);
        } else if (typeof XDomainRequest !== "undefined") {
          // Utiliser XDomainRequest si disponible (Internet Explorer)
          t = new XMLHttpRequest();
          t.open(e, n);
        } else {
          t = null;
        }
        return t;
      },
    };
  

    const [data, setData] = useState({nom: "", email:"", phone:"", domain:""});


    const ebody = `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px; margin-top: 20px;">

    <div style="text-align: center; margin-bottom: 20px;">
      <div style="max-width: 400px; margin: 0 auto;">
        <img src="https://triagency.fr/assets/img/logo_lba.png" alt="Logo" style="max-width: 100%; height: auto;">
      </div>
      <h1>Nouvelle soumission de formulaire de contact</h1>
    </div>

    <div style="color: #333333;">
      <p><strong>Nom :</strong> ${data.nom}</p>
      <p><strong>Téléphone :</strong> ${data.phone}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      <p><strong>Domaine :</strong> ${data.domain}</p>
    </div>

    <div style="margin-top: 20px; text-align: center; color: #888888;">
      <p>Cet email a été envoyé depuis le formulaire de contact sur votre site web.</p>
    </div>

  </div>
    `;

    const handleChange = (event) =>{   
      const name = event.target.name;
      const value = event.target.value;
      setData({...data, [name]: value})
    }


    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(data);

      Email.send({
        SecureToken : "27ed2b94-7fe1-4cc9-9b9a-88fd912ea013",
        To : 'vipandco.7@gmail.com',
        From : "vipandco.7@gmail.com",
        Subject : "LaBonneAlternance - demande de contact de " + data.email,
        Body : ebody
      }).then(
        message => alert(message)
);
    }
  return (
    <form method='post' onSubmit={handleSubmit}>
        <input required className='input' type="text" name="nom" id="" onChange={handleChange} value={data.nom} placeholder='Nom / Prénom'></input> <br />
        <input required className='input' type="tel" name="phone" id="" onChange={handleChange} value={data.phone} placeholder='Numéro de téléphone'></input> <br />
        <input required className='input' type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder='Adresse e-mail'></input> <br />
        <select required class="input" id="domain" name="domain" onChange={handleChange} value={data.domain}>
            <option value="" disabled selected hidden>Domaine d'activité</option>
            <option value="Management">Management</option>
            <option value="Transport">Transport</option>
            <option value="Logistique">Logistique</option>
            <option value="Hotellerie">Hôtellerie</option>
            <option value="VenteRetail">Vente - Retail</option>
            <option value="Immobilier">Immobilier</option>
            <option value="DeveloppementWeb">Développement web</option>
            <option value="Restauration">Restauration</option>
            <option value="Ressources humaines">Ressources humaines</option>
        </select> <br />
        <button type="submit" class="input" id="wttkwskii" onClick={handleSubmit}>C'EST PARTI</button>
        {/* <p>{data.nom}, {data.phone}, {data.email}, {data.domain}</p> */}
    </form>
  )
}

export default Form;