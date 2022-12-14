"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_helpers_1 = require("@freakycoder/react-native-helpers");
const react_native_1 = require("react-native");
const Entypo = require('@expo/vector-icons')
/**
 * ? Local Imports
 */
const SignInScreen_style_1 = tslib_1.__importDefault(require("./SignInScreen.style"));
const SignInScreen = ({ 
  style, 
  titleText = "Welcome Back!", 
  titleTextStyle, 
  descriptionText = "Please sign in to your account", 
  descriptionTextStyle, 
  usernamePlaceholder = "อีเมล", 
  textInputStyle, 
  placeholderTextColor = "#6C6D72", 
  passwordPlaceholder = "รหัสผ่าน", 
  passwordTextInputStyle, 
  forgotPasswordText = "Forgot Password?", 
  forgotPasswordTextStyle, 
  signInButtonStyle, 
  signInButtonText = "เข้าสู่ระบบ", 
  signInButtonTextStyle, 
  googleButtonStyle, 
  googleButtonTextStyle, 
  googleButtonText = "Sign In With Google", 
  facebookButtonStyle, 
  facebookButtonTextStyle, 
  facebookButtonText = "Sign In With Facebook", 
  enableGoogleLogin = true, 
  enableFacebookLogin = true, 
  signUpQuestionText = "ยังไม่ได้สมัครสมาชิกใช่ไหม?", 
  signUpButtonText = "สมัครสมาชิก", 
  signUpTextStyle, 
  signUpButtonTextStyle, 
  enableForgotPassword = true, 
  enableAppleLogin = true, 
  appleButtonStyle, 
  appleButtonText = "Sign In With Apple", 
  appleButtonTextStyle, 
  usernameChangeText, 
  passwordChangeText, 
  handleSignInButton, 
  handleGoogleLogIn, 
  handleFacebookLogIn, 
  handleForgotPassword, 
  handleSignUp, 
  handleAppleLogIn, 
  onSignupPress, 
  issecureTextEntry = true, 
  setissecureTextEntry 
}) => {
  const renderHeaderTextContainer = () => (<react_native_1.View style={SignInScreen_style_1.default.headerContainer}>
    <react_native_1.Text style={[SignInScreen_style_1.default.titleTextStyle, titleTextStyle]}>{titleText}</react_native_1.Text>
    <react_native_1.View style={SignInScreen_style_1.default.descriptionContainer}>
      <react_native_1.Text style={[SignInScreen_style_1.default.descriptionTextStyle, descriptionTextStyle]}>
        {descriptionText}
      </react_native_1.Text>
    </react_native_1.View>
  </react_native_1.View>);
  const renderInputContainer = () => (<react_native_1.View style={SignInScreen_style_1.default.textInputContainer}>
    <react_native_1.TextInput placeholder={usernamePlaceholder} placeholderTextColor={placeholderTextColor} style={[SignInScreen_style_1.default.textInputStyle, textInputStyle]} onChangeText={usernameChangeText} />
    <react_native_1.TextInput placeholder={passwordPlaceholder} placeholderTextColor={placeholderTextColor} style={[SignInScreen_style_1.default.textInputStyle, passwordTextInputStyle]} secureTextEntry={issecureTextEntry} onChangeText={passwordChangeText} />
    <Entypo.Entypo name={issecureTextEntry ? "eye-with-line" : "eye"} size={25} color="#fff" onPress={setissecureTextEntry} style={SignInScreen_style_1.default.forsecureTextEntry} />
    {enableForgotPassword && (<react_native_1.TouchableOpacity style={SignInScreen_style_1.default.forgotButtonStyle} onPress={handleForgotPassword}>
      <react_native_1.Text style={[SignInScreen_style_1.default.forgotPasswordTextStyle, forgotPasswordTextStyle]}>
        {forgotPasswordText}
      </react_native_1.Text>
    </react_native_1.TouchableOpacity>)}
    <react_native_1.TouchableOpacity style={[SignInScreen_style_1.default.signInButtonStyle, signInButtonStyle]} onPress={handleSignInButton}>
      <react_native_1.Text style={[SignInScreen_style_1.default.signInButtonTextStyle, signInButtonTextStyle]}>
        {signInButtonText}
      </react_native_1.Text>
    </react_native_1.TouchableOpacity>
  </react_native_1.View>);
  const renderLoginButtonsContainer = () => {
    let numberOfButton = 1;
    if (enableGoogleLogin)
      numberOfButton += 1;
    if (enableFacebookLogin)
      numberOfButton += 1;
    if (enableAppleLogin)
      numberOfButton += 1;
    return (<react_native_1.View>
      {enableGoogleLogin && (<react_native_1.TouchableOpacity style={[SignInScreen_style_1.default.googleButtonStyle, googleButtonStyle]} onPress={handleGoogleLogIn}>
        <react_native_1.Image source={require("../../local-assets/google.png")} style={SignInScreen_style_1.default.logoImageStyle} />
        <react_native_1.Text style={[SignInScreen_style_1.default.googleButtonTextStyle, googleButtonTextStyle]}>
          {googleButtonText}
        </react_native_1.Text>
      </react_native_1.TouchableOpacity>)}
      {enableFacebookLogin && (<react_native_1.TouchableOpacity style={[SignInScreen_style_1.default.facebookButtonStyle, facebookButtonStyle]} onPress={handleFacebookLogIn}>
        <react_native_1.Image source={require("../../local-assets/facebook.png")} style={SignInScreen_style_1.default.logoImageStyle} />
        <react_native_1.Text style={[SignInScreen_style_1.default.facebookButtonTextStyle, facebookButtonTextStyle]}>
          {facebookButtonText}
        </react_native_1.Text>
      </react_native_1.TouchableOpacity>)}
      {enableAppleLogin && (<react_native_1.TouchableOpacity style={[SignInScreen_style_1.default.appleButtonStyle, appleButtonStyle]} onPress={handleAppleLogIn}>
        <react_native_1.Image source={require("../../local-assets/apple.png")} style={SignInScreen_style_1.default.logoImageStyle} />
        <react_native_1.Text style={[SignInScreen_style_1.default.appleButtonTextStyle, appleButtonTextStyle]}>
          {appleButtonText}
        </react_native_1.Text>
      </react_native_1.TouchableOpacity>)}
    </react_native_1.View>);
  };
  const renderSignUpButtonContainer = () => (<react_native_1.View style={SignInScreen_style_1.default.signUpButtonContainer}>
    <react_native_1.Text style={[SignInScreen_style_1.default.signUpTextStyle, signUpTextStyle]}>
      {signUpQuestionText}
    </react_native_1.Text>
    <react_native_1.TouchableOpacity style={SignInScreen_style_1.default.signUpButtonStyle} onPress={() => {
      onSignupPress && onSignupPress();
    }}>
      <react_native_1.Text style={[SignInScreen_style_1.default.signUpButtonTextStyle, signUpButtonTextStyle]}>
        {signUpButtonText}
      </react_native_1.Text>
    </react_native_1.TouchableOpacity>
  </react_native_1.View>);
  return (<react_native_1.View style={SignInScreen_style_1.default.newAccountContainer}>
    <react_native_1.KeyboardAvoidingView enabled behavior="padding" style={SignInScreen_style_1.default.keyboardAvoidingViewStyle}>
      <react_native_1.SafeAreaView style={{ alignItems: "center", justifyContent: "center" }}>
        {renderHeaderTextContainer()}
        {renderInputContainer()}
      </react_native_1.SafeAreaView>
      <react_native_1.View style={{
        position: "absolute",
        bottom: react_native_helpers_1.isIPhoneNotchFamily() ? react_native_helpers_1.getStatusBarHeight() : 8,
      }}>
        {renderLoginButtonsContainer()}
        {renderSignUpButtonContainer()}
      </react_native_1.View>
    </react_native_1.KeyboardAvoidingView>
  </react_native_1.View>);
};
exports.default = SignInScreen;
//# sourceMappingURL=SignInScreen.js.map