import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name='Welcome'
                component={Welcome}
            />

            <Stack.Screen
                name='Login'
                component={Login}
            />

            <Stack.Screen
                name='Home'
                component={Home}
            />
        </Stack.Navigator>
    )

}