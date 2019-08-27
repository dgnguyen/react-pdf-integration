import React from 'react'
import { View } from '@react-pdf/renderer'
import {
  ContentPage,
  Title2,
  Title3,
  NormalText,
  BoldText,
  Title4,
  Div,
} from '../../../Styled'
import EmployeesList from '../Score4/EmployeesList'
import { generateUID, getEmployeesListKey } from '../../../helpers'
import BorderTableWithNoCell from '../BorderTableWithNoCell'
import CalculationMethod5 from '../Score5/CalculationMethod5'
import ScoresResumeTable from '../ScoresResumeTable'
import List, { Item } from '../../List'
import ScalePoints from '../ScalePoints'

export default ({ data: { scores, startPeriod, endPeriod } }) => {
  const scalePoints = [['100', '0'], ['15', '0']]
  const key = generateUID(0, 'indicator3')
  const list = [
    '4 ou 5 salariés de chaque sexe : l’entreprise obtient 10 points;',
    '2 ou 3 salariés de l’un ou l’autre sexe : l’entreprise obtient 5 points ; ',
    'Au plus 1 salarié de l’un ou l’autre sexe : l’entreprise n’obtient pas de points.',
  ]
  return (
    <ContentPage>
      <Title2>
        Indicateur 5 : nombre de salariés du sexe sous-représenté parmi les 10
        plus hautes rémunérations
      </Title2>
      <ScoresResumeTable
        data={{
          title: 'Indicateur 5',
          startPeriod,
          endPeriod,
          overall: scores,
        }}
      />
      <NormalText>
        Cet indicateur permet de déterminer la répartition du nombre d’hommes et
        de femmes parmi les 10 salariés ayant perçu les plus hautes
        rémunérations sur la période de référence.
      </NormalText>
      <Title3>Méthode de calcul</Title3>
      <CalculationMethod5 data={scores.details} />
      <View>
        <Title3>Description du calcul de l’indicateur</Title3>
        <BorderTableWithNoCell>
          <BoldText>Calcul de l’indicateur</BoldText>
          <NormalText>
            Si parmi les 10 salariés ayant les plus hautes rémunérations, on
            trouve :
          </NormalText>
          <List>
            {list.map((itemList, indexList) => (
              <Item num="- " key={`indicator5_list_${indexList}`}>
                {itemList}
              </Item>
            ))}
          </List>
        </BorderTableWithNoCell>
        <View>
          <Title4>Barème de points</Title4>
        </View>
        <Div>
          <ScalePoints data={{ key, item: scalePoints }} />
        </Div>
        {scores.employeeList && scores.employeeList.length > 0 && (
          <EmployeesList
            data={scores.employeeList}
            employesListKeys={getEmployeesListKey('indicator5')}
            indicatorNumber={'indicator5'}
          />
        )}
      </View>
    </ContentPage>
  )
}
