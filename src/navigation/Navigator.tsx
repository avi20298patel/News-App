
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import Saved from '../screens/Saved';
import NewsOverview from '../screens/NewsOverview';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Home() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home Screen" component={Homescreen} />
            <Tab.Screen name="Saved" component={Saved} />
        </Tab.Navigator>
    )
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
                <Stack.Screen name="NewsOverview" component={NewsOverview} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}