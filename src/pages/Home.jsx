import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'swiper/css'
import './Home.css'
import 'swiper/css/autoplay'

export const Home = () => {
  const api_url = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=33d63b7f6f6a42a9a1433c5b99fe6fce'
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    const response = await fetch(api_url)
    const response_data = await response.json()
    setData(response_data.articles)
    setLoading(false)
  }
  
  useEffect(() => {
    if (loading) {
      fetchData();
    }
  })
  // function randomNumber() {
  //   return Math.floor((Math.random() * 500) + 1)
  // }
  return (
    <>
      <div className="container">
        <div className="intro">
          <h1>Welcome To ML Based <span>Diabetic</span> Prediction Plartform</h1>
        </div>
        <div className="prediction-button">
          <Link to="##" className='prediction-button-link'>Let's Go For Prediction</Link>
        </div>
        <hr className='divider' />
        <h1>Other Health Factors</h1>
        <div className="services">
          <div className="service">
            <Link to="##" className='service-button-link'>Calculate BMR</Link>
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
        <hr className='divider' />
        <h1>Trending Health News</h1>
        <div className="news">
          {
            data.map((item, index) => {
              return item.urlToImage && (
                <div className="news-item" key={index}>
                  <div className="news-item-image">
                    <img className='news-image' src={item.urlToImage} alt="news" />
                  </div>
                  <a href={item.url} target="_blank" rel="noreferrer ">
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
