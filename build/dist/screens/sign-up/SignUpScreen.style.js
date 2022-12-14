"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_helpers_1 = require("@freakycoder/react-native-helpers");
const react_native_1 = require("react-native");
const { width: ScreenWidth, height: ScreenHeight } = react_native_1.Dimensions.get("window");
exports.default = react_native_1.StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#181A1F",
    },
    headerContainer: {
        marginTop: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    titleTextStyle: {
        fontSize: 24,
        color: "#bd3e37",
        fontWeight: "600",
    },
    descriptionTextStyle: {
        fontSize: 15,
        color: "#696A6F",
    },
    textInputContainer: {
        marginTop: 32,
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
    signUpButtonContainer: {
        marginTop: react_native_helpers_1.isIPhoneNotchFamily()
            ? ScreenHeight * 0.34
            : react_native_helpers_1.isAndroid
                ? ScreenHeight * 0.32
                : ScreenHeight * 0.27,
        width: ScreenWidth * 0.9,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    signUpButtonStyle: {
        backgroundColor: "#ff5925",
        width: ScreenWidth * 0.85,
        height: react_native_helpers_1.isIPhoneNotchFamily() ? 60 : 55,
        borderRadius: react_native_helpers_1.isIPhoneNotchFamily() ? 20 : 16,
        justifyContent: "center",
        alignItems: "center",
    },
    signUpButtonTextStyle: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "600",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 70,
        height: 100,
        alignItems: "center",
        justifyContent: "space-around",
    },
    signInQuestionTextStyle: {
        fontSize: 14,
        color: "#fff",
    },
    signInButtonStyle: {
        height: 40,
        justifyContent: "center",
        marginLeft: 8,
    },
    signInButtonTextStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#bd3e37",
    },
    signInButtonContainer: {
        marginTop: 8,
        width: ScreenWidth * 0.9,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    PrivacyTextStyle: {
        marginTop: 10,
        width: ScreenWidth * .85,
        height: ScreenHeight * .1,
        justifyContent: 'flex-start',
        alignItems: "center",
        flexDirection: 'row',
        // backgroundColor: '#fff'
    },
    PrivacyText: {
        fontSize: 12,
        color: "#fff",
        marginLeft: 10
    },
    PrivacyText1: {
        width: ScreenWidth * .5,
        flexDirection: 'column',
    },
    PrivacyText2: {
        width: ScreenWidth * .9,
        flexDirection: 'row',
    },
});
//# sourceMappingURL=SignUpScreen.style.js.map