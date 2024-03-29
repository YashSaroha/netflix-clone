import React from 'react'
import styled from 'styled-components'

const Player = () => {
  return (
    <PlayContainer>
        <div className='player'>
          <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4'
          autoPlay loop controls 
          />
        </div>
    </PlayContainer>
  )
}

const PlayContainer = styled.div`
    .player{
      width: 100vw;
      height: 100vh;
      .backArrow{
         position: absolute;
         padding: 2rem;
         z-index: 1;
         svg{
          font-size: 3rem;
          cursor: pointer;
          color: white;
         }
      }
     video{
      height: 100%;
      width: 100%;
     }
    }
`

export default Player