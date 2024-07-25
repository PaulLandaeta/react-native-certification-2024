import { StyleSheet } from "react-native";

export const lightTheme = {
    primary: "#222831",
    secondary: "#76ABAE",
    backgroundColor: "#EEEEEE",
    color: "#222831",
};

export const darkTheme = {
    primary: "#76ABAE",
    secondary: "#222831",
    backgroundColor: "#222831",
    color: "#EEEEEE",
};


export const ThemeStyles = StyleSheet.create({
    title : {
        fontSize: 24, 
        fontWeight: "bold",
    },
    subtitle : {
        fontSize: 20, 
        fontWeight: "bold",
    },
    text : {
        fontSize: 16, 
    }
});