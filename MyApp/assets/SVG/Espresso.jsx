import { Image, StyleSheet } from "react-native";

const Espresso = ({ style, width = 170, height = 160 }) => {
    return (
        <Image
            source={require("../images/expresso.jpg")}
            style={[styles.image, style, { width: width, height: height, borderRadius: 25 }]}
        />
    );
};

const styles = StyleSheet.create({
    // image: {
    //     resizeMode: "contain",
    // }
});

export default Espresso;
