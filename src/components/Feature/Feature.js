import React from 'react'
import '../../assets/scss/home/feature.scss'
// import gameItemImage1 from '../../assets/gameItem1.png'
// import gameItemImage2 from '../../assets/gameItem2.png'
// import gameItemImage3 from '../../assets/gameItem3.png'

const gameItem_data = [
  {
    // image: gameItemImage1,
    heading_text: '420 game - End game',
  },
]

const Feature = () => {
  return (
    <div className="feature--container">
      <h3 className="feature--container__heading">Our featured Games</h3>
      <div className="feature--container__content">{/* <GameItem /> */}</div>
    </div>
  )
}

export default Feature
