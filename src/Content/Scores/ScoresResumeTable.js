import React from 'react'
import { Text, StyleSheet } from '@react-pdf/renderer'

import { Table, TR, Cell } from '../../Styled'

const styles = StyleSheet.create({
  table: {
    border: 'none',
    marginBottom: 30,
  },
  tr: {
    border: 'none',
  },
  cell: {
    border: 'none',
    padding: 15,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  score: {
    fontSize: 34,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Arial Bold',
  },
})

export default ({ data: { title, startPeriod, endPeriod, overall } }) => (
  <Table style={styles.table}>
    <TR style={styles.tr}>
      <Cell
        style={{
          ...styles.cell,
          backgroundColor: 'black',
          width: '60%',
          color: 'white',
        }}
      >
        <Text style={styles.title}>{title}</Text>
        <Text>
          Sur la péridode du {startPeriod} au {endPeriod}
        </Text>
      </Cell>
      <Cell
        style={{ ...styles.cell, backgroundColor: '#ededed', width: '40%' }}
      >
        <Text style={styles.score}>{overall.score} / 100</Text>
      </Cell>
    </TR>
  </Table>
)
