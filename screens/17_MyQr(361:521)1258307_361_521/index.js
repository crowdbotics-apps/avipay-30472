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
      <View style={styles.View_369_841}>
        <View style={styles.View_369_825} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
          }}
          style={styles.ImageBackground_577_2908}
        />
        <View style={styles.View_369_856}>
          <Text style={styles.Text_369_856}>4000</Text>
        </View>
        <View style={styles.View_369_862}>
          <View style={styles.View_369_837}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0e6/fc53/b768ed3487ba00a18d1b21b44fb16528"
              }}
              style={styles.ImageBackground_369_838}
            />
          </View>
          <View style={styles.View_369_826}>
            <Text style={styles.Text_369_826}>Use your poin</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_369_849}>
        <View style={styles.View_369_819} />
        <View style={styles.View_369_861}>
          <View style={styles.View_369_855} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
            }}
            style={styles.ImageBackground_577_2906}
          />
          <View style={styles.View_369_854}>
            <Text style={styles.Text_369_854}>Your coupon</Text>
          </View>
        </View>
        <View style={styles.View_369_860}>
          <View style={styles.View_369_823}>
            <Text style={styles.Text_369_823}>Coupon</Text>
          </View>
          <View style={styles.View_369_827}>
            <View style={styles.View_369_828}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4291/590f/bc24a6b6b8602d4d35bc17b78432fedb"
                }}
                style={styles.ImageBackground_369_829}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e9d/61b5/d0a7456a15e744a5f05454674b927fdd"
                }}
                style={styles.ImageBackground_369_830}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10b2/f98d/1d15bcb4713d7d34b9f1ec034c43375e"
                }}
                style={styles.ImageBackground_369_831}
              />
              <View style={styles.View_369_832}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1845/a25e/fa764e8b603dce0d6cd88150bc9d0679"
                  }}
                  style={styles.ImageBackground_369_833}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3cd/7ddc/08124f9ed9b1c8fdf71e78602de65693"
                  }}
                  style={styles.ImageBackground_369_834}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_369_817}>
        <View style={styles.View_577_2809} />
        <View style={styles.View_369_858}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4eb/ec07/bc1bfaa7e35fd797373ab6d129a41731"
            }}
            style={styles.ImageBackground_363_620}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6298/83ad/470aec203bc2b395a0ab403d72f5a290"
            }}
            style={styles.ImageBackground_363_622}
          />
        </View>
        <View style={styles.View_369_857}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9899/0b41/88c124f9577b7958388fec4dbc518ff7"
            }}
            style={styles.ImageBackground_363_606}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a2d/7ff9/1ca9f3dba5fa521a57aaa6183354fc74"
            }}
            style={styles.ImageBackground_363_605}
          />
        </View>
        <View style={styles.View_369_859}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6dea/01aa/3e018fc2953c7a7555d0cc1856ab45a3"
            }}
            style={styles.ImageBackground_369_818}
          />
          <View style={styles.View_369_842}>
            <View style={styles.View_369_843}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f01/8e6a/9915edb9c5f5a20c72a3195fcf18a876"
                }}
                style={styles.ImageBackground_369_844}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51e9/c0d0/6b7ec624f4b01477e79c7691f13d4097"
                }}
                style={styles.ImageBackground_369_845}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52dd/8cf7/d19bf82407ac1d1ae54b8c1707b2dd73"
                }}
                style={styles.ImageBackground_369_846}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1ee/0a32/a61a302ac52d76bc7c473315657c5c9d"
          }}
          style={styles.ImageBackground_363_621}
        />
      </View>
      <View style={styles.View_595_5074}>
        <View style={styles.View_577_2803} />
        <View style={styles.View_595_5075} />
        <TouchableOpacity
          style={styles.TouchableOpacity_595_5076}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("598_4028"))
          }
        >
          <View style={styles.View_I595_5076_205_2076}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e71/ef17/103fc2e901ff739ed8f4c25a52cd7128"
              }}
              style={styles.ImageBackground_I595_5076_205_2077}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86b2/5573/a2b51d95d3c1e4120c915d2c62f6fc0b"
              }}
              style={styles.ImageBackground_I595_5076_205_2080}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c543/8d50/2ac0ce398e570c1448a0e5f8e9a6ebb5"
              }}
              style={styles.ImageBackground_I595_5076_205_2083}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_595_5077}>
          <Text style={styles.Text_595_5077}>My QR</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_595_5078}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I595_5078_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_361_558}>
        <View style={styles.View_361_559}>
          <View style={styles.View_361_560}>
            <Text style={styles.Text_361_560}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_361_561}>
          <View style={styles.View_361_562}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_361_563}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_361_566}
            />
          </View>
          <View style={styles.View_361_567} />
        </View>
        <View style={styles.View_361_568}>
          <View style={styles.View_361_569}>
            <View style={styles.View_361_570} />
            <View style={styles.View_361_571} />
            <View style={styles.View_361_572} />
            <View style={styles.View_361_573} />
          </View>
        </View>
        <View style={styles.View_361_574}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_361_575}
          />
        </View>
      </View>
      <View style={styles.View_577_2762}>
        <View style={styles.View_577_2763} />
        <TouchableOpacity
          style={styles.TouchableOpacity_577_2764}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I577_2764_319_327}>
            <View style={styles.View_I577_2764_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I577_2764_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I577_2764_319_330}
              />
            </View>
            <View style={styles.View_I577_2764_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I577_2764_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I577_2764_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_577_2765}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I577_2765_319_339}>
            <View style={styles.View_I577_2765_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I577_2765_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I577_2765_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I577_2765_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I577_2765_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I577_2765_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_577_2766}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <View style={styles.View_I577_2766_319_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
              }}
              style={styles.ImageBackground_I577_2766_319_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cb/7134/60991c3b1f7388abbaaac49119c40fb5"
              }}
              style={styles.ImageBackground_I577_2766_319_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
              }}
              style={styles.ImageBackground_I577_2766_319_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f6/d981/cbf2cafa04251ce782f812db1d542238"
              }}
              style={styles.ImageBackground_I577_2766_319_323}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_577_2767}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I577_2767_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I577_2767_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd6/2f4b/fded99faf3c3a5c0db50c123bd673f42"
              }}
              style={styles.ImageBackground_I577_2767_319_486}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_577_2769}>
          <View style={styles.View_577_2770} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_369_841: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("82.65027322404372%")
  },
  View_369_825: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_577_2908: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%")
  },
  View_369_856: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.8%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_369_856: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_369_862: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("2.185792349726782%")
  },
  View_369_837: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_369_838: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333341%"),
    top: hp("0.4098360655737565%")
  },
  View_369_826: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_369_826: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_849: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.63387978142076%")
  },
  View_369_819: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_369_861: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("1.639344262295083%")
  },
  View_369_855: {
    width: wp("46.13333333333333%"),
    minWidth: wp("46.13333333333333%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_577_2906: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.26666666666666%")
  },
  View_369_854: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "flex-start"
  },
  Text_369_854: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_860: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726782%")
  },
  View_369_823: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_369_823: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_827: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_369_828: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_369_829: {
    width: wp("0.37209300994873046%"),
    height: hp("0.4897507487750444%"),
    top: hp("0.031217981557389862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6727864583333334%")
  },
  ImageBackground_369_830: {
    width: wp("0.37209300994873046%"),
    height: hp("0.4400387487776293%"),
    top: hp("1.7188400518698899%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6727864583333334%")
  },
  ImageBackground_369_831: {
    width: wp("0.37209300994873046%"),
    height: hp("0.7895217567193703%"),
    top: hp("0.6874959976946826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6727864583333334%")
  },
  View_369_832: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_369_833: {
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_834: {
    width: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_817: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55.87431693989071%"),
    minHeight: hp("55.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.666666666666664%")
  },
  View_577_2809: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55.87431693989071%"),
    minHeight: hp("55.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_369_858: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("31.010928961748633%")
  },
  ImageBackground_363_620: {
    width: wp("91.46666666666667%"),
    height: hp("22.6775956284153%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_363_622: {
    width: wp("80.26666666666667%"),
    height: hp("7.240437158469945%"),
    top: hp("4.508196721311485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    resizeMode: "cover"
  },
  View_369_857: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("29.098360655737704%"),
    minHeight: hp("29.098360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.1857923497267784%")
  },
  ImageBackground_363_606: {
    width: wp("91.46666666666667%"),
    height: hp("29.098360655737704%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_363_605: {
    width: wp("56.8%"),
    height: hp("28.415300546448087%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%"),
    resizeMode: "cover"
  },
  View_369_859: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("44.67213114754098%")
  },
  ImageBackground_369_818: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_369_842: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_369_843: {
    flexGrow: 1,
    width: wp("5.333280436197916%"),
    height: hp("2.59562789416704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333984375000043%"),
    top: hp("0.34153005464480657%")
  },
  ImageBackground_369_844: {
    width: wp("0.4%"),
    height: hp("1.902275919262829%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4668945312499986%")
  },
  ImageBackground_369_845: {
    width: wp("1.9548678080240887%"),
    height: hp("0.6220223473720863%"),
    top: hp("1.2802540930242614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.689453125%")
  },
  ImageBackground_369_846: {
    width: wp("5.333280436197916%"),
    height: hp("1.930794168691166%"),
    top: hp("0.6648329437756146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_363_621: {
    width: wp("82.66666666666667%"),
    height: hp("7.765494379891806e-15%"),
    top: hp("31.147540983606554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%")
  },
  View_595_5074: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("0%")
  },
  View_577_2803: {
    width: wp("100.26666666666667%"),
    minWidth: wp("100.26666666666667%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_595_5075: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_595_5076: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I595_5076_205_2076: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371584774%")
  },
  ImageBackground_I595_5076_205_2077: {
    width: wp("5.333333333333334%"),
    height: hp("1.8284103258059976%"),
    top: hp("0.9038310233361084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I595_5076_205_2080: {
    width: wp("0.400007692972819%"),
    height: hp("1.8013916380418455%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4666341145833286%")
  },
  ImageBackground_I595_5076_205_2083: {
    width: wp("1.954738489786784%"),
    height: hp("0.5879080360704433%"),
    top: hp("0.0013674543203556766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6893229166666686%")
  },
  View_595_5077: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.266666666666666%"),
    top: hp("7.923497267759563%"),
    justifyContent: "center"
  },
  Text_595_5077: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_595_5078: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I595_5078_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_361_558: {
    width: wp("91.46666666666667%"),
    height: hp("2.459016393442623%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_361_559: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_361_560: {
    width: wp("9.34998779296875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_361_560: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_361_561: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.43169865842725397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%")
  },
  View_361_562: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_361_563: {
    width: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_361_566: {
    width: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5040986941811818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%")
  },
  View_361_567: {
    width: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    top: hp("0.26184248793971987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339518229166629%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_361_568: {
    width: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    top: hp("0.4917999434340845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.57932942708334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_361_569: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_361_570: {
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
  View_361_571: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2814778645833371%"),
    top: hp("0.6420781703594605%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_361_572: {
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
  View_361_573: {
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
  View_361_574: {
    width: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    top: hp("0.4644842095713795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.4794921875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_361_575: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_577_2762: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_577_2763: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_577_2764: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I577_2764_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27324071998805266%")
  },
  View_I577_2764_319_328: {
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
  ImageBackground_I577_2764_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I577_2764_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I577_2764_319_333: {
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
  ImageBackground_I577_2764_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I577_2764_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_577_2765: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I577_2765_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333658854166714%"),
    top: hp("0.2732490581241649%")
  },
  View_I577_2765_319_340: {
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
  ImageBackground_I577_2765_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I577_2765_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I577_2765_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126423486594888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7814453124999972%")
  },
  ImageBackground_I577_2765_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709048411885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0662109374999886%")
  },
  ImageBackground_I577_2765_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878447318988947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.73287760416666%")
  },
  TouchableOpacity_577_2766: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I577_2766_319_319: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I577_2766_319_320: {
    width: wp("0.37209300994873046%"),
    height: hp("1.0623966409860413%"),
    top: hp("1.042383746371243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3323567708333357%")
  },
  ImageBackground_I577_2766_319_321: {
    width: wp("0.37209300994873046%"),
    height: hp("1.4796035537302819%"),
    top: hp("0.6250516964438191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4900716145833357%")
  },
  ImageBackground_I577_2766_319_322: {
    width: wp("0.37209300994873046%"),
    height: hp("0.601601209796843%"),
    top: hp("1.5030490896089361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6287434895833357%")
  },
  ImageBackground_I577_2766_319_323: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_577_2767: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I577_2767_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I577_2767_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I577_2767_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_577_2769: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_577_2770: {
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
