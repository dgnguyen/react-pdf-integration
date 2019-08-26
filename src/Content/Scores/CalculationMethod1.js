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
})
export default ({ data }) => {
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
        <Cell width={8}>
          <CellText>Catégorie socioprofessionnelle (CSP)</CellText>
        </Cell>
        <Cell width={14}>
          <CellText>Trance d'âge</CellText>
        </Cell>
        <Cell width={15}>
          <Cell width={100} borderRight={'none'} height={48}>
            <CellText>Rémunération annuelle brute moyenne par EQTP</CellText>
          </Cell>
          <TR>
            <Cell width={50} borderBottom={'none'}>
              <CellText>Femme</CellText>
            </Cell>
            <Cell width={50} borderBottom={'none'}>
              <CellText>Homme</CellText>
            </Cell>
          </TR>
        </Cell>
        <Cell width={10}>
          <CellText>Ecart de rémunération moyenne</CellText>
        </Cell>
        <Cell width={10}>
          <CellText>Ecart après application du seuil de pretinence</CellText>
        </Cell>
        <Cell width={15}>
          <Cell width={100} borderRight={'none'} height={48}>
            <CellText>Nombre de salariées</CellText>
          </Cell>
          <TR>
            <Cell width={50} borderBottom={'none'}>
              <CellText>Femme</CellText>
            </Cell>
            <Cell width={50} borderBottom={'none'}>
              <CellText>Homme</CellText>
            </Cell>
          </TR>
        </Cell>
        <Cell width={9}>
          <CellText>Validité du groupe (1=oui, 0=non)</CellText>
        </Cell>
        <Cell width={9}>
          <CellText>Effectifs valides (groupes pris en compte)</CellText>
        </Cell>
        <Cell width={10}>
          <CellText>Ecart pondéré</CellText>
        </Cell>
      </TR>
      {categories.map((categorie, i) => {
        const detailsByAge = toArray(categorie.details)
        return (
          <TR key={`categories_${categorie.name}`}>
            <Cell width={8}>
              <CellText>{categorie.name}</CellText>
            </Cell>
            <Cell width={14}>
              {agesTrance.map((itemAgeTrance, indexAgeTrance) => (
                <Cell
                  key={`itemAgeTrance_${itemAgeTrance}`}
                  width={100}
                  borderRight={'none'}
                  borderBottom={
                    indexAgeTrance + 1 === agesTrance.length && 'none'
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
                      styleCellContainer: 15,
                      styleCellItem: 50,
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
                      ? 9
                      : 10,
                    styleCellItem: 100,
                  }}
                />
              )
            })}
          </TR>
        )
      })}
      <TotalCalcul
        data={data.details.total}
        detailsKey={detailsKey}
        title={'Ensemble des salariés'}
      />
    </Table>
  )
}
