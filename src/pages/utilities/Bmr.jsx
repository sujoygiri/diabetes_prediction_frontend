import './Bmr.css'

const Bmr = () => {
    return (
        <>
            <div className="container">
                <div className="bmr-container">
                    <div className="info">
                        <h2>Calculate Your Body BMR</h2>
                        <p>The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate i.e the amount of energy expended while at rest in a neutrally temperate environment</p>
                    </div>
                    <div className="main">
                        <form>
                            <div className="input">
                                <h3>Insert Following Data Below</h3>
                                <div className="input-item">
                                    <label htmlFor="age">Age</label>
                                    <input type="number" name="" id="age" />
                                </div>
                                <div className="input-item">
                                    <label htmlFor="height">Height</label>
                                    <input type="number" id="height" />
                                </div>
                                <div className="input-item">
                                    <label htmlFor="weight">Weight</label>
                                    <input type="number" name="" id="weight" />
                                </div>
                                <div className="input-item-radio">
                                    <span>Gender</span>
                                    <input type="radio" name="gender" id="male" />
                                    <label htmlFor="male">Male</label>
                                    <input type="radio" name="gender" id="female" />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                            <div className="calculate">
                                <button type="submit">Calculate</button>
                            </div>
                        </form>
                        <div className="result">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
/* For men:
BMR = 10W + 6.25H - 5A + 5
For women:
 BMR = 10W + 6.25H - 5A - 161*/
export default Bmr;