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
      <View style={styles.View_592_3546}>
        <View style={styles.View_592_3547} />
        <View style={styles.View_592_3548} />
        <View style={styles.View_592_3550}>
          <View style={styles.View_592_3551}>
            <View style={styles.View_592_3552}>
              <View style={styles.View_592_3553}>
                <Text style={styles.Text_592_3553}>Television bill</Text>
              </View>
              <View style={styles.View_592_3554}>
                <Text style={styles.Text_592_3554}>-$400</Text>
              </View>
              <View style={styles.View_592_3555}>
                <Text style={styles.Text_592_3555}>Send</Text>
              </View>
              <View style={styles.View_592_3556}>
                <Text style={styles.Text_592_3556}>July 1 - 3:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3557}>
              <View style={styles.View_592_3558} />
              <View style={styles.View_592_3559}>
                <View style={styles.View_592_3560}>
                  <View style={styles.View_592_3561} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c8e/ffe6/5c81d13239e6d8a047b69f66d4d8b413"
                    }}
                    style={styles.ImageBackground_592_3562}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_592_3564}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3565}
            />
            <View style={styles.View_592_3566}>
              <View style={styles.View_592_3567}>
                <Text style={styles.Text_592_3567}>QR Payment</Text>
              </View>
              <View style={styles.View_592_3568}>
                <Text style={styles.Text_592_3568}>+$1.600</Text>
              </View>
              <View style={styles.View_592_3569}>
                <Text style={styles.Text_592_3569}>Received</Text>
              </View>
              <View style={styles.View_592_3570}>
                <Text style={styles.Text_592_3570}>July 2 - 2:25 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3571}>
              <View style={styles.View_592_3572} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3772/6cd7/6538c4a8d051ddad3cf4d80d59db867c"
                }}
                style={styles.ImageBackground_907_1908}
              />
            </View>
          </View>
          <View style={styles.View_592_3581}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3582}
            />
            <View style={styles.View_592_3583}>
              <View style={styles.View_592_3584}>
                <Text style={styles.Text_592_3584}>QR Payment</Text>
              </View>
              <View style={styles.View_592_3585}>
                <Text style={styles.Text_592_3585}>- $220</Text>
              </View>
              <View style={styles.View_592_3586}>
                <Text style={styles.Text_592_3586}>Sent</Text>
              </View>
              <View style={styles.View_592_3587}>
                <Text style={styles.Text_592_3587}>July 6 - 5:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3588}>
              <View style={styles.View_592_3589} />
              <View style={styles.View_592_3590}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/163f/210f2f7314f67bca3406a9fffb9f8ae9"
                  }}
                  style={styles.ImageBackground_592_3591}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7931/4600/1b44baf03922450dc7de7a1956c4f11e"
                  }}
                  style={styles.ImageBackground_592_3595}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_592_3596}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3597}
            />
            <View style={styles.View_592_3598}>
              <View style={styles.View_592_3599}>
                <Text style={styles.Text_592_3599}>Market</Text>
              </View>
              <View style={styles.View_592_3600}>
                <Text style={styles.Text_592_3600}>-$752</Text>
              </View>
              <View style={styles.View_592_3601}>
                <Text style={styles.Text_592_3601}>Sent</Text>
              </View>
              <View style={styles.View_592_3602}>
                <Text style={styles.Text_592_3602}>July 6 - 4:20 AM</Text>
              </View>
            </View>
            <View style={styles.View_592_3603}>
              <View style={styles.View_592_3604} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7253/7127/aaa83e715e30646fe5d5e022a47891af"
                }}
                style={styles.ImageBackground_592_3605}
              />
            </View>
          </View>
          <View style={styles.View_592_3609}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3610}
            />
            <View style={styles.View_592_3611}>
              <View style={styles.View_592_3612}>
                <Text style={styles.Text_592_3612}>Television bill</Text>
              </View>
              <View style={styles.View_592_3613}>
                <Text style={styles.Text_592_3613}>-$400</Text>
              </View>
              <View style={styles.View_592_3614}>
                <Text style={styles.Text_592_3614}>Send</Text>
              </View>
              <View style={styles.View_592_3615}>
                <Text style={styles.Text_592_3615}>July 7 - 3:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3616}>
              <View style={styles.View_592_3617} />
              <View style={styles.View_592_3618}>
                <View style={styles.View_592_3619}>
                  <View style={styles.View_592_3620} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c8e/ffe6/5c81d13239e6d8a047b69f66d4d8b413"
                    }}
                    style={styles.ImageBackground_592_3621}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_592_3623}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3624}
            />
            <View style={styles.View_592_3625}>
              <View style={styles.View_592_3626}>
                <Text style={styles.Text_592_3626}>QR Payment</Text>
              </View>
              <View style={styles.View_592_3627}>
                <Text style={styles.Text_592_3627}>+$1.600</Text>
              </View>
              <View style={styles.View_592_3628}>
                <Text style={styles.Text_592_3628}>Received</Text>
              </View>
              <View style={styles.View_592_3629}>
                <Text style={styles.Text_592_3629}>July 8 - 2:25 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3630}>
              <View style={styles.View_592_3631} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3772/6cd7/6538c4a8d051ddad3cf4d80d59db867c"
                }}
                style={styles.ImageBackground_907_1907}
              />
            </View>
          </View>
          <View style={styles.View_592_3640}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3641}
            />
            <View style={styles.View_592_3642}>
              <View style={styles.View_592_3643}>
                <Text style={styles.Text_592_3643}>QR Payment</Text>
              </View>
              <View style={styles.View_592_3644}>
                <Text style={styles.Text_592_3644}>- $220</Text>
              </View>
              <View style={styles.View_592_3645}>
                <Text style={styles.Text_592_3645}>Sent</Text>
              </View>
              <View style={styles.View_592_3646}>
                <Text style={styles.Text_592_3646}>July 10 - 5:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3647}>
              <View style={styles.View_592_3648} />
              <View style={styles.View_592_3649}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/163f/210f2f7314f67bca3406a9fffb9f8ae9"
                  }}
                  style={styles.ImageBackground_592_3650}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7931/4600/1b44baf03922450dc7de7a1956c4f11e"
                  }}
                  style={styles.ImageBackground_592_3654}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_592_3655}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3656}
            />
            <View style={styles.View_592_3657}>
              <View style={styles.View_592_3658}>
                <Text style={styles.Text_592_3658}>Market</Text>
              </View>
              <View style={styles.View_592_3659}>
                <Text style={styles.Text_592_3659}>-$752</Text>
              </View>
              <View style={styles.View_592_3660}>
                <Text style={styles.Text_592_3660}>Sent</Text>
              </View>
              <View style={styles.View_592_3661}>
                <Text style={styles.Text_592_3661}>July 10 - 4:20 AM</Text>
              </View>
            </View>
            <View style={styles.View_592_3662}>
              <View style={styles.View_592_3663} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7253/7127/aaa83e715e30646fe5d5e022a47891af"
                }}
                style={styles.ImageBackground_592_3664}
              />
            </View>
          </View>
          <View style={styles.View_592_3668}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3669}
            />
            <View style={styles.View_592_3670}>
              <View style={styles.View_592_3671}>
                <Text style={styles.Text_592_3671}>Loui</Text>
              </View>
              <View style={styles.View_592_3672}>
                <Text style={styles.Text_592_3672}>+$4.200</Text>
              </View>
              <View style={styles.View_592_3673}>
                <Text style={styles.Text_592_3673}>Received</Text>
              </View>
              <View style={styles.View_592_3674}>
                <Text style={styles.Text_592_3674}>July 10 - 3:00 PM</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d76/6ffd/4040c0b645825e0d244af042aa32c93a"
              }}
              style={styles.ImageBackground_592_3675}
            />
          </View>
          <View style={styles.View_592_3680}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3681}
            />
            <View style={styles.View_592_3682}>
              <View style={styles.View_592_3683}>
                <Text style={styles.Text_592_3683}>Johnsmith</Text>
              </View>
              <View style={styles.View_592_3684}>
                <Text style={styles.Text_592_3684}>- $1.600</Text>
              </View>
              <View style={styles.View_592_3685}>
                <Text style={styles.Text_592_3685}>Sent</Text>
              </View>
              <View style={styles.View_592_3686}>
                <Text style={styles.Text_592_3686}>July 13 - 2:25 PM</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d76/6ffd/4040c0b645825e0d244af042aa32c93a"
              }}
              style={styles.ImageBackground_592_3687}
            />
          </View>
          <View style={styles.View_592_3692}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3693}
            />
            <View style={styles.View_592_3694}>
              <View style={styles.View_592_3695}>
                <Text style={styles.Text_592_3695}>Water bill</Text>
              </View>
              <View style={styles.View_592_3696}>
                <Text style={styles.Text_592_3696}>- $27</Text>
              </View>
              <View style={styles.View_592_3697}>
                <Text style={styles.Text_592_3697}>Sent</Text>
              </View>
              <View style={styles.View_592_3698}>
                <Text style={styles.Text_592_3698}>To day - 2:20 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3699}>
              <View style={styles.View_592_3700} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f80/5a71/4a9fcd6d2328f46741e0daaa76ae9503"
                }}
                style={styles.ImageBackground_592_3701}
              />
            </View>
          </View>
          <View style={styles.View_592_3704}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3705}
            />
            <View style={styles.View_592_3706}>
              <View style={styles.View_592_3707}>
                <Text style={styles.Text_592_3707}>Electric bill</Text>
              </View>
              <View style={styles.View_592_3708}>
                <Text style={styles.Text_592_3708}>-$420</Text>
              </View>
              <View style={styles.View_592_3709}>
                <Text style={styles.Text_592_3709}>Sent</Text>
              </View>
              <View style={styles.View_592_3710}>
                <Text style={styles.Text_592_3710}>To day - 11:00 AM</Text>
              </View>
            </View>
            <View style={styles.View_592_3711}>
              <View style={styles.View_592_3712} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaff/542d/d7c909e1bda23eef85e0448b1e2110c6"
                }}
                style={styles.ImageBackground_592_3713}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_592_3717}>
          <Text style={styles.Text_592_3717}>Trading history</Text>
        </View>
      </View>
      <View style={styles.View_219_270}>
        <View style={styles.View_203_216} />
        <View style={styles.View_359_480}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b187/9d71/d64f16d0c1acc71710f6c60b784c99d3"
            }}
            style={styles.ImageBackground_234_288}
          />
          <View style={styles.View_234_309}>
            <View style={styles.View_234_312}>
              <Text style={styles.Text_234_312}>05-07</Text>
            </View>
            <View style={styles.View_234_316}>
              <Text style={styles.Text_234_316}>29-06</Text>
            </View>
          </View>
          <View style={styles.View_359_482}>
            <View style={styles.View_358_467}>
              <Text style={styles.Text_358_467}>0</Text>
            </View>
            <View style={styles.View_358_468}>
              <Text style={styles.Text_358_468}>-200</Text>
            </View>
            <View style={styles.View_358_470}>
              <Text style={styles.Text_358_470}>-400</Text>
            </View>
            <View style={styles.View_358_469}>
              <Text style={styles.Text_358_469}>200</Text>
            </View>
            <View style={styles.View_358_471}>
              <Text style={styles.Text_358_471}>400</Text>
            </View>
          </View>
          <View style={styles.View_359_481}>
            <View style={styles.View_359_468} />
            <View style={styles.View_359_474} />
            <View style={styles.View_359_475} />
            <View style={styles.View_359_476} />
            <View style={styles.View_359_477} />
            <View style={styles.View_359_478} />
            <View style={styles.View_359_479} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_234_377}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("557_2635"))
          }
        >
          <View style={styles.View_234_322}>
            <View style={styles.View_234_293} />
            <View style={styles.View_234_297}>
              <Text style={styles.Text_234_297}>The last 7 days</Text>
            </View>
          </View>
          <View style={styles.View_234_367}>
            <View style={styles.View_356_475} />
            <View style={styles.View_234_366}>
              <Text style={styles.Text_234_366}>30 days</Text>
            </View>
          </View>
          <View style={styles.View_356_479}>
            <View style={styles.View_356_476} />
            <View style={styles.View_356_478}>
              <Text style={styles.Text_356_478}>Custom</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_907_1905}>
        <View style={styles.View_548_2746} />
        <View style={styles.View_204_1228}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbc1/a253/ff1c4696cbd92c193c3f896b92eaf59c"
            }}
            style={styles.ImageBackground_204_1229}
          />
          <View style={styles.View_219_268}>
            <View style={styles.View_204_1231}>
              <Text style={styles.Text_204_1231}>Outcome</Text>
            </View>
            <View style={styles.View_204_1232}>
              <Text style={styles.Text_204_1232}>$878.35</Text>
            </View>
          </View>
          <View style={styles.View_219_267}>
            <View style={styles.View_204_1233} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/463b/a13f/d1bf90bd99dde17d2d65f2ce579dd656"
              }}
              style={styles.ImageBackground_205_232}
            />
          </View>
        </View>
        <View style={styles.View_219_266}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbc1/a253/ff1c4696cbd92c193c3f896b92eaf59c"
            }}
            style={styles.ImageBackground_200_504}
          />
          <View style={styles.View_219_269}>
            <View style={styles.View_200_519}>
              <Text style={styles.Text_200_519}>Income</Text>
            </View>
            <View style={styles.View_200_521}>
              <Text style={styles.Text_200_521}>$778.35</Text>
            </View>
          </View>
          <View style={styles.View_219_265}>
            <View style={styles.View_204_1227} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5179/95c3/e51bfeeeb82315537c9eb17f076383c4"
              }}
              style={styles.ImageBackground_205_230}
            />
          </View>
        </View>
        <View style={styles.View_595_5051}>
          <View style={styles.View_595_5052} />
          <TouchableOpacity
            style={styles.TouchableOpacity_595_5053}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("459_2556"))
            }
          >
            <View style={styles.View_I595_5053_205_2076}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e71/ef17/103fc2e901ff739ed8f4c25a52cd7128"
                }}
                style={styles.ImageBackground_I595_5053_205_2077}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86b2/5573/a2b51d95d3c1e4120c915d2c62f6fc0b"
                }}
                style={styles.ImageBackground_I595_5053_205_2080}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c543/8d50/2ac0ce398e570c1448a0e5f8e9a6ebb5"
                }}
                style={styles.ImageBackground_I595_5053_205_2083}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.View_595_5054}>
            <Text style={styles.Text_595_5054}>Analys</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_595_5055}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("165_161"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
              }}
              style={styles.ImageBackground_I595_5055_551_4768}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_567_3844}>
        <View style={styles.View_567_3845} />
        <View style={styles.View_569_2841}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab0d/c2ad/9d1e817b600b728a7301213cf4ded6aa"
            }}
            style={styles.ImageBackground_I569_2841_415_1172}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3846}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I567_3846_319_327}>
            <View style={styles.View_I567_3846_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I567_3846_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I567_3846_319_330}
              />
            </View>
            <View style={styles.View_I567_3846_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I567_3846_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I567_3846_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3847}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I567_3847_319_339}>
            <View style={styles.View_I567_3847_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I567_3847_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I567_3847_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I567_3847_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I567_3847_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I567_3847_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3849}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I567_3849_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I567_3849_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1793/b719/a1aa755f1210d696f8851d8fababc303"
              }}
              style={styles.ImageBackground_I567_3849_319_486}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_567_3851}>
          <View style={styles.View_567_3852} />
        </View>
      </View>
      <View style={styles.View_200_234}>
        <View style={styles.View_200_235}>
          <View style={styles.View_200_236}>
            <Text style={styles.Text_200_236}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_200_237}>
          <View style={styles.View_200_238}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_200_239}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_200_242}
            />
          </View>
          <View style={styles.View_200_243} />
        </View>
        <View style={styles.View_200_244}>
          <View style={styles.View_200_245}>
            <View style={styles.View_200_246} />
            <View style={styles.View_200_247} />
            <View style={styles.View_200_248} />
            <View style={styles.View_200_249} />
          </View>
        </View>
        <View style={styles.View_200_250}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_200_251}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_592_3546: {
    width: wp("100%"),
    height: hp("121.72131147540983%"),
    top: hp("64.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3547: {
    width: wp("100%"),
    height: hp("121.72131147540983%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_592_3548: {
    width: wp("21.333333333333336%"),
    height: hp("0.6830601092896175%"),
    top: hp("1.0928961748633697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  },
  View_592_3550: {
    width: wp("91.46666666666667%"),
    height: hp("108.33333333333333%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_592_3551: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("101.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3552: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3553: {
    width: wp("25.866666666666667%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3553: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3554: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.866666666666674%"),
    justifyContent: "flex-start"
  },
  Text_592_3554: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3555: {
    width: wp("8.799999999999999%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3555: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3556: {
    width: wp("27.46666666666667%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    justifyContent: "flex-start"
  },
  Text_592_3556: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3557: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3558: {
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
  View_592_3559: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_592_3560: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0.1490275065104072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3561: {
    width: wp("5.485713704427083%"),
    height: hp("1.990632541844102%"),
    top: hp("0.20225816737107039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.457145182291665%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_592_3562: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3564: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("92.21311475409834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3565: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3566: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3567: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3567: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3568: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3568: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3569: {
    width: wp("15.733333333333333%"),
    top: hp("3.9617486338798074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3569: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3570: {
    width: wp("27.73333333333333%"),
    top: hp("4.098360655737736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3570: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3571: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3572: {
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
  ImageBackground_907_1908: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688550646839244%"),
    top: hp("1.8442622950819612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5999999999999996%")
  },
  View_592_3581: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("82.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3582: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3583: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3584: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3584: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3585: {
    width: wp("13.866666666666665%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.599999999999994%"),
    justifyContent: "flex-start"
  },
  Text_592_3585: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3586: {
    width: wp("8%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3586: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3587: {
    width: wp("28.799999999999997%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3587: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3588: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3589: {
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
  View_592_3590: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("1.912568306010911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  ImageBackground_592_3591: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3595: {
    width: wp("2.9274442036946615%"),
    height: hp("0.5738032971574961%"),
    top: hp("0.5601101234311159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333316%")
  },
  View_592_3596: {
    width: wp("91.46666666666667%"),
    height: hp("8.060109289617486%"),
    top: hp("73.77049180327867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3597: {
    width: wp("91.46666666666667%"),
    height: hp("0.000004096450116339043%"),
    top: hp("8.060105120549451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3598: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3599: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3599: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3600: {
    width: wp("12%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3600: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3601: {
    width: wp("8%"),
    top: hp("3.825136612021879%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3601: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3602: {
    width: wp("28.53333333333333%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3602: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3603: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3604: {
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
  ImageBackground_592_3605: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_592_3609: {
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("64.75409836065572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3610: {
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    top: hp("7.923497267759586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3611: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3612: {
    width: wp("25.866666666666667%"),
    top: hp("0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3612: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3613: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.866666666666674%"),
    justifyContent: "flex-start"
  },
  Text_592_3613: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3614: {
    width: wp("8.799999999999999%"),
    top: hp("3.9617486338798074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3614: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3615: {
    width: wp("28.26666666666667%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.2%"),
    justifyContent: "flex-start"
  },
  Text_592_3615: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3616: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.13661202185795673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3617: {
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
  View_592_3618: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_592_3619: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0.14902750651037877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3620: {
    width: wp("5.485713704427083%"),
    height: hp("1.990632541844102%"),
    top: hp("0.2022592096381004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.457145182291665%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_592_3621: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3623: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("55.46448087431693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3624: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3625: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3626: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3626: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3627: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3627: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3628: {
    width: wp("15.733333333333333%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3628: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3629: {
    width: wp("27.73333333333333%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3629: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3630: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3631: {
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
  ImageBackground_907_1907: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688550646839244%"),
    top: hp("1.8442622950819612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5999999999999996%")
  },
  View_592_3640: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("46.174863387978135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3641: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3642: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3643: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3643: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3644: {
    width: wp("13.866666666666665%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.599999999999994%"),
    justifyContent: "flex-start"
  },
  Text_592_3644: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3645: {
    width: wp("8%"),
    top: hp("3.961748633879793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3645: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3646: {
    width: wp("30.133333333333333%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3646: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3647: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3648: {
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
  View_592_3649: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("1.9125683060109253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  ImageBackground_592_3650: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3654: {
    width: wp("2.9274442036946615%"),
    height: hp("0.5738032971574961%"),
    top: hp("0.5601101234310875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333316%")
  },
  View_592_3655: {
    width: wp("91.46666666666667%"),
    height: hp("8.060109289617486%"),
    top: hp("37.021857923497265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3656: {
    width: wp("91.46666666666667%"),
    height: hp("0.000004096450116339043%"),
    top: hp("8.060105120549437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3657: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3658: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3658: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3659: {
    width: wp("12%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3659: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3660: {
    width: wp("8%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3660: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3661: {
    width: wp("29.86666666666667%"),
    top: hp("4.234972677595621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.599999999999994%"),
    justifyContent: "flex-start"
  },
  Text_592_3661: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3662: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3663: {
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
  ImageBackground_592_3664: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_592_3668: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("27.732240437158467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3669: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3670: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3671: {
    width: wp("8.266666666666666%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3671: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3672: {
    width: wp("17.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.39999999999999%"),
    justifyContent: "flex-start"
  },
  Text_592_3672: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3673: {
    width: wp("15.733333333333333%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3673: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3674: {
    width: wp("30.133333333333333%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3674: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_592_3675: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3680: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("18.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3681: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3682: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3683: {
    width: wp("20.8%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3683: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3684: {
    width: wp("16.8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3684: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3685: {
    width: wp("8%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3685: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3686: {
    width: wp("28.799999999999997%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3686: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_592_3687: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3692: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("9.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3693: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3694: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3695: {
    width: wp("18.666666666666668%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3695: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3696: {
    width: wp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    justifyContent: "flex-start"
  },
  Text_592_3696: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3697: {
    width: wp("8%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3697: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3698: {
    width: wp("29.333333333333332%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3698: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3699: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3700: {
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
  ImageBackground_592_3701: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_592_3704: {
    width: wp("91.46666666666667%"),
    height: hp("8.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3705: {
    width: wp("91.46666666666667%"),
    height: hp("0.000004096450116339043%"),
    top: hp("8.060105120549437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3706: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3707: {
    width: wp("21.6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3707: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3708: {
    width: wp("12.8%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3708: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3709: {
    width: wp("8%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3709: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3710: {
    width: wp("30.133333333333333%"),
    top: hp("4.234972677595621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3710: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3711: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3712: {
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
  ImageBackground_592_3713: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_592_3717: {
    width: wp("34.4%"),
    top: hp("3.2786885245901516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3717: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_219_270: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.23497267759563%")
  },
  View_203_216: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34.42622950819672%"),
    minHeight: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_359_480: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("8.7431693989071%")
  },
  ImageBackground_234_288: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666665%"),
    top: hp("1.092896174863391%")
  },
  View_234_309: {
    width: wp("78.13333333333333%"),
    minWidth: wp("78.13333333333333%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("21.857923497267763%")
  },
  View_234_312: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.26666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_234_312: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_234_316: {
    width: wp("9.866666666666667%"),
    minWidth: wp("9.866666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_234_316: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_359_482: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    height: hp("21.311475409836063%"),
    minHeight: hp("21.311475409836063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_358_467: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666666%"),
    top: hp("9.562841530054648%"),
    justifyContent: "flex-start"
  },
  Text_358_467: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_358_468: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("14.344262295081968%"),
    justifyContent: "flex-start"
  },
  Text_358_468: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_358_470: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.12568306010929%"),
    justifyContent: "flex-start"
  },
  Text_358_470: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_358_469: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%"),
    top: hp("4.7814207650273275%"),
    justifyContent: "flex-start"
  },
  Text_358_469: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_358_471: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_358_471: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_359_481: {
    width: wp("78.93333333333334%"),
    minWidth: wp("78.93333333333334%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%"),
    top: hp("1.092896174863391%")
  },
  View_359_468: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    backgroundColor: "rgba(61, 171, 37, 1)"
  },
  View_359_474: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333338%"),
    top: hp("9.562841530054648%"),
    backgroundColor: "rgba(235, 90, 90, 1)"
  },
  View_359_475: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(61, 171, 37, 1)"
  },
  View_359_476: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("9.562841530054648%"),
    backgroundColor: "rgba(235, 90, 90, 1)"
  },
  View_359_477: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333334%"),
    top: hp("9.562841530054648%"),
    backgroundColor: "rgba(235, 90, 90, 1)"
  },
  View_359_478: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.66666666666667%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(61, 171, 37, 1)"
  },
  View_359_479: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.39999999999999%"),
    top: hp("9.562841530054648%"),
    backgroundColor: "rgba(235, 90, 90, 1)"
  },
  TouchableOpacity_234_377: {
    width: wp("73.6%"),
    minWidth: wp("73.6%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("2.1857923497267784%")
  },
  View_234_322: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_234_293: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(102, 90, 240, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_234_297: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666643%"),
    top: hp("0.5464480874316955%"),
    justifyContent: "flex-start"
  },
  Text_234_297: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_234_367: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("0%")
  },
  View_356_475: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_234_366: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.5464480874316955%"),
    justifyContent: "flex-start"
  },
  Text_234_366: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_356_479: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.666666666666664%"),
    top: hp("0%")
  },
  View_356_476: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 248, 248, 1)",
    borderColor: "rgba(229, 229, 229, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  View_356_478: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.5464480874316955%"),
    justifyContent: "flex-start"
  },
  Text_356_478: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1905: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_548_2746: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28.142076502732237%"),
    minHeight: hp("28.142076502732237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_204_1228: {
    width: wp("43.6%"),
    minWidth: wp("43.6%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.13333333333333%"),
    top: hp("15.573770491803279%")
  },
  ImageBackground_204_1229: {
    width: wp("43.6%"),
    minWidth: wp("43.6%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_219_268: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.866666666666667%"),
    top: hp("1.9125683060109306%")
  },
  View_204_1231: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_204_1231: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_204_1232: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584703%"),
    justifyContent: "flex-start"
  },
  Text_204_1232: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_219_267: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.3661202185792352%")
  },
  View_204_1233: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 90, 90, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_205_232: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4666666666666615%")
  },
  View_219_266: {
    width: wp("43.6%"),
    minWidth: wp("43.6%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("15.573770491803279%")
  },
  ImageBackground_200_504: {
    width: wp("43.6%"),
    minWidth: wp("43.6%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_219_269: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    height: hp("6.420765027322404%"),
    minHeight: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333334%"),
    top: hp("2.049180327868852%")
  },
  View_200_519: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_519: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_200_521: {
    width: wp("17.866666666666667%"),
    minWidth: wp("17.866666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.595628415300549%"),
    justifyContent: "flex-start"
  },
  Text_200_521: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_219_265: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("1.5027322404371564%")
  },
  View_204_1227: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(61, 171, 37, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_205_230: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.466666666666666%")
  },
  View_595_5051: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032787%")
  },
  View_595_5052: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_595_5053: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I595_5053_205_2076: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371584774%")
  },
  ImageBackground_I595_5053_205_2077: {
    width: wp("5.333333333333334%"),
    height: hp("1.8284103258059976%"),
    top: hp("0.9038289388020839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I595_5053_205_2080: {
    width: wp("0.400007692972819%"),
    height: hp("1.8013916380418455%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4666178385416657%")
  },
  ImageBackground_I595_5053_205_2083: {
    width: wp("1.954738489786784%"),
    height: hp("0.5879080360704433%"),
    top: hp("0.0013674543203556766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6893229166666686%")
  },
  View_595_5054: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2.1857923497267766%"),
    justifyContent: "center"
  },
  Text_595_5054: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_595_5055: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.4590163934426226%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I595_5055_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_567_3844: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_567_3845: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_569_2841: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I569_2841_415_1172: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533447265625%"),
    top: hp("0.27327824160050795%")
  },
  TouchableOpacity_567_3846: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I567_3846_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27323863545403526%")
  },
  View_I567_3846_319_328: {
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
  ImageBackground_I567_3846_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3846_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I567_3846_319_333: {
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
  ImageBackground_I567_3846_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3846_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_567_3847: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I567_3847_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333821614583272%"),
    top: hp("0.2732511426581823%")
  },
  View_I567_3847_319_340: {
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
  ImageBackground_I567_3847_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3847_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3847_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126444331935204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7814290364583414%")
  },
  ImageBackground_I567_3847_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709006721204872%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.066227213541673%")
  },
  ImageBackground_I567_3847_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878405628308599%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7328938802083442%")
  },
  TouchableOpacity_567_3849: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I567_3849_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I567_3849_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3849_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_567_3851: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_567_3852: {
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
  View_200_234: {
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
  View_200_235: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_236: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_200_236: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_200_237: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_200_238: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_200_239: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_200_242: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5040986941811818%")
  },
  View_200_243: {
    width: wp("4.805551147460937%"),
    minWidth: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339518229166629%"),
    top: hp("0.26184248793971987%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_200_244: {
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
  View_200_245: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_200_246: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9153022140753078%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_200_247: {
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
  View_200_248: {
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
  View_200_249: {
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
  View_200_250: {
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
  ImageBackground_200_251: {
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
