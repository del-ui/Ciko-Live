import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';
import ContactMenu from '../components/ContactMenu';

function Home() {
  return (
    <View style={styles.body}>
        <SafeAreaView style ={{height: "100%"}}>
            
            <Header/>
            <SearchBar/>
            <MenuButtons/>
            <ContactMenu/>
            
        </SafeAreaView>
    </View>
 
   
    
    
  )
}

export default Home

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#1c1c1c"
        
    }
})