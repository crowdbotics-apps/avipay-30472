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
      <View style={styles.View_907_1944}>
        <View style={styles.View_907_1945} />
        <View style={styles.View_907_1948}>
          <View style={styles.View_907_1949}>
            <View style={styles.View_907_1950}>
              <View style={styles.View_907_1951}>
                <Text style={styles.Text_907_1951}>Television bill</Text>
              </View>
              <View style={styles.View_907_1952}>
                <Text style={styles.Text_907_1952}>-$400</Text>
              </View>
              <View style={styles.View_907_1953}>
                <Text style={styles.Text_907_1953}>Send</Text>
              </View>
              <View style={styles.View_907_1954}>
                <Text style={styles.Text_907_1954}>July 1 - 3:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_907_1955}>
              <View style={styles.View_907_1956} />
              <View style={styles.View_907_1957}>
                <View style={styles.View_907_1958}>
                  <View style={styles.View_907_1959} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c8e/ffe6/5c81d13239e6d8a047b69f66d4d8b413"
                    }}
                    style={styles.ImageBackground_907_1960}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_907_1962}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_907_1963}
            />
            <View style={styles.View_907_1964}>
              <View style={styles.View_907_1965}>
                <Text style={styles.Text_907_1965}>QR Payment</Text>
              </View>
              <View style={styles.View_907_1966}>
                <Text style={styles.Text_907_1966}>+$1.600</Text>
              </View>
              <View style={styles.View_907_1967}>
                <Text style={styles.Text_907_1967}>Received</Text>
              </View>
              <View style={styles.View_907_1968}>
                <Text style={styles.Text_907_1968}>July 2 - 2:25 PM</Text>
              </View>
            </View>
            <View style={styles.View_907_1969}>
              <View style={styles.View_907_1970} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3772/6cd7/6538c4a8d051ddad3cf4d80d59db867c"
                }}
                style={styles.ImageBackground_907_1971}
              />
            </View>
          </View>
          <View style={styles.View_907_1979}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_907_1980}
            />
            <View style={styles.View_907_1981}>
              <View style={styles.View_907_1982}>
                <Text style={styles.Text_907_1982}>QR Payment</Text>
              </View>
              <View style={styles.View_907_1983}>
                <Text style={styles.Text_907_1983}>- $220</Text>
              </View>
              <View style={styles.View_907_1984}>
                <Text style={styles.Text_907_1984}>Sent</Text>
              </View>
              <View style={styles.View_907_1985}>
                <Text style={styles.Text_907_1985}>July 6 - 5:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_907_1986}>
              <View style={styles.View_907_1987} />
              <View style={styles.View_907_1988}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/163f/210f2f7314f67bca3406a9fffb9f8ae9"
                  }}
                  style={styles.ImageBackground_907_1989}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7931/4600/1b44baf03922450dc7de7a1956c4f11e"
                  }}
                  style={styles.ImageBackground_907_1993}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_907_1994}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_907_1995}
            />
            <View style={styles.View_907_1996}>
              <View style={styles.View_907_1997}>
                <Text style={styles.Text_907_1997}>Market</Text>
              </View>
              <View style={styles.View_907_1998}>
                <Text style={styles.Text_907_1998}>-$752</Text>
              </View>
              <View style={styles.View_907_1999}>
                <Text style={styles.Text_907_1999}>Sent</Text>
              </View>
              <View style={styles.View_907_2000}>
                <Text style={styles.Text_907_2000}>July 6 - 4:20 AM</Text>
              </View>
            </View>
            <View style={styles.View_907_2001}>
              <View style={styles.View_907_2002} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7253/7127/aaa83e715e30646fe5d5e022a47891af"
                }}
                style={styles.ImageBackground_907_2003}
              />
            </View>
          </View>
          <View style={styles.View_907_2007}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_907_2008}
            />
            <View style={styles.View_907_2009}>
              <View style={styles.View_907_2010}>
                <Text style={styles.Text_907_2010}>Television bill</Text>
              </View>
              <View style={styles.View_907_2011}>
                <Text style={styles.Text_907_2011}>-$400</Text>
              </View>
              <View style={styles.View_907_2012}>
                <Text style={styles.Text_907_2012}>Send</Text>
              </View>
              <View style={styles.View_907_2013}>
                <Text style={styles.Text_907_2013}>July 7 - 3:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_907_2014}>
              <View style={styles.View_907_2015} />
              <View style={styles.View_907_2016}>
                <View style={styles.View_907_2017}>
                  <View style={styles.View_907_2018} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c8e/ffe6/5c81d13239e6d8a047b69f66d4d8b413"
                    }}
                    style={styles.ImageBackground_907_2019}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_907_2021}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_907_2022}
            />
            <View style={styles.View_907_2023}>
              <View style={styles.View_907_2024}>
                <Text style={styles.Text_907_2024}>QR Payment</Text>
              </View>
              <View style={styles.View_907_2025}>
                <Text style={styles.Text_907_2025}>+$1.600</Text>
              </View>
              <View style={styles.View_907_2026}>
                <Text style={styles.Text_907_2026}>Received</Text>
              </View>
              <View style={styles.View_907_2027}>
                <Text style={styles.Text_907_2027}>July 8 - 2:25 PM</Text>
              </View>
            </View>
            <View style={styles.View_907_2028}>
              <View style={styles.View_907_2029} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3772/6cd7/6538c4a8d051ddad3cf4d80d59db867c"
                }}
                style={styles.ImageBackground_907_2030}
              />
            </View>
          </View>
          <View style={styles.View_907_2038}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_907_2039}
            />
            <View style={styles.View_907_2040}>
              <View style={styles.View_907_2041}>
                <Text style={styles.Text_907_2041}>QR Payment</Text>
              </View>
              <View style={styles.View_907_2042}>
                <Text style={styles.Text_907_2042}>- $220</Text>
              </View>
              <View style={styles.View_907_2043}>
                <Text style={styles.Text_907_2043}>Sent</Text>
              </View>
              <View style={styles.View_907_2044}>
                <Text style={styles.Text_907_2044}>July 10 - 5:00 PM</Text>
              </View>
            </View>
            <View style={styles.View_907_2045}>
              <View style={styles.View_907_2046} />
              <View style={styles.View_907_2047}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/163f/210f2f7314f67bca3406a9fffb9f8ae9"
                  }}
                  style={styles.ImageBackground_907_2048}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7931/4600/1b44baf03922450dc7de7a1956c4f11e"
                  }}
                  style={styles.ImageBackground_907_2052}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_907_2053}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_907_2054}
            />
            <View style={styles.View_907_2055}>
              <View style={styles.View_907_2056}>
                <Text style={styles.Text_907_2056}>Market</Text>
              </View>
              <View style={styles.View_907_2057}>
                <Text style={styles.Text_907_2057}>-$752</Text>
              </View>
              <View style={styles.View_907_2058}>
                <Text style={styles.Text_907_2058}>Sent</Text>
              </View>
              <View style={styles.View_907_2059}>
                <Text style={styles.Text_907_2059}>July 10 - 4:20 AM</Text>
              </View>
            </View>
            <View style={styles.View_907_2060}>
              <View style={styles.View_907_2061} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7253/7127/aaa83e715e30646fe5d5e022a47891af"
                }}
                style={styles.ImageBackground_907_2062}
              />
            </View>
          </View>
          <View style={styles.View_907_2066}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_907_2067}
            />
            <View style={styles.View_907_2068}>
              <View style={styles.View_907_2069}>
                <Text style={styles.Text_907_2069}>Loui</Text>
              </View>
              <View style={styles.View_907_2070}>
                <Text style={styles.Text_907_2070}>+$4.200</Text>
              </View>
              <View style={styles.View_907_2071}>
                <Text style={styles.Text_907_2071}>Received</Text>
              </View>
              <View style={styles.View_907_2072}>
                <Text style={styles.Text_907_2072}>July 10 - 3:00 PM</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d76/6ffd/4040c0b645825e0d244af042aa32c93a"
              }}
              style={styles.ImageBackground_907_2073}
            />
          </View>
          <View style={styles.View_907_2076}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_907_2077}
            />
            <View style={styles.View_907_2078}>
              <View style={styles.View_907_2079}>
                <Text style={styles.Text_907_2079}>Johnsmith</Text>
              </View>
              <View style={styles.View_907_2080}>
                <Text style={styles.Text_907_2080}>- $1.600</Text>
              </View>
              <View style={styles.View_907_2081}>
                <Text style={styles.Text_907_2081}>Sent</Text>
              </View>
              <View style={styles.View_907_2082}>
                <Text style={styles.Text_907_2082}>July 13 - 2:25 PM</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d76/6ffd/4040c0b645825e0d244af042aa32c93a"
              }}
              style={styles.ImageBackground_907_2083}
            />
          </View>
          <View style={styles.View_907_2086}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_907_2087}
            />
            <View style={styles.View_907_2088}>
              <View style={styles.View_907_2089}>
                <Text style={styles.Text_907_2089}>Water bill</Text>
              </View>
              <View style={styles.View_907_2090}>
                <Text style={styles.Text_907_2090}>- $27</Text>
              </View>
              <View style={styles.View_907_2091}>
                <Text style={styles.Text_907_2091}>Sent</Text>
              </View>
              <View style={styles.View_907_2092}>
                <Text style={styles.Text_907_2092}>To day - 2:20 PM</Text>
              </View>
            </View>
            <View style={styles.View_907_2093}>
              <View style={styles.View_907_2094} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f80/5a71/4a9fcd6d2328f46741e0daaa76ae9503"
                }}
                style={styles.ImageBackground_907_2095}
              />
            </View>
          </View>
          <View style={styles.View_907_2098}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837f/c3ee/88546c0681330a3dfbfda4554848aed7"
              }}
              style={styles.ImageBackground_907_2099}
            />
            <View style={styles.View_907_2100}>
              <View style={styles.View_907_2101}>
                <Text style={styles.Text_907_2101}>Electric bill</Text>
              </View>
              <View style={styles.View_907_2102}>
                <Text style={styles.Text_907_2102}>-$420</Text>
              </View>
              <View style={styles.View_907_2103}>
                <Text style={styles.Text_907_2103}>Sent</Text>
              </View>
              <View style={styles.View_907_2104}>
                <Text style={styles.Text_907_2104}>To day - 11:00 AM</Text>
              </View>
            </View>
            <View style={styles.View_907_2105}>
              <View style={styles.View_907_2106} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aaff/542d/d7c909e1bda23eef85e0448b1e2110c6"
                }}
                style={styles.ImageBackground_907_2107}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_907_2110}>
          <Text style={styles.Text_907_2110}>Trading history</Text>
        </View>
      </View>
      <View style={styles.View_557_2641}>
        <View style={styles.View_593_3736}>
          <View style={styles.View_557_2642} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b187/9d71/d64f16d0c1acc71710f6c60b784c99d3"
            }}
            style={styles.ImageBackground_593_3737}
          />
          <View style={styles.View_593_3743}>
            <View style={styles.View_593_3744}>
              <Text style={styles.Text_593_3744}>05-07</Text>
            </View>
            <View style={styles.View_593_3745}>
              <Text style={styles.Text_593_3745}>29-06</Text>
            </View>
          </View>
          <View style={styles.View_593_3746}>
            <View style={styles.View_593_3747}>
              <Text style={styles.Text_593_3747}>0</Text>
            </View>
            <View style={styles.View_593_3748}>
              <Text style={styles.Text_593_3748}>-200</Text>
            </View>
            <View style={styles.View_593_3749}>
              <Text style={styles.Text_593_3749}>-400</Text>
            </View>
            <View style={styles.View_593_3750}>
              <Text style={styles.Text_593_3750}>200</Text>
            </View>
            <View style={styles.View_593_3751}>
              <Text style={styles.Text_593_3751}>400</Text>
            </View>
          </View>
          <View style={styles.View_593_3752}>
            <View style={styles.View_593_3753} />
            <View style={styles.View_593_3754} />
            <View style={styles.View_593_3755} />
            <View style={styles.View_593_3756} />
            <View style={styles.View_593_3757} />
            <View style={styles.View_593_3758} />
            <View style={styles.View_593_3759} />
          </View>
        </View>
        <View style={styles.View_557_2667}>
          <View style={styles.View_561_2683}>
            <View style={styles.View_560_2684} />
            <View style={styles.View_560_2687}>
              <Text style={styles.Text_560_2687}>15/07/2021</Text>
            </View>
          </View>
          <View style={styles.View_561_2684}>
            <View style={styles.View_561_2685} />
            <View style={styles.View_561_2687}>
              <Text style={styles.Text_561_2687}>07/07/2021</Text>
            </View>
          </View>
          <View style={styles.View_561_2688}>
            <View style={styles.View_557_2669} />
            <View style={styles.View_557_2670}>
              <Text style={styles.Text_557_2670}>The last 7 days</Text>
            </View>
          </View>
          <View style={styles.View_557_2671}>
            <View style={styles.View_557_2672} />
            <View style={styles.View_557_2673}>
              <Text style={styles.Text_557_2673}>30 days</Text>
            </View>
          </View>
          <View style={styles.View_557_2674}>
            <View style={styles.View_557_2675} />
            <View style={styles.View_557_2676}>
              <Text style={styles.Text_557_2676}>Custom</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_907_1909}>
        <View style={styles.View_907_1910} />
        <View style={styles.View_907_1911}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbc1/a253/ff1c4696cbd92c193c3f896b92eaf59c"
            }}
            style={styles.ImageBackground_907_1912}
          />
          <View style={styles.View_907_1913}>
            <View style={styles.View_907_1914}>
              <Text style={styles.Text_907_1914}>Outcome</Text>
            </View>
            <View style={styles.View_907_1915}>
              <Text style={styles.Text_907_1915}>$878.35</Text>
            </View>
          </View>
          <View style={styles.View_907_1916}>
            <View style={styles.View_907_1917} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/463b/a13f/d1bf90bd99dde17d2d65f2ce579dd656"
              }}
              style={styles.ImageBackground_907_1918}
            />
          </View>
        </View>
        <View style={styles.View_907_1919}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbc1/a253/ff1c4696cbd92c193c3f896b92eaf59c"
            }}
            style={styles.ImageBackground_907_1920}
          />
          <View style={styles.View_907_1921}>
            <View style={styles.View_907_1922}>
              <Text style={styles.Text_907_1922}>Income</Text>
            </View>
            <View style={styles.View_907_1923}>
              <Text style={styles.Text_907_1923}>$778.35</Text>
            </View>
          </View>
          <View style={styles.View_907_1924}>
            <View style={styles.View_907_1925} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5179/95c3/e51bfeeeb82315537c9eb17f076383c4"
              }}
              style={styles.ImageBackground_907_1926}
            />
          </View>
        </View>
        <View style={styles.View_907_1927}>
          <View style={styles.View_907_1928} />
          <TouchableOpacity
            style={styles.TouchableOpacity_907_1929}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("459_2556"))
            }
          >
            <View style={styles.View_I907_1929_205_2076}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e71/ef17/103fc2e901ff739ed8f4c25a52cd7128"
                }}
                style={styles.ImageBackground_I907_1929_205_2077}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86b2/5573/a2b51d95d3c1e4120c915d2c62f6fc0b"
                }}
                style={styles.ImageBackground_I907_1929_205_2080}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c543/8d50/2ac0ce398e570c1448a0e5f8e9a6ebb5"
                }}
                style={styles.ImageBackground_I907_1929_205_2083}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.View_907_1930}>
            <Text style={styles.Text_907_1930}>Analys</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_907_1931}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("165_161"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
              }}
              style={styles.ImageBackground_I907_1931_551_4768}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_567_3882}>
        <View style={styles.View_567_3883} />
        <View style={styles.View_570_2848}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab0d/c2ad/9d1e817b600b728a7301213cf4ded6aa"
            }}
            style={styles.ImageBackground_I570_2848_415_1172}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3884}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I567_3884_319_327}>
            <View style={styles.View_I567_3884_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I567_3884_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I567_3884_319_330}
              />
            </View>
            <View style={styles.View_I567_3884_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I567_3884_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I567_3884_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3885}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I567_3885_319_339}>
            <View style={styles.View_I567_3885_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I567_3885_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I567_3885_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I567_3885_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I567_3885_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I567_3885_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3887}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I567_3887_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I567_3887_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cd6/2f4b/fded99faf3c3a5c0db50c123bd673f42"
              }}
              style={styles.ImageBackground_I567_3887_319_486}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_567_3889}>
          <View style={styles.View_567_3890} />
        </View>
      </View>
      <View style={styles.View_557_2874}>
        <View style={styles.View_557_2875}>
          <View style={styles.View_557_2876}>
            <Text style={styles.Text_557_2876}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_557_2877}>
          <View style={styles.View_557_2878}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_557_2879}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_557_2882}
            />
          </View>
          <View style={styles.View_557_2883} />
        </View>
        <View style={styles.View_557_2884}>
          <View style={styles.View_557_2885}>
            <View style={styles.View_557_2886} />
            <View style={styles.View_557_2887} />
            <View style={styles.View_557_2888} />
            <View style={styles.View_557_2889} />
          </View>
        </View>
        <View style={styles.View_557_2890}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_557_2891}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_907_1944: {
    width: wp("100%"),
    height: hp("121.72131147540983%"),
    top: hp("70.76502732240438%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1945: {
    width: wp("100%"),
    height: hp("121.72131147540983%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_907_1948: {
    width: wp("91.46666666666667%"),
    height: hp("108.33333333333333%"),
    top: hp("8.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_907_1949: {
    width: wp("91.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("101.50273224043717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1950: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_1951: {
    width: wp("25.866666666666667%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1951: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1952: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.866666666666674%"),
    justifyContent: "flex-start"
  },
  Text_907_1952: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1953: {
    width: wp("8.799999999999999%"),
    top: hp("3.9617486338797505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1953: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1954: {
    width: wp("27.46666666666667%"),
    top: hp("4.098360655737679%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    justifyContent: "flex-start"
  },
  Text_907_1954: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1955: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1956: {
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
  View_907_1957: {
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
  View_907_1958: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0.14902750651043561%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1959: {
    width: wp("5.485713704427083%"),
    height: hp("1.990632541844102%"),
    top: hp("0.20225816737107039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45712890624999947%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_907_1960: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1962: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("92.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1963: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1964: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_1965: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1965: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1966: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_907_1966: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1967: {
    width: wp("15.733333333333333%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1967: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1968: {
    width: wp("27.73333333333333%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_907_1968: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1969: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1970: {
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
  ImageBackground_907_1971: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688550646839244%"),
    top: hp("1.8442622950819612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5999999999999996%")
  },
  View_907_1979: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("82.92349726775957%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1980: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1981: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_1982: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1982: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1983: {
    width: wp("13.866666666666665%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.599999999999994%"),
    justifyContent: "flex-start"
  },
  Text_907_1983: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1984: {
    width: wp("8%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1984: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1985: {
    width: wp("28.799999999999997%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_907_1985: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1986: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1987: {
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
  View_907_1988: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  ImageBackground_907_1989: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1993: {
    width: wp("2.9274442036946615%"),
    height: hp("0.5738032971574961%"),
    top: hp("0.5601101234310875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333316%")
  },
  View_907_1994: {
    width: wp("91.46666666666667%"),
    height: hp("8.060109289617486%"),
    top: hp("73.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_1995: {
    width: wp("91.46666666666667%"),
    height: hp("0.000004096450116339043%"),
    top: hp("8.060105120549451%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1996: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_1997: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1997: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1998: {
    width: wp("12%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_907_1998: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1999: {
    width: wp("8%"),
    top: hp("3.8251366120218506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_1999: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2000: {
    width: wp("28.53333333333333%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333334%"),
    justifyContent: "flex-start"
  },
  Text_907_2000: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2001: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2002: {
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
  ImageBackground_907_2003: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.6393442622950545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_907_2007: {
    width: wp("91.46666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("64.75409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_2008: {
    width: wp("91.46666666666667%"),
    height: hp("0%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2009: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_2010: {
    width: wp("25.866666666666667%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2010: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2011: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.866666666666674%"),
    justifyContent: "flex-start"
  },
  Text_907_2011: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2012: {
    width: wp("8.799999999999999%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2012: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2013: {
    width: wp("28.26666666666667%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.2%"),
    justifyContent: "flex-start"
  },
  Text_907_2013: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2014: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2015: {
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
  View_907_2016: {
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
  View_907_2017: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0.1490275065104072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2018: {
    width: wp("5.485713704427083%"),
    height: hp("1.990632541844102%"),
    top: hp("0.20225816737107039%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45712890624999947%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_907_2019: {
    width: wp("6.4%"),
    height: hp("2.9806301242015403%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2021: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("55.46448087431692%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_2022: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2023: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_2024: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2024: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2025: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_907_2025: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2026: {
    width: wp("15.733333333333333%"),
    top: hp("3.9617486338798074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2026: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2027: {
    width: wp("27.73333333333333%"),
    top: hp("4.098360655737736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_907_2027: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2028: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2029: {
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
  ImageBackground_907_2030: {
    width: wp("5.6000000000000005%"),
    height: hp("2.8688550646839244%"),
    top: hp("1.8442622950819896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5999999999999996%")
  },
  View_907_2038: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("46.17486338797815%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_2039: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2040: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_2041: {
    width: wp("24.53333333333333%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2041: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2042: {
    width: wp("13.866666666666665%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.599999999999994%"),
    justifyContent: "flex-start"
  },
  Text_907_2042: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2043: {
    width: wp("8%"),
    top: hp("3.9617486338797647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2043: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2044: {
    width: wp("30.133333333333333%"),
    top: hp("4.098360655737693%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_907_2044: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2045: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2046: {
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
  View_907_2047: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("1.9125683060109395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  ImageBackground_907_2048: {
    width: wp("6.4%"),
    height: hp("2.7322399160249637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_2052: {
    width: wp("2.9274442036946615%"),
    height: hp("0.5738032971574961%"),
    top: hp("0.5601101234311017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7333333333333316%")
  },
  View_907_2053: {
    width: wp("91.46666666666667%"),
    height: hp("8.060109289617486%"),
    top: hp("37.021857923497265%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_2054: {
    width: wp("91.46666666666667%"),
    height: hp("0.000004096450116339043%"),
    top: hp("8.060105250832805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2055: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_2056: {
    width: wp("13.600000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2056: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2057: {
    width: wp("12%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.46666666666667%"),
    justifyContent: "flex-start"
  },
  Text_907_2057: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2058: {
    width: wp("8%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2058: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2059: {
    width: wp("29.86666666666667%"),
    top: hp("4.234972677595636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.599999999999994%"),
    justifyContent: "flex-start"
  },
  Text_907_2059: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2060: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2061: {
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
  ImageBackground_907_2062: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_907_2066: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("27.732240437158453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_2067: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2068: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_2069: {
    width: wp("8.266666666666666%"),
    top: hp("0.13661202185794252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2069: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2070: {
    width: wp("17.066666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.39999999999999%"),
    justifyContent: "flex-start"
  },
  Text_907_2070: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2071: {
    width: wp("15.733333333333333%"),
    top: hp("3.961748633879793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2071: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2072: {
    width: wp("30.133333333333333%"),
    top: hp("4.0983606557377215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_907_2072: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_907_2073: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.27322404371587083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2076: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("18.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_2077: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2078: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_2079: {
    width: wp("20.8%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2079: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2080: {
    width: wp("16.8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_907_2080: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2081: {
    width: wp("8%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2081: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2082: {
    width: wp("28.799999999999997%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_907_2082: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_907_2083: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.2732240437158566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2086: {
    width: wp("91.46666666666667%"),
    height: hp("8.19672131147541%"),
    top: hp("9.15300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_2087: {
    width: wp("91.46666666666667%"),
    height: hp("0.273224043715847%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2088: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_2089: {
    width: wp("18.666666666666668%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2089: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2090: {
    width: wp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    justifyContent: "flex-start"
  },
  Text_907_2090: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2091: {
    width: wp("8%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2091: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2092: {
    width: wp("29.333333333333332%"),
    top: hp("4.098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333334%"),
    justifyContent: "flex-start"
  },
  Text_907_2092: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2093: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2094: {
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
  ImageBackground_907_2095: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_907_2098: {
    width: wp("91.46666666666667%"),
    height: hp("8.060109289617486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_907_2099: {
    width: wp("91.46666666666667%"),
    height: hp("0.000004096450116339043%"),
    top: hp("8.060105120549423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2100: {
    width: wp("75.46666666666667%"),
    height: hp("6.967213114754098%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_907_2101: {
    width: wp("21.6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2101: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2102: {
    width: wp("12.8%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_907_2102: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2103: {
    width: wp("8%"),
    top: hp("3.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_907_2103: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2104: {
    width: wp("30.133333333333333%"),
    top: hp("4.234972677595621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333334%"),
    justifyContent: "flex-start"
  },
  Text_907_2104: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_2105: {
    width: wp("12.8%"),
    height: hp("6.557377049180328%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_2106: {
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
  ImageBackground_907_2107: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.6393442622950687%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000001%")
  },
  View_907_2110: {
    width: wp("34.4%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    justifyContent: "flex-start"
  },
  Text_907_2110: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_557_2641: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40.43715846994536%"),
    minHeight: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.23497267759563%")
  },
  View_593_3736: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40.43715846994536%"),
    minHeight: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_557_2642: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40.43715846994536%"),
    minHeight: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_593_3737: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("15.846994535519123%")
  },
  View_593_3743: {
    width: wp("78.13333333333333%"),
    minWidth: wp("78.13333333333333%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("36.61202185792349%")
  },
  View_593_3744: {
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
  Text_593_3744: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_593_3745: {
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
  Text_593_3745: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_593_3746: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    height: hp("21.311475409836063%"),
    minHeight: hp("21.311475409836063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("14.754098360655739%")
  },
  View_593_3747: {
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
  Text_593_3747: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_593_3748: {
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
  Text_593_3748: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_593_3749: {
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
  Text_593_3749: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_593_3750: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%"),
    top: hp("4.78142076502732%"),
    justifyContent: "flex-start"
  },
  Text_593_3750: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_593_3751: {
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
  Text_593_3751: {
    color: "rgba(127, 127, 146, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_593_3752: {
    width: wp("78.93333333333334%"),
    minWidth: wp("78.93333333333334%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%"),
    top: hp("15.846994535519123%")
  },
  View_593_3753: {
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
  View_593_3754: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333338%"),
    top: hp("9.562841530054655%"),
    backgroundColor: "rgba(235, 90, 90, 1)"
  },
  View_593_3755: {
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
  View_593_3756: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("9.562841530054655%"),
    backgroundColor: "rgba(235, 90, 90, 1)"
  },
  View_593_3757: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333334%"),
    top: hp("9.562841530054655%"),
    backgroundColor: "rgba(235, 90, 90, 1)"
  },
  View_593_3758: {
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
  View_593_3759: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.39999999999999%"),
    top: hp("9.562841530054655%"),
    backgroundColor: "rgba(235, 90, 90, 1)"
  },
  View_557_2667: {
    width: wp("73.6%"),
    minWidth: wp("73.6%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("2.1857923497267784%")
  },
  View_561_2683: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666667%"),
    top: hp("6.010928961748636%")
  },
  View_560_2684: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
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
  View_560_2687: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_560_2687: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_561_2684: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748636%")
  },
  View_561_2685: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
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
  View_561_2687: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666664%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_561_2687: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_561_2688: {
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
  View_557_2669: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
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
  View_557_2670: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("0.5464480874316955%"),
    justifyContent: "flex-start"
  },
  Text_557_2670: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_557_2671: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666667%"),
    top: hp("0%")
  },
  View_557_2672: {
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
  View_557_2673: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("0.5464480874316955%"),
    justifyContent: "flex-start"
  },
  Text_557_2673: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_557_2674: {
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
  View_557_2675: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
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
  View_557_2676: {
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
  Text_557_2676: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1909: {
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
  View_907_1910: {
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
  View_907_1911: {
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
  ImageBackground_907_1912: {
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
  View_907_1913: {
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
  View_907_1914: {
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
  Text_907_1914: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1915: {
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
  Text_907_1915: {
    color: "rgba(235, 90, 90, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_907_1916: {
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
  View_907_1917: {
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
  ImageBackground_907_1918: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4666666666666615%")
  },
  View_907_1919: {
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
  ImageBackground_907_1920: {
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
  View_907_1921: {
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
  View_907_1922: {
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
  Text_907_1922: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1923: {
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
  Text_907_1923: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_907_1924: {
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
  View_907_1925: {
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
  ImageBackground_907_1926: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.1857923497267784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.466666666666666%")
  },
  View_907_1927: {
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
  View_907_1928: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_907_1929: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I907_1929_205_2076: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371584774%")
  },
  ImageBackground_I907_1929_205_2077: {
    width: wp("5.333333333333334%"),
    height: hp("1.8284103258059976%"),
    top: hp("0.9038289388020839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I907_1929_205_2080: {
    width: wp("0.400007692972819%"),
    height: hp("1.8013916380418455%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4666341145833286%")
  },
  ImageBackground_I907_1929_205_2083: {
    width: wp("1.954738489786784%"),
    height: hp("0.5879080360704433%"),
    top: hp("0.0013674543203556766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6893229166666686%")
  },
  View_907_1930: {
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
  Text_907_1930: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_907_1931: {
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
  ImageBackground_I907_1931_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_567_3882: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_567_3883: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_570_2848: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I570_2848_415_1172: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.53343098958333%"),
    top: hp("0.27327824160050795%")
  },
  TouchableOpacity_567_3884: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I567_3884_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27323863545403526%")
  },
  View_I567_3884_319_328: {
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
  ImageBackground_I567_3884_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3884_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I567_3884_319_333: {
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
  ImageBackground_I567_3884_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3884_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_567_3885: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I567_3885_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333658854166714%"),
    top: hp("0.2732511426581823%")
  },
  View_I567_3885_319_340: {
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
  ImageBackground_I567_3885_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3885_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3885_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126444331935204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7814453124999972%")
  },
  ImageBackground_I567_3885_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709006721204872%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0662109374999886%")
  },
  ImageBackground_I567_3885_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878405628308599%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.73287760416666%")
  },
  TouchableOpacity_567_3887: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I567_3887_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I567_3887_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3887_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_567_3889: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_567_3890: {
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
  View_557_2874: {
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
  View_557_2875: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_557_2876: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_557_2876: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_557_2877: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_557_2878: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_557_2879: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_557_2882: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5040986941811818%")
  },
  View_557_2883: {
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
  View_557_2884: {
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
  View_557_2885: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_557_2886: {
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
  View_557_2887: {
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
  View_557_2888: {
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
  View_557_2889: {
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
  View_557_2890: {
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
  ImageBackground_557_2891: {
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
