import { Image, StyleSheet } from "react-native";

const Fav = ({ style, size = 28 }) => {
    return (
        <Image
            source={require("../images/favorite.png")}
            style={[styles.image, style, { width: size, height: size }]}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
    }
});

export default Fav;
