import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//sjtdrkgl;ij'ok[pl]
/*Account name
Accont Purchase : food, build, clothes
Amount = 0

values:
name
number
catagory
 
*/
/*
const {Client} = require('pg')

const client = new Client({
    host: "my-db-instance.chy9kvkccmc4.us-east-1.rds.amazonaws.com",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "initial_db"
})
*/ 
export function AccountCreation() {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [catagory, setcatagory] = useState('');

     
    //const [name, o]
    return (
        <View style={styles.container}>
          <Text style={styles.formLabel}> Account Creation </Text>
          <View>
            <TextInput placeholder="Account Name" 
                style={styles.inputStyle} 
                selectedvalue={name}
                onChangeText={setName}
            />
            <TextInput
              secureTextEntry={false}
              placeholder="Goal amount you want to reach"
              style={styles.inputStyle}
              value={number}
              onChangeText={setNumber}
            />
            <Text style={styles.formLabel}> Choose a account catagory:</Text>

            <Picker
              selectedValue={catagory}
              onValueChange={currentCatagory => setcatagory(currentCatagory)}>
              <Picker.Item label="Food" value="Food" />
              <Picker.Item label="Bills" value="Bills" />
              <Picker.Item label="Clothes" value="Clothes" />
            </Picker>
            
            <Text style={styles.formLabel}>
              Selected: {catagory}
            </Text>
            <Text style={styles.formLabel}>
              Selected: {name}
            </Text>
            <Text style={styles.formLabel}>
              Selected: {number}
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
              onPress={() => {
                //alert('Simple Button pressed');

                alert(name);
                alert(number);
                alert(catagory);
                
                /*
                
                execute()
                
                async function execute(){
                    try{
                        await client.connect()
                        console.log("Connected successfully.");
                        await client.query("insert into accounts values ($1, $2, $3, $4)",[2, name, number, catagory])
                
                        const {rows} = await client.query("select * from accounts")
                
                        console.table(rows)
                    }catch (ex){
                        console.log(`Something wrong happened ${ex}`)
                    }finally{
                        await client.end()
                        console.log("Client disconnected successfully.")
                    }
                }
                */
              }}
              

            //
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
  