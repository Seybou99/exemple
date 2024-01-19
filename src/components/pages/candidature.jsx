import React, { useState } from 'react'
import { StepperContext } from '../../contexts/StepperContext';
import Stepper from '../Stepper'
import StepperControl from '../StepperControl'

import PersonalInfo from '../steps/PersonalInfo';
import DomainOfInterest from '../steps/DomainOfInterest';
import Experiences from '../steps/Experiences';
import Preferences from '../steps/Preferences';
import Consentment from '../steps/Consentment'


const Candidature = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);

    const steps = [     /* les différentes étapes du form */ 
        "Détails personnels",
        "Domaine / Expérience",
        "Critères",
        "Disponibilité",
        "Finalités"
    ];

    const displayStep = (step)=> {
        switch(step) {
            case 1:
                return <PersonalInfo />
            case 2:
                return <DomainOfInterest />
            case 3:
                return <Experiences />
            case 4:
                return <Preferences />
            case 5:
                return <Consentment />
            default:                                            
        }
    }

    const handleClick = (direction)=> {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // verifie si les steps sont dans la portée
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        {/* Stepper */}
        <div className="container horizontal mt-5">
            <Stepper
            steps = {steps}
            currentStep = {currentStep} />
        </div>
        {/* Affichage Components */}
        <div className='my-10 p-10'>
            <StepperContext.Provider value={{
                userData,
                setUserData,
                finalData,
                setFinalData
            }}>
                {displayStep(currentStep)}
            </StepperContext.Provider>
        </div>

        {/* Stepper Nav Control */}
        {currentStep !== steps.length && 
        <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
        /> }
    </div>
  )
}

export default Candidature