import React from 'react'
import { Table, TR, Cell } from '../../Styled'

export default ({ children }) => (
  <Table>
    <TR>
      <Cell width={100} style={{ padding: 15 }}>
        {children}
      </Cell>
    </TR>
  </Table>
)
