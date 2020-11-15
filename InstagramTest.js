import React from 'react';

import {
    Dimensions,
    ScrollView,
    Image, View, Text,
  } from 'react-native';
  
  const widthDevice = Dimensions.get('window').width
  const heightDevice = Dimensions.get('window').height
  
  /**
   * https://imgx.gridoto.com/crop/100x106:998x620/700x465/photo/2020/04/04/2207304464.jpg
   * https://i.ytimg.com/vi/oRY_W2WYx5c/maxresdefault.jpg
   * https://cdna.artstation.com/p/assets/images/images/009/769/794/large/fabio-puddu-2017-nissan-gtr-29-1.jpg?1520811070
   * https://media.suara.com/pictures/480x260/2020/04/17/66641-nissan-gt-r-r35-dengan-ukiran-hasil-garapan-kuhl-racing.jpg
   * https://media.suara.com/pictures/653x366/2020/04/17/43308-nissan-gt-r-r35-dengan-ukiran-hasil-garapan-kuhl-racing.jpg
   */
  const Items = [
    "https://imgx.gridoto.com/crop/100x106:998x620/700x465/photo/2020/04/04/2207304464.jpg",
    "https://i.ytimg.com/vi/oRY_W2WYx5c/maxresdefault.jpg",
    "https://cdna.artstation.com/p/assets/images/images/009/769/794/large/fabio-puddu-2017-nissan-gtr-29-1.jpg?1520811070",
    "https://media.suara.com/pictures/480x260/2020/04/17/66641-nissan-gt-r-r35-dengan-ukiran-hasil-garapan-kuhl-racing.jpg",
    "https://imgx.gridoto.com/crop/100x106:998x620/700x465/photo/2020/04/04/2207304464.jpg",
    "https://i.ytimg.com/vi/oRY_W2WYx5c/maxresdefault.jpg",
    "https://cdna.artstation.com/p/assets/images/images/009/769/794/large/fabio-puddu-2017-nissan-gtr-29-1.jpg?1520811070",
    "https://media.suara.com/pictures/480x260/2020/04/17/66641-nissan-gt-r-r35-dengan-ukiran-hasil-garapan-kuhl-racing.jpg",
    "https://imgx.gridoto.com/crop/100x106:998x620/700x465/photo/2020/04/04/2207304464.jpg",
    "https://i.ytimg.com/vi/oRY_W2WYx5c/maxresdefault.jpg",
    "https://cdna.artstation.com/p/assets/images/images/009/769/794/large/fabio-puddu-2017-nissan-gtr-29-1.jpg?1520811070",
    "https://media.suara.com/pictures/480x260/2020/04/17/66641-nissan-gt-r-r35-dengan-ukiran-hasil-garapan-kuhl-racing.jpg",
    "https://media.suara.com/pictures/653x366/2020/04/17/43308-nissan-gt-r-r35-dengan-ukiran-hasil-garapan-kuhl-racing.jpg",
    "https://cdn11.bigcommerce.com/s-yrkef1j7/images/stencil/1280x1280/products/3304/32773/A2__47280.1559604833.jpg?c=2",
    "https://cdna.artstation.com/p/assets/images/images/016/472/182/large/arif-rahman-gtr-r35-rd-24.jpg?1552310630",
    "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/gt-r/r35/2_minor_change/overview/19TDIEULHD_GT-R_002.jpg.ximg.l_full_m.smart.jpg",
    "https://i2.wp.com/motor-vision.co.uk/wp-content/uploads/2018/03/NISSAN-GTR.jpg?resize=1200%2C520&ssl=1",
    "https://img.cintamobil.com/2019/04/22/FdbNczfb/belakang-nissan-gt-r-nismo-2020-955c.jpg",
    "https://cdna.artstation.com/p/assets/images/images/016/472/182/large/arif-rahman-gtr-r35-rd-24.jpg?1552310630",
    "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/gt-r/r35/2_minor_change/overview/19TDIEULHD_GT-R_002.jpg.ximg.l_full_m.smart.jpg",
    "https://i2.wp.com/motor-vision.co.uk/wp-content/uploads/2018/03/NISSAN-GTR.jpg?resize=1200%2C520&ssl=1",
    "https://img.cintamobil.com/2019/04/22/FdbNczfb/belakang-nissan-gt-r-nismo-2020-955c.jpg",
    "https://cdna.artstation.com/p/assets/images/images/016/472/182/large/arif-rahman-gtr-r35-rd-24.jpg?1552310630",
    "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/vehicles/gt-r/r35/2_minor_change/overview/19TDIEULHD_GT-R_002.jpg.ximg.l_full_m.smart.jpg",
    "https://i2.wp.com/motor-vision.co.uk/wp-content/uploads/2018/03/NISSAN-GTR.jpg?resize=1200%2C520&ssl=1",
    "https://img.cintamobil.com/2019/04/22/FdbNczfb/belakang-nissan-gt-r-nismo-2020-955c.jpg",
    "https://imgx.gridoto.com/crop/259x172:1295x863/700x465/filters:watermark(file/2017/gridoto/img/watermark_otomotifnet.png,5,5,60)/photo/2019/08/27/96665033.jpg",
    "https://i.pinimg.com/originals/95/45/79/954579f702173b6e995f602d6948c446.jpg",
  ]

