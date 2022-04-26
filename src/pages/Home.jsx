import { Link } from 'react-router-dom'
import { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';
import './Home.css'


export const Home = () => {

  const { data } = useContext(GlobalContext);

  // function randomNumber() {
  //   return Math.floor((Math.random() * 500) + 1)
  // }
  return (
    <>
      <div className="container">
        <div className="intro">
          <h1>Welcome To ML Based <a href="http://www.google.com/search?q=diabetes" target="_blank" rel="noreferrer">Diabetes</a> Prediction Plartform</h1>
        </div>
        <Link to="/prediction" className='prediction-button'>
          <div>
            Let's Go For Prediction
          </div>
        </Link>
        <hr className='divider' />
        <h1>Other Health Factors</h1>
        <div className="services">
          <div className="service">
            <Link to="/bmr" className='service-button-link'>Calculate BMR</Link>
          </div>
          <div className="service">
            <Link to="##" className='service-button-link'>Calculate BMR</Link>
          </div>
          <div className="service">
            <Link to="##" className='service-button-link'>Calculate BMR</Link>
          </div>
          <div className="service">
            <Link to="##" className='service-button-link'>Calculate BMR</Link>
          </div>
        </div>
        {data.length !== 0 && <>
          <hr className='divider' />
          <h1>Trending Health News</h1>
        </>
        }
        <div className="news">
          {
            data.map((item, index) => {
              return (item.urlToImage && item.url && item.title && item.description) && (
                <div className="news-item" key={index}>
                  <div className="news-item-image">
                    <img className='news-image' src={item.urlToImage} alt="news" />
                  </div>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <div className="news-item-content">
                      <h3 className='news-title'>{item.title.substring(0, 80) + "..."}</h3>
                      <p className='news-description'>{item.description.substring(0, 100) + "..."}</p>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
