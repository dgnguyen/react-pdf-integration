import React from 'react'
import { View } from '@react-pdf/renderer'
import List, { Item } from '../List'
import { ContentPage, Titre1, Titre2, NormalText, BoldText } from '../../Styled'

export const Introduction = ({
  data: {
    company: { name, siret },
    endPeriod,
    startPeriod,
  },
}) => {
  return (
    <ContentPage>
      <Titre1>Introduction</Titre1>
      <Titre2>Le contexte</Titre2>
      <NormalText>
        Le gouvernement a fait de la lutte pour l’égalité entre femme et homme
        une priorité. Cela passe également par une égalité salariale.
      </NormalText>
      <NormalText>
        Le législateur a mis à la charge des employeurs une obligation de
        résultat en matière d’égalité de rémunération entre les hommes et les
        femmes. Afin d’évaluer les défini des indicateurs permettant de mesurer
        les écarts de rémunération entre les femmes et les hommes Ils ont été
        intégrés dans la loi n°2018-771 du 5 septembre 2018 « pour la liberté de
        choisir son avenir professionnel ».
      </NormalText>
      <NormalText>
        Le présent document présente les indicateurs calculés pour la société
        {name} {siret} sur la période du {startPeriod} au {endPeriod} selon les
        règles décrites dans le présent document.
      </NormalText>
      <NormalText>
        Il a vocation à servir d’aide au remplissage des tableaux attendus par
        l’Administration sous réserve de validation des données.
      </NormalText>
      <Titre2>Les indicateurs</Titre2>
      <NormalText>
        5 critères ont été retenus pour les entreprises de plus de 250 salariés
        :
      </NormalText>
      <View style={{ width: '100%' }}>
        <List>
          <Item num={'1. '}>
            <BoldText>
              L’écart de rémunération avec des distinctions par âge et catégorie
              professionnelle (40 points)
            </BoldText>
            <NormalText>
              {' '}
              : une entreprise qui parvient à 0% d’écart de salaire entre les
              sexes à poste et âge comparable se verra attribuer 40 points. Ce
              critère est le plus important ; il prend en compte la rémunération
              moyenne en incluant les primes de performance et les avantages en
              nature. Seront exclues les primes liées aux conditions de travail
              (nuit, HS…) ainsi que les primes de départ et de précarité.{' '}
            </NormalText>
          </Item>
        </List>
        <List>
          <Item num={'2. '}>
            <BoldText>
              L’écart dans les augmentations annuelles (20 points)
            </BoldText>{' '}
            :{' '}
            <NormalText>
              l’entreprise qui parvient à augmenter autant d’hommes que de
              femmes, à 2% près ou à deux personnes près, se verra attribuer 20
              points.
            </NormalText>
          </Item>
        </List>
        <List>
          <Item num={'3. '}>
            <BoldText>L’écart dans les promotions (15 points)</BoldText> :{' '}
            <NormalText>
              celle qui favorise la parité en matière de promotion se verra
              créditer de 15 points si l’écart est inférieur à 2% ou à deux
              personnes près.
            </NormalText>
          </Item>
        </List>
        <List>
          <Item num={'4. '}>
            <BoldText>
              Les augmentations au retour de congé maternité (15 points){' '}
            </BoldText>{' '}
            :{' '}
            <NormalText>
              il suffira qu’une seule femme en retour de congé maternité n’ait
              pas eu d’augmentation pour qu’aucun point ne soit attribué.
            </NormalText>
          </Item>
        </List>
        <List>
          <Item num={'5.'}>
            <NormalText>
              La présence des femmes parmi les 10 plus gros salaires de
              l’entreprise (10 points) : si l’entreprise compte au moins 4
              femmes parmi les 10 plus hautes rémunérations, elle percevra 10
              points.
            </NormalText>
          </Item>
        </List>
      </View>
      <View>
        <NormalText>
          Toutefois, 4 critères ont été retenus pour les entreprises de 50 à 250
          salariés : les critères liés aux promotions et aux augmentations ont
          fusionné, pour que ne soit retenu que le critère des augmentations
          annuelles.
        </NormalText>
      </View>
      <View>
        <Titre2>Le score et ses impacts</Titre2>
        <NormalText>
          Une société qui respecterait une égalité parfaite entre les femmes et
          les hommes pourrait totaliser 100 points.
        </NormalText>
        <NormalText>
          Une société entre 75 et 100 points est considérée comme présentant une
          égalité de traitement entre les femmes et les hommes.
        </NormalText>
        <NormalText>
          Dès lors que le nombre de point obtenu est inférieur à 75, la société
          devra alors mettre en place un plan permettant d’atteindre ce seuil au
          bout de 3 ans.
        </NormalText>
        <NormalText>
          A défaut d’évolution satisfaisante de la progression des indicateurs,
          la DIRECCTE pourra prononcer une pénalité financière pouvant aller
          jusqu’à 1% de la masse salariale.
        </NormalText>
      </View>
      <View>
        <Titre2>L’alimentation du fichier</Titre2>
        <NormalText>
          Les indicateurs sont calculés à partir des données issues des DSN
          produites sur la période. Chaque DSN est archivée et les données en
          sont historisées afin de prendre en compte les Il s’agit des données
          relatives aux individus et aux contrats.{' '}
        </NormalText>
        <NormalText>
          Pour les données relatives à la paie, un fichier issu du logiciel de
          paie fournit l’ensemble des données complémentaires permettant de
          calculer les indicateurs.
        </NormalText>
      </View>
    </ContentPage>
  )
}
