import React from 'react'
import styled from 'styled-components'

const Metrics: React.FC = () => {
  return (
    <Container>
      <MetricItem>
        <strong>만 명</strong>의 사용자
      </MetricItem>
      <MetricItem>
        <strong>만 개</strong>의 리뷰
      </MetricItem>
      <MetricItem>
        <strong>만 개</strong>의 저장
      </MetricItem>
    </Container>
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
