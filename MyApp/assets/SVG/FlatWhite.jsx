import { Image, StyleSheet } from "react-native";

const FlatWhite = ({ style, width = 170, height = 160 }) => {
    return (
        <Image
            source={require("../images/flat-white.png")}
            style={[styles.image, style, { width: width, height: height, borderRadius: 25 }]}
        />
    );
};

const styles = StyleSheet.create({
    // image: {
    //     resizeMode: "contain",
    // }
});

export default FlatWhite;
