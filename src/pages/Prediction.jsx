import { useState } from 'react';
import Modal from '../components/Modal';
import './Prediction.css';

const Prediction = () => {
  const [result, setResult] = useState(null);
  const [onClose, setOnClose] = useState(false);

  
  const getPredictionValue = async (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:8000/api/prediction/";
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        glucose:e.target.glucose.value,
        blood_pressure:e.target.blood_pressure.value,
        skin_thickness:e.target.skin_thickness.value,
        insulin:e.target.insulin.value,
        bmi:e.target.bmi.value,
        age:e.target.age.value,
      }),
    });
    let data = await response.json();
    if(response.status === 200){
      setResult(data[0]);
      setOnClose(true);
    }
    console.log(data);
  }

  return (
    <>
      <div className="container">
        <div className="prediction-container">
          <form onSubmit={getPredictionValue}>
            <div className="form-group">
              <div className="form-element">
                <label htmlFor="patient-name" className='form-label'>Enter your name</label>
                <input type="text" className="form-input" placeholder="Enter your name" id='user-name' />
              </div>
              <div className="form-element">
                <label htmlFor="glucose-value" className='form-label'>Enter Glucose Value In Your Blood</label>
                <input type="number" className="form-input" name="glucose" id="glucose-value" maxLength={3} required={true} />
              </div>
              <div className="form-element">
                <label htmlFor="blood-pressure-value" className='form-label'>Enter Your Blood Pressure Value</label>
                <input type="number" className="form-input" name="blood_pressure" id="blood-pressure-value" required />
              </div>
              <div className="form-element">
                <label htmlFor="skin-thickness-value" className='form-label'>Enter Your Skin Thickness Value</label>
                <input type="number" className="form-input" name="skin_thickness" id="skin-thickness-value" required />
              </div>
              <div className="form-element">
                <label htmlFor="insulin-value" className='form-label'>Enter Your Insulin Value</label>
                <input type="number" className="form-input" name="insulin" id="insulin-value" required />
              </div>
              <div className="form-element">
                <label htmlFor="bmi-value" className='form-label'>Enter Your BMI Value</label>
                <input type="number" className="form-input" name="bmi" id="bmi-value" step="0.01"  required />
              </div>
              <div className="form-element">
                <label htmlFor="age-value" className='form-label'>Enter Your Age</label>
                <input type="number" className="form-input" name="age" id="age-value" required />
              </div>
              <div className="form-element">
                <button type="submit" className='form-button'>Predict</button>
              </div>
            </div>
          </form>
        </div>
        {onClose && <Modal title={"Hello"} result={result} setOnClose={setOnClose}/>}
      </div>
    </>
  )
}

export default Prediction;