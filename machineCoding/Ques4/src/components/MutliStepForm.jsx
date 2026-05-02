import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      {step === 1 && (
        <Step1
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <Step2
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && <Step3 formData={formData} prevStep={prevStep} />}
    </div>
  );
};

export default MultiStepForm;
