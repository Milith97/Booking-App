import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ShowApiData({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '40%' }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', marginLeft: '7%', color: '#000000', }}>Employeer</Text>
                <Text style={{ fontSize: 35, fontWeight: 'bold', marginLeft: '10%', color: '#000000', }}>Managment</Text>
            </View>
            <View style={styles.MidleContent} >
                <View style={{ flex: 1, flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                    <View style={{}}>
                        <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('HomePage') }} >
                            <Text style={styles.btnText}>ADD</Text>
                            <Text style={styles.btnText}>Employeer</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.btn1} onPress={() => { navigation.navigate('HomePage') }}>
                            <Text style={styles.btnText}>Delete</Text>
                            <Text style={styles.btnText}>Employeer</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>

                    <View style={{}}>
                        <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('HomePage') }}  >
                            <Text style={styles.btnText}>Update</Text>
                            <Text style={styles.btnText}>Employeer</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{}}>
                        <TouchableOpacity style={styles.btn2} onPress={() => { navigation.navigate('HomePage') }}  >
                            <Text style={styles.btnText}>Show</Text>
                            <Text style={styles.btnText}>Employeer</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ flex: 1, flexDirection: 'row',}}>

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC00',
    },
    MidleContent: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },

    btn1: {
        backgroundColor: '#2C130F',
        margin: '5%',
        borderRadius: 8,
        width: 160,
        height: 90,
        justifyContent: 'center',
        
    },

    btn2: {
        backgroundColor: '#2C130F',
        margin: '5%',
        borderRadius: 8,
        width: 160,
        height: 90,
        justifyContent: 'center',
    },

    btnText: {
        fontSize: 25,
        color: '#FAF9F6',
        textAlign: 'center',
        fontFamily: 'PTSerif_Bold',
        fontWeight:'500'
    },

})