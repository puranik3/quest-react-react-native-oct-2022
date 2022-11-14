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
        height: 72,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 20
    },
    text: {
        flex: 1,
        flexDirection: 'column',
        fontSize: 16
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