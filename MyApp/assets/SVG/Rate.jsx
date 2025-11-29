import { Image, StyleSheet } from "react-native";

const Rate = ({ style, width = 20, height = 20 }) => {
    return (
        <Image
            source={require("../images/rate.png")}
            style={[styles.image, style, { width: width, height: height }]}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
    }
});

export default Rate;
