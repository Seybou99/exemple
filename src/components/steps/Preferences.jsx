import React from 'react'
import { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';

export default function Preferences() {

  const {userData, setUserData} = useContext(StepperContext);
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  };

  return (    
    <div className="flex flex-col "> 

      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-6 text-gray-500">
        À partir de quand êtes-vous disponible pour commencer une alternance ?
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["dispo1"] || ""}
            name="dispo1"
            type="date"
            className="w-full appearance-none resize-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-6 text-gray-500">
        Avez-vous des contraintes de temps ou de calendrier à prendre en compte ?
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["choixdomaine1"] || ""}
            name="dispo2"
            placeholder="Contraintes"
            className="w-full appearance-none resize-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-6 text-gray-500">
        Y a-t-il d'autres informations ou préférences que vous souhaitez partager avec nous ?
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData["choixdomaine1"] || ""}
            name="choixdomaine1"
            placeholder="Exemples : soutien aux étudiants, ressources d'apprentissage, opportunités de réseau..."
            className="w-full appearance-none resize-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

    En appuyant sur "Confirmer", j'accepte que les informations fournies soient utilisées pour me contacter
    avec des offres d'alternance et des propositions de formation adaptées à mon
    profil.

    </div> )
}


