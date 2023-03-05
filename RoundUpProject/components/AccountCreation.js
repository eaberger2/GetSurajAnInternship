import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export function AccountCreation() {
    const [currency, setCurrency] = useState('US Dollar');
    return (
        <View style={styles.container}>
          <Text style={styles.formLabel}> Account Creation </Text>
          <View>
            <TextInput placeholder="Account Name" style={styles.inputStyle} />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              style={styles.inputStyle}
            />
            <Text style={styles.formLabel}> Choose a Non-profit</Text>

            <Picker
              selectedValue={currency}
              onValueChange={currentCurrency => setCurrency(currentCurrency)}>
              <Picker.Item label="USD" value="US Dollars" />
              <Picker.Item label="EUR" value="Euro" />
              <Picker.Item label="NGN" value="Naira" />
            </Picker>
            <Text style={styles.formLabel}>
              Selected: {currency}
            </Text>
            { <Button
              title="Submit"
              //color="#fff"
              color="#841584"
              onPress={() => alert('Simple Button pressed')}
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
  