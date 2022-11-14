import { View, Text } from 'react-native';
import { useWorkshop } from '../../../contexts/WorkshopContext';

const WorkshopDetails = () => {
    const { workshopName, id } = useWorkshop();

    return (
        <View>
            <Text>{workshopName}</Text>
        </View>
    );
}
 
export default WorkshopDetails;