import React from "react";
import styled from "@react-pdf/styled-components";

import {
  Page,
  Text,
  View,
  Document,
  Font,
  StyleSheet
} from "@react-pdf/renderer";

const Corporate = styled.View``;
const ObjectFacture = styled.View`
  margin-bottom: 10px;
`;

const CorporateName = styled.Text`
  font-size: 15px;
  font-family: Arial Bold;
`;

const Client = styled.View`
  margin-left: 300px;
  width: 300px;
  right: 0;
`;

const Bold = styled.Text`
  font-family: Arial Bold;
`;

const Informations = styled.View`
  margin-top: 50px;
  margin-left: 300px;
`;

const Table = styled.View`
  display: table;
  width: auto;
  border: 1px solid black;
  border-right: 0;
  border-bottom: 0;
`;

const TR = styled.View`
  margin: auto;
  flex-direction: row;
  min-height: 15px;
`;

const Cell = styled.View`
  border: 1px solid black;
  border-left: 0;
  border-top: 0;
`;

const CellText = styled.Text`
  margin: 2px auto;
  font-size: 10px;
`;

const Total = styled.View`
  border: 1px solid black;
  margin-top: 5px;
  margin-left: 320px;
  padding-right: 10px;
  text-align: right;
`;

const PageNumber = styled.Text`
  text-align: right;
  margin-top: 5px;
  font-size: 9px;
`;

Font.register({
  family: "Arial",
  src: "/fonts/arial.ttf"
});

Font.register({
  family: "Arial Bold",
  src: "/fonts/arial-bold.ttf"
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: 20,
    fontSize: 12,
    fontFamily: "Arial"
  }
});

