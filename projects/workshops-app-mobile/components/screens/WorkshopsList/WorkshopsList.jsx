import { View, Text, Button } from 'react-native';

const WorkshopsList = ( { route, navigation } ) => {
    return (
        <View>
            <Text>WorkshopsList screen</Text>
            <Button
                title="View workshop details"
                onPress={() => navigation.navigate( 'workshop-details' )}
            />
        </View>
    );
}
 
export default WorkshopsList;