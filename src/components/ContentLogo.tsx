import React from 'react'
import styled from 'styled-components'
import tripleLogo from '../assets/triple2x.png'
import { fadeIn } from '../styles/Animation'

const ContentLogo: React.FC = () => {
  return (
    <Container>
      <Logo>2021년 12월 기준</Logo>
    </Container>
  )
}

export default ContentLogo

const Container = styled.div`
  width: 100%;
  animation: ${fadeIn} 0.7s ease-in;
  animation-fill-mode: forwards;
  opacity: 0;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  background-image: url(${tripleLogo});
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
`
