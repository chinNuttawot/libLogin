"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_native_helpers_1 = require("@freakycoder/react-native-helpers");
const { width: ScreenWidth, height: ScreenHeight } = react_native_1.Dimensions.get("window");
exports.default = react_native_1.StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    mainContainer: {
        backgroundColor: "#181A1F",
        alignItems: "center",
        flex: 1,
    },
    headerContainer: {
        marginTop: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    titleTextStyle: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "600",
    },
    descriptionTextStyle: {
        fontSize: 15,
        color: "#696A6F",
    },
    textInputContainer: {
        marginTop: 24,
        justifyContent: "center",
        width: ScreenWidth * 0.85,
    },
    textInputStyle: {
        height: react_native_helpers_1.isIPhoneNotchFamily() ? 60 : 55,
        marginBottom: 8,
        fontSize: 16,
        paddingLeft: 32,
        backgroundColor: "#262A34",
        color: "#fff",
        borderRadius: react_native_helpers_1.isIPhoneNotchFamily() ? 20 : 16,
    },
    forgotPasswordTextStyle: {
        color: "#6C6D72",
    },
    forgotButtonStyle: {
        height: 30,
        justifyContent: "center",
        marginLeft: "auto",
    },
    forsecureTextEntry: {
        height: ScreenWidth * .1,
        paddingRight: ScreenWidth * .05,
        marginTop: -ScreenWidth * .11,
        justifyContent: "center",
        marginLeft: "auto",
    },
    signInButtonStyle: {
        marginTop: 24,
        backgroundColor: "#ff5925",
        width: ScreenWidth * 0.85,
        height: react_native_helpers_1.isIPhoneNotchFamily() ? 60 : 55,
        borderRadius: react_native_helpers_1.isIPhoneNotchFamily() ? 20 : 16,
        justifyContent: "center",
        alignItems: "center",
    },
    signInButtonTextStyle: {
        color: "#fff",
        fontWeight: "600",
    },
    logoImageStyle: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    googleButtonStyle: {
        backgroundColor: "#FFFFFF",
        width: ScreenWidth * 0.85,
        height: react_native_helpers_1.isIPhoneNotchFamily() ? 60 : 55,
        marginTop: 8,
        borderRadius: react_native_helpers_1.isIPhoneNotchFamily() ? 20 : 16,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    googleButtonTextStyle: {
        color: "#181A1F",
        fontWeight: "600",
    },
    facebookButtonStyle: {
        backgroundColor: "#3A579B",
        width: ScreenWidth * 0.85,
        height: react_native_helpers_1.isIPhoneNotchFamily() ? 60 : 55,
        marginTop: 8,
        borderRadius: react_native_helpers_1.isIPhoneNotchFamily() ? 20 : 16,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    facebookButtonTextStyle: {
        color: "#FFF",
        fontWeight: "600",
    },
    signUpButtonContainer: {
        marginTop: 8,
        width: ScreenWidth * 0.9,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    signUpButtonStyle: {
        height: 40,
        justifyContent: "center",
        marginLeft: 8,
    },
    signUpTextStyle: {
        fontSize: 14,
        color: "#fff",
    },
    signUpButtonTextStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#bd3e37",
    },
    appleButtonStyle: {
        backgroundColor: "#FFFFFF",
        width: ScreenWidth * 0.85,
        height: react_native_helpers_1.isIPhoneNotchFamily() ? 60 : 55,
        marginTop: 8,
        borderRadius: react_native_helpers_1.isIPhoneNotchFamily() ? 20 : 16,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    appleButtonTextStyle: {
        color: "#181A1F",
        fontWeight: "600",
    },
    newAccountContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    keyboardAvoidingViewStyle: {
        flex: 1,
    },
    descriptionContainer: {
        marginTop: 16,
    },
});
//# sourceMappingURL=SignInScreen.style.js.map