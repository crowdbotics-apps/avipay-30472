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
      <View style={styles.View_907_1604}>
        <View style={styles.View_907_1605} />
        <View style={styles.View_907_1606}>
          <Text style={styles.Text_907_1606}>Choose</Text>
        </View>
        <View style={styles.View_907_1607}>
          <View style={styles.View_907_1608}>
            <View style={styles.View_907_1609}>
              <View style={styles.View_907_1610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1611}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1613}
                />
              </View>
              <View style={styles.View_907_1614}>
                <View style={styles.View_907_1615}>
                  <Text style={styles.Text_907_1615}>414-586-7314</Text>
                </View>
                <View style={styles.View_907_1616}>
                  <Text style={styles.Text_907_1616}>Cruno Nicholson</Text>
                </View>
              </View>
              <View style={styles.View_907_1617} />
            </View>
            <View style={styles.View_907_1618}>
              <View style={styles.View_907_1619}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1620}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1622}
                />
              </View>
              <View style={styles.View_907_1623}>
                <View style={styles.View_907_1624}>
                  <Text style={styles.Text_907_1624}>414-586-7314</Text>
                </View>
                <View style={styles.View_907_1625}>
                  <Text style={styles.Text_907_1625}>Cale Ingram</Text>
                </View>
              </View>
              <View style={styles.View_907_1626} />
            </View>
            <View style={styles.View_907_1627}>
              <View style={styles.View_907_1628}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1629}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1631}
                />
              </View>
              <View style={styles.View_907_1632}>
                <View style={styles.View_907_1633}>
                  <Text style={styles.Text_907_1633}>414-586-7314</Text>
                </View>
                <View style={styles.View_907_1634}>
                  <Text style={styles.Text_907_1634}>Cadeline Ryan</Text>
                </View>
              </View>
              <View style={styles.View_907_1635} />
            </View>
            <View style={styles.View_907_1636}>
              <View style={styles.View_907_1637}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1638}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1640}
                />
              </View>
              <View style={styles.View_907_1641}>
                <View style={styles.View_907_1642}>
                  <Text style={styles.Text_907_1642}>505-287-8051</Text>
                </View>
                <View style={styles.View_907_1643}>
                  <Text style={styles.Text_907_1643}>Cach Fennimore</Text>
                </View>
              </View>
              <View style={styles.View_907_1644} />
            </View>
            <View style={styles.View_907_1645}>
              <View style={styles.View_907_1646}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1647}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1649}
                />
              </View>
              <View style={styles.View_907_1650}>
                <View style={styles.View_907_1651}>
                  <Text style={styles.Text_907_1651}>414-586-7314</Text>
                </View>
                <View style={styles.View_907_1652}>
                  <Text style={styles.Text_907_1652}>Cesley Glover</Text>
                </View>
              </View>
              <View style={styles.View_907_1653} />
            </View>
          </View>
          <View style={styles.View_907_1654}>
            <View style={styles.View_907_1655} />
            <View style={styles.View_907_1656}>
              <Text style={styles.Text_907_1656}>C</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_907_1657}>
          <View style={styles.View_907_1658}>
            <View style={styles.View_907_1659}>
              <View style={styles.View_907_1660}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1661}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1663}
                />
              </View>
              <View style={styles.View_907_1664}>
                <View style={styles.View_907_1665}>
                  <Text style={styles.Text_907_1665}>414-586-7314</Text>
                </View>
                <View style={styles.View_907_1666}>
                  <Text style={styles.Text_907_1666}>Bruno Nicholson</Text>
                </View>
              </View>
              <View style={styles.View_907_1667} />
            </View>
            <View style={styles.View_907_1668}>
              <View style={styles.View_907_1669}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1670}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1672}
                />
              </View>
              <View style={styles.View_907_1673}>
                <View style={styles.View_907_1674}>
                  <Text style={styles.Text_907_1674}>414-586-7314</Text>
                </View>
                <View style={styles.View_907_1675}>
                  <Text style={styles.Text_907_1675}>Dale Ingram</Text>
                </View>
              </View>
              <View style={styles.View_907_1676} />
            </View>
            <View style={styles.View_907_1677}>
              <View style={styles.View_907_1678}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1679}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1681}
                />
              </View>
              <View style={styles.View_907_1682}>
                <View style={styles.View_907_1683}>
                  <Text style={styles.Text_907_1683}>414-586-7314</Text>
                </View>
                <View style={styles.View_907_1684}>
                  <Text style={styles.Text_907_1684}>Badeline Ryan</Text>
                </View>
              </View>
              <View style={styles.View_907_1685} />
            </View>
            <View style={styles.View_907_1686}>
              <View style={styles.View_907_1687}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1688}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1690}
                />
              </View>
              <View style={styles.View_907_1691}>
                <View style={styles.View_907_1692}>
                  <Text style={styles.Text_907_1692}>505-287-8051</Text>
                </View>
                <View style={styles.View_907_1693}>
                  <Text style={styles.Text_907_1693}>Bach Fennimore</Text>
                </View>
              </View>
              <View style={styles.View_907_1694} />
            </View>
            <View style={styles.View_907_1695}>
              <View style={styles.View_907_1696}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1697}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1699}
                />
              </View>
              <View style={styles.View_907_1700}>
                <View style={styles.View_907_1701}>
                  <Text style={styles.Text_907_1701}>414-586-7314</Text>
                </View>
                <View style={styles.View_907_1702}>
                  <Text style={styles.Text_907_1702}>Besley Glover</Text>
                </View>
              </View>
              <View style={styles.View_907_1703} />
            </View>
          </View>
          <View style={styles.View_907_1704}>
            <View style={styles.View_907_1705} />
            <View style={styles.View_907_1706}>
              <Text style={styles.Text_907_1706}>B</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_907_1707}>
          <View style={styles.View_907_1708}>
            <View style={styles.View_907_1709}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                }}
                style={styles.ImageBackground_907_1710}
              />
              <View style={styles.View_907_1713}>
                <View style={styles.View_907_1714}>
                  <Text style={styles.Text_907_1714}>414-586-7314</Text>
                </View>
                <View style={styles.View_907_1715}>
                  <Text style={styles.Text_907_1715}>Ane Hana</Text>
                </View>
              </View>
              <View style={styles.View_907_1716} />
            </View>
            <View style={styles.View_907_1717}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                }}
                style={styles.ImageBackground_907_1718}
              />
              <View style={styles.View_907_1721}>
                <View style={styles.View_907_1722}>
                  <Text style={styles.Text_907_1722}>505-287-8051</Text>
                </View>
                <View style={styles.View_907_1723}>
                  <Text style={styles.Text_907_1723}>Arene Perry</Text>
                </View>
              </View>
              <View style={styles.View_907_1724} />
            </View>
            <View style={styles.View_907_1725}>
              <View style={styles.View_907_1726}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1727}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1729}
                />
              </View>
              <View style={styles.View_907_1730}>
                <View style={styles.View_907_1731}>
                  <Text style={styles.Text_907_1731}>414-586-7314</Text>
                </View>
                <View style={styles.View_907_1732}>
                  <Text style={styles.Text_907_1732}>Alfred Weber</Text>
                </View>
              </View>
              <View style={styles.View_907_1733} />
            </View>
            <View style={styles.View_907_1734}>
              <View style={styles.View_907_1735}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/630e/df82/cb5a5b0dfc27de0e3e65e2e32c590e4d"
                  }}
                  style={styles.ImageBackground_907_1736}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b06/f14e/29d968afaa82283014d3771f41784c46"
                  }}
                  style={styles.ImageBackground_907_1738}
                />
              </View>
              <View style={styles.View_907_1739}>
                <View style={styles.View_907_1740}>
                  <Text style={styles.Text_907_1740}>414-586-7314</Text>
                </View>
                <View style={styles.View_907_1741}>
                  <Text style={styles.Text_907_1741}>Ane Holden</Text>
                </View>
              </View>
              <View style={styles.View_907_1742} />
            </View>
            <View style={styles.View_907_1743}>
              <View style={styles.View_907_1744}>
                <View style={styles.View_907_1745}>
                  <Text style={styles.Text_907_1745}>505-287-8051</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f6/954c/560f45dc8952db0bc7629d8df6e40e67"
                  }}
                  style={styles.ImageBackground_907_1746}
                />
                <View style={styles.View_907_1749}>
                  <Text style={styles.Text_907_1749}>Arene Perry</Text>
                </View>
              </View>
              <View style={styles.View_907_1750} />
              <View style={styles.View_907_1751}>
                <View style={styles.View_907_1752} />
              </View>
            </View>
          </View>
          <View style={styles.View_907_1753}>
            <View style={styles.View_907_1754} />
            <View style={styles.View_907_1755}>
              <Text style={styles.Text_907_1755}>A</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_464_2747}>
        <View style={styles.View_464_2748} />
        <View style={styles.View_464_2749}>
          <View style={styles.View_I464_2749_341_508}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05a9/529b/83f29e38a72696f08fcc3b38fca07ff3"
              }}
              style={styles.ImageBackground_I464_2749_341_509}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d31/c365/3dfd140ef9b7e424722319eee892a302"
              }}
              style={styles.ImageBackground_I464_2749_341_510}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aede/3742/3c65b1aeb0995b9fe52c13adface4f8d"
              }}
              style={styles.ImageBackground_I464_2749_341_511}
            />
          </View>
        </View>
        <View style={styles.View_464_2750}>
          <Text style={styles.Text_464_2750}>Add New Friend</Text>
        </View>
      </View>
      <View style={styles.View_911_1366}>
        <View style={styles.View_582_2802} />
        <View style={styles.View_596_5184} />
        <View style={styles.View_596_5185}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce1b/de9d/2bcd68a0cb9dd880c54deac3c09f587d"
            }}
            style={styles.ImageBackground_I596_5185_596_5165}
          />
        </View>
        <View style={styles.View_596_5186}>
          <Text style={styles.Text_596_5186}>Friends</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_596_5187}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I596_5187_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_598_2720}>
        <View style={styles.View_598_2721} />
        <TouchableOpacity
          style={styles.TouchableOpacity_598_2722}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I598_2722_319_327}>
            <View style={styles.View_I598_2722_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I598_2722_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I598_2722_319_330}
              />
            </View>
            <View style={styles.View_I598_2722_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I598_2722_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I598_2722_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_598_2723}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I598_2723_319_339}>
            <View style={styles.View_I598_2723_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I598_2723_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I598_2723_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I598_2723_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I598_2723_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I598_2723_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_598_2724}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <View style={styles.View_I598_2724_319_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
              }}
              style={styles.ImageBackground_I598_2724_319_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cb/7134/60991c3b1f7388abbaaac49119c40fb5"
              }}
              style={styles.ImageBackground_I598_2724_319_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
              }}
              style={styles.ImageBackground_I598_2724_319_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f6/d981/cbf2cafa04251ce782f812db1d542238"
              }}
              style={styles.ImageBackground_I598_2724_319_323}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_598_2725}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I598_2725_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I598_2725_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd6/2f4b/fded99faf3c3a5c0db50c123bd673f42"
              }}
              style={styles.ImageBackground_I598_2725_319_486}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_598_2727}>
          <View style={styles.View_598_2728} />
        </View>
      </View>
      <View style={styles.View_460_3179}>
        <View style={styles.View_460_3180}>
          <View style={styles.View_460_3181}>
            <Text style={styles.Text_460_3181}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_460_3182}>
          <View style={styles.View_460_3183}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c565/ecdd/c0671f00e14fd0aa83dbb54b99ef295e"
              }}
              style={styles.ImageBackground_460_3184}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbf6/8698/50a7c971e78d3d1b9f21c5c398d6de39"
              }}
              style={styles.ImageBackground_460_3187}
            />
          </View>
          <View style={styles.View_460_3188} />
        </View>
        <View style={styles.View_460_3189}>
          <View style={styles.View_460_3190}>
            <View style={styles.View_460_3191} />
            <View style={styles.View_460_3192} />
            <View style={styles.View_460_3193} />
            <View style={styles.View_460_3194} />
          </View>
        </View>
        <View style={styles.View_460_3195}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_460_3196}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_907_1604: {
    width: wp("100%"),
    height: hp("171.17486338797815%"),
    top: hp("25.683060109289617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1605: {
    width: wp("100%"),
    height: hp("171.17486338797815%"),
    minHeight: hp("171.17486338797815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_907_1606: {
    width: wp("15.2%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("3.2786885245901622%"),
    justifyContent: "center"
  },
  Text_907_1606: {
    color: "rgba(102, 90, 240, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1607: {
    width: wp("87.2%"),
    height: hp("52.459016393442624%"),
    top: hp("114.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_907_1608: {
    width: wp("87.2%"),
    height: hp("46.85792349726776%"),
    top: hp("5.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1609: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("38.797814207650276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1610: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1611: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513788859049477%"),
    top: hp("0.4873807313012435%")
  },
  ImageBackground_907_1613: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1614: {
    width: wp("32.800000000000004%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%")
  },
  View_907_1615: {
    width: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_907_1615: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1616: {
    width: wp("32.800000000000004%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1616: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1617: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1618: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("29.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1619: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1620: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513788859049477%"),
    top: hp("0.4873807313012435%")
  },
  ImageBackground_907_1622: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1623: {
    width: wp("23.733333333333334%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%")
  },
  View_907_1624: {
    width: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_907_1624: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1625: {
    width: wp("23.466666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1625: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1626: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1627: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("19.398907103825138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1628: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1629: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513788859049477%"),
    top: hp("0.48738073130121506%")
  },
  ImageBackground_907_1631: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1632: {
    width: wp("28.000000000000004%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%")
  },
  View_907_1633: {
    width: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_907_1633: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1634: {
    width: wp("28.000000000000004%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1634: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1635: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1636: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("9.699453551912569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1637: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1638: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513788859049477%"),
    top: hp("0.48738073130121506%")
  },
  ImageBackground_907_1640: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1641: {
    width: wp("32.266666666666666%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%")
  },
  View_907_1642: {
    width: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_907_1642: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1643: {
    width: wp("32.266666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1643: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1644: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1645: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1646: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1647: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513788859049477%"),
    top: hp("0.48738073130121506%")
  },
  ImageBackground_907_1649: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1650: {
    width: wp("27.200000000000003%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  View_907_1651: {
    width: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_907_1651: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1652: {
    width: wp("27.200000000000003%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1652: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1653: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1654: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1655: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_907_1656: {
    width: wp("2.933333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.2732240437158282%"),
    justifyContent: "flex-start"
  },
  Text_907_1656: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1657: {
    width: wp("87.2%"),
    height: hp("52.459016393442624%"),
    top: hp("59.016393442622956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_907_1658: {
    width: wp("87.2%"),
    height: hp("46.85792349726776%"),
    top: hp("5.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1659: {
    width: wp("87.2%"),
    height: hp("8.060113458685535%"),
    top: hp("38.797814207650276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1660: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1661: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513788859049477%"),
    top: hp("0.48738073130121506%")
  },
  ImageBackground_907_1663: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1664: {
    width: wp("32.266666666666666%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  View_907_1665: {
    width: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_907_1665: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1666: {
    width: wp("32.266666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1666: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1667: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1668: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("29.09836065573772%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1669: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1670: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513788859049477%"),
    top: hp("0.4873807313012293%")
  },
  ImageBackground_907_1672: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1673: {
    width: wp("23.733333333333334%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  View_907_1674: {
    width: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568305994%"),
    justifyContent: "flex-start"
  },
  Text_907_1674: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1675: {
    width: wp("23.466666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1675: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1676: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1677: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("19.398907103825138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1678: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1679: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513788859049477%"),
    top: hp("0.48738073130121506%")
  },
  ImageBackground_907_1681: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1682: {
    width: wp("27.46666666666667%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  View_907_1683: {
    width: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_907_1683: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1684: {
    width: wp("27.46666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1684: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1685: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1686: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("9.699453551912569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1687: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1688: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513788859049477%"),
    top: hp("0.4873807313012293%")
  },
  ImageBackground_907_1690: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1691: {
    width: wp("31.733333333333334%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%")
  },
  View_907_1692: {
    width: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_907_1692: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1693: {
    width: wp("31.733333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1693: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1694: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1695: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1696: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1697: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513916015624995%"),
    top: hp("0.48738073130121506%")
  },
  ImageBackground_907_1699: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1700: {
    width: wp("26.666666666666668%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  View_907_1701: {
    width: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_907_1701: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1702: {
    width: wp("26.666666666666668%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1702: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1703: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759572%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1704: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1705: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_907_1706: {
    width: wp("2.4%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "flex-start"
  },
  Text_907_1706: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1707: {
    width: wp("87.2%"),
    height: hp("52.459016393442624%"),
    top: hp("3.2786885245901622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_907_1708: {
    width: wp("87.2%"),
    height: hp("46.85792349726776%"),
    top: hp("5.601092896174862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1709: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("38.797814207650276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1710: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  View_907_1713: {
    width: wp("23.733333333333334%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  View_907_1714: {
    width: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_907_1714: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1715: {
    width: wp("18.933333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1715: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1716: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1717: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("29.098360655737714%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1718: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579141%")
  },
  View_907_1721: {
    width: wp("25.6%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  View_907_1722: {
    width: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306001%"),
    justifyContent: "flex-start"
  },
  Text_907_1722: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1723: {
    width: wp("23.200000000000003%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1723: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1724: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759565%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1725: {
    width: wp("87.2%"),
    height: hp("8.060107205083462%"),
    top: hp("19.398907103825138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1726: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1727: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513524373372393%"),
    top: hp("0.4873807313012293%")
  },
  ImageBackground_907_1729: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1730: {
    width: wp("26.13333333333333%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  View_907_1731: {
    width: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060153%"),
    justifyContent: "flex-start"
  },
  Text_907_1731: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1732: {
    width: wp("26.13333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1732: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1733: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759565%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1734: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("9.699453551912569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1735: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1736: {
    width: wp("9.830631510416667%"),
    height: hp("5.0361841754183745%"),
    minHeight: hp("5.0361841754183745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9513524373372393%"),
    top: hp("0.4873807313012293%")
  },
  ImageBackground_907_1738: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_907_1739: {
    width: wp("23.733333333333334%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333335%")
  },
  View_907_1740: {
    width: wp("23.733333333333334%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_907_1740: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1741: {
    width: wp("22.933333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1741: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1742: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759572%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1743: {
    width: wp("87.2%"),
    height: hp("8.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1744: {
    width: wp("40.53333333333333%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333331%")
  },
  View_907_1745: {
    width: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("3.5519125683060153%"),
    justifyContent: "flex-start"
  },
  Text_907_1745: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_907_1746: {
    width: wp("11.733333333333333%"),
    height: hp("6.0109289617486334%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1749: {
    width: wp("23.200000000000003%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1749: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1750: {
    width: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759572%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  View_907_1751: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1752: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(102, 90, 240, 1)",
    borderWidth: 1.5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_907_1753: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1754: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_907_1755: {
    width: wp("2.666666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("0.2732240437158495%"),
    justifyContent: "flex-start"
  },
  Text_907_1755: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_464_2747: {
    width: wp("100%"),
    height: hp("7.923497267759563%"),
    top: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_464_2748: {
    width: wp("100%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_464_2749: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.3224043715846996%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I464_2749_341_508: {
    flexGrow: 1,
    width: wp("5.333334350585937%"),
    height: hp("2.732240176591717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333282470703118%"),
    top: hp("0.2732240437158495%")
  },
  ImageBackground_I464_2749_341_509: {
    width: wp("0.3720934549967448%"),
    height: hp("1.1217435201009116%"),
    top: hp("0.8040631403688501%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.480622355143229%")
  },
  ImageBackground_I464_2749_341_510: {
    width: wp("2.191131846110026%"),
    height: hp("0.1906212561768912%"),
    top: hp("1.2695646025443956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5710998535156264%")
  },
  ImageBackground_I464_2749_341_511: {
    width: wp("5.333334350585937%"),
    height: hp("2.732240176591717%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_464_2750: {
    width: wp("31.466666666666665%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("2.3224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_464_2750: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_911_1366: {
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
  View_582_2802: {
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
  View_596_5184: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_596_5185: {
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
  ImageBackground_I596_5185_596_5165: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.732226366553802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.27322404371584774%")
  },
  View_596_5186: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.666666666666664%"),
    top: hp("7.923497267759563%"),
    justifyContent: "center"
  },
  Text_596_5186: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_596_5187: {
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
  ImageBackground_I596_5187_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_598_2720: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_598_2721: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_598_2722: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I598_2722_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27322404371587083%")
  },
  View_I598_2722_319_328: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    minHeight: hp("1.0139678345351923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.7182563823428723%")
  },
  ImageBackground_I598_2722_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I598_2722_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I598_2722_319_333: {
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
  ImageBackground_I598_2722_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I598_2722_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_598_2723: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I598_2723_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333821614583272%"),
    top: hp("0.2732573962602629%")
  },
  View_I598_2723_319_340: {
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
  ImageBackground_I598_2723_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I598_2723_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I598_2723_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126590249316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.781433105468757%")
  },
  ImageBackground_I598_2723_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709048411885362%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0662190755208414%")
  },
  ImageBackground_I598_2723_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878447318989089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7328857421875057%")
  },
  TouchableOpacity_598_2724: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I598_2724_319_319: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I598_2724_319_320: {
    width: wp("0.37209300994873046%"),
    height: hp("1.0623966409860413%"),
    top: hp("1.0423670700990328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3323567708333357%")
  },
  ImageBackground_I598_2724_319_321: {
    width: wp("0.37209300994873046%"),
    height: hp("1.4796035537302819%"),
    top: hp("0.6250600345799029%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4900716145833357%")
  },
  ImageBackground_I598_2724_319_322: {
    width: wp("0.37209300994873046%"),
    height: hp("0.601601209796843%"),
    top: hp("1.5030657658811464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6287434895833357%")
  },
  ImageBackground_I598_2724_319_323: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_598_2725: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I598_2725_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I598_2725_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I598_2725_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_598_2727: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_598_2728: {
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
  View_460_3179: {
    width: wp("91.46666666666667%"),
    height: hp("2.578385931546571%"),
    top: hp("2.14873767289959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_460_3180: {
    width: wp("9.34998779296875%"),
    height: hp("2.578385931546571%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_460_3181: {
    width: wp("9.34998779296875%"),
    minHeight: hp("2.578385931546571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_460_3181: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_460_3182: {
    width: wp("6.540884399414063%"),
    height: hp("1.6473022315020118%"),
    top: hp("0.4525606749487707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%")
  },
  View_460_3183: {
    width: wp("6.540884399414063%"),
    height: hp("1.6473022315020118%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_460_3184: {
    width: wp("5.873451741536458%"),
    height: hp("1.6473022315020118%"),
    minHeight: hp("1.6473022315020118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_460_3187: {
    width: wp("0.40046262741088867%"),
    height: hp("0.5729747600242739%"),
    minHeight: hp("0.5729747600242739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140421549479171%"),
    top: hp("0.5286044761782791%")
  },
  View_460_3188: {
    width: wp("4.805551147460937%"),
    height: hp("1.0982015745235922%"),
    minHeight: hp("1.0982015745235922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339518229166629%"),
    top: hp("0.2745247929474042%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_460_3189: {
    width: wp("4.565274556477865%"),
    height: hp("1.5327112270834669%"),
    minHeight: hp("1.5327112270834669%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.57932942708334%"),
    top: hp("0.5156636889515029%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_460_3190: {
    width: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    top: hp("0.13661202185792343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_460_3191: {
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
  View_460_3192: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2814860026041544%"),
    top: hp("0.6420698322233607%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_460_3193: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("1.13388019832757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5095784505208343%"),
    top: hp("0.3278555114412569%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_460_3194: {
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
  View_460_3195: {
    width: wp("4.11141611735026%"),
    height: hp("1.5838750724584028%"),
    minHeight: hp("1.5838750724584028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.47947591145834%"),
    top: hp("0.4869805007684427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_460_3196: {
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
