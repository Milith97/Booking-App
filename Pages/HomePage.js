import { View, Text, StyleSheet, StatusBar, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export default function HomePage({ navigation }) {
  return (
     
    <View style={styles.container}>
      <StatusBar backgroundColor='#07131B' barStyle="light-content"></StatusBar>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={styles.image}
          source={require('../assets/img/211.png')}
          resizeMode={"cover"} 
        />
      </View>

      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Animatable.Text animation="bounceInLeft"Text style={{ fontSize: 50, color: '#E5c123', fontFamily: 'OpenSans_Condensed-Bold' }} >COMING SOON</Animatable.Text>

        <View style={{ marginTop: 50 }}>
          <CountDown
            until={1000000}
            onFinish={() => alert('finished')}
            onPress={() => alert('hello')}
            size={20}
          />
        </View>

        <View>
          <Text style={{ fontSize: 12, color: '#E5c123', }} >We are luanching soon please reload after days</Text>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <View  style={{padding:5 }}>
          <Text style={{ fontSize: 12, color: '#fff', }} >Stay in touch</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', gap: 5, opacity: 0.3, }}>
          <Icon name="facebook-official" size={30} color="#fff" ></Icon>
          <Icon name="google-plus-square" size={30} color="#fff"></Icon>
          <Icon name="linkedin-square" size={30} color="#fff" ></Icon>
        </View>

      </View >
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07131B'
  },
  header: {
    flex: 4,
    alignItems: 'center',

  },
  image: {
    width: 220,
    height:220,
    // borderColor: 'red',
    // borderWidth: 2,
    // borderRadius: 75,
    marginTop: 140
  },
})