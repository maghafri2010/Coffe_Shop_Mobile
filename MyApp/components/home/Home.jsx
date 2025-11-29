import { View, Text, KeyboardAvoidingView, StyleSheet, TouchableOpacity, Settings, registerCallableModule, ScrollView } from "react-native";
import ThemedText from "../ThemedText";
import { fontSize } from "../../constants/FontSize";
import { colors } from "../../constants/Colors";
import { ContainerPadding, PerfectCenter } from "../../constants/Styles";
import Promo from "../../assets/SVG/Promo";
import Gradient from "../../constants/Gradient";
import Select from "../Select";
import Input from "../Input";
import { useEffect, useState } from "react";
import Setting2 from "../../assets/SVG/Setting2";
import Search from "../../assets/SVG/Search";
import Machio from "../../assets/SVG/Machio";
import Add from "../../assets/SVG/Add";
import Shop from "../../assets/SVG/Shop";
import Fav from "../../assets/SVG/Fav";
import Notification from "../../assets/SVG/Notification";
import Details from "../detail/Details";
import Espresso from "../../assets/SVG/Espresso";
import FlatBrown from "../../assets/SVG/FlatBrown";
import FlatWhite from "../../assets/SVG/FlatWhite";
import Cappuchino from "../../assets/SVG/Cappuchino";
import Rate from "../../assets/SVG/Rate";



const locations = [
  { label: "Tanger", value: "tanger" },
  { label: "Tétouan", value: "tetouan" },
  { label: "Chefchaouen", value: "chefchaouen" },
  { label: "Al Hoceima", value: "al_hoceima" },
  { label: "Rabat", value: "rabat" }, 
];


const filter = ["All Coffee", "Machiato", "Latte", "Americano"];

const coffees = [
  {name:"Caffe Mocha", image: <Machio />, description:"Ethiopian Yirgacheffe is a light to medium roast coffee known for its bright acidity, floral aroma, and vibrant citrus notes. Carefully handpicked from the highlands of Ethiopia, each bean delivers a delicate balance of sweetness and subtle fruitiness.", price: 4.53, rate:"4.6", type:"Machiato", genre:"Ice/Hot"},
  {name:"Espresso", image: <Espresso />, description:"Ethiopian Yirgacheffe is a light to medium roast coffee known for its bright acidity, floral aroma, and vibrant citrus notes. Carefully handpicked from the highlands of Ethiopia, each bean delivers a delicate balance of sweetness and subtle fruitiness.", price: 4.23, rate:"4.4", type:"Americano", genre:"Ice/Hot"},
  {name:"Caffe Flat Brown", image: <FlatBrown />, description:"Ethiopian Yirgacheffe is a light to medium roast coffee known for its bright acidity, floral aroma, and vibrant citrus notes. Carefully handpicked from the highlands of Ethiopia, each bean delivers a delicate balance of sweetness and subtle fruitiness.", price: 3.53, rate:"4.6", type:"Latte", genre:"Ice/Hot"},
  {name:"Caffe Flat White", image: <FlatWhite />, description:"Ethiopian Yirgacheffe is a light to medium roast coffee known for its bright acidity, floral aroma, and vibrant citrus notes. Carefully handpicked from the highlands of Ethiopia, each bean delivers a delicate balance of sweetness and subtle fruitiness.", price: 4.03, rate:"4.9", type:"Machiato", genre:"Ice/Hot"},
  {name:"Cappuchino", image: <Cappuchino />, description:"Ethiopian Yirgacheffe is a light to medium roast coffee known for its bright acidity, floral aroma, and vibrant citrus notes. Carefully handpicked from the highlands of Ethiopia, each bean delivers a delicate balance of sweetness and subtle fruitiness.", price: 3.83, rate:"4.2", type:"Latte", genre:"Ice/Hot"},
];

