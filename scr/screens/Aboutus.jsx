import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Aboutus = () => {
  return (
    <View style={{flex:1,backgroundColor:'#000'}}>
        <ScrollView>
        <Text style={{color:'white',fontSize:50,marginTop:50}}>About Us</Text>
      <Text style={{fontSize:20,color:'white',marginTop:30,bottom:20}}>Welcome to SartePlus, a next-generation OTT (Over-The-Top) streaming platform built to bring entertainment closer to you. Our vision is simple: to provide quality movies, web series, and short films that can be enjoyed by all age groups without any inappropriate content.

We are a passionate team of creators, developers, and storytellers who believe in delivering safe, engaging, and family-friendly entertainment. Unlike traditional streaming platforms, SartePlus focuses on a clean and user-friendly experience, making it easier for you to discover your favorite content.

Whether it’s action, drama, comedy, or documentaries, our platform is designed to give you a personalized and smooth viewing experience. We are constantly growing, improving, and adding new features to make SartePlus the perfect place for your daily dose of entertainment.

At SartePlus, it’s not just about streaming — it’s about creating a community of entertainment lovers who value originality, creativity, and safe content.

✨ Our Mission:
To redefine entertainment by providing a platform that is innovative, accessible, and family-friendly.</Text>
    
    </ScrollView></View>
  )
}

export default Aboutus

const styles = StyleSheet.create({})