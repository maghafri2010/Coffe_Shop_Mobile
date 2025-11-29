import { Image, StyleSheet } from "react-native";

const Promo = ({ style, width = 410, height = 160 }) => {
    return (
        <Image
            source={require("../images/promo.png")}
            style={[styles.image, style, { width: width, height: height }]}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
    }
});

export default Promo;
