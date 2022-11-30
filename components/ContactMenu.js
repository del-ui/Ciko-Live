import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"


const contactsMenuButton = [
  {
    type: "starred",
    name: "Starred"
  },
  {
    type: "contact",
    name: "Ponkie",
    photo: require("../assets/ponkie.jpeg")
  },
  {
    type: "contact",
    name: "Abdia",
    photo: require("../assets/del.jpeg")
  },
  {
    type: "contact",
    name: "Eve",
    photo: require("../assets/keedr.jpg")
  }
]



function ContactMenu() {
  return (
        <View style={styles.container}>
          {contactsMenuButton.map((contact, index)=>

            <View 
            key={"index"}
            style={styles.row}>
              {contact.type == "starred" ? (
                  <View style={styles.starredIcon}>
                    <AntDesign name='star' size={30} color={"#efefef"}/>
                  </View>):

                  (
                    <Image source={contact.photo} style={styles.image}/>
                  )
              
              }
              
              <Text style={styles.text}>{contact. name}</Text>
            </View>

          )}
  
        </View>
  )
}

export default ContactMenu

const styles = StyleSheet.create({
  container:{

  },
  row:{
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
    alignItems: "center"
  },
  starredIcon:{
   backgroundColor: "#333333",
   height: 55,
   width: 55,
   alignItems: "center",
   justifyContent: "center",
   borderRadius: 10

  },
  text:{
    color: "white",
    paddingLeft: 15,
    fontSize: 18
  },
  image:{
    height: 55,
    width: 55,
    borderRadius: 20
  }
})