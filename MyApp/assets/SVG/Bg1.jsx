import { Image, StyleSheet } from "react-native";

const Bg1 = ({ style, width = 28, height = 28 }) => {
    return (
        <Image
            source={require("../images/bg1.png")}
            style={[styles.image, style, { width: width, height: height }]}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
    }
});

export default Bg1;