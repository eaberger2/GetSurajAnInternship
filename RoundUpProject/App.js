import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Transactions } from './Transactions';
import { Categories } from './Categories';
import { Accounts } from './Accounts';
import { AccountCreation } from './components/AccountCreation';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accounts" component={Accounts} />
        <Tab.Screen name="Transactions" component={Transactions} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="AccountCreation" component={AccountCreation} />
      </Tab.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
  );
}