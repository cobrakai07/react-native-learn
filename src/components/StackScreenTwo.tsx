import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackParamsList } from './StackNavigationDemo';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define navigation and route types
type StackScreenTwoNavigationProp = StackNavigationProp<StackParamsList, 'StackTwo'>;
type StackScreenTwoRouteProp = RouteProp<StackParamsList, 'StackTwo'>;

const StackScreenTwo: React.FC = () => {
  const navigation = useNavigation<StackScreenTwoNavigationProp>();
  const route = useRoute<StackScreenTwoRouteProp>();

  // Extract itemId from route params
  const { itemId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Screen Two ...!</Text>
      <Text style={styles.text}>Item ID: {itemId}</Text>
      <Button
        title="Go to Stack One Page"
        onPress={() => navigation.navigate('StackOne')}
      />
      <Text> Funny ...!</Text>
      <Button
      title='Stack button for conditional backing'
      onPress={()=> navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 20 },
});

export default StackScreenTwo;
