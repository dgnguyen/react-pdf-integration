import React from 'react'
import { v4 } from 'uuid'
import { Table, TR, Cell, CellText } from '../../Styled'

export default ({ data }) => {
  const cellNumber = data[0].length

  return (
    <Table style={{ fontSize: 9 }}>
      {data.map((tr, indexTR) => (
        <TR key={`${v4()}_indexTR`}>
          <Cell width={10}>
            <CellText>{indexTR === 0 ? 'Plancher' : 'Note'}</CellText>
          </Cell>
          {tr.map((item, indexCell) => (
            <Cell key={`${v4()}_indexCell`} width={90 / cellNumber}>
              <CellText>{item}</CellText>
            </Cell>
          ))}
        </TR>
      ))}
    </Table>
  )
}
