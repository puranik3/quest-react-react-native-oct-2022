import { View, Text, StyleSheet } from 'react-native';

const WorkshopsList = () => {
    return (
        <View style={[ styles.container ]}>
            <Text style={[ styles.heading ]}>List of workshops</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        paddingVertical: 16,
        fontSize: 24
    }
});

export default WorkshopsList;