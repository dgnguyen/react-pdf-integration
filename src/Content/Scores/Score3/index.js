import React from 'react'
import { View } from '@react-pdf/renderer'
import {
  ContentPage,
  Title2,
  Title3,
  NormalText,
  BoldText,
  ItalicText,
  Title4,
} from '../../../Styled'
import { generateUID } from '../../../helpers'
import BorderTableWithNoCell from '../BorderTableWithNoCell'
import CalculationMethod23 from '../Score2/CalculationMethod23'
import ScoresResumeTable from '../ScoresResumeTable'
import List, { Item } from '../../List'
import ScalePoints from '../ScalePoints'

export default ({ data: { scores, startPeriod, endPeriod } }) => {
  const list = [
    'Changement d’échelon',
    'Changement d’indice',
    'Changement de niveau',
    'Changement de coefficient',
  ]
  const scalePoints = [['0,0', '2,1', '5,1', '10,1'], ['15', '10', '5', '0']]
  const key = generateUID(0, 'indicator3')
  return (
    <ContentPage>
      <Title2>Indicateur 3 : écart du taux de promotions (15 points)</Title2>
      <ScoresResumeTable
        data={{
          title: 'Indicateur 3',
          startPeriod,
          endPeriod,
          overall: scores,
        }}
      />
      <View>
        <NormalText>
          Cet indicateur permet de comparer le pourcentage de salariés ayant
          bénéficié d’une promotion parmi les hommes à celui des salariées ayant
          bénéficié d’une promotion parmi les femmes pour chacun des quatre
          groupes socioprofessionnels.
        </NormalText>
      </View>
      <View>
        <Title3>Méthode de calcul</Title3>
        <CalculationMethod23 data={scores} firstCol={'Taux de promotion'} />
      </View>
      <View>
        <Title3>Description du calcul de l’indicateur</Title3>
        <NormalText>
          Pour le calcul de cet indicateur, la répartition des salariés
          s’effectue selon les 4 catégories socioprofessionnelles. Seuls les
          groupes comprenant au moins 10 femmes et 10 hommes sont pris en
          compte. Sachant que dans chaque groupe, le calcul porte sur le
          pourcentage d’hommes et de femmes ayant été augmenté au cours de la
          période de référence. Pour le calcul de cet indicateur, est considérée
          comme une promotion la modification d’une des données contractuelles
          suivante, entre le début et la fin de période :
        </NormalText>
      </View>
      <View>
        <List>
          {list.map((item, i) => (
            <Item key={`list_ScoresIndicator3_${i}`}>{item}</Item>
          ))}
        </List>
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
