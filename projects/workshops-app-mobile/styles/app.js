import { StyleSheet } from "react-native"

const BannerStyles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 24,
        lineHeight: 36,
        textAlign: 'center'
    }
});

const ListHeaderStyles = StyleSheet.create({
    container: {
        ...BannerStyles.container,
        backgroundColor: '#aaa'
    },
    text: {
        ...BannerStyles.text,
        color: 'black'
    }
});

const ListItemStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: 80,
        padding: 20,
        marginVertical: 4,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    image: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    text: {
        flex: 1,
        flexDirection: 'column',
        fontSize: 20
    },
    mainTitle: {
        fontSize: 16,
        lineHeight: 30
    },
    subTitle: {
        fontSize: 12
    }
})

const Utils = StyleSheet.create({
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
});

export {
    BannerStyles,
    ListHeaderStyles,
    ListItemStyles,
    Utils
};