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
      <View style={styles.View_135_570}>
        <View style={styles.View_135_571} />
      </View>
      <View style={styles.View_135_3837}>
        <View style={styles.View_135_3887}>
          <View style={styles.View_158_1429} />
          <View style={styles.View_158_1436}>
            <View style={styles.View_158_1435} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e649/23a2/9f666c7bec5d1a29c7ebabea5017a17c"
              }}
              style={styles.ImageBackground_135_3841}
            />
          </View>
        </View>
        <View style={styles.View_135_3886}>
          <View style={styles.View_135_3840}>
            <Text style={styles.Text_135_3840}>flashlight</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2f5/53bb/063c8bfa09b5311acc38dabf14595739"
            }}
            style={styles.ImageBackground_135_3838}
          />
        </View>
        <View style={styles.View_135_3845}>
          <View style={styles.View_135_3842}>
            <Text style={styles.Text_135_3842}>Images</Text>
          </View>
          <View style={styles.View_135_3857}>
            <View style={styles.View_135_3858}>
              <View style={styles.View_135_3859}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d66/f9a7/ec228cc5143a9ced49e7b39044856bdc"
                  }}
                  style={styles.ImageBackground_135_3860}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d124/d0c2/8cc73d5260e39532d82396cca617c6c0"
                  }}
                  style={styles.ImageBackground_135_3863}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_135_3828}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6b8/81fd/676acda456bc4dc7256b0e9e3ec5285a"
            }}
            style={styles.ImageBackground_135_3829}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd83/5e47/fdd3a0a0ab351dad17e12592fc907f7a"
            }}
            style={styles.ImageBackground_135_3830}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d366/d541/00df3d9cc9697be988284248a9a9b25f"
            }}
            style={styles.ImageBackground_135_3831}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1b7/6b1e/38985b706e0f42475be72cd87950e20d"
            }}
            style={styles.ImageBackground_135_3832}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cf0/f361/042eaa76b82c77ccda50c77dc55deebc"
            }}
            style={styles.ImageBackground_135_3833}
          />
          <View style={styles.View_135_3834} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_158_1437}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_161"))
        }
      >
        <View style={styles.View_158_1438} />
        <View style={styles.View_158_1439}>
          <Text style={styles.Text_158_1439}>Scan my face</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_547_3610}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_161"))
        }
      >
        <Text style={styles.Text_547_3610}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.View_158_1460}>
        <View style={styles.View_158_1431}>
          <Text style={styles.Text_158_1431}>face recognition</Text>
        </View>
        <View style={styles.View_158_1433}>
          <Text style={styles.Text_158_1433}>
            Please look into the camera and look still
          </Text>
        </View>
      </View>
      <View style={styles.View_135_572}>
        <View style={styles.View_135_573}>
          <View style={styles.View_135_574}>
            <Text style={styles.Text_135_574}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_135_575}>
          <View style={styles.View_135_576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_135_577}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_135_580}
            />
          </View>
          <View style={styles.View_135_581} />
        </View>
        <View style={styles.View_135_582}>
          <View style={styles.View_135_583}>
            <View style={styles.View_135_584} />
            <View style={styles.View_135_585} />
            <View style={styles.View_135_586} />
            <View style={styles.View_135_587} />
          </View>
        </View>
        <View style={styles.View_135_588}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_135_589}
          />
        </View>
      </View>
      <View style={styles.View_595_4856}>
        <View style={styles.View_595_4855} />
        <View style={styles.View_598_3895}>
          <Text style={styles.Text_598_3895}>Face iD</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_577_2813}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("125_20"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I577_2813_551_4768}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_135_570: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_135_571: {
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
  View_135_3837: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("57.377049180327866%"),
    minHeight: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("27.732240437158467%")
  },
  View_135_3887: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("57.377049180327866%"),
    minHeight: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_158_1429: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("57.377049180327866%"),
    minHeight: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(35, 36, 64, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_158_1436: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("57.377049180327866%"),
    minHeight: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_158_1435: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("57.377049180327866%"),
    minHeight: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_135_3841: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("57.377049180327866%"),
    minHeight: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_135_3886: {
    width: wp("22.933333333333334%"),
    minWidth: wp("22.933333333333334%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("48.907103825136616%")
  },
  View_135_3840: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666665%"),
    top: hp("0.546448087431699%"),
    justifyContent: "flex-start"
  },
  Text_135_3840: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_135_3838: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_135_3845: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    top: hp("49.18032786885246%")
  },
  View_135_3842: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.4666666666666615%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_135_3842: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_3857: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_135_3858: {
    flexGrow: 1,
    width: wp("4.444444274902343%"),
    height: hp("2.2768672046765603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4443359375000071%"),
    top: hp("0.22773117315573188%")
  },
  View_135_3859: {
    width: wp("4.444444274902343%"),
    height: hp("2.2768672046765603%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_135_3860: {
    width: wp("4.444444274902343%"),
    height: hp("2.2768672046765603%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_135_3863: {
    width: wp("1.1111114501953125%"),
    height: hp("0.5692169314525166%"),
    top: hp("0.45532893613388126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8889973958333286%")
  },
  View_135_3828: {
    width: wp("63.46666666666667%"),
    minWidth: wp("63.46666666666667%"),
    height: hp("36.6120218579235%"),
    minHeight: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.066666666666665%"),
    top: hp("7.1038251366120235%")
  },
  ImageBackground_135_3829: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("3.2416893484813922%"),
    minHeight: hp("3.2416893484813922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_135_3830: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("3.2416893484813922%"),
    minHeight: hp("3.2416893484813922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.37033798134393%")
  },
  ImageBackground_135_3831: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("3.2416893484813922%"),
    minHeight: hp("3.2416893484813922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.400000000000006%"),
    top: hp("0%")
  },
  ImageBackground_135_3832: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("3.2416893484813922%"),
    minHeight: hp("3.2416893484813922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.400000000000006%"),
    top: hp("33.37033798134393%")
  },
  ImageBackground_135_3833: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("36.6120218579235%"),
    minHeight: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("0%")
  },
  View_135_3834: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("36.6120218579235%"),
    minHeight: hp("36.6120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_158_1437: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("90.57377049180327%")
  },
  View_158_1438: {
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
  View_158_1439: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666667%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_158_1439: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_547_3610: {
    width: wp("8.799999999999999%"),
    minWidth: wp("8.799999999999999%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.6%"),
    top: hp("99.59016393442623%"),
    justifyContent: "flex-start"
  },
  Text_547_3610: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_1460: {
    width: wp("71.46666666666667%"),
    minWidth: wp("71.46666666666667%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("17.21311475409836%")
  },
  View_158_1431: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_158_1431: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_158_1433: {
    width: wp("71.46666666666667%"),
    minWidth: wp("71.46666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.05464480874317%"),
    justifyContent: "center"
  },
  Text_158_1433: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_135_572: {
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
  View_135_573: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_135_574: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_135_574: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_135_575: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_135_576: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_135_577: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_135_580: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5041070323172812%")
  },
  View_135_581: {
    width: wp("4.805551147460937%"),
    minWidth: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339192708333371%"),
    top: hp("0.2618341498036201%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_135_582: {
    width: wp("4.565274556477865%"),
    minWidth: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    minHeight: hp("1.4617523860410262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.579296875%"),
    top: hp("0.4917999434340845%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_135_583: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_135_584: {
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
  View_135_585: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.281510416666677%"),
    top: hp("0.6420865084955598%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_135_586: {
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
  View_135_587: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("1.4617486078231061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7643229166666714%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_135_588: {
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
  ImageBackground_135_589: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_595_4856: {
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
  View_595_4855: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_598_3895: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333333%"),
    top: hp("3.415300546448086%"),
    justifyContent: "center"
  },
  Text_598_3895: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_577_2813: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("3.278688524590163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I577_2813_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
