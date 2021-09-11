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
      <View style={styles.View_911_1365}>
        <View style={styles.View_460_2842} />
        <View style={styles.View_460_2925}>
          <View style={styles.View_460_2922}>
            <View style={styles.View_460_2923} />
            <View style={styles.View_460_2924}>
              <Text style={styles.Text_460_2924}>Copy link</Text>
            </View>
          </View>
          <View style={styles.View_460_2921}>
            <Text style={styles.Text_460_2921}>Learn about sharing</Text>
          </View>
          <View style={styles.View_460_2914}>
            <View style={styles.View_460_2915}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da53/5a4b/f66fc2ec7ad56cdfcf18f4c905647ca2"
                }}
                style={styles.ImageBackground_460_2916}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1967/834b/7816646c6675f8588607e8af2ef2d61a"
                }}
                style={styles.ImageBackground_460_2919}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50c6/0008/f4e260cb7c620cbb8080472a0fe6839a"
                }}
                style={styles.ImageBackground_460_2920}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_460_2913} />
        <View style={styles.View_582_2736}>
          <View style={styles.View_582_2737}>
            <View style={styles.View_582_2739}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                }}
                style={styles.ImageBackground_582_2741}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                }}
                style={styles.ImageBackground_582_2744}
              />
            </View>
            <View style={styles.View_582_2745}>
              <View style={styles.View_582_2746}>
                <Text style={styles.Text_582_2746}>+0123456789</Text>
              </View>
              <View style={styles.View_582_2788}>
                <Text style={styles.Text_582_2788}>Delete</Text>
              </View>
              <View style={styles.View_582_2747}>
                <Text style={styles.Text_582_2747}>Conrad Ford</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_582_2749}>
            <View style={styles.View_582_2750} />
            <View style={styles.View_582_2751}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                }}
                style={styles.ImageBackground_582_2753}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                }}
                style={styles.ImageBackground_582_2756}
              />
            </View>
            <View style={styles.View_582_2757}>
              <View style={styles.View_582_2758}>
                <Text style={styles.Text_582_2758}>414-586-7314</Text>
              </View>
              <View style={styles.View_582_2787}>
                <Text style={styles.Text_582_2787}>Delete</Text>
              </View>
              <View style={styles.View_582_2759}>
                <Text style={styles.Text_582_2759}>Jane Holden</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_582_2761}>
            <View style={styles.View_582_2762} />
            <View style={styles.View_595_4253}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                }}
                style={styles.ImageBackground_595_4254}
              />
            </View>
            <View style={styles.View_582_2766}>
              <View style={styles.View_582_2767}>
                <Text style={styles.Text_582_2767}>518-778-0800</Text>
              </View>
              <View style={styles.View_582_2786}>
                <Text style={styles.Text_582_2786}>Delete</Text>
              </View>
              <View style={styles.View_582_2768}>
                <Text style={styles.Text_582_2768}>Casey Bourn</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_582_2770}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
              }}
              style={styles.ImageBackground_582_2771}
            />
            <View style={styles.View_582_2776}>
              <View style={styles.View_582_2777}>
                <Text style={styles.Text_582_2777}>505-287-8051</Text>
              </View>
              <View style={styles.View_582_2785}>
                <Text style={styles.Text_582_2785}>Delete</Text>
              </View>
              <View style={styles.View_582_2778}>
                <Text style={styles.Text_582_2778}>Irene Perry</Text>
              </View>
            </View>
            <View style={styles.View_582_2779} />
          </View>
        </View>
        <View style={styles.View_460_2926}>
          <View style={styles.View_460_2886} />
          <View style={styles.View_460_2901} />
          <View style={styles.View_460_2903}>
            <Text style={styles.Text_460_2903}>Phone number</Text>
          </View>
          <View style={styles.View_460_2905}>
            <View style={styles.View_460_2902} />
            <View style={styles.View_460_2904}>
              <Text style={styles.Text_460_2904}>Send</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_460_2888}>
          <Text style={styles.Text_460_2888}>Shared with</Text>
        </View>
      </View>
      <View style={styles.View_911_1364}>
        <View style={styles.View_582_2734} />
        <View style={styles.View_596_5178} />
        <View style={styles.View_596_5179}>
          <Text style={styles.Text_596_5179}>Share Analys</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_596_5180}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I596_5180_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_459_2580}>
        <View style={styles.View_459_2581}>
          <View style={styles.View_459_2582}>
            <Text style={styles.Text_459_2582}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_459_2583}>
          <View style={styles.View_459_2584}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_459_2585}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_459_2588}
            />
          </View>
          <View style={styles.View_459_2589} />
        </View>
        <View style={styles.View_459_2590}>
          <View style={styles.View_459_2591}>
            <View style={styles.View_459_2592} />
            <View style={styles.View_459_2593} />
            <View style={styles.View_459_2594} />
            <View style={styles.View_459_2595} />
          </View>
        </View>
        <View style={styles.View_459_2596}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_459_2597}
          />
        </View>
      </View>
      <View style={styles.View_595_4258}>
        <View style={styles.View_595_4259} />
        <View style={styles.View_595_4260}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab0d/c2ad/9d1e817b600b728a7301213cf4ded6aa"
            }}
            style={styles.ImageBackground_I595_4260_415_1172}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_595_4261}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I595_4261_319_327}>
            <View style={styles.View_I595_4261_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I595_4261_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I595_4261_319_330}
              />
            </View>
            <View style={styles.View_I595_4261_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I595_4261_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I595_4261_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_595_4262}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I595_4262_319_339}>
            <View style={styles.View_I595_4262_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I595_4262_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I595_4262_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I595_4262_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I595_4262_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I595_4262_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_595_4263}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I595_4263_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I595_4263_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd6/2f4b/fded99faf3c3a5c0db50c123bd673f42"
              }}
              style={styles.ImageBackground_I595_4263_319_486}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_595_4265}>
          <View style={styles.View_595_4266} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_911_1365: {
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
  View_460_2842: {
    width: wp("100%"),
    height: hp("63.661202185792355%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_460_2925: {
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
  View_460_2922: {
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
  View_460_2923: {
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
  View_460_2924: {
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
  Text_460_2924: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_2921: {
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
  Text_460_2921: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_2914: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_2915: {
    flexGrow: 1,
    width: wp("5.333332824707031%"),
    height: hp("2.732240176591717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.2732240437158424%")
  },
  ImageBackground_460_2916: {
    width: wp("5.333332824707031%"),
    height: hp("2.732240176591717%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_460_2919: {
    width: wp("0.40000076293945314%"),
    height: hp("0.8086069034096973%"),
    top: hp("0.7450791655993783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4651041666666673%")
  },
  ImageBackground_460_2920: {
    width: wp("0.5346672058105468%"),
    height: hp("0.2732236528657173%"),
    top: hp("1.7480735570355108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.399739583333335%")
  },
  View_460_2913: {
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
  View_582_2736: {
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
  View_582_2737: {
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
  View_582_2739: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_582_2741: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    top: hp("0.4873807313012293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513671874999998%")
  },
  ImageBackground_582_2744: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_2745: {
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
  View_582_2746: {
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
  Text_582_2746: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2788: {
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
  Text_582_2788: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2747: {
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
  Text_582_2747: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2749: {
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
  View_582_2750: {
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
  View_582_2751: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_582_2753: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    top: hp("0.4873807313012364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513671874999998%")
  },
  ImageBackground_582_2756: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_2757: {
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
  View_582_2758: {
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
  Text_582_2758: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2787: {
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
  Text_582_2787: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2759: {
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
  Text_582_2759: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2761: {
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
  View_582_2762: {
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
  View_595_4253: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_595_4254: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_2766: {
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
  View_582_2767: {
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
  Text_582_2767: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2786: {
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
  Text_582_2786: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2768: {
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
  Text_582_2768: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2770: {
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
  ImageBackground_582_2771: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_582_2776: {
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
  View_582_2777: {
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
  Text_582_2777: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2785: {
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
  Text_582_2785: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2778: {
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
  Text_582_2778: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_582_2779: {
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
  View_460_2926: {
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
  View_460_2886: {
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
  View_460_2901: {
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
  View_460_2903: {
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
  Text_460_2903: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_2905: {
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
  View_460_2902: {
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
  View_460_2904: {
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
  Text_460_2904: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_460_2888: {
    width: wp("28.000000000000004%"),
    top: hp("1.7759562841530077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_460_2888: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_911_1364: {
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
  View_582_2734: {
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
  View_596_5178: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_596_5179: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666664%"),
    top: hp("7.923497267759563%"),
    justifyContent: "center"
  },
  Text_596_5179: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_596_5180: {
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
  ImageBackground_I596_5180_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_459_2580: {
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
  View_459_2581: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_459_2582: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_459_2582: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_459_2583: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_459_2584: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_459_2585: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_459_2588: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5041070323172812%")
  },
  View_459_2589: {
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
  View_459_2590: {
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
  View_459_2591: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_459_2592: {
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
  View_459_2593: {
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
  View_459_2594: {
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
  View_459_2595: {
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
  View_459_2596: {
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
  ImageBackground_459_2597: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_595_4258: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_595_4259: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_595_4260: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I595_4260_415_1172: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.53346354166667%"),
    top: hp("0.27327407253245894%")
  },
  TouchableOpacity_595_4261: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I595_4261_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27324071998805266%")
  },
  View_I595_4261_319_328: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    minHeight: hp("1.0139678345351923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7182730586150967%")
  },
  ImageBackground_I595_4261_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I595_4261_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I595_4261_319_333: {
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
  ImageBackground_I595_4261_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I595_4261_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_595_4262: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I595_4262_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333984374999972%"),
    top: hp("0.2732573962602629%")
  },
  View_I595_4262_319_340: {
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
  ImageBackground_I595_4262_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I595_4262_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I595_4262_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126423486594746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7814453124999972%")
  },
  ImageBackground_I595_4262_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709048411885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.066210937500003%")
  },
  ImageBackground_I595_4262_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878447318989089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7328776041666742%")
  },
  TouchableOpacity_595_4263: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I595_4263_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I595_4263_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I595_4263_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_595_4265: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_595_4266: {
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