export default function Home ({navigation}) {

    const [isSelected, setIsSelected] = useState("All Coffee");
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedCoffees, setSelectedCoffees] = useState(coffees);
    const [search, setSearch] = useState("");



    const chooseCoffe = (type) => setSelectedCoffees(coffees.filter(coffee => coffee.type === type));
    

    useEffect(()=> {
        const value = search.toLowerCase();
        if (value === "")
        {
            if (isSelected === "All")
                setSelectedCoffees(coffees);
        }
        else
        {
            setSelectedCoffees(
                coffees.filter(item => 
                    item.name.toLowerCase().includes(value))
                )
        };
    },[search]);
    
    
    return (
        <View style={[ContainerPadding, {flex: 1}]}>
            <View style={{height: 360}}>
                <Gradient colors={["#111111", "#313131"]} style={style.header}>
                    <View style={{padding: 10, marginTop: 40}}>
                        <Select 
                        values={locations}
                        value={selectedLocation}
                        onValueChange={setSelectedLocation}
                        placeholder={"Select a Location"}
                        backgroundColor={"transparent"}
                        style={style.select}
                        />
                    </View>
                    
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Search  style={{position: 'absolute', left: 10, zIndex: 10}}/>
                        <Input 
                        onChangeText={(text) => setSearch(text)}
                        value={search}
                        style={style.search}
                        placeholder={"Search Coffee"}
                        placeholderTextColor="#ffffffff"
                        />
                        <TouchableOpacity>
                            <Setting2 size={40}/>
                        </TouchableOpacity>
                    </View>
                </Gradient>
                <View style={style.promo}>
                    <Promo />
                </View>
            </View>
            <View style={{flexDirection: "row", gap: 8, marginTop: 20, justifyContent: 'center'}}>
                {filter.map((item, i) => (
                    item === "All Coffee" ? (
                        <TouchableOpacity key={i} onPress={() => { setSelectedCoffees(coffees); setIsSelected(item); }}>
                            <ThemedText style={[style.filter, {backgroundColor: isSelected === item ? "#C67C4Eff" : "#b0b0b0ff" }]}>{item}</ThemedText>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity key={i} onPress={() => { chooseCoffe(item); setIsSelected(item);}}>
                            <ThemedText style={[style.filter, {backgroundColor: isSelected === item ? "#C67C4Eff" : "#b0b0b0ff" }]}>{item}</ThemedText>
                        </TouchableOpacity>

                    )
                ))}
            </View>
            <ScrollView>
                <View style={style.coffes}>
                    {selectedCoffees.map((coffee, i) => (
                        <View key={i}>
                            <TouchableOpacity style={{width: '170', borderRadius: 15}} onPress={() => navigation.navigate('Details', {coffee})}>
                                {coffee.image}
                            </TouchableOpacity>
                            <ThemedText style={{marginTop: 10}} size={fontSize.big} font={"Syne-Medium"}>{coffee.name}</ThemedText>
                            <ThemedText size={fontSize.default} font={"Syne-Regular"}>{coffee.genre}</ThemedText>
                            <ThemedText size={fontSize.big} font={"PJS-Bold"}>$ {coffee.price}</ThemedText>
                            <View  style={{flexDirection: 'row', position: 'absolute', left: 120, top: 10, color: '#ffffffff'}}>
                                <Rate />
                                <ThemedText font={"PJS-Bold"} color={colors.white.full}>{coffee.rate}</ThemedText>
                            </View>
                            <TouchableOpacity style={{position: 'absolute', bottom: 10, right: 5}}>
                                <Add />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={style.bar}>
                <Fav />
                <Fav />
                <Shop />
                <Notification />
                

            </View>
        </View>
    )
}

const style = StyleSheet.create({

    header: {
        padding: 15,
        height: '280',
        width: '100%',
    },
    select: {
        marginBottom: 15,
        borderColor: 'transparent',
        color: '#A2A2A2',
        
    },
    search: {
        backgroundColor: '#242424ff',
        borderColor: 'transparent',
        borderRadius: 10,
        color: '#ffffffff',
        width: '90%',
        paddingLeft: 50

        
    },
    promo: {
        position: 'relative',
        top: -80,
    },
    filter: {
        width: 90,
        height: 40,
        borderRadius: 10,
        padding: 10
    },
    coffes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 25,
        paddingTop: 20,
        paddingBottom: 180
    },
    bar: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        
        right: 0,
        height: 100,
        width: '100%',
        backgroundColor: '#ffffffff',
        justifyContent: "space-around",
        borderRadius: 25,
        paddingTop: 25,

    }
})



