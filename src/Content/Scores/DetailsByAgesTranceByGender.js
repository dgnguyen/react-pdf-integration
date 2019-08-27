import React from 'react'
import { Cell, TR, CellText } from '../../Styled'

export default ({
  data: {
    key,
    value,
    detailsByAge,
    agesTranceLength,
    styleCellContainer,
    styleCellItem,
  },
}) => {
  const genders = ['female', 'male']

  return (
    <Cell width={styleCellContainer}>
      {detailsByAge.map((itemByAge, indexByAge) => (
        <TR key={`${key}_${value}_${indexByAge}`}>
          {genders.map((gender, index) => (
            <Cell
              key={`${key}_${value}_${gender}_${index}`}
              width={styleCellItem}
              borderBottom={indexByAge + 1 === agesTranceLength && 'none'}
            >
              <CellText>{itemByAge[`${value}`][`${gender}`]}</CellText>
            </Cell>
          ))}
        </TR>
      ))}
    </Cell>
  )
}
