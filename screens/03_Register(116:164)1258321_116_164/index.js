import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_421_1186}>
        <View style={styles.View_421_1187} />
      </View>
      <View style={styles.View_907_1765}>
        <TouchableOpacity
          style={styles.TouchableOpacity_125_19}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("112_430"))
          }
        >
          <Text style={styles.Text_125_19}>Already have account ? Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_156_1527}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("135_479"))
          }
        >
          <View style={styles.View_156_1528} />
          <View style={styles.View_156_1529}>
            <Text style={styles.Text_156_1529}>Register</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_125_251}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("125_73"))
          }
        >
          <View style={styles.View_123_159} />
          <View style={styles.View_125_73}>
            <Text style={styles.Text_125_73}>
              Be creating your account you have to agree with our Teams and
              conditions
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_170_217}>
          <View style={styles.View_170_218} />
          <View style={styles.View_170_355}>
            <Text style={styles.Text_170_355}>At least 8 characters</Text>
          </View>
          <View style={styles.View_170_221}>
            <View style={styles.View_I170_221_156_1531}>
              <View style={styles.View_I170_221_156_1532}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/add6/c1d3/3bc36970c3558c28f5ce1b8d12f7517e"
                  }}
                  style={styles.ImageBackground_I170_221_156_1533}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876b/cada/461a4906e181a1fe6a43f5712102cc06"
                  }}
                  style={styles.ImageBackground_I170_221_156_1534}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_170_222}>
            <Text style={styles.Text_170_222}>Confirm password</Text>
          </View>
        </View>
        <View style={styles.View_170_194}>
          <View style={styles.View_170_195} />
          <View style={styles.View_170_216}>
            <Text style={styles.Text_170_216}>At least 8 characters</Text>
          </View>
          <View style={styles.View_170_197}>
            <View style={styles.View_I170_197_156_1531}>
              <View style={styles.View_I170_197_156_1532}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/add6/c1d3/3bc36970c3558c28f5ce1b8d12f7517e"
                  }}
                  style={styles.ImageBackground_I170_197_156_1533}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876b/cada/461a4906e181a1fe6a43f5712102cc06"
                  }}
                  style={styles.ImageBackground_I170_197_156_1534}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_170_198}>
            <Text style={styles.Text_170_198}>Password</Text>
          </View>
        </View>
        <View style={styles.View_169_638}>
          <View style={styles.View_169_639} />
          <View style={styles.View_169_648}>
            <Text style={styles.Text_169_648}>505-287-8051</Text>
          </View>
          <View style={styles.View_169_643}>
            <Text style={styles.Text_169_643}>Phone</Text>
          </View>
        </View>
        <View style={styles.View_125_11}>
          <View style={styles.View_116_189} />
          <View style={styles.View_593_3861}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da47/1df9/6b5684b8ff88f782d8fe262a5f56a6f0"
              }}
              style={styles.ImageBackground_I593_3861_167_325}
            />
          </View>
          <View style={styles.View_170_354}>
            <Text style={styles.Text_170_354}>Melvin Guerrero</Text>
          </View>
          <View style={styles.View_116_194}>
            <Text style={styles.Text_116_194}>Username</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_561_2705}>
        <View style={styles.View_595_4852} />
        <View style={styles.View_561_2707}>
          <Text style={styles.Text_561_2707}>Register</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_561_2708}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("278_311"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I561_2708_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_125_156}>
        <View style={styles.View_125_157}>
          <View style={styles.View_125_158}>
            <Text style={styles.Text_125_158}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_125_159}>
          <View style={styles.View_125_160}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_125_161}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_125_164}
            />
          </View>
          <View style={styles.View_125_165} />
        </View>
        <View style={styles.View_125_166}>
          <View style={styles.View_125_167}>
            <View style={styles.View_125_168} />
            <View style={styles.View_125_169} />
            <View style={styles.View_125_170} />
            <View style={styles.View_125_171} />
          </View>
        </View>
        <View style={styles.View_125_172}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_125_173}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_421_1186: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_421_1187: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  },
  View_907_1765: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("79.50819672131148%"),
    minHeight: hp("79.50819672131148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("17.21311475409836%")
  },
  TouchableOpacity_125_19: {
    width: wp("57.86666666666667%"),
    minWidth: wp("57.86666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%"),
    top: hp("76.22950819672133%"),
    justifyContent: "flex-start"
  },
  Text_125_19: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_156_1527: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("67.21311475409837%")
  },
  View_156_1528: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_156_1529: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_156_1529: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_125_251: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.28415300546449%")
  },
  View_123_159: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%"),
    backgroundColor: "rgba(238, 240, 243, 1)",
    borderColor: "rgba(102, 90, 240, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_125_73: {
    width: wp("76.53333333333333%"),
    minWidth: wp("76.53333333333333%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_73: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_217: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.62295081967213%")
  },
  View_170_218: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_170_355: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("5.464480874316941%"),
    justifyContent: "flex-start"
  },
  Text_170_355: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_221: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("5.737704918032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I170_221_156_1531: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.4781420765027349%")
  },
  View_I170_221_156_1532: {
    width: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I170_221_156_1533: {
    width: wp("2.987060038248698%"),
    height: hp("1.3072189737538824%"),
    top: hp("0.04025652108948918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I170_221_156_1534: {
    width: wp("3.931524658203125%"),
    height: hp("1.7759562841530054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33515624999999716%")
  },
  View_170_222: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_170_222: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_194: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.41530054644809%")
  },
  View_170_195: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218577%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_170_216: {
    width: wp("42.93333333333334%"),
    minWidth: wp("42.93333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("5.464480874316941%"),
    justifyContent: "flex-start"
  },
  Text_170_216: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_197: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("5.737704918032783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I170_197_156_1531: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.4781420765027349%")
  },
  View_I170_197_156_1532: {
    width: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I170_197_156_1533: {
    width: wp("2.987060038248698%"),
    height: hp("1.3072189737538824%"),
    top: hp("0.04025652108947497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I170_197_156_1534: {
    width: wp("3.931524658203125%"),
    height: hp("1.7759562841530054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.33515624999999716%")
  },
  View_170_198: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_170_198: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_169_638: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.207650273224047%")
  },
  View_169_639: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021854%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_169_648: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("5.464480874316937%"),
    justifyContent: "flex-start"
  },
  Text_169_648: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_169_643: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_169_643: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_125_11: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_116_189: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218613%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(102, 90, 240, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_593_3861: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.6%"),
    top: hp("5.737704918032787%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I593_3861_167_325: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_170_354: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("5.464480874316941%"),
    justifyContent: "flex-start"
  },
  Text_170_354: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_116_194: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_116_194: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_561_2705: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885246%")
  },
  View_595_4852: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_561_2707: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("3.415300546448086%"),
    justifyContent: "center"
  },
  Text_561_2707: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_561_2708: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("3.415300546448086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I561_2708_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_125_156: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726776%")
  },
  View_125_157: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_125_158: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_158: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_125_159: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_125_160: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_125_161: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_125_164: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5041070323172812%")
  },
  View_125_165: {
    width: wp("4.805551147460937%"),
    minWidth: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339518229166629%"),
    top: hp("0.2618341498036201%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_125_166: {
    width: wp("4.565274556477865%"),
    minWidth: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    minHeight: hp("1.4617523860410262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.57932942708334%"),
    top: hp("0.4917999434340845%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_167: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_125_168: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9152938759392075%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_125_169: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2814778645833371%"),
    top: hp("0.6420865084955598%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_125_170: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("1.13388019832757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.509570312500003%"),
    top: hp("0.32787218771345605%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_125_171: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("1.4617486078231061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.764355468749997%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_125_172: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    minHeight: hp("1.5105476796301338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.4794921875%"),
    top: hp("0.4644842095713795%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_125_173: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
