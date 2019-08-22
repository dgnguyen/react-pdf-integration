import React from 'react'
import { Text, Image } from '@react-pdf/renderer'

import { ContentPage, Titre1 } from '../../Styled'

export default ({ data: { scores } }) => {
  return (
    <ContentPage>
      <Titre1>Scores</Titre1>
      <Titre2>Score global</Titre2>
    </ContentPage>
  )
}
