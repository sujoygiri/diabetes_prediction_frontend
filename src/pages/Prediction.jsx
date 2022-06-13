import { useState } from 'react';
import Loading from '../components/Loading';
import Modal from '../components/Modal';
import './Prediction.css';

const Prediction = () => {
  const [result, setResult] = useState(-1);
  const [onClose, setOnClose] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPredictionValue = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = "http://127.0.0.1:8000/api/prediction/";
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        glucose: e.target.glucose.value,
        blood_pressure: e.target.blood_pressure.value,
        skin_thickness: e.target.skin_thickness.value,
        insulin: e.target.insulin.value,
        bmi: e.target.bmi.value,
        age: e.target.age.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      var prediction_result = ''
      if (data[0] === 1) {
        prediction_result = 'Sorry to say but you have diabetes 😟😟😟';
      } else {
        prediction_result = 'Congrats you do not have diabetes 🙂🙂🙂';
      }
      setLoading(false);
      setResult(prediction_result);
      setOnClose(true);
      document.getElementById("prediction").classList.add("hide");
    }
  }

  return (
    <>
      <div className="container">
        <div className="prediction-container" id='prediction'>
          <form onSubmit={getPredictionValue}>
            <div className="form-group">
              <div className="form-element">
                <label htmlFor="patient-name" className='form-label'>Enter your name</label>
                <input type="text" className="form-input" id='user-name' maxLength={20} minLength={3} required />
              </div>
              <div className="form-element">
                <label htmlFor="glucose-value" className='form-label'>Enter Glucose Value In Your Blood</label>
                <input type="number" className="form-input" name="glucose" id="glucose-value" required />
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
                <input type="number" className="form-input" name="bmi" id="bmi-value" step="0.01" required />
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
        {loading && <Loading loading={loading} />}
        {onClose && <Modal title={"Hello, " + document.getElementById('user-name').value} result={result} setOnClose={setOnClose} hidingId={"prediction"} />}
      </div>
    </>
  )
}

export default Prediction;