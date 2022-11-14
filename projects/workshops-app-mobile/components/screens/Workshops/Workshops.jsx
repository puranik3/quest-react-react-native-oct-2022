import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WorkshopDetails from './WorkshopDetails';
import SessionsList from './SessionsList';
import AddSession from './AddSession';

const Tab = createBottomTabNavigator();

const Workshops = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen
                name="workshop-basic-details"
                component={WorkshopDetails}
                options={{
                    tabBarIcon( { focused, color, size } ) {
                        return <Ionicons name="information-circle" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="sessions-list"
                component={SessionsList}
                options={{
                    tabBarIcon( { focused, color, size } ) {
                        return <Ionicons name="list-circle" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="add-session"
                component={AddSession}
                options={{
                    tabBarIcon( { focused, color, size } ) {
                        return <Ionicons name="add-circle" color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}
 
export default Workshops;