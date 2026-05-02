const Step2 = ({ formData, handleChange, nextStep, prevStep }) => {

  const handleNext = () => {
    if (!formData.address) {
      alert("Enter address");
      return;
    }
    nextStep();
  };

  return (
    <div>
      <h2>Step 2</h2>

      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
      />

      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;