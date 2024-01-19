import React from "react";
import "../App.css";
import "../components_css/card.css";
import { Link } from "react-router-dom";
function Cards() {
  const cardContent = [
    {
      img: "/3.png",
      h1: "1",
      p1: (
        <>
          Remplissez notre  <Link to="/votre-chemin"id="p1">formulaire <br></br>d'orientation</Link>
        </>
      ),
      p2: "Commencez par nous fournir desinformations essentielles sur votre parcours, vos aspirations professionnelles et vos compétences. Grâce à ce formulaire, nous pourrons mieux comprendre vos besoins et vous orienter efficacement vers la formation 100% financée et le poste en alternance idéale.",
    },
    {
      img: "/4.png",
      h1: "2",
      p1: (
        <>
          Passez un <Link to="/votre-chemin"id="p1">pré-entretien <br></br>personnalisé</Link>
        </>
      ),
      p2: "Suite à l'analyse de votre formulaire, notre équipe spécialisée en recrutement en alternance vous recontactera pour un préentretien. Cette conversation nous permettra d'affiner votre profil et de vous préparer aux entretiens avec nos entrepris partenaires, renforçant ainsi votre visibilité                                                       auprès des recruteurs.",
    },
    {
      img: "/5.png",
      h1: "3",
      p1: (
        <>
          Obtenez <Link to="/votre-chemin"id="p1">votre contrat <br></br>d'alternance</Link>
        </>
      ),
      p2: "Forts de notre vaste réseau d'entreprises partenaires et de notre expertise en placement en alternance, nous faciliterons votre mise en relation avec les entreprises correspondant à votre profil. Lancez-vous dans une carrière prometteuse grâce à un contrat d'alternance adapté à vos ambitions.",
    },
  ];
  return (
    <div className="cards-grand">
      <h1 id="etapes">Décrochez votre offre d’Alternance en 3 étapes</h1>
       <div id="cards-parent">
      {cardContent.map((card) => (
        <div className="cards">
          <div id="pic-absolute">
            <img src={card.img} alt="" />
            <h1 >{card.h1}</h1>
          </div>
          <div>
            <p id="p1">{card.p1}</p>
            <p>
             {card.p2}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
   
  );
}

export default Cards;
