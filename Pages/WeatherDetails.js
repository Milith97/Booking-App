import React from 'react';
import { View,StyleSheet  } from 'react-native';
import WeatherCard from './WeatherCard';
import { Button } from 'react-native-paper';

const WeatherDetails = ({ route, navigation }) => {
    const { weatherData } = route.params;
    return (
        <View style={styles.container}>
            <View >
                <WeatherCard weatherData={weatherData} />
            </View>
            <View style={styles.btncontainer}>
                <Button  mode="contained" onPress={() => { navigation.navigate('ComingSoon') }}>
                   Next
                </Button>
            </View>
        </View>
    );
};

export default WeatherDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BDBDBD'
    },
    btncontainer: {
        flex: 1,
        gap: 10,
        alignItems: 'center',
       
    },
})