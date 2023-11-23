import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

export default function WelcomPage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center', width: 140 }}>
                <Animatable.Image
                    animation="bounceInLeft"
                    duraton="5"
                    source={require('../assets/img/welcomebus.png')}
                    style={styles.logo}
                    resizeMode="stretch"

                />
            </View>
            <View style={{ flex: 2, }}>
          
                <Animatable.Text animation="fadeInLeft"  duraton="2" style={{ fontSize: 50, color: '#000', marginLeft: '4%', fontWeight: '500' }} >We're </Animatable.Text>
                <Animatable.Text animation="fadeInLeft"  duraton="2" Text style={{ fontSize: 40, color: '#000', marginLeft: '4%', fontWeight: '400' }} >going </Animatable.Text>
                <Animatable.Text animation="fadeInLeft"  duraton="2" ext style={{ fontSize: 40, color: '#000', marginLeft: '4%', fontWeight: '400' }} >On a Trip </Animatable.Text>
            </View>
            <Animatable.View animation="slideInLeft" duraton="0.0005"  style={{ flex: 1, marginLeft: '65%', }}>
                <TouchableOpacity style={styles.roundButton} onPress={() => { navigation.navigate('SignIn') }}>
                    <Icon name="navigate-next" size={70} color="#000" />
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6D8E5',
    },
    roundButton: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#E5c123',
        shadowColor: '#144c22'

    },



})