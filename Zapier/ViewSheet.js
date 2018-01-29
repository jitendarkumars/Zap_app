import React ,{Component} from 'react'
import {View,Text,Linking } from 'react-native'

export default class ViewSheet extends Component{
    
    render() {
        return(
           <View style={styles.container}>
              <ImageBackground source={require('./img/back.jpg')} style={styles.background}>
               <Text>
                   Click Here to see your Details</Text>
                   <Text style={{color: 'blue'}}
                   onPress={() => Linking.openURL('https://docs.google.com/spreadsheets/d/1fe3l8quce188kVPSmL-HSsQbiZwiSlW6OpHua92cBII/edit?usp=sharing')}>
               Your Details in sheet
             </Text>
             </ImageBackground>
               </View>


        );
    }


}


const styles = StyleSheet.create({
    container: {
      flex: 1,
     alignSelf:'center',
      alignItems: 'center',
     
    },
    background: {
       flex:1,
       alignSelf:'stretch',
       width: null,
       justifyContent:'center',
       alignItems:'center'
  
    },
    content:{
  alignItems:'center',
    }
  });