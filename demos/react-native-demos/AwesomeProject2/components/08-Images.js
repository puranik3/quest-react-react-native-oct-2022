import { View, Image, StyleSheet } from 'react-native';

const Images = () => {
    return (
        <View>
            <Image source={require( '../assets/images/lion-king.jpg' )} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Images;