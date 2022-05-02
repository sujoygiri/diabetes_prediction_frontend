import { useState } from 'react';
import Modal from '../../components/Modal';
import './LeanBodyMass.css'

const LeanBodyMass = () => {
// For males:
// eLBM = 0.407W + 0.267H - 19.2
// For females:
// eLBM = 0.252W + 0.473H - 48.3
    const [lbm, setLbm] = useState(null);
    const [onClose, setOnClose] = useState(false);

    const calculateLbm = (e) => {
        e.preventDefault();
        const height = e.target.height.value;
        const weight = e.target.weight.value;
        const gender = e.target.gender.value;
        let lean_body_mass = 0;
        if(gender === 'm'){
            lean_body_mass = 0.407 * weight + 0.267 * height - 19.2;
        }
        else if(gender === 'f'){
            lean_body_mass = 0.252 * weight + 0.473 * height - 48.3;
        }
        setLbm(lean_body_mass);
        setOnClose(true);
    }

    return (
        <>
            <div className="container">
                <div className="lbm-container">
                    <div className="info">
                        <h2>Calculate Lean Body Mass</h2>
                        <p>Lean body mass (LBM) is a part of body composition that is defined as the difference between total body weight and body fat weight. This means that it counts the mass of all organs except body fat, including bones, muscles, blood, skin, and everything else.</p>
                    </div>
                    <div className="main main-field">
                        <form onSubmit={calculateLbm}>
                            <div className="input">
                                <h3>Insert Following Data Below</h3>
                                <div className="input-item">
                                    <label htmlFor="height">Height</label>
                                    <input type="text" name="height" id="height" /><span>cm</span>
                                </div>
                                <div className="input-item">
                                    <label htmlFor="weight">Weight</label>
                                    <input type="text" name="weight" id="weight" /><span>Kg</span>
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
                {onClose && <Modal title={"Hello"} result={`Your Lean Body Mass is: ${lbm} Kgs`} setOnClose={setOnClose}/>}
            </div>
        </>
    )
}

export default LeanBodyMass;