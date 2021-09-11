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
      <View style={styles.View_580_3884}>
        <View style={styles.View_580_3885} />
        <View style={styles.View_580_3887}>
          <View style={styles.View_580_3888}>
            <View style={styles.View_580_3889}>
              <View style={styles.View_580_3890}>
                <Text style={styles.Text_580_3890}>Water bill</Text>
              </View>
              <View style={styles.View_580_4073}>
                <Text style={styles.Text_580_4073}>Successful</Text>
              </View>
              <View style={styles.View_580_3892}>
                <Text style={styles.Text_580_3892}>-$300</Text>
              </View>
              <View style={styles.View_580_3893}>
                <Text style={styles.Text_580_3893}>1:00 PM</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/9fa9/def2853e7fc2eed38313175524950e61"
              }}
              style={styles.ImageBackground_580_3894}
            />
            <View style={styles.View_580_3895}>
              <View style={styles.View_580_3896} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f80/5a71/4a9fcd6d2328f46741e0daaa76ae9503"
                }}
                style={styles.ImageBackground_580_3897}
              />
            </View>
          </View>
          <View style={styles.View_580_3900}>
            <View style={styles.View_580_3901}>
              <View style={styles.View_580_3902}>
                <Text style={styles.Text_580_3902}>Johnsmith</Text>
              </View>
              <View style={styles.View_580_4074}>
                <Text style={styles.Text_580_4074}>Processing</Text>
              </View>
              <View style={styles.View_580_3904}>
                <Text style={styles.Text_580_3904}>-$1000</Text>
              </View>
              <View style={styles.View_580_3905}>
                <Text style={styles.Text_580_3905}>2:25 PM</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/9fa9/def2853e7fc2eed38313175524950e61"
              }}
              style={styles.ImageBackground_580_3906}
            />
            <View style={styles.View_580_3907}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16b1/de3f/16b784c695badea4b9ddab241d5add5d"
                }}
                style={styles.ImageBackground_580_3909}
              />
            </View>
          </View>
          <View style={styles.View_580_3913}>
            <View style={styles.View_580_3914}>
              <View style={styles.View_580_3915}>
                <Text style={styles.Text_580_3915}>Loui</Text>
              </View>
              <View style={styles.View_580_3917}>
                <Text style={styles.Text_580_3917}>+$30</Text>
              </View>
              <View style={styles.View_580_3918}>
                <Text style={styles.Text_580_3918}>3:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_580_3919}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16b1/de3f/16b784c695badea4b9ddab241d5add5d"
                }}
                style={styles.ImageBackground_580_3921}
              />
            </View>
          </View>
          <View style={styles.View_580_4075}>
            <Text style={styles.Text_580_4075}>Successful</Text>
          </View>
          <View style={styles.View_580_3925}>
            <View style={styles.View_580_3926}>
              <View style={styles.View_580_3927}>
                <Text style={styles.Text_580_3927}>Electric bill</Text>
              </View>
              <View style={styles.View_580_4072}>
                <Text style={styles.Text_580_4072}>Successful</Text>
              </View>
              <View style={styles.View_580_3929}>
                <Text style={styles.Text_580_3929}>-$420</Text>
              </View>
              <View style={styles.View_580_3930}>
                <Text style={styles.Text_580_3930}>11:00 AM </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/9fa9/def2853e7fc2eed38313175524950e61"
              }}
              style={styles.ImageBackground_580_3931}
            />
            <View style={styles.View_580_3932}>
              <View style={styles.View_580_3933} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaff/542d/d7c909e1bda23eef85e0448b1e2110c6"
                }}
                style={styles.ImageBackground_580_3934}
              />
            </View>
          </View>
          <View style={styles.View_580_3937}>
            <Text style={styles.Text_580_3937}>Today</Text>
          </View>
        </View>
        <View style={styles.View_580_3938}>
          <View style={styles.View_580_3939}>
            <View style={styles.View_580_3940}>
              <View style={styles.View_580_3941}>
                <Text style={styles.Text_580_3941}>QR Payment</Text>
              </View>
              <View style={styles.View_580_3943}>
                <Text style={styles.Text_580_3943}>-$400</Text>
              </View>
              <View style={styles.View_580_3944}>
                <Text style={styles.Text_580_3944}>5:00 PM</Text>
              </View>
              <View style={styles.View_580_4077}>
                <Text style={styles.Text_580_4077}>Successful</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/9fa9/def2853e7fc2eed38313175524950e61"
              }}
              style={styles.ImageBackground_580_3945}
            />
            <View style={styles.View_580_3946}>
              <View style={styles.View_580_3947} />
              <View style={styles.View_580_3948}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/163f/210f2f7314f67bca3406a9fffb9f8ae9"
                  }}
                  style={styles.ImageBackground_580_3949}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7931/4600/1b44baf03922450dc7de7a1956c4f11e"
                  }}
                  style={styles.ImageBackground_580_3953}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_580_3954}>
            <View style={styles.View_580_3955}>
              <View style={styles.View_580_3956}>
                <Text style={styles.Text_580_3956}>QR Payment</Text>
              </View>
              <View style={styles.View_580_3958}>
                <Text style={styles.Text_580_3958}>+$200</Text>
              </View>
              <View style={styles.View_580_3959}>
                <Text style={styles.Text_580_3959}>2:25 PM</Text>
              </View>
              <View style={styles.View_580_4078}>
                <Text style={styles.Text_580_4078}>Successful</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/9fa9/def2853e7fc2eed38313175524950e61"
              }}
              style={styles.ImageBackground_580_3960}
            />
            <View style={styles.View_580_3961}>
              <View style={styles.View_580_3962} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3772/6cd7/6538c4a8d051ddad3cf4d80d59db867c"
                }}
                style={styles.ImageBackground_910_2120}
              />
            </View>
          </View>
          <View style={styles.View_580_3971}>
            <View style={styles.View_580_3972}>
              <View style={styles.View_580_3973}>
                <Text style={styles.Text_580_3973}>Television bill</Text>
              </View>
              <View style={styles.View_580_3975}>
                <Text style={styles.Text_580_3975}>-$350</Text>
              </View>
              <View style={styles.View_580_3976}>
                <Text style={styles.Text_580_3976}>3:00 PM</Text>
              </View>
              <View style={styles.View_580_4079}>
                <Text style={styles.Text_580_4079}>Processing</Text>
              </View>
            </View>
            <View style={styles.View_580_3977}>
              <View style={styles.View_580_3978} />
              <View style={styles.View_580_3979}>
                <View style={styles.View_580_3980}>
                  <View style={styles.View_580_3981} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c8e/ffe6/5c81d13239e6d8a047b69f66d4d8b413"
                    }}
                    style={styles.ImageBackground_580_3982}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_580_3984}>
            <View style={styles.View_580_3985}>
              <View style={styles.View_580_3986}>
                <Text style={styles.Text_580_3986}>Market</Text>
              </View>
              <View style={styles.View_580_3988}>
                <Text style={styles.Text_580_3988}>-$200</Text>
              </View>
              <View style={styles.View_580_3989}>
                <Text style={styles.Text_580_3989}>4:20 AM</Text>
              </View>
              <View style={styles.View_580_4076}>
                <Text style={styles.Text_580_4076}>Successful</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/9fa9/def2853e7fc2eed38313175524950e61"
              }}
              style={styles.ImageBackground_580_3990}
            />
            <View style={styles.View_580_3991}>
              <View style={styles.View_580_3992} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7253/7127/aaa83e715e30646fe5d5e022a47891af"
                }}
                style={styles.ImageBackground_580_3993}
              />
            </View>
          </View>
          <View style={styles.View_580_3997}>
            <Text style={styles.Text_580_3997}>Yesterday</Text>
          </View>
        </View>
        <View style={styles.View_580_3998}>
          <View style={styles.View_580_3999}>
            <View style={styles.View_580_4000}>
              <View style={styles.View_580_4001}>
                <Text style={styles.Text_580_4001}>QR Payment</Text>
              </View>
              <View style={styles.View_580_4003}>
                <Text style={styles.Text_580_4003}>-$2.200</Text>
              </View>
              <View style={styles.View_580_4004}>
                <Text style={styles.Text_580_4004}>5:00 PM</Text>
              </View>
              <View style={styles.View_580_4081}>
                <Text style={styles.Text_580_4081}>Successful</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/9fa9/def2853e7fc2eed38313175524950e61"
              }}
              style={styles.ImageBackground_580_4005}
            />
            <View style={styles.View_580_4006}>
              <View style={styles.View_580_4007} />
              <View style={styles.View_580_4008}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/163f/210f2f7314f67bca3406a9fffb9f8ae9"
                  }}
                  style={styles.ImageBackground_580_4009}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7931/4600/1b44baf03922450dc7de7a1956c4f11e"
                  }}
                  style={styles.ImageBackground_580_4013}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_580_4014}>
            <View style={styles.View_580_4015}>
              <View style={styles.View_580_4016}>
                <Text style={styles.Text_580_4016}>QR Payment</Text>
              </View>
              <View style={styles.View_580_4018}>
                <Text style={styles.Text_580_4018}>+$4.000</Text>
              </View>
              <View style={styles.View_580_4019}>
                <Text style={styles.Text_580_4019}>2:25 PM</Text>
              </View>
              <View style={styles.View_581_4082}>
                <Text style={styles.Text_581_4082}>Successful</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/9fa9/def2853e7fc2eed38313175524950e61"
              }}
              style={styles.ImageBackground_580_4020}
            />
            <View style={styles.View_580_4021}>
              <View style={styles.View_580_4022} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3772/6cd7/6538c4a8d051ddad3cf4d80d59db867c"
                }}
                style={styles.ImageBackground_580_4023}
              />
            </View>
          </View>
          <View style={styles.View_580_4031}>
            <View style={styles.View_580_4032}>
              <View style={styles.View_580_4033}>
                <Text style={styles.Text_580_4033}>Television bill</Text>
              </View>
              <View style={styles.View_580_4034}>
                <Text style={styles.Text_580_4034}>Processing</Text>
              </View>
              <View style={styles.View_580_4035}>
                <Text style={styles.Text_580_4035}>-$4.400</Text>
              </View>
              <View style={styles.View_580_4036}>
                <Text style={styles.Text_580_4036}>3:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_580_4037}>
              <View style={styles.View_580_4038} />
              <View style={styles.View_580_4039}>
                <View style={styles.View_580_4040}>
                  <View style={styles.View_580_4041} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c8e/ffe6/5c81d13239e6d8a047b69f66d4d8b413"
                    }}
                    style={styles.ImageBackground_580_4042}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_580_4044}>
            <View style={styles.View_580_4045}>
              <View style={styles.View_580_4046}>
                <Text style={styles.Text_580_4046}>Market</Text>
              </View>
              <View style={styles.View_580_4048}>
                <Text style={styles.Text_580_4048}>-$660</Text>
              </View>
              <View style={styles.View_580_4049}>
                <Text style={styles.Text_580_4049}>4:20 AM</Text>
              </View>
              <View style={styles.View_580_4080}>
                <Text style={styles.Text_580_4080}>Successful</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/9fa9/def2853e7fc2eed38313175524950e61"
              }}
              style={styles.ImageBackground_580_4050}
            />
            <View style={styles.View_580_4051}>
              <View style={styles.View_580_4052} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7253/7127/aaa83e715e30646fe5d5e022a47891af"
                }}
                style={styles.ImageBackground_580_4053}
              />
            </View>
          </View>
          <View style={styles.View_580_4057}>
            <Text style={styles.Text_580_4057}>July 12</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_910_2119}>
        <View style={styles.View_580_4071} />
        <View style={styles.View_595_5147} />
        <View style={styles.View_596_5170}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce1b/de9d/2bcd68a0cb9dd880c54deac3c09f587d"
            }}
            style={styles.ImageBackground_596_5165}
          />
        </View>
        <View style={styles.View_595_5148}>
          <Text style={styles.Text_595_5148}>Notification</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_595_5149}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I595_5149_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_583_3113}>
        <View style={styles.View_583_3114} />
        <TouchableOpacity
          style={styles.TouchableOpacity_583_3115}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I583_3115_319_327}>
            <View style={styles.View_I583_3115_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I583_3115_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I583_3115_319_330}
              />
            </View>
            <View style={styles.View_I583_3115_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I583_3115_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I583_3115_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_3116}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I583_3116_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I583_3116_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1793/b719/a1aa755f1210d696f8851d8fababc303"
              }}
              style={styles.ImageBackground_I583_3116_319_486}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_3117}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I583_3117_319_339}>
            <View style={styles.View_I583_3117_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I583_3117_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I583_3117_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I583_3117_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I583_3117_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I583_3117_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_3118}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <View style={styles.View_I583_3118_319_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
              }}
              style={styles.ImageBackground_I583_3118_319_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cb/7134/60991c3b1f7388abbaaac49119c40fb5"
              }}
              style={styles.ImageBackground_I583_3118_319_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
              }}
              style={styles.ImageBackground_I583_3118_319_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f6/d981/cbf2cafa04251ce782f812db1d542238"
              }}
              style={styles.ImageBackground_I583_3118_319_323}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_583_3119}>
          <View style={styles.View_583_3120} />
        </View>
      </View>
      <View style={styles.View_427_15247}>
        <View style={styles.View_427_15248}>
          <View style={styles.View_427_15249}>
            <Text style={styles.Text_427_15249}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_427_15250}>
          <View style={styles.View_427_15251}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_427_15252}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_427_15255}
            />
          </View>
          <View style={styles.View_427_15256} />
        </View>
        <View style={styles.View_427_15257}>
          <View style={styles.View_427_15258}>
            <View style={styles.View_427_15259} />
            <View style={styles.View_427_15260} />
            <View style={styles.View_427_15261} />
            <View style={styles.View_427_15262} />
          </View>
        </View>
        <View style={styles.View_427_15263}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_427_15264}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_580_3884: {
    width: wp("100%"),
    height: hp("141.9398907103825%"),
    top: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3885: {
    width: wp("100%"),
    height: hp("141.9398907103825%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_580_3887: {
    width: wp("87.2%"),
    height: hp("40.30054644808743%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_580_3888: {
    width: wp("87.2%"),
    height: hp("8.19672131147541%"),
    top: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3889: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_3890: {
    width: wp("18.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3890: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4073: {
    width: wp("18.666666666666668%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333332%"),
    justifyContent: "flex-start"
  },
  Text_580_4073: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3892: {
    width: wp("11.466666666666667%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3892: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3893: {
    width: wp("13.600000000000001%"),
    top: hp("3.5519125683060153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    justifyContent: "flex-start"
  },
  Text_580_3893: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_580_3894: {
    width: wp("87.2%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3895: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3896: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(132, 219, 255, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  ImageBackground_580_3897: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%")
  },
  View_580_3900: {
    width: wp("87.2%"),
    height: hp("8.19672131147541%"),
    top: hp("24.180327868852455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3901: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_3902: {
    width: wp("20.8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3902: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4074: {
    width: wp("18.933333333333334%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.266666666666666%"),
    justifyContent: "flex-start"
  },
  Text_580_4074: {
    color: "rgba(250, 190, 60, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3904: {
    width: wp("13.066666666666665%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3904: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3905: {
    width: wp("13.866666666666665%"),
    top: hp("3.5519125683060153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.33333333333333%"),
    justifyContent: "flex-start"
  },
  Text_580_3905: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_580_3906: {
    width: wp("87.2%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3907: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_580_3909: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3913: {
    width: wp("87.2%"),
    height: hp("6.557377049180328%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3914: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_3915: {
    width: wp("8.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3915: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3917: {
    width: wp("9.333333333333334%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3917: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3918: {
    width: wp("14.666666666666666%"),
    top: hp("3.5519125683060153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    justifyContent: "flex-start"
  },
  Text_580_3918: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3919: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_580_3921: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4075: {
    width: wp("18.666666666666668%"),
    top: hp("34.01639344262294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333332%"),
    justifyContent: "flex-start"
  },
  Text_580_4075: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3925: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3926: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_3927: {
    width: wp("21.6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3927: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4072: {
    width: wp("18.666666666666668%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333332%"),
    justifyContent: "flex-start"
  },
  Text_580_4072: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3929: {
    width: wp("11.200000000000001%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3929: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3930: {
    width: wp("14.933333333333335%"),
    top: hp("3.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.26666666666665%"),
    justifyContent: "flex-start"
  },
  Text_580_3930: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_580_3931: {
    width: wp("87.2%"),
    height: hp("0.000003905362049050889%"),
    top: hp("8.06010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3932: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3933: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 190, 60, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  ImageBackground_580_3934: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%")
  },
  View_580_3937: {
    width: wp("12.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3937: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3938: {
    width: wp("87.2%"),
    height: hp("40.30054644808743%"),
    top: hp("45.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_580_3939: {
    width: wp("87.2%"),
    height: hp("8.19672131147541%"),
    top: hp("14.617486338797818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3940: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_3941: {
    width: wp("24.53333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3941: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3943: {
    width: wp("11.733333333333333%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3943: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3944: {
    width: wp("14.666666666666666%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    justifyContent: "flex-start"
  },
  Text_580_3944: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4077: {
    width: wp("18.666666666666668%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333332%"),
    justifyContent: "flex-start"
  },
  Text_580_4077: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_580_3945: {
    width: wp("87.2%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3946: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3947: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_580_3948: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("1.9125683060109253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%")
  },
  ImageBackground_580_3949: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_580_3953: {
    width: wp("2.9274442036946615%"),
    height: hp("0.5738032971574961%"),
    top: hp("0.5601059543630384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333325%")
  },
  View_580_3954: {
    width: wp("87.2%"),
    height: hp("8.19672131147541%"),
    top: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3955: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_3956: {
    width: wp("24.53333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3956: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3958: {
    width: wp("11.733333333333333%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3958: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3959: {
    width: wp("13.866666666666665%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.33333333333333%"),
    justifyContent: "flex-start"
  },
  Text_580_3959: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4078: {
    width: wp("18.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333332%"),
    justifyContent: "flex-start"
  },
  Text_580_4078: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_580_3960: {
    width: wp("87.2%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3961: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3962: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  ImageBackground_910_2120: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688550646839244%"),
    top: hp("1.8442622950819612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5999999999999996%")
  },
  View_580_3971: {
    width: wp("87.2%"),
    height: hp("6.557377049180328%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3972: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_3973: {
    width: wp("25.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3973: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3975: {
    width: wp("11.200000000000001%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3975: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3976: {
    width: wp("14.666666666666666%"),
    top: hp("3.5519125683060224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    justifyContent: "flex-start"
  },
  Text_580_3976: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4079: {
    width: wp("18.933333333333334%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.266666666666666%"),
    justifyContent: "flex-start"
  },
  Text_580_4079: {
    color: "rgba(250, 190, 60, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3977: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3978: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 130, 225, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_580_3979: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_580_3980: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0.14903584464651942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3981: {
    width: wp("5.485713704427083%"),
    height: hp("1.990632541844102%"),
    top: hp("0.20226650550718261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4571614583333332%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_580_3982: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3984: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3985: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_3986: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3986: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3988: {
    width: wp("11.466666666666667%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3988: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3989: {
    width: wp("14.399999999999999%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.8%"),
    justifyContent: "flex-start"
  },
  Text_580_3989: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4076: {
    width: wp("18.666666666666668%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333332%"),
    justifyContent: "flex-start"
  },
  Text_580_4076: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_580_3990: {
    width: wp("87.2%"),
    height: hp("0.000003905362049050889%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3991: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_3992: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 171, 37, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  ImageBackground_580_3993: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%")
  },
  View_580_3997: {
    width: wp("20.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_3997: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_3998: {
    width: wp("87.2%"),
    height: hp("40.30054644808743%"),
    top: hp("89.34426229508199%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_580_3999: {
    width: wp("87.2%"),
    height: hp("8.19672131147541%"),
    top: hp("14.61748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4000: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_4001: {
    width: wp("24.53333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_4001: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4003: {
    width: wp("14.399999999999999%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_4003: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4004: {
    width: wp("14.666666666666666%"),
    top: hp("3.5519125683060366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    justifyContent: "flex-start"
  },
  Text_580_4004: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4081: {
    width: wp("18.666666666666668%"),
    top: hp("0.27322404371587083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333332%"),
    justifyContent: "flex-start"
  },
  Text_580_4081: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_580_4005: {
    width: wp("87.2%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4006: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4007: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_580_4008: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("1.9125683060109537%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%")
  },
  ImageBackground_580_4009: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_580_4013: {
    width: wp("2.9274442036946615%"),
    height: hp("0.5738032971574961%"),
    top: hp("0.5601059543630384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333325%")
  },
  View_580_4014: {
    width: wp("87.2%"),
    height: hp("8.19672131147541%"),
    top: hp("24.18032786885243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4015: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_4016: {
    width: wp("24.53333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_4016: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4018: {
    width: wp("15.2%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_4018: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4019: {
    width: wp("13.866666666666665%"),
    top: hp("3.551912568306051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.33333333333333%"),
    justifyContent: "flex-start"
  },
  Text_580_4019: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_581_4082: {
    width: wp("18.666666666666668%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333332%"),
    justifyContent: "flex-start"
  },
  Text_581_4082: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_580_4020: {
    width: wp("87.2%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4021: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4022: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  ImageBackground_580_4023: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688550646839244%"),
    top: hp("1.8442622950819896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5999999999999996%")
  },
  View_580_4031: {
    width: wp("87.2%"),
    height: hp("6.557377049180328%"),
    top: hp("33.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4032: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_4033: {
    width: wp("25.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_4033: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4034: {
    width: wp("18.933333333333334%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.266666666666666%"),
    justifyContent: "flex-start"
  },
  Text_580_4034: {
    color: "rgba(250, 190, 60, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4035: {
    width: wp("14.666666666666666%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_4035: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4036: {
    width: wp("14.666666666666666%"),
    top: hp("3.5519125683060224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53333333333333%"),
    justifyContent: "flex-start"
  },
  Text_580_4036: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4037: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4038: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 130, 225, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  View_580_4039: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_580_4040: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0.14901916837430917%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4041: {
    width: wp("5.485713704427083%"),
    height: hp("1.990632541844102%"),
    top: hp("0.20224982923497237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4571614583333332%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_580_4042: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4044: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("5.191256830601077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4045: {
    width: wp("71.2%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_580_4046: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_4046: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4048: {
    width: wp("11.466666666666667%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_4048: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4049: {
    width: wp("14.399999999999999%"),
    top: hp("3.6885245901639365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.8%"),
    justifyContent: "flex-start"
  },
  Text_580_4049: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_580_4080: {
    width: wp("18.666666666666668%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333332%"),
    justifyContent: "flex-start"
  },
  Text_580_4080: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_580_4050: {
    width: wp("87.2%"),
    height: hp("0.000003905362049050889%"),
    top: hp("8.0601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4051: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_580_4052: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 171, 37, 1)",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18
  },
  ImageBackground_580_4053: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%")
  },
  View_580_4057: {
    width: wp("13.333333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_580_4057: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_910_2119: {
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
  View_580_4071: {
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
  View_595_5147: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_596_5170: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_596_5165: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.732226366553802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.27322404371584774%")
  },
  View_595_5148: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("7.923497267759563%"),
    justifyContent: "center"
  },
  Text_595_5148: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_595_5149: {
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
  ImageBackground_I595_5149_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_583_3113: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_583_3114: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_583_3115: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_3115_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27324071998805266%")
  },
  View_I583_3115_319_328: {
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
  ImageBackground_I583_3115_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_3115_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I583_3115_319_333: {
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
  ImageBackground_I583_3115_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_3115_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_583_3116: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_3116_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I583_3116_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_3116_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_583_3117: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_3117_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333984374999972%"),
    top: hp("0.2732573962602629%")
  },
  View_I583_3117_319_340: {
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
  ImageBackground_I583_3117_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_3117_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_3117_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126423486594746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7814453124999972%")
  },
  ImageBackground_I583_3117_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709048411885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.066210937500003%")
  },
  ImageBackground_I583_3117_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878447318989089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7328776041666742%")
  },
  TouchableOpacity_583_3118: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_3118_319_319: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I583_3118_319_320: {
    width: wp("0.37209300994873046%"),
    height: hp("1.0623966409860413%"),
    top: hp("1.042383746371243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3323567708333357%")
  },
  ImageBackground_I583_3118_319_321: {
    width: wp("0.37209300994873046%"),
    height: hp("1.4796035537302819%"),
    top: hp("0.6250433583077069%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4901041666666686%")
  },
  ImageBackground_I583_3118_319_322: {
    width: wp("0.37209300994873046%"),
    height: hp("0.601601209796843%"),
    top: hp("1.5030490896089361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6287760416666686%")
  },
  ImageBackground_I583_3118_319_323: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_583_3119: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_583_3120: {
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
  View_427_15247: {
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
  View_427_15248: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_427_15249: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_427_15249: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_427_15250: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_427_15251: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_427_15252: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_427_15255: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5041070323172812%")
  },
  View_427_15256: {
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
  View_427_15257: {
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
  View_427_15258: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_427_15259: {
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
  View_427_15260: {
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
  View_427_15261: {
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
  View_427_15262: {
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
  View_427_15263: {
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
  ImageBackground_427_15264: {
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
