import React from 'react'
import { toArray } from 'lodash'
import { Div, Table, TR, Cell, CellText, Title4 } from '../../../Styled'

export default ({ data, employesListKeys, indicatorNumber, style = {} }) => {
  return (
    <Div style={style}>
      <Title4>Liste des salariées concernées</Title4>
      <Table>
        <TR>
          {employesListKeys.map((itemTH, indexTH) => (
            <Cell
              key={`${indicatorNumber}_${itemTH}_${indexTH}`}
              width={100 / employesListKeys.length}
            >
              <CellText>{itemTH}</CellText>
            </Cell>
          ))}
        </TR>
        {data.map((itemLine, indexLine) => {
          const employeesCategories = toArray(itemLine)
          return (
            <TR key={`${indicatorNumber}_${indexLine}`}>
              {employeesCategories.map((itemCell, indexCell) => (
                <Cell
                  width={100 / employeesCategories.length}
                  key={`${indicatorNumber}_${itemLine}_${itemLine}_${itemCell}_${indexCell}`}
                >
                  <CellText>{itemCell}</CellText>
                </Cell>
              ))}
            </TR>
          )
        })}
      </Table>
    </Div>
  )
}
