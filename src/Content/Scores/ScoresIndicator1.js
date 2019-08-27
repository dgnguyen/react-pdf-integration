import React from 'react'
import { View } from '@react-pdf/renderer'
import ScoresResumeTable from './ScoresResumeTable'
import CalculationMethod1 from './CalculationMethod1'
import BorderTableWithNoCell from './BorderTableWithNoCell'
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
  const scalePoints = [
    [
      [
        '0,0',
        '0,1',
        '1,1',
        '2,1',
        '3,1',
        '4,1',
        '5,1',
        '6,1',
        '7,1',
        '8,1',
        '9,1',
      ],
      ['40', '39', '38', '37', '36', '35', '34', '33', '31', '29', '27'],
    ],
    [
      [
        '10,1',
        '11,1',
        '12,1',
        '13,1',
        '14,1',
        '15,1',
        '16,1',
        '17,1',
        '18,1',
        '19,1',
        '20,1',
      ],
      ['25', '23', '21', '19', '17', '14', '11', '8', '5', '2', '0'],
    ],
  ]

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
      </View>
      <View>
        <Title3>Méthode de calcul</Title3>
        <CalculationMethod1 data={scores} />
      </View>
      <View style={{ marginTop: 15 }}>
        <Title3>Description du calcul de l’indicateur</Title3>
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
      {scalePoints.map((item, i) => {
        const key = generateUID(i, 'indicator1')
        return <ScalePoints key={key} data={{ key, item }} />
      })}
    </ContentPage>
  )
}
