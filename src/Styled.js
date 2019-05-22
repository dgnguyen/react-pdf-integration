import styled from "@react-pdf/styled-components";

export const Corporate = styled.View``;
export const ObjectFacture = styled.View`
  margin-bottom: 10px;
`;

export const CorporateName = styled.Text`
  font-size: 15px;
  font-family: Arial Bold;
`;

export const Client = styled.View`
  margin-left: 300px;
  width: 300px;
  right: 0;
`;

export const Bold = styled.Text`
  font-family: Arial Bold;
`;

export const Informations = styled.View`
  margin-top: 50px;
  margin-left: 300px;
`;

export const Table = styled.View`
  display: table;
  width: auto;
  border: 1px solid black;
  border-right: 0;
  border-bottom: 0;
`;

export const TR = styled.View`
  margin: auto;
  flex-direction: row;
  min-height: 15px;
`;

export const Cell = styled.View`
  border: 1px solid black;
  border-left: 0;
  border-top: 0;
`;

export const CellNoBottom = styled.View`
  border: 1px solid black;
  border-left: 0;
  border-bottom: 0;
  border-top: 0;
`;

export const CellText = styled.Text`
  margin: 2px auto;
  font-size: 10px;
`;

export const Total = styled.View`
  border: 1px solid black;
  margin-top: 5px;
  margin-left: 320px;
  padding-right: 10px;
  text-align: right;
`;

export const PageNumber = styled.Text`
  text-align: right;
  margin-top: 5px;
  font-size: 9px;
`;
