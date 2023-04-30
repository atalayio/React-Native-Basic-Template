/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import Feather from 'react-native-vector-icons/Feather'
import { Dimensions } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
{/*  import CheckBox from '@react-native-community/checkbox'; */}






import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';








function App(): JSX.Element {
  


  return (

    <SafeAreaView style={styles.Background}>
      
      

    

    
      






      



 
      <View style={styles.NavBar}>

        <TouchableOpacity onPress={() => { }}>
          <FontAwesome name='navicon' size={25} color={"#000"} style={styles.NavBar_L} />

        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Icon name='search' size={25} color={"#000"} style={styles.NavBar_R}/>

        </TouchableOpacity>
      </View>

      <Text style={styles.Header}>
      It's Great 
      <Text style={styles.Header2}> Day for Coffee</Text>
    </Text>
      
      <TouchableOpacity onPress={() => { }}>
        <View style={styles.Yapilar}>
          <Image style={styles.Logolar} source={require("./logolar/kafe.png")} />
          <Text style={styles.Yazilar} > Espresso </Text>
          <Icon name='chevron-right' size={25} color={"#000000"} style={styles.Ikonlar} />

        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { }}>
        <View style={styles.Yapilar}>
          <Image style={styles.Logolar} source={require("./logolar/kafe2.png")} />
          <Text style={styles.Yazilar} > Cappuccino </Text>
          <Icon name='chevron-right' size={25} color={"#000000"} style={styles.Ikonlar} />

        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { }}>
        <View style={styles.Yapilar}>
          <Image style={styles.Logolar} source={require("./logolar/kafe3.png")} />
          <Text style={styles.Yazilar} > Machiato </Text>
          <Icon name='chevron-right' size={25} color={"#000000"} style={styles.Ikonlar} />

        </View>

      </TouchableOpacity>
      <TouchableOpacity onPress={() => { }}>
        <View style={styles.Yapilar}>
          <Image style={styles.Logolar} source={require("./logolar/kafe2.png")} />
          <Text style={styles.Yazilar} > Mocha </Text>
          <Icon name='chevron-right' size={25} color={"#000000"} style={styles.Ikonlar} />

        </View>

      </TouchableOpacity>
      <TouchableOpacity onPress={() => { }}>
        <View style={styles.Yapilar}>
          <Image style={styles.Logolar} source={require("./logolar/kafe3.png")} />
          <Text style={styles.Yazilar} > Latte </Text>
          <Icon name='chevron-right' size={25} color={"#000000"} style={styles.Ikonlar} />

        </View>

      </TouchableOpacity>



      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <View style={styles.Footer}>
          <TouchableOpacity onPress={() => { }}>
            <Icon name='home' size={25} color={"burlywood"} style={[styles.Ikonlar2, styles.Sol]} />

          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <Ionicons name='location-outline' size={25} color={"burlywood"} style={[styles.Ikonlar2]} />



          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <Icon name='coffee' size={25} color={"burlywood"} style={styles.Ikonlar2} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }}>
            <FontAwesome name='user-o' size={25} color={"burlywood"} style={[styles.Ikonlar2, styles.Sag]} />

          </TouchableOpacity>
        </View>
      </View>

  



    </SafeAreaView>
  );
}



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  Background: {
    backgroundColor: "#e7dccb",
    flex: 1,
  },
  Yapilar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    width: windowWidth,
    marginVertical: 25,
  },
  Yazilar: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 150,
    marginLeft: 10,
    flex: 1,
    alignItems: "flex-start",
    marginTop: 20,
  },
  Ikonlar: {
    marginRight: 20,
  },
  Ikonlar2: {
    top: 25,
  },
  Logolar: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    marginLeft: 20,
  },
  Footer: {
    justifyContent: "space-between",
    backgroundColor: "white",
    width: windowWidth,
    height: 75,
    flexDirection: "row",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  NavBar: {
    width: windowWidth,
    justifyContent: "space-between",
    height: 50,
    flexDirection: "row",


    
  },
  NavBar_L: {
    marginLeft: 20,
    marginTop: 10,

  },
  NavBar_R: {
    marginRight: 20,
    marginTop: 10,

  },
  Sol: {
    marginLeft: 30,
  },
  Sag: {
    marginRight: 30,
  },
  Header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "black",
    marginLeft: 20,
  },
  Header2: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "burlywood",
  },



});

export default App;
