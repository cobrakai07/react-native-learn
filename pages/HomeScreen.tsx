import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native"
import { RootStackParamList } from "../src/RootNavigator";
import { StackNavigationProp } from "@react-navigation/stack";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList,'Home'>
const HomeScreen: React.FC=()=>{
    const navigation = useNavigation<HomeScreenNavigationProp>();
    return (<View style={styles.container}>
        <Text>Welcome Home</Text>
        <Button title="Go To Stack Navigation" onPress={()=>navigation.navigate("StackDemo")}></Button>
    </View>)
}

const styles = StyleSheet.create({
    container:{
       margin:44,
    }
});

export default HomeScreen;