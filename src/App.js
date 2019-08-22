import React from 'react'
import { PDFViewer, StyleSheet } from '@react-pdf/renderer'
import './App.css'

import { MyDocument } from './MyDocument'

const styles = StyleSheet.create({
  page: { width: '100%', height: '600px' },
  section: { color: 'white', textAlign: 'center', margin: 30 },
})

function App() {
  return (
    <div className="App">
      <PDFViewer style={styles.page}>
        <MyDocument
          title="Indicator"
          author="Indicator"
          subject="Indicator"
          creator="Indicator"
        />
      </PDFViewer>
      <br />
      {/* <PDFDownloadLink document={<MyDocument />} fileName="table.pdf">
        {({ blob, url, loading, error }) => {
          return loading ? "Loading document..." : "Download now!";
        }}
      </PDFDownloadLink> */}
    </div>
  )
}

export default App
