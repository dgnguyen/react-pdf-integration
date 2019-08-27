import React from 'react'
import { StyleSheet } from '@react-pdf/renderer'
import { Table, TR, Cell, CellText } from '../../../Styled'

const styles = StyleSheet.create({
  tr: {
    fontSize: 10,
    lineHeight: 1,
  },
  cellLightGrey: {
    backgroundColor: '#565656',
    fontFamily: 'Arial Bold',
  },
  cellDarkGrey: {
    backgroundColor: '#717171',
    fontFamily: 'Arial Bold',
  },
  cellBlack: {
    backgroundColor: 'black',
    fontFamily: 'Arial Bold',
  },
  white: {
    color: 'white',
  },
})

export default ({ data }) => {
  const categories = [
    '1. Ecart en rémunération',
    '2. Ecart d’augmentation individuelles',
    '3. Ecart de promotions',
    '4. Pourcentage de salariés augmentés au retour de congés maternité',
    '5. Nombre de salariés du sexe sous-représenté dans les 10 plus hautes rémunérations',
    'Total des indicateurs',
  ]

  return (
    <Table>
      <TR style={{ ...styles.tr, ...styles.cellLightGrey, ...styles.white }}>
        <Cell style={{ width: '70%' }}>
          <CellText>Catégorie socio professionnelle (CSP)</CellText>
        </Cell>
        <Cell style={{ width: '15%' }}>
          <CellText>Calculable</CellText>
        </Cell>
        <Cell style={{ width: '15%' }}>
          <CellText>Points</CellText>
        </Cell>
      </TR>
      {categories.map((item, i) => (
        <TR key={`scoresIndicator_${i}`} style={styles.tr}>
          <Cell style={{ width: '70%', ...styles.cellLightGrey }}>
            <CellText style={styles.white}>{item}</CellText>
          </Cell>
          <Cell style={{ width: '15%' }}>
            <CellText>{data[i].applicable ? 'Oui' : 'Non'}</CellText>
          </Cell>
          <Cell style={{ width: '15%' }}>
            <CellText>{data[i].score}</CellText>
          </Cell>
        </TR>
      ))}
      <TR style={{ ...styles.cellBlack, ...styles.white }}>
        <Cell style={{ width: '85%' }}>
          <CellText>INDEX (sur 100 points)</CellText>
        </Cell>
        <Cell style={{ width: '15%' }}>
          <CellText>{data[5].index}</CellText>
        </Cell>
      </TR>
    </Table>
  )
}
