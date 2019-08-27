import React from 'react'
import { StyleSheet } from '@react-pdf/renderer'
import { toArray } from 'lodash'
import { Table, TR, Cell, CellText } from '../../Styled'
import { getCategories, generateUID } from '../../helpers'

const styles = StyleSheet.create({
  table: {
    fontSize: 7,
  },
  trTitle: {
    textAlign: 'center',
  },
})

export default ({ data }) => {
  const jobs = getCategories(data)

  return (
    <Table style={styles.table}>
      <TR style={styles.trTitle}>
        <Cell width={24}>
          <CellText>Catégorie socioprofessionnelle (CSP)</CellText>
        </Cell>
        <Cell width={20}>
          <Cell width={100} borderRight={'none'} height={50}>
            <CellText>Taux d’augmentation</CellText>
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
          <CellText>Ecart</CellText>
        </Cell>
        <Cell width={20}>
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
          <CellText>Groupe valide</CellText>
        </Cell>
        <Cell width={9}>
          <CellText>Effectif valide</CellText>
        </Cell>
        <Cell width={9}>
          <CellText>Ecart pondéré</CellText>
        </Cell>
      </TR>
      {jobs.map((job, indexJob) => {
        const detailsByCat = toArray(job.details)
        const keysOfJobs = Object.keys(job.details)
        return (
          <TR key={`${generateUID(indexJob, 'indicator2', job.name)}`}>
            <Cell width={24}>
              <CellText>{job.name}</CellText>
            </Cell>
            {detailsByCat.map((detail, indexCat) => {
              if (detail.female) {
                const genders = Object.keys(detail)
                return (
                  <Cell
                    key={`${generateUID(
                      indexCat,
                      'indicator2',
                      job.name,
                      keysOfJobs[indexCat],
                    )}`}
                    width={20}
                  >
                    <TR>
                      {genders.map((gender, indexGender) => (
                        <Cell
                          key={`${generateUID(
                            indexGender,
                            'indicator2',
                            job.name,
                            keysOfJobs[indexCat],
                            gender,
                          )}`}
                          width={50}
                          borderRight={gender === 'male' && 'none'}
                          borderBottom={'none'}
                        >
                          <CellText>{detail[`${gender}`]}</CellText>
                        </Cell>
                      ))}
                    </TR>
                  </Cell>
                )
              }
              return (
                <Cell
                  key={`${generateUID(
                    indexCat,
                    'indicator2',
                    job.name,
                    keysOfJobs[indexCat],
                  )}`}
                  width={9}
                >
                  <CellText>{detail}</CellText>
                </Cell>
              )
            })}
          </TR>
        )
      })}
    </Table>
  )
}
