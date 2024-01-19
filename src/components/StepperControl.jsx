import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* bouton retour */}
        <button onClick = {()=>handleClick()}
        className={`bg-white text-slate-400 uppercase py-2 px-4
        rounded-xl font-semibold cursor-pointer border-2 border-slate-300
        hover:bg-slate-700 hover:text-slate-700 transiton duration-200 
       ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
            Retour
        </button>

      {/* bouton suivant */}
        <button onClick={()=>handleClick("next")} 
        className="bg-blue-900 text-slate-300 uppercase py-2 px-4
        rounded-xl font-semibold cursor-pointer 
        hover:bg-slate-700 hover:text-white transiton duration-200 ease-in-out">
            {currentStep === steps.length -1 ? "Confirmer" : "Suivant"}
        </button>
    </div>
  )
}

export default StepperControl