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
      <View style={styles.View_360_618}>
        <View style={styles.View_360_579} />
        <View style={styles.View_360_614} />
      </View>
      <View style={styles.View_596_5212}>
        <View style={styles.View_596_5213} />
      </View>
      <View style={styles.View_907_2113}>
        <TouchableOpacity
          style={styles.TouchableOpacity_360_650}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("361_521"))
          }
        >
          <View style={styles.View_360_646}>
            <Text style={styles.Text_360_646}>My QR</Text>
          </View>
          <View style={styles.View_360_625}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25b3/03e6/706b02d285176e2f4cc4baf8816b6b9b"
              }}
              style={styles.ImageBackground_I360_625_182_371}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_360_651}>
          <View style={styles.View_360_624}>
            <View style={styles.View_I360_624_182_384}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f6/fd1d/7420c80a00af5ff83d568b051761414b"
                }}
                style={styles.ImageBackground_I360_624_182_385}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0502/dd19/1f01b56fc3df82313c0746097e66e88c"
                }}
                style={styles.ImageBackground_I360_624_550_2909}
              />
            </View>
          </View>
          <View style={styles.View_360_645}>
            <Text style={styles.Text_360_645}>QR Scan</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_368_795}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("368_652"))
          }
        >
          <View style={styles.View_364_623} />
          <View style={styles.View_368_651}>
            <Text style={styles.Text_368_651}>Switch to barcode</Text>
          </View>
          <View style={styles.View_368_623}>
            <View style={styles.View_368_624}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a12/405a/7f1fc780add00242dddac2c15e876b25"
                }}
                style={styles.ImageBackground_368_625}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
                }}
                style={styles.ImageBackground_368_627}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
                }}
                style={styles.ImageBackground_368_629}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
                }}
                style={styles.ImageBackground_368_631}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
                }}
                style={styles.ImageBackground_368_633}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
                }}
                style={styles.ImageBackground_368_635}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8263/c7da/72761e6055cd0d54b4f45a5c47893128"
                }}
                style={styles.ImageBackground_368_637}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8263/c7da/72761e6055cd0d54b4f45a5c47893128"
                }}
                style={styles.ImageBackground_368_639}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8263/c7da/72761e6055cd0d54b4f45a5c47893128"
                }}
                style={styles.ImageBackground_368_641}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86ce/c8b2/936d4f2dd98817733642ee93c1753ca1"
                }}
                style={styles.ImageBackground_368_643}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2548/fdeb/c665d2f56980f29f15386aea1f74600c"
                }}
                style={styles.ImageBackground_368_645}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/c0b4/a7e436c47c489bdc91501ce5ea1c33d5"
                }}
                style={styles.ImageBackground_368_647}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/761e/1c90/2a0bb42a02143c582c2f7944b193aa7b"
                }}
                style={styles.ImageBackground_368_649}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_360_607}>
        <View style={styles.View_361_520}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d277/34e1/2b4cdce8a38743abe332156fef084e54"
            }}
            style={styles.ImageBackground_360_608}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48f8/07b5/949800b998df9852f8ac395bab04ef1b"
            }}
            style={styles.ImageBackground_360_609}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c491/06a1/fda21538bd745d92f6da26a92a8943ba"
            }}
            style={styles.ImageBackground_360_610}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5619/c079/f9d5f656335e59ae1e7213a7dbb30863"
            }}
            style={styles.ImageBackground_360_611}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d38a/df3f/86e0525c698e9b4d5934bbac659ede5f"
            }}
            style={styles.ImageBackground_360_612}
          />
          <View style={styles.View_360_613} />
        </View>
        <View style={styles.View_360_652}>
          <View style={styles.View_360_653}>
            <Text style={styles.Text_360_653}>Flashlight</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3aa3/a0fe/6e476a46afbe97eeb51cff9ea6473e69"
            }}
            style={styles.ImageBackground_360_654}
          />
        </View>
      </View>
      <View style={styles.View_595_4868}>
        <View style={styles.View_595_4867} />
        <View style={styles.View_369_797}>
          <View style={styles.View_369_798}>
            <View style={styles.View_369_799}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/994a/3ca1/ff5f0d28ef460d290a1de55c83221f1c"
                }}
                style={styles.ImageBackground_369_800}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ebc/26d3/0fc3e629d260ea9b1f454a89ff2e4e38"
                }}
                style={styles.ImageBackground_369_803}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_569_2779}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c73/4c30/e1fb6f93c8737a4ac9d0ffacc559c326"
            }}
            style={styles.ImageBackground_I569_2779_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_360_586}>
        <View style={styles.View_360_587}>
          <View style={styles.View_360_588}>
            <Text style={styles.Text_360_588}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_360_589}>
          <View style={styles.View_360_590}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_360_591}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_360_594}
            />
          </View>
          <View style={styles.View_360_595} />
        </View>
        <View style={styles.View_360_596}>
          <View style={styles.View_360_597}>
            <View style={styles.View_360_598} />
            <View style={styles.View_360_599} />
            <View style={styles.View_360_600} />
            <View style={styles.View_360_601} />
          </View>
        </View>
        <View style={styles.View_360_602}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e76/21a5/ca49045f4b39546b3cfd31fde18b9385"
            }}
            style={styles.ImageBackground_360_603}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_360_618: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_360_579: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_360_614: {
    width: wp("100%"),
    height: hp("110.92896174863387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_596_5212: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_596_5213: {
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
  View_907_2113: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("65.98360655737704%")
  },
  TouchableOpacity_360_650: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.400000000000006%"),
    top: hp("16.66666666666667%")
  },
  View_360_646: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_360_646: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_360_625: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I360_625_182_371: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    height: hp("2.8688550646839244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333371%"),
    top: hp("0.47814207650272067%")
  },
  View_360_651: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.66666666666667%")
  },
  View_360_624: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333335%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I360_624_182_384: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_I360_624_182_385: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I360_624_550_2909: {
    width: wp("2.9274442036946615%"),
    height: hp("0.5738032971574961%"),
    top: hp("0.5601059543630384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333343%")
  },
  View_360_645: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_360_645: {
    color: "rgba(102, 90, 240, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_368_795: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_364_623: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_368_651: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.800000000000004%"),
    top: hp("1.7759562841530112%"),
    justifyContent: "flex-start"
  },
  Text_368_651: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_368_623: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("1.7759562841530112%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_368_624: {
    width: wp("6.4%"),
    height: hp("2.8816598360655736%"),
    top: hp("0.19851434426229275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_368_625: {
    width: wp("5.65%"),
    height: hp("1.7289959016393444%"),
    top: hp("0.5763319672131075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37499999999999645%")
  },
  ImageBackground_368_627: {
    width: wp("0.375%"),
    height: hp("0.9605532786885246%"),
    top: hp("0.9605532786885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5124999999999993%")
  },
  ImageBackground_368_629: {
    width: wp("0.375%"),
    height: hp("0.5763319672131147%"),
    top: hp("0.9605532786885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2624999999999957%")
  },
  ImageBackground_368_631: {
    width: wp("0.375%"),
    height: hp("0.5763319672131147%"),
    top: hp("0.9605532786885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0124999999999957%")
  },
  ImageBackground_368_633: {
    width: wp("0.375%"),
    height: hp("0.5763319672131147%"),
    top: hp("0.9605532786885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7624999999999993%")
  },
  ImageBackground_368_635: {
    width: wp("0.375%"),
    height: hp("0.9605532786885246%"),
    top: hp("0.9605532786885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.512499999999999%")
  },
  ImageBackground_368_637: {
    width: wp("0.375%"),
    height: hp("0.19211065573770492%"),
    top: hp("1.728995901639351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2624999999999957%")
  },
  ImageBackground_368_639: {
    width: wp("0.375%"),
    height: hp("0.19211065573770492%"),
    top: hp("1.728995901639351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0124999999999957%")
  },
  ImageBackground_368_641: {
    width: wp("0.375%"),
    height: hp("0.19211065573770492%"),
    top: hp("1.728995901639351%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7624999999999993%")
  },
  ImageBackground_368_643: {
    width: wp("1.125%"),
    height: hp("0.38422131147540983%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_368_645: {
    width: wp("1.125%"),
    height: hp("0.38422131147540983%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.274999999999999%")
  },
  ImageBackground_368_647: {
    width: wp("1.125%"),
    height: hp("0.38422131147540983%"),
    top: hp("2.497438524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.274999999999999%")
  },
  ImageBackground_368_649: {
    width: wp("1.125%"),
    height: hp("0.38422131147540983%"),
    top: hp("2.497438524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_360_607: {
    width: wp("66.93334554036458%"),
    height: hp("34.2896174863388%"),
    top: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.533335367838543%")
  },
  View_361_520: {
    width: wp("66.93334554036458%"),
    minWidth: wp("66.93334554036458%"),
    height: hp("34.2896174863388%"),
    minHeight: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_360_608: {
    width: wp("9.559824625651043%"),
    height: hp("4.589949018968259%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_360_609: {
    width: wp("9.559824625651043%"),
    height: hp("4.589949018968259%"),
    top: hp("29.69966950963756%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_360_610: {
    width: wp("9.559824625651043%"),
    height: hp("4.589949018968259%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.35886027018229%")
  },
  ImageBackground_360_611: {
    width: wp("9.559824625651043%"),
    height: hp("4.589949018968259%"),
    top: hp("29.69966950963756%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.35899047851562%")
  },
  ImageBackground_360_612: {
    width: wp("66.91882731119792%"),
    height: hp("0.0000014988467715301455%"),
    top: hp("16.73497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.014503987630206439%")
  },
  View_360_613: {
    width: wp("66.91882731119792%"),
    height: hp("17.349726775956285%"),
    top: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0000152587890625%")
  },
  View_360_652: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.99999796549479%"),
    top: hp("28.688524590163937%")
  },
  View_360_653: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_360_653: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_360_654: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_595_4868: {
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
  View_595_4867: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_369_797: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("3.278688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.13333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_369_798: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.27322404371584774%")
  },
  View_369_799: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_800: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_803: {
    width: wp("1.5999998728434246%"),
    height: hp("0.8196722614309174%"),
    top: hp("0.6556714167360411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2802083333333343%")
  },
  TouchableOpacity_569_2779: {
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
  ImageBackground_I569_2779_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_360_586: {
    width: wp("91.46666666666667%"),
    height: hp("2.459016393442623%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_360_587: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_360_588: {
    width: wp("9.34998779296875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_360_588: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_360_589: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.43169865842725397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%")
  },
  View_360_590: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_360_591: {
    width: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_360_594: {
    width: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5040986941811818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140421549479171%")
  },
  View_360_595: {
    width: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    top: hp("0.26184248793971987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339436848958456%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_360_596: {
    width: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    top: hp("0.4917999434340845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.57932942708334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_360_597: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_360_598: {
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
  View_360_599: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2814860026041544%"),
    top: hp("0.6420781703594605%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_360_600: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("1.13388019832757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5095784505208343%"),
    top: hp("0.32787218771345605%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_360_601: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("1.4617486078231061%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7643473307291657%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_360_602: {
    width: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    top: hp("0.4644842095713795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.47947591145834%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_360_603: {
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
