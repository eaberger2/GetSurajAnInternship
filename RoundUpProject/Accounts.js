import * as React from 'react';
import { Text, View } from 'react-native';
import {Account} from './components/Account';

export function Accounts() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Account name="Savings" amount="$25,000"></Account>
        <Account name="Checking" amount="$35,000"></Account>
        <Account name="Non Profit" amount="$2,000"></Account>
      </View>
    );
}