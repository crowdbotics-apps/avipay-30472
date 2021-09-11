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
      <View style={styles.View_904_2289}>
        <View style={styles.View_904_2432}>
          <View style={styles.View_904_2433} />
          <View style={styles.View_904_2434}>
            <View style={styles.View_904_2435}>
              <View style={styles.View_904_2436} />
              <View style={styles.View_904_2437}>
                <View style={styles.View_904_2438}>
                  <Text style={styles.Text_904_2438}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2439}
                />
                <View style={styles.View_904_2440}>
                  <Text style={styles.Text_904_2440}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2441}>
                <View style={styles.View_904_2442}>
                  <Text style={styles.Text_904_2442}>Burgers</Text>
                </View>
                <View style={styles.View_904_2443}>
                  <Text style={styles.Text_904_2443}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2444}>
                  <Text style={styles.Text_904_2444}>Chillox Burger</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2445}
                />
              </View>
              <View style={styles.View_904_2446}>
                <View style={styles.View_904_2447} />
              </View>
            </View>
            <View style={styles.View_904_2448}>
              <View style={styles.View_904_2449} />
              <View style={styles.View_904_2450}>
                <View style={styles.View_904_2451}>
                  <Text style={styles.Text_904_2451}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2452}
                />
                <View style={styles.View_904_2453}>
                  <Text style={styles.Text_904_2453}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2454}>
                <View style={styles.View_904_2455}>
                  <Text style={styles.Text_904_2455}>Sandwich</Text>
                </View>
                <View style={styles.View_904_2456}>
                  <Text style={styles.Text_904_2456}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2457}>
                  <Text style={styles.Text_904_2457}>Sandwich</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2458}
                />
              </View>
              <View style={styles.View_904_2459}>
                <View style={styles.View_904_2460} />
              </View>
            </View>
            <View style={styles.View_904_2461}>
              <View style={styles.View_904_2462} />
              <View style={styles.View_904_2463}>
                <View style={styles.View_904_2464}>
                  <Text style={styles.Text_904_2464}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2465}
                />
                <View style={styles.View_904_2466}>
                  <Text style={styles.Text_904_2466}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2467}>
                <View style={styles.View_904_2468}>
                  <Text style={styles.Text_904_2468}>Noodle</Text>
                </View>
                <View style={styles.View_904_2469}>
                  <Text style={styles.Text_904_2469}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2470}>
                  <Text style={styles.Text_904_2470}> Noodle Cheese</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2471}
                />
              </View>
              <View style={styles.View_904_2472}>
                <View style={styles.View_904_2473} />
              </View>
            </View>
            <View style={styles.View_904_2474}>
              <View style={styles.View_904_2475} />
              <View style={styles.View_904_2476}>
                <View style={styles.View_904_2477}>
                  <Text style={styles.Text_904_2477}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2478}
                />
                <View style={styles.View_904_2479}>
                  <Text style={styles.Text_904_2479}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2480}>
                <View style={styles.View_904_2481}>
                  <Text style={styles.Text_904_2481}>Sandwich</Text>
                </View>
                <View style={styles.View_904_2482}>
                  <Text style={styles.Text_904_2482}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2483}>
                  <Text style={styles.Text_904_2483}>Spicy noodles</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2484}
                />
              </View>
              <View style={styles.View_904_2485}>
                <View style={styles.View_904_2486} />
              </View>
            </View>
            <View style={styles.View_904_2487}>
              <View style={styles.View_904_2488} />
              <View style={styles.View_904_2489}>
                <View style={styles.View_904_2490}>
                  <Text style={styles.Text_904_2490}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2491}
                />
                <View style={styles.View_904_2492}>
                  <Text style={styles.Text_904_2492}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2493}>
                <View style={styles.View_904_2494}>
                  <Text style={styles.Text_904_2494}>Sandwich</Text>
                </View>
                <View style={styles.View_904_2495}>
                  <Text style={styles.Text_904_2495}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2496}>
                  <Text style={styles.Text_904_2496}>Sandwich</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2497}
                />
              </View>
              <View style={styles.View_904_2498}>
                <View style={styles.View_904_2499} />
              </View>
            </View>
          </View>
          <View style={styles.View_904_2500}>
            <View style={styles.View_904_2501}>
              <Text style={styles.Text_904_2501}>Freeship</Text>
            </View>
            <View style={styles.View_904_2502}>
              <Text style={styles.Text_904_2502}>View all</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_904_2503}>
          <View style={styles.View_904_2504} />
          <View style={styles.View_904_2505}>
            <View style={styles.View_904_2506}>
              <View style={styles.View_904_2507} />
              <View style={styles.View_904_2508}>
                <View style={styles.View_904_2509}>
                  <Text style={styles.Text_904_2509}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2510}
                />
                <View style={styles.View_904_2511}>
                  <Text style={styles.Text_904_2511}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2512}>
                <View style={styles.View_904_2513}>
                  <Text style={styles.Text_904_2513}>Burgers</Text>
                </View>
                <View style={styles.View_904_2514}>
                  <Text style={styles.Text_904_2514}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2515}>
                  <Text style={styles.Text_904_2515}>Chillox Burger</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2516}
                />
              </View>
              <View style={styles.View_904_2517}>
                <View style={styles.View_904_2518} />
              </View>
            </View>
            <View style={styles.View_904_2519}>
              <View style={styles.View_904_2520} />
              <View style={styles.View_904_2521}>
                <View style={styles.View_904_2522}>
                  <Text style={styles.Text_904_2522}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2523}
                />
                <View style={styles.View_904_2524}>
                  <Text style={styles.Text_904_2524}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2525}>
                <View style={styles.View_904_2526}>
                  <Text style={styles.Text_904_2526}>Sandwich</Text>
                </View>
                <View style={styles.View_904_2527}>
                  <Text style={styles.Text_904_2527}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2528}>
                  <Text style={styles.Text_904_2528}>Sandwich</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2529}
                />
              </View>
              <View style={styles.View_904_2530}>
                <View style={styles.View_904_2531} />
              </View>
            </View>
            <View style={styles.View_904_2532}>
              <View style={styles.View_904_2533} />
              <View style={styles.View_904_2534}>
                <View style={styles.View_904_2535}>
                  <Text style={styles.Text_904_2535}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2536}
                />
                <View style={styles.View_904_2537}>
                  <Text style={styles.Text_904_2537}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2538}>
                <View style={styles.View_904_2539}>
                  <Text style={styles.Text_904_2539}>Noodle</Text>
                </View>
                <View style={styles.View_904_2540}>
                  <Text style={styles.Text_904_2540}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2541}>
                  <Text style={styles.Text_904_2541}> Noodle Cheese</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2542}
                />
              </View>
              <View style={styles.View_904_2543}>
                <View style={styles.View_904_2544} />
              </View>
            </View>
            <View style={styles.View_904_2545}>
              <View style={styles.View_904_2546} />
              <View style={styles.View_904_2547}>
                <View style={styles.View_904_2548}>
                  <Text style={styles.Text_904_2548}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2549}
                />
                <View style={styles.View_904_2550}>
                  <Text style={styles.Text_904_2550}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2551}>
                <View style={styles.View_904_2552}>
                  <Text style={styles.Text_904_2552}>Sandwich</Text>
                </View>
                <View style={styles.View_904_2553}>
                  <Text style={styles.Text_904_2553}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2554}>
                  <Text style={styles.Text_904_2554}>Spicy noodles</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2555}
                />
              </View>
              <View style={styles.View_904_2556}>
                <View style={styles.View_904_2557} />
              </View>
            </View>
            <View style={styles.View_904_2558}>
              <View style={styles.View_904_2559} />
              <View style={styles.View_904_2560}>
                <View style={styles.View_904_2561}>
                  <Text style={styles.Text_904_2561}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2562}
                />
                <View style={styles.View_904_2563}>
                  <Text style={styles.Text_904_2563}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2564}>
                <View style={styles.View_904_2565}>
                  <Text style={styles.Text_904_2565}>Sandwich</Text>
                </View>
                <View style={styles.View_904_2566}>
                  <Text style={styles.Text_904_2566}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2567}>
                  <Text style={styles.Text_904_2567}>Sandwich</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2568}
                />
              </View>
              <View style={styles.View_904_2569}>
                <View style={styles.View_904_2570} />
              </View>
            </View>
          </View>
          <View style={styles.View_904_2571}>
            <View style={styles.View_904_2572}>
              <Text style={styles.Text_904_2572}>Fast Food for life</Text>
            </View>
            <View style={styles.View_904_2573}>
              <Text style={styles.Text_904_2573}>View all</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_904_2361}>
          <View style={styles.View_904_2362} />
          <View style={styles.View_904_2363}>
            <View style={styles.View_904_2364}>
              <View style={styles.View_904_2365} />
              <View style={styles.View_904_2366}>
                <View style={styles.View_904_2367}>
                  <Text style={styles.Text_904_2367}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2368}
                />
                <View style={styles.View_904_2369}>
                  <Text style={styles.Text_904_2369}>Off 50%</Text>
                </View>
              </View>
              <View style={styles.View_904_2370}>
                <View style={styles.View_904_2371}>
                  <Text style={styles.Text_904_2371}>Burgers</Text>
                </View>
                <View style={styles.View_904_2372}>
                  <Text style={styles.Text_904_2372}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2373}>
                  <Text style={styles.Text_904_2373}>Chillox Burger</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2374}
                />
              </View>
              <View style={styles.View_904_2375}>
                <View style={styles.View_904_2376} />
              </View>
            </View>
            <View style={styles.View_904_2377}>
              <View style={styles.View_904_2378} />
              <View style={styles.View_904_2379}>
                <View style={styles.View_904_2380}>
                  <Text style={styles.Text_904_2380}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2381}
                />
                <View style={styles.View_904_2382}>
                  <Text style={styles.Text_904_2382}>Off 50%</Text>
                </View>
              </View>
              <View style={styles.View_904_2383}>
                <View style={styles.View_904_2384}>
                  <Text style={styles.Text_904_2384}>fresh fruit</Text>
                </View>
                <View style={styles.View_904_2385}>
                  <Text style={styles.Text_904_2385}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2386}>
                  <Text style={styles.Text_904_2386}>Fresh fruit</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2387}
                />
              </View>
              <View style={styles.View_904_2388}>
                <View style={styles.View_904_2389} />
              </View>
            </View>
            <View style={styles.View_904_2390}>
              <View style={styles.View_904_2391} />
              <View style={styles.View_904_2392}>
                <View style={styles.View_904_2393}>
                  <Text style={styles.Text_904_2393}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2394}
                />
                <View style={styles.View_904_2395}>
                  <Text style={styles.Text_904_2395}>Off 50%</Text>
                </View>
              </View>
              <View style={styles.View_904_2396}>
                <View style={styles.View_904_2397}>
                  <Text style={styles.Text_904_2397}>Film</Text>
                </View>
                <View style={styles.View_904_2398}>
                  <Text style={styles.Text_904_2398}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2399}>
                  <Text style={styles.Text_904_2399}>Cinema 3D</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2400}
                />
              </View>
              <View style={styles.View_904_2401}>
                <View style={styles.View_904_2402} />
              </View>
            </View>
            <View style={styles.View_904_2403}>
              <View style={styles.View_904_2404} />
              <View style={styles.View_904_2405}>
                <View style={styles.View_904_2406}>
                  <Text style={styles.Text_904_2406}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2407}
                />
                <View style={styles.View_904_2408}>
                  <Text style={styles.Text_904_2408}>Off 50%</Text>
                </View>
              </View>
              <View style={styles.View_904_2409}>
                <View style={styles.View_904_2410}>
                  <Text style={styles.Text_904_2410}>Sandwich</Text>
                </View>
                <View style={styles.View_904_2411}>
                  <Text style={styles.Text_904_2411}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2412}>
                  <Text style={styles.Text_904_2412}>Spicy noodles</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2413}
                />
              </View>
              <View style={styles.View_904_2414}>
                <View style={styles.View_904_2415} />
              </View>
            </View>
            <View style={styles.View_904_2416}>
              <View style={styles.View_904_2417} />
              <View style={styles.View_904_2418}>
                <View style={styles.View_904_2419}>
                  <Text style={styles.Text_904_2419}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2420}
                />
                <View style={styles.View_904_2421}>
                  <Text style={styles.Text_904_2421}>Off 50%</Text>
                </View>
              </View>
              <View style={styles.View_904_2422}>
                <View style={styles.View_904_2423}>
                  <Text style={styles.Text_904_2423}>Sandwich</Text>
                </View>
                <View style={styles.View_904_2424}>
                  <Text style={styles.Text_904_2424}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2425}>
                  <Text style={styles.Text_904_2425}>Sandwich</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2426}
                />
              </View>
              <View style={styles.View_904_2427}>
                <View style={styles.View_904_2428} />
              </View>
            </View>
          </View>
          <View style={styles.View_904_2429}>
            <View style={styles.View_904_2430}>
              <Text style={styles.Text_904_2430}>Sale off 50%</Text>
            </View>
            <View style={styles.View_904_2431}>
              <Text style={styles.Text_904_2431}>View all</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_904_2290}>
          <View style={styles.View_904_2291} />
          <View style={styles.View_904_2295}>
            <View style={styles.View_904_2296}>
              <View style={styles.View_904_2297} />
              <View style={styles.View_904_2298}>
                <View style={styles.View_904_2299}>
                  <Text style={styles.Text_904_2299}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2300}
                />
                <View style={styles.View_904_2301}>
                  <Text style={styles.Text_904_2301}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2302}>
                <View style={styles.View_904_2303}>
                  <Text style={styles.Text_904_2303}>Burgers</Text>
                </View>
                <View style={styles.View_904_2304}>
                  <Text style={styles.Text_904_2304}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2305}>
                  <Text style={styles.Text_904_2305}>Chillox Burger</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2306}
                />
              </View>
              <View style={styles.View_904_2307}>
                <View style={styles.View_904_2308} />
              </View>
            </View>
            <View style={styles.View_904_2309}>
              <View style={styles.View_904_2310} />
              <View style={styles.View_904_2311}>
                <View style={styles.View_904_2312}>
                  <Text style={styles.Text_904_2312}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2313}
                />
                <View style={styles.View_904_2314}>
                  <Text style={styles.Text_904_2314}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2315}>
                <View style={styles.View_904_2316}>
                  <Text style={styles.Text_904_2316}>Sandwich</Text>
                </View>
                <View style={styles.View_904_2317}>
                  <Text style={styles.Text_904_2317}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2318}>
                  <Text style={styles.Text_904_2318}>Sandwich</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2319}
                />
              </View>
              <View style={styles.View_904_2320}>
                <View style={styles.View_904_2321} />
              </View>
            </View>
            <View style={styles.View_904_2322}>
              <View style={styles.View_904_2323} />
              <View style={styles.View_904_2324}>
                <View style={styles.View_904_2325}>
                  <Text style={styles.Text_904_2325}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2326}
                />
                <View style={styles.View_904_2327}>
                  <Text style={styles.Text_904_2327}>Off 50%</Text>
                </View>
              </View>
              <View style={styles.View_904_2328}>
                <View style={styles.View_904_2329}>
                  <Text style={styles.Text_904_2329}>Noodle</Text>
                </View>
                <View style={styles.View_904_2330}>
                  <Text style={styles.Text_904_2330}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2331}>
                  <Text style={styles.Text_904_2331}> Noodle Cheese</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2332}
                />
              </View>
              <View style={styles.View_904_2333}>
                <View style={styles.View_904_2334} />
              </View>
            </View>
            <View style={styles.View_904_2335}>
              <View style={styles.View_904_2336} />
              <View style={styles.View_904_2337}>
                <View style={styles.View_904_2338}>
                  <Text style={styles.Text_904_2338}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2339}
                />
                <View style={styles.View_904_2340}>
                  <Text style={styles.Text_904_2340}>Bill 1$</Text>
                </View>
              </View>
              <View style={styles.View_904_2341}>
                <View style={styles.View_904_2342}>
                  <Text style={styles.Text_904_2342}>Sandwich</Text>
                </View>
                <View style={styles.View_904_2343}>
                  <Text style={styles.Text_904_2343}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2344}>
                  <Text style={styles.Text_904_2344}>Spicy noodles</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2345}
                />
              </View>
              <View style={styles.View_904_2346}>
                <View style={styles.View_904_2347} />
              </View>
            </View>
            <View style={styles.View_904_2348}>
              <View style={styles.View_904_2349} />
              <View style={styles.View_904_2350}>
                <View style={styles.View_904_2351}>
                  <Text style={styles.Text_904_2351}>4.8</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9f/791a/68dbc5f015711131089197675564515d"
                  }}
                  style={styles.ImageBackground_904_2352}
                />
                <View style={styles.View_904_2353}>
                  <Text style={styles.Text_904_2353}>Freeship</Text>
                </View>
              </View>
              <View style={styles.View_904_2354}>
                <View style={styles.View_904_2355}>
                  <Text style={styles.Text_904_2355}>Sandwich</Text>
                </View>
                <View style={styles.View_904_2356}>
                  <Text style={styles.Text_904_2356}>Fastfood</Text>
                </View>
                <View style={styles.View_904_2357}>
                  <Text style={styles.Text_904_2357}>Sandwich</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fae5/4e78/2779329032ac29f4edb2324425f5f405"
                  }}
                  style={styles.ImageBackground_904_2358}
                />
              </View>
              <View style={styles.View_904_2359}>
                <View style={styles.View_904_2360} />
              </View>
            </View>
          </View>
          <View style={styles.View_904_2292}>
            <View style={styles.View_904_2293}>
              <Text style={styles.Text_904_2293}>Top Trending Deals</Text>
            </View>
            <View style={styles.View_904_2294}>
              <Text style={styles.Text_904_2294}>View all</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_526_2830}>
        <View style={styles.View_526_2831} />
        <View style={styles.View_526_2832}>
          <View style={styles.View_526_2833}>
            <View style={styles.View_526_2834}>
              <View style={styles.View_526_2835}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c40c/7dce/c6c6574bf1431ed3185c6b38931fcc87"
                  }}
                  style={styles.ImageBackground_526_2837}
                />
                <View style={styles.View_271_307}>
                  <View style={styles.View_271_308}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b11/0267/5ea22550af6ab5668bef39d81bd57a43"
                      }}
                      style={styles.ImageBackground_577_3452}
                    />
                    <View style={styles.View_577_3474} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_526_2842}>
              <Text style={styles.Text_526_2842}>All</Text>
            </View>
          </View>
          <View style={styles.View_593_3760}>
            <View style={styles.View_593_3761}>
              <View style={styles.View_593_3762}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/752c/b230/fc488e70df307c44145804ca8190c8ad"
                  }}
                  style={styles.ImageBackground_593_3763}
                />
                <View style={styles.View_593_3837}>
                  <View style={styles.View_593_3838}>
                    <View style={styles.View_593_3839}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efc7/b822/0e27e05a200164910bf6490caa16aad8"
                        }}
                        style={styles.ImageBackground_593_3840}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_593_3765}>
              <Text style={styles.Text_593_3765}>Internet</Text>
            </View>
          </View>
          <View style={styles.View_593_3771}>
            <View style={styles.View_593_3772}>
              <View style={styles.View_593_3773}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f50c/6fa9/25dd4058d95464be864656bb29f2247a"
                  }}
                  style={styles.ImageBackground_593_3774}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03bc/4e96/ecab57d118baf8d066a3fab52eda1771"
                  }}
                  style={styles.ImageBackground_593_3851}
                />
              </View>
            </View>
            <View style={styles.View_593_3776}>
              <Text style={styles.Text_593_3776}>Electricity</Text>
            </View>
          </View>
          <View style={styles.View_593_3782}>
            <View style={styles.View_593_3783}>
              <View style={styles.View_593_3784}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/440a/51dd/3c8913750c620a99ce54b5e07b69c8e9"
                  }}
                  style={styles.ImageBackground_593_3785}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa38/34c2/c762a52188a6b108fa7e3551865d7721"
                  }}
                  style={styles.ImageBackground_593_3854}
                />
              </View>
            </View>
            <View style={styles.View_593_3787}>
              <Text style={styles.Text_593_3787}>Market</Text>
            </View>
          </View>
          <View style={styles.View_593_3826}>
            <View style={styles.View_593_3827}>
              <View style={styles.View_593_3828}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c21/37f7/6455df7bf3853a959680cde0fd141cd7"
                  }}
                  style={styles.ImageBackground_593_3829}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8961/7cd4/c02b08896e04c2bee3d854f9f352cd83"
                  }}
                  style={styles.ImageBackground_593_3858}
                />
              </View>
            </View>
            <View style={styles.View_593_3831}>
              <Text style={styles.Text_593_3831}>Medical</Text>
            </View>
          </View>
          <View style={styles.View_593_3793}>
            <View style={styles.View_593_3794}>
              <View style={styles.View_593_3795}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c40c/7dce/c6c6574bf1431ed3185c6b38931fcc87"
                  }}
                  style={styles.ImageBackground_593_3796}
                />
                <View style={styles.View_593_3797}>
                  <View style={styles.View_I593_3797_271_308}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b11/0267/5ea22550af6ab5668bef39d81bd57a43"
                      }}
                      style={styles.ImageBackground_I593_3797_577_3452}
                    />
                    <View style={styles.View_I593_3797_577_3474} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_593_3798}>
              <Text style={styles.Text_593_3798}>All</Text>
            </View>
          </View>
          <View style={styles.View_593_3804}>
            <View style={styles.View_593_3805}>
              <View style={styles.View_593_3806}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c40c/7dce/c6c6574bf1431ed3185c6b38931fcc87"
                  }}
                  style={styles.ImageBackground_593_3807}
                />
                <View style={styles.View_593_3808}>
                  <View style={styles.View_I593_3808_271_308}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b11/0267/5ea22550af6ab5668bef39d81bd57a43"
                      }}
                      style={styles.ImageBackground_I593_3808_577_3452}
                    />
                    <View style={styles.View_I593_3808_577_3474} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_593_3809}>
              <Text style={styles.Text_593_3809}>All</Text>
            </View>
          </View>
          <View style={styles.View_593_3815}>
            <View style={styles.View_593_3816}>
              <View style={styles.View_593_3817}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c40c/7dce/c6c6574bf1431ed3185c6b38931fcc87"
                  }}
                  style={styles.ImageBackground_593_3818}
                />
                <View style={styles.View_593_3819}>
                  <View style={styles.View_I593_3819_271_308}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b11/0267/5ea22550af6ab5668bef39d81bd57a43"
                      }}
                      style={styles.ImageBackground_I593_3819_577_3452}
                    />
                    <View style={styles.View_I593_3819_577_3474} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_593_3820}>
              <Text style={styles.Text_593_3820}>All</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_526_2939}>
          <Text style={styles.Text_526_2939}>Categories</Text>
        </View>
      </View>
      <View style={styles.View_563_2730}>
        <View style={styles.View_561_2714} />
        <View style={styles.View_563_2745}>
          <View style={styles.View_563_2746}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82a3/a40a/f5c322804251d53da4eb8b4b6c810e28"
              }}
              style={styles.ImageBackground_563_2747}
            />
            <View style={styles.View_563_2748}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da9b/f987/b1c60c28ef564bb707afe39a00901033"
                }}
                style={styles.ImageBackground_563_2749}
              />
              <View style={styles.View_563_2750}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d85/d60f/5a0e4ef94f5887a86839359eb6df7079"
                  }}
                  style={styles.ImageBackground_563_2751}
                />
                <View style={styles.View_563_2752} />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb62/1962/ea68c8357f2b62c39d8aac5cd792da14"
              }}
              style={styles.ImageBackground_563_2753}
            />
          </View>
          <View style={styles.View_563_2754}>
            <View style={styles.View_563_2755}>
              <Text style={styles.Text_563_2755}>THE TEST KITCHEN</Text>
            </View>
            <View style={styles.View_563_2756}>
              <Text style={styles.Text_563_2756}>R100</Text>
            </View>
            <View style={styles.View_563_2757}>
              <Text style={styles.Text_563_2757}>COUPON</Text>
            </View>
            <View style={styles.View_563_2758}>
              <Text style={styles.Text_563_2758}>Term of use</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_563_2731}>
          <View style={styles.View_563_2732}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa9d/8952/36f1f6df5e815e0e82099673d045a900"
              }}
              style={styles.ImageBackground_563_2733}
            />
            <View style={styles.View_563_2734}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da9b/f987/b1c60c28ef564bb707afe39a00901033"
                }}
                style={styles.ImageBackground_563_2735}
              />
              <View style={styles.View_563_2736}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d85/d60f/5a0e4ef94f5887a86839359eb6df7079"
                  }}
                  style={styles.ImageBackground_563_2737}
                />
                <View style={styles.View_563_2738} />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb62/1962/ea68c8357f2b62c39d8aac5cd792da14"
              }}
              style={styles.ImageBackground_563_2739}
            />
          </View>
          <View style={styles.View_563_2740}>
            <View style={styles.View_563_2741}>
              <Text style={styles.Text_563_2741}>THE TEST KITCHEN</Text>
            </View>
            <View style={styles.View_563_2742}>
              <Text style={styles.Text_563_2742}>R100</Text>
            </View>
            <View style={styles.View_563_2743}>
              <Text style={styles.Text_563_2743}>COUPON</Text>
            </View>
            <View style={styles.View_563_2744}>
              <Text style={styles.Text_563_2744}>Term of use</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_563_2759}>
          <View style={styles.View_563_2760}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bea/1be4/2eb384dd383a059c7899b32166901e6a"
              }}
              style={styles.ImageBackground_563_2761}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53f2/5469/69433114b666898f0695e71b120b2dd2"
              }}
              style={styles.ImageBackground_563_2762}
            />
            <View style={styles.View_563_2763}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d85/d60f/5a0e4ef94f5887a86839359eb6df7079"
                }}
                style={styles.ImageBackground_563_2764}
              />
              <View style={styles.View_563_2765} />
            </View>
          </View>
          <View style={styles.View_563_2766}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb62/1962/ea68c8357f2b62c39d8aac5cd792da14"
              }}
              style={styles.ImageBackground_563_2767}
            />
            <View style={styles.View_563_2768}>
              <Text style={styles.Text_563_2768}>Term of use</Text>
            </View>
          </View>
          <View style={styles.View_563_2769}>
            <View style={styles.View_563_2770}>
              <Text style={styles.Text_563_2770}>THE TEST KITCHEN</Text>
            </View>
            <View style={styles.View_563_2771}>
              <Text style={styles.Text_563_2771}>R100</Text>
            </View>
            <View style={styles.View_563_2772}>
              <Text style={styles.Text_563_2772}>COUPON</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_595_5030}>
        <View style={styles.View_595_5031} />
        <View style={styles.View_595_5032}>
          <Text style={styles.Text_595_5032}>Voucher</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_595_5033}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db9/ad4b/b1b981c26e3d1d7a1165d9762dd32c22"
            }}
            style={styles.ImageBackground_I595_5033_551_4768}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_567_3920}>
        <View style={styles.View_567_3921} />
        <View style={styles.View_570_2855}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6291/9174/f0384f5e393d87b19c6393221fc35434"
            }}
            style={styles.ImageBackground_I570_2855_415_1184}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3922}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("282_2055"))
          }
        >
          <View style={styles.View_I567_3922_319_327}>
            <View style={styles.View_I567_3922_319_328}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43bb/abde/e681e14e6bcb888ca3d301b316aab182"
                }}
                style={styles.ImageBackground_I567_3922_319_329}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d82/4ec6/ab1511b9f47a575804eaa6869ac1b6a1"
                }}
                style={styles.ImageBackground_I567_3922_319_330}
              />
            </View>
            <View style={styles.View_I567_3922_319_333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37fe/b3d6/1663acd3151d28ceee47205444daf9ca"
                }}
                style={styles.ImageBackground_I567_3922_319_334}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd66/34f7/612af182d0e6471fcaeba0c27bed2010"
                }}
                style={styles.ImageBackground_I567_3922_319_335}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3924}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("200_231"))
          }
        >
          <View style={styles.View_I567_3924_319_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca7e/92a3/8916d462c21f410caf8f05ae930369ce"
              }}
              style={styles.ImageBackground_I567_3924_319_320}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23cb/7134/60991c3b1f7388abbaaac49119c40fb5"
              }}
              style={styles.ImageBackground_I567_3924_319_321}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a2/9a24/956f5e3ba30c5cefafa96153659f7f74"
              }}
              style={styles.ImageBackground_I567_3924_319_322}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f6/d981/cbf2cafa04251ce782f812db1d542238"
              }}
              style={styles.ImageBackground_I567_3924_319_323}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_567_3925}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("165_161"))
          }
        >
          <View style={styles.View_I567_3925_319_484}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237d/1b79/49cdbb4090254b303db75f831c625687"
              }}
              style={styles.ImageBackground_I567_3925_319_485}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1793/b719/a1aa755f1210d696f8851d8fababc303"
              }}
              style={styles.ImageBackground_I567_3925_319_486}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_567_3927}>
          <View style={styles.View_567_3928} />
        </View>
      </View>
      <View style={styles.View_235_467}>
        <View style={styles.View_235_468}>
          <View style={styles.View_235_469}>
            <Text style={styles.Text_235_469}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_235_470}>
          <View style={styles.View_235_471}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af7c/b163/ae20d77a582098e58b8b87d29413b62b"
              }}
              style={styles.ImageBackground_235_472}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1900/749b/cb2d44f96328bdc019ebb93d4bffbb9d"
              }}
              style={styles.ImageBackground_235_475}
            />
          </View>
          <View style={styles.View_235_476} />
        </View>
        <View style={styles.View_235_477}>
          <View style={styles.View_235_478}>
            <View style={styles.View_235_479} />
            <View style={styles.View_235_480} />
            <View style={styles.View_235_481} />
            <View style={styles.View_235_482} />
          </View>
        </View>
        <View style={styles.View_235_483}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be90/2f07/540fbaeb9c47ddb14408ac61b3716337"
            }}
            style={styles.ImageBackground_235_484}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(238, 240, 243, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_904_2289: {
    width: wp("296.8%"),
    minWidth: wp("296.8%"),
    height: hp("131.69398907103823%"),
    minHeight: hp("131.69398907103823%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.2896174863388%")
  },
  View_904_2432: {
    width: wp("296.8%"),
    minWidth: wp("296.8%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.66666666666666%")
  },
  View_904_2433: {
    width: wp("296.8%"),
    height: hp("31.967213114754102%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_904_2434: {
    width: wp("283.73333333333335%"),
    minWidth: wp("283.73333333333335%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.103825136612031%")
  },
  View_904_2435: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2436: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2437: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.400000000000006%"),
    top: hp("16.120218579234972%")
  },
  View_904_2438: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2438: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2439: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333324%")
  },
  View_904_2440: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2440: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2441: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("15.573770491803288%")
  },
  View_904_2442: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_904_2442: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2443: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_904_2443: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2444: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2444: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2445: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("4.644808743169392%")
  },
  View_904_2446: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2447: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2448: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.6%"),
    top: hp("0%")
  },
  View_904_2449: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2450: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("16.120218579234972%")
  },
  View_904_2451: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2451: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2452: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333346%")
  },
  View_904_2453: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2453: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2454: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("15.573770491803288%")
  },
  View_904_2455: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_904_2455: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2456: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_904_2456: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2457: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2457: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2458: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.86666666666666%"),
    top: hp("4.644808743169392%")
  },
  View_904_2459: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2460: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2461: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("115.20000000000002%"),
    top: hp("0%")
  },
  View_904_2462: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2463: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.39999999999999%"),
    top: hp("16.120218579234972%")
  },
  View_904_2464: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2464: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2465: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%")
  },
  View_904_2466: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2466: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2467: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333115%"),
    top: hp("15.573770491803288%")
  },
  View_904_2468: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_904_2468: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2469: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333348%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_904_2469: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2470: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2470: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2471: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000023%"),
    top: hp("4.644808743169392%")
  },
  View_904_2472: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2473: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2474: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("172.79999999999998%"),
    top: hp("0%")
  },
  View_904_2475: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2476: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.39999999999998%"),
    top: hp("16.120218579234972%")
  },
  View_904_2477: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333388%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2477: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2478: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333388%")
  },
  View_904_2479: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2479: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2480: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333354%"),
    top: hp("15.573770491803288%")
  },
  View_904_2481: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_904_2481: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2482: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.99999999999997%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_904_2482: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2483: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2483: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2484: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666646%"),
    top: hp("4.644808743169392%")
  },
  View_904_2485: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2486: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2487: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("230.39999999999998%"),
    top: hp("0%")
  },
  View_904_2488: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2489: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.400000000000006%"),
    top: hp("16.120218579234972%")
  },
  View_904_2490: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333303%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2490: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2491: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333303%")
  },
  View_904_2492: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2492: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2493: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("15.573770491803288%")
  },
  View_904_2494: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_904_2494: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2495: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.00000000000003%"),
    top: hp("3.2786885245901374%"),
    justifyContent: "flex-start"
  },
  Text_904_2495: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2496: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2496: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2497: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666703%"),
    top: hp("4.644808743169392%")
  },
  View_904_2498: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2499: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2500: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.639344262295083%")
  },
  View_904_2501: {
    width: wp("19.733333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2501: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2502: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0.546448087431699%"),
    justifyContent: "flex-start"
  },
  Text_904_2502: {
    color: "rgba(102, 90, 240, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2503: {
    width: wp("296.8%"),
    minWidth: wp("296.8%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.72677595628416%")
  },
  View_904_2504: {
    width: wp("296.8%"),
    height: hp("31.967213114754102%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_904_2505: {
    width: wp("283.73333333333335%"),
    minWidth: wp("283.73333333333335%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.103825136612016%")
  },
  View_904_2506: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2507: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508176%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2508: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.400000000000006%"),
    top: hp("16.120218579234972%")
  },
  View_904_2509: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2509: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2510: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333324%")
  },
  View_904_2511: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2511: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2512: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("15.57377049180326%")
  },
  View_904_2513: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2513: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2514: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2514: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2515: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2515: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2516: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("4.6448087431694205%")
  },
  View_904_2517: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2518: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2519: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.6%"),
    top: hp("0%")
  },
  View_904_2520: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508176%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2521: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("16.120218579234972%")
  },
  View_904_2522: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2522: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2523: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333346%")
  },
  View_904_2524: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2524: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2525: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("15.57377049180326%")
  },
  View_904_2526: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2526: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2527: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2527: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2528: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2528: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2529: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.86666666666666%"),
    top: hp("4.6448087431694205%")
  },
  View_904_2530: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2531: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2532: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("115.20000000000002%"),
    top: hp("0%")
  },
  View_904_2533: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508176%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2534: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.39999999999999%"),
    top: hp("16.120218579234972%")
  },
  View_904_2535: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2535: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2536: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%")
  },
  View_904_2537: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2537: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2538: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333115%"),
    top: hp("15.57377049180326%")
  },
  View_904_2539: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2539: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2540: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333348%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2540: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2541: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2541: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2542: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000023%"),
    top: hp("4.6448087431694205%")
  },
  View_904_2543: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2544: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2545: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("172.79999999999998%"),
    top: hp("0%")
  },
  View_904_2546: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508176%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2547: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.39999999999998%"),
    top: hp("16.120218579234972%")
  },
  View_904_2548: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333388%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2548: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2549: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333388%")
  },
  View_904_2550: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2550: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2551: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333354%"),
    top: hp("15.57377049180326%")
  },
  View_904_2552: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2552: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2553: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.99999999999997%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2553: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2554: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2554: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2555: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666646%"),
    top: hp("4.6448087431694205%")
  },
  View_904_2556: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2557: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2558: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("230.39999999999998%"),
    top: hp("0%")
  },
  View_904_2559: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508176%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2560: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.400000000000006%"),
    top: hp("16.120218579234972%")
  },
  View_904_2561: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333303%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2561: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2562: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333303%")
  },
  View_904_2563: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2563: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2564: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("15.57377049180326%")
  },
  View_904_2565: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2565: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2566: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.00000000000003%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2566: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2567: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2567: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2568: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666703%"),
    top: hp("4.6448087431694205%")
  },
  View_904_2569: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2570: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2571: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.639344262295083%")
  },
  View_904_2572: {
    width: wp("39.733333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2572: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2573: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_904_2573: {
    color: "rgba(102, 90, 240, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2361: {
    width: wp("296.8%"),
    minWidth: wp("296.8%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.060109289617486%")
  },
  View_904_2362: {
    width: wp("296.8%"),
    height: hp("32.51366120218579%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_904_2363: {
    width: wp("283.73333333333335%"),
    minWidth: wp("283.73333333333335%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.6502732240437155%")
  },
  View_904_2364: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2365: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2366: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333334%"),
    top: hp("16.120218579234972%")
  },
  View_904_2367: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2.732240437158481%"),
    justifyContent: "flex-start"
  },
  Text_904_2367: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2368: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999993%")
  },
  View_904_2369: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2369: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2370: {
    width: wp("31.2%"),
    minWidth: wp("31.2%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("15.573770491803288%")
  },
  View_904_2371: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2371: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2372: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2372: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2373: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2373: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2374: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("4.644808743169392%")
  },
  View_904_2375: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2376: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2377: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.6%"),
    top: hp("0%")
  },
  View_904_2378: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2379: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333333%"),
    top: hp("16.120218579234972%")
  },
  View_904_2380: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000000000000014%"),
    top: hp("2.732240437158481%"),
    justifyContent: "flex-start"
  },
  Text_904_2380: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2381: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000014%")
  },
  View_904_2382: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2382: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2383: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("15.573770491803288%")
  },
  View_904_2384: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2384: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2385: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2385: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2386: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2386: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2387: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.86666666666666%"),
    top: hp("4.644808743169392%")
  },
  View_904_2388: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2389: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2390: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("115.20000000000002%"),
    top: hp("0%")
  },
  View_904_2391: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2392: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333332%"),
    top: hp("16.120218579234972%")
  },
  View_904_2393: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2.732240437158481%"),
    justifyContent: "flex-start"
  },
  Text_904_2393: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2394: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_904_2395: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2395: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2396: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333115%"),
    top: hp("15.573770491803288%")
  },
  View_904_2397: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2397: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2398: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333326%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2398: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2399: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2399: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2400: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.26666666666668%"),
    top: hp("4.644808743169392%")
  },
  View_904_2401: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2402: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2403: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("172.79999999999998%"),
    top: hp("0%")
  },
  View_904_2404: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2405: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333334%"),
    top: hp("16.120218579234972%")
  },
  View_904_2406: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.000000000000028%"),
    top: hp("2.732240437158481%"),
    justifyContent: "flex-start"
  },
  Text_904_2406: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2407: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000028%")
  },
  View_904_2408: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2408: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2409: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333354%"),
    top: hp("15.573770491803288%")
  },
  View_904_2410: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2410: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2411: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73333333333332%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2411: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2412: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2412: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2413: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666646%"),
    top: hp("4.644808743169392%")
  },
  View_904_2414: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2415: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2416: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("230.39999999999998%"),
    top: hp("0%")
  },
  View_904_2417: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2418: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.933333333333366%"),
    top: hp("16.120218579234972%")
  },
  View_904_2419: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.999999999999943%"),
    top: hp("2.732240437158481%"),
    justifyContent: "flex-start"
  },
  Text_904_2419: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2420: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.999999999999943%")
  },
  View_904_2421: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2421: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2422: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("15.573770491803288%")
  },
  View_904_2423: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2423: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2424: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73333333333332%"),
    top: hp("3.278688524590166%"),
    justifyContent: "flex-start"
  },
  Text_904_2424: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2425: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2425: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2426: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666703%"),
    top: hp("4.644808743169392%")
  },
  View_904_2427: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2428: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2429: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726782%")
  },
  View_904_2430: {
    width: wp("29.333333333333332%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2430: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2431: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "flex-start"
  },
  Text_904_2431: {
    color: "rgba(102, 90, 240, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2290: {
    width: wp("296.8%"),
    minWidth: wp("296.8%"),
    height: hp("31.967213114754102%"),
    minHeight: hp("31.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2291: {
    width: wp("296.8%"),
    height: hp("31.967213114754102%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_904_2295: {
    width: wp("283.73333333333335%"),
    minWidth: wp("283.73333333333335%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.103825136612016%")
  },
  View_904_2296: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2297: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2298: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.400000000000006%"),
    top: hp("16.120218579234987%")
  },
  View_904_2299: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2299: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2300: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333324%")
  },
  View_904_2301: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2301: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2302: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("15.573770491803288%")
  },
  View_904_2303: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_904_2303: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2304: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_904_2304: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2305: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2305: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2306: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("4.644808743169392%")
  },
  View_904_2307: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2308: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2309: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.6%"),
    top: hp("0%")
  },
  View_904_2310: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2311: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("16.120218579234987%")
  },
  View_904_2312: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333346%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2312: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2313: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333346%")
  },
  View_904_2314: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2314: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2315: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("15.573770491803288%")
  },
  View_904_2316: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_904_2316: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2317: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_904_2317: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2318: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2318: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2319: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.86666666666666%"),
    top: hp("4.644808743169392%")
  },
  View_904_2320: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2321: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2322: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("115.20000000000002%"),
    top: hp("0%")
  },
  View_904_2323: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2324: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.93333333333332%"),
    top: hp("16.120218579234987%")
  },
  View_904_2325: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2325: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2326: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_904_2327: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2327: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2328: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333115%"),
    top: hp("15.573770491803288%")
  },
  View_904_2329: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_904_2329: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2330: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666669%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_904_2330: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2331: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2331: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2332: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000023%"),
    top: hp("4.644808743169392%")
  },
  View_904_2333: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2334: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2335: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("172.79999999999998%"),
    top: hp("0%")
  },
  View_904_2336: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2337: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.933333333333366%"),
    top: hp("16.120218579234987%")
  },
  View_904_2338: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2338: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2339: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_904_2340: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666231%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2340: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2341: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333354%"),
    top: hp("15.573770491803288%")
  },
  View_904_2342: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_904_2342: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2343: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73333333333332%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_904_2343: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2344: {
    width: wp("25.066666666666666%"),
    minWidth: wp("25.066666666666666%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2344: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2345: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666646%"),
    top: hp("4.644808743169392%")
  },
  View_904_2346: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2347: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2348: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("230.39999999999998%"),
    top: hp("0%")
  },
  View_904_2349: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.934426229508205%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_904_2350: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.400000000000006%"),
    top: hp("16.120218579234987%")
  },
  View_904_2351: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333303%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_904_2351: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_904_2352: {
    width: wp("2.933333079020182%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333303%")
  },
  View_904_2353: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2353: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2354: {
    width: wp("34.93333333333333%"),
    minWidth: wp("34.93333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%"),
    top: hp("15.573770491803288%")
  },
  View_904_2355: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_904_2355: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2356: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73333333333332%"),
    top: hp("3.2786885245901516%"),
    justifyContent: "flex-start"
  },
  Text_904_2356: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_904_2357: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2357: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_904_2358: {
    width: wp("0.8%"),
    minWidth: wp("0.8%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.866666666666703%"),
    top: hp("4.644808743169392%")
  },
  View_904_2359: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_904_2360: {
    width: wp("53.333333333333336%"),
    minWidth: wp("53.333333333333336%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_904_2292: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.639344262295083%")
  },
  View_904_2293: {
    width: wp("42.93333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_904_2293: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_904_2294: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%"),
    top: hp("0.5464480874316919%"),
    justifyContent: "flex-start"
  },
  Text_904_2294: {
    color: "rgba(102, 90, 240, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_526_2830: {
    width: wp("154.93333333333334%"),
    minWidth: wp("154.93333333333334%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.97814207650273%")
  },
  View_526_2831: {
    width: wp("100%"),
    height: hp("20.21857923497268%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_526_2832: {
    width: wp("150.66666666666666%"),
    height: hp("10.92896174863388%"),
    top: hp("7.1038251366120235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_526_2833: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_526_2834: {
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
  View_526_2835: {
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
  ImageBackground_526_2837: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_271_307: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_271_308: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.6147540983606561%")
  },
  ImageBackground_577_3452: {
    width: wp("6.399999491373698%"),
    height: hp("2.5956284153005464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_577_3474: {
    width: wp("1.097142791748047%"),
    minWidth: wp("1.097142791748047%"),
    height: hp("1.3905153899896339%"),
    minHeight: hp("1.3905153899896339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.279980468749999%"),
    top: hp("0.3244535519125691%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_526_2842: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_526_2842: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_593_3760: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_593_3761: {
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
  View_593_3762: {
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
  ImageBackground_593_3763: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_593_3837: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333338%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_593_3838: {
    width: wp("7.466682942708333%"),
    height: hp("2.7047670604101297%"),
    top: hp("0.5601809975879419%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_593_3839: {
    width: wp("7.466682942708333%"),
    height: hp("2.7047670604101297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_593_3840: {
    width: wp("7.466682942708333%"),
    height: hp("2.7047670604101297%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_593_3765: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333336%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_593_3765: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_593_3771: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.400000000000006%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_593_3772: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666643%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_593_3773: {
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
  ImageBackground_593_3774: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_593_3851: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%")
  },
  View_593_3776: {
    width: wp("16.266666666666666%"),
    minWidth: wp("16.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_593_3776: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_593_3782: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.93333333333334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_593_3783: {
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
  View_593_3784: {
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
  ImageBackground_593_3785: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_593_3854: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%")
  },
  View_593_3787: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_593_3787: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_593_3826: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_593_3827: {
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
  View_593_3828: {
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
  ImageBackground_593_3829: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_593_3858: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("1.9125683060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%")
  },
  View_593_3831: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000114%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_593_3831: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_593_3793: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("97.33333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_593_3794: {
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
  View_593_3795: {
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
  ImageBackground_593_3796: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_593_3797: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I593_3797_271_308: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333456%"),
    top: hp("0.6147540983606561%")
  },
  ImageBackground_I593_3797_577_3452: {
    width: wp("6.399999491373698%"),
    height: hp("2.5956284153005464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I593_3797_577_3474: {
    width: wp("1.097142791748047%"),
    minWidth: wp("1.097142791748047%"),
    height: hp("1.3905153899896339%"),
    minHeight: hp("1.3905153899896339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2799479166666572%"),
    top: hp("0.324453551912562%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_593_3798: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333329%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_593_3798: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_593_3804: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("116.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_593_3805: {
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
  View_593_3806: {
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
  ImageBackground_593_3807: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_593_3808: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I593_3808_271_308: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.6147540983606561%")
  },
  ImageBackground_I593_3808_577_3452: {
    width: wp("6.399999491373698%"),
    height: hp("2.5956284153005464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I593_3808_577_3474: {
    width: wp("1.097142791748047%"),
    minWidth: wp("1.097142791748047%"),
    height: hp("1.3905153899896339%"),
    minHeight: hp("1.3905153899896339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2799479166666572%"),
    top: hp("0.324453551912562%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_593_3809: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_593_3809: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_593_3815: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("135.73333333333332%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_593_3816: {
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
  View_593_3817: {
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
  ImageBackground_593_3818: {
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_593_3819: {
    width: wp("7.466666666666668%"),
    height: hp("3.825136612021858%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.26666666666668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I593_3819_271_308: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.533333333333303%"),
    top: hp("0.6147540983606561%")
  },
  ImageBackground_I593_3819_577_3452: {
    width: wp("6.399999491373698%"),
    height: hp("2.5956284153005464%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I593_3819_577_3474: {
    width: wp("1.097142791748047%"),
    minWidth: wp("1.097142791748047%"),
    height: hp("1.3905153899896339%"),
    minHeight: hp("1.3905153899896339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2799479166666856%"),
    top: hp("0.324453551912562%"),
    backgroundColor: "rgba(102, 90, 240, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_593_3820: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333343%"),
    top: hp("8.743169398907114%"),
    justifyContent: "flex-start"
  },
  Text_593_3820: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_526_2939: {
    width: wp("24.8%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    justifyContent: "flex-start"
  },
  Text_526_2939: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_563_2730: {
    width: wp("252.9333333333333%"),
    minWidth: wp("252.9333333333333%"),
    height: hp("36.885245901639344%"),
    minHeight: hp("36.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_561_2714: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("36.885245901639344%"),
    minHeight: hp("36.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_563_2745: {
    width: wp("80.13333333333334%"),
    minWidth: wp("80.13333333333334%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("172.8%"),
    top: hp("15.573770491803279%")
  },
  View_563_2746: {
    width: wp("80.13333333333334%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_563_2747: {
    width: wp("80%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_563_2748: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13333333333332575%"),
    top: hp("0%")
  },
  ImageBackground_563_2749: {
    width: wp("80%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_563_2750: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_563_2751: {
    width: wp("60.266666666666666%"),
    height: hp("30.87431693989071%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_563_2752: {
    width: wp("60.266666666666666%"),
    minWidth: wp("60.266666666666666%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  },
  ImageBackground_563_2753: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("14.207650273224042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333303%")
  },
  View_563_2754: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333303%"),
    top: hp("2.732240437158472%")
  },
  View_563_2755: {
    width: wp("37.333333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_563_2755: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_563_2756: {
    width: wp("15.2%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_563_2756: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_563_2757: {
    width: wp("15.733333333333333%"),
    top: hp("7.6502732240437155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_563_2757: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_563_2758: {
    width: wp("20.266666666666666%"),
    top: hp("11.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    justifyContent: "flex-start"
  },
  Text_563_2758: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_563_2731: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.53333333333333%"),
    top: hp("15.573770491803279%")
  },
  View_563_2732: {
    width: wp("80%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_563_2733: {
    width: wp("80%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_563_2734: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_563_2735: {
    width: wp("80%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_563_2736: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_563_2737: {
    width: wp("60.266666666666666%"),
    height: hp("30.87431693989071%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_563_2738: {
    width: wp("60.266666666666666%"),
    minWidth: wp("60.266666666666666%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  },
  ImageBackground_563_2739: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("14.207650273224042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%")
  },
  View_563_2740: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("2.732240437158472%")
  },
  View_563_2741: {
    width: wp("37.333333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_563_2741: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_563_2742: {
    width: wp("15.2%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_563_2742: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_563_2743: {
    width: wp("15.733333333333333%"),
    top: hp("7.6502732240437155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_563_2743: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_563_2744: {
    width: wp("20.266666666666666%"),
    top: hp("11.47540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000006%"),
    justifyContent: "flex-start"
  },
  Text_563_2744: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_563_2759: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("15.573770491803279%")
  },
  View_563_2760: {
    width: wp("80%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_563_2761: {
    width: wp("80%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_563_2762: {
    width: wp("80%"),
    height: hp("19.12568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_563_2763: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_563_2764: {
    width: wp("60.266666666666666%"),
    height: hp("30.87431693989071%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_563_2765: {
    width: wp("60.266666666666666%"),
    minWidth: wp("60.266666666666666%"),
    height: hp("30.87431693989071%"),
    minHeight: hp("30.87431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  },
  View_563_2766: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("14.207650273224042%")
  },
  ImageBackground_563_2767: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_563_2768: {
    width: wp("20.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.93333333333333%"),
    justifyContent: "flex-start"
  },
  Text_563_2768: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_563_2769: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%"),
    top: hp("2.1857923497267766%")
  },
  View_563_2770: {
    width: wp("37.333333333333336%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_563_2770: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_563_2771: {
    width: wp("15.2%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_563_2771: {
    color: "rgba(61, 171, 37, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_563_2772: {
    width: wp("15.733333333333333%"),
    top: hp("7.6502732240437155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_563_2772: {
    color: "rgba(110, 110, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_595_5030: {
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
  View_595_5031: {
    width: wp("100%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_595_5032: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("2.1857923497267766%"),
    justifyContent: "center"
  },
  Text_595_5032: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  TouchableOpacity_595_5033: {
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
  ImageBackground_I595_5033_551_4768: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0.27322404371584774%")
  },
  View_567_3920: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_567_3921: {
    width: wp("100%"),
    height: hp("9.562841530054644%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_570_2855: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I570_2855_415_1184: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.731609083915669%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333007812499986%"),
    top: hp("0.27330950961089684%")
  },
  TouchableOpacity_567_3922: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.53333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I567_3922_319_327: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0.27323863545403526%")
  },
  View_I567_3922_319_328: {
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
  ImageBackground_I567_3922_319_329: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3922_319_330: {
    width: wp("4.266666666666667%"),
    height: hp("1.0139678345351923%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I567_3922_319_333: {
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
  ImageBackground_I567_3922_319_334: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3922_319_335: {
    width: wp("2.860632578531901%"),
    height: hp("1.4601191536324922%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_567_3924: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I567_3924_319_319: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I567_3924_319_320: {
    width: wp("0.37209300994873046%"),
    height: hp("1.0623966409860413%"),
    top: hp("1.0423816618371973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3323567708333357%")
  },
  ImageBackground_I567_3924_319_321: {
    width: wp("0.37209300994873046%"),
    height: hp("1.4796035537302819%"),
    top: hp("0.6250475273757417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4900716145833357%")
  },
  ImageBackground_I567_3924_319_322: {
    width: wp("0.37209300994873046%"),
    height: hp("0.601601209796843%"),
    top: hp("1.5030511741429677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6287434895833357%")
  },
  ImageBackground_I567_3924_319_323: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_567_3925: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I567_3925_319_484: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.27322404371587083%")
  },
  ImageBackground_I567_3925_319_485: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I567_3925_319_486: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_567_3927: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("4.918032786885249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_567_3928: {
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
  View_235_467: {
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
  View_235_468: {
    width: wp("9.34998779296875%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_235_469: {
    width: wp("9.34998779296875%"),
    minWidth: wp("9.34998779296875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_235_469: {
    color: "rgba(35, 36, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_235_470: {
    width: wp("6.540889485677083%"),
    minWidth: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.92578125%"),
    top: hp("0.43169865842725397%")
  },
  View_235_471: {
    width: wp("6.540889485677083%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_235_472: {
    width: wp("5.873451741536458%"),
    minWidth: wp("5.873451741536458%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_235_475: {
    width: wp("0.40046262741088867%"),
    minWidth: wp("0.40046262741088867%"),
    height: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.140429687500003%"),
    top: hp("0.5040986941811818%")
  },
  View_235_476: {
    width: wp("4.805551147460937%"),
    minWidth: wp("4.805551147460937%"),
    height: hp("1.047358812530184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5339192708333371%"),
    top: hp("0.26184248793971987%"),
    backgroundColor: "rgba(35, 36, 64, 1)"
  },
  View_235_477: {
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
  View_235_478: {
    width: wp("4.565271504720052%"),
    height: hp("1.4617492592399888%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_235_479: {
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
  View_235_480: {
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
  View_235_481: {
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
  View_235_482: {
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
  View_235_483: {
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
  ImageBackground_235_484: {
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
