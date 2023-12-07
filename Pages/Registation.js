import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput, Pressable, Alert,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { Button } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Registration({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/admins/signin', {
        admin_nombre: name,
        admin_correo: email,
        admin_contrasena: password,
      });
      if (response.data.code === 201) {
        console.log('Registration successful');
       
          navigation.navigate('SignIn');
      } else {
        console.log('Registration failed');
        Alert.alert('Registration Failed', 'Please check your registration details and try again.');
      }
    } catch (error) {
      console.error('API Error:', error.message);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };
  
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor='#281400' barStyle="light-content"></StatusBar>

      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1800"
          source={require('../assets/img/registaion.jpg')}
          syle={styles.logo}
          resizeMode="stretch"
       />
      </View>

      <View style={styles.midleContent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            placeholderTextColor="#fff"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>

    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={handleRegister}>
         <Text style={styles.buttonText}>Register Now</Text>
      </Pressable>

      <View style={styles.bottomText}>
        <Text style={{ color: '#fff',fontWeight:'500',fontSize:15,}}>Already Have An Account?
          <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }}>
            <Text style={{ color: '#E5C123',fontWeight:'500',fontSize:18 
              }}>Login here</Text>
            </TouchableOpacity>
            </Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', gap: 5, opacity: 0.3, }}>
          <Icon name="facebook-official" size={30} color="#fff" ></Icon>
          <Icon name="google-plus-square" size={30} color="#fff"></Icon>
          <Icon name="linkedin-square" size={30} color="#fff" ></Icon>
        </View> 
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
      flex: 2,
      alignItems: 'center',
    },
  midleContent: {
      flex: 2,
      justifyContent:'center',
      alignItems: 'center',
    },
  inputContainer: {
    flex: 1,
    width: '80%',
    marginTop:20,
  },
  textInput: {
    backgroundColor: '#3C4043',
    height: 50,
    marginBottom: 15,
    paddingLeft: 15,
    borderRadius: 5,
    fontSize: 20,
    color: '#fff',
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
  },
  button: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E5C123',
    marginTop:45,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
  },
  Text: {
    fontWeight: '600',
    fontSize: 20,
    color: "#000",
    },
  bottomText:{
    marginTop:10,
      flex:1,
      flexDirection: 'row'
    }
});


// import React from 'react'
// import { View, Text, StyleSheet, StatusBar, TextInput, Pressable, TouchableOpacity } from 'react-native'
// import { Button } from 'react-native-paper';
// import * as Animatable from 'react-native-animatable';
// import Icon from 'react-native-vector-icons/FontAwesome';

// export default function Registation({ navigation }) {
//     return (
//         <View style={styles.container}>
//             <StatusBar backgroundColor='#281400' barStyle="light-content"></StatusBar>

//             <View style={styles.header}>
//                 <Animatable.Image
//                     animation="bounceIn"
//                     duraton="1800"
//                     source={require('../assets/img/registaion.jpg')}
//                     style={styles.logo}
//                     resizeMode="stretch"
//                 />
//             </View>

//             <Animatable.View style={styles.MidleContent} animation="fadeInUpBig">
//                 <View style={styles.inputcontainer}>
//                     <View>
//                         <TextInput
//                             style={styles.TextInput}
//                             placeholder="  Name"
//                             placeholderTextColor='#fff'
//                         />
//                     </View>
//                     {/* <View >
//                         <TextInput
//                             style={styles.TextInput}
//                             placeholder="  Nic"
//                             placeholderTextColor='#fff'
//                         />
//                     </View> */}
//                     <View >
//                         <TextInput
//                             style={styles.TextInput}
//                             placeholder="  Email"
//                             placeholderTextColor='#fff'
//                         />
//                     </View>
//                     <View >
//                         <TextInput
//                             style={styles.TextInput}
//                             placeholder="  Password"
//                             placeholderTextColor='#fff'
//                         />
//                     </View>
//                     {/* <View >
//                         <TextInput
//                             style={styles.TextInput}
//                             placeholder="  Conform Password"
//                             placeholderTextColor='#fff'
//                         />
//                     </View> */}
//                 </View>
//             </Animatable.View>

//             <View style={styles.btnarea}>
//                 <Pressable style={styles.buttonText} onPress={() => { navigation.navigate('SignIn') }} >
//                     <Text style={styles.Text}>
//                         <Text>Register Now</Text>
//                     </Text>
//                 </Pressable>

//                 <View style={styles.bottomText}>
//                     <Text style={{ color: '#fff' }}>Already Have An Account?
//                         <TouchableOpacity onPress={() => { navigation.navigate('SignIn') }}>
//                             <Text style={{ color: '#E5C123',
//                         }}>Login here</Text>
//                         </TouchableOpacity>
//                     </Text>
//                 </View>

//                 {/* <View style={{ flex: 1, flexDirection: 'row', gap: 5, opacity: 0.3, }}>
//                     <Icon name="facebook-official" size={30} color="#fff" ></Icon>
//                     <Icon name="google-plus-square" size={30} color="#fff"></Icon>
//                     <Icon name="linkedin-square" size={30} color="#fff" ></Icon>
//                 </View> */}
//             </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#BDBDBD'
//     },
//     header: {
//         flex: 2,
//         alignItems: 'center',

//     },
//     MidleContent: {
//         flex: 3.5,
        
//     },
//     inputcontainer: {
//         flex: 1,
//         gap: 10,
//         alignItems: 'center',
//         marginTop:20,

//     },
//     btnarea: {
//         flex: 1.5,
//         alignItems: 'center',
        
//     },
//     TextInput: {
//         backgroundColor: '#3C4043',
//         height: 50,
//         width: 300,
//         borderRadius: 5,
//         fontSize: 20
//     },
//     buttonText: {
//         width: 200,
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//         backgroundColor: '#E5C123',
//     },
//     Text: {
//         fontWeight: '600',
//         fontSize: 20,
//         color: "#000",
//     },
//     bottomText:{
//         marginTop:10,
//         flex:1,
//         flexDirection: 'row'
//     }
// })