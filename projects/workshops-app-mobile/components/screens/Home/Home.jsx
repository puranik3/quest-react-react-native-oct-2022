import { View, Text, Button, ImageBackground, TouchableHighlight, StyleSheet } from 'react-native';
import { BannerStyles, Utils } from '../../../styles/app';

const Home = ( { route, navigation } ) => {
    return (
        <View style={Utils.fullHeight}>
            <ImageBackground source={require( '../../../assets/empty-classroom.jpeg' )} style={styles.bg}>
                <Text style={[ BannerStyles.text, styles.text ]}>
                    Welcome to workshops app. You can find details of tech workshops happening nearby.
                </Text>
                <TouchableHighlight
                    underlayColor="rgba( 220, 220, 220, 1 )"
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate( 'workshops-list' )}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>View workshops list</Text>
                </TouchableHighlight>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: '100%'
    },
    text: {
        color: 'black',
        padding: 20
    },
    button: {
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        padding: 12,
        borderRadius: 5,
        margin: 20,
        backgroundColor: 'white'
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
    }
});
 
export default Home;