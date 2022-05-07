import { useState } from 'react';
import Modal from '../../components/Modal';
import './Bmr.css'

const Bmr = () => {
    const [onClose, setOnClose] = useState(false);
    const [bmr, setBmr] = useState(null);
    const calculateBmr = (e) => {
        e.preventDefault();
        const age = parseInt(e.target.age.value);
        const height = parseInt(e.target.height.value);
        const weight = parseInt(e.target.weight.value);
        const gender = e.target.gender.value;
        if(gender === 'm'){
            const male_bmr = ((10*weight) + (6.25*height) - (5*age) + 5);
            setBmr(male_bmr);
        }
        else{
            const female_bmr = ((10*weight) + (6.25*height) - (5*age) - 161);
            setBmr(female_bmr);
        }
    }
    return (
        <>
            <div className="container">
                <div className="bmr-container">
                    <div className="info">
                        <h2>Calculate Your Body BMR</h2>
                        <p>The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate i.e the amount of energy expended while at rest in a neutrally temperate environment</p>
                    </div>
                    <div className="main main-field">
                        <form onSubmit={calculateBmr}>
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
                                <div className="input-item">
                                    <label htmlFor="weight">Weight</label>
                                    <input type="text" name="weight" id="weight" /><span>Kg</span>
                                </div>
                                <div className="input-item-radio">
                                    <span>Gender</span>
                                    <input type="radio" name="gender" id="male" value="m"/>
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" name="gender" id="female" value="f"/>
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                            <div className="calculate">
                                <button type="submit" onClick={() => setOnClose(true)}>Calculate</button>
                            </div>
                        </form>
                    </div>
                </div>
                {onClose && <Modal title={"Hello"} result={`Your BMR is: ${bmr} Calories/day`} setOnClose={setOnClose}/>}
            </div>
        </>
    )
}
/* For men
BMR = 10W + 6.25H - 5A + 5
For women:
 BMR = 10W + 6.25H - 5A - 161*/
export default Bmr;