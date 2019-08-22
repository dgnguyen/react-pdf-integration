import React from 'react'

import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    margin: '2px 0 5px 20px',
  },
  bulletPoint: {
    width: 10,
    fontSize: 11,
  },
  itemContent: {
    flex: 1,
    fontSize: 11,
    fontFamily: 'Arial',
  },
})

const List = ({ children }) => children

export const Item = ({ children, num = null }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>{num || '•'}</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
)

export default List
