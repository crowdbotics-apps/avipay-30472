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
      <View style={styles.View_368_658}>
        <View style={styles.View_368_659} />
        <View style={styles.View_576_2764} />
      </View>
      <View style={styles.View_368_676}>
        <View style={styles.View_368_677}>
          <View style={styles.View_368_684} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01ca/57fa/1f30a9a8b13c4ba4ab4c394b60a098e8"
            }}
            style={styles.ImageBackground_368_678}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e6c/f7e0/e3dc09de8d7066242a3345956a46f0d7"
            }}
            style={styles.ImageBackground_368_679}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd9a/54fd/020e54c19e671f701740d8c4b50c73bb"
            }}
            style={styles.ImageBackground_368_680}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d269/f791/99868d2c7ab4761ea9877409c84ecf84"
            }}
            style={styles.ImageBackground_368_681}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/442d/2257/47ced7a5a487e15b238ead0c6c2ae310"
            }}
            style={styles.ImageBackground_369_796}
          />
        </View>
        <View style={styles.View_368_685}>
          <View style={styles.View_368_686}>
            <Text style={styles.Text_368_686}>Flashlight</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/842e/5012/be8be7e9a5a9def26c43493b170bc04d"
            }}
            style={styles.ImageBackground_368_687}
          />
        </View>
        <View style={styles.View_575_2762}>
          <View style={styles.View_I575_2762_369_798}>
            <View style={styles.View_I575_2762_369_799}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2152/3662/8e6a16a5af61b605615068e03ad732e1"
                }}
                style={styles.ImageBackground_I575_2762_369_800}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ebc/26d3/0fc3e629d260ea9b1f454a89ff2e4e38"
                }}
                style={styles.ImageBackground_I575_2762_369_803}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_575_2763}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddae/36cd/57972d2eff6342b07701fa38de17e49c"
            }}
            style={styles.ImageBackground_I575_2763_551_4768}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_368_794}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("360_473"))
        }
      >
        <View style={styles.View_368_711} />
        <View style={styles.View_368_712}>
          <Text style={styles.Text_368_712}>Switch to QR Code</Text>
        </View>
        <View style={styles.View_368_713}>
          <View style={styles.View_368_714}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c5e/6075/a4b63870c86522c30c9afe84ee541d41"
              }}
              style={styles.ImageBackground_368_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d7/0f9c/25cbeee3f2d2df23b8357a751c5c481a"
              }}
              style={styles.ImageBackground_368_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16e6/e164/f9c2e06f8e6ff30b7aaa81b555eb39db"
              }}
              style={styles.ImageBackground_368_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16e6/e164/f9c2e06f8e6ff30b7aaa81b555eb39db"
              }}
              style={styles.ImageBackground_368_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16e6/e164/f9c2e06f8e6ff30b7aaa81b555eb39db"
              }}
              style={styles.ImageBackground_368_723}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d7/0f9c/25cbeee3f2d2df23b8357a751c5c481a"
              }}
              style={styles.ImageBackground_368_725}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8263/c7da/72761e6055cd0d54b4f45a5c47893128"
              }}
              style={styles.ImageBackground_368_727}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8263/c7da/72761e6055cd0d54b4f45a5c47893128"
              }}
              style={styles.ImageBackground_368_729}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8263/c7da/72761e6055cd0d54b4f45a5c47893128"
              }}
              style={styles.ImageBackground_368_731}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/185b/83b2/cd6ac8e9cdc8834526fbac34b8b789a1"
              }}
              style={styles.ImageBackground_368_733}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5888/efbe/7db208c1b8b4751f9ddd50ed2511bb44"
              }}
              style={styles.ImageBackground_368_735}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecf2/fadd/0cf845a3ab19f05c9affcf6e5a37f2e4"
              }}
              style={styles.ImageBackground_368_737}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d36/8a07/625e078fb861f3011fa94197e093c3cd"
              }}
              style={styles.ImageBackground_368_739}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_368_689}>
        <View style={styles.View_368_690}>
          <View style={styles.View_368_691}>
            <Text style={styles.Text_368_691}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_368_692}>
          <View style={styles.View_368_693}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_368_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_368_697}
            />
          </View>
          <View style={styles.View_368_698} />
        </View>
        <View style={styles.View_368_699}>
          <View style={styles.View_368_700}>
            <View style={styles.View_368_701} />
            <View style={styles.View_368_702} />
            <View style={styles.View_368_703} />
            <View style={styles.View_368_704} />
          </View>
        </View>
        <View style={styles.View_368_705}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e76/21a5/ca49045f4b39546b3cfd31fde18b9385"
            }}
            style={styles.ImageBackground_368_706}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(35, 36, 64, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_368_658: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111.0655737704918%"),
    minHeight: hp("111.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.1366120218579235%")
  },
  View_368_659: {
    width: wp("100%"),
    height: hp("111.0655737704918%"),
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
  View_576_2764: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111.0655737704918%"),
    minHeight: hp("111.0655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  },
  View_368_676: {
    width: wp("49.33333740234375%"),
    height: hp("94.53551912568307%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_368_677: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    height: hp("54.644808743169406%"),
    minHeight: hp("54.644808743169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.94535519125683%")
  },
  View_368_684: {
    width: wp("16.2666748046875%"),
    height: hp("54.10074119359418%"),
    top: hp("0.1359241256296997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%")
  },
  ImageBackground_368_678: {
    width: wp("8.959580485026041%"),
    height: hp("4.873055317362801%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.707080078125003%")
  },
  ImageBackground_368_679: {
    width: wp("8.959580485026041%"),
    height: hp("4.873055317362801%"),
    top: hp("0.000033352544399178896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_368_680: {
    width: wp("8.959580485026041%"),
    height: hp("4.873055317362801%"),
    top: hp("49.63548170412825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.707080078125003%")
  },
  ImageBackground_368_681: {
    width: wp("9.066666666666666%"),
    height: hp("4.757603400391959%"),
    top: hp("49.614994903731215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_369_796: {
    width: wp("0.0000012719872756861149%"),
    height: hp("54.644808743169406%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%")
  },
  View_368_685: {
    width: wp("6.666667175292969%"),
    minWidth: wp("6.666667175292969%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666663%"),
    top: hp("40.30054644808743%")
  },
  View_368_686: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("4.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_368_686: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_368_687: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_575_2762: {
    width: wp("7.466667175292968%"),
    height: hp("3.825136872588611%"),
    top: hp("90.7103825136612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.86666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I575_2762_369_798: {
    flexGrow: 1,
    width: wp("6.400000508626302%"),
    height: hp("3.278688785156917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2732240437158424%")
  },
  View_I575_2762_369_799: {
    width: wp("6.400000508626302%"),
    height: hp("3.278688785156917%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I575_2762_369_800: {
    width: wp("6.400000508626302%"),
    height: hp("3.278688785156917%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I575_2762_369_803: {
    width: wp("1.6000003814697266%"),
    height: hp("0.819672131147541%"),
    top: hp("0.6558444330601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5201334635416828%")
  },
  TouchableOpacity_575_2763: {
    width: wp("6.400000508626302%"),
    minWidth: wp("6.400000508626302%"),
    height: hp("3.278688785156917%"),
    minHeight: hp("3.278688785156917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I575_2763_551_4768: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("1.6393443925784585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.8196721311475414%")
  },
  TouchableOpacity_368_794: {
    width: wp("13.333334350585938%"),
    minWidth: wp("13.333334350585938%"),
    height: hp("34.83606557377049%"),
    minHeight: hp("34.83606557377049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("38.114754098360656%")
  },
  View_368_711: {
    width: wp("13.333334350585938%"),
    minWidth: wp("13.333334350585938%"),
    height: hp("34.83606557377049%"),
    minHeight: hp("34.83606557377049%"),
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
  View_368_712: {
    width: wp("6.400000508626302%"),
    minWidth: wp("6.400000508626302%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("9.42622950819672%"),
    justifyContent: "flex-start"
  },
  Text_368_712: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_368_713: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666665%"),
    top: hp("2.732240437158474%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_368_714: {
    width: wp("5.625%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38750000000000284%")
  },
  ImageBackground_368_715: {
    width: wp("3.375%"),
    height: hp("2.894467213114754%"),
    top: hp("0.19211065573770014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1249999999999964%")
  },
  ImageBackground_368_717: {
    width: wp("1.875%"),
    height: hp("0.19211067202312698%"),
    top: hp("0.7748463114754074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8749999999999964%")
  },
  ImageBackground_368_719: {
    width: wp("1.125%"),
    height: hp("0.19211065573770492%"),
    top: hp("1.1590676229508148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.625%")
  },
  ImageBackground_368_721: {
    width: wp("1.125%"),
    height: hp("0.19211065573770492%"),
    top: hp("1.5432889344262293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.625%")
  },
  ImageBackground_368_723: {
    width: wp("1.125%"),
    height: hp("0.19211065573770492%"),
    top: hp("1.9275102459016367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.625%")
  },
  ImageBackground_368_725: {
    width: wp("1.875%"),
    height: hp("0.19211067202312698%"),
    top: hp("2.311731557377044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8749999999999964%")
  },
  ImageBackground_368_727: {
    width: wp("0.375%"),
    height: hp("0.19211065573770492%"),
    top: hp("1.1590676229508148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8749999999999964%")
  },
  ImageBackground_368_729: {
    width: wp("0.375%"),
    height: hp("0.19211065573770492%"),
    top: hp("1.5432889344262293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8749999999999964%")
  },
  ImageBackground_368_731: {
    width: wp("0.375%"),
    height: hp("0.19211065573770492%"),
    top: hp("1.9275102459016367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8749999999999964%")
  },
  ImageBackground_368_733: {
    width: wp("0.75%"),
    height: hp("0.5763319672131147%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8749999999999964%")
  },
  ImageBackground_368_735: {
    width: wp("0.75%"),
    height: hp("0.5763319672131147%"),
    top: hp("2.702356557377044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8749999999999964%")
  },
  ImageBackground_368_737: {
    width: wp("0.75%"),
    height: hp("0.5763319672131147%"),
    top: hp("2.702356557377044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_368_739: {
    width: wp("0.75%"),
    height: hp("0.5763319672131147%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_368_689: {
    width: wp("91.46666666666667%"),
    height: hp("2.459016393442623%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_368_690: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_368_691: {
    width: wp("9.34998779296875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_368_691: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_368_692: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.43169865842725397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%")
  },
  View_368_693: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_368_694: {
    width: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_368_697: {
    width: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5040986941811818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%")
  },
  View_368_698: {
    width: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    top: hp("0.26184248793971987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339518229166629%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_368_699: {
    width: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    top: hp("0.4917999434340845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.57932942708334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_368_700: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_368_701: {
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
  View_368_702: {
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
  View_368_703: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("1.13388019832757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5095865885416657%"),
    top: hp("0.32787218771345605%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_368_704: {
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
  View_368_705: {
    width: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    top: hp("0.4644842095713795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.47947591145834%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_368_706: {
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
