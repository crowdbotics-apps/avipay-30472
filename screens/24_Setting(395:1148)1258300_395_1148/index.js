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
      <View style={styles.View_580_3582}>
        <View style={styles.View_580_3583} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
          }}
          style={styles.ImageBackground_580_3600}
        />
        <View style={styles.View_580_3585}>
          <Text style={styles.Text_580_3585}>Application infomation</Text>
        </View>
        <View style={styles.View_580_3586}>
          <Text style={styles.Text_580_3586}>Other</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_395_953}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("580_3619"))
        }
      >
        <View style={styles.View_395_954} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
          }}
          style={styles.ImageBackground_580_3617}
        />
        <View style={styles.View_395_955}>
          <Text style={styles.Text_395_955}>Change Password</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_395_1154}>
        <View style={styles.View_395_1155} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a069/3fb5/e4e74ee89b34d3d164bcb62e30281fce"
          }}
          style={styles.ImageBackground_580_3611}
        />
        <View style={styles.View_396_1085}>
          <View style={styles.View_396_917}>
            <View style={styles.View_396_913}>
              <Text style={styles.Text_396_913}>English</Text>
            </View>
            <View style={styles.View_396_1114}>
              <View style={styles.View_396_1115} />
              <View style={styles.View_396_1116} />
              <View style={styles.View_396_1117} />
              <View style={styles.View_396_1118}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29c2/9435/4f3a0efb9266d1dc88e47dd8532b55ee"
                  }}
                  style={styles.ImageBackground_396_1119}
                />
                <View style={styles.View_396_1120} />
                <View style={styles.View_396_1121} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ced1/83b5/9245e0a30475fe5eba7544e2028cd61d"
                }}
                style={styles.ImageBackground_396_1122}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9966/203b/fc1c0497047fb970ee6a4e87e7c67099"
                }}
                style={styles.ImageBackground_396_1123}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa41/36eb/3640d06c91da95af150fc0e3ea65067a"
                }}
                style={styles.ImageBackground_396_1124}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2528/5c52/dd7a52e8902d5add0c5ab7d24f31513f"
                }}
                style={styles.ImageBackground_396_1125}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3da/dd6b/d2724c2e4f4215dceb2a32bed5133e19"
                }}
                style={styles.ImageBackground_396_1126}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_395_1156}>
          <Text style={styles.Text_395_1156}>Change language</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_395_1158}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("135_569"))
        }
      >
        <View style={styles.View_395_1159} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
          }}
          style={styles.ImageBackground_580_3609}
        />
        <View style={styles.View_395_1165}>
          <View style={styles.View_395_1180}>
            <Text style={styles.Text_395_1180}>Change Face ID</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_910_2117}>
        <View style={styles.View_580_3608} />
        <View style={styles.View_595_5135} />
        <View style={styles.View_595_5136}>
          <Text style={styles.Text_595_5136}>Setting</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_595_5137}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I595_5137_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_395_1215}>
        <View style={styles.View_395_1216}>
          <View style={styles.View_395_1217}>
            <Text style={styles.Text_395_1217}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_395_1218}>
          <View style={styles.View_395_1219}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_395_1220}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_395_1223}
            />
          </View>
          <View style={styles.View_395_1224} />
        </View>
        <View style={styles.View_395_1225}>
          <View style={styles.View_395_1226}>
            <View style={styles.View_395_1227} />
            <View style={styles.View_395_1228} />
            <View style={styles.View_395_1229} />
            <View style={styles.View_395_1230} />
          </View>
        </View>
        <View style={styles.View_395_1231}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_395_1232}
          />
        </View>
      </View>
      <View style={styles.View_583_3045}>
        <View style={styles.View_583_3046} />
        <View style={styles.View_583_3047}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d00f/56e7/8b928eef0f3ca73f12684c4d70e9d206"
            }}
            style={styles.ImageBackground_I583_3047_415_1179}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_3048}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I583_3048_319_339}>
            <View style={styles.View_I583_3048_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I583_3048_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I583_3048_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I583_3048_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I583_3048_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I583_3048_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_3049}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <View style={styles.View_I583_3049_319_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
              }}
              style={styles.ImageBackground_I583_3049_319_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cb/7134/60991c3b1f7388abbaaac49119c40fb5"
              }}
              style={styles.ImageBackground_I583_3049_319_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
              }}
              style={styles.ImageBackground_I583_3049_319_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f6/d981/cbf2cafa04251ce782f812db1d542238"
              }}
              style={styles.ImageBackground_I583_3049_319_323}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_3050}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I583_3050_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I583_3050_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd6/2f4b/fded99faf3c3a5c0db50c123bd673f42"
              }}
              style={styles.ImageBackground_I583_3050_319_486}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_583_3052}>
          <View style={styles.View_583_3053} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_580_3582: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.021857923497267%"),
    minHeight: hp("12.021857923497267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.72131147540984%")
  },
  View_580_3583: {
    width: wp("100%"),
    height: hp("12.021857923497267%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_580_3600: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("4.918032786885242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%")
  },
  View_580_3585: {
    width: wp("44.800000000000004%"),
    minWidth: wp("44.800000000000004%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("6.5573770491803245%"),
    justifyContent: "flex-start"
  },
  Text_580_3585: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3586: {
    width: wp("13.333333333333334%"),
    top: hp("1.6393442622950758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_580_3586: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_395_953: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.52459016393443%")
  },
  View_395_954: {
    width: wp("100%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_580_3617: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%")
  },
  View_395_955: {
    width: wp("40.266666666666666%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_395_955: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_395_1154: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.863387978142075%")
  },
  View_395_1155: {
    width: wp("100%"),
    height: hp("12.568306010928962%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_580_3611: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("7.650273224043712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%")
  },
  View_396_1085: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.103825136612027%")
  },
  View_396_917: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_396_913: {
    width: wp("13.866666666666665%"),
    minWidth: wp("13.866666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_396_913: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_396_1114: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_396_1115: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_396_1116: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_396_1117: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 23, 167, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_396_1118: {
    flexGrow: 1,
    width: wp("8.945947265625%"),
    height: hp("3.2558597502161244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7396484374999996%"),
    top: hp("-0.26181747353141915%")
  },
  ImageBackground_396_1119: {
    width: wp("7.466666666666668%"),
    height: hp("3.0965390752573483%"),
    top: hp("0.0796625522967851%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7396484374999996%")
  },
  View_396_1120: {
    width: wp("8.945947265625%"),
    height: hp("3.2558597502161244%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  View_396_1121: {
    width: wp("8.945947265625%"),
    height: hp("3.2558597502161244%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)"
  },
  ImageBackground_396_1122: {
    flexGrow: 1,
    width: wp("3.377430470784505%"),
    height: hp("1.138277913703293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.978125%"),
    top: hp("-0.2732240437158424%")
  },
  ImageBackground_396_1123: {
    flexGrow: 1,
    width: wp("3.027690887451172%"),
    height: hp("1.045468856728142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.336751302083332%"),
    top: hp("1.8712445035006837%")
  },
  ImageBackground_396_1124: {
    flexGrow: 1,
    width: wp("3.1581380208333334%"),
    height: hp("1.090361381489071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0233398437500005%"),
    top: hp("-0.22828149013831478%")
  },
  ImageBackground_396_1125: {
    flexGrow: 1,
    width: wp("3.5006726582845054%"),
    height: hp("1.1892850281762295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0233398437500005%"),
    top: hp("1.8585872129012984%")
  },
  ImageBackground_396_1126: {
    flexGrow: 1,
    width: wp("7.466666666666668%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_395_1156: {
    width: wp("40.266666666666666%"),
    top: hp("1.6393442622950865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_395_1156: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_395_1158: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.666666666666664%")
  },
  View_395_1159: {
    width: wp("100%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_580_3609: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%")
  },
  View_395_1165: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.6393442622950865%")
  },
  View_395_1180: {
    width: wp("35.199999999999996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_1180: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_910_2117: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_580_3608: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_595_5135: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_595_5136: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("7.923497267759563%"),
    justifyContent: "center"
  },
  Text_595_5136: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_595_5137: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I595_5137_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_395_1215: {
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
  View_395_1216: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_395_1217: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_395_1217: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_395_1218: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_395_1219: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_395_1220: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_395_1223: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5041070323172812%")
  },
  View_395_1224: {
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
  View_395_1225: {
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
  View_395_1226: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_395_1227: {
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
  View_395_1228: {
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
  View_395_1229: {
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
  View_395_1230: {
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
  View_395_1231: {
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
  ImageBackground_395_1232: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_583_3045: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_583_3046: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_583_3047: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I583_3047_415_1179: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27322404371587083%")
  },
  TouchableOpacity_583_3048: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_3048_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333658854166714%"),
    top: hp("0.2732573962602629%")
  },
  View_I583_3048_319_340: {
    width: wp("5.334065246582032%"),
    minWidth: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    minHeight: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I583_3048_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_3048_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_3048_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126423486594746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7814453124999972%")
  },
  ImageBackground_I583_3048_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709048411885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0662109374999886%")
  },
  ImageBackground_I583_3048_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878447318989089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.73287760416666%")
  },
  TouchableOpacity_583_3049: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_3049_319_319: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I583_3049_319_320: {
    width: wp("0.37209300994873046%"),
    height: hp("1.0623966409860413%"),
    top: hp("1.042383746371243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3323567708333357%")
  },
  ImageBackground_I583_3049_319_321: {
    width: wp("0.37209300994873046%"),
    height: hp("1.4796035537302819%"),
    top: hp("0.6250433583077069%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4900716145833357%")
  },
  ImageBackground_I583_3049_319_322: {
    width: wp("0.37209300994873046%"),
    height: hp("0.601601209796843%"),
    top: hp("1.5030490896089361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6287434895833357%")
  },
  ImageBackground_I583_3049_319_323: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_583_3050: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_3050_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I583_3050_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_3050_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_583_3052: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_583_3053: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
