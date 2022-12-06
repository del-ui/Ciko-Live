import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';


const items = [
    {
      id: 1,
      name: "video-camera",
      title: "New Meeting",
      customColor: "#FF751F"
    },
    {
      id: 2,
      name: "plus-square",
      title: "Join"
    },
    {
      id: 3,
      name: "calendar",
      title: "Schedule"
    },
    {
      id: 4,
      name: "upload",
      title: "Share Screen"
    }
]


function MenuButtons({navigation}) {

 function openMeeting(){
    navigation = navigation.navigate("MeetingRoom")
  }
  

  


  return (
    <View 
      key={"index"}
      style={styles.container}>

      {items.map((item, index) =>
           <View style={styles.vidButton}>
              <TouchableOpacity
              onPress={()=> openMeeting()}

                 style={{
                  ...styles.button,
                  backgroundColor: item.customColor? item.customColor: "#0470DC"
                  }}>
                <FontAwesome name={item.name} size={23} color={"#efefef"}/>
              </TouchableOpacity>

            <Text style={styles.videoText}>{item.title}</Text>

       </View>
      
      )}
       
    </View>
  )
}

export default MenuButtons

const styles = StyleSheet.create({
  container:{
      paddingTop: 25,
      paddingBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomColor: "#1f1f1f",
      borderBottomWidth: 1

  },
  vidButton:{
    alignItems:"center",
    flex: 1

  },
  button:{
    height: 50,
    width: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 15
  },
  videoText:{
    color: "#858585",
    marginLeft: 5,
    paddingTop: 10,
    fontWeight:"600"
    
  }
})
