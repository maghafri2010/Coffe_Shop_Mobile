import { Image, StyleSheet } from "react-native";

const Cappuchino = ({ style, width = 170, height = 160}) => {
    return (
        <Image
            source={require("../images/cappuchino.png")}
            style={[styles.image, style, { width: width, height: height, borderRadius: 25  }]}
        />
    );
};

const styles = StyleSheet.create({
    // image: {
    //     resizeMode: "contain",
    // }
});

export default Cappuchino;
