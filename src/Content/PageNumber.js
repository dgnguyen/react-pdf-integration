import React from 'react'
import { StyleSheet, Text } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  pageNumbers: {
    position: 'absolute',
    bottom: 30,
    right: 50,
  },
})

export default () => (
  <Text
    style={styles.pageNumbers}
    render={({ pageNumber }) => `${pageNumber}`}
    fixed
  />
)
