import { View, Image, StyleSheet } from 'react-native';

const Images = () => {
    return (
        <View style={[ styles.container ]}>
            <Image
                source={require( '../assets/images/lion-king.jpg' )}
                style={[ styles.image ]}
            />
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png' }}
                style={[ styles.imageOnline ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // full height
        width: '100%'
    },
    image: { // NOTE: image shall take up its inherent width and height if we do not set explicitly
        // width: 160,
        // height: 160
        width: '100%',
        // resizeMode: 'contain', // entire image is visible
        // resizeMode: 'cover' // covers up the entire width
        resizeMode: 'stretch' // covers up the entire width and height - can cause image distortion (aspect ratio changes)
    },
    imageOnline: { // images from internet need explicit (hard-coded) width and height
        width: 294,
        height: 260
    }
});

export default Images;