const Instagram = () => {
    return (
        <View style={{
        // flexDirection: "column"
        }}>
        {/* Bar Profile */}
        <View style={{
            // backgroundColor: "grey",
            width: widthDevice,
            height: 60,
            // flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between" }}>

            <View style={{
            // backgroundColor:"red",
            flexWrap:"wrap", paddingTop: 5}}>
            {/* Lock Icon */}
            <View style={{
                backgroundColor:"grey",
                marginTop: 15,
                marginLeft: 10,
                width: 20, height:20 }}></View>
            
            {/* IGN */}
            <View style={{
                // backgroundColor:"red",
                padding: 5,
                // marginLeft: 40,
                height: 50,
                }}>
                <Text style={{fontSize:27, fontWeight:"bold"}} >laf_1092</Text>
            </View>
            </View>
            
            <View style={{
            // backgroundColor:"blue",
            flexWrap:"wrap", marginTop: 5 }}>

            {/* Create Button */}
            <View style={{
                backgroundColor: "black",
                margin: 10,
                height: 32,
                width: 32,
            }}></View>

            {/* Menu */}
            <View style={{
                backgroundColor: "black",
                margin: 5,
                height: 40,
                width: 40,
            }}></View>
            </View>
        </View>
        
        {/* Items Image */}
        <View>
            <ScrollView showsVerticalScrollIndicator={false} style={{
            height: heightDevice - 65
            }}>
            <View>
                {/* Picture and status */}
                <View>
                {/* Picture */}
                <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                    <View style={{
                    // backgroundColor:"red",
                    marginLeft: 10,
                    paddingTop: 5
                    }}>
                    <PhotoProfile />
                    </View>
                    <View style={{
                    // backgroundColor:"cyan",
                    flexDirection:"row",
                    padding: 25}}>
                    <View style={{marginLeft: 10, marginRight: 10}}>
                        <Text style={{textAlign: "center", fontWeight:"bold", fontSize: 20 }}>{Items.length}</Text>
                        <Text style={{fontSize: 15, textAlign: "center"}}>Posts</Text>
                    </View>
                    <View style={{marginLeft: 10, marginRight: 10}}>
                        <Text style={{textAlign: "center", fontWeight:"bold", fontSize: 20 }}>194</Text>
                        <Text style={{fontSize: 15, textAlign: "center"}}>Followers</Text>
                    </View>
                    <View style={{marginLeft: 10, marginRight: 10}}>
                        <Text style={{textAlign: "center", fontWeight:"bold", fontSize: 20 }}>235</Text>
                        <Text style={{fontSize: 15, textAlign: "center"}}>Following</Text>
                    </View>
                    </View>
                </View>

                {/* Status */}
                <View style={{margin: 10}}>
                    <Text style={{fontSize: 15, fontWeight: "bold"}} >Lucky Adhitya F</Text>
                    <Text style={{fontSize: 15}} >blood everywere</Text>
                </View>

                {/* Button Edit Profile */}
                <View style={{
                    borderWidth: 1,
                    borderColor: "#d1d1d1",
                    width: widthDevice - 20,
                    paddingTop: 5,
                    paddingBottom: 5,
                    alignSelf: "center"
                }}>
                    <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 16}}>Edit Profile</Text>
                </View>

                {/* Togle Story Highlights */}
                <View style={{
                    // backgroundColor: "red",
                    width: widthDevice,
                    alignSelf: "center",
                    padding: 5,
                }}>
                    <Text style={{fontWeight: "bold", fontSize: 14, marginLeft:10}}>Story Highlights</Text>
                    <View>
                    <Text style={{ marginLeft:10 }}>Keep your favorite stories on your profile</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{
                        // backgroundColor: "blue",
                        marginLeft: 10,
                        marginTop: 10,
                        flexDirection: "row",
                        }}>
                        <View style={{
                            height: 100,
                            width: 60,
                            marginRight: 10
                        }}>
                            <View style={{
                            // backgroundColor: "black",
                            borderWidth: 1,
                            height: 59,
                            width: 59,
                            borderRadius: 50,
                            }}><Text style={{textAlign: "center", textAlignVertical:"center", height:55, fontSize: 30}}>+</Text></View>
                            <Text style={{textAlign: "center", marginTop: 10}}>New</Text>
                        </View>
                        <View style={{
                            backgroundColor: "#d1d1d1",
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            marginLeft: 10,
                            marginRight: 10,
                            }}></View>
                        <View style={{
                            backgroundColor: "#d1d1d1",
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            marginLeft: 10,
                            marginRight: 10,
                            }}></View>
                            <View style={{
                            backgroundColor: "#d1d1d1",
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            marginLeft: 10,
                            marginRight: 10,
                            }}></View>
                            <View style={{
                            backgroundColor: "#d1d1d1",
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            marginLeft: 10,
                            marginRight: 10,
                            }}></View>
                            <View style={{
                            backgroundColor: "#d1d1d1",
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            marginLeft: 10,
                            marginRight: 10,
                            }}></View>
                            <View style={{
                            backgroundColor: "#d1d1d1",
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            marginLeft: 10,
                            marginRight: 10,
                            }}></View>
                        <View style={{
                            backgroundColor: "#d1d1d1",
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            marginLeft: 10,
                            marginRight: 10,
                            }}></View>
                        <View style={{
                            backgroundColor: "#d1d1d1",
                            height: 60,
                            width: 60,
                            borderRadius: 50,
                            marginLeft: 10,
                            marginRight: 10,
                            }}></View>
                        </View>
                    </ScrollView>
                    </View>
                </View>

                {/* bar menu */}
                <View style={{
                    // backgroundColor: "yellow",
                    with: widthDevice,
                    flexDirection: "row",
                    height: 70,
                }}>
                    <View style={{
                    // backgroundColor: "blue",
                    width: '50%',
                    height: 70,
                    paddingTop: 30,
                    paddingBottom: 15,
                    borderBottomWidth: 1,
                    marginBottom: 5
                    }}>
                    <View style={{
                        backgroundColor: "black",
                        alignSelf: "center",
                        width: 25,
                        height: 25,
                    }}></View>
                    </View>
                    <View style={{
                    // backgroundColor: "red",
                    width: '50%',
                    height: 70,
                    paddingTop: 30,
                    paddingBottom: 15,
                    }}>
                    <View style={{
                        backgroundColor: "black",
                        alignSelf: "center",
                        width: 25,
                        height: 25,
                    }}></View>
                    </View>
                </View>

                {/* Galery */}
                <View style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "flex-start"
                }}>
                    <ItemGalery />
                </View>
                </View>
            </View>
            </ScrollView>
        </View>

        {/* Sticky menu bar */}
        <View style={{
            // alignSelf: "flex-end",
            // backgroundColor: "yellow",
            width: widthDevice,
            height: 100,
            flexDirection: "row"
        }}>
            <View style={{
            // backgroundColor: "grey",
            width: "20%",
            height: 100,
            }}>
            <View style={{
                // backgroundColor: "black",
                borderWidth: 2,
                borderColor: "black",
                alignSelf: "center",
                alignSelf: "center",
                marginTop: 12.5,
                width: 25,
                height: 25
            }}></View>
            </View>
            <View style={{
            // backgroundColor: "grey",
            width: "20%",
            height: 100
            }}>
            <View style={{
                backgroundColor: "black",
                alignSelf: "center",
                marginTop: 12.5,
                width: 25,
                height: 25
            }}></View>
            </View>
            <View style={{
            // backgroundColor: "grey",
            width: "20%",
            height: 100,
            }}>
            <View style={{
                // backgroundColor: "black",
                borderWidth: 2,
                borderColor: "black",
                alignSelf: "center",
                borderRadius: 5,
                marginTop: 12.5,
                width: 25,
                height: 25,
            }}>
                <Text style={{
                alignSelf: "center",
                fontSize: 30,
                // backgroundColor: "green",
                textAlignVertical: "center",
                marginTop: 3,
                lineHeight: 25,
                letterSpacing: 0
                
                }}>+</Text>
            </View>
            </View>
            <View style={{
            // backgroundColor: "grey",
            width: "20%",
            height: 100,
            }}>
            <View style={{
                // backgroundColor: "black",
                borderWidth: 2,
                borderColor: "black",
                alignSelf: "center",
                borderRadius: 50,
                marginTop: 12.5,
                width: 25,
                height: 25

            }}></View>
            </View>
            <View style={{
            // backgroundColor: "grey",
            width: "20%",
            height: 100,
            }}>
            <View style={{
                // backgroundColor: "black",
                alignSelf: "center",
                marginTop: 10,
            }}>
                <PhotoProfileBar/>
            </View>
            </View>
        </View>
        </View>
    )
}

const PhotoProfile = () => {
    return <Image 
    source={{uri:"https://i.pinimg.com/564x/3f/20/c2/3f20c211d79ebcddd4633aaa29df0613.jpg"}}
    style={{
      backgroundColor: "grey",
      borderRadius: 50,
      width:90,
      height: 90
    }} />
  }