// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, LayoutAnimation } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState('');

  const getWeather = async () => {
    const lat="44.34"
    const lon="10.99"
    const apiKey = '861ed1c9dd397ad96a8e93a787afb9ce'; // Replace with your OpenWeatherMap API key
    const location = 'Colombo,sl'; // Colombo, Sri Lanka

    try {
      const apiurl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      const response = await axios.get(
      apiurl
      );
        console.log('====================================');
        console.log(response,'respo');
        console.log('====================================');
      // Handle the response, navigate to WeatherDetails, and pass data if needed
      navigation.navigate('WeatherDetails', { weatherData: response.data });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <View>
      <Text>Enter city:</Text>
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Get Weather" onPress={getWeather} />
    </View>
  );
};

export default HomeScreen;
