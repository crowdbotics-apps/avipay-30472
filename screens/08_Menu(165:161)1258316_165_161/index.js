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
      <View style={styles.View_592_3374}>
        <View style={styles.View_592_3375} />
        <View style={styles.View_592_3378}>
          <View style={styles.View_592_3379}>
            <View style={styles.View_592_3380}>
              <View style={styles.View_592_3381}>
                <Text style={styles.Text_592_3381}>Television bill</Text>
              </View>
              <View style={styles.View_592_3382}>
                <Text style={styles.Text_592_3382}>-$400</Text>
              </View>
              <View style={styles.View_592_3383}>
                <Text style={styles.Text_592_3383}>Send</Text>
              </View>
              <View style={styles.View_592_3384}>
                <Text style={styles.Text_592_3384}>July 1 - 3:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3385}>
              <View style={styles.View_592_3386} />
              <View style={styles.View_592_3387}>
                <View style={styles.View_592_3388}>
                  <View style={styles.View_592_3389} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c8e/ffe6/5c81d13239e6d8a047b69f66d4d8b413"
                    }}
                    style={styles.ImageBackground_592_3390}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_592_3392}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3393}
            />
            <View style={styles.View_592_3394}>
              <View style={styles.View_592_3395}>
                <Text style={styles.Text_592_3395}>QR Payment</Text>
              </View>
              <View style={styles.View_592_3396}>
                <Text style={styles.Text_592_3396}>+$1.600</Text>
              </View>
              <View style={styles.View_592_3397}>
                <Text style={styles.Text_592_3397}>Received</Text>
              </View>
              <View style={styles.View_592_3398}>
                <Text style={styles.Text_592_3398}>July 2 - 2:25 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3399}>
              <View style={styles.View_592_3400} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1769/87ff/39442d94cc2a663c1eca9b3bfd48a5a3"
                }}
                style={styles.ImageBackground_592_3402}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1769/87ff/39442d94cc2a663c1eca9b3bfd48a5a3"
                }}
                style={styles.ImageBackground_592_3403}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1769/87ff/39442d94cc2a663c1eca9b3bfd48a5a3"
                }}
                style={styles.ImageBackground_592_3404}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a55b/4611/1df1b19f214f9406cfd4461ecd014058"
                }}
                style={styles.ImageBackground_592_3405}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_592_3406}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_592_3407}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7fa/b408/faf33d71758e1ac7ba131bc163b9b037"
                }}
                style={styles.ImageBackground_592_3408}
              />
            </View>
          </View>
          <View style={styles.View_592_3409}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3410}
            />
            <View style={styles.View_592_3411}>
              <View style={styles.View_592_3412}>
                <Text style={styles.Text_592_3412}>QR Payment</Text>
              </View>
              <View style={styles.View_592_3413}>
                <Text style={styles.Text_592_3413}>- $220</Text>
              </View>
              <View style={styles.View_592_3414}>
                <Text style={styles.Text_592_3414}>Sent</Text>
              </View>
              <View style={styles.View_592_3415}>
                <Text style={styles.Text_592_3415}>July 6 - 5:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3416}>
              <View style={styles.View_592_3417} />
              <View style={styles.View_592_3418}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/163f/210f2f7314f67bca3406a9fffb9f8ae9"
                  }}
                  style={styles.ImageBackground_592_3419}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7931/4600/1b44baf03922450dc7de7a1956c4f11e"
                  }}
                  style={styles.ImageBackground_592_3423}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_592_3424}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3425}
            />
            <View style={styles.View_592_3426}>
              <View style={styles.View_592_3427}>
                <Text style={styles.Text_592_3427}>Market</Text>
              </View>
              <View style={styles.View_592_3428}>
                <Text style={styles.Text_592_3428}>-$752</Text>
              </View>
              <View style={styles.View_592_3429}>
                <Text style={styles.Text_592_3429}>Sent</Text>
              </View>
              <View style={styles.View_592_3430}>
                <Text style={styles.Text_592_3430}>July 6 - 4:20 AM</Text>
              </View>
            </View>
            <View style={styles.View_592_3431}>
              <View style={styles.View_592_3432} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7253/7127/aaa83e715e30646fe5d5e022a47891af"
                }}
                style={styles.ImageBackground_592_3433}
              />
            </View>
          </View>
          <View style={styles.View_592_3437}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3438}
            />
            <View style={styles.View_592_3439}>
              <View style={styles.View_592_3440}>
                <Text style={styles.Text_592_3440}>Television bill</Text>
              </View>
              <View style={styles.View_592_3441}>
                <Text style={styles.Text_592_3441}>-$400</Text>
              </View>
              <View style={styles.View_592_3442}>
                <Text style={styles.Text_592_3442}>Send</Text>
              </View>
              <View style={styles.View_592_3443}>
                <Text style={styles.Text_592_3443}>July 7 - 3:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3444}>
              <View style={styles.View_592_3445} />
              <View style={styles.View_592_3446}>
                <View style={styles.View_592_3447}>
                  <View style={styles.View_592_3448} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c8e/ffe6/5c81d13239e6d8a047b69f66d4d8b413"
                    }}
                    style={styles.ImageBackground_592_3449}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_592_3451}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3452}
            />
            <View style={styles.View_592_3453}>
              <View style={styles.View_592_3454}>
                <Text style={styles.Text_592_3454}>QR Payment</Text>
              </View>
              <View style={styles.View_592_3455}>
                <Text style={styles.Text_592_3455}>+$1.600</Text>
              </View>
              <View style={styles.View_592_3456}>
                <Text style={styles.Text_592_3456}>Received</Text>
              </View>
              <View style={styles.View_592_3457}>
                <Text style={styles.Text_592_3457}>July 8 - 2:25 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3458}>
              <View style={styles.View_592_3459} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3772/6cd7/6538c4a8d051ddad3cf4d80d59db867c"
                }}
                style={styles.ImageBackground_907_1904}
              />
            </View>
          </View>
          <View style={styles.View_592_3468}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3469}
            />
            <View style={styles.View_592_3470}>
              <View style={styles.View_592_3471}>
                <Text style={styles.Text_592_3471}>QR Payment</Text>
              </View>
              <View style={styles.View_592_3472}>
                <Text style={styles.Text_592_3472}>- $220</Text>
              </View>
              <View style={styles.View_592_3473}>
                <Text style={styles.Text_592_3473}>Sent</Text>
              </View>
              <View style={styles.View_592_3474}>
                <Text style={styles.Text_592_3474}>July 10 - 5:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3475}>
              <View style={styles.View_592_3476} />
              <View style={styles.View_592_3477}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/163f/210f2f7314f67bca3406a9fffb9f8ae9"
                  }}
                  style={styles.ImageBackground_592_3478}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7931/4600/1b44baf03922450dc7de7a1956c4f11e"
                  }}
                  style={styles.ImageBackground_592_3482}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_592_3483}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3484}
            />
            <View style={styles.View_592_3485}>
              <View style={styles.View_592_3486}>
                <Text style={styles.Text_592_3486}>Market</Text>
              </View>
              <View style={styles.View_592_3487}>
                <Text style={styles.Text_592_3487}>-$752</Text>
              </View>
              <View style={styles.View_592_3488}>
                <Text style={styles.Text_592_3488}>Sent</Text>
              </View>
              <View style={styles.View_592_3489}>
                <Text style={styles.Text_592_3489}>July 10 - 4:20 AM</Text>
              </View>
            </View>
            <View style={styles.View_592_3490}>
              <View style={styles.View_592_3491} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7253/7127/aaa83e715e30646fe5d5e022a47891af"
                }}
                style={styles.ImageBackground_592_3492}
              />
            </View>
          </View>
          <View style={styles.View_592_3496}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3497}
            />
            <View style={styles.View_592_3498}>
              <View style={styles.View_592_3499}>
                <Text style={styles.Text_592_3499}>Loui</Text>
              </View>
              <View style={styles.View_592_3500}>
                <Text style={styles.Text_592_3500}>+$4.200</Text>
              </View>
              <View style={styles.View_592_3501}>
                <Text style={styles.Text_592_3501}>Received</Text>
              </View>
              <View style={styles.View_592_3502}>
                <Text style={styles.Text_592_3502}>July 10 - 3:00 PM</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d76/6ffd/4040c0b645825e0d244af042aa32c93a"
              }}
              style={styles.ImageBackground_592_3503}
            />
          </View>
          <View style={styles.View_592_3508}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3509}
            />
            <View style={styles.View_592_3510}>
              <View style={styles.View_592_3511}>
                <Text style={styles.Text_592_3511}>Johnsmith</Text>
              </View>
              <View style={styles.View_592_3512}>
                <Text style={styles.Text_592_3512}>- $1.600</Text>
              </View>
              <View style={styles.View_592_3513}>
                <Text style={styles.Text_592_3513}>Sent</Text>
              </View>
              <View style={styles.View_592_3514}>
                <Text style={styles.Text_592_3514}>July 13 - 2:25 PM</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d76/6ffd/4040c0b645825e0d244af042aa32c93a"
              }}
              style={styles.ImageBackground_592_3515}
            />
          </View>
          <View style={styles.View_592_3520}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3521}
            />
            <View style={styles.View_592_3522}>
              <View style={styles.View_592_3523}>
                <Text style={styles.Text_592_3523}>Water bill</Text>
              </View>
              <View style={styles.View_592_3524}>
                <Text style={styles.Text_592_3524}>- $27</Text>
              </View>
              <View style={styles.View_592_3525}>
                <Text style={styles.Text_592_3525}>Sent</Text>
              </View>
              <View style={styles.View_592_3526}>
                <Text style={styles.Text_592_3526}>To day - 2:20 PM</Text>
              </View>
            </View>
            <View style={styles.View_592_3527}>
              <View style={styles.View_592_3528} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f80/5a71/4a9fcd6d2328f46741e0daaa76ae9503"
                }}
                style={styles.ImageBackground_592_3529}
              />
            </View>
          </View>
          <View style={styles.View_592_3532}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_592_3533}
            />
            <View style={styles.View_592_3534}>
              <View style={styles.View_592_3535}>
                <Text style={styles.Text_592_3535}>Electric bill</Text>
              </View>
              <View style={styles.View_592_3536}>
                <Text style={styles.Text_592_3536}>-$420</Text>
              </View>
              <View style={styles.View_592_3537}>
                <Text style={styles.Text_592_3537}>Sent</Text>
              </View>
              <View style={styles.View_592_3538}>
                <Text style={styles.Text_592_3538}>To day - 11:00 AM</Text>
              </View>
            </View>
            <View style={styles.View_592_3539}>
              <View style={styles.View_592_3540} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaff/542d/d7c909e1bda23eef85e0448b1e2110c6"
                }}
                style={styles.ImageBackground_592_3541}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_592_3545}>
          <Text style={styles.Text_592_3545}>Trading history</Text>
        </View>
        <View style={styles.View_592_3376} />
      </View>
      <View style={styles.View_213_268}>
        <View style={styles.View_168_219} />
        <View style={styles.View_907_1770}>
          <View style={styles.View_209_279}>
            <View style={styles.View_107_10}>
              <Text style={styles.Text_107_10}>Electricity</Text>
            </View>
            <View style={styles.View_191_286}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dae/58fa/1dd471255a435141599fc0d1690ab197"
                }}
                style={styles.ImageBackground_103_87}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03bc/4e96/ecab57d118baf8d066a3fab52eda1771"
                }}
                style={styles.ImageBackground_109_7}
              />
            </View>
          </View>
          <View style={styles.View_209_280}>
            <View style={styles.View_206_230}>
              <View style={styles.View_206_231} />
              <View style={styles.View_209_260}>
                <View style={styles.View_209_261}>
                  <View style={styles.View_209_262}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efc7/b822/0e27e05a200164910bf6490caa16aad8"
                      }}
                      style={styles.ImageBackground_209_263}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_107_11}>
              <Text style={styles.Text_107_11}>Internet</Text>
            </View>
          </View>
          <View style={styles.View_209_281}>
            <View style={styles.View_206_238}>
              <View style={styles.View_206_239} />
              <View style={styles.View_213_266}>
                <View style={styles.View_549_3068} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ab/af7c/091377f65cb94011514d7c0aefa3f8e7"
                  }}
                  style={styles.ImageBackground_213_267}
                />
              </View>
            </View>
            <View style={styles.View_107_12}>
              <Text style={styles.Text_107_12}>Insurrance</Text>
            </View>
          </View>
          <View style={styles.View_209_282}>
            <View style={styles.View_206_242}>
              <View style={styles.View_206_243} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8961/7cd4/c02b08896e04c2bee3d854f9f352cd83"
                }}
                style={styles.ImageBackground_209_276}
              />
            </View>
            <View style={styles.View_107_13}>
              <Text style={styles.Text_107_13}>Medical</Text>
            </View>
          </View>
          <View style={styles.View_209_320}>
            <View style={styles.View_209_321}>
              <Text style={styles.Text_209_321}>Market</Text>
            </View>
            <View style={styles.View_209_322}>
              <View style={styles.View_209_323} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa38/34c2/c762a52188a6b108fa7e3551865d7721"
                }}
                style={styles.ImageBackground_209_394}
              />
            </View>
          </View>
          <View style={styles.View_209_326}>
            <View style={styles.View_209_327}>
              <View style={styles.View_209_328} />
              <View style={styles.View_212_230}>
                <View style={styles.View_212_231}>
                  <View style={styles.View_212_232}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72bf/de7e/e2761d3da951ea75ec2260e14a82f788"
                      }}
                      style={styles.ImageBackground_212_233}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_209_336}>
              <Text style={styles.Text_209_336}>Electric bill</Text>
            </View>
          </View>
          <View style={styles.View_209_337}>
            <View style={styles.View_209_338}>
              <View style={styles.View_209_339} />
              <View style={styles.View_213_230}>
                <View style={styles.View_213_231}>
                  <View style={styles.View_549_3069} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dcf/7552/0a0e18305fba9577236ad0f6dd6fb8f1"
                    }}
                    style={styles.ImageBackground_213_232}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_209_349}>
              <Text style={styles.Text_209_349}>Television</Text>
            </View>
          </View>
          <View style={styles.View_209_350}>
            <View style={styles.View_209_351}>
              <View style={styles.View_209_352} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f72/6439/45d557290b290df8d916ec69cd38e9bc"
                }}
                style={styles.ImageBackground_549_3071}
              />
            </View>
            <View style={styles.View_209_356}>
              <Text style={styles.Text_209_356}>Waterbill</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_103_78}>
          <Text style={styles.Text_103_78}>Payment List</Text>
        </View>
      </View>
      <View style={styles.View_200_209}>
        <View style={styles.View_187_291} />
        <View style={styles.View_549_2990}>
          <View style={styles.View_549_2991}>
            <View style={styles.View_549_2992}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9c/7e1b/319e6f0e119834ad96ec8c0ed894efa2"
                }}
                style={styles.ImageBackground_549_2993}
              />
              <View style={styles.View_549_2996}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5097/0c79/14ba396f831ecbcb061cdbf6a15b71c2"
                  }}
                  style={styles.ImageBackground_549_2997}
                />
                <View style={styles.View_549_2998}>
                  <View style={styles.View_549_2999} />
                </View>
              </View>
            </View>
            <View style={styles.View_549_3000}>
              <Text style={styles.Text_549_3000}>John</Text>
            </View>
          </View>
          <View style={styles.View_549_3001}>
            <View style={styles.View_549_3002}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9c/7e1b/319e6f0e119834ad96ec8c0ed894efa2"
                }}
                style={styles.ImageBackground_549_3003}
              />
            </View>
            <View style={styles.View_549_3006}>
              <Text style={styles.Text_549_3006}>Loui Wiliiam</Text>
            </View>
          </View>
          <View style={styles.View_549_3007}>
            <View style={styles.View_549_3008}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9c/7e1b/319e6f0e119834ad96ec8c0ed894efa2"
                }}
                style={styles.ImageBackground_549_3009}
              />
            </View>
            <View style={styles.View_549_3012}>
              <Text style={styles.Text_549_3012}>Hannahsx</Text>
            </View>
          </View>
          <View style={styles.View_549_3013}>
            <View style={styles.View_549_3014}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9c/7e1b/319e6f0e119834ad96ec8c0ed894efa2"
                }}
                style={styles.ImageBackground_549_3015}
              />
            </View>
            <View style={styles.View_549_3018}>
              <Text style={styles.Text_549_3018}>Leahaed</Text>
            </View>
          </View>
          <View style={styles.View_549_3019}>
            <View style={styles.View_549_3020}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9c/7e1b/319e6f0e119834ad96ec8c0ed894efa2"
                }}
                style={styles.ImageBackground_549_3021}
              />
            </View>
            <View style={styles.View_549_3024}>
              <Text style={styles.Text_549_3024}>Lane Barton</Text>
            </View>
          </View>
          <View style={styles.View_549_3025}>
            <View style={styles.View_549_3026}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9c/7e1b/319e6f0e119834ad96ec8c0ed894efa2"
                }}
                style={styles.ImageBackground_549_3027}
              />
            </View>
            <View style={styles.View_549_3030}>
              <Text style={styles.Text_549_3030}>Leah</Text>
            </View>
          </View>
          <View style={styles.View_549_3031}>
            <View style={styles.View_549_3032}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9c/7e1b/319e6f0e119834ad96ec8c0ed894efa2"
                }}
                style={styles.ImageBackground_549_3033}
              />
            </View>
            <View style={styles.View_549_3036}>
              <Text style={styles.Text_549_3036}>Cliff Yates</Text>
            </View>
          </View>
          <View style={styles.View_549_3037}>
            <View style={styles.View_549_3038}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9c/7e1b/319e6f0e119834ad96ec8c0ed894efa2"
                }}
                style={styles.ImageBackground_549_3039}
              />
            </View>
            <View style={styles.View_549_3042}>
              <Text style={styles.Text_549_3042}>Harper Geis</Text>
            </View>
          </View>
          <View style={styles.View_549_3043}>
            <View style={styles.View_549_3044}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9c/7e1b/319e6f0e119834ad96ec8c0ed894efa2"
                }}
                style={styles.ImageBackground_549_3045}
              />
            </View>
            <View style={styles.View_549_3048}>
              <Text style={styles.Text_549_3048}>Maia Walsh</Text>
            </View>
          </View>
          <View style={styles.View_549_3049}>
            <View style={styles.View_549_3050}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b9c/7e1b/319e6f0e119834ad96ec8c0ed894efa2"
                }}
                style={styles.ImageBackground_549_3054}
              />
            </View>
            <View style={styles.View_549_3053}>
              <Text style={styles.Text_549_3053}>Laurel Lane</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_183_265}>
          <Text style={styles.Text_183_265}>Send again</Text>
        </View>
      </View>
      <View style={styles.View_199_343}>
        <View style={styles.View_199_342}>
          <View style={styles.View_166_317} />
          <View style={styles.View_199_328}>
            <View style={styles.View_179_320}>
              <View style={styles.View_179_321} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eab/c2cd/73d7465c7590a729f1c2811b7d421944"
                }}
                style={styles.ImageBackground_179_322}
              />
            </View>
            <View style={styles.View_179_316}>
              <View style={styles.View_179_317} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb3/0d39/592dace95edb8d4c353f9cff613c9dbe"
                }}
                style={styles.ImageBackground_179_319}
              />
            </View>
          </View>
          <View style={styles.View_177_1420}>
            <View style={styles.View_166_318}>
              <Text style={styles.Text_166_318}>$12,769.00</Text>
            </View>
            <View style={styles.View_166_319}>
              <Text style={styles.Text_166_319}>Balance</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_199_341}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("427_15154"))
            }
          >
            <View style={styles.View_178_255}>
              <View style={styles.View_178_256}>
                <View style={styles.View_178_257}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/783d/0166/4ff95033ede67b143d9c889e6a121a53"
                    }}
                    style={styles.ImageBackground_178_258}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2538/cd0e/d373caca5033110836d2c1ae35f465dd"
                    }}
                    style={styles.ImageBackground_178_259}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e772/e616/59e13a4e70f68cf7e4171ad0db6d8960"
                  }}
                  style={styles.ImageBackground_178_262}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2387/719b/05fadbd911ca72e1c99e6c949af90ef3"
              }}
              style={styles.ImageBackground_199_320}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.View_199_344}>
          <View style={styles.View_168_220} />
          <TouchableOpacity
            style={styles.TouchableOpacity_183_259}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("345_438"))
            }
          >
            <View style={styles.View_182_344}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fc5/6fe4/35320ec807d0d350ac7b8acb252519b5"
                }}
                style={styles.ImageBackground_182_338}
              />
            </View>
            <View style={styles.View_182_404}>
              <Text style={styles.Text_182_404}>Top up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_183_260}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("328_343"))
            }
          >
            <View style={styles.View_182_323}>
              <View style={styles.View_182_324}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ffa/bfdf/3d2c859fae8c1f9bd6612412fabccd20"
                  }}
                  style={styles.ImageBackground_182_325}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cf1/e0c1/ae29ff7d29a053bfa0ce6a75b030d893"
                  }}
                  style={styles.ImageBackground_182_326}
                />
                <View style={styles.View_182_327}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0610/ac7a/57337bd824e9b20c36485679b46e6e08"
                    }}
                    style={styles.ImageBackground_182_328}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b43a/d080/bb62506f7009aa0349fc1da7d7c60ed2"
                    }}
                    style={styles.ImageBackground_182_329}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01de/7860/f5a976e86ea895b244795f77f42fb349"
                  }}
                  style={styles.ImageBackground_182_332}
                />
              </View>
            </View>
            <View style={styles.View_182_405}>
              <Text style={styles.Text_182_405}>Wallet</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_183_261}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("360_473"))
            }
          >
            <View style={styles.View_182_383}>
              <View style={styles.View_182_384}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f6/fd1d/7420c80a00af5ff83d568b051761414b"
                  }}
                  style={styles.ImageBackground_182_385}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bef/74ce/d9c3925d3ff7f839eeaba10d9ffc5b55"
                  }}
                  style={styles.ImageBackground_550_2909}
                />
              </View>
            </View>
            <View style={styles.View_182_406}>
              <Text style={styles.Text_182_406}>QR Scan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_183_262}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("361_521"))
            }
          >
            <View style={styles.View_182_391}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6074/3534/0496edc8bfef85ac9405098a443a8f1f"
                }}
                style={styles.ImageBackground_182_371}
              />
            </View>
            <View style={styles.View_182_407}>
              <Text style={styles.Text_182_407}>My QR</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_165_267}>
        <View style={styles.View_165_268}>
          <View style={styles.View_165_269}>
            <Text style={styles.Text_165_269}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_165_270}>
          <View style={styles.View_165_271}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_165_272}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_165_275}
            />
          </View>
          <View style={styles.View_165_276} />
        </View>
        <View style={styles.View_165_277}>
          <View style={styles.View_165_278}>
            <View style={styles.View_165_279} />
            <View style={styles.View_165_280} />
            <View style={styles.View_165_281} />
            <View style={styles.View_165_282} />
          </View>
        </View>
        <View style={styles.View_165_283}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e76/21a5/ca49045f4b39546b3cfd31fde18b9385"
            }}
            style={styles.ImageBackground_165_284}
          />
        </View>
      </View>
      <View style={styles.View_200_229}>
        <View style={styles.View_194_250} />
        <TouchableOpacity
          style={styles.TouchableOpacity_319_366}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I319_366_319_327}>
            <View style={styles.View_I319_366_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I319_366_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I319_366_319_330}
              />
            </View>
            <View style={styles.View_I319_366_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I319_366_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I319_366_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_319_356}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I319_356_319_339}>
            <View style={styles.View_I319_356_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I319_356_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I319_356_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I319_356_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I319_356_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I319_356_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_319_348}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <View style={styles.View_I319_348_319_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
              }}
              style={styles.ImageBackground_I319_348_319_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cb/7134/60991c3b1f7388abbaaac49119c40fb5"
              }}
              style={styles.ImageBackground_I319_348_319_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
              }}
              style={styles.ImageBackground_I319_348_319_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f6/d981/cbf2cafa04251ce782f812db1d542238"
              }}
              style={styles.ImageBackground_I319_348_319_323}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_165_266}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1851/4691/8dd288393e2e2759e2120eaa081c11be"
            }}
            style={styles.ImageBackground_I165_266_57_890}
          />
        </View>
        <View style={styles.View_165_182}>
          <View style={styles.View_165_183} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_592_3374: {
    width: wp("100%"),
    height: hp("121.72131147540983%"),
    top: hp("86.88524590163934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3375: {
    width: wp("100%"),
    height: hp("121.72131147540983%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_592_3378: {
    width: wp("91.46666666666667%"),
    height: hp("108.33333333333333%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_592_3379: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("101.50273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3380: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3381: {
    width: wp("25.866666666666667%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3381: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3382: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.866666666666674%"),
    justifyContent: "flex-start"
  },
  Text_592_3382: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3383: {
    width: wp("8.799999999999999%"),
    top: hp("3.9617486338798074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3383: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3384: {
    width: wp("27.46666666666667%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    justifyContent: "flex-start"
  },
  Text_592_3384: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3385: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3386: {
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
  View_592_3387: {
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
  View_592_3388: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0.14902750651043561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3389: {
    width: wp("5.485713704427083%"),
    height: hp("1.990632541844102%"),
    top: hp("0.20225816737107039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45714314778645804%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_592_3390: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3392: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("92.21311475409837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3393: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3394: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3395: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3395: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3396: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3396: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3397: {
    width: wp("15.733333333333333%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3397: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3398: {
    width: wp("27.73333333333333%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3398: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3399: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3400: {
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
  ImageBackground_592_3402: {
    width: wp("2.566667683919271%"),
    height: hp("1.31489123151602%"),
    top: hp("1.8442622950819612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5999999999999996%")
  },
  ImageBackground_592_3403: {
    width: wp("2.566667683919271%"),
    height: hp("1.3148916223661495%"),
    top: hp("3.398224043715828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5999999999999996%")
  },
  ImageBackground_592_3404: {
    width: wp("2.566667683919271%"),
    height: hp("1.31489123151602%"),
    top: hp("1.8442622950819612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.633338419596353%")
  },
  ImageBackground_592_3405: {
    width: wp("2.566667683919271%"),
    height: hp("1.3148916223661495%"),
    top: hp("3.398224043715828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.633338419596353%")
  },
  ImageBackground_592_3406: {
    width: wp("0.7000005722045898%"),
    height: hp("0.35860685051464647%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5333384195963555%")
  },
  ImageBackground_592_3407: {
    width: wp("0.7000004450480144%"),
    height: hp("0.35860685051464647%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.566661580403646%")
  },
  ImageBackground_592_3408: {
    width: wp("0.7000005722045898%"),
    height: hp("0.35860688308549055%"),
    top: hp("3.8763702892866263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5333384195963555%")
  },
  View_592_3409: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("82.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3410: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3411: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3412: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3412: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3413: {
    width: wp("13.866666666666665%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.599999999999994%"),
    justifyContent: "flex-start"
  },
  Text_592_3413: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3414: {
    width: wp("8%"),
    top: hp("3.9617486338798074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3414: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3415: {
    width: wp("28.799999999999997%"),
    top: hp("4.098360655737736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3415: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3416: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3417: {
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
  View_592_3418: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  ImageBackground_592_3419: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3423: {
    width: wp("2.9274442036946615%"),
    height: hp("0.5738032971574961%"),
    top: hp("0.5601101234311159%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333316%")
  },
  View_592_3424: {
    width: wp("91.46666666666667%"),
    height: hp("8.060109289617486%"),
    top: hp("73.7704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3425: {
    width: wp("91.46666666666667%"),
    height: hp("0.000004096450116339043%"),
    top: hp("8.060105120549423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3426: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3427: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3427: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3428: {
    width: wp("12%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3428: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3429: {
    width: wp("8%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3429: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3430: {
    width: wp("28.53333333333333%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3430: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3431: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3432: {
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
  ImageBackground_592_3433: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_592_3437: {
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("64.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3438: {
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    top: hp("7.923497267759586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3439: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3440: {
    width: wp("25.866666666666667%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3440: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3441: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.866666666666674%"),
    justifyContent: "flex-start"
  },
  Text_592_3441: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3442: {
    width: wp("8.799999999999999%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3442: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3443: {
    width: wp("28.26666666666667%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.2%"),
    justifyContent: "flex-start"
  },
  Text_592_3443: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3444: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3445: {
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
  View_592_3446: {
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
  View_592_3447: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0.1490275065104072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3448: {
    width: wp("5.485713704427083%"),
    height: hp("1.990632541844102%"),
    top: hp("0.20225816737107039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45714314778645804%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_592_3449: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3451: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("55.46448087431696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3452: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3453: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3454: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3454: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3455: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3455: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3456: {
    width: wp("15.733333333333333%"),
    top: hp("3.9617486338797505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3456: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3457: {
    width: wp("27.73333333333333%"),
    top: hp("4.098360655737679%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3457: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3458: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3459: {
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
  ImageBackground_907_1904: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688550646839244%"),
    top: hp("1.8442622950819612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5999999999999996%")
  },
  View_592_3468: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("46.17486338797815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3469: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3470: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3471: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3471: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3472: {
    width: wp("13.866666666666665%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.599999999999994%"),
    justifyContent: "flex-start"
  },
  Text_592_3472: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3473: {
    width: wp("8%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3473: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3474: {
    width: wp("30.133333333333333%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3474: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3475: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3476: {
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
  View_592_3477: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  ImageBackground_592_3478: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3482: {
    width: wp("2.9274442036946615%"),
    height: hp("0.5738032971574961%"),
    top: hp("0.5601101234310875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333316%")
  },
  View_592_3483: {
    width: wp("91.46666666666667%"),
    height: hp("8.060109289617486%"),
    top: hp("37.02185792349729%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3484: {
    width: wp("91.46666666666667%"),
    height: hp("0.000004096450116339043%"),
    top: hp("8.060105120549423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3485: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3486: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3486: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3487: {
    width: wp("12%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3487: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3488: {
    width: wp("8%"),
    top: hp("3.825136612021822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3488: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3489: {
    width: wp("29.86666666666667%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.599999999999994%"),
    justifyContent: "flex-start"
  },
  Text_592_3489: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3490: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3491: {
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
  ImageBackground_592_3492: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_592_3496: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("27.73224043715848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3497: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3498: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3499: {
    width: wp("8.266666666666666%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3499: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3500: {
    width: wp("17.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.39999999999999%"),
    justifyContent: "flex-start"
  },
  Text_592_3500: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3501: {
    width: wp("15.733333333333333%"),
    top: hp("3.961748633879793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3501: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3502: {
    width: wp("30.133333333333333%"),
    top: hp("4.098360655737693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3502: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_592_3503: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3508: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("18.442622950819697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3509: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3510: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3511: {
    width: wp("20.8%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3511: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3512: {
    width: wp("16.8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3512: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3513: {
    width: wp("8%"),
    top: hp("3.9617486338797647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3513: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3514: {
    width: wp("28.799999999999997%"),
    top: hp("4.098360655737693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3514: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_592_3515: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.2732240437158282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3520: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("9.153005464480884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3521: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3522: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3523: {
    width: wp("18.666666666666668%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3523: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3524: {
    width: wp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    justifyContent: "flex-start"
  },
  Text_592_3524: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3525: {
    width: wp("8%"),
    top: hp("3.961748633879793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3525: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3526: {
    width: wp("29.333333333333332%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3526: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3527: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3528: {
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
  ImageBackground_592_3529: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_592_3532: {
    width: wp("91.46666666666667%"),
    height: hp("8.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_592_3533: {
    width: wp("91.46666666666667%"),
    height: hp("0.000004096450116339043%"),
    top: hp("8.060105120549451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3534: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_592_3535: {
    width: wp("21.6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3535: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3536: {
    width: wp("12.8%"),
    top: hp("0.13661202185794252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3536: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3537: {
    width: wp("8%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_592_3537: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3538: {
    width: wp("30.133333333333333%"),
    top: hp("4.23497267759565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_592_3538: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_592_3539: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.13661202185794252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_592_3540: {
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
  ImageBackground_592_3541: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_592_3545: {
    width: wp("34.4%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    justifyContent: "flex-start"
  },
  Text_592_3545: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_592_3376: {
    width: wp("21.333333333333336%"),
    height: hp("0.6830601092896175%"),
    top: hp("1.092896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  },
  View_213_268: {
    width: wp("100%"),
    height: hp("34.42622950819672%"),
    top: hp("51.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_168_219: {
    width: wp("100%"),
    height: hp("34.42622950819672%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_907_1770: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("25.136612021857925%"),
    minHeight: hp("25.136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.1038251366120235%")
  },
  View_209_279: {
    width: wp("17.599999999999998%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_107_10: {
    width: wp("17.599999999999998%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_107_10: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_191_286: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%")
  },
  ImageBackground_103_87: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_109_7: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%")
  },
  View_209_280: {
    width: wp("14.933333333333335%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.133333333333333%")
  },
  View_206_230: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_206_231: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 130, 225, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_209_260: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_209_261: {
    width: wp("7.466682942708333%"),
    height: hp("2.7047670604101297%"),
    top: hp("0.5601768285198929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_209_262: {
    width: wp("7.466682942708333%"),
    height: hp("2.7047670604101297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_209_263: {
    width: wp("7.466682942708333%"),
    height: hp("2.7047670604101297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_107_11: {
    width: wp("13.600000000000001%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    justifyContent: "flex-start"
  },
  Text_107_11: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_281: {
    width: wp("18.133333333333333%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.599999999999994%")
  },
  View_206_238: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666742%")
  },
  View_206_239: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 171, 37, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_213_266: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_549_3068: {
    width: wp("4.8%"),
    height: hp("1.6393441320117053%"),
    top: hp("0.9562841530054556%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_213_267: {
    width: wp("6.6665496826171875%"),
    height: hp("3.825111858180312%"),
    top: hp("0.000008338136098018367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.40005696614583286%")
  },
  View_107_12: {
    width: wp("18.133333333333333%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_107_12: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_282: {
    width: wp("14.933333333333335%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.26666666666667%")
  },
  View_206_242: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_206_243: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 90, 90, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_209_276: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%")
  },
  View_107_13: {
    width: wp("13.600000000000001%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    justifyContent: "flex-start"
  },
  Text_107_13: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_320: {
    width: wp("14.933333333333335%"),
    height: hp("11.475409836065573%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%")
  },
  View_209_321: {
    width: wp("12%"),
    top: hp("8.743169398907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999988%"),
    justifyContent: "flex-start"
  },
  Text_209_321: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_322: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_209_323: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 171, 37, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_209_394: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%")
  },
  View_209_326: {
    width: wp("18.933333333333334%"),
    height: hp("11.475409836065573%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.266666666666666%")
  },
  View_209_327: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%")
  },
  View_209_328: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 190, 60, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_212_230: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_212_231: {
    width: wp("4.651118469238281%"),
    height: hp("3.8251592813293787%"),
    top: hp("-0.000004169068063220038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4077636718750028%")
  },
  View_212_232: {
    width: wp("4.651118469238281%"),
    height: hp("3.8251592813293787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_212_233: {
    width: wp("4.651118469238281%"),
    height: hp("3.8251592813293787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_209_336: {
    width: wp("18.933333333333334%"),
    top: hp("8.743169398907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_209_336: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_337: {
    width: wp("16.8%"),
    height: hp("11.475409836065573%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.4%")
  },
  View_209_338: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06666666666667%")
  },
  View_209_339: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(45, 130, 225, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_213_230: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_213_231: {
    width: wp("7.466666666666668%"),
    height: hp("3.5063754013978716%"),
    top: hp("0.1738668139514914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_3069: {
    width: wp("6.3999989827473955%"),
    height: hp("2.341754840371387%"),
    top: hp("0.23793288267374635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333374023437472%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_213_232: {
    width: wp("7.466666666666668%"),
    height: hp("3.5063754013978716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_209_349: {
    width: wp("16.8%"),
    top: hp("8.743169398907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_209_349: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_350: {
    width: wp("15.2%"),
    height: hp("11.475409836065573%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_209_351: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%")
  },
  View_209_352: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(132, 219, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_549_3071: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%")
  },
  View_209_356: {
    width: wp("15.2%"),
    top: hp("8.743169398907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_209_356: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_78: {
    width: wp("29.599999999999998%"),
    top: hp("1.63934426229509%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    justifyContent: "flex-start"
  },
  Text_103_78: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_200_209: {
    width: wp("222.93333333333334%"),
    height: hp("31.420765027322407%"),
    top: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_187_291: {
    width: wp("100%"),
    height: hp("31.420765027322407%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_549_2990: {
    width: wp("218.66666666666666%"),
    height: hp("11.475409836065573%"),
    top: hp("17.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_2991: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_2992: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_549_2993: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_2996: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_549_2997: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_2998: {
    width: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_2999: {
    width: wp("1.777777862548828%"),
    height: hp("0.273224043715847%"),
    top: hp("0.4098360655737636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_549_3000: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_549_3000: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_3001: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_3002: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_549_3003: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_3006: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_549_3006: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_3007: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_3008: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.93333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_549_3009: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_3012: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_549_3012: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_3013: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.33333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_3014: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_549_3015: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_3018: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333333997%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_549_3018: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_3019: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_3020: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_549_3021: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_3024: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_549_3024: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_3025: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("109.60000000000001%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_3026: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_549_3027: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_3030: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333144%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_549_3030: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_3031: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128.79999999999998%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_3032: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.200000000000017%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_549_3033: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_3036: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_549_3036: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_3037: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("150.39999999999998%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_3038: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8000000000000114%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_549_3039: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_3042: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_549_3042: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_3043: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("175.2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_3044: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2666666666666515%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_549_3045: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_3048: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_549_3048: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_549_3049: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("198.9333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_549_3050: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_549_3054: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_549_3053: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_549_3053: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_183_265: {
    width: wp("25.6%"),
    top: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    justifyContent: "flex-start"
  },
  Text_183_265: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_199_343: {
    width: wp("100%"),
    height: hp("28.96174863387978%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_199_342: {
    width: wp("100%"),
    height: hp("23.224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_166_317: {
    width: wp("100%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_199_328: {
    width: wp("100%"),
    height: hp("23.224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_179_320: {
    width: wp("34.93333333333333%"),
    height: hp("16.530054644808743%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%")
  },
  View_179_321: {
    width: wp("34.93333333333333%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 0
  },
  ImageBackground_179_322: {
    width: wp("34.93333333333333%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_179_316: {
    width: wp("39.062068684895834%"),
    height: hp("19.94535519125683%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_179_317: {
    width: wp("39.062068684895834%"),
    height: hp("19.94535519125683%"),
    minHeight: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 0
  },
  ImageBackground_179_319: {
    width: wp("39.062068684895834%"),
    height: hp("19.94535519125683%"),
    minHeight: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_177_1420: {
    width: wp("32%"),
    height: hp("8.19672131147541%"),
    top: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%")
  },
  View_166_318: {
    width: wp("32%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453551%"),
    justifyContent: "flex-start"
  },
  Text_166_318: {
    color: "rgba(254, 188, 17, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_166_319: {
    width: wp("18.133333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_166_319: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_199_341: {
    width: wp("6.4%"),
    height: hp("3.471552739377882%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.13333333333333%")
  },
  View_178_255: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.19286108798668167%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_178_256: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.27322404371584597%")
  },
  View_178_257: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.2045966705989315%"),
    minHeight: hp("2.2045966705989315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_178_258: {
    width: wp("4.8%"),
    height: hp("2.2045966705989315%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_178_259: {
    width: wp("4.8%"),
    height: hp("2.2045966705989315%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_178_262: {
    width: wp("1.6527329762776692%"),
    height: hp("0.33589604773808046%"),
    top: hp("2.396346962517077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5613606770833428%")
  },
  ImageBackground_199_320: {
    width: wp("2.666666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666828%"),
    top: hp("0%")
  },
  View_199_344: {
    width: wp("91.46666666666667%"),
    height: hp("10.10928961748634%"),
    top: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_168_220: {
    width: wp("91.46666666666667%"),
    height: hp("10.10928961748634%"),
    minHeight: hp("10.10928961748634%"),
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
  TouchableOpacity_183_259: {
    width: wp("12%"),
    height: hp("6.830601092896176%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%")
  },
  View_182_344: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999986%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_182_338: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786895668571763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%"),
    top: hp("0.27322404371584597%")
  },
  View_182_404: {
    width: wp("12%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737704%"),
    justifyContent: "flex-start"
  },
  Text_182_404: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_183_260: {
    width: wp("11.200000000000001%"),
    height: hp("6.830601092896176%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%")
  },
  View_182_323: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_324: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.47814207650273133%")
  },
  ImageBackground_182_325: {
    width: wp("2.555198160807292%"),
    height: hp("1.0297583100574266%"),
    top: hp("0.8998182953381146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8448079427083357%")
  },
  ImageBackground_182_326: {
    width: wp("0.5618947347005209%"),
    height: hp("0.22444622438462053%"),
    top: hp("1.2933449667008183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.724739583333331%")
  },
  View_182_327: {
    width: wp("6.399962361653645%"),
    minWidth: wp("6.399962361653645%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_182_328: {
    width: wp("6.399962361653645%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_182_329: {
    width: wp("6.399962361653645%"),
    height: hp("2.8688524590163933%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_182_332: {
    width: wp("2.139357248942057%"),
    height: hp("0.22444609410124397%"),
    top: hp("0.6790411276895476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4064656575520829%")
  },
  View_182_405: {
    width: wp("11.200000000000001%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737704%"),
    justifyContent: "flex-start"
  },
  Text_182_405: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_183_261: {
    width: wp("14.933333333333335%"),
    height: hp("6.830601092896176%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.86666666666667%")
  },
  View_182_383: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_182_384: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.5464480874316955%")
  },
  ImageBackground_182_385: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_550_2909: {
    width: wp("2.9274442036946615%"),
    height: hp("0.5738032971574961%"),
    top: hp("0.5601059543630456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333414%")
  },
  View_182_406: {
    width: wp("14.933333333333335%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737704%"),
    justifyContent: "flex-start"
  },
  Text_182_406: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_183_262: {
    width: wp("11.733333333333333%"),
    height: hp("6.830601092896176%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333334%")
  },
  View_182_391: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_182_371: {
    flexGrow: 1,
    width: wp("5.6000000000000005%"),
    height: hp("2.8688550646839244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333371%"),
    top: hp("0.47814207650273133%")
  },
  View_182_407: {
    width: wp("11.733333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737704%"),
    justifyContent: "flex-start"
  },
  Text_182_407: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_165_267: {
    width: wp("91.46666666666667%"),
    height: hp("2.459016393442623%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_165_268: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_165_269: {
    width: wp("9.34998779296875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_165_269: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_165_270: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.43169865842725397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%")
  },
  View_165_271: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_165_272: {
    width: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_165_275: {
    width: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5040986941811818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140421549479171%")
  },
  View_165_276: {
    width: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    top: hp("0.26184248793971987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339436848958456%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_165_277: {
    width: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    top: hp("0.4917999434340845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.57932942708334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_165_278: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_165_279: {
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
  View_165_280: {
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
  View_165_281: {
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
  View_165_282: {
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
  View_165_283: {
    width: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    top: hp("0.4644842095713795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.47947591145834%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_165_284: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_200_229: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_194_250: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_319_366: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I319_366_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27323863545403526%")
  },
  View_I319_366_319_328: {
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
  ImageBackground_I319_366_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I319_366_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I319_366_319_333: {
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
  ImageBackground_I319_366_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I319_366_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_319_356: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I319_356_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333821614583272%"),
    top: hp("0.2732511426581823%")
  },
  View_I319_356_319_340: {
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
  ImageBackground_I319_356_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I319_356_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I319_356_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126444331935204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.781433105468757%")
  },
  ImageBackground_I319_356_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709006721204872%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0662190755208414%")
  },
  ImageBackground_I319_356_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878405628308599%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7328857421875057%")
  },
  TouchableOpacity_319_348: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I319_348_319_319: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I319_348_319_320: {
    width: wp("0.37209300994873046%"),
    height: hp("1.0623966409860413%"),
    top: hp("1.0423816618371973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3323567708333357%")
  },
  ImageBackground_I319_348_319_321: {
    width: wp("0.37209300994873046%"),
    height: hp("1.4796035537302819%"),
    top: hp("0.6250475273757417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4900716145833357%")
  },
  ImageBackground_I319_348_319_322: {
    width: wp("0.37209300994873046%"),
    height: hp("0.601601209796843%"),
    top: hp("1.5030511741429677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6287434895833357%")
  },
  ImageBackground_I319_348_319_323: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_165_266: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I165_266_57_890: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  View_165_182: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_165_183: {
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
