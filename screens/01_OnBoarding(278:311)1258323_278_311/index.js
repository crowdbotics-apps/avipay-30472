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
      <View style={styles.View_421_1190}>
        <View style={styles.View_421_1191} />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_278_481}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("112_430"))
        }
      >
        <TouchableOpacity
          style={styles.TouchableOpacity_278_482}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("112_430"))
          }
        />
        <View style={styles.View_278_483}>
          <Text style={styles.Text_278_483}> Get Started</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_907_1763}>
        <View style={styles.View_279_955}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7414/189d/2730f3ae178fe666b7f6bd9256bc5fca"
            }}
            style={styles.ImageBackground_279_487}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a87d/a62c/eb691b37d9b2dc1829c22b5e12f5cfe4"
            }}
            style={styles.ImageBackground_279_721}
          />
        </View>
        <View style={styles.View_279_723}>
          <Text style={styles.Text_279_723}>Avipay</Text>
        </View>
        <View style={styles.View_279_956}>
          <Text style={styles.Text_279_956}>
            Consumer Loan Payment, pay bills and many other services
          </Text>
        </View>
      </View>
      <View style={styles.View_282_1429}>
        <View style={styles.View_282_1460}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/870a/cc81/956f3c24eadb899558ab73a61af29379"
            }}
            style={styles.ImageBackground_282_1461}
          />
          <View style={styles.View_282_1463}>
            <View style={styles.View_282_1464}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11c7/b5bc/345fbbc3093892d208059c04730b3827"
                }}
                style={styles.ImageBackground_282_1465}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6688/31be/0c16934f7770d0d7f8024215d65c6570"
                }}
                style={styles.ImageBackground_282_1466}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2df1/5c34/3ae7cdb7b4286e109dc5024d726f4674"
                }}
                style={styles.ImageBackground_282_1467}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7826/17e5/e42ff6b2feb13cbc30cb1603c92a9760"
                }}
                style={styles.ImageBackground_282_1470}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/901e/c82b/f8b3e9576d97b923ae4395472d1b4698"
                }}
                style={styles.ImageBackground_282_1471}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7780/e1e3/d64285fab64ec0752c7ba1e2211823ff"
                }}
                style={styles.ImageBackground_282_1472}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0db6/023e/e000812206d0b495200d8204e8ffc41a"
                }}
                style={styles.ImageBackground_282_1473}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eac7/ddfb/60ece30124ce35648bda8b67407d6cf5"
                }}
                style={styles.ImageBackground_282_1474}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edb7/ecf0/4b003be9cd6d3aed0c6c53a552426700"
                }}
                style={styles.ImageBackground_282_1475}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be47/677d/7641448275400ab0aadc2e718c3b45f9"
                }}
                style={styles.ImageBackground_282_1476}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f676/dc86/c7b89a7fb89048052496c598de4f4932"
                }}
                style={styles.ImageBackground_282_1477}
              />
            </View>
          </View>
          <View style={styles.View_282_1478}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb0a/a394/5e92f0e2f5f75927281ce93b7d50a9d1"
              }}
              style={styles.ImageBackground_282_1479}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/273a/c243/68abe26bc4bdfb760f62304d03531bff"
              }}
              style={styles.ImageBackground_282_1480}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98c3/3327/97599ecad92729f88af120c55469f640"
          }}
          style={styles.ImageBackground_282_1576}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc41/1086/b9331f7c4ae85b3757a49dc06b903148"
          }}
          style={styles.ImageBackground_282_1577}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc41/1086/b9331f7c4ae85b3757a49dc06b903148"
          }}
          style={styles.ImageBackground_282_2054}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2351/6aab/44ae03ac4762ef013452c464a0de295f"
          }}
          style={styles.ImageBackground_282_1578}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/182e/4b30/d450e0ee057ceb040a71fef3b756c55c"
          }}
          style={styles.ImageBackground_282_1580}
        />
        <View style={styles.View_282_1581}>
          <View style={styles.View_282_1582}>
            <View style={styles.View_282_1583}>
              <View style={styles.View_282_1584}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7af9/9abd/731b4e95227406e82bac0f28a83d1c42"
                  }}
                  style={styles.ImageBackground_282_1585}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e39e/77e6/dca29def9e589e304fa025dedbcd8b73"
                }}
                style={styles.ImageBackground_282_1589}
              />
            </View>
            <View style={styles.View_282_1590}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d979/01ea/fd653885632ed014ee13b886726f38dc"
                }}
                style={styles.ImageBackground_282_1591}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90ed/0c83/0aaa608c0fa6e8ec964d3f8dd8e879e4"
                }}
                style={styles.ImageBackground_282_1592}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b031/fce3/029b17bca8ec7b56ccb90ca2dfca4d6e"
                }}
                style={styles.ImageBackground_282_1593}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36b0/608d/d790acfabec35a1f857f090429f3e072"
                }}
                style={styles.ImageBackground_282_1610}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d93/73ee/8c297cb3c92ed88d40801816b7a89c6c"
                }}
                style={styles.ImageBackground_282_1613}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e284/b0b7/009e7a36ef79ee2635e3cb8eead289f3"
                }}
                style={styles.ImageBackground_282_1620}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d721/a85b/144777b2c2c6431a0446749b729ae75f"
                }}
                style={styles.ImageBackground_282_1625}
              />
            </View>
            <View style={styles.View_282_1637}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7396/7044/6d4d5c2d4178e41719e527d03b4b0c8d"
                }}
                style={styles.ImageBackground_282_1638}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7876/bdf7/551ae9f65a9a60b18cc1573828be07fe"
                }}
                style={styles.ImageBackground_282_1639}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e00/2d05/316ba383db7e0a45f3ee7bd801ac0d33"
                }}
                style={styles.ImageBackground_282_1640}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61d7/34ad/2d3394c8a020776a67a8d5771d38b2c9"
                }}
                style={styles.ImageBackground_282_1657}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3514/cf9f/ce920c42cf36da82090d7d7e9f8ca1f2"
                }}
                style={styles.ImageBackground_282_1660}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/974b/ed06/9a39ae1f4fa84f780cd07a42e7b409ca"
                }}
                style={styles.ImageBackground_282_1667}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2d4/a9f9/e1799417b66ec828959b62cad3076df5"
                }}
                style={styles.ImageBackground_282_1672}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3414/20a4/7b51c6ba6610fda27d649704eefed34a"
              }}
              style={styles.ImageBackground_282_1684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9a9/9132/d50e7c71af2e8ac524eaf48bf386dfbe"
              }}
              style={styles.ImageBackground_282_1685}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/fe30/c1bbdadc903b81476674277d59929baf"
              }}
              style={styles.ImageBackground_282_1693}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e4f/5f79/006c70fb7508ca6853d6c84aa6ddbe95"
              }}
              style={styles.ImageBackground_282_1696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/055c/041e/57f5b7105904d68071be463db0ec422d"
              }}
              style={styles.ImageBackground_282_1697}
            />
            <View style={styles.View_282_1702}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37a7/5264/c4be911af4421f769ab8b95f4cb34e6a"
                }}
                style={styles.ImageBackground_282_1703}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e0f/1dc3/695d7d28eec65bc4d1c5e5961a4f1221"
                }}
                style={styles.ImageBackground_282_1704}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9261/fe36/ce5619a16e0d76769e33bf97810edd85"
                }}
                style={styles.ImageBackground_282_1705}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45c6/e46e/9810aa4af5bb25ce531014898dea8ba7"
                }}
                style={styles.ImageBackground_282_1706}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0f6/2710/62b532efbe0675aa657b4a98e40e80c3"
                }}
                style={styles.ImageBackground_282_1707}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab9/ad43/1cc88a98a099d9e56a454c8390a868d5"
                }}
                style={styles.ImageBackground_282_1708}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d80/735e/68c208b68537e4d9e44abb8453254496"
                }}
                style={styles.ImageBackground_282_1709}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c19a/a081/68aa4d8e1bbb2326f487e0bbd1bb33b1"
                }}
                style={styles.ImageBackground_282_1717}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c19a/a081/68aa4d8e1bbb2326f487e0bbd1bb33b1"
                }}
                style={styles.ImageBackground_282_1718}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b956/55b1/d20016e5e6c2d10c1e9c569a1798efee"
              }}
              style={styles.ImageBackground_282_1719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2e5/5d29/78335bea8de06f9c0bc345589dc47b89"
              }}
              style={styles.ImageBackground_282_1722}
            />
            <View style={styles.View_282_1725}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba11/eec8/86860392b515eaf2e3958020ab940ebb"
                }}
                style={styles.ImageBackground_282_1726}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7876/bdf7/551ae9f65a9a60b18cc1573828be07fe"
                }}
                style={styles.ImageBackground_282_1727}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f888/1207/0408de4b276aad63fb84a7720584fd52"
                }}
                style={styles.ImageBackground_282_1728}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61d7/34ad/2d3394c8a020776a67a8d5771d38b2c9"
                }}
                style={styles.ImageBackground_282_1745}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/277b/c513/f564577ecbca250f6d95de4e0a04b93d"
                }}
                style={styles.ImageBackground_282_1748}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1b0/46e9/dca37f67096533ed3fc102c86a5f7bf3"
                }}
                style={styles.ImageBackground_282_1755}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd70/83c5/18b38c0a4a880a11c2b80bb7ad1d1af5"
                }}
                style={styles.ImageBackground_282_1760}
              />
            </View>
            <View style={styles.View_282_1772}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba11/eec8/86860392b515eaf2e3958020ab940ebb"
                }}
                style={styles.ImageBackground_282_1773}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7876/bdf7/551ae9f65a9a60b18cc1573828be07fe"
                }}
                style={styles.ImageBackground_282_1774}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41eb/e433/048ddecd245888743ec696a75897ddfc"
                }}
                style={styles.ImageBackground_282_1775}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7575/06f9/29262c70c11f9cd4ca54b4c2ebb4227a"
                }}
                style={styles.ImageBackground_282_1792}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e7d/fa00/bdc1652eaa90811799e273c918310898"
                }}
                style={styles.ImageBackground_282_1795}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ba6/ed68/ce2c98a686e91793c707953fed15a525"
                }}
                style={styles.ImageBackground_282_1802}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e55c/220f/906efa6dee6d9a574c21edf42b6ab460"
                }}
                style={styles.ImageBackground_282_1807}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267b/5631/0644f7337d8d8ed0e651e10e6237a3fa"
              }}
              style={styles.ImageBackground_282_1819}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41b1/bdb2/6844d33f9f062e4905fea35d74838543"
              }}
              style={styles.ImageBackground_282_1827}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1537/5ca3/e9f83d48c39f38566a7f56fd2da6b8c7"
              }}
              style={styles.ImageBackground_282_1832}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f16/a056/9f4b170d783182357b26c4164d957287"
              }}
              style={styles.ImageBackground_282_1837}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1584/6bae/2a63a7619eff1a65385c889adfe0af1e"
              }}
              style={styles.ImageBackground_282_1841}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ea7/2dfa/f7f6cfecb4dd9f0cb7674ec260cc23e0"
              }}
              style={styles.ImageBackground_282_1844}
            />
            <View style={styles.View_282_1850}>
              <View style={styles.View_282_1851}>
                <View style={styles.View_282_1852}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/184a/a0e6/cbc4b86a573a47716b0f60d7bbe0fb0e"
                    }}
                    style={styles.ImageBackground_282_1853}
                  />
                  <View style={styles.View_282_1854}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9296/2ad0/b0918af5cb6480f05f99ced21c16cfd4"
                      }}
                      style={styles.ImageBackground_282_1855}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c361/bece/8f03426e6a238efbfe07c82090ac8e85"
                      }}
                      style={styles.ImageBackground_282_1857}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4614/20e3/515ac7ed3d96bc6dcdbc784208014977"
                      }}
                      style={styles.ImageBackground_282_1859}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8263/335f/3156df2dd7bc51f76cdaed2f9f7c73fc"
                      }}
                      style={styles.ImageBackground_282_1860}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8879/1912/fadb9ca0693dd10f434537a95127e49a"
                      }}
                      style={styles.ImageBackground_282_1861}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d33a/a27b/ea33ec5490be136620b17eba75689285"
                      }}
                      style={styles.ImageBackground_282_1862}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08cb/4a7d/ed4ae1071ff76ee2c30a9bca360f058b"
                      }}
                      style={styles.ImageBackground_282_1863}
                    />
                  </View>
                </View>
                <View style={styles.View_282_1864}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaf2/80d1/a0df922d8e944cfb8dff6b690317d2ce"
                    }}
                    style={styles.ImageBackground_282_1865}
                  />
                  <View style={styles.View_282_1866}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4883/1c25/ece167d1c22de634b8b57a6132f48507"
                      }}
                      style={styles.ImageBackground_282_1867}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e842/4f2c/5e9641ff98da827a9383ebe78bf41b0c"
                      }}
                      style={styles.ImageBackground_282_1869}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/913e/8ebf/a97dc0ad1c587544109f6cfc64f031e4"
                      }}
                      style={styles.ImageBackground_282_1871}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/793f/f9fc/93acd9ba93c5fe130a2b9aee4bad7dfe"
                      }}
                      style={styles.ImageBackground_282_1873}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e25/c610/a4616f8cffc6349d44f0c4f3c7b697f8"
                      }}
                      style={styles.ImageBackground_282_1875}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fde/7230/87cc4624237d50f837656f807746ca1e"
                      }}
                      style={styles.ImageBackground_282_1879}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/950d/634a/8388a96123baabf8c629d9af4b2c7d07"
                      }}
                      style={styles.ImageBackground_282_1883}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a74/0568/f6edc59552fcc091beeb3ccd49761278"
                      }}
                      style={styles.ImageBackground_282_1887}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_282_1888}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b55/f229/29a932c7c2a4320aabfbd861f9f03220"
                  }}
                  style={styles.ImageBackground_282_1889}
                />
                <View style={styles.View_282_1896}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2280/0d30/8eb03e20d437d40568c993feb4fb2ed3"
                    }}
                    style={styles.ImageBackground_282_1897}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b51a/f2d6/c57939a4d98bcc6a7992caffee5fa388"
                    }}
                    style={styles.ImageBackground_282_1898}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/054f/0e4e/7dcdeefed5c59db3a1df42f3f96f5216"
                    }}
                    style={styles.ImageBackground_282_1899}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d70/5c3c/2b083b6a61193c749d86d96da9d1455a"
                    }}
                    style={styles.ImageBackground_282_1900}
                  />
                  <View style={styles.View_282_1901}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d28/6cb5/a0d46304d98ba3b7f0ea9f77137cee35"
                      }}
                      style={styles.ImageBackground_282_1902}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2319/8040/7e2b3452df01c23dbe19d7a7ab788a73"
                      }}
                      style={styles.ImageBackground_282_1905}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2531/e019/ea01181d312e07f8acea9ae8deac4101"
                      }}
                      style={styles.ImageBackground_282_1906}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2319/8040/7e2b3452df01c23dbe19d7a7ab788a73"
                      }}
                      style={styles.ImageBackground_282_1907}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbad/71bc/d246feeb75feb591a110e3a2b2f67671"
                      }}
                      style={styles.ImageBackground_282_1908}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53b3/adf9/2eefb302d4dc6e6375348cc52efd0f4e"
                      }}
                      style={styles.ImageBackground_282_1909}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae3/c16a/9a9464ebd0ae4230317735e67cc7e2a6"
                      }}
                      style={styles.ImageBackground_282_1910}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bae3/c16a/9a9464ebd0ae4230317735e67cc7e2a6"
                      }}
                      style={styles.ImageBackground_282_1911}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04f1/07af/841edf893dbed27b605211ceb2dd402c"
                      }}
                      style={styles.ImageBackground_282_1912}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2442/5d3e/8eefafa2a88be3be492e72ebbdecc28d"
                      }}
                      style={styles.ImageBackground_282_1913}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9c8/1154/5b643430bcee26a55580fc3bfc61f32a"
                  }}
                  style={styles.ImageBackground_282_1914}
                />
                <View style={styles.View_282_1919}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1dd9/9e4f/307069a90c4d64fd94ec57a5f9546dc9"
                    }}
                    style={styles.ImageBackground_282_1920}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9cad/6dde/479ca789f2e31f66a6fd1ef2d378249b"
                    }}
                    style={styles.ImageBackground_282_1921}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c66/ac37/1d9db9a7f9df1e90f0092e3bce43dfe0"
                    }}
                    style={styles.ImageBackground_282_1922}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a13/7a93/2cbfe76387fdc95f66de9112d71cc12a"
                    }}
                    style={styles.ImageBackground_282_1925}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad25/e5ac/38c80db16e2d4dcbb7fbeb7be23593c4"
                    }}
                    style={styles.ImageBackground_282_1926}
                  />
                </View>
              </View>
              <View source={{ uri: "null" }} style={styles.View_282_1927} />
              <View source={{ uri: "null" }} style={styles.View_282_1928} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbe1/93f1/ee757f5b61ed5b774cfa4b08d2778fad"
              }}
              style={styles.ImageBackground_282_1929}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3db5/ab0b/0a8dcbba0a0289cf96633e2a1a4a59a5"
              }}
              style={styles.ImageBackground_282_1936}
            />
            <View style={styles.View_282_1945}>
              <View style={styles.View_282_1946}>
                <View style={styles.View_282_1947}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af5e/f257/c387c02a3b06097f2de5982c49e540ce"
                    }}
                    style={styles.ImageBackground_282_1948}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3312/8286/bce8e4cf51c0288b409c060c19558efb"
                    }}
                    style={styles.ImageBackground_282_1949}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f19e/4020/383ed87b759d387cd8eedba0cf64fd88"
                    }}
                    style={styles.ImageBackground_282_1950}
                  />
                  <View style={styles.View_282_1951}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f764/78bc/fc064d825fa40af029365b07b4e3fc38"
                      }}
                      style={styles.ImageBackground_282_1952}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e74d/1b32/5860beff1cb90be197802cfef39f5f5b"
                      }}
                      style={styles.ImageBackground_282_1953}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a9/cedf/6201309c0879067417f4aa6ec778b9c2"
                      }}
                      style={styles.ImageBackground_282_1954}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_282_1961}>
                <View style={styles.View_282_1962}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/771d/d851/7b3103b437c93e26399deac20d1e86a2"
                    }}
                    style={styles.ImageBackground_282_1963}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b356/7848/c6cb917919e05221efdeae7eb396d67f"
                    }}
                    style={styles.ImageBackground_282_1964}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f19e/4020/383ed87b759d387cd8eedba0cf64fd88"
                    }}
                    style={styles.ImageBackground_282_1965}
                  />
                  <View style={styles.View_282_1966}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/433b/1484/7b5dc8e4e3ce204923c973199b265baf"
                      }}
                      style={styles.ImageBackground_282_1967}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/431a/258c/5414c69acf6096336cb5886eb9eb2143"
                      }}
                      style={styles.ImageBackground_282_1968}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0853/c609/86c53263b97ea9d64e3615103ce4a2bd"
                      }}
                      style={styles.ImageBackground_282_1969}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_282_1976}>
                <View style={styles.View_282_1977}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33a2/e3e0/e149e021b932cb9ae286ce5811901873"
                    }}
                    style={styles.ImageBackground_282_1978}
                  />
                  <View style={styles.View_282_1979}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6862/1dbe/f5a83266e94a5fb699c8fc7be296594c"
                      }}
                      style={styles.ImageBackground_282_1980}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8263/c7da/72761e6055cd0d54b4f45a5c47893128"
                      }}
                      style={styles.ImageBackground_282_1982}
                    />
                    <View style={styles.View_282_1984}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/490e/b8e9/2d2e3032427aa8c5ad3b5e17b9c771c0"
                        }}
                        style={styles.ImageBackground_282_1985}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7484/3206/a865a246a6dfcaca8fa3c2157b42092d"
                        }}
                        style={styles.ImageBackground_282_1988}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/783d/1b7b/38d3361af7a921489d1b968d722cec64"
                        }}
                        style={styles.ImageBackground_282_1989}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35f4/93fb/4ef12b375aff40dce34e580569f6e478"
                        }}
                        style={styles.ImageBackground_282_1990}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f80d/0cb5/6bfe247a73ee2ad8d99d136d605bc928"
                        }}
                        style={styles.ImageBackground_282_1991}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8263/c7da/72761e6055cd0d54b4f45a5c47893128"
                        }}
                        style={styles.ImageBackground_282_1992}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8263/c7da/72761e6055cd0d54b4f45a5c47893128"
                        }}
                        style={styles.ImageBackground_282_1993}
                      />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8b7/519f/9d408de9892ebd4d75f84b6256235d63"
                    }}
                    style={styles.ImageBackground_282_1994}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe7c/7b75/856fa83224e86450ce9c3096974a0883"
                    }}
                    style={styles.ImageBackground_282_1995}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08d1/debe/3f58e3f80f436c79a505676897ba3cc4"
                  }}
                  style={styles.ImageBackground_282_1998}
                />
              </View>
              <View style={styles.View_282_1999}>
                <View style={styles.View_282_2000}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dd9/21ea/c241396eb926386d721db3867df68a7b"
                    }}
                    style={styles.ImageBackground_282_2001}
                  />
                  <View style={styles.View_282_2004}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/904e/c89f/d79c1732353a3c757e228a1dc79032a8"
                      }}
                      style={styles.ImageBackground_282_2005}
                    />
                  </View>
                  <View style={styles.View_282_2007}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a402/5a4e/329a85cd8a6b52f0b3c37aae5de6846a"
                      }}
                      style={styles.ImageBackground_282_2008}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e1e/b25e/e63a84d7aca84df3f0f78e8c17138261"
                      }}
                      style={styles.ImageBackground_282_2009}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9fe/5fea/b7c21f7a497550a62751ddb2d1041938"
                      }}
                      style={styles.ImageBackground_282_2012}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6899/f5af/863a33e22633e42f3734a4c1981872df"
                      }}
                      style={styles.ImageBackground_282_2018}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b877/5577/c28421cc9c9cedd1ff0f94897e2ab113"
                    }}
                    style={styles.ImageBackground_282_2021}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_282_2022}>
              <View style={styles.View_282_2023}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb66/2c67/77de839f55f977a80c517ca1847f97b8"
                  }}
                  style={styles.ImageBackground_282_2024}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe50/4fa6/1a53420fd51ef2a2113cc083ecba9ea8"
                  }}
                  style={styles.ImageBackground_282_2026}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e7b3/93f6/022f2868d6d4f41c2686fa5d6e99105e"
                  }}
                  style={styles.ImageBackground_282_2028}
                />
              </View>
            </View>
            <View source={{ uri: "null" }} style={styles.View_282_2030} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a0c/985c/ad1d6d5fd5231ce8ecd00fe9ef3a2217"
              }}
              style={styles.ImageBackground_282_2031}
            />
            <View style={styles.View_282_2036}>
              <View style={styles.View_282_2037}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c40a/5be6/f2abe1ddeb51c98e1433741f424c67d0"
                  }}
                  style={styles.ImageBackground_282_2038}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20dd/166c/cdf8a17da535cdce7da8dad80586ae1a"
                }}
                style={styles.ImageBackground_282_2042}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db95/eb0d/f6ec5db7dd619b092507b173b44e337a"
                }}
                style={styles.ImageBackground_282_2043}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c172/9400/418fd743e55b328dfb28aa12704f7ed8"
            }}
            style={styles.ImageBackground_282_2044}
          />
        </View>
      </View>
      <View style={styles.View_278_314}>
        <View style={styles.View_278_315}>
          <View style={styles.View_278_316}>
            <Text style={styles.Text_278_316}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_278_317}>
          <View style={styles.View_278_318}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_278_319}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_278_322}
            />
          </View>
          <View style={styles.View_278_323} />
        </View>
        <View style={styles.View_278_324}>
          <View style={styles.View_278_325}>
            <View style={styles.View_278_326} />
            <View style={styles.View_278_327} />
            <View style={styles.View_278_328} />
            <View style={styles.View_278_329} />
          </View>
        </View>
        <View style={styles.View_278_330}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_278_331}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_421_1190: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_421_1191: {
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
  TouchableOpacity_278_481: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("92.07650273224044%")
  },
  TouchableOpacity_278_482: {
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
  View_278_483: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.200000000000003%"),
    top: hp("2.0491803278688394%"),
    justifyContent: "flex-start"
  },
  Text_278_483: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1763: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    height: hp("25.136612021857925%"),
    minHeight: hp("25.136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("61.47540983606557%")
  },
  View_279_955: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333332%"),
    top: hp("0%")
  },
  ImageBackground_279_487: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_279_721: {
    width: wp("11.200000000000001%"),
    height: hp("5.737704918032787%"),
    top: hp("3.278688524590173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%")
  },
  View_279_723: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333334%"),
    top: hp("13.934426229508198%"),
    justifyContent: "flex-start"
  },
  Text_279_723: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_279_956: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.672131147540988%"),
    justifyContent: "flex-start"
  },
  Text_279_956: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_282_1429: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("44.53551912568306%"),
    minHeight: hp("44.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("10.92896174863388%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_282_1460: {
    width: wp("90.73868001302084%"),
    height: hp("26.62077940226904%"),
    top: hp("17.927159377134565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.009724426269531072%")
  },
  ImageBackground_282_1461: {
    width: wp("90.66665852864584%"),
    height: hp("26.610840344038166%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.019449361165364998%")
  },
  View_282_1463: {
    width: wp("45.64844563802083%"),
    height: hp("13.544528731882899%"),
    top: hp("0.006203573258193984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.090233866373694%")
  },
  View_282_1464: {
    width: wp("45.64844563802083%"),
    height: hp("13.544528731882899%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1465: {
    width: wp("44.909419759114584%"),
    height: hp("13.544528731882899%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7390258789062472%")
  },
  ImageBackground_282_1466: {
    width: wp("39.90733235677084%"),
    height: hp("11.200912142060492%"),
    top: hp("0.06950670252732394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.13427734375%")
  },
  ImageBackground_282_1467: {
    width: wp("33.35334065755208%"),
    height: hp("8.202082732987535%"),
    top: hp("0.24824298796106703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.121122233072917%")
  },
  ImageBackground_282_1470: {
    width: wp("12.680098470052084%"),
    height: hp("4.279775567393485%"),
    top: hp("3.2470703125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.116117350260424%")
  },
  ImageBackground_282_1471: {
    width: wp("7.176318359375%"),
    height: hp("2.5718417975420507%"),
    top: hp("0.009922381958677562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1472: {
    width: wp("12.407828776041667%"),
    height: hp("1.9859772562329236%"),
    top: hp("6.494140625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.10554199218751%")
  },
  ImageBackground_282_1473: {
    width: wp("9.821256510416667%"),
    height: hp("3.3563040644744704%"),
    top: hp("9.661765176741802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.43114420572917%")
  },
  ImageBackground_282_1474: {
    width: wp("8.265409342447917%"),
    height: hp("1.5192709333909666%"),
    top: hp("0.9036204853995926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.709562174479174%")
  },
  ImageBackground_282_1475: {
    width: wp("5.289860026041667%"),
    height: hp("4.577678409430499%"),
    top: hp("3.574759061219261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.843269856770846%")
  },
  ImageBackground_282_1476: {
    width: wp("7.390242513020834%"),
    height: hp("2.551986610954576%"),
    top: hp("9.165279200819676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.884741210937506%")
  },
  ImageBackground_282_1477: {
    width: wp("11.20206298828125%"),
    height: hp("0.7348128355265967%"),
    top: hp("0.973127187926913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.299291992187506%")
  },
  View_282_1478: {
    width: wp("86.28114420572916%"),
    height: hp("25.323684358857367%"),
    top: hp("1.297097127945694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1479: {
    width: wp("86.28114420572916%"),
    height: hp("25.323684358857367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1480: {
    width: wp("41.599308268229166%"),
    height: hp("12.19389034750683%"),
    top: hp("12.601024856984296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3516377766927077%")
  },
  ImageBackground_282_1576: {
    width: wp("15.712605794270834%"),
    height: hp("2.414018078579929%"),
    top: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.4%")
  },
  ImageBackground_282_1577: {
    width: wp("21.03636881510417%"),
    height: hp("3.1662539706204105%"),
    top: hp("3.0054644808743163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.93333333333334%")
  },
  ImageBackground_282_2054: {
    width: wp("21.036370849609376%"),
    height: hp("3.1662539706204105%"),
    top: hp("6.693989071038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333333%")
  },
  ImageBackground_282_1578: {
    width: wp("7.701407877604166%"),
    height: hp("3.9123730581314837%"),
    top: hp("1.0928961748633874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.733333333333334%")
  },
  ImageBackground_282_1580: {
    width: wp("56.46732991536459%"),
    height: hp("16.56800567126665%"),
    top: hp("25.49248367059426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.038179524739583%")
  },
  View_282_1581: {
    width: wp("69.56556803385416%"),
    height: hp("41.001754510598104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_1582: {
    width: wp("69.56556803385416%"),
    height: hp("41.001754510598104%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_1583: {
    width: wp("2.9374430338541666%"),
    height: hp("3.7019781727608434%"),
    top: hp("23.078910118895152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.74538167317708%")
  },
  View_282_1584: {
    width: wp("2.4504557291666664%"),
    height: hp("2.5902294721759733%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.48698730468750284%")
  },
  ImageBackground_282_1585: {
    width: wp("2.4504557291666664%"),
    height: hp("2.5902294721759733%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1589: {
    width: wp("1.9261474609375%"),
    height: hp("2.3931034275742826%"),
    top: hp("1.3088705761185082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_1590: {
    width: wp("12.096671549479167%"),
    height: hp("7.448680023026596%"),
    top: hp("19.254040327228488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.56470540364583%")
  },
  ImageBackground_282_1591: {
    width: wp("12.068003336588541%"),
    height: hp("7.430329870005123%"),
    top: hp("0.018343899419395626%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.02866821289062571%")
  },
  ImageBackground_282_1592: {
    width: wp("8.615472412109375%"),
    height: hp("6.417483970767162%"),
    top: hp("1.021271585766737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.461749267578128%")
  },
  ImageBackground_282_1593: {
    width: wp("11.941082763671874%"),
    height: hp("7.3580444836225665%"),
    top: hp("0.019861440189547608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.05834757486979214%")
  },
  ImageBackground_282_1610: {
    width: wp("8.168168131510416%"),
    height: hp("6.566924215014515%"),
    top: hp("0.4237107240437119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4002583821614607%")
  },
  ImageBackground_282_1613: {
    width: wp("10.326900227864583%"),
    height: hp("7.020427099342555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1620: {
    width: wp("4.7064208984375%"),
    height: hp("3.498773626942452%"),
    top: hp("2.4906679580771858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.425996907552083%")
  },
  ImageBackground_282_1625: {
    width: wp("3.1116800944010414%"),
    height: hp("2.601629788758325%"),
    top: hp("2.839952479294734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.892751057942711%")
  },
  View_282_1637: {
    width: wp("12.096671549479167%"),
    height: hp("7.458610743121372%"),
    top: hp("28.518626728995898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.46889648437501%")
  },
  ImageBackground_282_1638: {
    width: wp("12.0679931640625%"),
    height: hp("7.430331954539147%"),
    top: hp("0.02828295765027633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1639: {
    width: wp("8.615470377604167%"),
    height: hp("6.417490224369236%"),
    top: hp("1.0212715857667405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.019449869791664298%")
  },
  ImageBackground_282_1640: {
    width: wp("11.941084798177084%"),
    height: hp("7.358042399088542%"),
    top: hp("0.02978382214822517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09723714192707433%")
  },
  ImageBackground_282_1657: {
    width: wp("8.168168131510416%"),
    height: hp("6.566924215014515%"),
    top: hp("0.42371072404372256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.528243001302073%")
  },
  ImageBackground_282_1660: {
    width: wp("10.326908365885416%"),
    height: hp("7.030355734903305%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.76977132161457%")
  },
  ImageBackground_282_1667: {
    width: wp("4.706416829427083%"),
    height: hp("3.5100843085617317%"),
    top: hp("2.494953760032452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9642496744791629%")
  },
  ImageBackground_282_1672: {
    width: wp("3.1116821289062497%"),
    height: hp("2.601625619690275%"),
    top: hp("2.8498748612534186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0922322591145814%")
  },
  ImageBackground_282_1684: {
    width: wp("13.808093261718751%"),
    height: hp("6.10688006291624%"),
    top: hp("31.815342303833674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.564847819010424%")
  },
  ImageBackground_282_1685: {
    width: wp("37.14571940104167%"),
    height: hp("12.005225426512338%"),
    top: hp("19.81011062371926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.4198486328125%")
  },
  ImageBackground_282_1693: {
    width: wp("33.66451822916667%"),
    height: hp("9.919951392001792%"),
    top: hp("19.6015905161373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.4869140625%")
  },
  ImageBackground_282_1696: {
    width: wp("15.986275227864583%"),
    height: hp("6.235964832410135%"),
    top: hp("24.427503575392755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.94622802734375%")
  },
  ImageBackground_282_1697: {
    width: wp("25.068493652343747%"),
    height: hp("10.867647264824539%"),
    top: hp("25.277126291410518%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199055989583336%")
  },
  View_282_1702: {
    width: wp("15.577864583333334%"),
    height: hp("7.93397830483692%"),
    top: hp("28.60799487171277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.059200032552084%")
  },
  ImageBackground_282_1703: {
    width: wp("15.577864583333334%"),
    height: hp("7.93397830483692%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1704: {
    width: wp("15.577864583333334%"),
    height: hp("7.93397830483692%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1705: {
    width: wp("15.091666666666667%"),
    height: hp("7.749851414414703%"),
    top: hp("0.10467696059597387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27226969401041856%")
  },
  ImageBackground_282_1706: {
    width: wp("14.644356282552085%"),
    height: hp("7.586432284996157%"),
    top: hp("0.19859772562329425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.50564778645834%")
  },
  ImageBackground_282_1707: {
    width: wp("14.644356282552085%"),
    height: hp("7.586432284996157%"),
    top: hp("0.19859772562329425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.50564778645834%")
  },
  ImageBackground_282_1708: {
    width: wp("14.644356282552085%"),
    height: hp("5.411781769632642%"),
    top: hp("2.3732336492486397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.50564778645834%")
  },
  ImageBackground_282_1709: {
    width: wp("6.048335774739583%"),
    height: hp("4.764404713781805%"),
    top: hp("1.759530156036547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.803662109375004%")
  },
  ImageBackground_282_1717: {
    width: wp("2.15872802734375%"),
    height: hp("1.8025507692430842%"),
    top: hp("0.7073574378842196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.349495442708331%")
  },
  ImageBackground_282_1718: {
    width: wp("2.1587320963541665%"),
    height: hp("1.8025507692430842%"),
    top: hp("3.8948601060877763%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5363932291666629%")
  },
  ImageBackground_282_1719: {
    width: wp("3.461745198567708%"),
    height: hp("1.4479673625341531%"),
    top: hp("27.06072030823087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.88088175455729%")
  },
  ImageBackground_282_1722: {
    width: wp("4.978694661458333%"),
    height: hp("3.046360953909452%"),
    top: hp("33.773636948215504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4098388671875%")
  },
  View_282_1725: {
    width: wp("12.077217610677083%"),
    height: hp("7.458612827655396%"),
    top: hp("33.54313751387466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199055989583336%")
  },
  ImageBackground_282_1726: {
    width: wp("12.0614990234375%"),
    height: hp("7.430327785471098%"),
    top: hp("0.028282957650269225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1727: {
    width: wp("8.615474446614584%"),
    height: hp("6.417481886233137%"),
    top: hp("1.0311939677254074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.01944580078124858%")
  },
  ImageBackground_282_1728: {
    width: wp("11.94107666015625%"),
    height: hp("7.358040314554517%"),
    top: hp("0.0298004984204141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09724121093750426%")
  },
  ImageBackground_282_1745: {
    width: wp("8.168172200520834%"),
    height: hp("6.56692213048049%"),
    top: hp("0.42371072404370835%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5282389322916714%")
  },
  ImageBackground_282_1748: {
    width: wp("10.307446289062499%"),
    height: hp("7.030361988505379%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7697713216145843%")
  },
  ImageBackground_282_1755: {
    width: wp("4.706424967447917%"),
    height: hp("3.5100843085617317%"),
    top: hp("2.4949537600324376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9642496744791629%")
  },
  ImageBackground_282_1760: {
    width: wp("3.131131998697917%"),
    height: hp("2.60163187329235%"),
    top: hp("2.8498748612534115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.072786458333333%")
  },
  View_282_1772: {
    width: wp("12.077219645182291%"),
    height: hp("7.448684192094647%"),
    top: hp("26.671662877817617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.90032958984375%")
  },
  ImageBackground_282_1773: {
    width: wp("12.060793050130208%"),
    height: hp("7.430336123607198%"),
    top: hp("0.01834389941939918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1774: {
    width: wp("8.615470377604167%"),
    height: hp("6.417486055301187%"),
    top: hp("1.0212715857667405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1775: {
    width: wp("11.941082763671874%"),
    height: hp("7.3580444836225665%"),
    top: hp("0.01986144018955116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07779134114583286%")
  },
  ImageBackground_282_1792: {
    width: wp("8.168168131510416%"),
    height: hp("6.566924215014515%"),
    top: hp("0.42371072404372256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5087951660156236%")
  },
  ImageBackground_282_1795: {
    width: wp("10.307452392578124%"),
    height: hp("7.020427099342555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.769767252604165%")
  },
  ImageBackground_282_1802: {
    width: wp("4.706681315104166%"),
    height: hp("3.5100822240277068%"),
    top: hp("2.4850147018015747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.94480183919271%")
  },
  ImageBackground_282_1807: {
    width: wp("3.1116821289062497%"),
    height: hp("2.591701153197575%"),
    top: hp("2.8498748612534186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.072786458333333%")
  },
  ImageBackground_282_1819: {
    width: wp("35.39539388020833%"),
    height: hp("11.508737366056183%"),
    top: hp("25.40063076331967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.88088175455729%")
  },
  ImageBackground_282_1827: {
    width: wp("30.902895100911458%"),
    height: hp("11.310133386830815%"),
    top: hp("24.18919964566257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.46746622721354%")
  },
  ImageBackground_282_1832: {
    width: wp("10.074076334635416%"),
    height: hp("3.6401217101050203%"),
    top: hp("32.40990143656079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.48205159505209%")
  },
  ImageBackground_282_1837: {
    width: wp("17.269840494791666%"),
    height: hp("6.126737334037739%"),
    top: hp("31.805419921875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.564847819010424%")
  },
  ImageBackground_282_1841: {
    width: wp("10.11297607421875%"),
    height: hp("4.31716793873271%"),
    top: hp("15.81814458461407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.83140055338542%")
  },
  ImageBackground_282_1844: {
    width: wp("20.751039632161458%"),
    height: hp("9.423454993409537%"),
    top: hp("18.827061053833674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.765476481119787%")
  },
  View_282_1850: {
    width: wp("39.990360514322916%"),
    height: hp("27.18801446299735%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_1851: {
    width: wp("17.191640218098957%"),
    height: hp("15.875114899515456%"),
    top: hp("11.29303812329235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.79872029622396%")
  },
  View_282_1852: {
    width: wp("10.014137776692708%"),
    height: hp("14.723245172552723%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.177500406901039%")
  },
  ImageBackground_282_1853: {
    width: wp("10.014137776692708%"),
    height: hp("14.723245172552723%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_1854: {
    width: wp("9.586763509114583%"),
    height: hp("14.517483945752755%"),
    top: hp("0.14618420210041094%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4239746093750014%")
  },
  ImageBackground_282_1855: {
    width: wp("7.251167805989583%"),
    height: hp("14.517483945752755%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1857: {
    width: wp("8.500626627604166%"),
    height: hp("13.87204342201108%"),
    top: hp("0.019861440189547608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0861409505208357%")
  },
  ImageBackground_282_1859: {
    width: wp("7.251167805989583%"),
    height: hp("14.100431223384668%"),
    top: hp("0.019861440189547608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1860: {
    width: wp("7.251167805989583%"),
    height: hp("14.100431223384668%"),
    top: hp("0.019861440189547608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1861: {
    width: wp("6.981844075520834%"),
    height: hp("13.87204342201108%"),
    top: hp("0.019861440189547608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0861409505208357%")
  },
  ImageBackground_282_1862: {
    width: wp("6.981844075520834%"),
    height: hp("13.87204342201108%"),
    top: hp("0.019861440189547608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0861409505208357%")
  },
  ImageBackground_282_1863: {
    width: wp("6.631772867838541%"),
    height: hp("13.991199555944222%"),
    top: hp("0.019861440189547608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0277994791666671%")
  },
  View_282_1864: {
    width: wp("10.612978108723958%"),
    height: hp("14.564655908469945%"),
    top: hp("1.3104548219774586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1865: {
    width: wp("10.574082438151041%"),
    height: hp("14.564653823935918%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_1866: {
    width: wp("10.110727945963543%"),
    height: hp("14.477768361242743%"),
    top: hp("0.08688337815915403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.502250162760415%")
  },
  ImageBackground_282_1867: {
    width: wp("7.601930745442709%"),
    height: hp("14.338750787120047%"),
    top: hp("0.00992238195867401%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1869: {
    width: wp("7.601930745442709%"),
    height: hp("14.338750787120047%"),
    top: hp("0.00992238195867401%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1871: {
    width: wp("8.829402669270833%"),
    height: hp("14.477764192174691%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2813252766927086%")
  },
  ImageBackground_282_1873: {
    width: wp("8.829402669270833%"),
    height: hp("14.477764192174691%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2813252766927086%")
  },
  ImageBackground_282_1875: {
    width: wp("3.3450581868489584%"),
    height: hp("5.76926372090324%"),
    top: hp("2.740645278346996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07554728190104143%")
  },
  ImageBackground_282_1879: {
    width: wp("3.3450581868489584%"),
    height: hp("5.76926372090324%"),
    top: hp("2.740645278346996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07554728190104143%")
  },
  ImageBackground_282_1883: {
    width: wp("5.853857421875%"),
    height: hp("3.5151799519856772%"),
    top: hp("2.740645278346996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.44820353190104%")
  },
  ImageBackground_282_1887: {
    width: wp("6.981837972005208%"),
    height: hp("14.467837641147968%"),
    top: hp("0.00992238195867401%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1257425944010429%")
  },
  View_282_1888: {
    width: wp("10.300189208984376%"),
    height: hp("6.858139871899548%"),
    top: hp("20.32987667563183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.22319132486979%")
  },
  ImageBackground_282_1889: {
    width: wp("4.210784912109375%"),
    height: hp("2.4194832056597932%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5467183430989557%")
  },
  View_282_1896: {
    width: wp("10.300189208984376%"),
    height: hp("5.703647801133453%"),
    top: hp("1.15449832436817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1897: {
    width: wp("10.151865641276043%"),
    height: hp("5.703647801133453%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.14832356770833144%")
  },
  ImageBackground_282_1898: {
    width: wp("4.815848795572917%"),
    height: hp("3.975850506558444%"),
    top: hp("1.6185656271345579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1899: {
    width: wp("4.815848795572917%"),
    height: hp("3.975850506558444%"),
    top: hp("1.6185656271345579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1900: {
    width: wp("8.26540730794271%"),
    height: hp("2.139888825963755%"),
    top: hp("0.00885510053790739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1288736979166636%")
  },
  View_282_1901: {
    width: wp("3.9868448893229167%"),
    height: hp("1.2188353825136613%"),
    top: hp("0.31172955622438536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9958841959635407%")
  },
  ImageBackground_282_1902: {
    width: wp("1.011297607421875%"),
    height: hp("0.2754982703370475%"),
    top: hp("0.07204149590163667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9755452473958357%")
  },
  ImageBackground_282_1905: {
    width: wp("0.7390258789062499%"),
    height: hp("0.3078252239956882%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8783040364583314%")
  },
  ImageBackground_282_1906: {
    width: wp("3.2478190104166664%"),
    height: hp("0.8936897653048157%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2722717285156264%")
  },
  ImageBackground_282_1907: {
    width: wp("0.7195780436197917%"),
    height: hp("0.29789867296896344%"),
    top: hp("0.7745294623036187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2722717285156264%")
  },
  ImageBackground_282_1908: {
    width: wp("1.0112996419270834%"),
    height: hp("0.2655675502422729%"),
    top: hp("0.9532657477373618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1909: {
    width: wp("0.98394775390625%"),
    height: hp("0.235779559025999%"),
    top: hp("0.9532657477373618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00790201822916714%")
  },
  ImageBackground_282_1910: {
    width: wp("0.194482421875%"),
    height: hp("0.24824924156314038%"),
    top: hp("0.8638976050204903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9140563964843764%")
  },
  ImageBackground_282_1911: {
    width: wp("0.19447835286458334%"),
    height: hp("0.2482450724950905%"),
    top: hp("0.11915196486509672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4423014322916714%")
  },
  ImageBackground_282_1912: {
    width: wp("2.6449320475260416%"),
    height: hp("0.8241788937094433%"),
    top: hp("0.11915196486509672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9140563964843764%")
  },
  ImageBackground_282_1913: {
    width: wp("0.40841064453125003%"),
    height: hp("0.17874045450179304%"),
    top: hp("0.1886586673924171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1311279296875014%")
  },
  ImageBackground_282_1914: {
    width: wp("5.299975585937499%"),
    height: hp("2.980535538470159%"),
    top: hp("3.8080934618340194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.591798909505208%")
  },
  View_282_1919: {
    width: wp("4.9891845703125%"),
    height: hp("2.5722170136665388%"),
    top: hp("2.3150334592725414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9840596516927036%")
  },
  ImageBackground_282_1920: {
    width: wp("4.950284830729166%"),
    height: hp("2.4332015240778686%"),
    top: hp("0.13901340505464788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03889973958334281%")
  },
  ImageBackground_282_1921: {
    width: wp("4.950284830729166%"),
    height: hp("2.4331973550098187%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1922: {
    width: wp("1.4586018880208333%"),
    height: hp("0.7943950715612192%"),
    top: hp("0.8889120133196684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8819824218750014%")
  },
  ImageBackground_282_1925: {
    width: wp("3.695123291015625%"),
    height: hp("1.1320062022391564%"),
    top: hp("0.29311883644979275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.46227213541666856%")
  },
  ImageBackground_282_1926: {
    width: wp("0.335675048828125%"),
    height: hp("0.3652708126547558%"),
    top: hp("1.3258303449453592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44282633463542%")
  },
  View_282_1927: {
    width: wp("19.448018391927082%"),
    height: hp("9.929882112096568%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_1928: {
    width: wp("19.448018391927082%"),
    height: hp("9.929882112096568%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1929: {
    width: wp("24.154443359375%"),
    height: hp("6.372505980111211%"),
    top: hp("17.91350151020321%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.789933268229163%")
  },
  ImageBackground_282_1936: {
    width: wp("15.111116536458333%"),
    height: hp("9.155350565258923%"),
    top: hp("18.201467378543377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.833260091145835%")
  },
  View_282_1945: {
    width: wp("22.854327392578124%"),
    height: hp("9.564402846039318%"),
    top: hp("19.846898480191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.679215494791666%")
  },
  View_282_1946: {
    width: wp("8.133003743489583%"),
    height: hp("6.2546902015560955%"),
    top: hp("1.9602624445013639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.921370442708337%")
  },
  View_282_1947: {
    width: wp("8.133003743489583%"),
    height: hp("6.2546902015560955%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1948: {
    width: wp("6.907771809895833%"),
    height: hp("6.2546902015560955%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1949: {
    width: wp("6.437296549479167%"),
    height: hp("5.580020341716828%"),
    top: hp("0.5058580408982323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.69570719401041%")
  },
  ImageBackground_282_1950: {
    width: wp("6.359501139322917%"),
    height: hp("1.8781192967149078%"),
    top: hp("0.017343323087438023%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5482706705729115%")
  },
  View_282_1951: {
    width: wp("4.312752278645833%"),
    height: hp("4.434003986296107%"),
    top: hp("1.214949811091195%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.751725260416663%")
  },
  ImageBackground_282_1952: {
    width: wp("4.312752278645833%"),
    height: hp("4.434003986296107%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1953: {
    width: wp("0.5387125651041667%"),
    height: hp("3.506674010896943%"),
    top: hp("0.8958660188268439%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.019449869791664298%")
  },
  ImageBackground_282_1954: {
    width: wp("2.9949910481770834%"),
    height: hp("3.2272151259125255%"),
    top: hp("0.5812181149675553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.94712727864583%")
  },
  View_282_1961: {
    width: wp("7.818105061848958%"),
    height: hp("4.7379207089950475%"),
    top: hp("4.390578973488733%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.009757486979168561%")
  },
  View_282_1962: {
    width: wp("7.818105061848958%"),
    height: hp("4.7379207089950475%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1963: {
    width: wp("6.631776936848959%"),
    height: hp("3.236005605895662%"),
    top: hp("0.002468088285517922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1964: {
    width: wp("6.165024820963541%"),
    height: hp("4.259342964881105%"),
    top: hp("0.4785756595799171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6530802408854157%")
  },
  ImageBackground_282_1965: {
    width: wp("6.359503173828125%"),
    height: hp("1.8781234657829575%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.29171956380208286%")
  },
  View_282_1966: {
    width: wp("4.279783121744791%"),
    height: hp("3.4397208625501623%"),
    top: hp("1.1989072372353107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5087931315104157%")
  },
  ImageBackground_282_1967: {
    width: wp("4.279783121744791%"),
    height: hp("3.4397208625501623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1968: {
    width: wp("0.5250976562499999%"),
    height: hp("1.5301417783309854%"),
    top: hp("0.8967331849812226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1969: {
    width: wp("2.9949971516927083%"),
    height: hp("2.671138575819672%"),
    top: hp("0.5799173657360015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9335042317708329%")
  },
  View_282_1976: {
    width: wp("9.150327555338542%"),
    height: hp("7.007002700221994%"),
    top: hp("2.5574063994194027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_1977: {
    width: wp("7.506937662760417%"),
    height: hp("6.759768626728996%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6433919270833286%")
  },
  ImageBackground_282_1978: {
    width: wp("6.8378173828125%"),
    height: hp("3.5168110998601865%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_1979: {
    width: wp("4.308846028645833%"),
    height: hp("3.1664009302691682%"),
    top: hp("0.6893970927254074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1634806315104171%")
  },
  ImageBackground_282_1980: {
    width: wp("4.308846028645833%"),
    height: hp("3.1664009302691682%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1982: {
    width: wp("0.41930395762125655%"),
    height: hp("0.21427535945600498%"),
    top: hp("1.3472093259050553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4765462239583371%")
  },
  View_282_1984: {
    width: wp("2.4650309244791666%"),
    height: hp("1.507020126926443%"),
    top: hp("0.5020391745645512%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3064168294270857%")
  },
  ImageBackground_282_1985: {
    width: wp("0.6633463541666667%"),
    height: hp("0.2159764857891479%"),
    top: hp("0.841718162995214%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.086975097656257%")
  },
  ImageBackground_282_1988: {
    width: wp("0.36464029947916665%"),
    height: hp("0.12676885219219605%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.100390625000003%")
  },
  ImageBackground_282_1989: {
    width: wp("0.32179361979166665%"),
    height: hp("0.14707429812905568%"),
    top: hp("0.059134061219261014%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6895060221354186%")
  },
  ImageBackground_282_1990: {
    width: wp("0.6417805989583333%"),
    height: hp("0.5064250341530054%"),
    top: hp("0.21614116397711314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5752929687499986%")
  },
  ImageBackground_282_1991: {
    width: wp("1.4391520182291668%"),
    height: hp("0.3971933667125597%"),
    top: hp("1.1098225911458357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_1992: {
    width: wp("0.3306193033854167%"),
    height: hp("0.17033769784729336%"),
    top: hp("0.2443907690829903%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8362630208333357%")
  },
  ImageBackground_282_1993: {
    width: wp("0.330615234375%"),
    height: hp("0.1688055653389686%"),
    top: hp("0.18635734182889507%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.061490885416667%")
  },
  ImageBackground_282_1994: {
    width: wp("2.750227864583333%"),
    height: hp("0.9652684946529201%"),
    top: hp("0.5018724118425553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.68382568359376%")
  },
  ImageBackground_282_1995: {
    width: wp("6.688340250651041%"),
    height: hp("3.8726535651201757%"),
    top: hp("2.8871129770747928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8185953776041757%")
  },
  ImageBackground_282_1998: {
    width: wp("6.363238525390626%"),
    height: hp("3.8617118460233093%"),
    top: hp("3.1452950232667334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_1999: {
    width: wp("14.627502441406252%"),
    height: hp("8.066006436374018%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.226822916666663%")
  },
  View_282_2000: {
    width: wp("14.627502441406252%"),
    height: hp("8.066006436374018%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_2001: {
    width: wp("9.133715820312501%"),
    height: hp("3.204587509071892%"),
    top: hp("1.3717234460382564%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.493786621093754%")
  },
  View_282_2004: {
    width: wp("6.48648681640625%"),
    height: hp("5.309868901153731%"),
    top: hp("2.7561375352202866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6603800455729214%")
  },
  ImageBackground_282_2005: {
    width: wp("6.48648681640625%"),
    height: hp("5.309868901153731%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_2007: {
    width: wp("4.872444661458333%"),
    height: hp("3.3331740749338286%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5437296549479171%")
  },
  ImageBackground_282_2008: {
    width: wp("4.872444661458333%"),
    height: hp("2.5052701189218323%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_2009: {
    width: wp("4.270804850260417%"),
    height: hp("2.547035842645364%"),
    top: hp("0.7861361477544406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0942586263020857%")
  },
  ImageBackground_282_2012: {
    width: wp("1.8312174479166665%"),
    height: hp("0.8502626679634137%"),
    top: hp("1.2081625683060118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2306640625000043%")
  },
  ImageBackground_282_2018: {
    width: wp("0.6881266276041667%"),
    height: hp("0.2283878013735912%"),
    top: hp("2.127925685194672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5812459309895885%")
  },
  ImageBackground_282_2021: {
    width: wp("6.427290852864584%"),
    height: hp("4.001742503682121%"),
    top: hp("3.250005336407103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_282_2022: {
    width: wp("4.414697265625%"),
    height: hp("1.976046536138149%"),
    top: hp("24.427503575392755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.352783203125%")
  },
  View_282_2023: {
    width: wp("4.414697265625%"),
    height: hp("1.976046536138149%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_2024: {
    width: wp("4.414697265625%"),
    height: hp("1.976046536138149%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_2026: {
    width: wp("1.2835652669270832%"),
    height: hp("0.5430398743009306%"),
    top: hp("0.9762289745560153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5752848307291742%")
  },
  ImageBackground_282_2028: {
    width: wp("3.4034016927083335%"),
    height: hp("1.141939006867956%"),
    top: hp("0.3475501889088122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5639933268229171%")
  },
  View_282_2030: {
    width: wp("29.444295247395836%"),
    height: hp("11.349856267209912%"),
    top: hp("17.814210985527666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.073502604166666%")
  },
  ImageBackground_282_2031: {
    width: wp("16.900325520833334%"),
    height: hp("10.25756669174778%"),
    top: hp("19.95906308700478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.72915852864583%")
  },
  View_282_2036: {
    width: wp("3.5978841145833336%"),
    height: hp("3.1756896138842636%"),
    top: hp("28.60986261419911%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.173315429687506%")
  },
  View_282_2037: {
    width: wp("2.4504516601562503%"),
    height: hp("2.5902294721759733%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_2038: {
    width: wp("2.4504516601562503%"),
    height: hp("2.5902294721759733%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_282_2042: {
    width: wp("0.8570515950520833%"),
    height: hp("0.5646669148095971%"),
    top: hp("2.4117558380293715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7408325195312457%")
  },
  ImageBackground_282_2043: {
    width: wp("1.9066975911458333%"),
    height: hp("1.797308166170381%"),
    top: hp("1.3783772786458357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3419108072916615%")
  },
  ImageBackground_282_2044: {
    width: wp("9.451736450195312%"),
    height: hp("3.6343371281858348%"),
    top: hp("28.68742395619877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.09037577311198%")
  },
  View_278_314: {
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
  View_278_315: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_316: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_278_316: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_278_317: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_278_318: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_278_319: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_278_322: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140421549479171%"),
    top: hp("0.5041070323172812%")
  },
  View_278_323: {
    width: wp("4.805551147460937%"),
    minWidth: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339436848958456%"),
    top: hp("0.2618341498036201%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_278_324: {
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
  View_278_325: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_278_326: {
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
  View_278_327: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2814860026041544%"),
    top: hp("0.6420865084955598%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_278_328: {
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
  View_278_329: {
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
  View_278_330: {
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
  ImageBackground_278_331: {
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
