import React from "react";
import "../App.css";
import "../components_css/card.css";
import { Link } from "react-router-dom";
function Cards2() {
  const cardContent = [
    {
      img: "/3.png",
      h1: "1",
      p1: (
        <>
          Remplissez notre  <Link to="/votre-chemin"id="p1">formulaire d'orientation</Link>
        </>
      ),
      p2: "Profitez d’un service de recrutement d’apprentis 100% gratuit. Affinez votre recherche de la perle rare avec un de nos chargés de recrutement. Nous prenons en compte l’ensemble de vos critères de recherche afin de compléter vos équipes de la meilleure manière possible.",
    },
    {
      img: "/4.png",
      h1: "2",
      p1: (
        <>
          Faîtes des économies <Link to="/votre-chemin"id="p1"> en recrutant vos Alternants</Link>
        </>
      ),
      p2: "Notre service RH s’occupe de toutes les démarches permettant d’obtenir la subvention de 6 000 € pour le recrutement d’un apprenti auprès des OPCO. Recrutez des apprentis vous permet ainsi de faire des économies sur votre masse salariale.",
    },
    {
      img: "/5.png",
      h1: "3",
      p1: (
        <>
          Bénéficiez <Link to="/votre-chemin"id="p1">d’un service personnalisé</Link>
        </>
      ),
      p2: "Conscient que chaque entreprise a des besoins différents, nous adaptons nos services de recrutement aux différentes stratégies de développement. Nos chargés de recrutement sont à l’écoute de chacun de vos besoins.",
    },
  ];
  return (
    <div className="cards-grand">
      <h1 id="etapes">Les 3 avantages de recruter vos apprentis avec La-Bonne-Alternance.com :</h1>
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

export default Cards2;
