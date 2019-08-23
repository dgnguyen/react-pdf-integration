import React from 'react'
import { Cell, TR, CellText } from '../../Styled'

export default ({
  data: {
    value,
    detailsByAge,
    agesTranceLength,
    styleCellContainer,
    styleCellItem,
  },
}) => {
  const genders = ['female', 'male']
  return (
    <Cell style={styleCellContainer}>
      {detailsByAge.map((itemByAge, indexByAge) => (
        <TR key={`detailsByAgesTranceByGender_${value}_${indexByAge}`}>
          {genders.map((gender, index) => (
            <Cell
              key={`gender_${value}_${gender}`}
              style={
                indexByAge + 1 < agesTranceLength
                  ? {
                      ...styleCellItem,
                    }
                  : {
                      ...styleCellItem,
                      borderBottom: 'none',
                    }
              }
            >
              <CellText>{itemByAge[`${value}`][`${gender}`]}</CellText>
            </Cell>
          ))}
        </TR>
      ))}
    </Cell>
  )
}
