import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button, navigate} from 'react-native';
import { Picker } from '@react-native-picker/picker';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*Account name
Accont Purchase : food, build, clothes
Amount = 0

values:
name
number
catagory

*/


export function AccountCreation() {
    
    const [name, setChangeText] = React.useState('');
    const [number, setNumText] = React.useState('');
    const [catagory, setcatagory] = useState('US Dollar');
    //const [name, o]
    return (
        <View style={styles.container}>
          <Text style={styles.formLabel}> Account Creation </Text>
          <View>
            <TextInput placeholder="Account Name" 
                style={styles.inputStyle} 
                value={name}
            />
            <TextInput
              secureTextEntry={false}
              placeholder="Goal amount you want to reach"
              style={styles.inputStyle}
              value={number}
            />
            <Text style={styles.formLabel}> Choose a account catagory:</Text>

            <Picker
              selectedValue={catagory}
              onValueChange={currentCatagory => setcatagory(currentCatagory)}>
              <Picker.Item label="Food" value="food" />
              <Picker.Item label="Bills" value="bills" />
              <Picker.Item label="Clothes" value="clothes" />
            </Picker>
            <Text style={styles.formLabel}>
              Selected: {catagory}
            </Text>
            { <Button
              title="Submit"
              //color="#fff"
               marginRight="40"
                marginLef="40"
                marginTop="10"
                paddingTop="10"
                paddingBottom="10"
                backgroundColor='#1E6738'
              color="#841584"
              //onPress={() => alert('Simple Button pressed')}
              //onPress={() => navigation.navigate('Details')}
            /> }
          </View>
        </View>
      );

      
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#356859',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    formLabel: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
      paddingTop: 20,
      //padding: 10,
      fontWeight: 'bold',
    },
    inputStyle: {
      marginTop: 20,
      width: 300,
      height: 40,
      paddingHorizontal: 10,
      borderRadius: 50,
      backgroundColor: '#b9e4c9',
    },
    formText: {
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 20,
    },
    text: {
      color: '#fff',
      fontSize: 20,
    },
    button: {
        
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#1E6738',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    }
  });