export const MyDocument = () => (
  <Document>
    <Page size="A4" wrap style={styles.page}>
      <Corporate>
        <CorporateName>LIFEGUARD'S TAVERN</CorporateName>
        <Text>7 rue de l'Avenue</Text>
        <Text>FR 69100</Text>
        <Text>69100 VILLEURBANNE</Text>
        <Text>Email : toto@email.com</Text>
        <Text>Tel : 098754321</Text>
        <Text>Site web : www.test.com</Text>
      </Corporate>
      <Client>
        <CorporateName>411BIS</CorporateName>
        <Text>BD BERANGER</Text>
        <Text>F00 001 002 03</Text>
        <Text>999077 CONAKRY</Text>
        <Text>R.A.S. chinoise de Hong Kong</Text>
      </Client>
      <View>
        <Bold>Facture</Bold>
        <Text>Date : 01/02/2018</Text>
      </View>
      <Informations>
        <Bold>Vos informations</Bold>
        <Text>Référence : 19</Text>
      </Informations>
      <ObjectFacture>
        <Bold>facture dgiang</Bold>
      </ObjectFacture>

      <Table>
        <TR>
          <Cell style={{ width: "10%" }}>
            <CellText>Référence</CellText>
          </Cell>
          <Cell style={{ width: "50%" }}>
            <CellText>Désignation</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>P.U HT</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>Qté</CellText>
          </Cell>
          <Cell style={{ width: "20%" }}>
            <CellText>Montant</CellText>
          </Cell>
        </TR>
        <TR>
          <Cell style={{ width: "10%" }}>
            <CellText>1/2 journee</CellText>
          </Cell>
          <Cell style={{ width: "50%" }}>
            <CellText>FORFAIT 1/2 JOURNEE</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>210,000 €</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>1,000</CellText>
          </Cell>
          <Cell style={{ width: "20%" }}>
            <CellText>210,00 €</CellText>
          </Cell>
        </TR>
        <TR>
          <Cell style={{ width: "80%" }}>
            <CellText>Sous-total :</CellText>
          </Cell>
          <Cell style={{ width: "20%" }}>
            <CellText>210.00 EUR</CellText>
          </Cell>
        </TR>
        <TR>
          <Cell style={{ width: "100%" }} />
        </TR>
        <TR>
          <Cell style={{ width: "100%" }} />
        </TR>
        <TR style={{ minHeight: 300 }}>
          <Cell style={{ width: "10%" }}>
            <CellText>TRANS</CellText>
            <CellText>EMBAL</CellText>
          </Cell>
          <Cell style={{ width: "50%" }}>
            <CellText>Livraison</CellText>
            <CellText>Emballage</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>0,000 €</CellText>
            <CellText>0,000 €</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>1,000</CellText>
            <CellText>1,000</CellText>
          </Cell>
          <Cell style={{ width: "20%" }}>
            <CellText>0,00 €</CellText>
            <CellText>0,00 €</CellText>
          </Cell>
        </TR>
      </Table>
      <Total>
        <Text>Montant à reporter : 210,00 €</Text>
      </Total>
      <PageNumber>Page 1/2</PageNumber>
    </Page>
    <Page size="A4" wrap style={styles.page}>
      <Corporate>
        <CorporateName>LIFEGUARD'S TAVERN</CorporateName>
        <Text>7 rue de l'Avenue</Text>
        <Text>FR 69100</Text>
        <Text>69100 VILLEURBANNE</Text>
        <Text>Email : toto@email.com</Text>
        <Text>Tel : 098754321</Text>
        <Text>Site web : www.test.com</Text>
      </Corporate>
      <Client>
        <CorporateName>411BIS</CorporateName>
        <Text>BD BERANGER</Text>
        <Text>F00 001 002 03</Text>
        <Text>999077 CONAKRY</Text>
        <Text>R.A.S. chinoise de Hong Kong</Text>
      </Client>
      <View>
        <Bold>Facture</Bold>
        <Text>Date : 01/02/2018</Text>
      </View>
      <Informations>
        <Bold>Vos informations</Bold>
        <Text>Référence : 19</Text>
      </Informations>
      <ObjectFacture>
        <Bold>facture dgiang</Bold>
      </ObjectFacture>

      <Table>
        <TR>
          <Cell style={{ width: "10%" }}>
            <CellText>Référence</CellText>
          </Cell>
          <Cell style={{ width: "50%" }}>
            <CellText>Désignation</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>P.U HT</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>Qté</CellText>
          </Cell>
          <Cell style={{ width: "20%" }}>
            <CellText>Montant</CellText>
          </Cell>
        </TR>
        <TR>
          <Cell style={{ width: "10%" }}>
            <CellText>1/2 journee</CellText>
          </Cell>
          <Cell style={{ width: "50%" }}>
            <CellText>FORFAIT 1/2 JOURNEE</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>210,000 €</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>1,000</CellText>
          </Cell>
          <Cell style={{ width: "20%" }}>
            <CellText>210,00 €</CellText>
          </Cell>
        </TR>
        <TR>
          <Cell style={{ width: "80%" }}>
            <CellText>Sous-total :</CellText>
          </Cell>
          <Cell style={{ width: "20%" }}>
            <CellText>210.00 EUR</CellText>
          </Cell>
        </TR>
        <TR>
          <Cell style={{ width: "100%" }} />
        </TR>
        <TR>
          <Cell style={{ width: "100%" }} />
        </TR>
        <TR style={{ minHeight: 300 }}>
          <Cell style={{ width: "10%" }}>
            <CellText>TRANS</CellText>
            <CellText>EMBAL</CellText>
          </Cell>
          <Cell style={{ width: "50%" }}>
            <CellText>Livraison</CellText>
            <CellText>Emballage</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>0,000 €</CellText>
            <CellText>0,000 €</CellText>
          </Cell>
          <Cell style={{ width: "10%" }}>
            <CellText>1,000</CellText>
            <CellText>1,000</CellText>
          </Cell>
          <Cell style={{ width: "20%" }}>
            <CellText>0,00 €</CellText>
            <CellText>0,00 €</CellText>
          </Cell>
        </TR>
      </Table>
      <Total>
        <Text>Montant à reporter : 210,00 €</Text>
      </Total>
      <PageNumber>Page 2/2</PageNumber>
    </Page>
  </Document>
);
