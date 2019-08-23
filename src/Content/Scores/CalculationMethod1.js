import React from 'react'
import { toArray } from 'lodash'
import { StyleSheet } from '@react-pdf/renderer'
import DetailsByAgesTrance from './DetailsByAgesTrance'
import DetailsByAgesTranceByGender from './DetailsByAgesTranceByGender'
import { Table, TR, Cell, CellText } from '../../Styled'
import TotalCalcul from './TotalCalcul'

const styles = StyleSheet.create({
  table: {
    fontSize: 7,
  },
  trTitle: {
    textAlign: 'center',
  },
  cell8: {
    width: '8%',
  },
  cell9: {
    width: '9%',
  },
  cell10: {
    width: '10%',
  },
  cell14: {
    width: '14%',
  },
  cell15: {
    width: '15%',
  },
  cell50: {
    width: '50%',
  },
  cell100: {
    width: '100%',
    borderRight: 'none',
  },
  cellNoBottom: {
    borderBottom: 'none',
  },
})
export default ({ data }) => {
  console.log('====================================')
  console.log('data', data)
  console.log('====================================')
  const categories = [
    { name: 'Ouvriers', details: data.details.workers },
    { name: 'Employés', details: data.details.employees },
    {
      name: 'Techniciens et agents de maîtrise',
      details: data.details.technicians,
    },
    { name: 'Ingénieurs et cadres', details: data.details.engineers },
  ]
  const agesTrance = [
    'Moins de 30 ans',
    'De 40 à 39 ans',
    'De 40 à 49 ans',
    '50 ans et plus',
  ]
  const detailsKey = [
    'annualSalary',
    'delta',
    'deltaTreshold',
    'headcount',
    'validGroup',
    'validStaff',
    'deltaTotal',
  ]
  return (
    <Table style={styles.table}>
      <TR style={styles.trTitle}>
        <Cell style={styles.cell8}>
          <CellText>Catégorie socioprofessionnelle (CSP)</CellText>
        </Cell>
        <Cell style={styles.cell14}>
          <CellText>Trance d'âge</CellText>
        </Cell>
        <Cell style={styles.cell15}>
          <Cell style={{ ...styles.cell100, height: 48 }}>
            <CellText>Rémunération annuelle brute moyenne par EQTP</CellText>
          </Cell>
          <TR>
            <Cell style={{ ...styles.cell50, ...styles.cellNoBottom }}>
              <CellText>Femme</CellText>
            </Cell>
            <Cell style={{ ...styles.cell50, ...styles.cellNoBottom }}>
              <CellText>Homme</CellText>
            </Cell>
          </TR>
        </Cell>
        <Cell style={styles.cell10}>
          <CellText>Ecart de rémunération moyenne</CellText>
        </Cell>
        <Cell style={styles.cell10}>
          <CellText>Ecart après application du seuil de pretinence</CellText>
        </Cell>
        <Cell style={styles.cell15}>
          <Cell style={{ ...styles.cell100, height: 48 }}>
            <CellText>Nombre de salariées</CellText>
          </Cell>
          <TR>
            <Cell style={{ ...styles.cell50, ...styles.cellNoBottom }}>
              <CellText>Femme</CellText>
            </Cell>
            <Cell style={{ ...styles.cell50, ...styles.cellNoBottom }}>
              <CellText>Homme</CellText>
            </Cell>
          </TR>
        </Cell>
        <Cell style={styles.cell9}>
          <CellText>Validité du groupe (1=oui, 0=non)</CellText>
        </Cell>
        <Cell style={styles.cell9}>
          <CellText>Effectifs valides (groupes pris en compte)</CellText>
        </Cell>
        <Cell style={styles.cell10}>
          <CellText>Ecart pondéré</CellText>
        </Cell>
      </TR>
      {categories.map((categorie, i) => {
        const detailsByAge = toArray(categorie.details)
        return (
          <TR key={`categories_${categorie.name}`}>
            <Cell style={styles.cell8}>
              <CellText>{categorie.name}</CellText>
            </Cell>
            <Cell style={styles.cell14}>
              {agesTrance.map((itemAgeTrance, indexAgeTrance) => (
                <Cell
                  key={`itemAgeTrance_${itemAgeTrance}`}
                  style={
                    indexAgeTrance + 1 < agesTrance.length
                      ? styles.cell100
                      : { ...styles.cell100, ...styles.cellNoBottom }
                  }
                >
                  <CellText>{itemAgeTrance}</CellText>
                </Cell>
              ))}
            </Cell>
            {detailsKey.map((detailKey, index) => {
              if (['annualSalary', 'headcount'].includes(detailKey)) {
                return (
                  <DetailsByAgesTranceByGender
                    key={`detailKeyContainer_${detailKey}_${index}`}
                    data={{
                      value: detailKey,
                      detailsByAge,
                      agesTranceLength: agesTrance.length,
                      styleCellContainer: styles.cell15,
                      styleCellItem: styles.cell50,
                    }}
                  />
                )
              }
              return (
                <DetailsByAgesTrance
                  key={`detailKeyContainer_${detailKey}_${index}`}
                  data={{
                    value: detailKey,
                    detailsByAge,
                    agesTranceLength: agesTrance.length,
                    styleCellContainer: ['validGroup', 'validStaff'].includes(
                      detailKey,
                    )
                      ? styles.cell9
                      : styles.cell10,
                    styleCellItem: styles.cell100,
                  }}
                />
              )
            })}
          </TR>
          <TotalCalcul data={data.details.total} detailsKey={detailsKey} text= {'Ensemble des salariés'}/>
        )
      })}
    </Table>
  )
}
