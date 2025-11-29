import { StyleSheet, TouchableOpacity, View } from "react-native"
import LeftArrow from "../../assets/SVG/Left_arrow";
import ThemedText from "../ThemedText";
import { fontSize } from "../../constants/FontSize";
import React, { useState } from "react";
import { colors } from "../../constants/Colors";
import { PerfectCenter } from "../../constants/Styles";
import Discount from "../../assets/SVG/Discount";
import Input from "../Input";


const data = [
    {address: 'Jl. Kpg Sutoyo', info: 'Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.'},
];

const Order = ({ navigation, route }) => {

    const {coffee, price} = route.params;

    const [bol, setBol] = useState(false);
    const [address, setAddress] = useState('Jl. Kpg Sutoyo');
    const [info, setInfo] = useState('Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.');

    const [buttonSelected, setButtonSelected] = useState('Deliver');
    const [number, setNumber] = useState(1);
    const [newPrice, setNewPrice] = useState(price);

    const addNum = () => {setNumber(prev => (prev + 1), setNewPrice(prev => prev + price))};
    const reduceNum = () => {setNumber(prev => Math.max(prev - 1, 0), setNewPrice(prev => prev - price))};


    return (
        <View style={{}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Details', {coffee})}>
                    <LeftArrow />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <ThemedText font={"PJS-Bold"} size={fontSize.big}>Order</ThemedText>
                    </View>
            </View>
            <View style={styles.buttonHead}>
                <TouchableOpacity onPress={() => setButtonSelected('Deliver')} style={[styles.button, {backgroundColor: buttonSelected === 'Deliver' ? "#C67C4E" : "#a9a9a9ff"}]}><ThemedText color={"#ffffff"} font={"Syne-Bold"} size={fontSize.big}>Deliver</ThemedText></TouchableOpacity>
                <TouchableOpacity onPress={() => setButtonSelected('Pick Up')} style={[styles.button, {backgroundColor: buttonSelected === 'Pick Up' ? "#C67C4E" : "#a9a9a9ff"}]}><ThemedText color={"#ffffff"}  font={"Syne-Bold"} size={fontSize.big}>Pick Up</ThemedText></TouchableOpacity>
            </View>
            <View style={{marginTop: 10, padding: 20, borderBottomWidth: 2, borderColor: '#ccccccff', marginHorizontal: 20}}>
                <ThemedText font={"PJS-Bold"} size={fontSize.big}>Delivery Address</ThemedText>
                {bol && (
                    <View style={styles.inputContainer}>
                        <Input maxLength={30} placeholder={"City"} onChangeText={(text) => setAddress(text) } value={address} style={styles.input}/>
                        <Input maxLength={30} placeholder={"Street"} onChangeText={(text) => setInfo(text) } value={info} style={styles.input}/>
                        <TouchableOpacity onPress={() => setBol(false)} style={[styles.edit, {alignSelf: 'flex-end'}]}><ThemedText>Confirm</ThemedText></TouchableOpacity>
                    </View>
                    )}
                {!bol && (address !== "" || info !== "") &&(
                    <View>
                        <ThemedText style={{marginTop: 15}} font={"PJS-Bold"} size={fontSize.middle}>{address}</ThemedText>
                        <ThemedText color={colors.gray.text}>{info}</ThemedText>
                    </View>
                )}
                {!bol && (
                    <View style={{marginTop: 20, flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => setBol(true)} style={styles.edit}><ThemedText font={"Syne-Regular"}>Edit Address</ThemedText></TouchableOpacity>
                        <TouchableOpacity style={styles.edit}><ThemedText font={"Syne-Regular"}>Add Note</ThemedText></TouchableOpacity>
                    </View>
                )}
            </View>
            <View style={{flexDirection: 'row', gap: 20, padding: 30, borderBottomWidth: 5, borderColor: "#EDD6C8"}}>
                {React.cloneElement(coffee.image, { width: 80, height: 80 })}
                
                <View style={styles.containerCoffee}>
                    <ThemedText font={"PJS-Bold"} size={fontSize.middle}>{coffee.name}</ThemedText>
                    <ThemedText color={colors.gray.text}>{coffee.genre}</ThemedText>
                </View>    
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                    <TouchableOpacity style={styles.sign} onPress={() => reduceNum(number)}><ThemedText style={{textAlign: 'center'}} font={"Syne-Bold"} size={fontSize.big}>-</ThemedText></TouchableOpacity>
                    <ThemedText font={"PJS-Bold"} size={20}>{number}</ThemedText>
                    <TouchableOpacity style={styles.sign} onPress={() => addNum(number)}><ThemedText style={{textAlign: 'center'}} font={"Syne-Bold"} size={fontSize.big}>+</ThemedText></TouchableOpacity>
                </View>
            </View>

            <View style={{padding: 20}}>
                <View style={styles.discount}>
                    <Discount />
                    <TouchableOpacity ><ThemedText font={"Syne-Bold"} size={fontSize.middle}>1 Discount is Applies</ThemedText></TouchableOpacity>
                </View>

                <View style={{gap: 10}}>
                    <ThemedText font={"PJS-Bold"} size={fontSize.big}>Payment Summary</ThemedText>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                        <ThemedText font={"PJS-SemiBold"} size={fontSize.middle}>Price </ThemedText>
                        <ThemedText font={"PJS-Bold"}>${newPrice.toFixed(2)}</ThemedText>
                    </View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                        <ThemedText font={"PJS-SemiBold"} size={fontSize.middle}>Delivery Fee</ThemedText>
                        <ThemedText font={"PJS-Bold"}>$0.99</ThemedText>
                    </View>
                </View>
            </View>

            <View style={styles.payment}> 
                <View>
                    <ThemedText font={"PJS-Bold"} size={fontSize.big} >Cash/Wallet</ThemedText>
                    <ThemedText color={"#de701cff"} font={"PJS-Bold"} size={fontSize.big}>${(newPrice + 0.99).toFixed(2)}</ThemedText>
                </View>
                <TouchableOpacity style={styles.buy}><ThemedText color={"#ffffff"} font={"PJS-Bold"}>Order</ThemedText></TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 50,
        padding: 20,
        justifyContent: 'space-between'
    },
    buttonHead: {
        flexDirection: 'row',  
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20, 
        borderRadius: 15,  
        gap: 10
            
    },
    button: {
        backgroundColor: "#C67C4E",
        borderRadius: 10,
        borderColor:  "#d8d8d8ff",
        borderWidth: 1,
        width: 150,
        height: 40,
        padding: 8,
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: 10,
        gap: 50,
        marginBottom: 0

    },
    input: {
        borderRadius: 20,
        

    },
    edit: {
        borderColor: '#cacacaff',
        padding: 5,
        borderWidth: 2,
        borderRadius: 20,
        width: 110,
        alignItems: 'center'
    },
    containerCoffee: {
        marginRight: 20,
        gap: 5,
        justifyContent: 'center'
    },
    sign: {
        borderWidth: 1,
        borderColor: '#9d9d9dff',
        backgroundColor: "#ffffff",
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems:'center'
    },
    discount: {
        backgroundColor: '#ffffff',
        width: 250,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        alignSelf: 'center',
        marginBottom: 40,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10

    },
    payment: {
        marginTop: '10%',
        width: '100%',
        height: '23%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffffff',
        borderRadius: 25,
        padding: 20
    },
    buy: {
        backgroundColor: "#C67C4E", 
        width: 200, 
        height: 50, 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 15

    }

})
export default Order;