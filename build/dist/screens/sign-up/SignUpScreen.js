"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_helpers_1 = require("@freakycoder/react-native-helpers");
const react_native_1 = require("react-native");
const SignUpScreen_style_1 = tslib_1.__importDefault(require("./SignUpScreen.style"));
const Iconvector = require('@expo/vector-icons');
const SignUpScreen = (props) => {
  const {
    signUpTitle = "สมัครสมาชิก",
    signUpDescriptionText = "Please fill in the form to continue",
    signUpTitleTextStyle,
    signUpDescriptionTextStyle,
    fullNamePlaceholderText = "ชื่อที่ใช้แสดง",
    placeholderTextColor = "#6C6D72",
    textInputStyle,
    emailPlaceholderText = "อีเมล",
    passwordPlaceholder1 = "รหัสผ่าน",
    passwordPlaceholder2 = "ยืนยันรหัสผ่าน",
    passwordTextInputStyle,
    signUpButtonText = "สมัครสมาชิก",
    signUpButtonStyle,
    signUpButtonTextStyle,
    signInQuestionTextStyle,
    signInQuestionText = "มีบัญชีอยู่แล้วใช่ไหม?",
    signInButtonTextStyle,
    signInButtonText = "เข้าสู่ระบบ",
    PrivacyText = [
      `ฉันยอมรับข้อตกลงและเงื่อนไข`
      , `เงื่อนไขการให้บริการ`
      , `ตาม`
      , `นโยบายความปลอดภัย`
      , `ของเว็บไซต์และ`
      , `ข้อตกลงการให้บริการระบบวรรณกรรมอิเล็กกรอนิกส์`
      , `เพื่อใช้แทนสัญญา/ข้อตกลงระหว่างบริษัทฯกับนักเขียน`
    ],
    fullNameOnChange,
    emailOnChange,
    singUpPasswordChangeText1,
    singUpPasswordChangeText2,
    handleSignUpButton,
    handleSignIn,
    handlecheckPrivacy,
    checkPrivacy
  } = props;
  const renderHeaderTextContainer = () => (<react_native_1.View style={SignUpScreen_style_1.default.headerContainer}>
    <react_native_1.Text style={[SignUpScreen_style_1.default.titleTextStyle, signUpTitleTextStyle]}>
      {signUpTitle}
    </react_native_1.Text>
    {/* <react_native_1.View style={{ marginTop: 16 }}>
      <react_native_1.Text style={[SignUpScreen_style_1.default.descriptionTextStyle, signUpDescriptionTextStyle]}>
        {signUpDescriptionText}
      </react_native_1.Text>
    </react_native_1.View> */}
  </react_native_1.View>);
  const renderTextInputContainer = () => (<react_native_1.View style={SignUpScreen_style_1.default.textInputContainer}>
    <react_native_1.TextInput {...props} placeholder={emailPlaceholderText} placeholderTextColor={placeholderTextColor} style={[SignUpScreen_style_1.default.textInputStyle, textInputStyle]} onChangeText={emailOnChange} />
    <react_native_1.TextInput {...props} placeholder={passwordPlaceholder1} placeholderTextColor={placeholderTextColor} style={[SignUpScreen_style_1.default.textInputStyle, textInputStyle]} onChangeText={singUpPasswordChangeText1} />
    <react_native_1.TextInput {...props} placeholder={passwordPlaceholder2} placeholderTextColor={placeholderTextColor} style={[SignUpScreen_style_1.default.textInputStyle, passwordTextInputStyle]} onChangeText={singUpPasswordChangeText2} />
    <react_native_1.TextInput {...props} placeholder={fullNamePlaceholderText} placeholderTextColor={placeholderTextColor} style={[SignUpScreen_style_1.default.textInputStyle, textInputStyle]} onChangeText={fullNameOnChange} />
  </react_native_1.View>);
  const renderSignUpButton = () => (<react_native_1.View style={SignUpScreen_style_1.default.signUpButtonContainer}>
    <react_native_1.TouchableOpacity style={[SignUpScreen_style_1.default.signUpButtonStyle, signUpButtonStyle]} onPress={handleSignUpButton}>
      <react_native_1.Text style={[SignUpScreen_style_1.default.signUpButtonTextStyle, signUpButtonTextStyle]}>
        {signUpButtonText}
      </react_native_1.Text>
    </react_native_1.TouchableOpacity>
  </react_native_1.View>);
  const renderSignInTextContainer = () => (<react_native_1.View style={SignUpScreen_style_1.default.signInButtonContainer}>
    <react_native_1.Text style={[SignUpScreen_style_1.default.signInQuestionTextStyle, signInQuestionTextStyle]}>
      {signInQuestionText}
    </react_native_1.Text>
    <react_native_1.TouchableOpacity style={SignUpScreen_style_1.default.signInButtonStyle} onPress={() => handleSignIn && handleSignIn()}>
      <react_native_1.Text style={[SignUpScreen_style_1.default.signInButtonTextStyle, signInButtonTextStyle]}>
        {signInButtonText}
      </react_native_1.Text>
    </react_native_1.TouchableOpacity>
  </react_native_1.View>);
  const renderPrivacy = () => (<react_native_1.View>
    <react_native_1.TouchableOpacity style={SignUpScreen_style_1.default.PrivacyTextStyle} onPress={() => handlecheckPrivacy()}>
      <Iconvector.Fontisto name={checkPrivacy ? "checkbox-active" : "checkbox-passive"} size={20} color={checkPrivacy ? "#bd3e37" : "#fff"} />
      <react_native_1.View style={SignUpScreen_style_1.default.PrivacyText1}>
        <react_native_1.View style={SignUpScreen_style_1.default.PrivacyText2}>
          <react_native_1.Text style={[SignUpScreen_style_1.default.PrivacyText]}>
            {PrivacyText[0]}
          </react_native_1.Text>
          <react_native_1.TouchableOpacity onPress={() => {react_native_1.Linking.openURL('https://www.tooncontent.com/terms')}}>
            <react_native_1.Text style={[SignUpScreen_style_1.default.PrivacyText, { fontWeight: "bold", color: '#bd3e37' }]}>
              {PrivacyText[1]}
            </react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>
        <react_native_1.View style={SignUpScreen_style_1.default.PrivacyText2}>
          <react_native_1.Text style={[SignUpScreen_style_1.default.PrivacyText]}>
            {PrivacyText[2]}
          </react_native_1.Text>
          <react_native_1.TouchableOpacity onPress={() => {react_native_1.Linking.openURL('https://www.tooncontent.com/policy')}}>
            <react_native_1.Text style={[SignUpScreen_style_1.default.PrivacyText, { fontWeight: "bold", color: '#bd3e37' }]}>
              {PrivacyText[3]}
            </react_native_1.Text>
          </react_native_1.TouchableOpacity>
          <react_native_1.Text style={[SignUpScreen_style_1.default.PrivacyText]}>
            {PrivacyText[4]}
          </react_native_1.Text>
        </react_native_1.View>
        <react_native_1.View style={SignUpScreen_style_1.default.PrivacyText2}>
        <react_native_1.TouchableOpacity onPress={() => {react_native_1.Linking.openURL('https://www.tooncontent.com/terms-electronics')}}>
            <react_native_1.Text style={[SignUpScreen_style_1.default.PrivacyText, { fontWeight: "bold", color: '#bd3e37' }]}>
              {PrivacyText[5]}
            </react_native_1.Text>
          </react_native_1.TouchableOpacity>
        </react_native_1.View>

        <react_native_1.View style={SignUpScreen_style_1.default.PrivacyText2}>
          <react_native_1.Text style={[SignUpScreen_style_1.default.PrivacyText]}>
            {PrivacyText[6]}
          </react_native_1.Text>
        </react_native_1.View>

      </react_native_1.View>
    </react_native_1.TouchableOpacity>
  </react_native_1.View>
  );
  return (<>
    <react_native_1.SafeAreaView style={SignUpScreen_style_1.default.mainContainer}>
      {renderHeaderTextContainer()}
      {renderTextInputContainer()}
      {renderPrivacy()}
    </react_native_1.SafeAreaView>
    <react_native_1.View style={{
      position: "absolute",
      bottom: react_native_helpers_1.isIPhoneNotchFamily() ? react_native_helpers_1.getStatusBarHeight() : 8,
    }}>
      {checkPrivacy && renderSignUpButton()}
      {renderSignInTextContainer()}
    </react_native_1.View>
  </>);
};
exports.default = SignUpScreen;
//# sourceMappingURL=SignUpScreen.js.map