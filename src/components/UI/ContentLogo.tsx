import React from 'react'
import styled from 'styled-components'

import tripleLogo from '../../assets/triple2x.png'
import FadeIn from '../Keyframes/FadeIn'

const ContentLogo: React.FC = () => {
  return (
    <FadeIn>
      <Container>
        <Logo>2021년 12월 기준</Logo>
      </Container>
    </FadeIn>
  )
}

export default ContentLogo

const Container = styled.div`
  width: 400px;
  height: 338px;
`

const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: 400px 338px;
  background-image: url(${tripleLogo});
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
`
