import React from 'react'
import { Cell, CellText } from '../../Styled'

export default ({
  data: {
    value,
    detailsByAge,
    agesTranceLength,
    styleCellContainer,
    styleCellItem,
  },
}) => {
  return (
    <Cell style={styleCellContainer}>
      {detailsByAge.map((itemByAge, indexByAge) => (
        <Cell
          key={`key_${value}_${indexByAge}`}
          style={
            indexByAge + 1 < agesTranceLength
              ? styleCellItem
              : { ...styleCellItem, borderBottom: 'none' }
          }
        >
          <CellText>{itemByAge[`${value}`]}</CellText>
        </Cell>
      ))}
    </Cell>
  )
}
