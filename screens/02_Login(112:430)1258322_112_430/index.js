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
      <View style={styles.View_170_239}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3791/bb16/93c1f8e6f7d9ae4497ae1dbda3b5cba9"
          }}
          style={styles.ImageBackground_170_240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/005e/1065/a582239a4b80d21026e2bc52044ec706"
          }}
          style={styles.ImageBackground_170_241}
        />
        <View style={styles.View_170_243}>
          <View style={styles.View_170_244}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bd3/b7eb/86b46a016be83854f14a8fb30eb01f66"
              }}
              style={styles.ImageBackground_170_245}
            />
            <View style={styles.View_170_246}>
              <Text style={styles.Text_170_246}>return</Text>
            </View>
          </View>
          <View style={styles.View_170_247}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc7d/b1ba/9849990dcceaa305db7f9973f8d0f343"
              }}
              style={styles.ImageBackground_170_248}
            />
            <View style={styles.View_170_249}>
              <Text style={styles.Text_170_249}>space</Text>
            </View>
          </View>
          <View style={styles.View_170_250}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7cf/787b/ffc9bb37021284c78de73ce314d5cd4d"
              }}
              style={styles.ImageBackground_170_251}
            />
            <View style={styles.View_170_252}>
              <Text style={styles.Text_170_252}>123</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d913/aa08/fc8e8be1cf973acd6c10832ae6324472"
            }}
            style={styles.ImageBackground_170_253}
          />
          <View style={styles.View_170_257}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_258}
            />
            <View style={styles.View_170_259}>
              <Text style={styles.Text_170_259}>m</Text>
            </View>
          </View>
          <View style={styles.View_170_260}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_261}
            />
            <View style={styles.View_170_262}>
              <Text style={styles.Text_170_262}>n</Text>
            </View>
          </View>
          <View style={styles.View_170_263}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_264}
            />
            <View style={styles.View_170_265}>
              <Text style={styles.Text_170_265}>b</Text>
            </View>
          </View>
          <View style={styles.View_170_266}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_267}
            />
            <View style={styles.View_170_268}>
              <Text style={styles.Text_170_268}>v</Text>
            </View>
          </View>
          <View style={styles.View_170_269}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_270}
            />
            <View style={styles.View_170_271}>
              <Text style={styles.Text_170_271}>c</Text>
            </View>
          </View>
          <View style={styles.View_170_272}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_273}
            />
            <View style={styles.View_170_274}>
              <Text style={styles.Text_170_274}>x</Text>
            </View>
          </View>
          <View style={styles.View_170_275}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_276}
            />
            <View style={styles.View_170_277}>
              <Text style={styles.Text_170_277}>z</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31e2/81c3/420f016a54b1c47da82322fe11d33e42"
            }}
            style={styles.ImageBackground_170_278}
          />
          <View style={styles.View_170_281}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_282}
            />
            <View style={styles.View_170_283}>
              <Text style={styles.Text_170_283}>l</Text>
            </View>
          </View>
          <View style={styles.View_170_284}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_285}
            />
            <View style={styles.View_170_286}>
              <Text style={styles.Text_170_286}>k</Text>
            </View>
          </View>
          <View style={styles.View_170_287}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_288}
            />
            <View style={styles.View_170_289}>
              <Text style={styles.Text_170_289}>j</Text>
            </View>
          </View>
          <View style={styles.View_170_290}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_291}
            />
            <View style={styles.View_170_292}>
              <Text style={styles.Text_170_292}>h</Text>
            </View>
          </View>
          <View style={styles.View_170_293}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_294}
            />
            <View style={styles.View_170_295}>
              <Text style={styles.Text_170_295}>g</Text>
            </View>
          </View>
          <View style={styles.View_170_296}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_297}
            />
            <View style={styles.View_170_298}>
              <Text style={styles.Text_170_298}>f</Text>
            </View>
          </View>
          <View style={styles.View_170_299}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_300}
            />
            <View style={styles.View_170_301}>
              <Text style={styles.Text_170_301}>d</Text>
            </View>
          </View>
          <View style={styles.View_170_302}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_303}
            />
            <View style={styles.View_170_304}>
              <Text style={styles.Text_170_304}>s</Text>
            </View>
          </View>
          <View style={styles.View_170_305}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_306}
            />
            <View style={styles.View_170_307}>
              <Text style={styles.Text_170_307}>a</Text>
            </View>
          </View>
          <View style={styles.View_170_308}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_309}
            />
            <View style={styles.View_170_310}>
              <Text style={styles.Text_170_310}>p</Text>
            </View>
          </View>
          <View style={styles.View_170_311}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_312}
            />
            <View style={styles.View_170_313}>
              <Text style={styles.Text_170_313}>o</Text>
            </View>
          </View>
          <View style={styles.View_170_314}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_315}
            />
            <View style={styles.View_170_316}>
              <Text style={styles.Text_170_316}>i</Text>
            </View>
          </View>
          <View style={styles.View_170_317}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_318}
            />
            <View style={styles.View_170_319}>
              <Text style={styles.Text_170_319}>u</Text>
            </View>
          </View>
          <View style={styles.View_170_320}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_321}
            />
            <View style={styles.View_170_322}>
              <Text style={styles.Text_170_322}>y</Text>
            </View>
          </View>
          <View style={styles.View_170_323}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_324}
            />
            <View style={styles.View_170_325}>
              <Text style={styles.Text_170_325}>t</Text>
            </View>
          </View>
          <View style={styles.View_170_326}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_327}
            />
            <View style={styles.View_170_328}>
              <Text style={styles.Text_170_328}>r</Text>
            </View>
          </View>
          <View style={styles.View_170_329}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_330}
            />
            <View style={styles.View_170_331}>
              <Text style={styles.Text_170_331}>e</Text>
            </View>
          </View>
          <View style={styles.View_170_332}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_333}
            />
            <View style={styles.View_170_334}>
              <Text style={styles.Text_170_334}>w</Text>
            </View>
          </View>
          <View style={styles.View_170_335}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65f8/b53a/b8de97f2c4c6079bc9cb06255642033c"
              }}
              style={styles.ImageBackground_170_336}
            />
            <View style={styles.View_170_337}>
              <Text style={styles.Text_170_337}>q</Text>
            </View>
          </View>
          <View style={styles.View_170_338}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500c/8635/23c645fff4dbb9746420e7019da0cfda"
              }}
              style={styles.ImageBackground_170_339}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be1c/a5b3/b1119cf1ff8a2719e9285327d05857c6"
              }}
              style={styles.ImageBackground_170_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51e2/1053/f5e894cadf91e9ccf68b455df9768136"
              }}
              style={styles.ImageBackground_170_346}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9317/7973/938be6ac87418034d6928efdb86530b6"
            }}
            style={styles.ImageBackground_170_347}
          />
        </View>
      </View>
      <View style={styles.View_421_1188}>
        <View style={styles.View_421_1189} />
      </View>
      <View style={styles.View_907_1764}>
        <TouchableOpacity
          style={styles.TouchableOpacity_116_161}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("116_164"))
          }
        >
          <Text style={styles.Text_116_161}>Don’t have account? Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_113_156}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_113_151} />
          <View style={styles.View_113_152}>
            <Text style={styles.Text_113_152}>Log in</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_156_1462}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("156_1464"))
          }
        >
          <View style={styles.View_156_1463} />
          <View style={styles.View_156_1464}>
            <Text style={styles.Text_156_1464}>Save password</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_398_923}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("125_20"))
            }
          >
            <Text style={styles.Text_398_923}>Forgot password?</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={styles.View_170_205}>
          <View style={styles.View_170_206} />
          <TouchableOpacity
            style={styles.TouchableOpacity_547_3603}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("170_206"))
            }
          >
            <Text style={styles.Text_547_3603}>At least 8 characters</Text>
          </TouchableOpacity>
          <View style={styles.View_170_208}>
            <View style={styles.View_I170_208_156_1531}>
              <View style={styles.View_I170_208_156_1532}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/add6/c1d3/3bc36970c3558c28f5ce1b8d12f7517e"
                  }}
                  style={styles.ImageBackground_I170_208_156_1533}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876b/cada/461a4906e181a1fe6a43f5712102cc06"
                  }}
                  style={styles.ImageBackground_I170_208_156_1534}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_170_209}>
            <Text style={styles.Text_170_209}>Password</Text>
          </View>
        </View>
        <View style={styles.View_125_6}>
          <View style={styles.View_112_461} />
          <View style={styles.View_167_324}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da47/1df9/6b5684b8ff88f782d8fe262a5f56a6f0"
              }}
              style={styles.ImageBackground_167_325}
            />
          </View>
          <View style={styles.View_113_155}>
            <Text style={styles.Text_113_155}>Phone</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_169_472}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("112_461"))
            }
          >
            <Text style={styles.Text_169_472}>0123456789</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_561_2689}>
        <View style={styles.View_567_3688} />
        <View style={styles.View_561_2692}>
          <Text style={styles.Text_561_2692}>Login</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_561_2693}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("278_311"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I561_2693_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_125_114}>
        <View style={styles.View_125_115}>
          <View style={styles.View_125_116}>
            <Text style={styles.Text_125_116}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_125_117}>
          <View style={styles.View_125_118}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_125_119}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_125_122}
            />
          </View>
          <View style={styles.View_125_123} />
        </View>
        <View style={styles.View_125_124}>
          <View style={styles.View_125_125}>
            <View style={styles.View_125_126} />
            <View style={styles.View_125_127} />
            <View style={styles.View_125_128} />
            <View style={styles.View_125_129} />
          </View>
        </View>
        <View style={styles.View_125_130}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_125_131}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_170_239: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.17486338797814%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_170_240: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_170_241: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("35.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_243: {
    width: wp("98.4%"),
    height: hp("35.040983606557376%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8%")
  },
  View_170_244: {
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    top: hp("21.857923497267763%")
  },
  ImageBackground_170_245: {
    width: wp("23.466666666666665%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_246: {
    width: wp("11.200000000000001%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86666666666666%"),
    justifyContent: "flex-end"
  },
  Text_170_246: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_170_247: {
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("21.857923497267763%")
  },
  ImageBackground_170_248: {
    width: wp("48.53333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_249: {
    width: wp("10.666666666666668%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333337%"),
    justifyContent: "flex-end"
  },
  Text_170_249: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  View_170_250: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.857923497267763%")
  },
  ImageBackground_170_251: {
    width: wp("23.200000000000003%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_252: {
    width: wp("7.466666666666668%"),
    top: hp("1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333333%"),
    justifyContent: "flex-end"
  },
  Text_170_252: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.32,
    textTransform: "none"
  },
  ImageBackground_170_253: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  View_170_257: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    top: hp("14.754098360655746%")
  },
  ImageBackground_170_258: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_259: {
    width: wp("5.333333333333334%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%"),
    justifyContent: "center"
  },
  Text_170_259: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_260: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.93333333333334%"),
    top: hp("14.754098360655746%")
  },
  ImageBackground_170_261: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_262: {
    width: wp("3.733333333333334%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    justifyContent: "center"
  },
  Text_170_262: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_263: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("14.754098360655746%")
  },
  ImageBackground_170_264: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_265: {
    width: wp("3.733333333333334%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    justifyContent: "center"
  },
  Text_170_265: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_266: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.93333333333334%"),
    top: hp("14.754098360655746%")
  },
  ImageBackground_170_267: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_268: {
    width: wp("3.2%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    justifyContent: "center"
  },
  Text_170_268: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_269: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("14.754098360655746%")
  },
  ImageBackground_170_270: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_271: {
    width: wp("3.2%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    justifyContent: "center"
  },
  Text_170_271: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_272: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.933333333333334%"),
    top: hp("14.754098360655746%")
  },
  ImageBackground_170_273: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_274: {
    width: wp("3.2%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    justifyContent: "center"
  },
  Text_170_274: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_275: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333332%"),
    top: hp("14.754098360655746%")
  },
  ImageBackground_170_276: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_277: {
    width: wp("3.2%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    justifyContent: "center"
  },
  Text_170_277: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_170_278: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("14.754098360655746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_281: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.93333333333334%"),
    top: hp("7.377049180327873%")
  },
  ImageBackground_170_282: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_283: {
    width: wp("1.6%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666686%"),
    justifyContent: "center"
  },
  Text_170_283: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_284: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.93333333333334%"),
    top: hp("7.377049180327873%")
  },
  ImageBackground_170_285: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_286: {
    width: wp("3.2%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    justifyContent: "center"
  },
  Text_170_286: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_287: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.93333333333334%"),
    top: hp("7.377049180327873%")
  },
  ImageBackground_170_288: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_289: {
    width: wp("1.6%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    justifyContent: "center"
  },
  Text_170_289: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_290: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93333333333334%"),
    top: hp("7.377049180327873%")
  },
  ImageBackground_170_291: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_292: {
    width: wp("3.733333333333334%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    justifyContent: "center"
  },
  Text_170_292: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_293: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.93333333333334%"),
    top: hp("7.377049180327873%")
  },
  ImageBackground_170_294: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_295: {
    width: wp("3.733333333333334%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    justifyContent: "center"
  },
  Text_170_295: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_296: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%"),
    top: hp("7.377049180327873%")
  },
  ImageBackground_170_297: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_298: {
    width: wp("2.1333333333333333%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999957%"),
    justifyContent: "center"
  },
  Text_170_298: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_299: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.933333333333334%"),
    top: hp("7.377049180327873%")
  },
  ImageBackground_170_300: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_301: {
    width: wp("3.733333333333334%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    justifyContent: "center"
  },
  Text_170_301: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_302: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.066666666666666%"),
    top: hp("7.377049180327873%")
  },
  ImageBackground_170_303: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_304: {
    width: wp("3.2%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    justifyContent: "center"
  },
  Text_170_304: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_305: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("7.377049180327873%")
  },
  ImageBackground_170_306: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_307: {
    width: wp("3.4666666666666663%"),
    top: hp("0.8196721311475272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    justifyContent: "center"
  },
  Text_170_307: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_308: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.86666666666666%"),
    top: hp("0%")
  },
  ImageBackground_170_309: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_310: {
    width: wp("3.733333333333334%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    justifyContent: "center"
  },
  Text_170_310: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_311: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.86666666666666%"),
    top: hp("0%")
  },
  ImageBackground_170_312: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_313: {
    width: wp("3.4666666666666663%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666856%"),
    justifyContent: "center"
  },
  Text_170_313: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_314: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666667%"),
    top: hp("0%")
  },
  ImageBackground_170_315: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_316: {
    width: wp("1.6%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666544%"),
    justifyContent: "center"
  },
  Text_170_316: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_317: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.866666666666674%"),
    top: hp("0%")
  },
  ImageBackground_170_318: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_319: {
    width: wp("3.4666666666666663%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    justifyContent: "center"
  },
  Text_170_319: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_320: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.866666666666674%"),
    top: hp("0%")
  },
  ImageBackground_170_321: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_322: {
    width: wp("3.2%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    justifyContent: "center"
  },
  Text_170_322: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_323: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.86666666666667%"),
    top: hp("0%")
  },
  ImageBackground_170_324: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_325: {
    width: wp("2.1333333333333333%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    justifyContent: "center"
  },
  Text_170_325: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_326: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666664%"),
    top: hp("0%")
  },
  ImageBackground_170_327: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_328: {
    width: wp("2.4%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    justifyContent: "center"
  },
  Text_170_328: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_329: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.866666666666667%"),
    top: hp("0%")
  },
  ImageBackground_170_330: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_331: {
    width: wp("3.4666666666666663%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    justifyContent: "center"
  },
  Text_170_331: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_332: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_170_333: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_334: {
    width: wp("5.333333333333334%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    justifyContent: "center"
  },
  Text_170_334: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_335: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_170_336: {
    width: wp("8.533333333333333%"),
    height: hp("5.737704918032787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_170_337: {
    width: wp("3.733333333333334%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    justifyContent: "center"
  },
  Text_170_337: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_338: {
    width: wp("4.000001525878906%"),
    height: hp("3.4149446122633305%"),
    top: hp("31.557727250896534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  ImageBackground_170_339: {
    width: wp("4.000001525878906%"),
    height: hp("2.0036429003939604%"),
    top: hp("1.4112962399675268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_170_345: {
    width: wp("2.40197270711263%"),
    height: hp("2.45819925610485%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999837239583343%")
  },
  ImageBackground_170_346: {
    width: wp("1.5129168192545572%"),
    height: hp("2.0036448546446084%"),
    top: hp("0.22778120197232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2443033854166714%")
  },
  ImageBackground_170_347: {
    width: wp("7.066666666666667%"),
    height: hp("3.6202185792349724%"),
    top: hp("31.420765027322417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7333333333333325%")
  },
  View_421_1188: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_421_1189: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  },
  View_907_1764: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("46.44808743169399%"),
    minHeight: hp("46.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("16.666666666666664%")
  },
  TouchableOpacity_116_161: {
    width: wp("56.53333333333334%"),
    minWidth: wp("56.53333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666667%"),
    top: hp("42.89617486338798%"),
    justifyContent: "flex-start"
  },
  Text_116_161: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_113_156: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076503%")
  },
  View_113_151: {
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
  View_113_152: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.86666666666667%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_113_152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_156_1462: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.68306010928962%")
  },
  View_156_1463: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158424%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(102, 90, 240, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_156_1464: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_156_1464: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_398_923: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_398_923: {
    color: "rgba(102, 90, 240, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_205: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.207650273224047%")
  },
  View_170_206: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218577%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  TouchableOpacity_547_3603: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("5.464480874316941%"),
    justifyContent: "flex-start"
  },
  Text_547_3603: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_208: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("5.73770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I170_208_156_1531: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.4781420765027278%")
  },
  View_I170_208_156_1532: {
    width: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I170_208_156_1533: {
    width: wp("2.987060038248698%"),
    height: hp("1.3072189737538824%"),
    top: hp("0.04025652108948208%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I170_208_156_1534: {
    width: wp("3.931524658203125%"),
    height: hp("1.7759562841530054%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3351399739583343%")
  },
  View_170_209: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_170_209: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_125_6: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_112_461: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218613%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(102, 90, 240, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_167_324: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.6%"),
    top: hp("5.73770491803279%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_167_325: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_113_155: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_113_155: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_169_472: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("5.464480874316941%"),
    justifyContent: "flex-start"
  },
  Text_169_472: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_561_2689: {
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
  View_567_3688: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_561_2692: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("3.415300546448086%"),
    justifyContent: "center"
  },
  Text_561_2692: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_561_2693: {
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
  ImageBackground_I561_2693_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_125_114: {
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
  View_125_115: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_125_116: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_125_116: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_125_117: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_125_118: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_125_119: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_125_122: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5041070323172812%")
  },
  View_125_123: {
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
  View_125_124: {
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
  View_125_125: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_125_126: {
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
  View_125_127: {
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
  View_125_128: {
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
  View_125_129: {
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
  View_125_130: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    minHeight: hp("1.5105476796301338%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.47947591145834%"),
    top: hp("0.4644842095713795%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_125_131: {
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
