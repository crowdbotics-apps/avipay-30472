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
      <View style={styles.View_125_21}>
        <View style={styles.View_125_22} />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_158_433}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("135_569"))
        }
      >
        <View style={styles.View_158_434} />
        <View style={styles.View_158_435}>
          <Text style={styles.Text_158_435}>Confirm</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_907_1769}>
        <View style={styles.View_158_424}>
          <Text style={styles.Text_158_424}>Recent code</Text>
        </View>
        <View style={styles.View_125_250}>
          <View style={styles.View_125_248}>
            <View style={styles.View_125_233} />
            <View style={styles.View_158_441}>
              <Text style={styles.Text_158_441}>4</Text>
            </View>
          </View>
          <View style={styles.View_158_437}>
            <View style={styles.View_158_438} />
            <View style={styles.View_158_442}>
              <Text style={styles.Text_158_442}>5</Text>
            </View>
          </View>
          <View style={styles.View_158_439}>
            <View style={styles.View_158_440} />
            <View style={styles.View_158_443}>
              <Text style={styles.Text_158_443}>1</Text>
            </View>
          </View>
          <View style={styles.View_125_246}>
            <View style={styles.View_125_228} />
            <View style={styles.View_158_436}>
              <Text style={styles.Text_158_436}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_158_458}>
          <View style={styles.View_125_198}>
            <Text style={styles.Text_125_198}>Verify your Phone</Text>
          </View>
          <View style={styles.View_158_157}>
            <Text style={styles.Text_158_157}>
              Please enter the 4 digit code sent to 505-287-8051
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_158_293}>
        <View style={styles.View_158_294}>
          <View style={styles.View_158_295}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab63/b02e/375d6bebe41ffa6bb5c72ee7f36b693b"
              }}
              style={styles.ImageBackground_158_296}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4cc/d718/af4ec411dec1b36e47e3b70324098b11"
              }}
              style={styles.ImageBackground_158_297}
            />
          </View>
          <View style={styles.View_158_300}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c27/7a9d/e68c3824a0f94923bdc1005482507400"
              }}
              style={styles.ImageBackground_158_301}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7041/7691/d96b4bbad697755f25595cdc2b2e2d9b"
              }}
              style={styles.ImageBackground_158_302}
            />
          </View>
          <View style={styles.View_158_305}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f1c/719a/ee731fe9e21efefbf4bf82137d96e790"
              }}
              style={styles.ImageBackground_158_306}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e46/3a97/10900cfcd392f4b32af8aa3c6d48f242"
              }}
              style={styles.ImageBackground_158_307}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96e6/616d/d3a316c85df7d167a95271777baf490d"
            }}
            style={styles.ImageBackground_158_310}
          />
          <View style={styles.View_158_311}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f377/7c57/ce425f994f15d7eab4876a647e8a1ea9"
              }}
              style={styles.ImageBackground_158_312}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcda/3041/756b16e55b64aad2b16b2d3b8332bc87"
              }}
              style={styles.ImageBackground_158_313}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11d7/b85c/c63681ac7e6681ed2734a2dc548f5c6b"
              }}
              style={styles.ImageBackground_158_314}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbd1/ccde/5762182ecb5da55b35ac21c540ddf3e6"
              }}
              style={styles.ImageBackground_158_315}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1056/09c4/d564debf9dd8697afaba7722dfa499f0"
              }}
              style={styles.ImageBackground_158_316}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7707/c181/27270a2228434904dec893a34601d924"
              }}
              style={styles.ImageBackground_158_317}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eebe/51be/596b87cfa404fced5172d271f990360f"
              }}
              style={styles.ImageBackground_158_318}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ab/02ea/c33fe315f134e9fc08169973a8b1d3d7"
              }}
              style={styles.ImageBackground_158_319}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e22/9414/ef2abdf3ac1442444bc140ca87c04943"
              }}
              style={styles.ImageBackground_158_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dd3/0835/e5221cbd6bdd225853d0907b8f9063c4"
              }}
              style={styles.ImageBackground_158_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aded/70fe/e90290b13d15b379b52c16957eda7979"
              }}
              style={styles.ImageBackground_158_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddb6/1035/21d0ed77fa5b9d32c0438322d2abcbc8"
              }}
              style={styles.ImageBackground_158_323}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8f7/fdca/2f87dc05f355d684fe9137184f9c01c6"
              }}
              style={styles.ImageBackground_158_324}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/109d/41ef/e782a5222af0486b0961cf8ca9e180e2"
              }}
              style={styles.ImageBackground_158_325}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2219/bf48/ffb7645f81d4638f7d98ad16ddc34b5b"
              }}
              style={styles.ImageBackground_158_326}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bc4/311b/327dcb1388157f7a02fca1705164413f"
              }}
              style={styles.ImageBackground_158_327}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2247/1ec0/59e20f895ce224d2b7751c6df654d441"
              }}
              style={styles.ImageBackground_158_328}
            />
          </View>
          <View style={styles.View_158_333}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8ee/29d3/421af852bc98d65f9e6c901480c7055b"
              }}
              style={styles.ImageBackground_158_334}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0183/54f7/01c9b601b27a6104499a28e0ea360c65"
              }}
              style={styles.ImageBackground_158_335}
            />
            <View style={styles.View_158_336}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/514f/7f1e/dcd8e4b36da8ec6911d6b96aef109159"
                }}
                style={styles.ImageBackground_158_337}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/514f/7f1e/dcd8e4b36da8ec6911d6b96aef109159"
                }}
                style={styles.ImageBackground_158_338}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d7d/0cc8/d524842a2d5bfe3f3efdfdeb7f258181"
                }}
                style={styles.ImageBackground_158_339}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41a1/65d7/01478ba538783238a81aea75acc4ee4b"
                }}
                style={styles.ImageBackground_158_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41a1/65d7/01478ba538783238a81aea75acc4ee4b"
                }}
                style={styles.ImageBackground_158_343}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dbe/5c4c/ceb123a16a3a6fec5c1e068d36bc4c51"
              }}
              style={styles.ImageBackground_158_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a83/f83a/7898f86676e2e3cba85552bdb9ec832f"
              }}
              style={styles.ImageBackground_158_348}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1dbe/08b0/d374274b2f9a549220e70c3c7e826b2a"
              }}
              style={styles.ImageBackground_158_349}
            />
            <View style={styles.View_158_350}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a6b/8dca/a03c7a8223cbe3b47d2667bf32f85e06"
                }}
                style={styles.ImageBackground_158_351}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/44a1/2e2d213c869eadc7be6f093ab5a7cfa3"
                }}
                style={styles.ImageBackground_158_352}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1036/24f7/1e3cb54cb515ac08b503a780b41b23a0"
                }}
                style={styles.ImageBackground_158_356}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df94/71c0/0c0b03ccc76d1ff5cd2b6842dee44d16"
              }}
              style={styles.ImageBackground_158_359}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07ab/c9b9/fcd572abd69b16d8bae591451138cf53"
            }}
            style={styles.ImageBackground_158_360}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aef/37ba/7d531249ea8e4198c7e849d0f0075959"
            }}
            style={styles.ImageBackground_158_363}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbe2/330f/fe36c536491e5ec257a1bd8b8dee7c06"
            }}
            style={styles.ImageBackground_158_366}
          />
          <View style={styles.View_158_369}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0100/cab5/1a924298561f110afed5a429ea11c56c"
              }}
              style={styles.ImageBackground_158_370}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca53/3506/c00b3c076e246cbd91fb1819350881b3"
              }}
              style={styles.ImageBackground_158_372}
            />
          </View>
          <View style={styles.View_158_376}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1721/1e28/af9152f382a1578e1b3673f0030398ef"
              }}
              style={styles.ImageBackground_158_377}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acd1/2b0c/e5fb93510e3a7fd378b4d8cd8460d6da"
            }}
            style={styles.ImageBackground_158_381}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a44e/fd18/f69bd69ee32883c648a15246ef242831"
            }}
            style={styles.ImageBackground_158_406}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49e1/3c9d/f4433ea568d0df4972f637a894caac34"
            }}
            style={styles.ImageBackground_158_407}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/112b/5ef3/d695be07e8c9583f2c5c74815a8906f4"
            }}
            style={styles.ImageBackground_158_408}
          />
          <View style={styles.View_158_413}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/060e/880e/acdc4c1a0f3fad3ebeb054a0af06543b"
              }}
              style={styles.ImageBackground_158_414}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3bf/9e63/84c047b9ad864a460542b6b78d4e4bb4"
              }}
              style={styles.ImageBackground_158_415}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0a1/3fa8/b0581a55c7d2d95e82c8f68dc4ad0592"
              }}
              style={styles.ImageBackground_158_419}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_595_4857}>
        <View style={styles.View_595_4854} />
        <View style={styles.View_602_1459}>
          <Text style={styles.Text_602_1459}>Verify</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3701}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("135_479"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I567_3701_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_125_177}>
        <View style={styles.View_125_178}>
          <View style={styles.View_125_179}>
            <Text style={styles.Text_125_179}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_125_180}>
          <View style={styles.View_125_181}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_125_182}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_125_185}
            />
          </View>
          <View style={styles.View_125_186} />
        </View>
        <View style={styles.View_125_187}>
          <View style={styles.View_125_188}>
            <View style={styles.View_125_189} />
            <View style={styles.View_125_190} />
            <View style={styles.View_125_191} />
            <View style={styles.View_125_192} />
          </View>
        </View>
        <View style={styles.View_125_193}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_125_194}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_125_21: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_125_22: {
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
  TouchableOpacity_158_433: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("88.11475409836066%")
  },
  View_158_434: {
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
  View_158_435: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("2.0491803278688394%"),
    justifyContent: "flex-start"
  },
  Text_158_435: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1769: {
    width: wp("69.33333333333334%"),
    minWidth: wp("69.33333333333334%"),
    height: hp("25.81967213114754%"),
    minHeight: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666667%"),
    top: hp("51.36612021857923%")
  },
  View_158_424: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%"),
    top: hp("22.267759562841526%"),
    justifyContent: "flex-start"
  },
  Text_158_424: {
    color: "rgba(102, 90, 240, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_125_250: {
    width: wp("69.33333333333334%"),
    minWidth: wp("69.33333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.344262295081968%")
  },
  View_125_248: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.666666666666664%"),
    top: hp("0%")
  },
  View_125_233: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_158_441: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_158_441: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_158_437: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("0%")
  },
  View_158_438: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_158_442: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.79999999999999%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_158_442: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_158_439: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%")
  },
  View_158_440: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_158_443: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000085%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_158_443: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_125_246: {
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
  View_125_228: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 240, 243, 1)",
    borderColor: "rgba(102, 90, 240, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_158_436: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999999%"),
    top: hp("1.3661202185792405%"),
    justifyContent: "flex-start"
  },
  Text_158_436: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_158_458: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%")
  },
  View_125_198: {
    width: wp("54.93333333333334%"),
    minWidth: wp("54.93333333333334%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_125_198: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_158_157: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606561%"),
    justifyContent: "center"
  },
  Text_158_157: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_293: {
    width: wp("93.60000000000001%"),
    height: hp("26.775956284153008%"),
    top: hp("21.721311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%")
  },
  View_158_294: {
    width: wp("93.60000000000001%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_158_295: {
    width: wp("13.546742757161459%"),
    height: hp("4.697143575532841%"),
    top: hp("10.15838456284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.13365885416667%")
  },
  ImageBackground_158_296: {
    width: wp("10.874742635091145%"),
    height: hp("3.9480923303489477%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6720052083333172%")
  },
  ImageBackground_158_297: {
    width: wp("12.243527221679686%"),
    height: hp("3.2651252433901927%"),
    top: hp("1.4320081700392784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_158_300: {
    width: wp("16.147628784179688%"),
    height: hp("9.586050731888236%"),
    top: hp("4.605536122139689%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.814973958333326%")
  },
  ImageBackground_158_301: {
    width: wp("16.147628784179688%"),
    height: hp("6.486292354396133%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_302: {
    width: wp("13.617809041341145%"),
    height: hp("8.306686734892633%"),
    top: hp("1.2793702505976796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4779296875000014%")
  },
  View_158_305: {
    width: wp("17.35745849609375%"),
    height: hp("11.265955857240437%"),
    top: hp("4.024267978355539%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.347591145833334%")
  },
  ImageBackground_158_306: {
    width: wp("17.35745849609375%"),
    height: hp("7.49838208891655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_307: {
    width: wp("13.231187947591147%"),
    height: hp("9.930763869989114%"),
    top: hp("1.3351857336492436%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3445963541666686%")
  },
  ImageBackground_158_310: {
    width: wp("10.485362752278645%"),
    height: hp("5.4224254003639425%"),
    top: hp("11.804749535732583%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.052864583333335%")
  },
  View_158_311: {
    width: wp("23.834330240885418%"),
    height: hp("24.784323687110444%"),
    top: hp("1.919839160689893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.856640625%")
  },
  ImageBackground_158_312: {
    width: wp("6.231708272298177%"),
    height: hp("3.430073378516025%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.772721354166666%")
  },
  ImageBackground_158_313: {
    width: wp("7.024288431803385%"),
    height: hp("13.766454477779199%"),
    top: hp("10.444666127689555%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.183528645833334%")
  },
  ImageBackground_158_314: {
    width: wp("6.054132080078125%"),
    height: hp("7.327461763809287%"),
    top: hp("10.447050834614071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.178841145833331%")
  },
  ImageBackground_158_315: {
    width: wp("8.013269551595052%"),
    height: hp("14.590433256222251%"),
    top: hp("9.964606279883885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4473307291666657%")
  },
  ImageBackground_158_316: {
    width: wp("10.943816121419271%"),
    height: hp("3.9520633676664425%"),
    top: hp("5.136275161159492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.284505208333336%")
  },
  ImageBackground_158_317: {
    width: wp("5.634356689453125%"),
    height: hp("3.150488900356605%"),
    top: hp("3.234229582906419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.183528645833334%")
  },
  ImageBackground_158_318: {
    width: wp("9.358043416341145%"),
    height: hp("6.721356397118074%"),
    top: hp("4.557375048027662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.435546875%")
  },
  ImageBackground_158_319: {
    width: wp("2.0522483825683593%"),
    height: hp("0.9720591248058882%"),
    top: hp("3.2485545007257493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.655533854166666%")
  },
  ImageBackground_158_320: {
    width: wp("3.862779235839844%"),
    height: hp("2.4593418413172654%"),
    top: hp("1.4317079971396858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.428645833333334%")
  },
  ImageBackground_158_321: {
    width: wp("4.925931294759114%"),
    height: hp("1.6698033431840071%"),
    top: hp("1.2515542285689882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.587434895833333%")
  },
  ImageBackground_158_322: {
    width: wp("3.314896901448568%"),
    height: hp("0.8123545698780831%"),
    top: hp("7.958083856301229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.51940104166667%")
  },
  ImageBackground_158_323: {
    width: wp("4.328528340657552%"),
    height: hp("1.2443331421398725%"),
    top: hp("23.539992368937842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.307421875000001%")
  },
  ImageBackground_158_324: {
    width: wp("4.351667785644532%"),
    height: hp("1.146408378100786%"),
    top: hp("23.637915439293035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.5333984375%")
  },
  ImageBackground_158_325: {
    width: wp("1.072802225748698%"),
    height: hp("0.17065977463956739%"),
    top: hp("3.3263659868084012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.376627604166664%")
  },
  ImageBackground_158_326: {
    width: wp("2.299327850341797%"),
    height: hp("3.704336301876548%"),
    top: hp("7.480708888319672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.435546875%")
  },
  ImageBackground_158_327: {
    width: wp("2.145532480875651%"),
    height: hp("1.838268868910159%"),
    top: hp("5.106608072916664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.80390625%")
  },
  ImageBackground_158_328: {
    width: wp("5.934449768066406%"),
    height: hp("8.999918327956903%"),
    top: hp("4.56026004311817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_158_333: {
    width: wp("45.34072672526042%"),
    height: hp("20.51176060744322%"),
    top: hp("6.192400155823091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.582161458333335%")
  },
  ImageBackground_158_334: {
    width: wp("45.340694173177084%"),
    height: hp("17.039092642362%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_335: {
    width: wp("37.53748372395833%"),
    height: hp("16.61098042472464%"),
    top: hp("2.035489108393101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9039062499999986%")
  },
  View_158_336: {
    width: wp("35.224072265625%"),
    height: hp("17.759833830953294%"),
    top: hp("2.5609250928534806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.046679687500003%")
  },
  ImageBackground_158_337: {
    width: wp("0.7742561976114909%"),
    height: hp("0.3964685677179222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_338: {
    width: wp("0.7742561976114909%"),
    height: hp("0.3964685677179222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.44980468749999%")
  },
  ImageBackground_158_339: {
    width: wp("34.44978434244791%"),
    height: hp("0.04301121651800604%"),
    top: hp("0.17681851413080807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38717447916666714%")
  },
  ImageBackground_158_341: {
    width: wp("0.08395789464314779%"),
    height: hp("17.640362932382388%"),
    top: hp("0.11946881403688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3451171874999943%")
  },
  ImageBackground_158_343: {
    width: wp("0.08395789464314779%"),
    height: hp("17.640362932382388%"),
    top: hp("0.11946881403688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.80891927083333%")
  },
  ImageBackground_158_345: {
    width: wp("45.340694173177084%"),
    height: hp("13.900201307619856%"),
    top: hp("6.611558257556357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_348: {
    width: wp("14.403146362304685%"),
    height: hp("0.3678066482960852%"),
    top: hp("3.9676520342383874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.545833333333327%")
  },
  ImageBackground_158_349: {
    width: wp("21.455324300130208%"),
    height: hp("0.3678066482960852%"),
    top: hp("4.710429874274244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.019661458333331%")
  },
  View_158_350: {
    width: wp("20.970251464843752%"),
    height: hp("1.7794430581598335%"),
    top: hp("7.113113820227117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.439453125%")
  },
  ImageBackground_158_351: {
    width: wp("15.52712605794271%"),
    height: hp("0.2676169077555338%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.719205729166667%")
  },
  ImageBackground_158_352: {
    width: wp("20.970251464843752%"),
    height: hp("0.2676198391315064%"),
    top: hp("0.6997697340334668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_356: {
    width: wp("16.119482421875002%"),
    height: hp("0.2676198391315064%"),
    top: hp("1.5118208087858562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4253906249999986%")
  },
  ImageBackground_158_359: {
    width: wp("4.581251017252605%"),
    height: hp("1.4831154724287856%"),
    top: hp("10.205228211449796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.226757812499997%")
  },
  ImageBackground_158_360: {
    width: wp("9.160491943359375%"),
    height: hp("3.8786822980870315%"),
    top: hp("1.4067436176571064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.237109374999996%")
  },
  ImageBackground_158_363: {
    width: wp("5.6343541463216145%"),
    height: hp("2.2904260562417287%"),
    top: hp("15.825215324026644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4888020833333337%")
  },
  ImageBackground_158_366: {
    width: wp("10.489821370442709%"),
    height: hp("4.007652418209555%"),
    top: hp("6.185829704576506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.47884114583333%")
  },
  View_158_369: {
    width: wp("37.5243896484375%"),
    height: hp("2.9233390516270705%"),
    top: hp("19.145027535860656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_370: {
    width: wp("31.064469401041666%"),
    height: hp("2.20683389674119%"),
    top: hp("0.7165127113217196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_372: {
    width: wp("9.361048380533854%"),
    height: hp("2.651069463927889%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.163346354166666%")
  },
  View_158_376: {
    width: wp("9.645569864908854%"),
    height: hp("2.151903558949955%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53567708333333%")
  },
  ImageBackground_158_377: {
    width: wp("9.645569864908854%"),
    height: hp("2.151903558949955%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_381: {
    width: wp("20.87834676106771%"),
    height: hp("13.04485654570366%"),
    top: hp("13.731109118852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.270703125%")
  },
  ImageBackground_158_406: {
    width: wp("1.6524340311686199%"),
    height: hp("0.6205644763883997%"),
    top: hp("9.65951387999488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.58125%")
  },
  ImageBackground_158_407: {
    width: wp("4.211668141682943%"),
    height: hp("2.2470119872379826%"),
    top: hp("24.440427686347334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.38834635416666%")
  },
  ImageBackground_158_408: {
    width: wp("6.016819254557292%"),
    height: hp("1.94323271350131%"),
    top: hp("24.784809383538253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7611979166666663%")
  },
  View_158_413: {
    width: wp("9.393702189127605%"),
    height: hp("1.9011266895982086%"),
    top: hp("23.983814677254102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.779036458333334%")
  },
  ImageBackground_158_414: {
    width: wp("9.393702189127605%"),
    height: hp("1.9011266895982086%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_415: {
    width: wp("6.128764851888021%"),
    height: hp("0.3870898257187807%"),
    top: hp("0.3487008516905732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0027994791666686%")
  },
  ImageBackground_158_419: {
    width: wp("6.128764851888021%"),
    height: hp("0.38708976057709243%"),
    top: hp("1.1010341956967196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0027994791666686%")
  },
  View_595_4857: {
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
  View_595_4854: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_602_1459: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%"),
    top: hp("3.415300546448086%"),
    justifyContent: "center"
  },
  Text_602_1459: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_567_3701: {
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
  ImageBackground_I567_3701_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_125_177: {
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
  View_125_178: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_125_179: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_179: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_125_180: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_125_181: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_125_182: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_125_185: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5041070323172812%")
  },
  View_125_186: {
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
  View_125_187: {
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
  View_125_188: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_125_189: {
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
  View_125_190: {
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
  View_125_191: {
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
  View_125_192: {
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
  View_125_193: {
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
  ImageBackground_125_194: {
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
