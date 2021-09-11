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
      <TouchableOpacity
        style={styles.TouchableOpacity_514_2646}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("598_4183"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9df/a398/bdb0f06f971f3a454b8f9687787ce011"
          }}
          style={styles.ImageBackground_514_2647}
        />
        <View style={styles.View_514_2648}>
          <Text style={styles.Text_514_2648}>sWIPE TO tRANSFER</Text>
        </View>
        <View style={styles.View_514_2649}>
          <View style={styles.View_514_2650} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57ed/741a/5b1e0e24c78be26438ab3bf217f21360"
            }}
            style={styles.ImageBackground_514_2651}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.View_374_1573}>
        <View style={styles.View_373_700} />
        <View style={styles.View_374_707}>
          <View style={styles.View_374_706} />
          <View style={styles.View_374_705} />
          <View style={styles.View_374_1534}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63b3/a73b/8c467659d1c748cee6b2767e08d5d03d"
              }}
              style={styles.ImageBackground_374_1535}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c83/0765/d055ce8c3eb71e013fa35ef576cc0ec3"
              }}
              style={styles.ImageBackground_374_1536}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0d9/5194/865c6bb6f45ab9bb182212de4da0950b"
              }}
              style={styles.ImageBackground_374_1540}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e79/1284/65efe96c82c85a072b9ccec2230440ac"
              }}
              style={styles.ImageBackground_374_1541}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac8d/abd0/407169868bc3f14244fe40ad7470e6fa"
              }}
              style={styles.ImageBackground_374_1542}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f58/186d/87010612c3e8f82efaac4ce82d3d25fa"
              }}
              style={styles.ImageBackground_374_1543}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7495/2691/4ee42c2667becd4bb5fdb3b88eb11321"
              }}
              style={styles.ImageBackground_374_1544}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a445/8d5a/7918d710ad74c6931126f658e9b41b80"
              }}
              style={styles.ImageBackground_374_1545}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7495/2691/4ee42c2667becd4bb5fdb3b88eb11321"
              }}
              style={styles.ImageBackground_374_1546}
            />
            <View style={styles.View_374_1547}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83d3/6cf4/ef281ddb2db4dec40eea20bf622524ed"
                }}
                style={styles.ImageBackground_374_1548}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33da/3bc9/a526ac51681642f9f6ca3c3b7d8a31e9"
                }}
                style={styles.ImageBackground_374_1549}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a3/73ee/162b60e5f77e6b1ce380dde8eabb3a96"
                }}
                style={styles.ImageBackground_374_1550}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e74/1740/0ad1115db3969e95ba5cd22b4617981d"
                }}
                style={styles.ImageBackground_374_1551}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45ca/3365/71fe8e07633ee5692af499dd4edc1f63"
                }}
                style={styles.ImageBackground_374_1552}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a2f/152c/e2f0eaedde13d39609df33b49a658ea3"
                }}
                style={styles.ImageBackground_374_1553}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19e0/6885/bd95069e9e8b348f632bae0d5a70ad84"
                }}
                style={styles.ImageBackground_374_1554}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b03c/9690/441ed076247ccba0eeb0fd3cfa9aeab4"
                }}
                style={styles.ImageBackground_374_1555}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad33/659c/33381eac40061641b81f19d65a13ad9f"
                }}
                style={styles.ImageBackground_374_1556}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3346/ef1a/b0324afa6201b230a5f14281e88d2fb2"
                }}
                style={styles.ImageBackground_374_1557}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33da/3bc9/a526ac51681642f9f6ca3c3b7d8a31e9"
                }}
                style={styles.ImageBackground_374_1558}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6949/555f/124c6764bb5b95e105ba3b45da9ce391"
                }}
                style={styles.ImageBackground_374_1559}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2585/132a/f77b9e9ed1d8eb2db2004d2e88d0db5b"
                }}
                style={styles.ImageBackground_374_1560}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a48/42b8/00736596aa1dea50f6814b2d8df7e762"
                }}
                style={styles.ImageBackground_374_1561}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4258/c8a6/e6be612de737697ff7399403818085f9"
                }}
                style={styles.ImageBackground_374_1562}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b5b/8898/30a5fed32bcab8294229d088f9412981"
                }}
                style={styles.ImageBackground_374_1563}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c30/c3a4/078dfe380f45a5cb8382f0f9b86a4a99"
                }}
                style={styles.ImageBackground_374_1564}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_374_1569}>
          <View style={styles.View_374_704} />
          <View style={styles.View_374_1407}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30ed/4e95/7b56125859e652b1e22ef417c7e0d40c"
              }}
              style={styles.ImageBackground_374_1408}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7433/893d/d8c18816567ae6fa6ee46d4d460b9edf"
              }}
              style={styles.ImageBackground_374_1409}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc03/7672/46b0ea9a4a94870282476aa563b7c639"
              }}
              style={styles.ImageBackground_374_1410}
            />
            <View style={styles.View_374_1412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ee/7c2c/945f9ca239a03824fbf1df6345c5bea5"
                }}
                style={styles.ImageBackground_374_1413}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e5c/1297/72e7de38f80f5a2234c5e81faa84f8e7"
                }}
                style={styles.ImageBackground_374_1414}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72ad/6920/dc8e961f6215cfc7570d08fda71c48b2"
                }}
                style={styles.ImageBackground_374_1415}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/980d/cfff/1dd2304b7477f653ea74d7d918f2ac78"
                }}
                style={styles.ImageBackground_374_1416}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bda/1b32/f51bd0c74760ac5cf0ccaf370a7bc3bc"
                }}
                style={styles.ImageBackground_374_1417}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40b0/ada9/bc654896050ee729b3ce0e54b9f2c3cd"
                }}
                style={styles.ImageBackground_374_1418}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe6/2f4d/8095b8405be45bd74678ef7e1bd1c05b"
                }}
                style={styles.ImageBackground_374_1419}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0abc/367c/bd8cb36d0727dec342fe1cf135347427"
                }}
                style={styles.ImageBackground_374_1420}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/634a/004a/da9ac1c54a4fd6edc2ace9c733dd7e81"
                }}
                style={styles.ImageBackground_374_1421}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f536/3b36/a66c833cf1a1fa93c607a16def9d2b2b"
                }}
                style={styles.ImageBackground_374_1422}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cd8/9573/004e26ea03e61d10c1ce028557ee88b5"
                }}
                style={styles.ImageBackground_374_1423}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae62/d7e3/c387c4b92981091ab916852c8f44bf20"
                }}
                style={styles.ImageBackground_374_1424}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d45/bf02/5b517b118dfd93160eb8a828df0c0eab"
              }}
              style={styles.ImageBackground_374_1427}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6460/f51a/f61beba4d712eb7e338d05c298035b83"
              }}
              style={styles.ImageBackground_374_1428}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8957/ebf4/c7eb0fe561e9bfd04dd744b9d60f7adc"
              }}
              style={styles.ImageBackground_374_1429}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/289d/39de/77162eba8ef5ba373fdf5709be200884"
              }}
              style={styles.ImageBackground_374_1432}
            />
            <View style={styles.View_374_1433}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85ce/310d/efc9bf8a19ef5f025dd39748efafef11"
                }}
                style={styles.ImageBackground_374_1434}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1349/4e3d/4a970327a317873f108bd2ba782e347a"
                }}
                style={styles.ImageBackground_374_1437}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dcc2/b138/9bc60a4055baf5ca8a35989dd4426ca4"
                }}
                style={styles.ImageBackground_374_1440}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb0d/899e/2aa8d10cef0a395c905abdffb07c27e7"
                }}
                style={styles.ImageBackground_374_1443}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b8e/d720/26613954f711d69ca840362c7543ebce"
                }}
                style={styles.ImageBackground_374_1446}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b85/ac84/589ab51d03c694908f439045257a8b4d"
                }}
                style={styles.ImageBackground_374_1449}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9cb/5295/7c1cf3d0013f4153dd894647d463b702"
                }}
                style={styles.ImageBackground_374_1452}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9cb/5295/7c1cf3d0013f4153dd894647d463b702"
                }}
                style={styles.ImageBackground_374_1455}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9cb/5295/7c1cf3d0013f4153dd894647d463b702"
                }}
                style={styles.ImageBackground_374_1458}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5a8/9e69/51223808e5403ec8e9297dcc76f28c6e"
              }}
              style={styles.ImageBackground_374_1461}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7240/8464/efc130db222a11e5e5f1b3bf3ba51b71"
              }}
              style={styles.ImageBackground_374_1462}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35ba/1f97/af490b76d29af167d6a12c2dacea43cb"
              }}
              style={styles.ImageBackground_374_1463}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cf5/1d97/f6311fd8ee127a604ff79f7b47cf1e39"
              }}
              style={styles.ImageBackground_374_1464}
            />
          </View>
        </View>
        <View style={styles.View_374_1568}>
          <View style={styles.View_374_703} />
          <View style={styles.View_374_1187}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8639/a18e/b60d8acbebedff7bf0225b215eb4b851"
              }}
              style={styles.ImageBackground_374_1188}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c04f/d69f/b59f220e2951a773b19b3c53fada3ed1"
              }}
              style={styles.ImageBackground_374_1189}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f11/6294/54c9e321eb0ea8818b3ad881671c110d"
              }}
              style={styles.ImageBackground_374_1190}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b493/8809/6d3d45fb0daa4121f1390db5500adff3"
              }}
              style={styles.ImageBackground_374_1191}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be63/69ac/439c6d864266f760a88b9a35cdc42d43"
              }}
              style={styles.ImageBackground_374_1192}
            />
            <View style={styles.View_374_1193}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f2/14ca/cec7dda25386d0111c7c6371ddb0a726"
                }}
                style={styles.ImageBackground_374_1194}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1874/686e/d0fc5c2252471375fec3fb90c62d4c66"
                }}
                style={styles.ImageBackground_374_1195}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c56/98be/2e929b5c1eb29f00ffcb838eff59556e"
              }}
              style={styles.ImageBackground_374_1198}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2eb/47f7/9cd741f1e905ab82f9d33eaf08d6b288"
              }}
              style={styles.ImageBackground_374_1201}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f99e/131e/a81e1e6015d3b25226b3b0e80c541168"
              }}
              style={styles.ImageBackground_374_1204}
            />
            <View style={styles.View_374_1207}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4549/a8c3/c87cee4572c69bf267d4a4566b28b756"
                }}
                style={styles.ImageBackground_374_1208}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90a1/94dd/d48178e1ca7b9adb2f5b72e751fd24d1"
                }}
                style={styles.ImageBackground_374_1209}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e85/7e8a/3fb366c8b0a997668c0ac3e3ffcb6db0"
                }}
                style={styles.ImageBackground_374_1210}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b732/4ffd/ec9b1da3fc10645442c41563281aa982"
              }}
              style={styles.ImageBackground_374_1213}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f0b/b9c7/5623a52a895442e3ea0b369aed61efb6"
              }}
              style={styles.ImageBackground_374_1214}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05a7/7c07/739e2b9c53b32ba3bce5df0005f23bde"
              }}
              style={styles.ImageBackground_374_1215}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41a0/ecec/62972d575817ca22ec00dccfcb834c85"
              }}
              style={styles.ImageBackground_374_1216}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40bb/e472/38bdd207f03976b8ea0d7fe935f89578"
              }}
              style={styles.ImageBackground_374_1219}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fd7/2cb3/8e142f07a984ad02fdd9aa966850dac4"
              }}
              style={styles.ImageBackground_374_1222}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c07/06cd/ac4aecc3926a7b8f6a65d0eeb706ac65"
              }}
              style={styles.ImageBackground_374_1223}
            />
            <View style={styles.View_374_1226}>
              <View style={styles.View_374_1227}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ddb/9386/6a5aa8179ea06b25e2f0247bfb445f7d"
                  }}
                  style={styles.ImageBackground_374_1228}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e31e/9aa0/ae8cba705ace7fd42e76b12c308fdedb"
                  }}
                  style={styles.ImageBackground_374_1229}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b277/6557/e29c5f1be812e6d073e40e0e546cd76b"
                  }}
                  style={styles.ImageBackground_374_1230}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40c8/dc9c/a0b9356430e27d8b4e13dd2d292dfa00"
                  }}
                  style={styles.ImageBackground_374_1231}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3774/d966/dbd0ae58f5b6feb048027cc5897682bb"
                  }}
                  style={styles.ImageBackground_374_1232}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe71/5c63/f68064267585dae111bdab4726a4aa60"
                  }}
                  style={styles.ImageBackground_374_1233}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a4/7696/89ff557df0456c8fa3121b011f13151d"
                  }}
                  style={styles.ImageBackground_374_1234}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01af/52f1/1666c62de0d0abd402d709bb39b18bf3"
                  }}
                  style={styles.ImageBackground_374_1235}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78de/52da/e4b4e354de92927980f41e05abd21aa2"
                  }}
                  style={styles.ImageBackground_374_1239}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dca/0db8/774f2825fa9e08c9b61f910dd9c8f83c"
                  }}
                  style={styles.ImageBackground_374_1240}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dca/0db8/774f2825fa9e08c9b61f910dd9c8f83c"
                  }}
                  style={styles.ImageBackground_374_1241}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0df/f73a/c81e0f9c8f59cbd92476455f8094e38b"
                  }}
                  style={styles.ImageBackground_374_1242}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5949/a0e9/a2c39d77c7e75103d8ad2df34d4b224d"
                  }}
                  style={styles.ImageBackground_374_1243}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a9d/e89b/441088388e36f7db10e418eabefba8dc"
                  }}
                  style={styles.ImageBackground_374_1244}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13e0/b6c3/a0e1ad48393ccb1ad1ac61e4d163d68e"
                  }}
                  style={styles.ImageBackground_374_1245}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c397/adda/3f0957f1a066e44a68c91ce744df653e"
                  }}
                  style={styles.ImageBackground_374_1246}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8cdc/d4fe/e74bc5916777ef34256b6f57ceb5cfeb"
                  }}
                  style={styles.ImageBackground_374_1247}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a445/8d5a/7918d710ad74c6931126f658e9b41b80"
                  }}
                  style={styles.ImageBackground_374_1248}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a445/8d5a/7918d710ad74c6931126f658e9b41b80"
                  }}
                  style={styles.ImageBackground_374_1249}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a445/8d5a/7918d710ad74c6931126f658e9b41b80"
                  }}
                  style={styles.ImageBackground_374_1250}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a445/8d5a/7918d710ad74c6931126f658e9b41b80"
                  }}
                  style={styles.ImageBackground_374_1251}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d4c/6bcd/be6f06b0c73907f606bb9a28ff19d5b4"
                  }}
                  style={styles.ImageBackground_374_1252}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a445/8d5a/7918d710ad74c6931126f658e9b41b80"
                  }}
                  style={styles.ImageBackground_374_1253}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a445/8d5a/7918d710ad74c6931126f658e9b41b80"
                  }}
                  style={styles.ImageBackground_374_1254}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/becb/6155/8de3678dc3becb8c022a4ef172b847dd"
                  }}
                  style={styles.ImageBackground_374_1255}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac97/24a9/e744b8d6d2561b23af3b729245b8fb50"
                  }}
                  style={styles.ImageBackground_374_1258}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c4/3c07/1eb617c85ff3dc6aea9f5b8ae19ff420"
                  }}
                  style={styles.ImageBackground_374_1261}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf51/6d0e/3ea1dd39a680a3f1323d3358b0e7d36e"
                  }}
                  style={styles.ImageBackground_374_1262}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf51/6d0e/3ea1dd39a680a3f1323d3358b0e7d36e"
                  }}
                  style={styles.ImageBackground_374_1263}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf51/6d0e/3ea1dd39a680a3f1323d3358b0e7d36e"
                  }}
                  style={styles.ImageBackground_374_1264}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd8d/7c88/50bf42f0eca708cdd5f11f5c8528aa69"
                  }}
                  style={styles.ImageBackground_374_1265}
                />
                <View style={styles.View_374_1270}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e54/680a/762197bc225cee1199114c3af0e8390a"
                    }}
                    style={styles.ImageBackground_374_1271}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b68/53a8/6871e9c9664520a367f285df9a2f0b34"
                    }}
                    style={styles.ImageBackground_374_1272}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a9d/e89b/441088388e36f7db10e418eabefba8dc"
                    }}
                    style={styles.ImageBackground_374_1275}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad2e/5b0f/6edb98360524a10fd8c3645dbe7220ae"
                    }}
                    style={styles.ImageBackground_374_1276}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15e5/71ab/aeb77d22d193522e9803ee8e5067fa2e"
                    }}
                    style={styles.ImageBackground_374_1277}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7495/2691/4ee42c2667becd4bb5fdb3b88eb11321"
                    }}
                    style={styles.ImageBackground_374_1278}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7495/2691/4ee42c2667becd4bb5fdb3b88eb11321"
                    }}
                    style={styles.ImageBackground_374_1279}
                  />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6911/0629/069a7789ce4029ffe7164f34bfe38364"
              }}
              style={styles.ImageBackground_374_1280}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a51b/f59d/ddc491183e57bd437c418934ca409cb9"
              }}
              style={styles.ImageBackground_374_1281}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e28/739c/c70f2e0b47bd454ca31a68006f6c5e58"
              }}
              style={styles.ImageBackground_374_1282}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7809/5ee1/c9a489c937011a45174b5c15c9592afa"
              }}
              style={styles.ImageBackground_374_1283}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a445/8d5a/7918d710ad74c6931126f658e9b41b80"
              }}
              style={styles.ImageBackground_374_1284}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a445/8d5a/7918d710ad74c6931126f658e9b41b80"
              }}
              style={styles.ImageBackground_374_1285}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e654/2b45/448cc345176a687bd3218b7016017005"
              }}
              style={styles.ImageBackground_374_1286}
            />
          </View>
        </View>
        <View style={styles.View_374_1567}>
          <View style={styles.View_374_708} />
          <View style={styles.View_374_820}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc6/ca2f/66e3485b8d4f16f844837b2273baf96c"
              }}
              style={styles.ImageBackground_374_821}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e067/91f5/3ea43eb87e2ccd3ab2281b2769682796"
              }}
              style={styles.ImageBackground_374_822}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33c1/515a/aecf96b7c82b4ca082d5b64f72b634fe"
              }}
              style={styles.ImageBackground_374_823}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5fa/c9d1/6e2c6ca236b05e7406173a5b965d2b3c"
              }}
              style={styles.ImageBackground_374_824}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1634/90bd/03d655f944db742ce8111b0c6f124e18"
              }}
              style={styles.ImageBackground_374_825}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3b4/a1f4/357bc5e51fc29b999223448da370bb3c"
              }}
              style={styles.ImageBackground_374_826}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73e7/d653/5cddf6a519ec8e78430232d2b2ed5439"
              }}
              style={styles.ImageBackground_374_827}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c37/09d4/92b1561b7db6cd2060d76a3b6ecc51a3"
              }}
              style={styles.ImageBackground_374_828}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53b9/464e/32a18f21ccc3952d7000ec121672fd69"
              }}
              style={styles.ImageBackground_374_829}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6a2/66f7/193e5bb936fda3baeea19aebcb64c9ed"
              }}
              style={styles.ImageBackground_374_830}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/656e/fb79/b69ae9ec34a31d2edfd4312f4aa92ce0"
              }}
              style={styles.ImageBackground_374_831}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4629/51e8/3f494d55f39145a5b928e5918263c75d"
              }}
              style={styles.ImageBackground_374_832}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/047d/f3f7/13b709f45db097a15487bba4265cfacf"
              }}
              style={styles.ImageBackground_374_833}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cca/c8aa/a9c1961d5f1338d1af67fe99a87d6dfb"
              }}
              style={styles.ImageBackground_374_834}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f63/6efb/9443927110d095a9b31552e903fa8bc6"
              }}
              style={styles.ImageBackground_374_835}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3592/15a3/ad7fdfc66a79fc3c2b35dd85a83676d6"
              }}
              style={styles.ImageBackground_374_836}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ed0/68e2/423b27011f141d5d4e5f508c2c870387"
              }}
              style={styles.ImageBackground_374_837}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d960/1cb1/0e8863b5612dc895378337e7d746b5ed"
              }}
              style={styles.ImageBackground_374_838}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c38/8176/18ba3308e0f2d69636430db336770db3"
              }}
              style={styles.ImageBackground_374_839}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96da/0473/8a4dd73dcf07775b8efea804d24f7231"
              }}
              style={styles.ImageBackground_374_840}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a354/b8f0/6c0b154e45a4511ffc225960514af660"
              }}
              style={styles.ImageBackground_374_841}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48ba/3c23/ac70367bc088f7c0649220acd8952f81"
              }}
              style={styles.ImageBackground_374_842}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45e0/5a69/072a7eb187a241270d5eda56163acb33"
              }}
              style={styles.ImageBackground_374_845}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05cd/1d3e/bc3b337937906763ad81e689dd578bd1"
              }}
              style={styles.ImageBackground_374_846}
            />
          </View>
        </View>
        <View style={styles.View_373_701}>
          <Text style={styles.Text_373_701}>greeting cards</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_374_1572}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("373_685"))
        }
      >
        <View style={styles.View_373_685} />
        <View style={styles.View_385_903}>
          <Text style={styles.Text_385_903}>Loan Payment</Text>
        </View>
        <View style={styles.View_373_694}>
          <Text style={styles.Text_373_694}>transfer content</Text>
        </View>
        <View style={styles.View_373_699} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_374_1571}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("373_684"))
        }
      >
        <View style={styles.View_373_684} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c46/a639/a7633cdc166095c37ed48c26fef1e6b8"
          }}
          style={styles.ImageBackground_373_687}
        />
        <View style={styles.View_373_690}>
          <Text style={styles.Text_373_690}>$ 12,00.00</Text>
        </View>
        <View style={styles.View_373_691} />
        <View style={styles.View_373_686}>
          <Text style={styles.Text_373_686}>Cash (balance $ 12,769.00) </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_372_1014}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("372_1015"))
        }
      >
        <View style={styles.View_372_1015} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a069/3fb5/e4e74ee89b34d3d164bcb62e30281fce"
          }}
          style={styles.ImageBackground_577_3410}
        />
        <View style={styles.View_375_657}>
          <View style={styles.View_373_664} />
        </View>
        <View style={styles.View_376_658}>
          <View style={styles.View_373_668}>
            <Text style={styles.Text_373_668}>505-287-8051</Text>
          </View>
          <View style={styles.View_373_669}>
            <Text style={styles.Text_373_669}>Irene Perry</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_595_5104}>
        <View style={styles.View_577_3409} />
        <View style={styles.View_595_5105} />
        <View style={styles.View_595_5106}>
          <Text style={styles.Text_595_5106}>Tranfer by wallet</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_595_5107}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("371_558"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I595_5107_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_372_946}>
        <View style={styles.View_372_947}>
          <View style={styles.View_372_948}>
            <Text style={styles.Text_372_948}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_372_949}>
          <View style={styles.View_372_950}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_372_951}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_372_954}
            />
          </View>
          <View style={styles.View_372_955} />
        </View>
        <View style={styles.View_372_956}>
          <View style={styles.View_372_957}>
            <View style={styles.View_372_958} />
            <View style={styles.View_372_959} />
            <View style={styles.View_372_960} />
            <View style={styles.View_372_961} />
          </View>
        </View>
        <View style={styles.View_372_962}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_372_963}
          />
        </View>
      </View>
      <View style={styles.View_583_2857}>
        <View style={styles.View_583_2858} />
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2859}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I583_2859_319_327}>
            <View style={styles.View_I583_2859_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I583_2859_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I583_2859_319_330}
              />
            </View>
            <View style={styles.View_I583_2859_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I583_2859_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I583_2859_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2860}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I583_2860_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I583_2860_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1793/b719/a1aa755f1210d696f8851d8fababc303"
              }}
              style={styles.ImageBackground_I583_2860_319_486}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2861}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("235_461"))
          }
        >
          <View style={styles.View_I583_2861_319_339}>
            <View style={styles.View_I583_2861_319_340}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f236/c56c/a59d245c2588d42c22da68c064fd99f9"
                }}
                style={styles.ImageBackground_I583_2861_319_341}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aafa/dfd0/7f51a1a41d0ec47a3496ebcdd53a0eff"
                }}
                style={styles.ImageBackground_I583_2861_319_342}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3902/bcb1/fcb9a5e496eff192625f71f4e177ac56"
              }}
              style={styles.ImageBackground_I583_2861_319_345}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I583_2861_319_346}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ba3/f0df/04e51015679d7c66d1453ae7c070bb5b"
              }}
              style={styles.ImageBackground_I583_2861_319_347}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_583_2862}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <View style={styles.View_I583_2862_319_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
              }}
              style={styles.ImageBackground_I583_2862_319_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cb/7134/60991c3b1f7388abbaaac49119c40fb5"
              }}
              style={styles.ImageBackground_I583_2862_319_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
              }}
              style={styles.ImageBackground_I583_2862_319_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f6/d981/cbf2cafa04251ce782f812db1d542238"
              }}
              style={styles.ImageBackground_I583_2862_319_323}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_583_2863}>
          <View style={styles.View_583_2864} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  TouchableOpacity_514_2646: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("79.09836065573771%")
  },
  ImageBackground_514_2647: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_514_2648: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_514_2648: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_514_2649: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("1.0928961748633839%")
  },
  View_514_2650: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_514_2651: {
    width: wp("6.2%"),
    height: hp("3.1762295081967213%"),
    top: hp("2.100409836065566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5666666666666664%")
  },
  View_374_1573: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.551912568306015%")
  },
  View_373_700: {
    width: wp("100%"),
    height: hp("20.081967213114755%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_374_707: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.4%"),
    top: hp("0%")
  },
  View_374_706: {
    width: wp("13.600000000000001%"),
    height: hp("20.081967213114755%"),
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
  View_374_705: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    height: hp("20.081967213114755%"),
    minHeight: hp("20.081967213114755%"),
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
  View_374_1534: {
    width: wp("17.333333333333336%"),
    height: hp("8.879781420765028%"),
    top: hp("8.060109289617479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_374_1535: {
    width: wp("15.013452148437501%"),
    height: hp("6.482164977026768%"),
    top: hp("1.1958137887423135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1555338541666629%")
  },
  ImageBackground_374_1536: {
    width: wp("14.86032511393229%"),
    height: hp("6.6219147437257195%"),
    top: hp("1.019670663635587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0479166666666657%")
  },
  ImageBackground_374_1540: {
    width: wp("1.7516311645507814%"),
    height: hp("2.2818901499763866%"),
    top: hp("4.187978942537569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.611002604166671%")
  },
  ImageBackground_374_1541: {
    width: wp("1.3901000976562499%"),
    height: hp("0.3002138085704032%"),
    top: hp("3.0112678235997237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5854166666666742%")
  },
  ImageBackground_374_1542: {
    width: wp("0.893988037109375%"),
    height: hp("0.63243876389467%"),
    top: hp("3.168875272156768%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.197916666666671%")
  },
  ImageBackground_374_1543: {
    width: wp("1.7637674967447916%"),
    height: hp("0.5976280879453232%"),
    top: hp("2.4918352971311464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.426497395833337%")
  },
  ImageBackground_374_1544: {
    width: wp("0.14734903971354166%"),
    height: hp("0.08875372631302297%"),
    top: hp("2.5857477240223687%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.789778645833323%")
  },
  ImageBackground_374_1545: {
    width: wp("0.029455566406249998%"),
    height: hp("0.008815969722192795%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.630924479166666%")
  },
  ImageBackground_374_1546: {
    width: wp("0.16184488932291666%"),
    height: hp("0.09471757815835254%"),
    top: hp("2.829696571892086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.077929687500003%")
  },
  View_374_1547: {
    width: wp("14.860297648111978%"),
    height: hp("6.674271463696423%"),
    top: hp("1.019670663635587%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0479166666666657%")
  },
  ImageBackground_374_1548: {
    width: wp("0.7420308430989583%"),
    height: hp("0.16752748541493234%"),
    top: hp("2.0076897626366232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.662955729166669%")
  },
  ImageBackground_374_1549: {
    width: wp("0.20552571614583331%"),
    height: hp("0.05601090811640839%"),
    top: hp("1.972786324923156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.127473958333326%")
  },
  ImageBackground_374_1550: {
    width: wp("3.8900675455729163%"),
    height: hp("2.1468133874278252%"),
    top: hp("2.152106279883874%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.612174479166669%")
  },
  ImageBackground_374_1551: {
    width: wp("1.7226771036783854%"),
    height: hp("3.328554226401074%"),
    top: hp("2.6261293171533495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0506510416666686%")
  },
  ImageBackground_374_1552: {
    width: wp("5.367499796549479%"),
    height: hp("2.232202154691102%"),
    top: hp("3.2202381905310844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.875195312499997%")
  },
  ImageBackground_374_1553: {
    width: wp("3.519458262125651%"),
    height: hp("4.063367583061177%"),
    top: hp("2.610912218771354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.09322916666666003%")
  },
  ImageBackground_374_1554: {
    width: wp("0.26019694010416666%"),
    height: hp("0.1729941758953157%"),
    top: hp("1.6769075654243508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.669270833333343%")
  },
  ImageBackground_374_1555: {
    width: wp("3.455027262369792%"),
    height: hp("1.2580850736691%"),
    top: hp("5.027454146921961%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.179036458333329%")
  },
  ImageBackground_374_1556: {
    width: wp("0.054461669921875%"),
    height: hp("0.10627684046010501%"),
    top: hp("1.6697617827868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.273632812499997%")
  },
  ImageBackground_374_1557: {
    width: wp("0.051068115234375%"),
    height: hp("0.07359056524891672%"),
    top: hp("1.4818535476434462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.292838541666669%")
  },
  ImageBackground_374_1558: {
    width: wp("0.06849975585937501%"),
    height: hp("0.07922037051675097%"),
    top: hp("1.4842716071123547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.451822916666671%")
  },
  ImageBackground_374_1559: {
    width: wp("0.08541056315104166%"),
    height: hp("0.1420917406759627%"),
    top: hp("1.6914075841017748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.462304687499994%")
  },
  ImageBackground_374_1560: {
    width: wp("0.32579345703125%"),
    height: hp("0.06556589095318904%"),
    top: hp("1.5700043224897584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933268229166671%")
  },
  ImageBackground_374_1561: {
    width: wp("3.9736328125%"),
    height: hp("0.39597026637343113%"),
    top: hp("5.851395403752569%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.321093750000003%")
  },
  ImageBackground_374_1562: {
    width: wp("5.96442616780599%"),
    height: hp("2.7556325568527473%"),
    top: hp("3.844814613217217%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.075000000000003%")
  },
  ImageBackground_374_1563: {
    width: wp("8.179122924804688%"),
    height: hp("2.31926819014419%"),
    top: hp("0.42727110815830116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_1564: {
    width: wp("8.759206136067709%"),
    height: hp("5.294529857531272%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.101106770833326%")
  },
  View_374_1569: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.73333333333334%"),
    top: hp("7.103825136612016%")
  },
  View_374_704: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(100, 252, 217, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_374_1407: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.86666666666666%"),
    top: hp("0.9562841530054627%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_374_1408: {
    width: wp("11.832834879557291%"),
    height: hp("6.061916663998463%"),
    top: hp("1.408928209315242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.75026041666667%")
  },
  ImageBackground_374_1409: {
    width: wp("9.964569091796875%"),
    height: hp("0.8919392778573793%"),
    top: hp("7.123336375085387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6917317708333215%")
  },
  ImageBackground_374_1410: {
    width: wp("9.848888142903647%"),
    height: hp("0.5266570002654862%"),
    top: hp("7.458996381915981%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.749479166666667%")
  },
  View_374_1412: {
    width: wp("3.7590627034505206%"),
    minWidth: wp("3.7590627034505206%"),
    height: hp("5.877694927278112%"),
    minHeight: hp("5.877694927278112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.111979166666664%"),
    top: hp("1.420760024440746%")
  },
  ImageBackground_374_1413: {
    width: wp("0.9831502278645833%"),
    height: hp("0.5938170386142418%"),
    top: hp("3.838969579811298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5574869791666686%")
  },
  ImageBackground_374_1414: {
    width: wp("3.1446950276692713%"),
    height: hp("2.655512908768784%"),
    top: hp("3.056902442473536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6143880208333456%")
  },
  ImageBackground_374_1415: {
    width: wp("0.30437113444010416%"),
    height: hp("2.6073163975783387%"),
    top: hp("3.0989683390966505%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6143880208333456%")
  },
  ImageBackground_374_1416: {
    width: wp("0.2979899088541667%"),
    height: hp("0.1439297785524462%"),
    top: hp("5.7337609796576245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8852213541666742%")
  },
  ImageBackground_374_1417: {
    width: wp("0.34666544596354165%"),
    height: hp("0.16575576177711696%"),
    top: hp("0.5801508335467886%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3235677083333286%")
  },
  ImageBackground_374_1418: {
    width: wp("0.3004425048828125%"),
    height: hp("0.16575589206049351%"),
    top: hp("0.5919826486723068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.195572916666677%")
  },
  ImageBackground_374_1419: {
    width: wp("1.6408894856770833%"),
    height: hp("1.1958105316579017%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5777994791666714%")
  },
  ImageBackground_374_1420: {
    width: wp("1.6640116373697915%"),
    height: hp("0.31967241255963436%"),
    top: hp("0.2723151868809808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5777994791666714%")
  },
  ImageBackground_374_1421: {
    width: wp("2.8378336588541666%"),
    height: hp("1.8900522117406293%"),
    top: hp("1.2511123073557044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.025976562500005684%")
  },
  ImageBackground_374_1422: {
    width: wp("1.3843159993489582%"),
    height: hp("1.5900067292927393%"),
    top: hp("1.318926368254786%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4787760416666629%")
  },
  ImageBackground_374_1423: {
    width: wp("1.470947265625%"),
    height: hp("1.8052262686640836%"),
    top: hp("1.1602849908213884%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_1424: {
    width: wp("1.0168924967447917%"),
    height: hp("0.10655799198671768%"),
    top: hp("0.8051054073813262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9244140625000057%")
  },
  ImageBackground_374_1427: {
    width: wp("9.964569091796875%"),
    height: hp("7.139229383624968%"),
    top: hp("0.876046269317797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6917317708333215%")
  },
  ImageBackground_374_1428: {
    width: wp("2.8821701049804687%"),
    height: hp("2.429367544872513%"),
    top: hp("5.17391350751366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.975130208333333%")
  },
  ImageBackground_374_1429: {
    width: wp("2.9245221455891928%"),
    height: hp("2.472839459695451%"),
    top: hp("5.14255377764259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9328125000000043%")
  },
  ImageBackground_374_1432: {
    width: wp("1.021844991048177%"),
    height: hp("1.3131542935397456%"),
    top: hp("5.931691654392935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.494205729166673%")
  },
  View_374_1433: {
    width: wp("1.2614054361979166%"),
    height: hp("0.47310688456550976%"),
    top: hp("5.911213192131996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.689388020833327%")
  },
  ImageBackground_374_1434: {
    width: wp("0.22572479248046876%"),
    height: hp("0.21629072929340631%"),
    top: hp("0.5680188455216921%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970963541666677%")
  },
  ImageBackground_374_1437: {
    width: wp("0.36262817382812496%"),
    height: hp("0.23472478480938355%"),
    top: hp("0.23465182611852242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3067057291666657%")
  },
  ImageBackground_374_1440: {
    width: wp("0.3184534708658854%"),
    height: hp("0.11695955620437372%"),
    top: hp("0.08169705750513856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3168619791666742%")
  },
  ImageBackground_374_1443: {
    width: wp("0.4383427937825521%"),
    height: hp("0.27289103940536413%"),
    top: hp("-0.5589719678534806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.001692708333337123%")
  },
  ImageBackground_374_1446: {
    width: wp("0.38866068522135416%"),
    height: hp("0.23748366559138062%"),
    top: hp("-0.22729759007853545%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5628906249999943%")
  },
  ImageBackground_374_1449: {
    width: wp("0.43626403808593756%"),
    height: hp("0.21855453324448212%"),
    top: hp("0.5619069917605941%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8216145833333428%")
  },
  ImageBackground_374_1452: {
    width: wp("0.36007283528645834%"),
    height: hp("0.1889525866899334%"),
    top: hp("0.2841553401425898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9013020833333343%")
  },
  ImageBackground_374_1455: {
    width: wp("0.3600733439127604%"),
    height: hp("0.18895467122395831%"),
    top: hp("0.0710325814335846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_1458: {
    width: wp("0.3600738525390625%"),
    height: hp("0.18895310782343963%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4622395833333286%")
  },
  ImageBackground_374_1461: {
    width: wp("1.0793950398763021%"),
    height: hp("1.3369284040940916%"),
    top: hp("5.919834824859123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.470312499999999%")
  },
  ImageBackground_374_1462: {
    width: wp("1.802666219075521%"),
    height: hp("0.6867028324981856%"),
    top: hp("7.020944063780746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.639127604166667%")
  },
  ImageBackground_374_1463: {
    width: wp("1.0864456176757813%"),
    height: hp("0.6867028324981856%"),
    top: hp("7.020944063780746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.639127604166667%")
  },
  ImageBackground_374_1464: {
    width: wp("1.8604446411132811%"),
    height: hp("0.7163032156522157%"),
    top: hp("7.006143872203722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6102213541666615%")
  },
  View_374_1568: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("7.103825136612016%")
  },
  View_374_703: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_374_1187: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666671%"),
    top: hp("0.9562841530054627%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_374_1188: {
    width: wp("12.334044392903646%"),
    height: hp("5.471223820754088%"),
    top: hp("1.5727308929943646%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3401692708333357%")
  },
  ImageBackground_374_1189: {
    width: wp("0.11107838948567708%"),
    height: hp("0.08848299745653496%"),
    top: hp("3.991474089075311%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.267903645833336%")
  },
  ImageBackground_374_1190: {
    width: wp("1.1202829996744792%"),
    height: hp("0.8880693404400934%"),
    top: hp("5.921977725836754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.701562500000001%")
  },
  ImageBackground_374_1191: {
    width: wp("0.48992258707682296%"),
    height: hp("0.1240443662216103%"),
    top: hp("4.458418048796105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.791796875000003%")
  },
  ImageBackground_374_1192: {
    width: wp("0.2843175252278646%"),
    height: hp("0.14908378892908983%"),
    top: hp("4.160638194266568%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.513151041666674%")
  },
  View_374_1193: {
    width: wp("0.3406621297200521%"),
    minWidth: wp("0.3406621297200521%"),
    height: hp("0.413815408456521%"),
    minHeight: hp("0.413815408456521%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.384505208333337%"),
    top: hp("4.373177283448598%")
  },
  ImageBackground_374_1194: {
    width: wp("0.26973876953125003%"),
    height: hp("0.37746690010112494%"),
    top: hp("0.018177136697417495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03541666666666288%")
  },
  ImageBackground_374_1195: {
    width: wp("0.3406621297200521%"),
    height: hp("0.41381544102736506%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_1198: {
    width: wp("1.198846944173177%"),
    height: hp("0.928369636744098%"),
    top: hp("5.9017994364754145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.546679687500003%")
  },
  ImageBackground_374_1201: {
    width: wp("2.9487655639648436%"),
    height: hp("2.0884857803094583%"),
    top: hp("3.8974199138703938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8482421875000057%")
  },
  ImageBackground_374_1204: {
    width: wp("0.5606643676757813%"),
    height: hp("0.16034444173177081%"),
    top: hp("4.440282602779192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.756575520833337%")
  },
  View_374_1207: {
    width: wp("9.2344970703125%"),
    minWidth: wp("9.2344970703125%"),
    height: hp("0.5497244537853804%"),
    minHeight: hp("0.5497244537853804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.520117187500006%"),
    top: hp("6.805511641372092%")
  },
  ImageBackground_374_1208: {
    width: wp("9.128236897786458%"),
    height: hp("0.4870831640691705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.053645833333327175%")
  },
  ImageBackground_374_1209: {
    width: wp("4.538689168294271%"),
    height: hp("0.4830073789169228%"),
    top: hp("0.010255907402665798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.643229166666664%")
  },
  ImageBackground_374_1210: {
    width: wp("9.2344970703125%"),
    height: hp("0.5412716683142823%"),
    top: hp("0.008454870005124349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_1213: {
    width: wp("1.4058807373046873%"),
    height: hp("0.5006029306213713%"),
    top: hp("6.431571251707652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.831119791666666%")
  },
  ImageBackground_374_1214: {
    width: wp("0.6105183919270833%"),
    height: hp("0.28137769855436734%"),
    top: hp("2.9015796432078247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.853710937500004%")
  },
  ImageBackground_374_1215: {
    width: wp("7.369206746419271%"),
    height: hp("2.0773246640064675%"),
    top: hp("4.493963522989247%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.862890625000006%")
  },
  ImageBackground_374_1216: {
    width: wp("0.25236104329427084%"),
    height: hp("0.16100341505040236%"),
    top: hp("3.955286578402493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.197265625000007%")
  },
  ImageBackground_374_1219: {
    width: wp("0.35540771484375%"),
    height: hp("0.1855065913799682%"),
    top: hp("4.1424527194330665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4776692708333385%")
  },
  ImageBackground_374_1222: {
    width: wp("0.28060709635416664%"),
    height: hp("0.3840972817009264%"),
    top: hp("4.122557926699116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9677734375%")
  },
  ImageBackground_374_1223: {
    width: wp("0.351495361328125%"),
    height: hp("0.42137031346722376%"),
    top: hp("4.104389128137811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.932356770833337%")
  },
  View_374_1226: {
    width: wp("14.076345825195313%"),
    minWidth: wp("14.076345825195313%"),
    height: hp("4.513660284990821%"),
    minHeight: hp("4.513660284990821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6355468750000028%"),
    top: hp("2.6291977512380527%")
  },
  View_374_1227: {
    width: wp("14.076345825195313%"),
    minWidth: wp("14.076345825195313%"),
    height: hp("4.513660284990821%"),
    minHeight: hp("4.513660284990821%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_374_1228: {
    width: wp("4.607372029622396%"),
    height: hp("0.8921948938421863%"),
    top: hp("1.6041406516820302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11022135416666856%")
  },
  ImageBackground_374_1229: {
    width: wp("1.1757664998372397%"),
    height: hp("0.4659235803155951%"),
    top: hp("3.832257380251022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.76100260416667%")
  },
  ImageBackground_374_1230: {
    width: wp("6.067935180664062%"),
    height: hp("2.055040995279948%"),
    top: hp("1.9019205062115816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.514518229166669%")
  },
  ImageBackground_374_1231: {
    width: wp("7.456104532877604%"),
    height: hp("2.1241521574760394%"),
    top: hp("1.8375167429772858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.174479166666664%")
  },
  ImageBackground_374_1232: {
    width: wp("1.2262908935546875%"),
    height: hp("0.11559053848349983%"),
    top: hp("2.134913043246229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.274999999999999%")
  },
  ImageBackground_374_1233: {
    width: wp("0.5731486002604167%"),
    height: hp("0.14274003075771644%"),
    top: hp("2.0490135651468506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.586132812500004%")
  },
  ImageBackground_374_1234: {
    width: wp("0.42723185221354165%"),
    height: hp("0.2526059176752476%"),
    top: hp("1.950465134584178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.837109375000004%")
  },
  ImageBackground_374_1235: {
    width: wp("2.1417510986328123%"),
    height: hp("2.131174431472528%"),
    top: hp("2.382488980319337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.327539062500001%")
  },
  ImageBackground_374_1239: {
    width: wp("0.353558349609375%"),
    height: hp("0.13966482193743598%"),
    top: hp("2.6349010363302483%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.394856770833329%")
  },
  ImageBackground_374_1240: {
    width: wp("0.20281270345052083%"),
    height: hp("0.19410242799852714%"),
    top: hp("2.4064611216060428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.115429687500004%")
  },
  ImageBackground_374_1241: {
    width: wp("0.22227172851562502%"),
    height: hp("0.19106161398965804%"),
    top: hp("2.4299329747267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.075520833333336%")
  },
  ImageBackground_374_1242: {
    width: wp("0.6905080159505208%"),
    height: hp("0.12287233696609247%"),
    top: hp("2.668562091764855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.092578125000003%")
  },
  ImageBackground_374_1243: {
    width: wp("0.4691884358723958%"),
    height: hp("0.1739340401738068%"),
    top: hp("2.748875018677424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.130598958333337%")
  },
  ImageBackground_374_1244: {
    width: wp("0.20630086263020833%"),
    height: hp("0.38012415984940656%"),
    top: hp("2.7934340179943575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.440885416666667%")
  },
  ImageBackground_374_1245: {
    width: wp("0.4370758056640625%"),
    height: hp("0.059991325837015455%"),
    top: hp("2.695460918822576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.683658854166673%")
  },
  ImageBackground_374_1246: {
    width: wp("0.7635050455729167%"),
    height: hp("0.04505199161383624%"),
    top: hp("2.608093928769634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.297330729166667%")
  },
  ImageBackground_374_1247: {
    width: wp("1.4999033610026042%"),
    height: hp("0.5487223140528945%"),
    top: hp("3.778292963413591%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.148567708333331%")
  },
  ImageBackground_374_1248: {
    width: wp("0.20420532226562502%"),
    height: hp("0.09067670895102246%"),
    top: hp("4.211667587196885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.204687500000006%")
  },
  ImageBackground_374_1249: {
    width: wp("0.19366251627604167%"),
    height: hp("0.09289413202004354%"),
    top: hp("4.180266166645325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.357617187499997%")
  },
  ImageBackground_374_1250: {
    width: wp("0.193658447265625%"),
    height: hp("0.0928936108865373%"),
    top: hp("4.387610597037224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.100325520833337%")
  },
  ImageBackground_374_1251: {
    width: wp("0.19366251627604167%"),
    height: hp("0.0928936108865373%"),
    top: hp("4.336539513426402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.18580729166667%")
  },
  ImageBackground_374_1252: {
    width: wp("1.269788106282552%"),
    height: hp("0.5082328462861275%"),
    top: hp("3.8142053155951174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.713932291666666%")
  },
  ImageBackground_374_1253: {
    width: wp("0.2042058308919271%"),
    height: hp("0.09067670895102246%"),
    top: hp("4.211667587196885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.598111979166667%")
  },
  ImageBackground_374_1254: {
    width: wp("0.19366302490234374%"),
    height: hp("0.0928936108865373%"),
    top: hp("4.187570373868681%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.708398437500001%")
  },
  ImageBackground_374_1255: {
    width: wp("4.764629618326823%"),
    height: hp("0.9410013918016777%"),
    top: hp("1.5794014018741365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_1258: {
    width: wp("2.0670806884765627%"),
    height: hp("2.035748632879205%"),
    top: hp("2.09541529254183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.009244791666667%")
  },
  ImageBackground_374_1261: {
    width: wp("1.8560475667317708%"),
    height: hp("1.92589577429933%"),
    top: hp("2.151122379824116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.114908854166664%")
  },
  ImageBackground_374_1262: {
    width: wp("0.37591451009114585%"),
    height: hp("0.19257915475980833%"),
    top: hp("2.9783988910945993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.150585937500004%")
  },
  ImageBackground_374_1263: {
    width: wp("0.37591349283854164%"),
    height: hp("0.19257811249279586%"),
    top: hp("2.352521719176906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.325325520833339%")
  },
  ImageBackground_374_1264: {
    width: wp("0.37591451009114585%"),
    height: hp("0.19257967589331454%"),
    top: hp("3.279305546661533%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.419270833333336%")
  },
  ImageBackground_374_1265: {
    width: wp("11.85386962890625%"),
    height: hp("0.1525676804162114%"),
    top: hp("4.075864364540635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1522135416666686%")
  },
  View_374_1270: {
    width: wp("1.2343841552734376%"),
    minWidth: wp("1.2343841552734376%"),
    height: hp("0.5537426536851894%"),
    minHeight: hp("0.5537426536851894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.041731770833337%"),
    top: hp("0%")
  },
  ImageBackground_374_1271: {
    width: wp("0.9582041422526042%"),
    height: hp("0.4381633195720735%"),
    top: hp("0.04724387914104966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27617187499999574%")
  },
  ImageBackground_374_1272: {
    width: wp("0.6105224609375001%"),
    height: hp("0.2813790013881329%"),
    top: hp("0.272365215697576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17649739583333002%")
  },
  ImageBackground_374_1275: {
    width: wp("0.19180806477864584%"),
    height: hp("0.2951973774394051%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.15742187499999716%")
  },
  ImageBackground_374_1276: {
    width: wp("0.2819040934244792%"),
    height: hp("0.24734794116411052%"),
    top: hp("0.05469817281421285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_374_1277: {
    width: wp("0.9582041422526042%"),
    height: hp("0.4381633195720735%"),
    top: hp("0.04724387914104966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.27617187499999574%")
  },
  ImageBackground_374_1278: {
    width: wp("0.16177876790364581%"),
    height: hp("0.06795007674420467%"),
    top: hp("0.2004821443818372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9121093749999929%")
  },
  ImageBackground_374_1279: {
    width: wp("0.1617767333984375%"),
    height: hp("0.06794773164342661%"),
    top: hp("0.10576925642502033%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6809895833333286%")
  },
  ImageBackground_374_1280: {
    width: wp("0.16051025390624998%"),
    height: hp("0.07324713826830921%"),
    top: hp("2.935557547814213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.846289062499999%")
  },
  ImageBackground_374_1281: {
    width: wp("1.3981038411458333%"),
    height: hp("1.1477241099206474%"),
    top: hp("5.9857311144552625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.435546875%")
  },
  ImageBackground_374_1282: {
    width: wp("0.7477193196614583%"),
    height: hp("0.8009467620015795%"),
    top: hp("6.294292178961754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.485807291666667%")
  },
  ImageBackground_374_1283: {
    width: wp("1.4902125040690104%"),
    height: hp("1.0575586329392397%"),
    top: hp("6.114888842640028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.3829427083333385%")
  },
  ImageBackground_374_1284: {
    width: wp("0.20420532226562502%"),
    height: hp("0.09067566668400999%"),
    top: hp("7.045132996606057%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.535872395833337%")
  },
  ImageBackground_374_1285: {
    width: wp("0.1936620076497396%"),
    height: hp("0.09289465315354978%"),
    top: hp("6.999156514152162%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.617643229166667%")
  },
  ImageBackground_374_1286: {
    width: wp("0.4633407592773437%"),
    height: hp("0.9308908806472529%"),
    top: hp("6.022218798027666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.140104166666667%")
  },
  View_374_1567: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("7.103825136612016%")
  },
  View_374_708: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
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
  View_374_820: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666654%"),
    top: hp("0.9562841530054627%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_374_821: {
    width: wp("14.150815836588542%"),
    height: hp("6.477063080000748%"),
    top: hp("1.098416020961409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8049479166666682%")
  },
  ImageBackground_374_822: {
    width: wp("2.2270909627278646%"),
    height: hp("1.7391918786887914%"),
    top: hp("3.565628802190062%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.7603515625%")
  },
  ImageBackground_374_823: {
    width: wp("12.846769205729167%"),
    height: hp("0.8849837089496884%"),
    top: hp("6.631019467213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.888476562500001%")
  },
  ImageBackground_374_824: {
    width: wp("3.915013631184896%"),
    height: hp("0.9396586913228686%"),
    top: hp("2.180889525700138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.785546875000001%")
  },
  ImageBackground_374_825: {
    width: wp("5.403679911295574%"),
    height: hp("0.5608378863725506%"),
    top: hp("3.119413448813191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.066861979166667%")
  },
  ImageBackground_374_826: {
    width: wp("7.164499918619792%"),
    height: hp("5.006162195257802%"),
    top: hp("1.3896671149248618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.329752604166666%")
  },
  ImageBackground_374_827: {
    width: wp("0.3319615681966146%"),
    height: hp("0.7765816860511655%"),
    top: hp("4.379455899931699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.527864583333335%")
  },
  ImageBackground_374_828: {
    width: wp("0.21135762532552083%"),
    height: hp("0.3914379682697234%"),
    top: hp("4.061147554324634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.743619791666667%")
  },
  ImageBackground_374_829: {
    width: wp("12.846769205729167%"),
    height: hp("0.8849837089496884%"),
    top: hp("6.631019467213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.888476562500001%")
  },
  ImageBackground_374_830: {
    width: wp("0.251605224609375%"),
    height: hp("0.32560473582783683%"),
    top: hp("4.402752652194323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.468033854166666%")
  },
  ImageBackground_374_831: {
    width: wp("0.15982869466145833%"),
    height: hp("0.28019759172950287%"),
    top: hp("4.300952348552769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.402669270833336%")
  },
  ImageBackground_374_832: {
    width: wp("0.08835550944010416%"),
    height: hp("0.07360229075280696%"),
    top: hp("4.897170770363729%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.102278645833334%")
  },
  ImageBackground_374_833: {
    width: wp("0.19098714192708333%"),
    height: hp("0.328045985737785%"),
    top: hp("4.13784173016991%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.478841145833332%")
  },
  ImageBackground_374_834: {
    width: wp("0.236920166015625%"),
    height: hp("0.21000429580771857%"),
    top: hp("4.509597528176229%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.836132812500001%")
  },
  ImageBackground_374_835: {
    width: wp("1.0247283935546876%"),
    height: hp("1.0828380376263393%"),
    top: hp("2.483572204256319%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.730273437500001%")
  },
  ImageBackground_374_836: {
    width: wp("5.403679911295574%"),
    height: hp("0.5183688929823578%"),
    top: hp("3.1710431875426934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.066861979166667%")
  },
  ImageBackground_374_837: {
    width: wp("0.9305384318033855%"),
    height: hp("0.7532979621261847%"),
    top: hp("2.5374449015966576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.406575520833334%")
  },
  ImageBackground_374_838: {
    width: wp("0.23285522460937502%"),
    height: hp("0.513527562709454%"),
    top: hp("4.367165487320705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8296875%")
  },
  ImageBackground_374_839: {
    width: wp("0.09853515624999999%"),
    height: hp("0.6379059755085595%"),
    top: hp("2.3842316507641783%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.391276041666668%")
  },
  ImageBackground_374_840: {
    width: wp("0.17505900065104169%"),
    height: hp("0.6735178942237395%"),
    top: hp("2.665543686496761%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.662369791666666%")
  },
  ImageBackground_374_841: {
    width: wp("0.39594116210937497%"),
    height: hp("0.6160386924535198%"),
    top: hp("2.4384545498207046%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.142578125000004%")
  },
  ImageBackground_374_842: {
    width: wp("3.9150146484375004%"),
    height: hp("0.9396598638732576%"),
    top: hp("2.145369065915304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.66998697916667%")
  },
  ImageBackground_374_845: {
    width: wp("4.587172444661459%"),
    height: hp("1.6126107648422157%"),
    top: hp("1.6769992849214503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9244140625000004%")
  },
  ImageBackground_374_846: {
    width: wp("7.326280721028645%"),
    height: hp("5.022422081785775%"),
    top: hp("1.3734077495303936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.329752604166666%")
  },
  View_373_701: {
    width: wp("34.4%"),
    top: hp("1.6393442622950758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_373_701: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_374_1572: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.98360655737705%")
  },
  View_373_685: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_385_903: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("6.5573770491803245%"),
    justifyContent: "flex-start"
  },
  Text_385_903: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_373_694: {
    width: wp("38.4%"),
    top: hp("1.6393442622950758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_373_694: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_373_699: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("9.699453551912562%"),
    backgroundColor: "rgba(232, 231, 231, 1)"
  },
  TouchableOpacity_374_1571: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.415300546448087%")
  },
  View_373_684: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_373_687: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("9.699453551912569%")
  },
  View_373_690: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("6.557377049180332%"),
    justifyContent: "flex-start"
  },
  Text_373_690: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_373_691: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("6.830601092896174%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_373_686: {
    width: wp("54.666666666666664%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    justifyContent: "flex-start"
  },
  Text_373_686: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_372_1014: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.666666666666664%")
  },
  View_372_1015: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_577_3410: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("4.234972677595632%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%")
  },
  View_375_657: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("1.6393442622950865%")
  },
  View_373_664: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60
  },
  View_376_658: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.066666666666666%"),
    top: hp("2.1857923497267784%")
  },
  View_373_668: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060118%"),
    justifyContent: "flex-start"
  },
  Text_373_668: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_373_669: {
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
  Text_373_669: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_595_5104: {
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
  View_577_3409: {
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
  View_595_5105: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_595_5106: {
    width: wp("51.2%"),
    minWidth: wp("51.2%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.53333333333333%"),
    top: hp("7.923497267759563%"),
    justifyContent: "center"
  },
  Text_595_5106: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_595_5107: {
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
  ImageBackground_I595_5107_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_372_946: {
    width: wp("91.46666666666667%"),
    height: hp("2.459016393442623%"),
    top: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_372_947: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_372_948: {
    width: wp("9.34998779296875%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_372_948: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_372_949: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0.43169865842725397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%")
  },
  View_372_950: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_372_951: {
    width: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_372_954: {
    width: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5040986941811818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%")
  },
  View_372_955: {
    width: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    top: hp("0.26184248793971987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339192708333371%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_372_956: {
    width: wp("4.565274556477865%"),
    height: hp("1.4617523860410262%"),
    top: hp("0.4917999434340845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.579296875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_372_957: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_372_958: {
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
  View_372_959: {
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
  View_372_960: {
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
  View_372_961: {
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
  View_372_962: {
    width: wp("4.11141611735026%"),
    height: hp("1.5105476796301338%"),
    top: hp("0.4644842095713795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.4794921875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_372_963: {
    width: wp("4.11141611735026%"),
    minWidth: wp("4.11141611735026%"),
    height: hp("1.5105478099135101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_583_2857: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_583_2858: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_583_2859: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2859_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27324071998805266%")
  },
  View_I583_2859_319_328: {
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
  ImageBackground_I583_2859_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2859_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I583_2859_319_333: {
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
  ImageBackground_I583_2859_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2859_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_583_2860: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2860_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I583_2860_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2860_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_583_2861: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2861_319_339: {
    flexGrow: 1,
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333984374999972%"),
    top: hp("0.2732490581241649%")
  },
  View_I583_2861_319_340: {
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
  ImageBackground_I583_2861_319_341: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2861_319_342: {
    width: wp("5.334065246582032%"),
    height: hp("2.732376974137103%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I583_2861_319_345: {
    width: wp("1.770800018310547%"),
    height: hp("0.9072062747726024%"),
    top: hp("0.9126423486594888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7814453124999972%")
  },
  ImageBackground_I583_2861_319_346: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("1.5709048411885078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.066210937500003%")
  },
  ImageBackground_I583_2861_319_347: {
    width: wp("0.5346666971842448%"),
    height: hp("0.273224043715847%"),
    top: hp("0.8878447318988947%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7328776041666742%")
  },
  TouchableOpacity_583_2862: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I583_2862_319_319: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I583_2862_319_320: {
    width: wp("0.37209300994873046%"),
    height: hp("1.0623966409860413%"),
    top: hp("1.042383746371243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3323567708333357%")
  },
  ImageBackground_I583_2862_319_321: {
    width: wp("0.37209300994873046%"),
    height: hp("1.4796035537302819%"),
    top: hp("0.6250516964438191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4901041666666686%")
  },
  ImageBackground_I583_2862_319_322: {
    width: wp("0.37209300994873046%"),
    height: hp("0.601601209796843%"),
    top: hp("1.5030490896089361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6287760416666686%")
  },
  ImageBackground_I583_2862_319_323: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_583_2863: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_583_2864: {
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
