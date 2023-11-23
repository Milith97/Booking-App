import { View, Text, StyleSheet, Image, StatusBar, TextInput,Pressable } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';


export default function SignIn({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#4B1400' barStyle="light-content"></StatusBar>

            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1800"
                    source={require('../assets/img/signinimg.jpg')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>

            <Animatable.View style={styles.MidleContent} animation="fadeInUpBig">
                <View style={styles.btncontainer}>
                    <View>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="  Email"
                            placeholderTextColor='#fff'
                        />
                    </View>
                    <View >
                        <TextInput
                            style={styles.TextInput}
                            placeholder="  Password"
                            placeholderTextColor='#fff'
                        />
                    </View>
                </View>
            </Animatable.View>

            <View style={styles.btncontainer}>
                <Pressable style={styles.buttonText} onPress={() => { navigation.navigate('HomePage') }} >
                    <Text style={styles.Text}>
                        <Text>Sign In</Text>
                    </Text>
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BDBDBD'
    },
    header: {
        flex: 3,
        alignItems: 'center',

    },
    MidleContent: {
        flex: 1,

    },
    btncontainer: {
        flex: 1,
        gap: 10,
        alignItems: 'center',
       
    },
    btnarea: {
        flex: 1,
        alignItems: 'center',

    },
    TextInput: {
        backgroundColor: '#3C4043',
        height: 50,
        width: 300,
        borderRadius: 5,
        fontSize: 20

    },
    buttonText: {
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#E5C123',
    },
    Text: {
        fontWeight: '600',
        fontSize: 20,
        color: "#000",

    },
});