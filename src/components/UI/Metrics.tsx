import React from 'react'
import styled from 'styled-components'

import useCountUp from '../../hooks/useCountUp'
import FadeIn from '../Keyframes/FadeIn'

const Metrics: React.FC = () => {
  const countUser = useCountUp(0, 700, 2000)
  const countReview = useCountUp(0, 100, 2000)
  const countPlan = useCountUp(0, 470, 2000)

  return (
    <FadeIn delay={0.1}>
      <Container>
        <MetricItem>
          <strong>{countUser}만 명</strong>의 여행자
        </MetricItem>
        <MetricItem>
          <strong>{countReview}만 개</strong>의 여행 리뷰
        </MetricItem>
        <MetricItem>
          <strong>{countPlan}만 개</strong>의 여행 일정
        </MetricItem>
      </Container>
    </FadeIn>
  )
}

export default Metrics

const Container = styled.div`
  width: 100%;
  margin-bottom: 40px;
`

const MetricItem = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
  white-space: pre;
`
