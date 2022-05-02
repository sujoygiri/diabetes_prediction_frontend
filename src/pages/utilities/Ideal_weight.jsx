import { useState } from 'react';
import Modal from '../../components/Modal';
import './Ideal_weight.css'

const Ideal_weight = () => {
    const [idealBodyWeight, setIdealBodyWeight] = useState(null);
    const [onClose, setOnClose] = useState(false);

// Male:	56.2 kg + 1.41 kg per inch over 5 feet
// Female:	53.1 kg + 1.36 kg per inch over 5 feet

    const calculateIdealBodyWeight = (e) => {
        e.preventDefault();
        const gender = e.target.gender.value;
        const height = parseInt(e.target.height.value);
        let ideal_body_weight = 0;
        if(height <= 152 && gender === 'm'){
            ideal_body_weight = 56.2;
        }
        else if(height <= 152 && gender === 'f'){
            ideal_body_weight = 53.1;
        }
        else if(height > 152 && gender === 'm'){
            ideal_body_weight = 56.2 + ((height - 152) * 1.41 * 0.3937);
        }
        else if(height > 152 && gender === 'f'){
            ideal_body_weight = 53.1 + ((height - 152) * 1.36 * 0.3937);
        }
        setIdealBodyWeight(ideal_body_weight); 
        setOnClose(true);
    }

    return (
        <>
            <div className="container">
                <div className="ibw-container">
                    <div className="info">
                        <h2>Calculate Ideal Body Weight</h2>
                        <p>The Ideal Weight Calculator computes ideal body weight (IBW) ranges based on height, gender, and age.</p>
                    </div>
                    <div className="main main-field">
                        <form onSubmit={calculateIdealBodyWeight}>
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
                {onClose && <Modal title={"Hello"} result={`Your Ideal Body Weight is: ${idealBodyWeight} Kgs`} setOnClose={setOnClose}/>}
            </div>
        </>
    );
}

export default Ideal_weight;