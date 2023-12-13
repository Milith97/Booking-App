// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import * as Keychain from 'react-native-keychain';
// import { AuthContext } from './src/AuthContext'; 
// import HomePage from './Pages/HomePage';
// import SignIn from './Pages/SignIn';
// import LoadingScreen from './Pages/LoadingScreen';

// const Stack = createStackNavigator();

// export default function App() {
//   const [state, dispatch] = React.useReducer(
//     (prevState, action) => {
//       switch (action.type) {
//         case 'RESTORE_TOKEN':
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case 'SIGN_IN':
//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//           };
//       }
//     },
//     {
//       isLoading: true,
//       isSignout: false,
//       userToken: null,
//     }
//   );

//   React.useEffect(() => {
//     const bootstrapAsync = async () => {
//       try {
//         const credentials = await Keychain.getGenericPassword();
//         const userToken = credentials?.password || null;
//         dispatch({ type: 'RESTORE_TOKEN', token: userToken });
//       } catch (e) {
//         console.error('Error restoring token:', e);
//       }
//     };

//     bootstrapAsync();
//   }, []);

//   const authContext = React.useMemo(
//     () => ({
//       signIn: async (token) => {
//         try {
//           await Keychain.setGenericPassword('userToken', token);
//           dispatch({ type: 'SIGN_IN', token });
//         } catch (error) {
//           console.error('Error storing token:', error);
//         }
//       },
//       signOut: async () => {
//         try {
//           await Keychain.resetGenericPassword();
//           dispatch({ type: 'SIGN_OUT' });
//         } catch (error) {
//           console.error('Error removing token:', error);
//         }
//       },
//     }),
//     []
//   );

//   return (
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {state.isLoading ? (
//             <Stack.Screen options={{ headerShown: false }} name="Loading" component={LoadingScreen} />
//           ) : state.userToken === null ? (
//             <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
//           ) : (
//             <Stack.Screen options={{ headerShown: false }} name="Home" component={HomePage} />
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }



import React, { useEffect, } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomPage from './Pages/WelcomPage';
import HomePage from './Pages/HomePage';
import SignIn from './Pages/SignIn';
import ComingSoon from './Pages/ComingSoon';
import WeatherDetails from './Pages/WeatherDetails';
import Registation from './Pages/Registation';
import { requestUserPermission, NotificationListner } from "./src/utils/pushnotification_helper";
import FindLocation from './Pages/FindLocation';
import ShowApiData from './component/ShowApiData';
import Employeer1 from './component/Employeer1';
import Employeer2 from './component/Employeer2';

const Stack = createStackNavigator();

export default function App() {

  useEffect(()=> {
    NotificationListner();
    requestUserPermission();

  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="WelcomPage" component={WelcomPage} />
        {/* <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
        <Stack.Screen options={{ headerShown: false }} name="Registation" component={Registation} />
        <Stack.Screen options={{ headerShown: false }} name="FindLocation" component={FindLocation} /> */}
        <Stack.Screen options={{ headerShown: false }} name="HomePage" component={HomePage} />
        <Stack.Screen options={{ headerShown: false }} name="Employeer1" component={Employeer1} />
        <Stack.Screen options={{ headerShown: false }} name="Employeer2" component={Employeer2} />
        <Stack.Screen options={{ headerShown: false }} name="ShowApiData" component={ShowApiData} />
        <Stack.Screen options={{ headerShown: false }} name="WeatherDetails" component={WeatherDetails} />
        <Stack.Screen options={{ headerShown: false }} name="ComingSoon" component={ComingSoon} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}