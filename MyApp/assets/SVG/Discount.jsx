import { Image, StyleSheet } from "react-native";

const Discount = ({ style, size = 28 }) => {
    return (
        <Image
            source={require("../images/discount.png")}
            style={[styles.image, style, { width: size, height: size }]}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
    }
});

export default Discount;
