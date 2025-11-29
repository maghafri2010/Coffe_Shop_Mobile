import { KeyboardAvoidingView, View, TouchableOpacity, StyleSheet } from "react-native"
import Fav from "../../assets/SVG/Fav"
import LeftArrow from "../../assets/SVG/Left_arrow";
import ThemedText from "../ThemedText";
import { ContainerPadding } from "../../constants/Styles";
import { fontSize } from "../../constants/FontSize";
import { colors } from "../../constants/Colors";
import Rate from "../../assets/SVG/Rate";
import { useEffect, useState } from "react";
import Items from "../../assets/SVG/Items";

const Details = ({ route, navigation }) => {

    const coffee = route.params.coffee;
    
    const [size, setSize] = useState('S');
    const [price, setPrice] = useState(coffee.price);


    useEffect(() => {
    if (size === 'M')
        setPrice(coffee.price + 0.40);
    else if (size === 'L')
        setPrice(coffee.price + 0.55);
    else
        setPrice(coffee.price)        

    },[size]);

    return (
        <View style={{backgroundColor: "#e1e1e1ff"}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><LeftArrow /></TouchableOpacity>
                <ThemedText font={"PJS-Bold"} size={fontSize.big}>Details</ThemedText>
                <TouchableOpacity><Fav /></TouchableOpacity>
            </View>
            <View style={styles.details}>
                <View style={{flexDirection: 'row', gap: 20, borderBottomWidth: 2, paddingBottom: 20, borderColor: "#c5c5c5ff"}}>
                    {coffee.image}
                    <View style={{gap: 10}}>
                        <ThemedText font={"PJS-Bold"} size={fontSize.world}>{coffee.name}</ThemedText>
                        <ThemedText font={"PJS-Regular"} size={fontSize.default} color={colors.gray.text}>{coffee.genre}</ThemedText>
                        <View style={{flexDirection: 'row', alignItems : 'center', gap: 5}}>
                            <Rate />
                            <ThemedText font={"PJS-Bold"} size={fontSize.middle}>{coffee.rate} <ThemedText color={colors.gray.text} size={fontSize.small}>(230)</ThemedText></ThemedText>
                        </View>
                        <Items />
                    </View>
                </View>
                <View style={styles.description}>
                    <ThemedText font={"PJS-Bold"} size={fontSize.big}>Description</ThemedText>
                    <ThemedText color={colors.gray.text} >{coffee.description}</ThemedText>
                </View>
                <View style={styles.size}>
                    <ThemedText font={"PJS-Bold"} size={fontSize.big}>Size</ThemedText>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15}}>
                        <TouchableOpacity onPress={() => setSize('S')} style={[styles.sizeCat, {backgroundColor: size === 'S' ? '#f9decaff'  : '#ffffffff', borderColor: size === 'S' ? '#f09250ff' : '#7c7c7cff'}]}><ThemedText font={"PJS-Bold"} size={fontSize.big}>S</ThemedText></TouchableOpacity>
                        <TouchableOpacity onPress={() => setSize('M')} style={[styles.sizeCat, {backgroundColor: size === 'M' ? '#f9decaff'  : '#ffffffff', borderColor: size === 'M' ? '#f09250ff' : '#7c7c7cff'}]}><ThemedText font={"PJS-Bold"} size={fontSize.big}>M</ThemedText></TouchableOpacity>
                        <TouchableOpacity onPress={() => setSize('L')} style={[styles.sizeCat, {backgroundColor: size === 'L' ? '#f9decaff'  : '#ffffffff', borderColor: size === 'L' ? '#f09250ff' : '#7c7c7cff'}]}><ThemedText font={"PJS-Bold"} size={fontSize.big}>L</ThemedText></TouchableOpacity>
                    </View>
                </View>

            </View>
                <View style={styles.payment}> 
                    <View>
                        <ThemedText font={"PJS-Bold"} size={fontSize.big} >Price</ThemedText>
                        <ThemedText color={"#de701cff"} font={"PJS-Bold"} size={fontSize.big}>${price.toFixed(2)}</ThemedText>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Order', {coffee, price})} style={styles.buy}><ThemedText color={"#ffffff"} font={"PJS-Bold"}>Buy Now</ThemedText></TouchableOpacity>
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
   
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        padding: 20

    },
    details: {
        alignItems: 'center'
    },
    description: {
        marginTop: 20,
        height: 'auto',
        width: '80%',
        gap: 10,
        borderBottomWidth: 2, 
        borderColor: '#c8c8c8ff',
        paddingBottom: 20
    },
    size: {
        marginTop: 20,
        width: '80%',
        height: 100,
    },
    sizeCat: {
        backgroundColor: "#ffffffff",
        borderColor: "#444444ff",
        width: 80,
        height: 40,
        borderRadius: 15,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    payment: {
        marginTop: '30%',
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

export default Details;