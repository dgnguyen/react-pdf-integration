import React from 'react'

import { Page, Document, Font, StyleSheet } from '@react-pdf/renderer'

import data from './indicator.json'

import { Cover } from './Content/Cover'
import { IndexPage } from './Content/IndexPage'
import { Introduction } from './Content/Introduction'
import PageNumber from './Content/PageNumber'
import {
  ScoresGlobal,
  ScoresIndicator1,
  ScoresIndicator2,
  ScoresIndicator3,
  ScoresIndicator4,
  ScoresIndicator5,
} from './Content/Scores'

Font.register({
  family: 'Arial',
  src: '/fonts/arial.ttf',
})

Font.register({
  family: 'Arial Bold',
  src: '/fonts/arial-bold.ttf',
})

Font.register({
  family: 'Arial Italic',
  src: '/fonts/arial-italic.ttf',
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 50,
    fontSize: 11,
    fontFamily: 'Arial',
  },
  pageNumbers: {
    position: 'absolute',
    bottom: 30,
    right: 50,
  },
})

const WrapPage = ({ children }) => (
  <Page wrap size="A4" style={styles.page}>
    {children}
    <PageNumber />
  </Page>
)

export const MyDocument = props => {
  const {
    report: { company, startPeriod, endPeriod, publishDate },
    scores,
  } = data

  return (
    <Document {...props}>
      <Page size="A4" style={styles.page}>
        <Cover data={{ company, publishDate }} />
      </Page>
      <Page size="A4" style={styles.page}>
        <IndexPage />
      </Page>
      <WrapPage>
        <Introduction data={{ company, startPeriod, endPeriod }} />
      </WrapPage>
      <WrapPage>
        <ScoresGlobal data={{ scores, startPeriod, endPeriod }} />
        <PageNumber />
      </WrapPage>
      <WrapPage>
        <ScoresIndicator1
          data={{ scores: scores.indicator1, startPeriod, endPeriod }}
        />
      </WrapPage>
      <WrapPage>
        <ScoresIndicator2
          data={{ scores: scores.indicator2, startPeriod, endPeriod }}
        />
      </WrapPage>
      <WrapPage>
        <ScoresIndicator3
          data={{ scores: scores.indicator3, startPeriod, endPeriod }}
        />
      </WrapPage>
      <WrapPage>
        <ScoresIndicator4
          data={{ scores: scores.indicator4, startPeriod, endPeriod }}
        />
      </WrapPage>
      <WrapPage>
        <ScoresIndicator5
          data={{ scores: scores.indicator5, startPeriod, endPeriod }}
        />
      </WrapPage>
    </Document>
  )
}
