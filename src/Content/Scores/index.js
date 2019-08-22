import React from 'react'
import { View } from '@react-pdf/renderer'

import ScoresResumeTable from './ScoresResumeTable'
import ScoresIndicatorsTable from './ScoresIndicatorsTable'
// import ScoresIndicator1table from './ScoresIndicator1table'
import List, { Item } from '../List'
import { ContentPage, NormalText, Titre1, Titre2, Titre3 } from '../../Styled'

export default ({
  data: {
    scores: {
      indicator1,
      indicator2,
      indicator3,
      indicator4,
      indicator5,
      overall,
    },
    startPeriod,
    endPeriod,
  },
}) => {
  const scoresIndicator = [
    { applicable: indicator1.applicable, score: indicator1.score },
    { applicable: indicator2.applicable, score: indicator2.score },
    { applicable: indicator3.applicable, score: indicator3.score },
    { applicable: indicator4.applicable, score: indicator4.score },
    { applicable: indicator5.applicable, score: indicator5.score },
    {
      applicable: overall.applicable,
      score: overall.score,
      index: overall.index,
    },
  ]
  return (
    <ContentPage>
      <Titre1>Scores</Titre1>
      <Titre2>Score global</Titre2>
      <ScoresResumeTable
        data={{
          title: 'Résultat',
          startPeriod,
          endPeriod,
          overall,
        }}
      />
      <View>
        <NormalText>
          Les populations prises en compte dans le calcul :{' '}
        </NormalText>
        <NormalText>
          Tous les salariés sont pris en compte sur la période de référence sont
          cependant exclus des effectifs de l’entreprise pour le calcul des
          indicateurs :
        </NormalText>
        <List>
          <Item>
            Les apprentis et titulaires d’un contrat de professionnalisation ;
          </Item>
          <Item>
            Les salariés mis à la disposition de l’entreprise par une entreprise
            extérieure ;
          </Item>
          <Item>Les salariés expatriés ;</Item>
          <Item>
            Les salariés absents plus de la moitié de la période de référence.
          </Item>
        </List>
      </View>
      <View>
        <NormalText>
          Les caractéristiques individuelles des salariés (âge, catégorie de
          poste) sont appréciées au dernier jour de la période de référence ou
          au dernier jour de présence du salarié dans l’entreprise.
        </NormalText>
        <NormalText>
          Pour chacun des indicateurs, dès lors que la population retenue est
          inférieure à 40% de la population globale, il n’est pas possible de
          calculer cet indicateur. Dans le cadre de la présente mise à
          disposition, les pigistes ne sont pas pris en compte pour le calcul
          des indicateurs.
        </NormalText>
      </View>
      <View>
        <Titre3>Méthode de calcul</Titre3>
        <NormalText>
          Vous trouverez, ci-dessous, la répartition des points acquis
          indicateur par indicateur :
        </NormalText>
        <ScoresIndicatorsTable data={scoresIndicator} />
        {/* <ScoresIndicator1table data={indicator1} /> */}
      </View>
    </ContentPage>
  )
}
