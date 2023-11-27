import React from 'react';
import { View, Text } from 'react-native';

const WeatherCard = ({ weatherData }) => {
  return (
    <View style={{marginTop:50}}>
      <Text  style={{ fontSize: 25 }} >City                 : {weatherData.name}</Text>
      <Text  style={{ fontSize: 25 }}>Temperature : {weatherData.main.temp}°C</Text>
      <Text  style={{ fontSize: 25 }}>Description    : {weatherData.weather[0].description}</Text>
    </View>
  );
};

export default WeatherCard;
