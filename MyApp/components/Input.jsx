import { colors, colors as COLORS, status } from '../constants/Colors';

import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import ThemedText from './ThemedText';

export default function Input({value, onChangeText, placeholder, style, marginBottom, borderRadius, backgroundColor, error, isFocusedBorderColor, ...props}) {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <View style={{gap: 6, flex: 1, width: '100%', alignItems: 'flex-start', marginBottom}}>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.placeholder}
                onFocus={()=>{
                    setIsFocused(true)
                    error = null
                }}
                onBlur={()=>setIsFocused(false)}
                style={
                    [
                        styles.input, 
                        {
                            fontFamily: 'PJS-Medium',
                            backgroundColor: backgroundColor || colors.white.full, 
                            borderRadius: borderRadius || 0, 
                            borderWidth: 2,
                            borderColor: isFocused ? (isFocusedBorderColor || colors.blue.default) : error ? status.canceled.text : colors.gray.light
                        },
                        style, 

                    ]
                }
                {...props}
            />
            {error && 
                <ThemedText color={status.canceled.text} style={{alignSelf: 'flex-start'}}>{error}</ThemedText>
            }
        </View>
      
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        height: 44,
        width: '100%',
        fontSize: 14,
    }
    
}) 
