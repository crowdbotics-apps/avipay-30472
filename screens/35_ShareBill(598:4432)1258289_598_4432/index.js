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
      <View style={styles.View_911_1440}>
        <View style={styles.View_911_1441} />
        <View style={styles.View_911_1442}>
          <View style={styles.View_911_1443}>
            <View style={styles.View_911_1444} />
            <View style={styles.View_911_1445}>
              <Text style={styles.Text_911_1445}>Copy link</Text>
            </View>
          </View>
          <View style={styles.View_911_1446}>
            <Text style={styles.Text_911_1446}>Learn about sharing</Text>
          </View>
          <View style={styles.View_911_1447}>
            <View style={styles.View_I911_1447_460_2915}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da53/5a4b/f66fc2ec7ad56cdfcf18f4c905647ca2"
                }}
                style={styles.ImageBackground_I911_1447_460_2916}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1967/834b/7816646c6675f8588607e8af2ef2d61a"
                }}
                style={styles.ImageBackground_I911_1447_460_2919}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c6/0008/f4e260cb7c620cbb8080472a0fe6839a"
                }}
                style={styles.ImageBackground_I911_1447_460_2920}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_911_1448} />
        <View style={styles.View_911_1449}>
          <View style={styles.View_911_1450}>
            <View style={styles.View_911_1451}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                }}
                style={styles.ImageBackground_911_1452}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                }}
                style={styles.ImageBackground_911_1454}
              />
            </View>
            <View style={styles.View_911_1455}>
              <View style={styles.View_911_1456}>
                <Text style={styles.Text_911_1456}>+0123456789</Text>
              </View>
              <View style={styles.View_911_1457}>
                <Text style={styles.Text_911_1457}>Delete</Text>
              </View>
              <View style={styles.View_911_1458}>
                <Text style={styles.Text_911_1458}>Conrad Ford</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_911_1459}>
            <View style={styles.View_911_1460} />
            <View style={styles.View_911_1461}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                }}
                style={styles.ImageBackground_911_1462}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                }}
                style={styles.ImageBackground_911_1464}
              />
            </View>
            <View style={styles.View_911_1465}>
              <View style={styles.View_911_1466}>
                <Text style={styles.Text_911_1466}>414-586-7314</Text>
              </View>
              <View style={styles.View_911_1467}>
                <Text style={styles.Text_911_1467}>Delete</Text>
              </View>
              <View style={styles.View_911_1468}>
                <Text style={styles.Text_911_1468}>Jane Holden</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_911_1469}>
            <View style={styles.View_911_1470} />
            <View style={styles.View_911_1471}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                }}
                style={styles.ImageBackground_911_1472}
              />
            </View>
            <View style={styles.View_911_1475}>
              <View style={styles.View_911_1476}>
                <Text style={styles.Text_911_1476}>518-778-0800</Text>
              </View>
              <View style={styles.View_911_1477}>
                <Text style={styles.Text_911_1477}>Delete</Text>
              </View>
              <View style={styles.View_911_1478}>
                <Text style={styles.Text_911_1478}>Casey Bourn</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_911_1479}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
              }}
              style={styles.ImageBackground_911_1480}
            />
            <View style={styles.View_911_1483}>
              <View style={styles.View_911_1484}>
                <Text style={styles.Text_911_1484}>505-287-8051</Text>
              </View>
              <View style={styles.View_911_1485}>
                <Text style={styles.Text_911_1485}>Delete</Text>
              </View>
              <View style={styles.View_911_1486}>
                <Text style={styles.Text_911_1486}>Irene Perry</Text>
              </View>
            </View>
            <View style={styles.View_911_1487} />
          </View>
        </View>
        <View style={styles.View_911_1488}>
          <View style={styles.View_911_1489} />
          <View style={styles.View_911_1490} />
          <View style={styles.View_911_1491}>
            <Text style={styles.Text_911_1491}>Phone number</Text>
          </View>
          <View style={styles.View_911_1492}>
            <View style={styles.View_911_1493} />
            <View style={styles.View_911_1494}>
              <Text style={styles.Text_911_1494}>Send</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_911_1495}>
          <Text style={styles.Text_911_1495}>Shared with</Text>
        </View>
      </View>
      <View style={styles.View_911_1503}>
        <View style={styles.View_598_4440} />
        <View style={styles.View_598_4533} />
        <View style={styles.View_598_4534}>
          <Text style={styles.Text_598_4534}>Share Bill</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_598_4535}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("598_4335"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I598_4535_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_598_4502}>
        <View style={styles.View_598_4503}>
          <View style={styles.View_598_4504}>
            <Text style={styles.Text_598_4504}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_598_4505}>
          <View style={styles.View_598_4506}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_598_4507}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_598_4510}
            />
          </View>
          <View style={styles.View_598_4511} />
        </View>
        <View style={styles.View_598_4512}>
          <View style={styles.View_598_4513}>
            <View style={styles.View_598_4514} />
            <View style={styles.View_598_4515} />
            <View style={styles.View_598_4516} />
            <View style={styles.View_598_4517} />
          </View>
        </View>
        <View style={styles.View_598_4518}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_598_4519}
          />
        </View>
      </View>
      <View style={styles.View_735_2521}>
        <View style={styles.View_735_2522} />
        <TouchableOpacity
          style={styles.TouchableOpacity_735_2523}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I735_2523_319_327}>
            <View style={styles.View_I735_2523_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I735_2523_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I735_2523_319_330}
              />
            </View>
            <View style={styles.View_I735_2523_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I735_2523_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I735_2523_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_735_2524}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I735_2524_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I735_2524_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1793/b719/a1aa755f1210d696f8851d8fababc303"
              }}
              style={styles.ImageBackground_I735_2524_319_486}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_735_2525}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I735_2525_319_339}>
            <View style={styles.View_I735_2525_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I735_2525_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I735_2525_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I735_2525_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I735_2525_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I735_2525_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_735_2526}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <View style={styles.View_I735_2526_319_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
              }}
              style={styles.ImageBackground_I735_2526_319_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cb/7134/60991c3b1f7388abbaaac49119c40fb5"
              }}
              style={styles.ImageBackground_I735_2526_319_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
              }}
              style={styles.ImageBackground_I735_2526_319_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f6/d981/cbf2cafa04251ce782f812db1d542238"
              }}
              style={styles.ImageBackground_I735_2526_319_323}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_735_2527}>
          <View style={styles.View_735_2528} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_911_1440: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("63.661202185792355%"),
    minHeight: hp("63.661202185792355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.666666666666664%")
  },
  View_911_1441: {
    width: wp("100%"),
    height: hp("63.661202185792355%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_911_1442: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("56.55737704918034%")
  },
  View_911_1443: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.666666666666664%"),
    top: hp("0%")
  },
  View_911_1444: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_911_1445: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_911_1445: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1446: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("0.8196721311475414%"),
    justifyContent: "flex-start"
  },
  Text_911_1446: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1447: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I911_1447_460_2915: {
    flexGrow: 1,
    width: wp("5.333332824707031%"),
    height: hp("2.732240176591717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_I911_1447_460_2916: {
    width: wp("5.333332824707031%"),
    height: hp("2.732240176591717%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I911_1447_460_2919: {
    width: wp("0.40000076293945314%"),
    height: hp("0.8086069034096973%"),
    top: hp("0.7450958418715743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4651041666666673%")
  },
  ImageBackground_I911_1447_460_2920: {
    width: wp("0.5346672058105468%"),
    height: hp("0.2732236528657173%"),
    top: hp("1.7480735570355108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.399739583333335%")
  },
  View_911_1448: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("54.23497267759563%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_911_1449: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("17.213114754098363%")
  },
  View_911_1450: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.0983606557377%")
  },
  View_911_1451: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_911_1452: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    top: hp("0.4873807313012293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513671874999998%")
  },
  ImageBackground_911_1454: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_911_1455: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_911_1456: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%"),
    justifyContent: "flex-start"
  },
  Text_911_1456: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1457: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.066666666666656%"),
    top: hp("1.7759562841530183%"),
    justifyContent: "flex-start"
  },
  Text_911_1457: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1458: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_911_1458: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1459: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.398907103825138%")
  },
  View_911_1460: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759565%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_911_1461: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_911_1462: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    top: hp("0.4873807313012364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513671874999998%")
  },
  ImageBackground_911_1464: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_911_1465: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_911_1466: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_911_1466: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1467: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.066666666666656%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_911_1467: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1468: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_911_1468: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1469: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.699453551912569%")
  },
  View_911_1470: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_911_1471: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_911_1472: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_911_1475: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_911_1476: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%"),
    justifyContent: "flex-start"
  },
  Text_911_1476: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1477: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.066666666666656%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_911_1477: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1478: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_911_1478: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1479: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_911_1480: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_911_1483: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_911_1484: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%"),
    justifyContent: "flex-start"
  },
  Text_911_1484: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1485: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.066666666666656%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_911_1485: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1486: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_911_1486: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1487: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759565%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_911_1488: {
    width: wp("88.26666666666667%"),
    minWidth: wp("88.26666666666667%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.78688524590164%")
  },
  View_911_1489: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    top: hp("7.650273224043719%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_911_1490: {
    width: wp("62.4%"),
    minWidth: wp("62.4%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_911_1491: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("1.092896174863391%"),
    justifyContent: "flex-start"
  },
  Text_911_1491: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1492: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("0%")
  },
  View_911_1493: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
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
  View_911_1494: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666674%"),
    top: hp("1.092896174863391%"),
    justifyContent: "flex-start"
  },
  Text_911_1494: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1495: {
    width: wp("28.000000000000004%"),
    top: hp("1.7759562841530077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_911_1495: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_911_1503: {
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
  View_598_4440: {
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
  View_598_4533: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_598_4534: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333333%"),
    top: hp("7.923497267759563%"),
    justifyContent: "center"
  },
  Text_598_4534: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_598_4535: {
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
  ImageBackground_I598_4535_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_598_4502: {
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
  View_598_4503: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_598_4504: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_598_4504: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_598_4505: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.4317153346994531%")
  },
  View_598_4506: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_598_4507: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_598_4510: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.504090356045082%")
  },
  View_598_4511: {
    width: wp("4.805551147460937%"),
    minWidth: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339192708333371%"),
    top: hp("0.2618508260758201%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_598_4512: {
    width: wp("4.565274556477865%"),
    minWidth: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    minHeight: hp("1.4617523860410262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.579296875%"),
    top: hp("0.49181661970628365%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_598_4513: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_598_4514: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.915293875939208%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_598_4515: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.281510416666677%"),
    top: hp("0.6420698322233607%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_598_4516: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("1.13388019832757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.509570312500003%"),
    top: hp("0.3278555114412569%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_598_4517: {
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
  View_598_4518: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    minHeight: hp("1.5105476796301338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.4794921875%"),
    top: hp("0.4644675332991799%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_598_4519: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_735_2521: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_735_2522: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_735_2523: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I735_2523_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27322404371587083%")
  },
  View_I735_2523_319_328: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    minHeight: hp("1.0139678345351923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7182563823428723%")
  },
  ImageBackground_I735_2523_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I735_2523_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I735_2523_319_333: {
    width: wp("2.860632578531901%"),
    minWidth: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    minHeight: hp("1.4601191536324922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7029947916666686%"),
    top: hp("0%")
  },
  ImageBackground_I735_2523_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I735_2523_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_735_2524: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I735_2524_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I735_2524_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I735_2524_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_735_2525: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I735_2525_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333984374999972%"),
    top: hp("0.2732573962602629%")
  },
  View_I735_2525_319_340: {
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
  ImageBackground_I735_2525_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I735_2525_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I735_2525_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126590249316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7814453124999972%")
  },
  ImageBackground_I735_2525_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709048411885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.066210937500003%")
  },
  ImageBackground_I735_2525_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878447318989089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7328776041666742%")
  },
  TouchableOpacity_735_2526: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I735_2526_319_319: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I735_2526_319_320: {
    width: wp("0.37209300994873046%"),
    height: hp("1.0623966409860413%"),
    top: hp("1.0423670700990328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3323567708333357%")
  },
  ImageBackground_I735_2526_319_321: {
    width: wp("0.37209300994873046%"),
    height: hp("1.4796035537302819%"),
    top: hp("0.6250600345799029%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4901041666666686%")
  },
  ImageBackground_I735_2526_319_322: {
    width: wp("0.37209300994873046%"),
    height: hp("0.601601209796843%"),
    top: hp("1.5030657658811464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6287760416666686%")
  },
  ImageBackground_I735_2526_319_323: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_735_2527: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_735_2528: {
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
