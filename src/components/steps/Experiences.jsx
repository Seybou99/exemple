import React from 'react'
import { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';

export default function Experiences() {

  const {userData, setUserData} = useContext(StepperContext);
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  };

  return (    
    <div className="flex flex-col "> 

      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-16 text-xs font-bold uppercase leading-6 text-gray-500">
        Précisez le type de formation que vous recherchez (diplômante, certifiante, formation continue, etc.).
        Quels sont les aspects importants pour vous dans un programme de formation ? 
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData["choixdomaine1"] || ""}
            name="choixdomaine1"
            placeholder="Exemples : durée, méthode d'enseignement, reconnaissance du diplôme, etc.)"
            className="w-full appearance-none resize-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-6 text-gray-500">
        Y a-t-il des critères spécifiques importants pour vous dans le choix d'une formation ?
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData["choixdomaine1"] || ""}
            name="choixdomaine1"
            placeholder="Localisation, horaires flexibles, apprentissage en ligne ou en présentiel..."
            className="w-full appearance-none resize-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-10 text-xs font-bold uppercase leading-6 text-gray-500">
        Partagez toute attente ou besoin spécifique que vous avez par rapport à votre formation future.
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

    </div> )
}
