import React from 'react'
import { Text, Image } from '@react-pdf/renderer'

import {
  ContentPage,
  Title,
  SubTitle,
  TitleContainer,
  FooterLogo,
} from '../Styled'

export const Cover = ({
  data: {
    company: { name },
    publishDate,
  },
}) => {
  return (
    <ContentPage>
      <TitleContainer>
        <Title>Indicateurs égalité Femmes/Hommes</Title>
        <SubTitle>{name}</SubTitle>
        <Text>{publishDate}</Text>
      </TitleContainer>
      <FooterLogo>
        <Image src="/images/logo_inextenso.png" />
      </FooterLogo>
    </ContentPage>
  )
}
