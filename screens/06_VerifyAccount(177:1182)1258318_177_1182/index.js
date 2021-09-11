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
      <View style={styles.View_177_1183}>
        <View style={styles.View_177_1184} />
      </View>
      <View style={styles.View_177_1185}>
        <View style={styles.View_177_1186}>
          <View style={styles.View_177_1187}>
            <Text style={styles.Text_177_1187}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_177_1188}>
          <View style={styles.View_177_1189}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_177_1190}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_177_1193}
            />
          </View>
          <View style={styles.View_177_1194} />
        </View>
        <View style={styles.View_177_1195}>
          <View style={styles.View_177_1196}>
            <View style={styles.View_177_1197} />
            <View style={styles.View_177_1198} />
            <View style={styles.View_177_1199} />
            <View style={styles.View_177_1200} />
          </View>
        </View>
        <View style={styles.View_177_1201}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_177_1202}
          />
        </View>
      </View>
      <View style={styles.View_177_1206}>
        <View style={styles.View_177_1207}>
          <Text style={styles.Text_177_1207}>Verify your Phone</Text>
        </View>
        <View style={styles.View_177_1208}>
          <Text style={styles.Text_177_1208}>
            Please enter the 4 digit code sent to +0123456789
          </Text>
        </View>
      </View>
      <View style={styles.View_177_1209}>
        <View style={styles.View_177_1210}>
          <View style={styles.View_177_1211}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab63/b02e/375d6bebe41ffa6bb5c72ee7f36b693b"
              }}
              style={styles.ImageBackground_177_1212}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4cc/d718/af4ec411dec1b36e47e3b70324098b11"
              }}
              style={styles.ImageBackground_177_1213}
            />
          </View>
          <View style={styles.View_177_1216}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c27/7a9d/e68c3824a0f94923bdc1005482507400"
              }}
              style={styles.ImageBackground_177_1217}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7041/7691/d96b4bbad697755f25595cdc2b2e2d9b"
              }}
              style={styles.ImageBackground_177_1218}
            />
          </View>
          <View style={styles.View_177_1221}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f1c/719a/ee731fe9e21efefbf4bf82137d96e790"
              }}
              style={styles.ImageBackground_177_1222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e46/3a97/10900cfcd392f4b32af8aa3c6d48f242"
              }}
              style={styles.ImageBackground_177_1223}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80df/66ce/fe7b22c1ea0e5662211227afdc1b2d62"
            }}
            style={styles.ImageBackground_177_1226}
          />
          <View style={styles.View_177_1227}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f377/7c57/ce425f994f15d7eab4876a647e8a1ea9"
              }}
              style={styles.ImageBackground_177_1228}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcda/3041/756b16e55b64aad2b16b2d3b8332bc87"
              }}
              style={styles.ImageBackground_177_1229}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11d7/b85c/c63681ac7e6681ed2734a2dc548f5c6b"
              }}
              style={styles.ImageBackground_177_1230}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f229/782a/9277aaeade7eef7b67e67b230df13214"
              }}
              style={styles.ImageBackground_177_1231}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1056/09c4/d564debf9dd8697afaba7722dfa499f0"
              }}
              style={styles.ImageBackground_177_1232}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7707/c181/27270a2228434904dec893a34601d924"
              }}
              style={styles.ImageBackground_177_1233}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eebe/51be/596b87cfa404fced5172d271f990360f"
              }}
              style={styles.ImageBackground_177_1234}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16ab/02ea/c33fe315f134e9fc08169973a8b1d3d7"
              }}
              style={styles.ImageBackground_177_1235}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e22/9414/ef2abdf3ac1442444bc140ca87c04943"
              }}
              style={styles.ImageBackground_177_1236}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dd3/0835/e5221cbd6bdd225853d0907b8f9063c4"
              }}
              style={styles.ImageBackground_177_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aded/70fe/e90290b13d15b379b52c16957eda7979"
              }}
              style={styles.ImageBackground_177_1238}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddb6/1035/21d0ed77fa5b9d32c0438322d2abcbc8"
              }}
              style={styles.ImageBackground_177_1239}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8f7/fdca/2f87dc05f355d684fe9137184f9c01c6"
              }}
              style={styles.ImageBackground_177_1240}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/109d/41ef/e782a5222af0486b0961cf8ca9e180e2"
              }}
              style={styles.ImageBackground_177_1241}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2219/bf48/ffb7645f81d4638f7d98ad16ddc34b5b"
              }}
              style={styles.ImageBackground_177_1242}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bc4/311b/327dcb1388157f7a02fca1705164413f"
              }}
              style={styles.ImageBackground_177_1243}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2247/1ec0/59e20f895ce224d2b7751c6df654d441"
              }}
              style={styles.ImageBackground_177_1244}
            />
          </View>
          <View style={styles.View_177_1249}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f8ee/29d3/421af852bc98d65f9e6c901480c7055b"
              }}
              style={styles.ImageBackground_177_1250}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0183/54f7/01c9b601b27a6104499a28e0ea360c65"
              }}
              style={styles.ImageBackground_177_1251}
            />
            <View style={styles.View_177_1252}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/514f/7f1e/dcd8e4b36da8ec6911d6b96aef109159"
                }}
                style={styles.ImageBackground_177_1253}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/514f/7f1e/dcd8e4b36da8ec6911d6b96aef109159"
                }}
                style={styles.ImageBackground_177_1254}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d7d/0cc8/d524842a2d5bfe3f3efdfdeb7f258181"
                }}
                style={styles.ImageBackground_177_1255}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41a1/65d7/01478ba538783238a81aea75acc4ee4b"
                }}
                style={styles.ImageBackground_177_1257}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41a1/65d7/01478ba538783238a81aea75acc4ee4b"
                }}
                style={styles.ImageBackground_177_1259}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dbe/5c4c/ceb123a16a3a6fec5c1e068d36bc4c51"
              }}
              style={styles.ImageBackground_177_1261}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a83/f83a/7898f86676e2e3cba85552bdb9ec832f"
              }}
              style={styles.ImageBackground_177_1264}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1dbe/08b0/d374274b2f9a549220e70c3c7e826b2a"
              }}
              style={styles.ImageBackground_177_1265}
            />
            <View style={styles.View_177_1266}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a6b/8dca/a03c7a8223cbe3b47d2667bf32f85e06"
                }}
                style={styles.ImageBackground_177_1267}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b3d/44a1/2e2d213c869eadc7be6f093ab5a7cfa3"
                }}
                style={styles.ImageBackground_177_1268}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1036/24f7/1e3cb54cb515ac08b503a780b41b23a0"
                }}
                style={styles.ImageBackground_177_1272}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df94/71c0/0c0b03ccc76d1ff5cd2b6842dee44d16"
              }}
              style={styles.ImageBackground_177_1275}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07ab/c9b9/fcd572abd69b16d8bae591451138cf53"
            }}
            style={styles.ImageBackground_177_1276}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1aef/37ba/7d531249ea8e4198c7e849d0f0075959"
            }}
            style={styles.ImageBackground_177_1279}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbe2/330f/fe36c536491e5ec257a1bd8b8dee7c06"
            }}
            style={styles.ImageBackground_177_1282}
          />
          <View style={styles.View_177_1285}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0100/cab5/1a924298561f110afed5a429ea11c56c"
              }}
              style={styles.ImageBackground_177_1286}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca53/3506/c00b3c076e246cbd91fb1819350881b3"
              }}
              style={styles.ImageBackground_177_1288}
            />
          </View>
          <View style={styles.View_177_1292}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1721/1e28/af9152f382a1578e1b3673f0030398ef"
              }}
              style={styles.ImageBackground_177_1293}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c7/66db/1b374bdb63cb1e5b55562f3dd841b3b8"
            }}
            style={styles.ImageBackground_177_1297}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a44e/fd18/f69bd69ee32883c648a15246ef242831"
            }}
            style={styles.ImageBackground_177_1322}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49e1/3c9d/f4433ea568d0df4972f637a894caac34"
            }}
            style={styles.ImageBackground_177_1323}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/112b/5ef3/d695be07e8c9583f2c5c74815a8906f4"
            }}
            style={styles.ImageBackground_177_1324}
          />
          <View style={styles.View_177_1328}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/060e/880e/acdc4c1a0f3fad3ebeb054a0af06543b"
              }}
              style={styles.ImageBackground_177_1329}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3bf/9e63/84c047b9ad864a460542b6b78d4e4bb4"
              }}
              style={styles.ImageBackground_177_1330}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0a1/3fa8/b0581a55c7d2d95e82c8f68dc4ad0592"
              }}
              style={styles.ImageBackground_177_1334}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_177_1338}>
        <View style={styles.View_177_1339}>
          <View style={styles.View_177_1340} />
          <View style={styles.View_177_1341}>
            <Text style={styles.Text_177_1341}>4</Text>
          </View>
        </View>
        <View style={styles.View_177_1342}>
          <View style={styles.View_177_1343} />
          <View style={styles.View_177_1344}>
            <Text style={styles.Text_177_1344}>5</Text>
          </View>
        </View>
        <View style={styles.View_177_1345}>
          <View style={styles.View_177_1346} />
          <View style={styles.View_177_1347}>
            <Text style={styles.Text_177_1347}>1</Text>
          </View>
        </View>
        <View style={styles.View_177_1348}>
          <View style={styles.View_177_1349} />
          <View style={styles.View_177_1350}>
            <Text style={styles.Text_177_1350}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_177_1351}>
        <Text style={styles.Text_177_1351}>Recent code</Text>
      </View>
      <View style={styles.View_177_1352}>
        <View style={styles.View_177_1353} />
        <View style={styles.View_177_1354}>
          <Text style={styles.Text_177_1354}>Confirm</Text>
        </View>
      </View>
      <View style={styles.View_177_1355}>
        <View style={styles.View_177_1356}>
          <View style={styles.View_I177_1356_177_1123}>
            <View style={styles.View_I177_1356_177_1124} />
          </View>
          <View style={styles.View_I177_1356_177_1125}>
            <View style={styles.View_I177_1356_177_1126} />
          </View>
          <View style={styles.View_I177_1356_177_1127}>
            <View style={styles.View_I177_1356_177_1128}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b99/977a/b3493996cf197ca9677edc8b23e88e10"
                }}
                style={styles.ImageBackground_I177_1356_177_1129}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3e/483d/f61114dc40b5ceee9a4ec60b337e0aa2"
                }}
                style={styles.ImageBackground_I177_1356_177_1136}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I177_1356_177_1137}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I177_1356_177_1138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I177_1356_177_1139}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a76f/9b4c/9388c770bde651c6e556c455307ddb06"
                }}
                style={styles.ImageBackground_I177_1356_177_1140}
              />
            </View>
            <View style={styles.View_I177_1356_177_1141}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/ef14/5ad221266f68fd001831408693e7634a"
                }}
                style={styles.ImageBackground_I177_1356_177_1142}
              />
              <View style={styles.View_I177_1356_177_1143}>
                <Text style={styles.Text_I177_1356_177_1143}>0</Text>
              </View>
            </View>
            <View style={styles.View_I177_1356_177_1144}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                }}
                style={styles.ImageBackground_I177_1356_177_1145}
              />
              <View style={styles.View_I177_1356_177_1146}>
                <Text style={styles.Text_I177_1356_177_1146}>WXYZ</Text>
              </View>
              <View style={styles.View_I177_1356_177_1147}>
                <Text style={styles.Text_I177_1356_177_1147}>9</Text>
              </View>
            </View>
            <View style={styles.View_I177_1356_177_1148}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                }}
                style={styles.ImageBackground_I177_1356_177_1149}
              />
              <View style={styles.View_I177_1356_177_1150}>
                <Text style={styles.Text_I177_1356_177_1150}>TUV</Text>
              </View>
              <View style={styles.View_I177_1356_177_1151}>
                <Text style={styles.Text_I177_1356_177_1151}>8</Text>
              </View>
            </View>
            <View style={styles.View_I177_1356_177_1152}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                }}
                style={styles.ImageBackground_I177_1356_177_1153}
              />
              <View style={styles.View_I177_1356_177_1154}>
                <Text style={styles.Text_I177_1356_177_1154}>PQRS</Text>
              </View>
              <View style={styles.View_I177_1356_177_1155}>
                <Text style={styles.Text_I177_1356_177_1155}>7</Text>
              </View>
            </View>
            <View style={styles.View_I177_1356_177_1156}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                }}
                style={styles.ImageBackground_I177_1356_177_1157}
              />
              <View style={styles.View_I177_1356_177_1158}>
                <Text style={styles.Text_I177_1356_177_1158}>MNO</Text>
              </View>
              <View style={styles.View_I177_1356_177_1159}>
                <Text style={styles.Text_I177_1356_177_1159}>6</Text>
              </View>
            </View>
            <View style={styles.View_I177_1356_177_1160}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                }}
                style={styles.ImageBackground_I177_1356_177_1161}
              />
              <View style={styles.View_I177_1356_177_1162}>
                <Text style={styles.Text_I177_1356_177_1162}>JKL</Text>
              </View>
              <View style={styles.View_I177_1356_177_1163}>
                <Text style={styles.Text_I177_1356_177_1163}>5</Text>
              </View>
            </View>
            <View style={styles.View_I177_1356_177_1164}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bc8/9aea/8d9724256090b48ce7aeda459954f17f"
                }}
                style={styles.ImageBackground_I177_1356_177_1165}
              />
              <View style={styles.View_I177_1356_177_1166}>
                <Text style={styles.Text_I177_1356_177_1166}>GHI</Text>
              </View>
              <View style={styles.View_I177_1356_177_1167}>
                <Text style={styles.Text_I177_1356_177_1167}>4</Text>
              </View>
            </View>
            <View style={styles.View_I177_1356_177_1168}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/ef14/5ad221266f68fd001831408693e7634a"
                }}
                style={styles.ImageBackground_I177_1356_177_1169}
              />
              <View style={styles.View_I177_1356_177_1170}>
                <Text style={styles.Text_I177_1356_177_1170}>DEF</Text>
              </View>
              <View style={styles.View_I177_1356_177_1171}>
                <Text style={styles.Text_I177_1356_177_1171}>3</Text>
              </View>
            </View>
            <View style={styles.View_I177_1356_177_1172}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/ef14/5ad221266f68fd001831408693e7634a"
                }}
                style={styles.ImageBackground_I177_1356_177_1173}
              />
              <View style={styles.View_I177_1356_177_1174}>
                <Text style={styles.Text_I177_1356_177_1174}>ABC</Text>
              </View>
              <View style={styles.View_I177_1356_177_1175}>
                <Text style={styles.Text_I177_1356_177_1175}>2</Text>
              </View>
            </View>
            <View style={styles.View_I177_1356_177_1176}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9011/ef14/5ad221266f68fd001831408693e7634a"
                }}
                style={styles.ImageBackground_I177_1356_177_1177}
              />
              <View style={styles.View_I177_1356_177_1178}>
                <Text style={styles.Text_I177_1356_177_1178}> </Text>
              </View>
              <View style={styles.View_I177_1356_177_1179}>
                <Text style={styles.Text_I177_1356_177_1179}>1</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_177_1183: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_177_1184: {
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
  View_177_1185: {
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
  View_177_1186: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_177_1187: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_177_1187: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_177_1188: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_177_1189: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_1190: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_177_1193: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5041070323172812%")
  },
  View_177_1194: {
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
  View_177_1195: {
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
  View_177_1196: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_177_1197: {
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
  View_177_1198: {
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
  View_177_1199: {
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
  View_177_1200: {
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
  View_177_1201: {
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
  ImageBackground_177_1202: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_177_1206: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    height: hp("11.612021857923498%"),
    minHeight: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.866666666666667%"),
    top: hp("36.20218579234973%")
  },
  View_177_1207: {
    width: wp("55.2%"),
    minWidth: wp("55.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_177_1207: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_177_1208: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606554%"),
    justifyContent: "center"
  },
  Text_177_1208: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_1209: {
    width: wp("93.60000000000001%"),
    height: hp("26.775956284153008%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%")
  },
  View_177_1210: {
    width: wp("93.60000000000001%"),
    height: hp("26.775956284153008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_177_1211: {
    width: wp("13.546742757161459%"),
    height: hp("4.697143575532841%"),
    top: hp("10.158384562841531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.13365885416667%")
  },
  ImageBackground_177_1212: {
    width: wp("10.874742635091145%"),
    height: hp("3.9480923303489477%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6720052083333172%")
  },
  ImageBackground_177_1213: {
    width: wp("12.243527221679686%"),
    height: hp("3.2651252433901927%"),
    top: hp("1.4320081700392748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_177_1216: {
    width: wp("16.147628784179688%"),
    height: hp("9.586050731888236%"),
    top: hp("4.6055361221396875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.814973958333326%")
  },
  ImageBackground_177_1217: {
    width: wp("16.147628784179688%"),
    height: hp("6.486292354396133%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_1218: {
    width: wp("13.617809041341145%"),
    height: hp("8.306686734892633%"),
    top: hp("1.279370250597676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4779296875000014%")
  },
  View_177_1221: {
    width: wp("17.35745849609375%"),
    height: hp("11.265955857240437%"),
    top: hp("4.0242679783555335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.347591145833334%")
  },
  ImageBackground_177_1222: {
    width: wp("17.35745849609375%"),
    height: hp("7.49838208891655%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_1223: {
    width: wp("13.231187947591147%"),
    height: hp("9.930763869989114%"),
    top: hp("1.335185733649249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3445963541666686%")
  },
  ImageBackground_177_1226: {
    width: wp("10.485362752278645%"),
    height: hp("5.4224254003639425%"),
    top: hp("11.804749535732581%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.052864583333335%")
  },
  View_177_1227: {
    width: wp("23.834330240885418%"),
    height: hp("24.784323687110444%"),
    top: hp("1.9198391606898912%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.856640625%")
  },
  ImageBackground_177_1228: {
    width: wp("6.231708272298177%"),
    height: hp("3.430073378516025%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.772721354166666%")
  },
  ImageBackground_177_1229: {
    width: wp("7.024288431803385%"),
    height: hp("13.766454477779199%"),
    top: hp("10.444666127689551%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.183528645833334%")
  },
  ImageBackground_177_1230: {
    width: wp("6.054132080078125%"),
    height: hp("7.327461763809287%"),
    top: hp("10.447050834614071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.178841145833331%")
  },
  ImageBackground_177_1231: {
    width: wp("8.013269551595052%"),
    height: hp("14.590433256222251%"),
    top: hp("9.964606279883881%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4473307291666657%")
  },
  ImageBackground_177_1232: {
    width: wp("10.943816121419271%"),
    height: hp("3.9520633676664425%"),
    top: hp("5.136275161159496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.284505208333336%")
  },
  ImageBackground_177_1233: {
    width: wp("5.634356689453125%"),
    height: hp("3.150488900356605%"),
    top: hp("3.234229582906421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.183528645833334%")
  },
  ImageBackground_177_1234: {
    width: wp("9.358043416341145%"),
    height: hp("6.721356397118074%"),
    top: hp("4.557375048027666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.435546875%")
  },
  ImageBackground_177_1235: {
    width: wp("2.0522483825683593%"),
    height: hp("0.9720591248058882%"),
    top: hp("3.248554500725751%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.655533854166666%")
  },
  ImageBackground_177_1236: {
    width: wp("3.862779235839844%"),
    height: hp("2.4593418413172654%"),
    top: hp("1.4317079971396858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.428645833333334%")
  },
  ImageBackground_177_1237: {
    width: wp("4.925931294759114%"),
    height: hp("1.6698033431840071%"),
    top: hp("1.25155422856899%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.587434895833333%")
  },
  ImageBackground_177_1238: {
    width: wp("3.314896901448568%"),
    height: hp("0.8123545698780831%"),
    top: hp("7.958083856301229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.51940104166667%")
  },
  ImageBackground_177_1239: {
    width: wp("4.328528340657552%"),
    height: hp("1.2443331421398725%"),
    top: hp("23.539992368937842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.307421875000001%")
  },
  ImageBackground_177_1240: {
    width: wp("4.351667785644532%"),
    height: hp("1.146408378100786%"),
    top: hp("23.637915439293028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.5333984375%")
  },
  ImageBackground_177_1241: {
    width: wp("1.072802225748698%"),
    height: hp("0.17065977463956739%"),
    top: hp("3.326365986808403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.376627604166664%")
  },
  ImageBackground_177_1242: {
    width: wp("2.299327850341797%"),
    height: hp("3.704336301876548%"),
    top: hp("7.480708888319672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.435546875%")
  },
  ImageBackground_177_1243: {
    width: wp("2.145532480875651%"),
    height: hp("1.838268868910159%"),
    top: hp("5.106608072916666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.80390625%")
  },
  ImageBackground_177_1244: {
    width: wp("5.934449768066406%"),
    height: hp("8.999918327956903%"),
    top: hp("4.56026004311817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_177_1249: {
    width: wp("45.34072672526042%"),
    height: hp("20.51176060744322%"),
    top: hp("6.192400155823087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.582161458333335%")
  },
  ImageBackground_177_1250: {
    width: wp("45.340694173177084%"),
    height: hp("17.039092642362%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_1251: {
    width: wp("37.53748372395833%"),
    height: hp("16.61098042472464%"),
    top: hp("2.0354891083931026%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9039062499999986%")
  },
  View_177_1252: {
    width: wp("35.224072265625%"),
    height: hp("17.759833830953294%"),
    top: hp("2.5609250928534824%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.046679687500003%")
  },
  ImageBackground_177_1253: {
    width: wp("0.7742561976114909%"),
    height: hp("0.3964685677179222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_1254: {
    width: wp("0.7742561976114909%"),
    height: hp("0.3964685677179222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.44980468749999%")
  },
  ImageBackground_177_1255: {
    width: wp("34.44978434244791%"),
    height: hp("0.04301121651800604%"),
    top: hp("0.17681851413080807%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38717447916666714%")
  },
  ImageBackground_177_1257: {
    width: wp("0.08395789464314779%"),
    height: hp("17.640362932382388%"),
    top: hp("0.11946881403688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3451171874999943%")
  },
  ImageBackground_177_1259: {
    width: wp("0.08395789464314779%"),
    height: hp("17.640362932382388%"),
    top: hp("0.11946881403688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.80891927083333%")
  },
  ImageBackground_177_1261: {
    width: wp("45.340694173177084%"),
    height: hp("13.900201307619856%"),
    top: hp("6.611558257556355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_1264: {
    width: wp("14.403146362304685%"),
    height: hp("0.3678066482960852%"),
    top: hp("3.967652034238389%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.545833333333327%")
  },
  ImageBackground_177_1265: {
    width: wp("21.455324300130208%"),
    height: hp("0.3678066482960852%"),
    top: hp("4.710429874274249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.019661458333331%")
  },
  View_177_1266: {
    width: wp("20.970251464843752%"),
    height: hp("1.7794430581598335%"),
    top: hp("7.1131138202271185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.439453125%")
  },
  ImageBackground_177_1267: {
    width: wp("15.52712605794271%"),
    height: hp("0.2676169077555338%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.719205729166667%")
  },
  ImageBackground_177_1268: {
    width: wp("20.970251464843752%"),
    height: hp("0.2676198391315064%"),
    top: hp("0.6997697340334703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_1272: {
    width: wp("16.119482421875002%"),
    height: hp("0.2676198391315064%"),
    top: hp("1.5118208087858598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4253906249999986%")
  },
  ImageBackground_177_1275: {
    width: wp("4.581251017252605%"),
    height: hp("1.4831154724287856%"),
    top: hp("10.205228211449795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.226757812499997%")
  },
  ImageBackground_177_1276: {
    width: wp("9.160491943359375%"),
    height: hp("3.8786822980870315%"),
    top: hp("1.4067436176571047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.237109374999996%")
  },
  ImageBackground_177_1279: {
    width: wp("5.6343541463216145%"),
    height: hp("2.2904260562417287%"),
    top: hp("15.825215324026642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4888020833333337%")
  },
  ImageBackground_177_1282: {
    width: wp("10.489821370442709%"),
    height: hp("4.007652418209555%"),
    top: hp("6.185829704576502%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.47884114583333%")
  },
  View_177_1285: {
    width: wp("37.5243896484375%"),
    height: hp("2.9233390516270705%"),
    top: hp("19.145027535860656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_1286: {
    width: wp("31.064469401041666%"),
    height: hp("2.20683389674119%"),
    top: hp("0.7165127113217196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_1288: {
    width: wp("9.361048380533854%"),
    height: hp("2.651069463927889%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.163346354166666%")
  },
  View_177_1292: {
    width: wp("9.645569864908854%"),
    height: hp("2.151903558949955%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.53567708333333%")
  },
  ImageBackground_177_1293: {
    width: wp("9.645569864908854%"),
    height: hp("2.151903558949955%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_1297: {
    width: wp("20.87834676106771%"),
    height: hp("13.04485654570366%"),
    top: hp("13.73110911885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.270703125%")
  },
  ImageBackground_177_1322: {
    width: wp("1.6524340311686199%"),
    height: hp("0.6205644763883997%"),
    top: hp("9.659513879994877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.58125%")
  },
  ImageBackground_177_1323: {
    width: wp("4.211668141682943%"),
    height: hp("2.2470119872379826%"),
    top: hp("24.44042768634734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.38834635416666%")
  },
  ImageBackground_177_1324: {
    width: wp("6.016819254557292%"),
    height: hp("1.94323271350131%"),
    top: hp("24.784809383538253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7611979166666663%")
  },
  View_177_1328: {
    width: wp("9.393702189127605%"),
    height: hp("1.9011266895982086%"),
    top: hp("23.983814677254102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.779036458333334%")
  },
  ImageBackground_177_1329: {
    width: wp("9.393702189127605%"),
    height: hp("1.9011266895982086%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_177_1330: {
    width: wp("6.128764851888021%"),
    height: hp("0.3870898257187807%"),
    top: hp("0.3487008516905732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0027994791666686%")
  },
  ImageBackground_177_1334: {
    width: wp("6.128764851888021%"),
    height: hp("0.38708976057709243%"),
    top: hp("1.1010341956967196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0027994791666686%")
  },
  View_177_1338: {
    width: wp("69.33333333333334%"),
    minWidth: wp("69.33333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666667%"),
    top: hp("50.54644808743169%")
  },
  View_177_1339: {
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
  View_177_1340: {
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
  View_177_1341: {
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
  Text_177_1341: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_177_1342: {
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
  View_177_1343: {
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
  View_177_1344: {
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
  Text_177_1344: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_177_1345: {
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
  View_177_1346: {
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
  View_177_1347: {
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
  Text_177_1347: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_177_1348: {
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
  View_177_1349: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(102, 90, 240, 1)",
    borderWidth: 2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_177_1350: {
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
  Text_177_1350: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_177_1351: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    top: hp("58.46994535519126%"),
    justifyContent: "flex-start"
  },
  Text_177_1351: {
    color: "rgba(102, 90, 240, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_1352: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("64.20765027322405%")
  },
  View_177_1353: {
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
  View_177_1354: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("2.0491803278688536%"),
    justifyContent: "flex-start"
  },
  Text_177_1354: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_177_1355: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.17486338797814%")
  },
  View_177_1356: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(204, 206, 211, 1)"
  },
  View_I177_1356_177_1123: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I177_1356_177_1124: {
    width: wp("100%"),
    height: hp("39.75409836065574%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(209, 213, 219, 1)"
  },
  View_I177_1356_177_1125: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.10928961748634%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I177_1356_177_1126: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(35, 36, 64, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I177_1356_177_1127: {
    flexGrow: 1,
    width: wp("96.8%"),
    height: hp("28.278688524590162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6%"),
    top: hp("0.8196721311475414%")
  },
  View_I177_1356_177_1128: {
    width: wp("6.400015258789063%"),
    height: hp("2.458269869694944%"),
    top: hp("23.770491803278702%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666667%")
  },
  ImageBackground_I177_1356_177_1129: {
    width: wp("6.400015258789063%"),
    height: hp("2.458269869694944%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I177_1356_177_1136: {
    width: wp("1.8888968149820964%"),
    height: hp("0.9670806061374685%"),
    top: hp("0.7448957266051792%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9251302083333286%")
  },
  ImageBackground_I177_1356_177_1137: {
    width: wp("0.31888964970906575%"),
    height: hp("0.16337037086486816%"),
    top: hp("0.7199146708504003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.540429687499994%")
  },
  ImageBackground_I177_1356_177_1138: {
    width: wp("0.31906766891479493%"),
    height: hp("0.16337037086486816%"),
    top: hp("1.5713384242657042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8782552083333286%")
  },
  ImageBackground_I177_1356_177_1139: {
    width: wp("0.31889896392822265%"),
    height: hp("0.16354799596338324%"),
    top: hp("1.5713884530823066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.543164062499997%")
  },
  ImageBackground_I177_1356_177_1140: {
    width: wp("0.31889896392822265%"),
    height: hp("0.1635482891009805%"),
    top: hp("0.7199646996670026%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8811848958333286%")
  },
  View_I177_1356_177_1141: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("21.99453551912569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I177_1356_177_1142: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I177_1356_177_1143: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.9562841530054698%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1143: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I177_1356_177_1144: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("14.617486338797818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I177_1356_177_1145: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I177_1356_177_1146: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478815797899586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1146: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I177_1356_177_1147: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1395803983094197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1147: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I177_1356_177_1148: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("14.617486338797818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I177_1356_177_1149: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I177_1356_177_1150: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478815797899586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1150: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I177_1356_177_1151: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1395803983094197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1151: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I177_1356_177_1152: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("14.617486338797818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I177_1356_177_1153: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I177_1356_177_1154: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478815797899586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1154: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I177_1356_177_1155: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1395803983094197%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1155: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I177_1356_177_1156: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I177_1356_177_1157: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I177_1356_177_1158: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478815797899586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1158: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I177_1356_177_1159: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.13958039830943392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1159: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I177_1356_177_1160: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I177_1356_177_1161: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I177_1356_177_1162: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478815797899586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1162: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I177_1356_177_1163: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.13958039830943392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1163: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I177_1356_177_1164: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I177_1356_177_1165: {
    width: wp("31.2%"),
    height: hp("6.420765027322404%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I177_1356_177_1166: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("4.0478815797899586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1166: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I177_1356_177_1167: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.13958039830943392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1167: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I177_1356_177_1168: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.60000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I177_1356_177_1169: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I177_1356_177_1170: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1170: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I177_1356_177_1171: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1171: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I177_1356_177_1172: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I177_1356_177_1173: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I177_1356_177_1174: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1174: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I177_1356_177_1175: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1175: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_I177_1356_177_1176: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I177_1356_177_1177: {
    width: wp("31.2%"),
    height: hp("6.284153005464481%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I177_1356_177_1178: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("3.961748633879779%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1178: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I177_1356_177_1179: {
    flexGrow: 1,
    width: wp("31.2%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I177_1356_177_1179: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
