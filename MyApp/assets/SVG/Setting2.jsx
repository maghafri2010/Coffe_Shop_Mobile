import { Image, StyleSheet } from "react-native";

const Setting2 = ({ style, size = 28 }) => {
    return (
        <Image
            source={require("../images/setting.png")}
            style={[styles.image, style, { width: size, height: size }]}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
    }
});

export default Setting2;
