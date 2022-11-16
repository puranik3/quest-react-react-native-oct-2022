import AsyncStorage from '@react-native-async-storage/async-storage';

let count = 1;

module.exports = async function headless(taskData) {
    return new Promise(
        ( resolve, reject ) => {
            setTimeout(async () => {
                ++count;
                await AsyncStorage.setItem( 'count', count );
                headless();
                resolve( count );
            }, 5000);
        }
    );
};