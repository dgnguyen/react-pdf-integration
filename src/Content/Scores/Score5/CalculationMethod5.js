import React from 'react'
import { StyleSheet } from '@react-pdf/renderer'
import { toArray } from 'lodash'
import { Table, TR, Cell, CellText } from '../../../Styled'

const styles = StyleSheet.create({
  table: {
    fontSize: 7,
  },
  trTitle: {
    textAlign: 'center',
  },
})

export default ({ data, firstCol }) => {
  const top10Array = [...toArray(data.top10), data.deltaTotal]

  return (
    <Table style={styles.table}>
      <TR style={styles.trTitle}>
        <Cell width={20}></Cell>
        <Cell width={60}>
          <Cell width={100} borderRight={'none'} height={50}>
            <CellText>
              Nombre de salariés dans les 10 plus hautes rémunérations
            </CellText>
          </Cell>
          <TR>
            <Cell width={Math.round(100 / 3)} borderBottom={'none'}>
              <CellText>Femmes</CellText>
            </Cell>
            <Cell width={Math.round(100 / 3)} borderBottom={'none'}>
              <CellText>Hommes</CellText>
            </Cell>
            <Cell
              width={Math.round(100 / 3)}
              borderRight={'none'}
              borderBottom={'none'}
            >
              <CellText>Ensemble</CellText>
            </Cell>
          </TR>
        </Cell>
        <Cell width={20}>
          <CellText>Nombre de salariés du sexe sous-représenté</CellText>
        </Cell>
      </TR>
      <TR>
        <Cell width={20}>
          <CellText>Ensemble des salariés</CellText>
        </Cell>
        {top10Array &&
          top10Array.length > 0 &&
          top10Array.map((item, i) => (
            <Cell key={`indicator5_${item}_${i}`} width={20}>
              <CellText>{item}</CellText>
            </Cell>
          ))}
      </TR>
    </Table>
  )
}
