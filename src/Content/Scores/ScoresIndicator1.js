import React from 'react'
import { View } from '@react-pdf/renderer'
import ScoresResumeTable from './ScoresResumeTable'
import CalculationMethod1 from './CalculationMethod1'
import { ContentPage, Title2, Title3, NormalText } from '../../Styled'

export default ({ data: { scores, startPeriod, endPeriod } }) => {
  return (
    <ContentPage>
      <Title2>
        Indicateur 1 : écart de rémunération entre homme et femme (40 points)
      </Title2>
      <ScoresResumeTable
        data={{
          title: 'Indicateur 1',
          startPeriod,
          endPeriod,
          overall: scores,
        }}
      />
      <View>
        <NormalText>
          Cet indicateur permet de calculer l’écart de rémunération à partir
          d’une moyenne, par tranche d’âge et par catégories de « postes
          équivalents ».
        </NormalText>
        <Title3>Méthode de calcul</Title3>
        <CalculationMethod1 data={scores} />
      </View>
    </ContentPage>
  )
}
