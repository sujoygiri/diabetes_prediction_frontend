import './Prediction.css';

const Prediction = () => {
  return (
    <>
      <div className="prediction-container">
        <form action="">
          <div className="form-group">
            <div className="form-element">
              <label htmlFor="patient-name" className='form-label'>Enter your name</label>
              <input type="text" className="form-input" placeholder="Enter your name" id='patient-name'/>
            </div>
            <div className="form-element">
              <label htmlFor="glucose-value" className='form-label'>Enter Glucose Value In Your Blood</label>
              <input type="number" className="form-input" name="glucose" id="glucose-value" />
            </div>
            <div className="form-element">
              <label htmlFor="blood-pressure-value" className='form-label'>Enter Your Blood Pressure Value</label>
              <input type="number" className="form-input" name="blood-pressure" id="blood-pressure-value" />
            </div>
            <div className="form-element">
              <label htmlFor="skin-thickness-value" className='form-label'>Enter Your Skin Thickness Value</label>
              <input type="number" className="form-input" name="skin-thickness" id="skin-thickness-value" />
            </div>
            <div className="form-element">
              <label htmlFor="insulin-value" className='form-label'>Enter Your Insulin Value</label>
              <input type="number" className="form-input" name="insulin" id="insulin-value" />
            </div>
            <div className="form-element">
              <label htmlFor="bmi-value" className='form-label'>Enter Your BMI Value</label>
              <input type="number" className="form-input" name="bmi" id="bmi-value" />
            </div>
            <div className="form-element">
              <label htmlFor="age-value" className='form-label'>Enter Your Age</label>
              <input type="number" className="form-input" name="age" id="age-value" />
            </div>
            <div className="form-element">
              <button type="submit" className='form-button'>Predict</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Prediction;