import React from 'react';
import { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';

export default function DomainOfInterest() {

  const {userData, setUserData} = useContext(StepperContext);
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  };
  return (
    <div className="flex flex-col ">
      Domaine d'intérêt
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Décrivez le domaine qui vous intéresse le plus, et ce qui vous attire dedans.
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData["choixdomaine1"] || ""}
            name="choixdomaine1"
            placeholder="Exemple : Marketing Digital, Ingénierie, Gestion RH..."
            className="w-full appearance-none resize-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
        Avez-vous un aspect particulier de ce domaine qui vous passionne ? 
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData["choixdomaine2"] || ""}
            name="choixdomaine2"
            placeholder="Exemple : Marketing
            réseaux sociaux, Ingénierie robotique, Gestion projet..."
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
        Quels sont vos objectifs de carrière dans ce domaine ?
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData["choixdomaine3"] || ""}
            name="choixdomaine3"
            placeholder="Comment l'alternance vous aidera-t-elle à les atteindre?"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
          
        </div>
        <br></br>
      </div>

      Compétences et expériences
    
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
        Quelles compétences pertinentes possédez-vous déjà dans ce domaine ?
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData["competence1"] || ""}
            name="competence1"
            placeholder="Comment l'alternance vous aidera-t-elle à les atteindre?"
            className="w-full appearance-none resize-none p-1 px-2 text-gray-800 outline-none"
          />
          
        </div>
      </div>

          
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
        Quelles compétences spécifiques souhaitez-vous développer à travers l'alternance ? 
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData["competence2"] || ""}
            name="competence2"
            placeholder="Exemple : gestion de projet, analyse de données, compétences logicielles..."
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none resize-none"
          />
          
        </div>
      </div>

          
      <div className="mx-2 w-full flex-1">
        <div className="mt-2 h-12 text-xs font-bold uppercase leading-8 text-gray-500">
        Décrivez toute expérience de travail, de stage ou de projet que vous avez eue en lien avec ce domaine. 
        </div>
        <div className="my-4 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            onChange={handleChange}
            value={userData["competence3"] || ""}
            name="competence3"
            placeholder="Comment l'alternance vous aidera-t-elle à les atteindre?"
            className="w-full appearance-none resize-none p-1 px-2 text-gray-800 outline-none"
          />
          
        </div>
      </div>

      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
        Attachez votre CV ci-dessous : 
        </div>
        <div className="my-4 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["cvcandidat"] || ""}
            name="cvcandidat"
            placeholder="Comment l'alternance vous aidera-t-elle à les atteindre?"
            type='file'
            className="w-full appearance-none resize-none p-1 px-2 text-gray-800 outline-none"
          />
          
        </div>
      </div>
      
      
    </div>
  )
}
