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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4898/2a6e/5ff484cafb57d4046dab0bf7b865cc37"
        }}
        style={styles.ImageBackground_911_1369}
      />
      <View style={styles.View_469_2624}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e3a/2a92/1025da84b39f208f2f16dafc644814fc"
          }}
          style={styles.ImageBackground_515_3725}
        />
        <View style={styles.View_482_2616}>
          <View style={styles.View_482_2617} />
          <View style={styles.View_482_2618}>
            <Text style={styles.Text_482_2618}>Done</Text>
          </View>
        </View>
        <View style={styles.View_482_2601}>
          <View style={styles.View_482_2602} />
          <View style={styles.View_482_2604}>
            <View style={styles.View_482_2605} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e13/e6c0/e612a93d77eaf030cf2c0669fe5e9994"
              }}
              style={styles.ImageBackground_482_2606}
            />
          </View>
          <View style={styles.View_482_2608}>
            <View style={styles.View_482_2609}>
              <Text style={styles.Text_482_2609}>123 456 789 000</Text>
            </View>
            <View style={styles.View_482_2610}>
              <Text style={styles.Text_482_2610}>AVI BANK</Text>
            </View>
            <View style={styles.View_482_2611}>
              <Text style={styles.Text_482_2611}>$ 12,769.00</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aadb/8292/7390892de66844e22691d375a52c2e3e"
              }}
              style={styles.ImageBackground_482_2612}
            />
          </View>
        </View>
        <View style={styles.View_515_3724}>
          <View style={styles.View_482_2599}>
            <Text style={styles.Text_482_2599}>$ 123.00</Text>
          </View>
          <View style={styles.View_481_2597}>
            <Text style={styles.Text_481_2597}>Total top up</Text>
          </View>
          <View style={styles.View_481_2595}>
            <Text style={styles.Text_481_2595}>
              Top up has been successfully done
            </Text>
          </View>
          <View style={styles.View_478_2814}>
            <Text style={styles.Text_478_2814}>Top up success</Text>
          </View>
        </View>
        <View style={styles.View_478_2815}>
          <View style={styles.View_478_2804}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b6a/7bf0/22ee11255a050573ed56af61e08ac002"
              }}
              style={styles.ImageBackground_478_2805}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb76/f038/c56ca8d62d7c52739e4196cdf4ac06a0"
              }}
              style={styles.ImageBackground_478_2806}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc15/5756/ac0209249e79b8bca83068411099624b"
              }}
              style={styles.ImageBackground_478_2807}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b41/f3f4/898aed6ebebd518a12cae60d975dc7e4"
            }}
            style={styles.ImageBackground_478_2809}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90ee/07bf/9b0250b2f1433816b684e9fa7c2eb140"
          }}
          style={styles.ImageBackground_469_2634}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_582_2996}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("598_4432"))
        }
      >
        <View style={styles.View_I582_2996_205_2076}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d2a/83d8/9fcb5974073e15557530de83a1c6403e"
            }}
            style={styles.ImageBackground_I582_2996_205_2077}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f01/8e6a/9915edb9c5f5a20c72a3195fcf18a876"
            }}
            style={styles.ImageBackground_I582_2996_205_2080}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e67a/8266/eb09553dd8cf969a4a088298b82f9d30"
            }}
            style={styles.ImageBackground_I582_2996_205_2083}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_469_2603}>
        <View style={styles.View_469_2604}>
          <View style={styles.View_469_2605}>
            <Text style={styles.Text_469_2605}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_469_2606}>
          <View style={styles.View_469_2607}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_469_2608}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_469_2611}
            />
          </View>
          <View style={styles.View_469_2612} />
        </View>
        <View style={styles.View_469_2613}>
          <View style={styles.View_469_2614}>
            <View style={styles.View_469_2615} />
            <View style={styles.View_469_2616} />
            <View style={styles.View_469_2617} />
            <View style={styles.View_469_2618} />
          </View>
        </View>
        <View style={styles.View_469_2619}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e76/21a5/ca49045f4b39546b3cfd31fde18b9385"
            }}
            style={styles.ImageBackground_469_2620}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(102, 90, 240, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_911_1369: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_469_2624: {
    width: wp("91.46666666666667%"),
    height: hp("66.93989071038251%"),
    top: hp("21.994535519125684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  ImageBackground_515_3725: {
    width: wp("91.46666666666667%"),
    height: hp("62.568306010928964%"),
    top: hp("4.371584699453553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_482_2616: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("55.1912568306011%")
  },
  View_482_2617: {
    width: wp("82.93333333333334%"),
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
  View_482_2618: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.26666666666667%"),
    top: hp("2.0491803278688394%"),
    justifyContent: "flex-start"
  },
  Text_482_2618: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_482_2601: {
    width: wp("82.93333333333334%"),
    minWidth: wp("82.93333333333334%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("40.983606557377044%")
  },
  View_482_2602: {
    width: wp("82.93333333333334%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_482_2604: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("1.63934426229509%")
  },
  View_482_2605: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 188, 17, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_482_2606: {
    width: wp("6.981818135579427%"),
    height: hp("3.623814139861227%"),
    top: hp("1.4667781975751382%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9922200520833346%")
  },
  View_482_2608: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    top: hp("1.63934426229509%")
  },
  View_482_2609: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_482_2609: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_482_2610: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-start"
  },
  Text_482_2610: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_482_2611: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.73333333333333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_482_2611: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_482_2612: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333328%"),
    top: hp("1.5027322404371546%")
  },
  View_515_3724: {
    width: wp("69.33333333333334%"),
    minWidth: wp("69.33333333333334%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("14.207650273224047%")
  },
  View_482_2599: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%"),
    top: hp("17.213114754098356%"),
    justifyContent: "flex-start"
  },
  Text_482_2599: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_481_2597: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("12.295081967213108%"),
    justifyContent: "flex-start"
  },
  Text_481_2597: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_481_2595: {
    width: wp("69.33333333333334%"),
    minWidth: wp("69.33333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032783%"),
    justifyContent: "flex-start"
  },
  Text_481_2595: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_478_2814: {
    width: wp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    justifyContent: "flex-start"
  },
  Text_478_2814: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_478_2815: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.866666666666667%"),
    top: hp("0%")
  },
  View_478_2804: {
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  ImageBackground_478_2805: {
    width: wp("17.066666666666666%"),
    height: hp("8.743169398907105%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_478_2806: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%")
  },
  ImageBackground_478_2807: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%")
  },
  ImageBackground_478_2809: {
    width: wp("39.733333333333334%"),
    height: hp("5.05464480874317%"),
    top: hp("3.142076502732241%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_469_2634: {
    width: wp("84.53333333333333%"),
    height: hp("0%"),
    top: hp("38.25136612021857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666667%")
  },
  TouchableOpacity_582_2996: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.13333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I582_2996_205_2076: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.27322404371584774%")
  },
  ImageBackground_I582_2996_205_2077: {
    width: wp("5.333333333333334%"),
    height: hp("1.8284103258059976%"),
    top: hp("0.9038206006659824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I582_2996_205_2080: {
    width: wp("0.400007692972819%"),
    height: hp("1.8013916380418455%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4666341145833286%")
  },
  ImageBackground_I582_2996_205_2083: {
    width: wp("1.954738489786784%"),
    height: hp("0.5879080360704433%"),
    top: hp("0.0013674543203556766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6893229166666686%")
  },
  View_469_2603: {
    width: wp("91.46666666666667%"),
    height: hp("2.459016393442623%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_469_2604: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_469_2605: {
    width: wp("9.34998779296875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_469_2605: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_469_2606: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.4317153346994531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%")
  },
  View_469_2607: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_469_2608: {
    width: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_469_2611: {
    width: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    top: hp("0.504090356045082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%")
  },
  View_469_2612: {
    width: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    top: hp("0.2618508260758201%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339518229166629%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_469_2613: {
    width: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    top: hp("0.49181661970628365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.57932942708334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_469_2614: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_469_2615: {
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
  View_469_2616: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2814778645833371%"),
    top: hp("0.6420698322233607%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_469_2617: {
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
  View_469_2618: {
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
  View_469_2619: {
    width: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    top: hp("0.4644675332991799%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.4794921875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_469_2620: {
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
