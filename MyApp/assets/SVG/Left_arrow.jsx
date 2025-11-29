import { Image, StyleSheet } from "react-native";

const LeftArrow = ({ style, width = 20, height = 20 }) => {
    return (
        <Image
            source={require("../images/leftArrow.png")}
            style={[styles.image, style, { width: width, height: height }]}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
    }
});

export default LeftArrow;
