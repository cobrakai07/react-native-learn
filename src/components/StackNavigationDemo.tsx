import {createStackNavigator} from '@react-navigation/stack';
import StackScreenOne from './StackScreenOne';
import StackScreenTwo from './StackScreenTwo';
export type StackParamsList = {
  StackOne: undefined;
  StackTwo: {
    itemId: number;
  };
};
const Stack = createStackNavigator<StackParamsList>();
const StackNavigationDemo: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Its Stack Screen One'}}
        name="StackOne"
        component={StackScreenOne}
      />
      <Stack.Screen
        options={({route}) => ({
          title: `Item ${route.params.itemId}`,
        //   title: route.params ? `Item ${route.params.itemId}` : 'Item',
        })}
        name="StackTwo"
        component={StackScreenTwo}
      />
    </Stack.Navigator>
  );
};
export default StackNavigationDemo;
