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
      <View style={styles.View_135_480}>
        <View style={styles.View_135_481} />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_158_1397}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("125_20"))
        }
      >
        <View style={styles.View_158_1398} />
        <View style={styles.View_158_1399}>
          <Text style={styles.Text_158_1399}>Done</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_907_1768}>
        <View style={styles.View_158_1392}>
          <Text style={styles.Text_158_1392}>Sign up Successfully</Text>
        </View>
        <View style={styles.View_158_1396}>
          <Text style={styles.Text_158_1396}>Everything will be fine !</Text>
        </View>
      </View>
      <View style={styles.View_158_1374}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/310b/59b4/0bff0bc9286aeda8f1396520a31d2c7b"
          }}
          style={styles.ImageBackground_158_1394}
        />
        <View style={styles.View_158_1134}>
          <View style={styles.View_158_1135}>
            <View style={styles.View_158_1136}>
              <View style={styles.View_158_1137}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85ca/58f8/bd2fff1a4d1023c374311e8b54baba7d"
                  }}
                  style={styles.ImageBackground_158_1138}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2f8/9c9b/cdb29e63d49546ced0b2b3902ea7c80b"
                  }}
                  style={styles.ImageBackground_158_1141}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccf7/94b6/6b7cfcbefbf10a7815df48b7b0be795f"
                  }}
                  style={styles.ImageBackground_158_1142}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b32e/3927/0d11159daa0298781c91c768cbe98422"
                  }}
                  style={styles.ImageBackground_158_1143}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e141/f603/12ced5a7cdaebdbfcf47e010e417866d"
                }}
                style={styles.ImageBackground_158_1144}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad2d/ecbc/620b5ff6bbd775d53e742e430891e7c3"
                }}
                style={styles.ImageBackground_158_1145}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6beb/4f0c/15cf8264548952a32dc32f9a5b6f418c"
                }}
                style={styles.ImageBackground_158_1146}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ffb/cf55/79f316e1c8cb765b8bc69defab9f843e"
                }}
                style={styles.ImageBackground_158_1147}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e542/9cdc/2845e65b2b0fd20e6524051ae4b49c93"
                }}
                style={styles.ImageBackground_158_1148}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6c0/fa9a/5788a02caca76a3c345baa26fcd51723"
                }}
                style={styles.ImageBackground_158_1149}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57c4/24a8/6c0b6de197ff87341466ce60dc410a2a"
                }}
                style={styles.ImageBackground_158_1150}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/251e/438d/775c7d0c9b92d6201bec7effae8f2dd9"
                }}
                style={styles.ImageBackground_158_1151}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2686/3dc8/9c1f407574dd7a6f424ce3a01f3c71ba"
                }}
                style={styles.ImageBackground_158_1152}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63d2/0332/5887a4d07fedede15ba590503df0deb9"
                }}
                style={styles.ImageBackground_158_1153}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/58dd/04be/93b33b37c7fade73e5cf8538036c7884"
                }}
                style={styles.ImageBackground_158_1156}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/adb6/85ca/8a5309a6d90c4b24625e15fe8286be60"
                }}
                style={styles.ImageBackground_158_1157}
              />
              <View style={styles.View_158_1158}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a919/a054/abd06e498fc547200180b5fbb07f757e"
                  }}
                  style={styles.ImageBackground_158_1159}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e58/5d92/357330b071ce37d30c136dfbdbbd4e74"
                  }}
                  style={styles.ImageBackground_158_1160}
                />
              </View>
              <View style={styles.View_158_1169}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a5d/f08c/c760bcdbc664551ee8554644860612b9"
                  }}
                  style={styles.ImageBackground_158_1170}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef69/7cb5/0b88bea42fa043929b53f7d4fa325511"
                }}
                style={styles.ImageBackground_158_1172}
              />
              <View style={styles.View_158_1173}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fab5/927d/a98bcee0347a6260211b0351c14cca1b"
                  }}
                  style={styles.ImageBackground_158_1174}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c15/c286/adcf2afeef474d6265c46fb3d7d722f4"
                }}
                style={styles.ImageBackground_158_1176}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2505/da4b/b155f7023712c981574a11007eab5beb"
                }}
                style={styles.ImageBackground_158_1177}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2c7/26d6/009f088d65247c79defbb62eb3e7e709"
                }}
                style={styles.ImageBackground_158_1179}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dd0/7ffe/ad62e313a175b350f94d71dd18dcb111"
                }}
                style={styles.ImageBackground_158_1180}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbcb/e2fa/3b348f4744be15f65a0b647913b0648b"
                }}
                style={styles.ImageBackground_158_1181}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e55b/1091/3c828c7fd22a577c3207b33d743a9f62"
                }}
                style={styles.ImageBackground_158_1183}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae13/38d9/35e4fa1bc7834899d305a69e30e93756"
                }}
                style={styles.ImageBackground_158_1184}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8526/d1e8/3344a8c9ec24ddca31bb2dda9b4f66e8"
                }}
                style={styles.ImageBackground_158_1185}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34bd/656b/3d7261a56cb0731834f5c96bce225b88"
                }}
                style={styles.ImageBackground_158_1186}
              />
              <View style={styles.View_158_1188}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd02/1a1b/04f2277a6d84c0b874f86a1f19faa515"
                  }}
                  style={styles.ImageBackground_158_1189}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fd2/abd5/2063f7eb43886e2bcf300309da7dd5c7"
                  }}
                  style={styles.ImageBackground_158_1190}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a66/ae54/8ae7b9024bcfc4e9da6c62f872b3cf20"
                  }}
                  style={styles.ImageBackground_158_1191}
                />
                <View style={styles.View_158_1192}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c138/5853/3cfa9611cb091f0128a48b3f6d46dbcf"
                    }}
                    style={styles.ImageBackground_158_1193}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72fe/7e1e/f7c764fb89eed007799cd8d662f0d146"
                    }}
                    style={styles.ImageBackground_158_1195}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9bd/20d6/233595bce53ca9bdf6d946788d10cd5c"
                  }}
                  style={styles.ImageBackground_158_1197}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc4/ffe1/8882cbce5797554ea88bcfe096ea5fcb"
                  }}
                  style={styles.ImageBackground_158_1199}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd11/7e60/3febb01cddab6f35c36dc03c6c45b13b"
                  }}
                  style={styles.ImageBackground_158_1201}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bc4/ffe1/8882cbce5797554ea88bcfe096ea5fcb"
                  }}
                  style={styles.ImageBackground_158_1203}
                />
                <View style={styles.View_158_1205}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/325f/d4f8/e9b12cf55a4ac816defddc4f4189c4a0"
                    }}
                    style={styles.ImageBackground_158_1206}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae63/5980/a57c2e82848f7670b47e7c3024c1ba3e"
                  }}
                  style={styles.ImageBackground_158_1208}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a29/a187/2da11e4744bf3707d6c653770e6dd405"
                }}
                style={styles.ImageBackground_158_1209}
              />
              <View style={styles.View_158_1211}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ce0/1e54/0fcebe2befb157b461f6d5e8dda65823"
                  }}
                  style={styles.ImageBackground_158_1212}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/074d/bc74/12f25e1043093c95cd1eb9d07e316878"
                  }}
                  style={styles.ImageBackground_158_1215}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71ad/ab71/0d610f9901bdd01cf7d5af97c9a62910"
                  }}
                  style={styles.ImageBackground_158_1218}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2237/a2f6/e0f0c219213489bc8f181a25e37cf09c"
                  }}
                  style={styles.ImageBackground_158_1224}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02e5/014d/ae96c269a32f3dcfa761ad7ddc3d3e1f"
                  }}
                  style={styles.ImageBackground_158_1225}
                />
                <View style={styles.View_158_1226}>
                  <View source={{ uri: "null" }} style={styles.View_158_1227} />
                </View>
              </View>
              <View style={styles.View_158_1229}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2620/4f20/e532cfc3079823e76c58ee71321abd20"
                  }}
                  style={styles.ImageBackground_158_1230}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b07d/b0f5/a2c7d908d0eba0a62d2d8f903898a5f2"
                  }}
                  style={styles.ImageBackground_158_1232}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eccd/d73e/47d2d82cf9a8fa7c32727a8aff6cfae8"
                  }}
                  style={styles.ImageBackground_158_1234}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/124b/c114/9ef500234c3287749fa593761f61f820"
              }}
              style={styles.ImageBackground_158_1236}
            />
            <View style={styles.View_158_1237}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6a29/d8d6/49f7c11bf26f0e75e14c35ead4f2da39"
                }}
                style={styles.ImageBackground_158_1238}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f56e/b4c4/12d852e2963a26036587a39f16dbc590"
                }}
                style={styles.ImageBackground_158_1239}
              />
              <View style={styles.View_158_1240}>
                <View style={styles.View_158_1241}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2386/5d12/4506e170fa475fa32cf6e5ff98f7c7a1"
                    }}
                    style={styles.ImageBackground_158_1242}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99f9/c1ed/09bafb2c4926da7ee0a2b531fa381cea"
                    }}
                    style={styles.ImageBackground_158_1243}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9ed/3d92/9697eb37b6dbe54da3412061a059fc4b"
                    }}
                    style={styles.ImageBackground_158_1244}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e538/7c12/d2e743ab923f8dfbd08fabea8bbcb351"
                    }}
                    style={styles.ImageBackground_158_1245}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9896/3496/67d3a0a0fdf03fe31d64a3c666699c32"
                    }}
                    style={styles.ImageBackground_158_1246}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4034/8afc/7bc252893b007aab23c52faffd5f5ea9"
                    }}
                    style={styles.ImageBackground_158_1247}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/154e/a60a/9cc915dbe58bee4943c3bd5795f2b6f7"
                    }}
                    style={styles.ImageBackground_158_1248}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520b/6ee1/8d5db97832aa522375cdc8013bb2ddd6"
                    }}
                    style={styles.ImageBackground_158_1249}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/381f/757b/a1b935e54ab516afd4b586a38db077f0"
                  }}
                  style={styles.ImageBackground_158_1252}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f314/ad97/fab0da2a44a007cdff47688481eb4e32"
                  }}
                  style={styles.ImageBackground_158_1253}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90ea/f5b9/9eb5ac04ec1710bd953fe9ebbaa12c90"
                  }}
                  style={styles.ImageBackground_158_1254}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c419/ef87/4b347b25d0212c18c8b5f6b59ee82aca"
                  }}
                  style={styles.ImageBackground_158_1255}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/475b/5448/8616051d7bc9e08766d4fd440ad0081b"
                  }}
                  style={styles.ImageBackground_158_1256}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5e1/9b3c/ae3c64d8ad4115688d4c57762de6fc26"
                  }}
                  style={styles.ImageBackground_158_1257}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48b5/af5f/87e617d45ba57108db9025da5270d8e4"
                  }}
                  style={styles.ImageBackground_158_1258}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63a1/c259/04278998bf57205abe8c9257d4b5ca44"
                  }}
                  style={styles.ImageBackground_158_1259}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12ac/1e7d/0bb622f0678dbce911530b6bb14b1900"
                  }}
                  style={styles.ImageBackground_158_1260}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21b4/a905/7d00f88afe6b77d0a1aea8b913c4bc54"
                  }}
                  style={styles.ImageBackground_158_1261}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9425/e902/6252c21e7a0a5617f8253deca2457414"
                  }}
                  style={styles.ImageBackground_158_1262}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d74/c50e/9ad3e7ca9349f19fb38c7230f4a65a32"
                  }}
                  style={styles.ImageBackground_158_1263}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8262/51ff/520263eca7a95b09d338adc9314fe4e5"
                  }}
                  style={styles.ImageBackground_158_1264}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f569/17f0/a6301f30f1c19dabbb360221c7248fba"
                  }}
                  style={styles.ImageBackground_158_1265}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1102/f8b0/23a8f582aada5223723814b2f9e7c6cd"
                  }}
                  style={styles.ImageBackground_158_1266}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9d9/7d0f/5c2a8f6b5fc59b8b7e9caedb41246a9c"
                  }}
                  style={styles.ImageBackground_158_1267}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3699/96a6/3f7984a9285995095e4fa5a286bc7a40"
                  }}
                  style={styles.ImageBackground_158_1269}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0855/0859/432fe36ea1af2834244b139c8f842e8b"
                  }}
                  style={styles.ImageBackground_158_1270}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/059e/a9cc/2bcbd5995ba24df87ac6114e5410be83"
                  }}
                  style={styles.ImageBackground_158_1272}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/556d/3cc1/ada83692b59017dec637ee9764c22eff"
                  }}
                  style={styles.ImageBackground_158_1274}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06b4/bf1d/3f94044246de290f2492d47700917a81"
                  }}
                  style={styles.ImageBackground_158_1276}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1be0/1b1d/e935e76b0c832a03849c970816db4273"
                  }}
                  style={styles.ImageBackground_158_1278}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee33/a440/d8a30e407e6ef0c1320f06484bdaaa04"
                  }}
                  style={styles.ImageBackground_158_1280}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75dc/bb38/a724407ca2afaa8587b3bd09471f1ebc"
                  }}
                  style={styles.ImageBackground_158_1282}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48ad/a208/09ce42d19720a4ac7210d397913f81c2"
                  }}
                  style={styles.ImageBackground_158_1283}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c77f/85bb/8b9dc3b6057734cee15efc093e942440"
                  }}
                  style={styles.ImageBackground_158_1284}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c77/4928/b128c0d202fe487adee2449beb32a9c1"
                  }}
                  style={styles.ImageBackground_158_1285}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/511e/4f39/498c236ec083a486dcd672c79d12ab2a"
                  }}
                  style={styles.ImageBackground_158_1286}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbe8/6c05/bf036c0bc9e34906fcb7c3208ccb90b8"
                  }}
                  style={styles.ImageBackground_158_1287}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f64a/c4e2/8450f003420ec0f7c361895b44bd50b4"
                  }}
                  style={styles.ImageBackground_158_1288}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c621/280a/b2bcf36653558013fee3de4a51a7c2de"
                  }}
                  style={styles.ImageBackground_158_1289}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a7/c261/94f70239de6a8f193b0468b911918979"
                  }}
                  style={styles.ImageBackground_158_1291}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/236e/fe2e/59e3ea6611c9307494c6fa5046112893"
                  }}
                  style={styles.ImageBackground_158_1293}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4477/6d69/b1a50ebc3f82df1941f1ea854e601421"
                  }}
                  style={styles.ImageBackground_158_1295}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83b4/ace5/1b1bca46753eb08fd952881b7fe2a6e6"
                  }}
                  style={styles.ImageBackground_158_1297}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03ff/c823/7fc90fbd8b5259216c0403ba22b18e17"
                  }}
                  style={styles.ImageBackground_158_1306}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05d9/c604/bcb2d44caf4d595de2b66942c652f4ef"
                  }}
                  style={styles.ImageBackground_158_1307}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c697/23a1/0f0dd4f712fa470cd03b38ef9813ea53"
                  }}
                  style={styles.ImageBackground_158_1308}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cd8/8db3/7c4d7b5671bd501c84bdceebd3d06074"
                  }}
                  style={styles.ImageBackground_158_1309}
                />
                <View style={styles.View_158_1310}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dac/b089/af4767d64f6b28f661ca554d4c861603"
                    }}
                    style={styles.ImageBackground_158_1311}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cc7/b217/afd95da26aab4323f9301c26bf3040cc"
                  }}
                  style={styles.ImageBackground_158_1313}
                />
                <View style={styles.View_158_1314}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd9d/790a/e521d8aa1108527a759653d5cd86ecc2"
                    }}
                    style={styles.ImageBackground_158_1315}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81ff/8b87/0f295d50d69f96fcedcdddceec024c7a"
                  }}
                  style={styles.ImageBackground_158_1317}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c83/6237/2be13651f49d0107a603971efbc0b7bf"
                }}
                style={styles.ImageBackground_158_1318}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21ee/4e4d/0971b3f81f90ef9ccc1afea3a5893dd7"
                }}
                style={styles.ImageBackground_158_1319}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6cf/ddd3/d8de42d0fc866932b2f25ce09e1bbb9d"
                }}
                style={styles.ImageBackground_158_1320}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3018/f080/bf59967c947992ac9622652674413ac9"
                }}
                style={styles.ImageBackground_158_1323}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2145/0164/aba6fd4147b9d514ad499bc3c78b6957"
                }}
                style={styles.ImageBackground_158_1326}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb4/1d84/76dedff98acbc9babe81add0701848b5"
                }}
                style={styles.ImageBackground_158_1328}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ff0/1c48/6987f025b9b64e40704008537fd8b791"
                }}
                style={styles.ImageBackground_158_1330}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd5/a64f/cd3e573cb821b3c776a910381cc582ed"
                }}
                style={styles.ImageBackground_158_1332}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1d0/1bea/ca77630901d7a3b7de55c2b3d9028e46"
                }}
                style={styles.ImageBackground_158_1334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b03/dd5b/67fc8173a11a87180fe31144c7fb3d4a"
                }}
                style={styles.ImageBackground_158_1336}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61f8/7d3d/e1dc9ee21e04d78db54c81256a8dd88c"
                }}
                style={styles.ImageBackground_158_1338}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9840/33fb/6955629cafc0851c521c1999b86f31e2"
                }}
                style={styles.ImageBackground_158_1340}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/556d/ab00/2bdb3aedbe5347f6d4c51ba8fb4a2237"
                }}
                style={styles.ImageBackground_158_1342}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/005c/7d43/c232f61ff48c994aa670aa6531670e36"
                }}
                style={styles.ImageBackground_158_1344}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/471b/4740/1cba43f8eaf66e72c3c42a38dcca06a9"
                }}
                style={styles.ImageBackground_158_1346}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03dc/f2c2/0424a5abac5c0ea2abcfc2894cd187a7"
                }}
                style={styles.ImageBackground_158_1348}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f509/706a/6e8f594695f783c40dd905099b799019"
                }}
                style={styles.ImageBackground_158_1350}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efba/bb0b/bbe1c5b9babdd248b0d4709ccb27175b"
              }}
              style={styles.ImageBackground_158_1352}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/930c/2052/d337d19600a641b54eba9e92f0cd0530"
              }}
              style={styles.ImageBackground_158_1354}
            />
            <View style={styles.View_158_1356}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e561/66fe/496cea649df6303af9ec1f9728168dbe"
                }}
                style={styles.ImageBackground_158_1357}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7484/3206/a865a246a6dfcaca8fa3c2157b42092d"
                }}
                style={styles.ImageBackground_158_1359}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fd9/11b6/ee6a5ea53fc8f48e8b690398c45006db"
                }}
                style={styles.ImageBackground_158_1361}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_907_1767}>
        <View style={styles.View_595_4853} />
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3698}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("116_164"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I567_3698_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_135_482}>
        <View style={styles.View_135_483}>
          <View style={styles.View_135_484}>
            <Text style={styles.Text_135_484}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_135_485}>
          <View style={styles.View_135_486}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_135_487}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_135_490}
            />
          </View>
          <View style={styles.View_135_491} />
        </View>
        <View style={styles.View_135_492}>
          <View style={styles.View_135_493}>
            <View style={styles.View_135_494} />
            <View style={styles.View_135_495} />
            <View style={styles.View_135_496} />
            <View style={styles.View_135_497} />
          </View>
        </View>
        <View style={styles.View_135_498}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_135_499}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_135_480: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_135_481: {
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
  TouchableOpacity_158_1397: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("88.11475409836066%")
  },
  View_158_1398: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(61, 171, 37, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_158_1399: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333334%"),
    top: hp("2.0491803278688394%"),
    justifyContent: "flex-start"
  },
  Text_158_1399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_907_1768: {
    width: wp("64.53333333333333%"),
    minWidth: wp("64.53333333333333%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666667%"),
    top: hp("72.1311475409836%")
  },
  View_158_1392: {
    width: wp("64.53333333333333%"),
    minWidth: wp("64.53333333333333%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_158_1392: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_158_1396: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333331%"),
    top: hp("5.054644808743177%"),
    justifyContent: "center"
  },
  Text_158_1396: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_158_1374: {
    width: wp("76.53333333333333%"),
    minWidth: wp("76.53333333333333%"),
    height: hp("50.13662035999402%"),
    minHeight: hp("50.13662035999402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333333%"),
    top: hp("16.939890710382514%")
  },
  ImageBackground_158_1394: {
    width: wp("49.272029622395834%"),
    height: hp("26.159661715147926%"),
    top: hp("23.976960729380124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_158_1134: {
    width: wp("68.79401041666667%"),
    minWidth: wp("68.79401041666667%"),
    height: hp("35.4505820352523%"),
    minHeight: hp("35.4505820352523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7393229166666675%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_158_1135: {
    width: wp("68.80069986979167%"),
    height: hp("33.314589203381146%"),
    top: hp("-0.016642919655055266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.0012044270833335702%")
  },
  View_158_1136: {
    width: wp("48.431982421875%"),
    height: hp("28.78584731471995%"),
    top: hp("4.528741888661202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.368717447916662%")
  },
  View_158_1137: {
    width: wp("16.36587931315104%"),
    height: hp("9.486610120762892%"),
    top: hp("19.299233024889%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1138: {
    width: wp("16.06275634765625%"),
    height: hp("9.308069781527493%"),
    top: hp("0.01664291965506237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3031250000000085%")
  },
  ImageBackground_158_1141: {
    width: wp("8.560178629557292%"),
    height: hp("4.795568497454534%"),
    top: hp("4.529142119193992%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.937532552083333%")
  },
  ImageBackground_158_1142: {
    width: wp("7.041644287109375%"),
    height: hp("5.428318378052425%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.29176432291667%")
  },
  ImageBackground_158_1143: {
    width: wp("7.277640279134115%"),
    height: hp("3.2064628079940714%"),
    top: hp("6.28013402386442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1144: {
    width: wp("13.925480143229166%"),
    height: hp("7.51578221555616%"),
    top: hp("12.321146980660863%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.738899739583339%")
  },
  ImageBackground_158_1145: {
    width: wp("5.094649251302083%"),
    height: hp("2.51434409553236%"),
    top: hp("15.136418577100407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.221484375000003%")
  },
  ImageBackground_158_1146: {
    width: wp("16.744197591145834%"),
    height: hp("8.492151896158855%"),
    top: hp("9.45833133218067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.209570312500006%")
  },
  ImageBackground_158_1147: {
    width: wp("15.576003011067707%"),
    height: hp("8.508801069415984%"),
    top: hp("15.269628639429648%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.253385416666674%")
  },
  ImageBackground_158_1148: {
    width: wp("12.785306803385415%"),
    height: hp("7.5097256019467205%"),
    top: hp("16.26870410689891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.011621093750009%")
  },
  ImageBackground_158_1149: {
    width: wp("22.054195149739584%"),
    height: hp("11.405993810768337%"),
    top: hp("5.062516009221312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.44863281250001%")
  },
  ImageBackground_158_1150: {
    width: wp("17.43115234375%"),
    height: hp("9.641494125616354%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.00084635416667%")
  },
  ImageBackground_158_1151: {
    width: wp("12.915096028645834%"),
    height: hp("5.561533651716722%"),
    top: hp("10.923642017802258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.41617838541667%")
  },
  ImageBackground_158_1152: {
    width: wp("7.723099772135416%"),
    height: hp("3.2969532117166156%"),
    top: hp("14.220591060450822%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.183072916666674%")
  },
  ImageBackground_158_1153: {
    width: wp("21.2907958984375%"),
    height: hp("16.07176567035946%"),
    top: hp("0.41340478782445444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.91214192708334%")
  },
  ImageBackground_158_1156: {
    width: wp("13.988960774739583%"),
    height: hp("7.178253423972208%"),
    top: hp("6.719803940403008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.219824218750006%")
  },
  ImageBackground_158_1157: {
    width: wp("8.501900227864583%"),
    height: hp("5.6614339025945615%"),
    top: hp("12.289045156676913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.39563802083334%")
  },
  View_158_1158: {
    width: wp("6.941695149739584%"),
    height: hp("4.000660630523181%"),
    top: hp("10.494861707009907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.39225260416667%")
  },
  ImageBackground_158_1159: {
    width: wp("6.941695149739584%"),
    height: hp("4.000661672790193%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1160: {
    width: wp("6.500565592447917%"),
    height: hp("3.748705087463713%"),
    top: hp("0.07064068903688181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08629557291666856%")
  },
  View_158_1169: {
    width: wp("16.39853515625%"),
    height: hp("5.59136541814752%"),
    top: hp("0.15365517204576662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.26041666666667%")
  },
  ImageBackground_158_1170: {
    width: wp("16.39853515625%"),
    height: hp("5.59136541814752%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1172: {
    width: wp("16.39853515625%"),
    height: hp("5.59136541814752%"),
    top: hp("0.15365517204576662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.26041666666667%")
  },
  View_158_1173: {
    width: wp("11.909155273437499%"),
    height: hp("6.111023074290792%"),
    top: hp("5.478672381958678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.259863281250006%")
  },
  ImageBackground_158_1174: {
    width: wp("11.909155273437499%"),
    height: hp("6.111023074290792%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1176: {
    width: wp("11.909155273437499%"),
    height: hp("6.111023074290792%"),
    top: hp("5.478672381958678%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.259863281250006%")
  },
  ImageBackground_158_1177: {
    width: wp("5.842647298177083%"),
    height: hp("2.560764583733564%"),
    top: hp("15.179810237363391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.12929687500001%")
  },
  ImageBackground_158_1179: {
    width: wp("15.381306966145832%"),
    height: hp("8.175775913592895%"),
    top: hp("15.652599230490097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.9937825520833385%")
  },
  ImageBackground_158_1180: {
    width: wp("12.038946533203125%"),
    height: hp("6.976883268095757%"),
    top: hp("16.851506467725407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.368587239583334%")
  },
  ImageBackground_158_1181: {
    width: wp("7.089811197916666%"),
    height: hp("3.0936027485164788%"),
    top: hp("15.52949498911373%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.492740885416673%")
  },
  ImageBackground_158_1183: {
    width: wp("14.764750162760418%"),
    height: hp("7.726196122299777%"),
    top: hp("16.601729262721996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.117610677083341%")
  },
  ImageBackground_158_1184: {
    width: wp("11.19525146484375%"),
    height: hp("6.444045103312841%"),
    top: hp("17.883884450776982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.687109374999999%")
  },
  ImageBackground_158_1185: {
    width: wp("7.273805745442709%"),
    height: hp("3.208750323519681%"),
    top: hp("21.24296928364071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.206380208333336%")
  },
  ImageBackground_158_1186: {
    width: wp("7.599967447916667%"),
    height: hp("3.293419926544356%"),
    top: hp("16.495267941000684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.522330729166676%")
  },
  View_158_1188: {
    width: wp("7.218180338541667%"),
    height: hp("4.115520539830943%"),
    top: hp("8.290642076502731%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.68994140625%")
  },
  ImageBackground_158_1189: {
    width: wp("7.176582845052083%"),
    height: hp("3.8492254872139684%"),
    top: hp("0.26630339075307674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.041601562500005684%")
  },
  ImageBackground_158_1190: {
    width: wp("5.594645182291667%"),
    height: hp("3.265755033232475%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0069335937500057%")
  },
  ImageBackground_158_1191: {
    width: wp("2.885550944010417%"),
    height: hp("1.582726233643912%"),
    top: hp("2.39988233222336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_158_1192: {
    width: wp("3.79271240234375%"),
    height: hp("2.16804150023747%"),
    top: hp("0.9978080707821064%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3314453125000085%")
  },
  ImageBackground_158_1193: {
    width: wp("2.8192138671875%"),
    height: hp("1.565220316902536%"),
    top: hp("0.6028138874658495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9735026041666686%")
  },
  ImageBackground_158_1195: {
    width: wp("2.50142822265625%"),
    height: hp("1.718455455342277%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1197: {
    width: wp("2.038069661458333%"),
    height: hp("0.9560194171842982%"),
    top: hp("2.509545498206972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6365559895833286%")
  },
  ImageBackground_158_1199: {
    width: wp("1.58377685546875%"),
    height: hp("0.7562053659574581%"),
    top: hp("2.842570654030059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5391927083333456%")
  },
  ImageBackground_158_1201: {
    width: wp("1.5837687174479167%"),
    height: hp("0.7562053659574581%"),
    top: hp("2.9424782007769785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.376953125%")
  },
  ImageBackground_158_1203: {
    width: wp("1.5837727864583335%"),
    height: hp("0.7562032814234333%"),
    top: hp("3.0423857475239053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2146809895833428%")
  },
  View_158_1205: {
    width: wp("4.218497721354167%"),
    height: hp("1.012129861800397%"),
    top: hp("0.22206124060792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8506510416666657%")
  },
  ImageBackground_158_1206: {
    width: wp("4.218497721354167%"),
    height: hp("1.012129861800397%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1208: {
    width: wp("4.218497721354167%"),
    height: hp("1.012129861800397%"),
    top: hp("0.22206124060792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8506510416666657%")
  },
  ImageBackground_158_1209: {
    width: wp("10.794010416666666%"),
    height: hp("4.67293431850079%"),
    top: hp("5.039486077313867%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.826399739583337%")
  },
  View_158_1211: {
    width: wp("34.315087890625%"),
    height: hp("12.97208858969433%"),
    top: hp("17.9504728056694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4.871842447916663%")
  },
  ImageBackground_158_1212: {
    width: wp("14.408036295572918%"),
    height: hp("9.740996230495432%"),
    top: hp("3.213701091828895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.685514322916667%")
  },
  ImageBackground_158_1215: {
    width: wp("17.328245035807292%"),
    height: hp("8.492156065226904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04794921874999858%")
  },
  ImageBackground_158_1218: {
    width: wp("34.267146809895834%"),
    height: hp("12.525189509157276%"),
    top: hp("0.42951406676912995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.04794921874999858%")
  },
  ImageBackground_158_1224: {
    width: wp("5.774498494466146%"),
    height: hp("2.8666491065520407%"),
    top: hp("5.636663384776298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1225: {
    width: wp("6.636903889973958%"),
    height: hp("2.4948828858755974%"),
    top: hp("10.477201534750684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.676985677083337%")
  },
  View_158_1226: {
    width: wp("0%"),
    height: hp("0.06657793222229338%"),
    top: hp("6.377440072148225%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.48597005208333%")
  },
  View_158_1227: {
    width: wp("0%"),
    height: hp("0.06657793222229338%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_158_1229: {
    width: wp("39.38675944010417%"),
    height: hp("27.025570895502476%"),
    top: hp("0.3771338957906458%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.494303385416671%")
  },
  ImageBackground_158_1230: {
    width: wp("8.39755655924479%"),
    height: hp("4.529965510133837%"),
    top: hp("22.495607469902662%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1232: {
    width: wp("13.105745442708333%"),
    height: hp("3.9942272373887358%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.281022135416663%")
  },
  ImageBackground_158_1234: {
    width: wp("2.6606363932291663%"),
    height: hp("1.5933292159617272%"),
    top: hp("11.918615122310445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.740885416666671%")
  },
  ImageBackground_158_1236: {
    width: wp("4.41319580078125%"),
    height: hp("2.0314544927878457%"),
    top: hp("16.7511820141735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.57828776041667%")
  },
  View_158_1237: {
    width: wp("47.46604817708333%"),
    height: hp("27.03201835924159%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1238: {
    width: wp("10.116925048828126%"),
    height: hp("14.767648874084808%"),
    top: hp("10.923241787269465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.8439453125%")
  },
  ImageBackground_158_1239: {
    width: wp("7.2363525390625005%"),
    height: hp("13.792309995557442%"),
    top: hp("11.900604748335041%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.822200520833338%")
  },
  View_158_1240: {
    width: wp("47.46604817708333%"),
    height: hp("15.387742506350325%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_158_1241: {
    width: wp("11.41005859375%"),
    height: hp("5.07226641712293%"),
    top: hp("10.31547504696038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1242: {
    width: wp("0.6120198567708333%"),
    height: hp("0.44027964274088544%"),
    top: hp("0.4289637497865435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.3984375%")
  },
  ImageBackground_158_1243: {
    width: wp("0.4865112622578939%"),
    height: hp("0.3048526784761356%"),
    top: hp("1.420501542221654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.7314453125%")
  },
  ImageBackground_158_1244: {
    width: wp("11.048587036132812%"),
    height: hp("4.846659384138597%"),
    top: hp("0.2256132865864089%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1245: {
    width: wp("10.357149251302083%"),
    height: hp("3.7820969774423405%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0528971354166679%")
  },
  ImageBackground_158_1246: {
    width: wp("7.528400675455729%"),
    height: hp("1.7025952782135843%"),
    top: hp("1.6567876430157114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.520377604166665%")
  },
  ImageBackground_158_1247: {
    width: wp("1.6248336791992188%"),
    height: hp("0.8968916095671107%"),
    top: hp("2.2837154200819683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.788216145833335%")
  },
  ImageBackground_158_1248: {
    width: wp("1.0695048014322917%"),
    height: hp("0.8658664474070398%"),
    top: hp("2.289535439079579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.356770833333336%")
  },
  ImageBackground_158_1249: {
    width: wp("4.607900492350261%"),
    height: hp("1.6284056699992528%"),
    top: hp("0.02494770321038331%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.355436197916667%")
  },
  ImageBackground_158_1252: {
    width: wp("1.8496500651041667%"),
    height: hp("3.2803009116584487%"),
    top: hp("8.125813802083332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.037988281249998%")
  },
  ImageBackground_158_1253: {
    width: wp("10.713057454427084%"),
    height: hp("9.134183164502753%"),
    top: hp("4.797480015155397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.560449218749998%")
  },
  ImageBackground_158_1254: {
    width: wp("2.1092508951822917%"),
    height: hp("2.481041058816545%"),
    top: hp("4.945415225836751%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.129394531249996%")
  },
  ImageBackground_158_1255: {
    width: wp("3.812876383463542%"),
    height: hp("6.6605145813988855%"),
    top: hp("5.3117595735143475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.332747395833334%")
  },
  ImageBackground_158_1256: {
    width: wp("4.3833068847656245%"),
    height: hp("3.777300204084219%"),
    top: hp("1.7012132321550553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.37112630208333%")
  },
  ImageBackground_158_1257: {
    width: wp("7.116623942057291%"),
    height: hp("8.682987859340313%"),
    top: hp("4.6879836118937845%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.438736979166666%")
  },
  ImageBackground_158_1258: {
    width: wp("3.6918233235677085%"),
    height: hp("6.294186388859983%"),
    top: hp("4.745600132342897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.064485677083336%")
  },
  ImageBackground_158_1259: {
    width: wp("6.068153889973958%"),
    height: hp("8.592082372780055%"),
    top: hp("4.778885971653008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.471191406250004%")
  },
  ImageBackground_158_1260: {
    width: wp("2.592268880208333%"),
    height: hp("6.177626020921384%"),
    top: hp("4.862167275017075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.39495442708333%")
  },
  ImageBackground_158_1261: {
    width: wp("8.745326741536458%"),
    height: hp("3.8814880808845897%"),
    top: hp("2.8785747257086776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.33600260416667%")
  },
  ImageBackground_158_1262: {
    width: wp("13.866774495442707%"),
    height: hp("5.64478629273795%"),
    top: hp("4.84550767908982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.795149739583334%")
  },
  ImageBackground_158_1263: {
    width: wp("12.862544759114583%"),
    height: hp("4.9287806443177935%"),
    top: hp("5.561520102245563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.827604166666667%")
  },
  ImageBackground_158_1264: {
    width: wp("8.55560302734375%"),
    height: hp("3.9711147058205527%"),
    top: hp("2.820557974726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.725390625%")
  },
  ImageBackground_158_1265: {
    width: wp("3.570449829101562%"),
    height: hp("1.4846843448493%"),
    top: hp("9.924149643528008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.230631510416664%")
  },
  ImageBackground_158_1266: {
    width: wp("3.0977681477864585%"),
    height: hp("6.260883873277674%"),
    top: hp("4.745600132342897%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.934700520833335%")
  },
  ImageBackground_158_1267: {
    width: wp("12.591682942708331%"),
    height: hp("5.045338406588861%"),
    top: hp("4.962074821764002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.11962890625%")
  },
  ImageBackground_158_1269: {
    width: wp("1.882098388671875%"),
    height: hp("0.46623626041933486%"),
    top: hp("10.057359705857245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.606933593750004%")
  },
  ImageBackground_158_1270: {
    width: wp("1.753594970703125%"),
    height: hp("3.346908027357091%"),
    top: hp("6.960225756702528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.866536458333332%")
  },
  ImageBackground_158_1272: {
    width: wp("0.45430297851562507%"),
    height: hp("1.7650359315298945%"),
    top: hp("7.043490383794399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.385742187499996%")
  },
  ImageBackground_158_1274: {
    width: wp("4.040028889973958%"),
    height: hp("2.1771550829944712%"),
    top: hp("4.783071715975069%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.20511067708333%")
  },
  ImageBackground_158_1276: {
    width: wp("0.7681925455729166%"),
    height: hp("3.5800271998337707%"),
    top: hp("6.810372774718235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.176432291666668%")
  },
  ImageBackground_158_1278: {
    width: wp("1.4927001953124999%"),
    height: hp("1.4653117278885972%"),
    top: hp("5.028679852928622%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.55719401041667%")
  },
  ImageBackground_158_1280: {
    width: wp("0.45430094401041665%"),
    height: hp("2.364482775411971%"),
    top: hp("6.610557681224385%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.08232421875%")
  },
  ImageBackground_158_1282: {
    width: wp("6.42108154296875%"),
    height: hp("3.2101341935454824%"),
    top: hp("0.4864468600580629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.854850260416672%")
  },
  ImageBackground_158_1283: {
    width: wp("3.709682210286459%"),
    height: hp("1.1822413877059854%"),
    top: hp("4.579104230703553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.267838541666666%")
  },
  ImageBackground_158_1284: {
    width: wp("1.0880757649739583%"),
    height: hp("0.8832191508975837%"),
    top: hp("4.67899510117828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.7580078125%")
  },
  ImageBackground_158_1285: {
    width: wp("0.7463500976562499%"),
    height: hp("0.5661438071662611%"),
    top: hp("5.461612555498636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.740006510416666%")
  },
  ImageBackground_158_1286: {
    width: wp("5.419405110677084%"),
    height: hp("5.211851505633912%"),
    top: hp("5.811297307248978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.132096354166666%")
  },
  ImageBackground_158_1287: {
    width: wp("0.811248779296875%"),
    height: hp("1.2654961132612383%"),
    top: hp("3.7964867763831975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.350585937500004%")
  },
  ImageBackground_158_1288: {
    width: wp("1.5321411132812501%"),
    height: hp("1.6151742205593753%"),
    top: hp("2.0813988857581975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.819108072916666%")
  },
  ImageBackground_158_1289: {
    width: wp("2.19830322265625%"),
    height: hp("1.1813283618030652%"),
    top: hp("0.7835179730191264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.745930989583332%")
  },
  ImageBackground_158_1291: {
    width: wp("1.1787475585937501%"),
    height: hp("1.0038259902287052%"),
    top: hp("0.9776631339651658%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.429557291666665%")
  },
  ImageBackground_158_1293: {
    width: wp("1.6230102539062499%"),
    height: hp("0.7838189276189752%"),
    top: hp("1.5806604604252072%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.247298177083334%")
  },
  ImageBackground_158_1295: {
    width: wp("2.59307861328125%"),
    height: hp("1.082333580392306%"),
    top: hp("0.9657729518869544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.330045572916664%")
  },
  ImageBackground_158_1297: {
    width: wp("18.107295735677084%"),
    height: hp("3.030961979933775%"),
    top: hp("0.008371488644126401%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.358756510416672%")
  },
  ImageBackground_158_1306: {
    width: wp("1.5783121744791666%"),
    height: hp("0.6464769280021959%"),
    top: hp("1.4892744887721996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.50149739583334%")
  },
  ImageBackground_158_1307: {
    width: wp("2.0882853190104167%"),
    height: hp("1.0861934859895968%"),
    top: hp("1.9276770086236361%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.04511718750001%")
  },
  ImageBackground_158_1308: {
    width: wp("1.525146484375%"),
    height: hp("0.46946728815797895%"),
    top: hp("2.39589670316769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.631282552083334%")
  },
  ImageBackground_158_1309: {
    width: wp("2.952950032552083%"),
    height: hp("0.6660514841965639%"),
    top: hp("2.181306432505121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.179687499999996%")
  },
  View_158_1310: {
    width: wp("6.26285400390625%"),
    height: hp("0.749307838294024%"),
    top: hp("0.5328402493169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.42200520833333%")
  },
  ImageBackground_158_1311: {
    width: wp("6.26285400390625%"),
    height: hp("0.749307838294024%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1313: {
    width: wp("6.26285400390625%"),
    height: hp("0.749307838294024%"),
    top: hp("0.5328402493169406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.42200520833333%")
  },
  View_158_1314: {
    width: wp("1.5251546223958334%"),
    height: hp("1.831641223261265%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.82060546875%")
  },
  ImageBackground_158_1315: {
    width: wp("1.5251546223958334%"),
    height: hp("1.831641223261265%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_158_1317: {
    width: wp("1.5251546223958334%"),
    height: hp("1.831641223261265%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.82060546875%")
  },
  ImageBackground_158_1318: {
    width: wp("14.045652262369792%"),
    height: hp("6.767188525590741%"),
    top: hp("10.383630971439551%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.636686197916664%")
  },
  ImageBackground_158_1319: {
    width: wp("12.541404215494792%"),
    height: hp("6.06253264380283%"),
    top: hp("11.054984337645152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.26998697916667%")
  },
  ImageBackground_158_1320: {
    width: wp("4.776058451334635%"),
    height: hp("1.505608376258058%"),
    top: hp("25.52640320824795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.01689453125%")
  },
  ImageBackground_158_1323: {
    width: wp("4.80853271484375%"),
    height: hp("1.6170168183540385%"),
    top: hp("16.749747854764344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.02666015625%")
  },
  ImageBackground_158_1326: {
    width: wp("8.580242919921876%"),
    height: hp("2.6877543965324024%"),
    top: hp("11.266022562329237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.698339843749995%")
  },
  ImageBackground_158_1328: {
    width: wp("2.133587646484375%"),
    height: hp("1.5111026868142716%"),
    top: hp("10.910751259392075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.300292968749996%")
  },
  ImageBackground_158_1330: {
    width: wp("0.9436971028645833%"),
    height: hp("0.9990775520032873%"),
    top: hp("11.123040204491119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.082389322916665%")
  },
  ImageBackground_158_1332: {
    width: wp("2.88804931640625%"),
    height: hp("1.098984056483201%"),
    top: hp("13.487535487107245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.028776041666664%")
  },
  ImageBackground_158_1334: {
    width: wp("3.239483642578125%"),
    height: hp("6.96023513710564%"),
    top: hp("13.787258127348018%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.44208984375%")
  },
  ImageBackground_158_1336: {
    width: wp("2.5635498046875%"),
    height: hp("0.6993507426944587%"),
    top: hp("19.398740341103142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.775130208333334%")
  },
  ImageBackground_158_1338: {
    width: wp("1.6369002024332682%"),
    height: hp("0.3462658228118563%"),
    top: hp("19.03938335147712%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.28203125%")
  },
  ImageBackground_158_1340: {
    width: wp("2.596000162760417%"),
    height: hp("0.7160082540876879%"),
    top: hp("24.97692003927596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.854654947916668%")
  },
  ImageBackground_158_1342: {
    width: wp("0.9341939290364584%"),
    height: hp("2.3478294330867913%"),
    top: hp("12.172077783469948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.253255208333332%")
  },
  ImageBackground_158_1344: {
    width: wp("11.519746907552083%"),
    height: hp("3.147092933863239%"),
    top: hp("11.372817409494534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.253255208333332%")
  },
  ImageBackground_158_1346: {
    width: wp("1.7580240885416667%"),
    height: hp("0.9782593106962945%"),
    top: hp("11.793259584187158%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.66396484375001%")
  },
  ImageBackground_158_1348: {
    width: wp("2.498649088541667%"),
    height: hp("0.9657719096199412%"),
    top: hp("16.235001360783812%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.474999999999994%")
  },
  ImageBackground_158_1350: {
    width: wp("0.5191996256510417%"),
    height: hp("2.11471182401063%"),
    top: hp("8.82516662931182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.822753906250004%")
  },
  ImageBackground_158_1352: {
    width: wp("1.0583394368489585%"),
    height: hp("1.6318263903341659%"),
    top: hp("12.371892876963798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.37626953125%")
  },
  ImageBackground_158_1354: {
    width: wp("0.4664693196614583%"),
    height: hp("0.45648194401642017%"),
    top: hp("2.5074442879098378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.55719401041667%")
  },
  View_158_1356: {
    width: wp("2.758251953125%"),
    height: hp("0.7672505300553119%"),
    top: hp("2.2299677947831285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.961197916666666%")
  },
  ImageBackground_158_1357: {
    width: wp("1.4017171223958333%"),
    height: hp("0.44909487656556846%"),
    top: hp("0.318149921021174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.10328776041667%")
  },
  ImageBackground_158_1359: {
    width: wp("0.4867513020833334%"),
    height: hp("0.08321668280929816%"),
    top: hp("0.5008218066939882%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.271516927083333%")
  },
  ImageBackground_158_1361: {
    width: wp("1.2331013997395832%"),
    height: hp("0.7672505300553119%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_907_1767: {
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
  View_595_4853: {
    width: wp("100%"),
    height: hp("10.655737704918032%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_567_3698: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("3.415300546448086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I567_3698_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_135_482: {
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
  View_135_483: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_135_484: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_135_484: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_135_485: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_135_486: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_135_487: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_135_490: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5041070323172812%")
  },
  View_135_491: {
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
  View_135_492: {
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
  View_135_493: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_135_494: {
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
  View_135_495: {
    width: wp("0.8009252548217773%"),
    minWidth: wp("0.8009252548217773%"),
    height: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2814778645833371%"),
    top: hp("0.6420865084955598%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_135_496: {
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
  View_135_497: {
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
  View_135_498: {
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
  ImageBackground_135_499: {
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
