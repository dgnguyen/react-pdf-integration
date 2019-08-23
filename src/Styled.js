import styled from '@react-pdf/styled-components'
import { Text, View } from '@react-pdf/renderer'

export const Corporate = styled.View``
export const ObjectFacture = styled.View`
  margin-bottom: 10px;
`

export const CorporateName = styled.Text`
  font-size: 15px;
  font-family: Arial Bold;
`

export const Client = styled.View`
  margin-left: 300px;
  width: 300px;
  right: 0;
`

export const Bold = styled.Text`
  font-family: Arial Bold;
`

export const Informations = styled.View`
  margin-top: 50px;
  margin-left: 300px;
`

export const Table = styled(View)`
  display: table;
  width: auto;
  border: 1px solid black;
  border-right: 0;
  border-bottom: 0;
  margin: 10px 0;
`

export const TR = styled(View)`
  margin: auto;
  flex-direction: row;
  min-height: 15px;
`

export const Cell = styled(View)`
  border: 1px solid black;
  border-left: 0;
  border-top: 0;
`

export const CellNoBottom = styled.View`
  border: 1px solid black;
  border-left: 0;
  border-bottom: 0;
  border-top: 0;
`

export const CellText = styled.Text`
  padding: 5px;
`

export const Total = styled.View`
  border: 1px solid black;
  margin-top: 5px;
  margin-left: 320px;
  padding-right: 10px;
  text-align: right;
`

export const PageNumber = styled.Text`
  text-align: right;
  margin-top: 5px;
  font-size: 9px;
`

// Style indicator

export const Title = styled(Text)`
  font-family: Arial Bold;
  font-size: 22px;
`

export const SubTitle = styled(Text)`
  font-size: 15px;
  margin: 10px 0;
`

export const FooterLogo = styled(View)`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 200px;
  padding: 2px;
`

export const TitleContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 10%;
`

export const ContentPage = styled(View)`
  width: 100%;
  height: 100%;
`

export const Title1 = styled(Text)`
  font-size: 16px;
  margin-bottom: 15px;
  font-family: Arial Bold;
`

export const Title2 = styled(Text)`
  font-size: 15px;
  margin: 10px 0 15px 0;
`

export const Title3 = styled(Text)`
  font-size: 14px;
  color: #251c0a;
  margin: 10px 0;
`

export const NormalText = styled(Text)`
  font-family: Arial;
  line-height: 1.2;
`

export const BoldText = styled(Text)`
  font-family: Arial Bold;
`
