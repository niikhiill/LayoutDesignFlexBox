import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

const Screen = ()=> {
    return (
        
      <View style= {styles.ViewStyle}>
        {/* <Text> textInComponent </Text> */}
   
        <View style= {styles.header}>
          <Text>Header Text</Text>
        </View>
   
        <View style= {styles.container}>
       
          <View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 1</Text>
            </View>
          </View>

          <View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 2</Text>
            </View>
          </View>

          <View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 3</Text>
            </View>
          </View>

          <View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 4</Text>
            </View>
          </View>

          <View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 5</Text>
            </View>
          </View>

          <View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 6</Text>
            </View>
          </View>

         
        </View>
        
      </View>
   
    )
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex:1,

  },
  header: {
  height: '15%',
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: '85%',
   padding: 15,
   flexDirection: 'row',
   flexWrap: 'wrap'
  },
  box: {
     height: '30%',
     width: '50%',
     padding: 7,
    
  },
  inner: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent : 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange',
   
  }

}
);

export default Screen;