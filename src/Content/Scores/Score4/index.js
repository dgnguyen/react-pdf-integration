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
  Div,
} from '../../../Styled'
import EmployeesList from './EmployeesList'
import { generateUID, getEmployeesListKey } from '../../../helpers'
import BorderTableWithNoCell from '../BorderTableWithNoCell'
import CalculationMethod4 from './CalculationMethod4'
import ScoresResumeTable from '../ScoresResumeTable'
import List, { Item } from '../../List'
import ScalePoints from '../ScalePoints'

export default ({ data: { scores, startPeriod, endPeriod } }) => {
  const scalePoints = [['100', '0'], ['15', '0']]
  const key = generateUID(0, 'indicator3')

  return (
    <ContentPage>
      <Title2>
        Indicateur 4 : pourcentage de salariés ayant bénéficié d'une
        augmentation dans l'année suivant leur retour de congé maternité (15
        points)
      </Title2>
      <ScoresResumeTable
        data={{
          title: 'Indicateur 4',
          startPeriod,
          endPeriod,
          overall: scores,
        }}
      />
      <Title3>Méthode de calcul</Title3>
      <CalculationMethod4 data={scores.details} />
      <View>
        <Title3>Description du calcul de l’indicateur</Title3>
        <Div>
          <NormalText>
            L’indicateur concerne donc les salariées qui sont revenus de congé
            maternité au cours de la période annuelle de référence.
          </NormalText>
        </Div>
        <Div>
          <NormalText>
            Parmi ces salariées, seules sont prises en compte celles ayant eu un
            congé maternité durant lequel des augmentations salariales
            (générales ou individuelles) ont eu lieu.
          </NormalText>
        </Div>
        <Div>
          <NormalText>
            Si plusieurs femmes sont parties en congé maternité sur l’année de
            référence, et qu’une seule d’entre elles n’a pas été augmentée alors
            qu’elle relève d’une catégorie où le salaire de base a été augmenté,
            la note de l’indicateur est de 0.
          </NormalText>
        </Div>
        <BorderTableWithNoCell>
          <BoldText>Calcul de l’indicateur</BoldText>
          <NormalText>
            Nombre de femmes dont le salaire de base a été augmenté à leur
            retour de congé maternité / total des salariées ayant bénéficié d’un
            congé maternité.
          </NormalText>
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
            employesListKeys={getEmployeesListKey('indicator4')}
            indicatorNumber={'indicator4'}
            style={{
              marginTop: 55,
            }}
          />
        )}
      </View>
    </ContentPage>
  )
}
