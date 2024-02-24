import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ToCategoryScreen = ({ route, navigation }) => {
  const { categoryTitle } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category: {categoryTitle}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});

export default ToCategoryScreen;
