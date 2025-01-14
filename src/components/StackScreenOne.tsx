import { Text, View, Button } from 'react-native';
import { StackParamsList } from './StackNavigationDemo';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

type StackScreenOneNavigationProp = StackNavigationProp<StackParamsList, 'StackOne'>;
type StackScreenOneRouteProp = RouteProp<StackParamsList, 'StackTwo'>;

const StackScreenOne: React.FC = () => {
  const navigation = useNavigation<StackScreenOneNavigationProp>();
  const route = useRoute<StackScreenOneRouteProp>();

  return (
    <View>
      <Text>Stack Screen One ...!</Text>
      <Button
        title="Go to Stack Two Page with Params"
        onPress={() => navigation.navigate('StackTwo', { itemId: 100 })}
      />
    </View>
  );
};

export default StackScreenOne;
