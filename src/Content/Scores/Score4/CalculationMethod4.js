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
  const maternityLeaveArray = [...toArray(data.MaternityLeave), data.deltaTotal]

  return (
    <Table style={styles.table}>
      <TR style={styles.trTitle}>
        <Cell width={25}></Cell>
        <Cell width={50}>
          <Cell width={100} borderRight={'none'} height={50}>
            <CellText>Nombre de retour de congés maternité</CellText>
          </Cell>
          <TR>
            <Cell width={50} borderBottom={'none'}>
              <CellText>Total</CellText>
            </Cell>
            <Cell width={50} borderRight={'none'} borderBottom={'none'}>
              <CellText>Augmentés</CellText>
            </Cell>
          </TR>
        </Cell>
        <Cell width={25}>
          <CellText>Pourcentage augmenté</CellText>
        </Cell>
      </TR>
      <TR>
        <Cell width={25}>
          <CellText>Ensemble des salariés</CellText>
        </Cell>
        {maternityLeaveArray &&
          maternityLeaveArray.length > 0 &&
          maternityLeaveArray.map((item, i) => (
            <Cell key={`indicator4_${item}_${i}`} width={25}>
              <CellText>{item}</CellText>
            </Cell>
          ))}
      </TR>
    </Table>
  )
}
