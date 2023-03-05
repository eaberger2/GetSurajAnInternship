import * as React from 'react';
//import { Link } from "react-router-dom";
import { Text, View , Button} from 'react-native';
import {Account} from './components/Account';
import {AccountCreation} from './components/AccountCreation';

export function Accounts() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Account name="Savings" amount="$25,000"></Account>
        <Account name="Checking" amount="$35,000"></Account>
        <Account name="Non Profit" amount="$2,000"></Account>

        <Button
          onPress={AccountCreation}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          //href = "./components/AccountCreation"
          //component={AccountCreation} to="./components/AccountCreation"
        />
      </View>
    );

}


