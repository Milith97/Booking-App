import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, Button, LayoutAnimation, StyleSheet, TouchableOpacity, Image, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../component/theme';

const HomePage = ({ navigation }) => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
  const [city, setCity] = useState('');
  const [websiteType, setWebsiteType] = useState("open-api");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({});
  const [weatherObject, setWeatherObject] = useState({});

  useEffect(() => {
    async function startFetching() {
      console.log('====================================');
      console.log(1);
      console.log('====================================');
      setWebsiteType("open-api")
      const weatherData = await getWeather()
      setWeather(weatherData)
    }
    async function startWeatherapi() {
      setWebsiteType("weather-api")
      const data = await getWeatherFromWeatherApi()
      setWeatherObject(data)
    }
    // startFetching()
    // startWeatherapi()
    return () => {

    }
  }, [])

  const getWeather = async () => {
    const lat = "6.927079"
    const lon = "79.861244"
    const apiKey = 'f2916755f50c84a1edea6e72eeb606b7';
    try {
      const apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      const response = await axios.get(
        apiurl
      );
      console.log(response.data, "weatherdata");
      return response.data
    } catch (error) {
      console.error('Error fetching weather data:', error.response?.data);
      console.error('Error fetching weather data:', error.response?.message);
    }
  };

  const getWeatherFromWeatherApi = async () => {
    const apiKey = "7fcc5fb67b8a4ffc9ce92618232311"
    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=6.927079,79.861244&days=1&aqi=no&alerts=no`
    try {
      const response = await axios.get(
        apiUrl
      );
      return response.data
    } catch (error) {
      console.log("catcherror", error.data, error.message);
    }
  }

  const handleLocation = (loc) => {
    console.log('loactions:,loc');
  }

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <StatusBar style="#003238" />
      <Image blurRadius={70} style={{ position: 'absolute', width: '100%', height: '100%', }}
        source={require('../assets/img/wbg.png')}
      />
      <SafeAreaView style={{ display: 'flex', flex: 1, }}>
        {/*-------------------------------------------- search section ----------------------------------------------*/}
        <View style={{ height: 50, margin: 10, position: 'relative', zindex: 50, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50, backgroundColor: showSearch ? theme.bgWhite(0.2) : 'transparent', }}
          >
            {
              showSearch ? (
                <TextInput
                  placeholder="Search city"
                  placeholderTextColor='#fff'
                  style={{
                    paddingLeft: 24,
                    height: 50,
                    paddingBottom: 10,
                    flex: 1,
                    fontSize: 20,
                    color: 'white',
                  }}
                />
              ) : null
            }
            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{
                borderRadius: 999,
                padding: 5,
                margin: 5,
                marginLeft: 'auto',
                backgroundColor: theme.bgWhite(0.3)
              }}
            >
              <Icon name="search" size={30} color="#fff" ></Icon>

            </TouchableOpacity>
          </View>
          {
            locations.length > 0 && showSearch ? (
              <View style={{
                position: 'absolute',
                width: '100%',
                backgroundColor: '#ccc',
                top: 55,
                borderRadius: 20,
              }}>
                {
                  locations.map((loc, index) => {
                    let showBorder = index + 1 != locations.length;
                    let borderClass = showBorder ? { borderBottomWidth: 2, borderBottomColor: '#ccc' } : {};
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => handleLocation(loc)}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          padding: 12,
                          paddingHorizontal: 16,
                          marginBottom: 4,
                          ...borderClass,
                        }}>
                        <FontAwesome6Icon name="location-dot" size={25} color="gray" ></FontAwesome6Icon>
                        <Text style={{ color: 'black', fontSize: 16, marginLeft: 8 }}>Colombo, Sri jayawardhanapura kotte</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            ) : null
          }
        </View>

        {/*---------------------------------------- Forecast section-------------------------------------------- */}
        <View style={{ marginLeft: 16, justifyContent: 'space-around', flex: 1, marginBottom: 2, }}>
          {/* Location */}
          <View style={{ justifyContent: 'center', }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Sri Lanka,
              <Text style={{ fontSize: 18, fontWeight: '600', color: '#ccc' }}>
                Kottawa,Sri Lanka
              </Text>
            </Text>
          </View>
          {/* Weather image*/}
          <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
            <Image
              source={require('../assets/img/weatherbkrem.png')}
              style={{ width: 180, height: 180 }}
            />
          </View>

          {/* degree celcius */}
          <View style={{ marginVertical: 8, }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 78, marginLeft: 5 }}>
              13&#176;
            </Text>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, letterSpacing: 2 }}>
              Partly cloudy
            </Text>
          </View>

          {/* other stats */}
          <View style={{ flexDirection: 'row', gap: 55, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <FontAwesome5Icon name="wind" size={25} color="gray" style={{ width: 24, height: 24, }}></FontAwesome5Icon>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>22km</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <FontAwesome6Icon name="droplet" size={25} color="gray" style={{ width: 24, height: 24, }}></FontAwesome6Icon>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>28%</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <FontAwesome6Icon name="cloud-sun" size={25} color="gray" style={{ width: 24, height: 24, }}></FontAwesome6Icon>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>9:23 AM</Text>
            </View>
          </View>
          {/* forecast for next days */}
          <View style={{ marginBottom: 2, paddingVertical: 6,gap:20, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
              <FontAwesome6Icon name="calendar-days" size={25} color="gray" style={{ width: 24, height: 24, }}></FontAwesome6Icon>
              <Text style={{ color: 'white', fontSize: 16 }}>Daily forecast</Text>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingHorizontal: 15 }}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  borderRadius: 20,
                  paddingVertical: 12,
                  marginRight: 4,
                  backgroundColor: theme.bgWhite(0.15),
                }}
              >
                <Image source={require('../assets/img/weatherbkrem.png')} style={{ width: 44, height: 44 }} />
                <Text style={{ color: 'white' }}>Monday</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                  13&#176;
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  borderRadius: 20,
                  paddingVertical: 12,
                  marginRight: 4,
                  backgroundColor: theme.bgWhite(0.15),
                }}
              >
                <Image source={require('../assets/img/weatherbkrem.png')} style={{ width: 44, height: 44 }} />
                <Text style={{ color: 'white' }}>Tuesday</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                  09&#176;
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  borderRadius: 20,
                  paddingVertical: 12,
                  marginRight: 4,
                  backgroundColor: theme.bgWhite(0.15),
                }}
              >
                <Image source={require('../assets/img/weatherbkrem.png')} style={{ width: 44, height: 44 }} />
                <Text style={{ color: 'white' }}>Wednesday</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                  18&#176;
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  borderRadius: 20,
                  paddingVertical: 12,
                  marginRight: 4,
                  backgroundColor: theme.bgWhite(0.15),
                }}
              >
                <Image source={require('../assets/img/weatherbkrem.png')} style={{ width: 44, height: 44 }} />
                <Text style={{ color: 'white' }}>Thursday</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                  21&#176;
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  borderRadius: 20,
                  paddingVertical: 12,
                  marginRight: 4,
                  backgroundColor: theme.bgWhite(0.15),
                }}
              >
                <Image source={require('../assets/img/weatherbkrem.png')} style={{ width: 44, height: 44 }} />
                <Text style={{ color: 'white' }}>Friday</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                  12&#176;
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  borderRadius: 20,
                  paddingVertical: 12,
                  marginRight: 4,
                  backgroundColor: theme.bgWhite(0.15),
                }}
              >
                <Image source={require('../assets/img/weatherbkrem.png')} style={{ width: 44, height: 44 }} />
                <Text style={{ color: 'white' }}>Sataday</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                  15&#176;
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 80,
                  borderRadius: 20,
                  paddingVertical: 12,
                  marginRight: 4,
                  backgroundColor: theme.bgWhite(0.15),
                }}
              >
                <Image source={require('../assets/img/weatherbkrem.png')} style={{ width: 44, height: 44 }} />
                <Text style={{ color: 'white' }}>Sunday</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                  22&#176;
                </Text>
              </View>
            </ScrollView>
          </View>


        </View>
      </SafeAreaView >

      {/* <Text style={{ fontSize: 30 }}>Hellooo,</Text>
      <Text style={{ fontSize: 30 }}>Colombo</Text>

      <View>
        {websiteType == "open-api" && weather && <View>
          <Text style={{ color: 'red' }}>OPEN API</Text>
          <Text style={{ fontSize: 30 }}>Hellooo,</Text>
          <Text style={{ fontSize: 30 }}>{weather.name}</Text>
          <View>
            <Text>main</Text>
          </View>
          <View>
            <Text>weather</Text>
          </View>
          <View>
            <Text>wind</Text>
          </View>
        </View>}
      </View>

      <View>
        {websiteType == "weather-api" && weatherObject &&
          <View>
            <Text style={{ color: 'red' }}>WEATHER API</Text>
            <Text style={{ fontSize: 30 }}>Hellooo,</Text>
            <Text style={{ fontSize: 30 }}>{weatherObject.location?.name}</Text>
            <View>
            </View>
          </View>
        }
      </View> */}

      {/* <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1000"
          source={require('../assets/img/weatherbackground.jpg')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', }}>

        <Text style={{ fontSize: 30 }}>Enter city:</Text>
        <TextInput
          style={{ fontSize: 25 }}
          placeholder="City"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Button title="Get Weather" onPress={getWeather} />
      </View> */}
    </View >
  );
};

export default HomePage;

const styles = StyleSheet.create({
 
})