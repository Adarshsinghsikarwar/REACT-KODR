const Step3 = ({ formData, prevStep }) => {
  return (
    <div>
      <h2>Review</h2>

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Address: {formData.address}</p>

      <button onClick={prevStep}>Back</button>
      <button onClick={() => alert("Submitted!")}>Submit</button>
    </div>
  );
};

export default Step3;
