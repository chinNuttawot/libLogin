/// <reference types="react" />
import { TextStyle, ViewStyle } from "react-native";
interface SignUpScreenProps {
    signUpTitle?: string;
    signUpDescriptionText?: string;
    signUpTitleTextStyle?: TextStyle;
    signUpDescriptionTextStyle?: TextStyle;
    fullNamePlaceholderText?: string;
    placeholderTextColor?: string;
    textInputStyle?: TextStyle;
    emailPlaceholderText?: string;
    passwordPlaceholder?: string;
    passwordTextInputStyle?: TextStyle;
    signUpButtonText?: string;
    signUpButtonStyle?: ViewStyle;
    signUpButtonTextStyle?: TextStyle;
    signInQuestionTextStyle?: TextStyle;
    signInQuestionText?: string;
    signInButtonTextStyle?: TextStyle;
    signInButtonText?: string;
    fullNameOnChange?: (fullName: string) => void;
    emailOnChange?: (email: string) => void;
    singUpPasswordChangeText1?: (password: string) => void;
    singUpPasswordChangeText2?: (password: string) => void;
    handleSignUpButton?: () => void;
    handleSignIn?: () => void;
    handlecheckPrivacy? : () => void;
}
declare const SignUpScreen: (props: SignUpScreenProps) => JSX.Element;
export default SignUpScreen;
