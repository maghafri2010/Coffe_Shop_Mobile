import { TouchableOpacity, View } from "react-native";
import Bg1 from "../../assets/SVG/Bg1";
import ThemedText from "../ThemedText";
import { fontSize } from "../../constants/FontSize";
import { PerfectCenter } from "../../constants/Styles";


export default function Onboarding ({ navigation })
{
    return (
        <View style={{flex: 1, backgroundColor: '#000000ff'}}>
            <Bg1 width={430} height={600} />
            <View style={{alignItems: 'center'}}>
                <ThemedText font={"PJS-Bold"} size={38} color={"#ffffff"} style={{textAlign: 'center', width: '90%', position: 'absolute', top: -50, alignItems: 'center' }}>Fall in Love with Coffe in Blissful Delight!</ThemedText>
            </View>
            <View style={{flex: 1, alignItems: 'center', marginTop: 120}}>
                <ThemedText font={"PJS-Regular"} size={fontSize.middle} color={"#c4c4c4ff"} style={{width: '80%', textAlign: 'center'}}>Welcome to our cozy coffe corner, where every cup is a delightful for you.</ThemedText>
                <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={[PerfectCenter,{backgroundColor: "#C67C4E", width: '80%', height: 60, borderRadius: 15, marginTop: 35}]}>
                    <ThemedText font={"Syne-Bold"} size={fontSize.big} color={"#ffffffff"}>Get started</ThemedText>
                </TouchableOpacity>
            </View>

        </View>
    )
}