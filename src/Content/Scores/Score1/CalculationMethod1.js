import React from 'react'
import { toArray } from 'lodash'
import { StyleSheet } from '@react-pdf/renderer'
import DetailsByAgesTrance from '../DetailsByAgesTrance'
import DetailsByAgesTranceByGender from '../DetailsByAgesTranceByGender'
import { Table, TR, Cell, CellText } from '../../../Styled'
import TotalCalcul from '../TotalCalcul'
import { getDetailsKey, generateUID } from '../../../helpers'

const styles = StyleSheet.create({
  table: {
    fontSize: 7,
  },
  trTitle: {
    textAlign: 'center',
  },
})
export default ({ data }) => {
  const jobs = [
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

  const detailsKey = getDetailsKey('indicator1')

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
          <Cell width={100} borderRight={'none'} height={50}>
            <CellText>Rémunération annuelle brute moyenne par EQTP</CellText>
          </Cell>
          <TR>
            <Cell width={50} borderBottom={'none'}>
              <CellText>Femme</CellText>
            </Cell>
            <Cell width={50} borderRight={'none'} borderBottom={'none'}>
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
          <Cell width={100} borderRight={'none'} height={50}>
            <CellText>Nombre de salariées</CellText>
          </Cell>
          <TR>
            <Cell width={50} borderBottom={'none'}>
              <CellText>Femme</CellText>
            </Cell>
            <Cell width={50} borderRight={'none'} borderBottom={'none'}>
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
      {jobs.map((job, indexJob) => {
        const detailsByAge = toArray(job.details)
        return (
          <TR key={`${generateUID(indexJob, 'indicator1', job.name)}`}>
            <Cell width={8}>
              <CellText>{job.name}</CellText>
            </Cell>
            <Cell width={14}>
              {agesTrance.map((itemAgeTrance, indexAgeTrance) => (
                <Cell
                  key={`${generateUID(
                    indexAgeTrance,
                    'indicator1',
                    job.name,
                    itemAgeTrance,
                  )}`}
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
              const keysOfDetails = generateUID(
                index,
                'indicator1',
                job.name,
                detailKey,
              )
              if (['annualSalary', 'headcount'].includes(detailKey)) {
                return (
                  <DetailsByAgesTranceByGender
                    key={keysOfDetails}
                    data={{
                      key: keysOfDetails,
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
                  key={keysOfDetails}
                  data={{
                    key: keysOfDetails,
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
