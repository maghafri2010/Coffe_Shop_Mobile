import { Image, StyleSheet } from "react-native";

const Search = ({ style, size = 28 }) => {
    return (
        <Image
            source={require("../images/search.png")}
            style={[styles.image, style, { width: size, height: size }]}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        resizeMode: "contain",
    }
});

export default Search;
