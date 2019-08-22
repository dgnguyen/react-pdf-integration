import React from 'react'

import { Page, Document, Font, StyleSheet } from '@react-pdf/renderer'

import data from './indicator.json'

import { Cover } from './Content/Cover'
import { IndexPage } from './Content/IndexPage'
import { Introduction } from './Content/Introduction'
import PageNumber from './Content/PageNumber'
import Scores from './Content/Scores'

Font.register({
  family: 'Arial',
  src: '/fonts/arial.ttf',
})

Font.register({
  family: 'Arial Bold',
  src: '/fonts/arial-bold.ttf',
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
  <Page size="A4" style={styles.page}>
    {children}
    <PageNumber />
  </Page>
)

export const MyDocument = props => {
  console.log('====================================')
  console.log('data', data)
  console.log('====================================')
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
      <WrapPage size="A4" wrap style={styles.page}>
        <Introduction data={{ company, startPeriod, endPeriod }} />
      </WrapPage>
      <WrapPage size="A4" wrap style={styles.page}>
        <Scores data={scores} />
        <PageNumber />
      </WrapPage>
    </Document>
  )
}
