import React from 'react'
import { Cell, CellText } from '../../Styled'

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
  return (
    <Cell width={styleCellContainer}>
      {detailsByAge.map((itemByAge, indexByAge) => (
        <Cell
          key={`${key}_${value}_${indexByAge}`}
          borderRight={'none'}
          borderBottom={indexByAge + 1 === agesTranceLength && 'none'}
          width={styleCellItem}
        >
          <CellText>{itemByAge[`${value}`]}</CellText>
        </Cell>
      ))}
    </Cell>
  )
}
