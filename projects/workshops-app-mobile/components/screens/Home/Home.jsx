import { View, Text, Button } from 'react-native';

const Home = ( { route, navigation } ) => {
    return (
        <View>
            <Text>Home screen</Text>
            <Button
                title="View workshops list"
                onPress={() => navigation.navigate( 'workshops-list' )}
            />
        </View>
    );
}
 
export default Home;