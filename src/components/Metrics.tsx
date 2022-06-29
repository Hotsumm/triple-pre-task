import React from 'react'
import styled from 'styled-components'

import { fadeIn } from '../styles/Animation'

const Metrics: React.FC = () => {
  return (
    <Container>
      <MetricItem>
        <strong>만 명</strong>의 여행자
      </MetricItem>
      <MetricItem>
        <strong>만 개</strong>의 여행 리뷰
      </MetricItem>
      <MetricItem>
        <strong>만 개</strong>의 여행 일정
      </MetricItem>
    </Container>
  )
}

export default Metrics

const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
  animation: ${fadeIn} 0.7s ease-in 0.1s;
  animation-fill-mode: forwards;
  opacity: 0;
`

const MetricItem = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
  white-space: pre;
`
