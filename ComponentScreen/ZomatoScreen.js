import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

const ZomatoScreen = () =>{
    const [address, setAddress] = useState('');
    const [search, setSearch] = useState('');

    return(
        <View style = {styles.ViewStyle}>
        
      <View style= {styles.AddressBar}>
          <TextInput 
        style= {styles.inputAddress}
        autoCapitalize= "none"
        autoCorrect= {false}
        value= {address}
        onChangeText= {(newValue) => setAddress(newValue)}
        />
      </View>  

      <View  style= {styles.SearchBar} >
        <TextInput 
        style= {styles.inputSearch}
        autoCapitalize= "none"
        autoCorrect= {false}
        value= {search}
        onChangeText= {(newValue) => setSearch(newValue)}
        />
      </View> 

      <View style = {styles.filters}>
          <Text> filters flatlist</Text>
      </View>

      <View style = {styles.SwipeImage}>
    
         <Image title="cafePic" source= {require('../Assets/images.jpeg')}   style = {styles.imgStyle} />
        
      </View>

      <View style = {styles.container}>
          
      <View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 1</Text>
            </View>

          </View><View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 1</Text>
            </View>

          </View><View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 1</Text>
            </View>

          </View><View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 1</Text>
            </View>

          </View><View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 1</Text>
            </View>

          </View><View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 1</Text>
            </View>

          </View><View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 1</Text>
            </View>

          </View><View style = {styles.box}>
            <View style = {styles.inner}>
            <Text>Box 1</Text>
            </View>
          </View>

      </View>

      <View style = {styles.footer}>
          <Text>footer(order, goOut,Pro,profile buttons)</Text>
      </View>

      </View>
    );
}

const styles = StyleSheet.create({
    ViewStyle: {
        top: 32,
        flex: 1,
        backgroundColor: 'white'
    },
AddressBar: {
    flex: 1.3,
    backgroundColor: 'orange',
    justifyContent: 'center',
},
SearchBar: {
flex: 1.3,
backgroundColor: 'yellow',
justifyContent: 'center',
},
filters: {
flex: 1.3,
backgroundColor: 'green',
justifyContent: 'center',
},
SwipeImage: {
flex: 3.4,
backgroundColor: 'white',
justifyContent: 'center',
alignItems: 'center'

},
imgStyle: {
    height: '85%',
    width: '90%',
    backgroundColor: 'red',
    justifyContent: 'center',
alignItems: 'center'
},
container: {
flex: 4,
backgroundColor: 'grey',
flexDirection: 'row',
flexWrap: 'wrap',
},
footer: {
flex: 1.7,
backgroundColor: 'orange',
top: 10
},
box: {
    height: '50%',
    width: '25%',
backgroundColor: 'white',
padding: 5,
},
inner: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent : 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'orange',
   
  },
  inputAddress: {
      width: '75%',
      height: '30%',
    borderColor: 'black',
    borderWidth: 1,

},

inputSearch: {
    width: '85%',
    height: '40%',
  borderColor: 'black',
  borderWidth: 1,
  alignSelf: 'center'
},

});

export default ZomatoScreen;