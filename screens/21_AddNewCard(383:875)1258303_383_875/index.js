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
      <TouchableOpacity
        style={styles.TouchableOpacity_384_897}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("328_343"))
        }
      >
        <View style={styles.View_384_898} />
        <View style={styles.View_384_899}>
          <Text style={styles.Text_384_899}>Add New Card</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_383_896}>
        <View style={styles.View_383_897} />
        <View style={styles.View_577_3523}>
          <View style={styles.View_577_3524}>
            <View style={styles.View_577_3525} />
            <View style={styles.View_577_3526} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0591/ed48/a6ceda766c9f53e993a5279b1187f068"
              }}
              style={styles.ImageBackground_577_3527}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/407b/7215/9443034c4e6acb6d415daeeb5732b2d3"
              }}
              style={styles.ImageBackground_577_3528}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3575/e220/cf2bc7349fae89f370edeba4d694c2f8"
              }}
              style={styles.ImageBackground_577_3529}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3575/e220/cf2bc7349fae89f370edeba4d694c2f8"
              }}
              style={styles.ImageBackground_577_3530}
            />
          </View>
          <View style={styles.View_577_3531}>
            <View style={styles.View_577_3532}>
              <Text style={styles.Text_577_3532}>AVI BANK</Text>
            </View>
            <View style={styles.View_577_3533}>
              <Text style={styles.Text_577_3533}>**** **** ****</Text>
            </View>
            <View style={styles.View_577_3534}>
              <Text style={styles.Text_577_3534}>4200</Text>
            </View>
            <View style={styles.View_577_3535}>
              <Text style={styles.Text_577_3535}>Melvin Guerrero</Text>
            </View>
            <View style={styles.View_577_3536}>
              <Text style={styles.Text_577_3536}>Card Name</Text>
            </View>
            <View style={styles.View_577_3537}>
              <Text style={styles.Text_577_3537}>Exp</Text>
            </View>
            <View style={styles.View_577_3538}>
              <Text style={styles.Text_577_3538}>01/25</Text>
            </View>
          </View>
          <View style={styles.View_577_3539}>
            <View style={styles.View_577_3540} />
            <View style={styles.View_577_3541} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b0e/62ab/2db2dbd9414af951efa55da216a474bd"
              }}
              style={styles.ImageBackground_577_3542}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b0e/62ab/2db2dbd9414af951efa55da216a474bd"
              }}
              style={styles.ImageBackground_577_3543}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b0e/62ab/2db2dbd9414af951efa55da216a474bd"
              }}
              style={styles.ImageBackground_577_3544}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b0e/62ab/2db2dbd9414af951efa55da216a474bd"
              }}
              style={styles.ImageBackground_577_3545}
            />
          </View>
        </View>
        <View style={styles.View_383_898}>
          <Text style={styles.Text_383_898}>Result</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_384_802}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("384_803"))
        }
      >
        <View style={styles.View_384_803} />
        <View style={styles.View_384_804}>
          <Text style={styles.Text_384_804}>AVI Bank</Text>
        </View>
        <View style={styles.View_384_805} />
        <View style={styles.View_384_806}>
          <Text style={styles.Text_384_806}>Bank</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a069/3fb5/e4e74ee89b34d3d164bcb62e30281fce"
          }}
          style={styles.ImageBackground_577_3496}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_383_900}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("383_901"))
        }
      >
        <View style={styles.View_383_901} />
        <View style={styles.View_384_801}>
          <Text style={styles.Text_384_801}>12 / 24</Text>
        </View>
        <View style={styles.View_383_903} />
        <View style={styles.View_383_904}>
          <Text style={styles.Text_383_904}>Expired</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_383_957}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("383_958"))
        }
      >
        <View style={styles.View_383_958} />
        <View style={styles.View_383_960} />
        <View style={styles.View_385_900}>
          <View style={styles.View_384_799}>
            <Text style={styles.Text_384_799}>123 456 789 000</Text>
          </View>
          <View style={styles.View_383_961}>
            <Text style={styles.Text_383_961}>Bank account</Text>
          </View>
        </View>
        <View style={styles.View_384_788}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8b3/7334/b3b7967ac339c359f5e0421cc1b95890"
            }}
            style={styles.ImageBackground_I384_788_167_325}
          />
        </View>
        <View style={styles.View_384_789}>
          <View style={styles.View_384_790}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da47/1df9/6b5684b8ff88f782d8fe262a5f56a6f0"
              }}
              style={styles.ImageBackground_I384_790_167_325}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_910_2115}>
        <View style={styles.View_577_3495} />
        <View style={styles.View_595_5117} />
        <View style={styles.View_595_5118}>
          <Text style={styles.Text_595_5118}>Add new card</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_595_5119}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("328_343"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I595_5119_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_383_1021}>
        <View style={styles.View_383_1022}>
          <View style={styles.View_383_1023}>
            <Text style={styles.Text_383_1023}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_383_1024}>
          <View style={styles.View_383_1025}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_383_1026}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_383_1029}
            />
          </View>
          <View style={styles.View_383_1030} />
        </View>
        <View style={styles.View_383_1031}>
          <View style={styles.View_383_1032}>
            <View style={styles.View_383_1033} />
            <View style={styles.View_383_1034} />
            <View style={styles.View_383_1035} />
            <View style={styles.View_383_1036} />
          </View>
        </View>
        <View style={styles.View_383_1037}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_383_1038}
          />
        </View>
      </View>
      <View style={styles.View_583_2937}>
        <View style={styles.View_583_2938} />
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2939}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I583_2939_319_327}>
            <View style={styles.View_I583_2939_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I583_2939_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I583_2939_319_330}
              />
            </View>
            <View style={styles.View_I583_2939_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I583_2939_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I583_2939_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2940}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I583_2940_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I583_2940_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1793/b719/a1aa755f1210d696f8851d8fababc303"
              }}
              style={styles.ImageBackground_I583_2940_319_486}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2941}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I583_2941_319_339}>
            <View style={styles.View_I583_2941_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I583_2941_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I583_2941_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I583_2941_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I583_2941_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I583_2941_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2942}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <View style={styles.View_I583_2942_319_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
              }}
              style={styles.ImageBackground_I583_2942_319_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cb/7134/60991c3b1f7388abbaaac49119c40fb5"
              }}
              style={styles.ImageBackground_I583_2942_319_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
              }}
              style={styles.ImageBackground_I583_2942_319_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f6/d981/cbf2cafa04251ce782f812db1d542238"
              }}
              style={styles.ImageBackground_I583_2942_319_323}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_583_2943}>
          <View style={styles.View_583_2944} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  TouchableOpacity_384_897: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("89.61748633879782%")
  },
  View_384_898: {
    width: wp("87.2%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_384_899: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("1.775956284152997%"),
    justifyContent: "flex-start"
  },
  Text_384_899: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_383_896: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31.284153005464482%"),
    minHeight: hp("31.284153005464482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("55.05464480874317%")
  },
  View_383_897: {
    width: wp("100%"),
    height: hp("31.284153005464482%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_577_3523: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.103825136612016%")
  },
  View_577_3524: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("21.994535519125684%"),
    minHeight: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_577_3525: {
    width: wp("87.2%"),
    height: hp("21.994535519125684%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 188, 17, 1)",
    opacity: 0.8999999761581421,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_577_3526: {
    width: wp("86.13333333333333%"),
    height: hp("21.994535519125684%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_577_3527: {
    width: wp("86.13333333333333%"),
    height: hp("21.994535519125684%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_577_3528: {
    width: wp("35.9735595703125%"),
    height: hp("20.365553475468538%"),
    top: hp("7.87571140977203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-21.333333333333336%")
  },
  ImageBackground_577_3529: {
    width: wp("51.93319498697917%"),
    height: hp("31.540048317831072%"),
    top: hp("-4.350714344795932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.146875%")
  },
  ImageBackground_577_3530: {
    width: wp("51.93319498697917%"),
    height: hp("31.540048317831072%"),
    top: hp("-13.396924962111505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.80013020833333%")
  },
  View_577_3531: {
    width: wp("44.30021565755208%"),
    minWidth: wp("44.30021565755208%"),
    height: hp("17.076502732240435%"),
    minHeight: hp("17.076502732240435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("3.278688524590173%")
  },
  View_577_3532: {
    width: wp("19.26193644205729%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_577_3532: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_577_3533: {
    width: wp("25.415053304036455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.295931790044392%"),
    justifyContent: "flex-start"
  },
  Text_577_3533: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_577_3534: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.914453124999998%"),
    top: hp("3.1269678001195302%"),
    justifyContent: "flex-start"
  },
  Text_577_3534: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_577_3535: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.344262295081961%"),
    justifyContent: "flex-start"
  },
  Text_577_3535: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_577_3536: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.15846994535518%"),
    justifyContent: "flex-start"
  },
  Text_577_3536: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_577_3537: {
    width: wp("6.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666666%"),
    top: hp("12.15846994535518%"),
    justifyContent: "flex-start"
  },
  Text_577_3537: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_577_3538: {
    width: wp("10.433547973632812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.86666666666666%"),
    top: hp("14.344262295081961%"),
    justifyContent: "flex-start"
  },
  Text_577_3538: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_577_3539: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.39999999999999%"),
    top: hp("16.256830601092894%")
  },
  View_577_3540: {
    width: wp("10.349793497721354%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 188, 17, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_577_3541: {
    width: wp("2.271906026204427%"),
    height: hp("2.90851410620851%"),
    top: hp("0.5288379439890747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.038997395833334%"),
    borderColor: "rgba(35, 36, 64, 1)",
    borderWidth: 1
  },
  ImageBackground_577_3542: {
    width: wp("4.089102172851562%"),
    height: hp("0.13220518664584133%"),
    top: hp("1.25423077025701%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.310872395833343%")
  },
  ImageBackground_577_3543: {
    width: wp("4.089102172851562%"),
    height: hp("0.13220518664584133%"),
    top: hp("2.576267263276989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.310872395833343%")
  },
  ImageBackground_577_3544: {
    width: wp("4.089102172851562%"),
    height: hp("0%"),
    top: hp("1.3203271751195444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_577_3545: {
    width: wp("4.089102172851562%"),
    height: hp("0.13220518664584133%"),
    top: hp("2.576267263276989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_383_898: {
    width: wp("14.133333333333335%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    justifyContent: "flex-start"
  },
  Text_383_898: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_384_802: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.48633879781421%")
  },
  View_384_803: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_384_804: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("6.5573770491803245%"),
    justifyContent: "flex-start"
  },
  Text_384_804: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_384_805: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("9.699453551912569%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_384_806: {
    width: wp("11.200000000000001%"),
    top: hp("1.6393442622950758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_384_806: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_577_3496: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("7.103825136612016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%")
  },
  TouchableOpacity_383_900: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.918032786885245%")
  },
  View_383_901: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_384_801: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("6.557377049180328%"),
    justifyContent: "flex-start"
  },
  Text_384_801: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_383_903: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("9.699453551912566%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_383_904: {
    width: wp("17.333333333333336%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_383_904: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_383_957: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.666666666666664%")
  },
  View_383_958: {
    width: wp("100%"),
    height: hp("12.158469945355192%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_383_960: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("10.38251366120219%"),
    backgroundColor: "rgba(102, 90, 240, 1)"
  },
  View_385_900: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.6393442622950865%")
  },
  View_384_799: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.601092896174858%"),
    justifyContent: "flex-start"
  },
  Text_384_799: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_383_961: {
    width: wp("31.733333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    justifyContent: "flex-start"
  },
  Text_383_961: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_384_788: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.26666666666667%"),
    top: hp("6.557377049180332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I384_788_167_325: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_384_789: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.26666666666667%"),
    top: hp("6.557377049180332%")
  },
  View_384_790: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I384_790_167_325: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_910_2115: {
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
  View_577_3495: {
    width: wp("100%"),
    height: hp("15.573770491803279%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_595_5117: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_595_5118: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.26666666666667%"),
    top: hp("7.923497267759563%"),
    justifyContent: "center"
  },
  Text_595_5118: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_595_5119: {
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
  ImageBackground_I595_5119_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_383_1021: {
    width: wp("91.46666666666667%"),
    height: hp("2.459016393442623%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_383_1022: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_383_1023: {
    width: wp("9.34998779296875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_383_1023: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_383_1024: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.43169865842725397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%")
  },
  View_383_1025: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_383_1026: {
    width: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_383_1029: {
    width: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5040986941811818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%")
  },
  View_383_1030: {
    width: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    top: hp("0.26184248793971987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339192708333371%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_383_1031: {
    width: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    top: hp("0.4917999434340845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.579296875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_383_1032: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_383_1033: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9153011718082946%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_383_1034: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.281510416666677%"),
    top: hp("0.6420781703594605%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_383_1035: {
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
  View_383_1036: {
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
  View_383_1037: {
    width: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    top: hp("0.4644842095713795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.4794921875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_383_1038: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_583_2937: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_583_2938: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_583_2939: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2939_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27324071998805266%")
  },
  View_I583_2939_319_328: {
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
  ImageBackground_I583_2939_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2939_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I583_2939_319_333: {
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
  ImageBackground_I583_2939_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2939_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_583_2940: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2940_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I583_2940_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2940_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_583_2941: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2941_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333984374999972%"),
    top: hp("0.2732490581241649%")
  },
  View_I583_2941_319_340: {
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
  ImageBackground_I583_2941_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2941_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2941_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126423486594888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7814453124999972%")
  },
  ImageBackground_I583_2941_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709048411885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.066210937500003%")
  },
  ImageBackground_I583_2941_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878447318988947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7328776041666742%")
  },
  TouchableOpacity_583_2942: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2942_319_319: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I583_2942_319_320: {
    width: wp("0.37209300994873046%"),
    height: hp("1.0623966409860413%"),
    top: hp("1.042383746371243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3323567708333357%")
  },
  ImageBackground_I583_2942_319_321: {
    width: wp("0.37209300994873046%"),
    height: hp("1.4796035537302819%"),
    top: hp("0.6250516964438191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4901041666666686%")
  },
  ImageBackground_I583_2942_319_322: {
    width: wp("0.37209300994873046%"),
    height: hp("0.601601209796843%"),
    top: hp("1.5030490896089361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6287760416666686%")
  },
  ImageBackground_I583_2942_319_323: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_583_2943: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_583_2944: {
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
