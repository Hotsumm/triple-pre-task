import React from 'react'
import styled, { keyframes } from 'styled-components'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay }) => {
  return <Container delay={delay}>{children}</Container>
}

export default FadeIn

const fadeIn = keyframes`
from {
    opacity : 0;
    transform : translateY(20px)
} to {
    opacity : 1;
    transform : translateY(0)
}
`

const Container = styled.div<{
  delay?: number
}>`
  width: 100%;
  animation: ${fadeIn} 0.7s ease-in
    ${(props) => (props.delay ? `${props.delay}s` : '')};
  animation-fill-mode: forwards;
  opacity: 0;
`
