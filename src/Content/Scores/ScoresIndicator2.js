import React from 'react'
import { View } from '@react-pdf/renderer'
import ScoresResumeTable from './ScoresResumeTable'
import BorderTableWithNoCell from './BorderTableWithNoCell'
import CalculationMethod2 from './CalculationMethod2'
import ScalePoints from './ScalePoints'
import { generateUID } from '../../helpers'
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
  const scalePoints = [['0,0', '2,1', '5,1', '10,1'], ['20', '10', '5', '0']]
  const key = generateUID(0, 'indicator2')
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
      <Title3>Description du calcul de l’indicateur</Title3>
      <View>
        <NormalText>
          Seuls les groupes comprenant{' '}
          <BoldText>au moins 10 femmes et 10 hommes</BoldText> sont pris en
          compte. Sachant que dans chaque groupe, le calcul porte sur le
          pourcentage d’hommes et de femmes ayant été augmenté au cours de la
          période de référence. Pour le calcul de cet indicateur, est considérée
          comme une augmentation la variation à la hausse de la rémunération
          entre le début et la fin de période.
        </NormalText>
      </View>

      <BorderTableWithNoCell>
        <View>
          <BoldText>Calcul de l’indicateur</BoldText>
          <ItalicText>Groupe par groupe</ItalicText>
          <NormalText>
            Pourcentage d’écart dans un groupe = Taux d’augmentation des femmes
            – taux d’augmentation des hommes
          </NormalText>
          <ItalicText>Pour la société</ItalicText>
          <NormalText>
            Modulation en fonction du poids de chaque groupe : Poids de chaque
            groupe = nombre de salariés composant le groupe / nombre total de
            salariés dans la société (pour les groupes valides) x Pourcentage
            d’écart dans un groupe
          </NormalText>
        </View>
      </BorderTableWithNoCell>
      <View>
        <Title4>Barème de points</Title4>
      </View>
      <ScalePoints data={{ key, item: scalePoints }} />
    </ContentPage>
  )
}
