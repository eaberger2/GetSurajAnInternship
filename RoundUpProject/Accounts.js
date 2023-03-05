import * as React from 'react';
import { Text, View , SafeAreaView, ScrollView, StyleSheet, StatusBar} from 'react-native';
import {Account} from './components/Account';
import {AccountCreation} from './components/AccountCreation';

export function Accounts() {
    return (
        <ScrollView>
            <Account name="Savings" amount="$534" category="Food" goal={2000}></Account>
            <Account name="Checking" amount="$23" category="Bills" goal={100}></Account>
            <Account name="Non Profit" amount="$55" category="Clothes" goal={100}></Account>
            <Account name="Travel Savings" amount="$22" category="SustainableShopping" goal={100}></Account>
        </ScrollView>
    );
}