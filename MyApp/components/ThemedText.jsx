import { colors } from '../constants/Colors';
import { fontSize } from '../constants/FontSize';
import { useFonts } from 'expo-font';
import React from 'react';
import { Text } from 'react-native';

// composant permettant de styliser un text et l'est par defaut
export default function ThemedText({children, font, style, color, size}) {

    const [fonts] = useFonts({
    'Syne-Regular': require('../assets/fonts/Syne/Syne-Regular.ttf'),
    'Syne-Medium': require('../assets/fonts/Syne/Syne-Medium.ttf'),
    'Syne-SemiBold': require('../assets/fonts/Syne/Syne-SemiBold.ttf'),
    'Syne-Bold': require('../assets/fonts/Syne/Syne-Bold.ttf'),
    'Syne-ExtraBold': require('../assets/fonts/Syne/Syne-ExtraBold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins/Poppins-Light.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Black': require('../assets/fonts/Poppins/Poppins-Black.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    'PJS-Light': require('../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Light.ttf'),
    'PJS-ExtraLight': require('../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-ExtraLight.ttf'),
    'PJS-Regular': require('../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Regular.ttf'),
    'PJS-Medium': require('../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Medium.ttf'),
    'PJS-SemiBold': require('../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-SemiBold.ttf'),
    'PJS-Bold': require('../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Bold.ttf'),
    'PJS-ExtraBold': require('../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-ExtraBold.ttf'),
})
    if (!fonts) {
        return null; // Attendre que les polices soient chargées
    } 

    return (
        <Text
            style={
                [
                    {
                        fontFamily: `${font || 'PJS-Regular'}`, 
                        fontSize: size || fontSize.default,
                        color: color || colors.black.full
                    },
                    style
                ]
            }
        >
            {children}
        </Text>
    )
}

