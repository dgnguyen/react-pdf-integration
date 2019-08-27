import React from 'react'
import { CellText, TR, Cell } from '../../Styled'
import DetailsByAgesTranceByGender from './DetailsByAgesTranceByGender'
import DetailsByAgesTrance from './DetailsByAgesTrance'

export default ({ title, detailsKey, data }) => {
  return (
    <TR>
      <Cell width={22}>
        <CellText>{title}</CellText>
      </Cell>
      {detailsKey.map((detailKey, index) => {
        const keysOfTotal = `TotalCalcul_${detailKey}_${index}`
        if (['annualSalary', 'headcount'].includes(detailKey)) {
          return (
            <DetailsByAgesTranceByGender
              key={keysOfTotal}
              data={{
                key: keysOfTotal,
                value: detailKey,
                detailsByAge: [data],
                agesTranceLength: 1,
                styleCellContainer: 15,
                styleCellItem: 50,
              }}
            />
          )
        }

        return (
          <DetailsByAgesTrance
            key={keysOfTotal}
            data={{
              key: keysOfTotal,
              value: detailKey,
              detailsByAge: [data],
              agesTranceLength: 1,
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
}
