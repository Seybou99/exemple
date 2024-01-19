import {useContext} from 'react';
import { StepperContext } from '../../contexts/StepperContext';

export default function PersonalInfo() {

  const {userData, setUserData} = useContext(StepperContext);
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  };
  return (
    <div className="flex flex-col ">

      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Nom complet
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["fullname"] || ""}
            name="fullname"
            placeholder="Nom complet"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Numéro de téléphone
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["phone"] || ""}
            name="telephone"
            placeholder="Numéro de téléphone"
            type="tel"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Adresse email
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["email"] || ""}
            name="email"
            placeholder="exemple@email.fr"
            type="email"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Date de naissance
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["birthdate"] || ""}
            name="birthdate"
            type="date"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        
      </div>
      
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Nationalité 
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["nationality"] || ""}
            name="nationality"
            placeholder="Nationalité"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>

      </div>

      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Reconnaissance travailleur handicapé
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["handicap"] || ""}
            name="handicap"
            placeholder='Oui/Non'
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        
      </div>

    </div>
  )
}
