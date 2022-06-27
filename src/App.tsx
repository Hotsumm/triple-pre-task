import React from 'react'
import styled from 'styled-components'

import GlobalStyles from './styles/GlobalStyles'
import ContentLogo from './components/ContentLogo'
import Metrics from './components/Metrics'
import Awards from './components/Awards'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Container>
          <Section>
            <ContentLogo />
            <ContentWrap>
              <Metrics />
              <Awards />
            </ContentWrap>
          </Section>
        </Container>
      </Main>
    </>
  )
}

export default App

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
`

const Container = styled.div`
  width: 100%;
  padding: 200px 100px;
`

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
`

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`
