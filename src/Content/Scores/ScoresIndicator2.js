import React from 'react'
import { View } from '@react-pdf/renderer'
import ScoresResumeTable from './ScoresResumeTable'
import BorderTableWithNoCell from './BorderTableWithNoCell'
import CalculationMethod2 from './CalculationMethod2'
import ScalePoints from './ScalePoints'
import {
  ContentPage,
  Title2,
  Title3,
  Title4,
  NormalText,
  BoldText,
  ItalicText,
} from '../../Styled'

export default ({ data: { scores, startPeriod, endPeriod } }) => {
  return (
    <ContentPage>
      <Title2>
        Indicateur 2 : Ecart d’augmentations individuelles (20 points)
      </Title2>
      <ScoresResumeTable
        data={{
          title: 'Indicateur 2',
          startPeriod,
          endPeriod,
          overall: scores,
        }}
      />
      <View>
        <NormalText>
          Cet indicateur permet de comparer le pourcentage de salariés augmentés
          parmi les hommes à celui des salariées augmentées parmi les femmes
          pour chacun des quatre groupes socioprofessionnels.
        </NormalText>
      </View>
      <View>
        <Title3>Méthode de calcul</Title3>
        <CalculationMethod2 data={scores} />
      </View>
    </ContentPage>
  )
}
