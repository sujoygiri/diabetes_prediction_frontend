import './Bmi.css'
import { useState } from 'react';
import Modal from '../../components/Modal';

const Bmi = () => {

    const [bmi, setBmi] = useState(null);
    const [onClose, setOnClose] = useState(false);

    const calculateBmi = (e) => {
        e.preventDefault();
        const height = parseInt(e.target.height.value) / 100;
        const weight = parseInt(e.target.weight.value);
        const BMI = weight / (height * height);
        setBmi(BMI);
        setOnClose(true);
    }
    return (
        <>
            <div className="container">
                <div className="bmi-container">
                    <div className="info">
                        <h2>Calculate Your Body BMI</h2>
                        <p>The Body Mass Index (BMI) is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass.</p>
                    </div>
                    <div className="main main-field">
                        <form onSubmit={calculateBmi}>
                            <div className="input">
                                <h3>Insert Following Data Below</h3>
                                <div className="input-item">
                                    <label htmlFor="age">Age</label>
                                    <input type="text" name="age" id="age" />
                                </div>
                                <div className="input-item">
                                    <label htmlFor="height">Height</label>
                                    <div className="input-section">
                                        <input type="text" name="height" id="height" /><span>cm</span>
                                    </div>
                                </div>
                                <div className="input-item">
                                    <label htmlFor="weight">Weight</label>
                                    <input type="text" name="weight" id="weight" />
                                </div>
                                <div className="input-item-radio">
                                    <span>Gender</span>
                                    <input type="radio" name="gender" id="male" value="m" />
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" name="gender" id="female" value="f" />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                            <div className="calculate">
                                <button type="submit">Calculate</button>
                            </div>
                        </form>
                    </div>
                </div>
                {onClose && <Modal title={"Hello"} result={`Your BMI is: ${bmi} Kg/m2`} setOnClose={setOnClose}/>}
            </div>
        </>
    )
}

export default Bmi;