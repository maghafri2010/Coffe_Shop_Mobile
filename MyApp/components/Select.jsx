import { colors, status } from '../constants/Colors'
import { MarginInline, PerfectCenter } from '../constants/Styles'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import ThemedText from './ThemedText'
import { fontSize } from '../constants/FontSize'

export default function Select({values = [], placeholder, value, onValueChange, backgroundColor, borderRadius, isFocusedBorderColor, style, error}) {

    const [open, setOpen] = useState(false)

    return (

        <>
        <Pressable
            onPress={()=>setOpen(true)} 
            style={
                [
                    styles.select, 
                    {
                        
                        backgroundColor: backgroundColor || colors.white.full, 
                        borderRadius: borderRadius || 0, 
                        borderWidth: 2,
                        borderColor: open ? (isFocusedBorderColor || colors.blue.default) : error ? status.canceled.text : colors.gray.light
                    },
                    style, 

                ]
            }>
            <ThemedText 
                font={'PJS-Medium'} 
                color={(value?.label || value) ? "#A2A2A2" : "#A2A2A2"}
                size={fontSize.big}
            >
                {value?.label || value || placeholder}
            </ThemedText>
        </Pressable>

        {
            open &&
            <Modal
  animationType="slide"
  transparent={true}
  visible={open}
  onRequestClose={() => setOpen(false)}
>
  <TouchableWithoutFeedback onPress={() => setOpen(false)}>
    <View style={styles.centeredView}>
      <Pressable style={{ width: '100%',  }}>
        <LinearGradient 
          colors={[colors.white.full, colors.white.full]} // ✅ make it white
          style={styles.modal}
        >
          {values.map(option => (
            <TouchableOpacity
              key={option?.value}
              onPress={() => {
                onValueChange(option)
                setOpen(false)
              }}
              style={styles.selectItem}
            >
              <ThemedText 
                style={{ fontSize: 16 }}
                color={colors.black.full} // ✅ make sure text is black
              >
                {option?.label}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </LinearGradient>
      </Pressable>
    </View>
  </TouchableWithoutFeedback>
</Modal>

        }

        </>
    )
}



const styles = StyleSheet.create({
    select: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        height: 44,
        width: '100%',
        fontSize: 14,
        fontFamily: 'PJS-Medium',
        justifyContent: 'center',
    },
    centeredView: {
        flex: 1,
        ...PerfectCenter,
        height: 400,
        paddingHorizontal: MarginInline,

      },
    
      modal: {
        position: 'relative',
        borderRadius: 12,
        width: '100%',
        height: '60%',
        backgroundColor: 'rgba(255,255,255,1)',
        bottom: -300

      },
      selectItem: {
        width: '100%',
        padding: 15,

      }
})