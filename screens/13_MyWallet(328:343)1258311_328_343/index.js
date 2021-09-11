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
      <View style={styles.View_567_3801}>
        <View style={styles.View_567_3802} />
        <View style={styles.View_568_2773}>
          <View style={styles.View_568_2774}>
            <View style={styles.View_568_2775} />
            <View style={styles.View_568_2776} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/701c/a7b9/af221bd9fe65befeb59c5f8743a449ab"
              }}
              style={styles.ImageBackground_568_2777}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/701c/a7b9/af221bd9fe65befeb59c5f8743a449ab"
              }}
              style={styles.ImageBackground_568_2778}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef6/aa4a/3710295413602c1b683008ba7269f9d2"
              }}
              style={styles.ImageBackground_568_2779}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef6/aa4a/3710295413602c1b683008ba7269f9d2"
              }}
              style={styles.ImageBackground_568_2780}
            />
          </View>
          <View style={styles.View_568_2781}>
            <View style={styles.View_568_2782}>
              <Text style={styles.Text_568_2782}>CBB BANK</Text>
            </View>
            <View style={styles.View_568_2783}>
              <Text style={styles.Text_568_2783}>**** **** ****</Text>
            </View>
            <View style={styles.View_568_2784}>
              <Text style={styles.Text_568_2784}>4200</Text>
            </View>
          </View>
          <View style={styles.View_568_2785}>
            <View style={styles.View_568_2786}>
              <Text style={styles.Text_568_2786}>Card Name</Text>
            </View>
            <View style={styles.View_568_2787}>
              <Text style={styles.Text_568_2787}>Melvin Guerrero</Text>
            </View>
          </View>
          <View style={styles.View_568_2788}>
            <View style={styles.View_568_2789}>
              <Text style={styles.Text_568_2789}>Exp</Text>
            </View>
            <View style={styles.View_568_2790}>
              <Text style={styles.Text_568_2790}>01/25</Text>
            </View>
          </View>
          <View style={styles.View_568_2791}>
            <View style={styles.View_568_2792} />
            <View style={styles.View_568_2793} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e0/7e58/92a7e6f2d64ab8f6537e8ccdd94b9f4b"
              }}
              style={styles.ImageBackground_568_2794}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e0/7e58/92a7e6f2d64ab8f6537e8ccdd94b9f4b"
              }}
              style={styles.ImageBackground_568_2795}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e0/7e58/92a7e6f2d64ab8f6537e8ccdd94b9f4b"
              }}
              style={styles.ImageBackground_568_2796}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e0/7e58/92a7e6f2d64ab8f6537e8ccdd94b9f4b"
              }}
              style={styles.ImageBackground_568_2797}
            />
          </View>
        </View>
        <View style={styles.View_567_3755}>
          <View style={styles.View_567_3756}>
            <View style={styles.View_567_3757} />
            <View style={styles.View_567_3758} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/701c/a7b9/af221bd9fe65befeb59c5f8743a449ab"
              }}
              style={styles.ImageBackground_567_3759}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/701c/a7b9/af221bd9fe65befeb59c5f8743a449ab"
              }}
              style={styles.ImageBackground_567_3760}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b38c/d82d/80d9e0222a478ba4fc76c56849b107d9"
              }}
              style={styles.ImageBackground_567_3761}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef6/aa4a/3710295413602c1b683008ba7269f9d2"
              }}
              style={styles.ImageBackground_567_3762}
            />
          </View>
          <View style={styles.View_567_3763}>
            <View style={styles.View_567_3764}>
              <Text style={styles.Text_567_3764}>CBB BANK</Text>
            </View>
            <View style={styles.View_567_3765}>
              <Text style={styles.Text_567_3765}>**** **** ****</Text>
            </View>
            <View style={styles.View_567_3766}>
              <Text style={styles.Text_567_3766}>4200</Text>
            </View>
          </View>
          <View style={styles.View_567_3767}>
            <View style={styles.View_567_3768}>
              <Text style={styles.Text_567_3768}>Card Name</Text>
            </View>
            <View style={styles.View_567_3769}>
              <Text style={styles.Text_567_3769}>Melvin Guerrero</Text>
            </View>
          </View>
          <View style={styles.View_567_3770}>
            <View style={styles.View_567_3771}>
              <Text style={styles.Text_567_3771}>Exp</Text>
            </View>
            <View style={styles.View_567_3772}>
              <Text style={styles.Text_567_3772}>01/25</Text>
            </View>
          </View>
          <View style={styles.View_567_3773}>
            <View style={styles.View_567_3774} />
            <View style={styles.View_567_3775} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1348/fb72/02053fe7ecb8b35f40dd4e74c24c8706"
              }}
              style={styles.ImageBackground_567_3776}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1348/fb72/02053fe7ecb8b35f40dd4e74c24c8706"
              }}
              style={styles.ImageBackground_567_3777}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1348/fb72/02053fe7ecb8b35f40dd4e74c24c8706"
              }}
              style={styles.ImageBackground_567_3778}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1348/fb72/02053fe7ecb8b35f40dd4e74c24c8706"
              }}
              style={styles.ImageBackground_567_3779}
            />
          </View>
          <View style={styles.View_567_3800}>
            <View style={styles.View_341_624} />
            <View style={styles.View_567_3783}>
              <View style={styles.View_567_3784}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52f7/dca9/61631bd0b6239642183cf71830711662"
                  }}
                  style={styles.ImageBackground_567_3785}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_341_571}>
          <View style={styles.View_341_572}>
            <View style={styles.View_341_573} />
            <View style={styles.View_341_574} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/701c/a7b9/af221bd9fe65befeb59c5f8743a449ab"
              }}
              style={styles.ImageBackground_341_575}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/701c/a7b9/af221bd9fe65befeb59c5f8743a449ab"
              }}
              style={styles.ImageBackground_341_576}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef6/aa4a/3710295413602c1b683008ba7269f9d2"
              }}
              style={styles.ImageBackground_341_577}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef6/aa4a/3710295413602c1b683008ba7269f9d2"
              }}
              style={styles.ImageBackground_341_578}
            />
          </View>
          <View style={styles.View_341_620}>
            <View style={styles.View_341_579}>
              <Text style={styles.Text_341_579}>CBB BANK</Text>
            </View>
            <View style={styles.View_341_580}>
              <Text style={styles.Text_341_580}>**** **** ****</Text>
            </View>
            <View style={styles.View_341_581}>
              <Text style={styles.Text_341_581}>4200</Text>
            </View>
          </View>
          <View style={styles.View_341_582}>
            <View style={styles.View_341_583}>
              <Text style={styles.Text_341_583}>Card Name</Text>
            </View>
            <View style={styles.View_341_584}>
              <Text style={styles.Text_341_584}>Melvin Guerrero</Text>
            </View>
          </View>
          <View style={styles.View_341_585}>
            <View style={styles.View_341_586}>
              <Text style={styles.Text_341_586}>Exp</Text>
            </View>
            <View style={styles.View_341_587}>
              <Text style={styles.Text_341_587}>01/25</Text>
            </View>
          </View>
          <View style={styles.View_341_588}>
            <View style={styles.View_341_589} />
            <View style={styles.View_341_590} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e0/7e58/92a7e6f2d64ab8f6537e8ccdd94b9f4b"
              }}
              style={styles.ImageBackground_341_591}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e0/7e58/92a7e6f2d64ab8f6537e8ccdd94b9f4b"
              }}
              style={styles.ImageBackground_341_592}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e0/7e58/92a7e6f2d64ab8f6537e8ccdd94b9f4b"
              }}
              style={styles.ImageBackground_341_593}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86e0/7e58/92a7e6f2d64ab8f6537e8ccdd94b9f4b"
              }}
              style={styles.ImageBackground_341_594}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3780}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("383_875"))
          }
        >
          <View style={styles.View_567_3781} />
          <View style={styles.View_341_507}>
            <View style={styles.View_341_508}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fd5/b55d/bc01ec89f1f121716112896e1cc1a802"
                }}
                style={styles.ImageBackground_341_509}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a35/1bac/a7667e22e2b2858932ba4e520aaea7fe"
                }}
                style={styles.ImageBackground_341_510}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afca/1151/09d4606d865563db97d44baa2c1303da"
                }}
                style={styles.ImageBackground_341_511}
              />
            </View>
          </View>
          <View style={styles.View_567_3782}>
            <Text style={styles.Text_567_3782}>Add New Card</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_335_869}>
        <View style={styles.View_335_870}>
          <View style={styles.View_335_871} />
          <View style={styles.View_335_875}>
            <View style={styles.View_335_876}>
              <View style={styles.View_335_877} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3eab/c2cd/73d7465c7590a729f1c2811b7d421944"
                }}
                style={styles.ImageBackground_335_878}
              />
            </View>
            <View style={styles.View_335_879}>
              <View style={styles.View_335_880} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bb3/0d39/592dace95edb8d4c353f9cff613c9dbe"
                }}
                style={styles.ImageBackground_335_881}
              />
            </View>
          </View>
          <View style={styles.View_335_882}>
            <View style={styles.View_335_883}>
              <View style={styles.View_335_884}>
                <Text style={styles.Text_335_884}>9:41</Text>
              </View>
            </View>
            <View style={styles.View_335_885}>
              <View style={styles.View_335_886}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
                  }}
                  style={styles.ImageBackground_335_887}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
                  }}
                  style={styles.ImageBackground_335_890}
                />
              </View>
              <View style={styles.View_335_891} />
            </View>
            <View style={styles.View_335_892}>
              <View style={styles.View_335_893}>
                <View style={styles.View_335_894} />
                <View style={styles.View_335_895} />
                <View style={styles.View_335_896} />
                <View style={styles.View_335_897} />
              </View>
            </View>
            <View style={styles.View_335_898}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e76/21a5/ca49045f4b39546b3cfd31fde18b9385"
                }}
                style={styles.ImageBackground_335_899}
              />
            </View>
          </View>
          <View style={styles.View_335_992}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22a8/bf14/2c3ef69a8c049ca15ff938662a783f2c"
              }}
              style={styles.ImageBackground_335_991}
            />
            <View style={styles.View_335_872}>
              <View style={styles.View_335_873}>
                <Text style={styles.Text_335_873}>$12,769.00</Text>
              </View>
              <View style={styles.View_335_990}>
                <Text style={styles.Text_335_990}>Balance</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_569_2775}>
            <View style={styles.View_595_4862} />
            <View style={styles.View_595_5066} />
            <View style={styles.View_335_989}>
              <Text style={styles.Text_335_989}>My Wallet</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_569_2772}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("165_161"))
              }
            >
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c73/4c30/e1fb6f93c8737a4ac9d0ffacc559c326"
                }}
                style={styles.ImageBackground_I569_2772_551_4768}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.View_335_906}>
          <View style={styles.View_335_907} />
          <TouchableOpacity
            style={styles.TouchableOpacity_335_908}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("345_438"))
            }
          >
            <View style={styles.View_335_909}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fc5/6fe4/35320ec807d0d350ac7b8acb252519b5"
                }}
                style={styles.ImageBackground_I335_909_182_338}
              />
            </View>
            <View style={styles.View_335_910}>
              <Text style={styles.Text_335_910}>Top up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_335_911}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("371_558"))
            }
          >
            <View style={styles.View_342_439}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d54/03c3/0414b8bf250bda6d76aa3fc3aa9c0936"
                }}
                style={styles.ImageBackground_577_2825}
              />
            </View>
            <View style={styles.View_335_913}>
              <Text style={styles.Text_335_913}>Transfer</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_335_914}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("453_2421"))
            }
          >
            <View style={styles.View_335_916}>
              <Text style={styles.Text_335_916}>Withdraw</Text>
            </View>
            <View style={styles.View_339_479}>
              <View style={styles.View_339_477}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e01/6dc6/a6ab8e61ccfda5f0f3e39b0b52e10cb5"
                  }}
                  style={styles.ImageBackground_339_474}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ace/bf75/e1b9a269b1f37928a4b3b1154ce202b3"
                  }}
                  style={styles.ImageBackground_339_475}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a2/cef1/57d732b5f54ae91c08aa6947dce91173"
                  }}
                  style={styles.ImageBackground_339_476}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2558/6e0f/cf945be112b2a7479b5cc0ef5c08a035"
                  }}
                  style={styles.ImageBackground_339_567}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_335_917}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("557_2635"))
            }
          >
            <View style={styles.View_335_919}>
              <Text style={styles.Text_335_919}>History</Text>
            </View>
            <View style={styles.View_339_583}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/180d/75db/910f6a7b1968a9f4274ae59035d8d9d6"
                }}
                style={styles.ImageBackground_339_576}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_598_3925}>
        <View style={styles.View_598_3926} />
        <TouchableOpacity
          style={styles.TouchableOpacity_598_3927}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I598_3927_319_327}>
            <View style={styles.View_I598_3927_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I598_3927_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I598_3927_319_330}
              />
            </View>
            <View style={styles.View_I598_3927_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I598_3927_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I598_3927_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_598_3928}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I598_3928_319_339}>
            <View style={styles.View_I598_3928_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I598_3928_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I598_3928_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I598_3928_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I598_3928_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I598_3928_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_598_3929}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <View style={styles.View_I598_3929_319_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
              }}
              style={styles.ImageBackground_I598_3929_319_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cb/7134/60991c3b1f7388abbaaac49119c40fb5"
              }}
              style={styles.ImageBackground_I598_3929_319_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
              }}
              style={styles.ImageBackground_I598_3929_319_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f6/d981/cbf2cafa04251ce782f812db1d542238"
              }}
              style={styles.ImageBackground_I598_3929_319_323}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_598_3931}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1851/4691/8dd288393e2e2759e2120eaa081c11be"
            }}
            style={styles.ImageBackground_I598_3931_57_890}
          />
        </View>
        <View style={styles.View_598_3932}>
          <View style={styles.View_598_3933} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_567_3801: {
    width: wp("111.73333333333333%"),
    minWidth: wp("111.73333333333333%"),
    height: hp("105.19125683060109%"),
    minHeight: hp("105.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11.733333333333333%"),
    top: hp("19.262295081967213%")
  },
  View_567_3802: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("91.66666666666666%"),
    minHeight: hp("91.66666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_568_2773: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("79.09836065573771%")
  },
  View_568_2774: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_568_2775: {
    width: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 188, 17, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_568_2776: {
    width: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_568_2777: {
    width: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_568_2778: {
    width: wp("34.56837565104166%"),
    height: hp("24.14733386430584%"),
    top: hp("9.349975169030685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.960286458333332%")
  },
  ImageBackground_568_2779: {
    width: wp("49.86545003255208%"),
    height: hp("37.41707723648822%"),
    top: hp("-5.161406303364075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.629427083333333%")
  },
  ImageBackground_568_2780: {
    width: wp("49.86545003255208%"),
    height: hp("37.41707723648822%"),
    top: hp("-15.893254514600414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.62428385416666%")
  },
  View_568_2781: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("2.185792349726782%")
  },
  View_568_2782: {
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_568_2782: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_568_2783: {
    width: wp("26.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_568_2783: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_568_2784: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_568_2784: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_568_2785: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("18.989071038251353%")
  },
  View_568_2786: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_568_2786: {
    color: "rgba(238, 240, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_568_2787: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_568_2787: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_568_2788: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666666%"),
    top: hp("19.12568306010928%")
  },
  View_568_2789: {
    width: wp("6.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_568_2789: {
    color: "rgba(238, 240, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_568_2790: {
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_568_2790: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_568_2791: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666666%"),
    top: hp("19.67213114754098%")
  },
  View_568_2792: {
    width: wp("10.880602010091147%"),
    height: hp("4.2349726775956285%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 188, 17, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_568_2793: {
    width: wp("2.3884249369303387%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.546448608565214%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.24615885416668%"),
    borderColor: "rgba(102, 90, 240, 1)",
    borderWidth: 1
  },
  ImageBackground_568_2794: {
    width: wp("4.298819478352865%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.2960293253914301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.634505208333337%")
  },
  ImageBackground_568_2795: {
    width: wp("4.298819478352865%"),
    height: hp("0.1366120218579235%"),
    top: hp("2.662155276439222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.634505208333337%")
  },
  ImageBackground_568_2796: {
    width: wp("4.298819478352865%"),
    height: hp("0%"),
    top: hp("1.3643342940533785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_568_2797: {
    width: wp("4.298819478352865%"),
    height: hp("0.1366120218579235%"),
    top: hp("2.662155276439222%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_567_3755: {
    width: wp("107.46666666666667%"),
    minWidth: wp("107.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50.81967213114754%")
  },
  View_567_3756: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_567_3757: {
    width: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(61, 171, 37, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_567_3758: {
    width: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_567_3759: {
    width: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_567_3760: {
    width: wp("34.56837565104166%"),
    height: hp("24.14733386430584%"),
    top: hp("9.349977253564717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.960286458333337%")
  },
  ImageBackground_567_3761: {
    width: wp("49.86545003255208%"),
    height: hp("37.41707723648822%"),
    top: hp("-5.1614021342960115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.629427083333333%")
  },
  ImageBackground_567_3762: {
    width: wp("49.86545003255208%"),
    height: hp("37.41707723648822%"),
    top: hp("-15.893254514600407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.62428385416666%")
  },
  View_567_3763: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("2.185792349726782%")
  },
  View_567_3764: {
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_567_3764: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_567_3765: {
    width: wp("26.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_567_3765: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_567_3766: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.200000000000003%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_567_3766: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_567_3767: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("18.989071038251367%")
  },
  View_567_3768: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_567_3768: {
    color: "rgba(238, 240, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_567_3769: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%"),
    justifyContent: "flex-start"
  },
  Text_567_3769: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_567_3770: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666666%"),
    top: hp("19.125683060109296%")
  },
  View_567_3771: {
    width: wp("6.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_567_3771: {
    color: "rgba(238, 240, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_567_3772: {
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%"),
    justifyContent: "flex-start"
  },
  Text_567_3772: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_567_3773: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666667%"),
    top: hp("19.672131147540995%")
  },
  View_567_3774: {
    width: wp("10.880602010091147%"),
    height: hp("4.2349726775956285%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 188, 17, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_567_3775: {
    width: wp("2.3884249369303387%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.246158854166659%"),
    borderColor: "rgba(61, 171, 37, 1)",
    borderWidth: 1
  },
  ImageBackground_567_3776: {
    width: wp("4.298819478352865%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.2960298465249167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.634505208333323%")
  },
  ImageBackground_567_3777: {
    width: wp("4.298819478352865%"),
    height: hp("0.1366120218579235%"),
    top: hp("2.662154234172206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.634505208333323%")
  },
  ImageBackground_567_3778: {
    width: wp("4.298819478352865%"),
    height: hp("0%"),
    top: hp("1.3643337729198635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_567_3779: {
    width: wp("4.298819478352865%"),
    height: hp("0.1366120218579235%"),
    top: hp("2.662154234172206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_567_3800: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%")
  },
  View_341_624: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 90, 90, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_567_3783: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("11.475409836065566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.26666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_567_3784: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000114%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_567_3785: {
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_341_571: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("22.54098360655738%")
  },
  View_341_572: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_341_573: {
    width: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_341_574: {
    width: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_341_575: {
    width: wp("91.46666666666667%"),
    height: hp("26.09289617486339%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_341_576: {
    width: wp("34.56837565104166%"),
    height: hp("24.14733386430584%"),
    top: hp("9.349977253564724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.960286458333332%")
  },
  ImageBackground_341_577: {
    width: wp("49.86545003255208%"),
    height: hp("37.41707723648822%"),
    top: hp("-5.161406303364075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.629427083333333%")
  },
  ImageBackground_341_578: {
    width: wp("49.86545003255208%"),
    height: hp("37.41707723648822%"),
    top: hp("-15.893254514600414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.62428385416666%")
  },
  View_341_620: {
    width: wp("36.266666666666666%"),
    minWidth: wp("36.266666666666666%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("2.185792349726775%")
  },
  View_341_579: {
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_341_579: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_580: {
    width: wp("26.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_341_580: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_581: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.2%"),
    top: hp("3.0054644808743163%"),
    justifyContent: "flex-start"
  },
  Text_341_581: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_341_582: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("18.98907103825136%")
  },
  View_341_583: {
    width: wp("18.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_341_583: {
    color: "rgba(238, 240, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_341_584: {
    width: wp("28.26666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_341_584: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_585: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666666%"),
    top: hp("19.12568306010929%")
  },
  View_341_586: {
    width: wp("6.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_341_586: {
    color: "rgba(238, 240, 243, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "capitalize"
  },
  View_341_587: {
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_341_587: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_341_588: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666666%"),
    top: hp("19.67213114754098%")
  },
  View_341_589: {
    width: wp("10.880602010091147%"),
    height: hp("4.2349726775956285%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 188, 17, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_341_590: {
    width: wp("2.3884249369303387%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.24615885416668%"),
    borderColor: "rgba(102, 90, 240, 1)",
    borderWidth: 1
  },
  ImageBackground_341_591: {
    width: wp("4.298819478352865%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.296029846524931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.634505208333337%")
  },
  ImageBackground_341_592: {
    width: wp("4.298819478352865%"),
    height: hp("0.1366120218579235%"),
    top: hp("2.6621542341722275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.634505208333337%")
  },
  ImageBackground_341_593: {
    width: wp("4.298819478352865%"),
    height: hp("0%"),
    top: hp("1.364335857453895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_341_594: {
    width: wp("4.298819478352865%"),
    height: hp("0.1366120218579235%"),
    top: hp("2.6621542341722275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_567_3780: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("12.43169398907104%")
  },
  View_567_3781: {
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
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
  View_341_507: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_341_508: {
    flexGrow: 1,
    width: wp("5.333334350585937%"),
    height: hp("2.732240176591717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_341_509: {
    width: wp("0.3720934549967448%"),
    height: hp("1.1217435201009116%"),
    top: hp("0.8040798166410497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.480598958333333%")
  },
  ImageBackground_341_510: {
    width: wp("2.191131846110026%"),
    height: hp("0.1906212561768912%"),
    top: hp("1.2695646025443992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5710937499999993%")
  },
  ImageBackground_341_511: {
    width: wp("5.333334350585937%"),
    height: hp("2.732240176591717%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_567_3782: {
    width: wp("28.53333333333333%"),
    minWidth: wp("28.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    top: hp("2.322404371584696%"),
    justifyContent: "flex-start"
  },
  Text_567_3782: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_335_869: {
    width: wp("100%"),
    height: hp("28.96174863387978%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_335_870: {
    width: wp("100%"),
    height: hp("23.224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_335_871: {
    width: wp("100%"),
    height: hp("23.224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_335_875: {
    width: wp("100%"),
    height: hp("23.224043715846996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_335_876: {
    width: wp("34.93333333333333%"),
    height: hp("16.530054644808743%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.06666666666666%")
  },
  View_335_877: {
    width: wp("34.93333333333333%"),
    height: hp("16.530054644808743%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 0
  },
  ImageBackground_335_878: {
    width: wp("34.93333333333333%"),
    height: hp("16.530054644808743%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_335_879: {
    width: wp("39.062068684895834%"),
    height: hp("19.94535519125683%"),
    top: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_335_880: {
    width: wp("39.062068684895834%"),
    height: hp("19.94535519125683%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 0
  },
  ImageBackground_335_881: {
    width: wp("39.062068684895834%"),
    height: hp("19.94535519125683%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_335_882: {
    width: wp("91.46666666666667%"),
    height: hp("2.459016393442623%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_335_883: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_335_884: {
    width: wp("9.34998779296875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_335_884: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_335_885: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.43169865842725397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%")
  },
  View_335_886: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_335_887: {
    width: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_335_890: {
    width: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5040986941811818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%")
  },
  View_335_891: {
    width: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    top: hp("0.26184248793971987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339192708333371%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_335_892: {
    width: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    top: hp("0.4917999434340845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.579296875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_335_893: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_335_894: {
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
  View_335_895: {
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
  View_335_896: {
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
  View_335_897: {
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
  View_335_898: {
    width: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    top: hp("0.4644842095713795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.4794921875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_335_899: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_335_992: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("13.934426229508196%")
  },
  ImageBackground_335_991: {
    width: wp("1.0666666666666667%"),
    minWidth: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("1.7759562841530077%")
  },
  View_335_872: {
    width: wp("47.46666666666667%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_335_873: {
    width: wp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.46666666666666%"),
    justifyContent: "flex-start"
  },
  Text_335_873: {
    color: "rgba(254, 188, 17, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_335_990: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_335_990: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_569_2775: {
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
  View_595_4862: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_595_5066: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0.8196721311475406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_335_989: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("3.005464480874317%"),
    justifyContent: "flex-start"
  },
  Text_335_989: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_569_2772: {
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
  ImageBackground_I569_2772_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_335_906: {
    width: wp("91.46666666666667%"),
    height: hp("10.10928961748634%"),
    top: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_335_907: {
    width: wp("91.46666666666667%"),
    height: hp("10.10928961748634%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  TouchableOpacity_335_908: {
    width: wp("12%"),
    height: hp("6.830601092896176%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%")
  },
  View_335_909: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I335_909_182_338: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.2786895668571763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.27322404371584597%")
  },
  View_335_910: {
    width: wp("12%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_335_910: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_335_911: {
    width: wp("14.133333333333335%"),
    height: hp("6.830601092896176%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.600000000000005%")
  },
  View_342_439: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.466666666666658%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_577_2825: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.5464480874316955%")
  },
  View_335_913: {
    width: wp("14.133333333333335%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_335_913: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_335_914: {
    width: wp("16.8%"),
    height: hp("6.830601092896176%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%")
  },
  View_335_916: {
    width: wp("16.8%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_335_916: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_339_479: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_339_477: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.27322404371584597%")
  },
  ImageBackground_339_474: {
    width: wp("2.38330078125%"),
    height: hp("1.2209532690829918%"),
    top: hp("0.9259833664190609%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.008333333333333%")
  },
  ImageBackground_339_475: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_339_476: {
    width: wp("2.38330078125%"),
    height: hp("0.19211065573770492%"),
    top: hp("2.572156562179817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.008333333333333%")
  },
  ImageBackground_339_567: {
    width: wp("2.3819132486979164%"),
    minWidth: wp("2.3819132486979164%"),
    height: hp("1.2202424429804901%"),
    minHeight: hp("1.2202424429804901%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0869791666666586%"),
    top: hp("0.926583712218239%")
  },
  TouchableOpacity_335_917: {
    width: wp("12.266666666666666%"),
    height: hp("6.830601092896176%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%")
  },
  View_335_919: {
    width: wp("12.266666666666666%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_335_919: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_339_583: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3999999999999915%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_339_576: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.27322404371584597%")
  },
  View_598_3925: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_598_3926: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_598_3927: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I598_3927_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27323863545403526%")
  },
  View_I598_3927_319_328: {
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
  ImageBackground_I598_3927_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I598_3927_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I598_3927_319_333: {
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
  ImageBackground_I598_3927_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I598_3927_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_598_3928: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I598_3928_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333984374999972%"),
    top: hp("0.2732511426581823%")
  },
  View_I598_3928_319_340: {
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
  ImageBackground_I598_3928_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I598_3928_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I598_3928_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126444331935204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7814453124999972%")
  },
  ImageBackground_I598_3928_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709006721204872%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.066210937500003%")
  },
  ImageBackground_I598_3928_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878405628308599%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7328776041666742%")
  },
  TouchableOpacity_598_3929: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I598_3929_319_319: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I598_3929_319_320: {
    width: wp("0.37209300994873046%"),
    height: hp("1.0623966409860413%"),
    top: hp("1.0423816618371973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3323567708333357%")
  },
  ImageBackground_I598_3929_319_321: {
    width: wp("0.37209300994873046%"),
    height: hp("1.4796035537302819%"),
    top: hp("0.6250475273757417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4901041666666686%")
  },
  ImageBackground_I598_3929_319_322: {
    width: wp("0.37209300994873046%"),
    height: hp("0.601601209796843%"),
    top: hp("1.5030511741429677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6287760416666686%")
  },
  ImageBackground_I598_3929_319_323: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_598_3931: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I598_3931_57_890: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  View_598_3932: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_598_3933: {
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
