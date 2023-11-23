import React from 'react';
import { View } from 'react-native';
import WeatherCard from './WeatherCard';

const WeatherDetails = ({ route }) => {
  const { weatherData } = route.params;

  return (
    <View>
      <WeatherCard weatherData={weatherData} />
    </View>
  );
};

export default WeatherDetails;
