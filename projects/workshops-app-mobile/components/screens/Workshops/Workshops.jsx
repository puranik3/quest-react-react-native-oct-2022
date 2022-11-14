import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import WorkshopDetails from './WorkshopDetails';
import SessionsList from './SessionsList';
import AddSession from './AddSession';

import WorkshopContext from '../../../contexts/WorkshopContext';

const Tab = createBottomTabNavigator();

const Workshops = ( { navigation, route } ) => {
    const { workshopName, id } = route.params

    const value = {
        workshopName, // workshopName: workshopName
        id // id: id
    };
    
    return (
        <WorkshopContext.Provider value={value}>
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
        </WorkshopContext.Provider>
    );
}
 
export default Workshops;