import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.jpg'
import IMG3 from '../../assets/IMG3.jpg'
import IMG4 from '../../assets/IMG4.jpg'
import IMG5 from '../../assets/IMG5.jpg'
import IMG6 from '../../assets/IMG6.jpg'
import IMG7 from '../../assets/IMG7.png'
import IMG8 from '../../assets/IMG8.jpg'
import IMG9 from '../../assets/IMG9.jpeg'
import IMG10 from '../../assets/IMG10.jpg'
import IMG11 from '../../assets/IMG11.jpg'
import IMG12 from '../../assets/IMG12.jpg'

const data =[
  {
    id:1,
    image: IMG1,
    title:"Full_Mint_Website",
    github:'https://github.com/wencio/full_mint_website',
    demo:"http://full-mint-website.vercel.app"
  },
  {
    id:2,
    image: IMG2,
    title:"React_API_Crypto_Tracker",
    github:'https://github.com/wencio/react_api_crypto_tracker',
    demo:"https://react-api-crypto-tracker-eight.vercel.app/"
  },
  {
    id:3,
    image: IMG3,
    title:"NFTS_MarketPlace_Basic_Opensea",
    github:'https://github.com/wencio/nfts_marketplace_basic_opensea',
    demo:"https://nfts-marketplace-basic-opensea.vercel.app/"
  },
  {
    id:4,
    image: IMG4,
    title:"CryptoBot",
    github:'https://github.com/wencio/python_fear_and_greed_binance_bot',
    demo:""
  },

  {
    id:5,
    image: IMG5,
    title:"React_Crypto_DashBoard",
    github:'https://github.com/wencio/react_crypto_dashboard',
    demo:"https://react-crypto-dashboard-lv.vercel.app/"
  },
  {
    id:6,
    image: IMG6,
    title:"Cotizador Criptomonedas",
    github:'https://github.com/wencio/cotizador_criptomonedas',
    demo:"https://cotizador-criptomonedas-zeta.vercel.app/"
  },
   {
    id:7,
    image: IMG7,
    title:"TensorFlow Image Classification",
    github:'https://github.com/wencio/tensorflow_image_classification_CIFAR-10',
    demo:"https://github.com/wencio/tensorflow_image_classification_CIFAR-10"
  },
   {
    id:8,
    image: IMG8,
    title:"Machine Learning Pyspark",
    github:'https://github.com/wencio/ml_pyspark_project',
    demo:"https://github.com/wencio/ml_pyspark_project"
  },
   {
    id:9,
    image: IMG9,
    title:"Tensorflow/Dask/MongoDB Portfolio Price Predictions",
    github:'https://github.com/wencio/ANN_Portfolio_price_prediction',
    demo:"https://github.com/wencio/ANN_Portfolio_price_prediction"
  },
    {
    id:10,
    image: IMG10,
    title:"ETL and Data Visualization with Airflow, D3.js, JavaScript, and Python",
    github:'https://github.com/wencio/sensemaking_data_pipeline_airflow',
    demo:"https://github.com/wencio/sensemaking_data_pipeline_airflow/blob/main/d3_bubble_chart_example.html"
  },
     {
    id:11,
    image: IMG11,
    title:"DAO Implementation",
    github:'https://github.com/wencio/dao_example_solidity',
    demo:"https://github.com/wencio/dao_example_solidity"
  },
     {
    id:12,
    image: IMG12,
    title:"Flashloan Implementation",
    github:'https://github.com/wencio/flashloans_solidity',
    demo:"https://github.com/wencio/flashloans_solidity"
  }




]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map (({id,image,title,github,demo})=>{
          return (
            <article key ={id} className ='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className ='btn' target = '_blank'>Github</a>
              <a href={demo} className = 'btn btn-primary' target='_blank'>Live Demo</a>

            </div>

            </article>

          )

        })
      
      }
      </div>
      
      </section>
  )
}

export default Portfolio
