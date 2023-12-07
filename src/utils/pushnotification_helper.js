import messaging from '@react-native-firebase/messaging';

export const requestUserPermission =async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);

        await getFCMToken();
        console.log('FCM Token obtained.'); 
    }
}

async function getFCMToken() {
    try {
        await messaging().registerDeviceForRemoteMessages();
        const token = await messaging().getToken();
        if (token) {
            console.log("FCM Token", token);
        } else {
            console.log("No FCM Token available");
        }
    } catch (error) {
        console.log("Error getting FCM Token:", error);
    }
}

export const NotificationListner = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
        navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
                setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
            }
            setLoading(false);
        });

    messaging().onMessage(async remoteMessage => {
        console.log("notification on froground state....", remoteMessage);
    })
}