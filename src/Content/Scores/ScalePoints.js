import React from 'react'
import { Table, TR, Cell, CellText, BoldText } from '../../Styled'

export default ({ data: { item, key } }) => {
  const cellNumber = item[0].length

  return (
    <Table style={{ fontSize: 9 }}>
      {item.map((tr, indexTR) => (
        <TR key={`ScalePoints_${key}_${indexTR}`}>
          <Cell width={10}>
            <CellText>
              <BoldText>{indexTR === 0 ? 'Plancher' : 'Note'}</BoldText>
            </CellText>
          </Cell>
          {tr.map((item, indexCell) => (
            <Cell
              key={`ScalePoints_${key}_${item}_${indexCell}`}
              width={90 / cellNumber}
            >
              <CellText>{item}</CellText>
            </Cell>
          ))}
        </TR>
      ))}
    </Table>
  )
}
