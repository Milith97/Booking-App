import React from 'react';
import { View, Text } from 'react-native';

const WeatherCard = ({ weatherData }) => {
  return (
    <View>
      <Text>City: {weatherData.name}</Text>
      <Text>Temperature: {weatherData.main.temp}°C</Text>
      <Text>Description: {weatherData.weather[0].description}</Text>
    </View>
  );
};

export default WeatherCard;
