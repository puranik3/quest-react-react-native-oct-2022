import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './components/screens/Home/Home';
import WorkshopsList from './components/screens/WorkshopsList/WorkshopsList';
import Workshops from './components/screens/Workshops/Workshops';

const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName="home">
                    <Stack.Screen
                        name="home"
                        component={Home}
                    />
                    <Stack.Screen
                        name="workshops-list"
                        component={WorkshopsList}
                    />
                    <Stack.Screen
                        name="workshop-details"
                        component={Workshops}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
