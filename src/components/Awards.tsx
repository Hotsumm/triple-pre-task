import React from 'react'
import styled from 'styled-components'

import appStoreBadge from '../assets/badge-apple4x.png'
import playStoreBadge from '../assets/play-store2x.png'
import { fadeIn } from '../styles/Animation'

const Awards: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <AwardItem badge={playStoreBadge}>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </AwardItem>
        <AwardItem badge={appStoreBadge}>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </AwardItem>
      </Wrapper>
    </Container>
  )
}

export default Awards

const Container = styled.div`
  width: 100%;
  animation: ${fadeIn} 0.7s ease-in 0.2s;
  animation-fill-mode: forwards;
  opacity: 0;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0 20px;
`

const AwardItem = styled.div<{
  badge: string
}>`
  display: flex;
  align-items: center;
  white-space: pre;
  height: 54px;
  background-size: 54px 54px;
  background-image: ${(props) => `url(${props.badge})`};
  background-repeat: no-repeat;
  padding-left: 65px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
`
