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
      <View style={styles.View_907_1503}>
        <View style={styles.View_907_1504} />
        <View style={styles.View_907_1505}>
          <View style={styles.View_907_1506}>
            <View style={styles.View_907_1507}>
              <View style={styles.View_907_1508}>
                <Text style={styles.Text_907_1508}>505-287-8051</Text>
              </View>
              <View style={styles.View_907_1509}>
                <Text style={styles.Text_907_1509}>Jackson Soto</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
              }}
              style={styles.ImageBackground_907_1510}
            />
            <View style={styles.View_907_1513} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_907_1514}
            />
          </View>
          <View style={styles.View_907_1515}>
            <View style={styles.View_907_1516}>
              <View style={styles.View_907_1517}>
                <Text style={styles.Text_907_1517}>505-287-8051</Text>
              </View>
              <View style={styles.View_907_1518}>
                <Text style={styles.Text_907_1518}>Alfred Neal</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
              }}
              style={styles.ImageBackground_907_1519}
            />
            <View style={styles.View_907_1522} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_907_1523}
            />
          </View>
          <View style={styles.View_907_1524}>
            <View style={styles.View_907_1525}>
              <View style={styles.View_907_1526}>
                <Text style={styles.Text_907_1526}>505-287-8051</Text>
              </View>
              <View style={styles.View_907_1527}>
                <Text style={styles.Text_907_1527}>Georgie Brown</Text>
              </View>
            </View>
            <View style={styles.View_907_1528}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                }}
                style={styles.ImageBackground_907_1529}
              />
            </View>
            <View style={styles.View_907_1532} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_907_1533}
            />
          </View>
          <View style={styles.View_907_1534}>
            <View style={styles.View_907_1535}>
              <View style={styles.View_907_1536}>
                <Text style={styles.Text_907_1536}>505-287-8051</Text>
              </View>
              <View style={styles.View_907_1537}>
                <Text style={styles.Text_907_1537}>Gene Joseph</Text>
              </View>
            </View>
            <View style={styles.View_907_1538}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                }}
                style={styles.ImageBackground_907_1539}
              />
            </View>
            <View style={styles.View_907_1542} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_907_1543}
            />
          </View>
          <View style={styles.View_907_1544}>
            <View style={styles.View_907_1545}>
              <View style={styles.View_907_1546}>
                <Text style={styles.Text_907_1546}>505-287-8051</Text>
              </View>
              <View style={styles.View_907_1547}>
                <Text style={styles.Text_907_1547}>Drake Sowle</Text>
              </View>
            </View>
            <View style={styles.View_907_1548}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                }}
                style={styles.ImageBackground_907_1549}
              />
            </View>
            <View style={styles.View_907_1552} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_907_1553}
            />
          </View>
          <View style={styles.View_907_1554}>
            <View style={styles.View_907_1555}>
              <View style={styles.View_907_1556}>
                <Text style={styles.Text_907_1556}>505-287-8051</Text>
              </View>
              <View style={styles.View_907_1557}>
                <Text style={styles.Text_907_1557}>Willette Hampton</Text>
              </View>
            </View>
            <View style={styles.View_907_1558}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                }}
                style={styles.ImageBackground_907_1559}
              />
            </View>
            <View style={styles.View_907_1562} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_907_1563}
            />
          </View>
          <View style={styles.View_907_1564}>
            <View style={styles.View_907_1565}>
              <View style={styles.View_907_1566}>
                <Text style={styles.Text_907_1566}>505-287-8051</Text>
              </View>
              <View style={styles.View_907_1567}>
                <Text style={styles.Text_907_1567}>Carl Currey</Text>
              </View>
            </View>
            <View style={styles.View_907_1568}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                }}
                style={styles.ImageBackground_907_1569}
              />
            </View>
            <View style={styles.View_907_1572} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_907_1573}
            />
          </View>
          <View style={styles.View_907_1574}>
            <View style={styles.View_907_1575}>
              <View style={styles.View_907_1576}>
                <Text style={styles.Text_907_1576}>505-287-8051</Text>
              </View>
              <View style={styles.View_907_1577}>
                <Text style={styles.Text_907_1577}>Georgette Hubbard</Text>
              </View>
            </View>
            <View style={styles.View_907_1578}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                }}
                style={styles.ImageBackground_907_1579}
              />
            </View>
            <View style={styles.View_907_1582} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_907_1583}
            />
          </View>
          <View style={styles.View_907_1584}>
            <View style={styles.View_907_1585}>
              <View style={styles.View_907_1586}>
                <Text style={styles.Text_907_1586}>505-287-8051</Text>
              </View>
              <View style={styles.View_907_1587}>
                <Text style={styles.Text_907_1587}>Rosalind Dolton</Text>
              </View>
            </View>
            <View style={styles.View_907_1588}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                }}
                style={styles.ImageBackground_907_1589}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_907_1592}
            />
          </View>
        </View>
        <View style={styles.View_907_1593}>
          <Text style={styles.Text_907_1593}>Friends</Text>
        </View>
      </View>
      <View style={styles.View_372_721}>
        <View style={styles.View_371_680} />
        <View style={styles.View_372_722}>
          <View style={styles.View_371_840}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
              }}
              style={styles.ImageBackground_371_820}
            />
            <View style={styles.View_371_826}>
              <View style={styles.View_371_827}>
                <Text style={styles.Text_371_827}>+0123456789</Text>
              </View>
              <View style={styles.View_371_828}>
                <Text style={styles.Text_371_828}>Conrad Ford</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_577_2916}
            />
          </View>
          <View style={styles.View_372_602}>
            <View style={styles.View_371_807} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
              }}
              style={styles.ImageBackground_595_4060}
            />
            <View style={styles.View_372_609}>
              <View style={styles.View_372_610}>
                <Text style={styles.Text_372_610}>414-586-7314</Text>
              </View>
              <View style={styles.View_372_611}>
                <Text style={styles.Text_372_611}>Jane Holden</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_577_2914}
            />
          </View>
          <View style={styles.View_371_797}>
            <View style={styles.View_371_796} />
            <View style={styles.View_371_798}>
              <View style={styles.View_371_799} />
              <View style={styles.View_372_616}>
                <Text style={styles.Text_372_616}>UK</Text>
              </View>
            </View>
            <View style={styles.View_371_804}>
              <View style={styles.View_371_805}>
                <Text style={styles.Text_371_805}>518-778-0800</Text>
              </View>
              <View style={styles.View_371_806}>
                <Text style={styles.Text_371_806}>Casey Bourn</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_577_2912}
            />
          </View>
          <View style={styles.View_371_794}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
              }}
              style={styles.ImageBackground_371_788}
            />
            <View style={styles.View_371_787}>
              <View style={styles.View_371_786}>
                <Text style={styles.Text_371_786}>505-287-8051</Text>
              </View>
              <View style={styles.View_371_785}>
                <Text style={styles.Text_371_785}>Irene Perry</Text>
              </View>
            </View>
            <View style={styles.View_371_795} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
              }}
              style={styles.ImageBackground_577_2910}
            />
          </View>
        </View>
        <View style={styles.View_371_782}>
          <Text style={styles.Text_371_782}>Recent transfer</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_371_703}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("380_657"))
        }
      >
        <View style={styles.View_371_704} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
          }}
          style={styles.ImageBackground_577_2904}
        />
        <View style={styles.View_371_709}>
          <View style={styles.View_371_710}>
            <Text style={styles.Text_371_710}>Transfer by Bank</Text>
          </View>
          <View style={styles.View_371_770}>
            <View style={styles.View_371_763}>
              <View style={styles.View_371_764}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c605/f2d2/38106c185dddd36ef10c48127898624f"
                  }}
                  style={styles.ImageBackground_371_765}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dd5/b5ca/df0a4d3f86903c152f1865dedb3aea83"
                  }}
                  style={styles.ImageBackground_371_767}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_371_781}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("372_895"))
        }
      >
        <View style={styles.View_371_684} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/2894/52c51ef0f508c989b7141f25fcabfe7f"
          }}
          style={styles.ImageBackground_577_2903}
        />
        <View style={styles.View_371_689}>
          <View style={styles.View_371_690}>
            <Text style={styles.Text_371_690}>Transfer by Avipay wallet</Text>
          </View>
          <View style={styles.View_371_771}>
            <View style={styles.View_371_772}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14da/1ea0/5fab32787008b3084a2db3cfe52a7d6f"
                }}
                style={styles.ImageBackground_371_773}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0d7/4523/7750a96e1b0cb3330aa8c7df1dc0f50a"
                }}
                style={styles.ImageBackground_371_774}
              />
              <View style={styles.View_371_775}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7382/8290/eb6347a64c36dfb8ec57e226fd2963c5"
                  }}
                  style={styles.ImageBackground_371_776}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe01/0741/4f2083add1a6c7cad2c712bac2bdbc82"
                  }}
                  style={styles.ImageBackground_371_777}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/035d/8d9b/1c6a858d7234e3e82f6060aae0e61c27"
                }}
                style={styles.ImageBackground_371_780}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_371_604}>
        <View style={styles.View_577_2900} />
        <View style={styles.View_595_5090} />
        <View style={styles.View_595_5092}>
          <Text style={styles.Text_595_5092}>Transfer</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_595_5093}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("328_343"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I595_5093_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_371_572}>
        <View style={styles.View_371_573}>
          <View style={styles.View_371_574}>
            <Text style={styles.Text_371_574}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_371_575}>
          <View style={styles.View_371_576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_371_577}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_371_580}
            />
          </View>
          <View style={styles.View_371_581} />
        </View>
        <View style={styles.View_371_582}>
          <View style={styles.View_371_583}>
            <View style={styles.View_371_584} />
            <View style={styles.View_371_585} />
            <View style={styles.View_371_586} />
            <View style={styles.View_371_587} />
          </View>
        </View>
        <View style={styles.View_371_588}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_371_589}
          />
        </View>
      </View>
      <View style={styles.View_583_2737}>
        <View style={styles.View_583_2738} />
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2739}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I583_2739_319_327}>
            <View style={styles.View_I583_2739_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I583_2739_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I583_2739_319_330}
              />
            </View>
            <View style={styles.View_I583_2739_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I583_2739_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I583_2739_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2740}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I583_2740_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I583_2740_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1793/b719/a1aa755f1210d696f8851d8fababc303"
              }}
              style={styles.ImageBackground_I583_2740_319_486}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2741}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I583_2741_319_339}>
            <View style={styles.View_I583_2741_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I583_2741_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I583_2741_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I583_2741_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I583_2741_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I583_2741_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2742}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <View style={styles.View_I583_2742_319_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
              }}
              style={styles.ImageBackground_I583_2742_319_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cb/7134/60991c3b1f7388abbaaac49119c40fb5"
              }}
              style={styles.ImageBackground_I583_2742_319_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
              }}
              style={styles.ImageBackground_I583_2742_319_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f6/d981/cbf2cafa04251ce782f812db1d542238"
              }}
              style={styles.ImageBackground_I583_2742_319_323}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_583_2743}>
          <View style={styles.View_583_2744} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_907_1503: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("101.63934426229508%"),
    minHeight: hp("101.63934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80.73770491803278%")
  },
  View_907_1504: {
    width: wp("100%"),
    height: hp("101.63934426229508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_907_1505: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("84.56284153005464%"),
    minHeight: hp("84.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.513661202185801%")
  },
  View_907_1506: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1507: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_907_1508: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_907_1508: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1509: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1509: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_907_1510: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1513: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  ImageBackground_907_1514: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_907_1515: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.699453551912569%")
  },
  View_907_1516: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_907_1517: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_907_1517: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1518: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1518: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_907_1519: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1522: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759572%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  ImageBackground_907_1523: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_907_1524: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.398907103825152%")
  },
  View_907_1525: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_907_1526: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_907_1526: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1527: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1527: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1528: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1529: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1532: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  ImageBackground_907_1533: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.0491803278688394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_907_1534: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.098360655737693%")
  },
  View_907_1535: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_907_1536: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060366%"),
    justifyContent: "flex-start"
  },
  Text_907_1536: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1537: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1537: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1538: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1539: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1542: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759572%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  ImageBackground_907_1543: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.049180327868882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_907_1544: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.797814207650276%")
  },
  View_907_1545: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_907_1546: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_907_1546: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1547: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1547: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1548: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1549: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1552: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759544%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  ImageBackground_907_1553: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_907_1554: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.49726775956286%")
  },
  View_907_1555: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_907_1556: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_907_1556: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1557: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1557: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1558: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1559: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1562: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.606557377049171%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  ImageBackground_907_1563: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.868852459016381%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_907_1564: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.87978142076501%")
  },
  View_907_1565: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_907_1566: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_907_1566: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1567: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1567: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1568: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1569: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1572: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  ImageBackground_907_1573: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.049180327868868%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_907_1574: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68.57923497267758%")
  },
  View_907_1575: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_907_1576: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_907_1576: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1577: {
    width: wp("38.4%"),
    minWidth: wp("38.4%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1577: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1578: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1579: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1582: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759586%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  ImageBackground_907_1583: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.049180327868868%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_907_1584: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78.27868852459018%")
  },
  View_907_1585: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_907_1586: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_907_1586: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1587: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1587: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1588: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1589: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1592: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.5956284153005242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_907_1593: {
    width: wp("17.066666666666666%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_907_1593: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_372_721: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("44.94535519125683%"),
    minHeight: hp("44.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.69945355191257%")
  },
  View_371_680: {
    width: wp("100%"),
    height: hp("44.94535519125683%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_372_722: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("35.38251366120219%"),
    minHeight: hp("35.38251366120219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.1038251366120235%")
  },
  View_371_840: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.0983606557377%")
  },
  ImageBackground_371_820: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_371_826: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_371_827: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_371_827: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_371_828: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_371_828: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_577_2916: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_372_602: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.398907103825138%")
  },
  View_371_807: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759551%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  ImageBackground_595_4060: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_372_609: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_372_610: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%"),
    justifyContent: "flex-start"
  },
  Text_372_610: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_372_611: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_372_611: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_577_2914: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.0491803278688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_371_797: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.699453551912562%")
  },
  View_371_796: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759572%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_371_798: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_371_799: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(114, 177, 248, 1)",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  View_372_616: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.092896174863391%"),
    justifyContent: "flex-start"
  },
  Text_372_616: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_371_804: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_371_805: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%"),
    justifyContent: "flex-start"
  },
  Text_371_805: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_371_806: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_371_806: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_577_2912: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.0491803278688607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_371_794: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("8.060109289617486%"),
    minHeight: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_371_788: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_371_787: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%"),
    top: hp("0%")
  },
  View_371_786: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_371_786: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_371_785: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_371_785: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_371_795: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  ImageBackground_577_2910: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333332%")
  },
  View_371_782: {
    width: wp("35.733333333333334%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_371_782: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_371_703: {
    width: wp("100%"),
    height: hp("7.923497267759563%"),
    top: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_371_704: {
    width: wp("100%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_577_2904: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.8688524590163915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%")
  },
  View_371_709: {
    width: wp("42.13333333333333%"),
    height: hp("3.415300546448088%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_371_710: {
    width: wp("32.53333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%"),
    justifyContent: "flex-start"
  },
  Text_371_710: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_371_770: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792476%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_371_763: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333323%"),
    top: hp("0.27322404371584597%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_371_764: {
    width: wp("5.31402587890625%"),
    height: hp("2.7322511203953477%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.009635416666667673%")
  },
  ImageBackground_371_765: {
    width: wp("5.31402587890625%"),
    height: hp("2.7322511203953477%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_371_767: {
    width: wp("0.3126083374023438%"),
    height: hp("0.33095361756496744%"),
    top: hp("0.34618690365650906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5007486979166664%")
  },
  TouchableOpacity_371_781: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.666666666666664%")
  },
  View_371_684: {
    width: wp("100%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_577_2903: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%")
  },
  View_371_689: {
    width: wp("58.4%"),
    height: hp("3.415300546448088%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%")
  },
  View_371_690: {
    width: wp("48.8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999998%"),
    justifyContent: "flex-start"
  },
  Text_371_690: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_371_771: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_371_772: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333335%"),
    top: hp("0.4098360655737707%")
  },
  ImageBackground_371_773: {
    width: wp("2.1293331146240235%"),
    height: hp("0.8826495519752712%"),
    top: hp("0.7712755046907027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2040039062499988%")
  },
  ImageBackground_371_774: {
    width: wp("0.46824658711751305%"),
    height: hp("0.1923821988652964%"),
    top: hp("1.1085843779350242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9373046875%")
  },
  View_371_775: {
    width: wp("5.3333079020182295%"),
    minWidth: wp("5.3333079020182295%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_371_776: {
    width: wp("5.3333079020182295%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_371_777: {
    width: wp("5.3333079020182295%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_371_780: {
    width: wp("1.7827997843424477%"),
    height: hp("0.1923821988652964%"),
    top: hp("0.582031083237279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1720703124999998%")
  },
  View_371_604: {
    width: wp("100%"),
    height: hp("15.573770491803279%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_577_2900: {
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
  View_595_5090: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_595_5092: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("7.923497267759563%"),
    justifyContent: "center"
  },
  Text_595_5092: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_595_5093: {
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
  ImageBackground_I595_5093_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_371_572: {
    width: wp("91.46666666666667%"),
    height: hp("2.459016393442623%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_371_573: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_371_574: {
    width: wp("9.34998779296875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_371_574: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_371_575: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.43169865842725397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%")
  },
  View_371_576: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_371_577: {
    width: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_371_580: {
    width: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5040986941811818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%")
  },
  View_371_581: {
    width: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    top: hp("0.26184248793971987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339192708333371%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_371_582: {
    width: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    top: hp("0.4917999434340845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.57932942708334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_371_583: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_371_584: {
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
  View_371_585: {
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
  View_371_586: {
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
  View_371_587: {
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
  View_371_588: {
    width: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    top: hp("0.4644842095713795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.4794921875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_371_589: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_583_2737: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_583_2738: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_583_2739: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2739_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27324071998805266%")
  },
  View_I583_2739_319_328: {
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
  ImageBackground_I583_2739_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2739_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I583_2739_319_333: {
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
  ImageBackground_I583_2739_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2739_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_583_2740: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2740_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I583_2740_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2740_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_583_2741: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2741_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333658854166714%"),
    top: hp("0.2732490581241649%")
  },
  View_I583_2741_319_340: {
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
  ImageBackground_I583_2741_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2741_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2741_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126423486594888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7814453124999972%")
  },
  ImageBackground_I583_2741_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709048411885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0662109374999886%")
  },
  ImageBackground_I583_2741_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878447318988947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.73287760416666%")
  },
  TouchableOpacity_583_2742: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2742_319_319: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I583_2742_319_320: {
    width: wp("0.37209300994873046%"),
    height: hp("1.0623966409860413%"),
    top: hp("1.042383746371243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3323567708333357%")
  },
  ImageBackground_I583_2742_319_321: {
    width: wp("0.37209300994873046%"),
    height: hp("1.4796035537302819%"),
    top: hp("0.6250516964438191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4900716145833357%")
  },
  ImageBackground_I583_2742_319_322: {
    width: wp("0.37209300994873046%"),
    height: hp("0.601601209796843%"),
    top: hp("1.5030490896089361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6287434895833357%")
  },
  ImageBackground_I583_2742_319_323: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_583_2743: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_583_2744: {
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
