import { useState } from 'react';
import Modal from '../../components/Modal';
import './LeanBodyMass.css'

const LeanBodyMass = () => {
    return (
        <>
            <div className="container">
                <div className="lbm-container">
                    <div className="info">
                        <h2>Calculate Lean Body Mass</h2>
                        <p>Lean body mass (LBM) is a part of body composition that is defined as the difference between total body weight and body fat weight. This means that it counts the mass of all organs except body fat, including bones, muscles, blood, skin, and everything else.</p>
                    </div>
                    <div className="main main-field">
                        <form /*onSubmit={calculateIdealBodyWeight}*/>
                            <div className="input">
                                <h3>Insert Following Data Below</h3>
                                <div className="input-item">
                                    <label htmlFor="age">Age</label>
                                    <input type="text" name="age" id="age" />
                                </div>
                                <div className="input-item">
                                    <label htmlFor="height">Height</label>
                                    <input type="text" name="height" id="height" /><span>cm</span>
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
                {/* {onClose && <Modal title={"Hello"} result={`Your Ideal Body Weight is: ${idealBodyWeight} Kgs`} setOnClose={setOnClose}/>} */}
            </div>
        </>
    )
}

export default LeanBodyMass;