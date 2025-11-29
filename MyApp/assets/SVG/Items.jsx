import { Image, StyleSheet } from "react-native";

const Items = ({ style, width = 150, height = 40 }) => {
    return (
        <Image
            source={require("../images/items.png")}
            style={[styles.image, style, { width: width, height: height }]}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
    }
});

export default Items;