import { Image, StyleSheet } from "react-native";

const Add = ({ style, width = 28, height = 28 }) => {
    return (
        <Image
            source={require("../images/add.png")}
            style={[styles.image, style, { width: width, height: height }]}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
    }
});

export default Add;
