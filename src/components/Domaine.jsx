import React from "react";
import"../components_css/Domaine.css"
function Domaine(){
  const domaineConst= [
    {
      cl:"div1",
      h:"Dans les domaines suivants :",
      im:<img src="/2.png" alt="" />,
    },
    {
      cl:"div2",
      h:"Marketing digital",
      p:"Devenez expert en stratégie de marketing en ligne. Maîtrisez la création de contenu, la gestion des campagnes publicitaires et atteignez efficacement votre audience cible.",
    },
    {
      cl:"div3",
      h:"Informatique & Digital",
      p:"Évoluez dans le monde du développement web et de la programmation. Restez à jour avec les dernières innovations technologiques et les tendances du digital.",
    },
    {
      cl:"div4",
      h:"Commerce & Vente",
      p:"Élevez vos compétences en techniques de vente et en relation client. Apprenez à construire une base de clients fidèles et à surpasser vos objectifs commerciaux.",
    },
    {
      cl:"div5",
      h:"Gestion & Comptabilité",
      p:"Plongez dans la comptabilité et la gestion financière. Tenez une comptabilité impeccable, analyser des bilans et gérer efficacement les finances d'une entreprise.",
    },
    {
      cl:"div6",
      h:"Ressources Humaines",
      p:"Apprenez les techniques modernes de gestion des ressources humaines et créez une culture d'entreprise forte. Le rh s’occupe de la gestion du personnel et du recrutement",
    },
    {
      cl:"div7",
      h:"Hôtellerie & Restauration",
      p:"Perfectionnez-vous dans la gestion hôtelière et la restauration. Découvrez les clés d'un service client impeccable et d'une gestion opérationnelle réussie.",
    },
  ]
    return(
       <div className="parent">
        {domaineConst.map((doomaine) =>(
          <div className={doomaine.cl}>
           <h2>{doomaine.h}</h2>
           <p>{doomaine.im}</p>
           <p>{doomaine.p}</p>
         </div>
        ))}
       </div>
    );
}
export default Domaine