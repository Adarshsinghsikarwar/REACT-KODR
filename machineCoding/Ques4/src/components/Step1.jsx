const Step1 = ({ formData, handleChange, nextStep }) => {
  const handleNext = () => {
    if (!formData.name || !formData.email) {
      alert("Fill all fields");
      return;
    }
    nextStep();
  };

  return (
    <div>
      <h2>Step 1</h2>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
