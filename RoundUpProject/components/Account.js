/*import * as React from 'react';
import { Text, View } from 'react-native';

export function Account(props) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{props.name}</Text>
        <Text>{props.name}</Text>
      </View>
    );
}*/
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';

const Header = (props) => (
  <View {...props}>
    <Text category='h6' style={{"color":"#356859"}}>{props.name}</Text>
    <Text category='s1' style={{"color":"#356859"}}>{props.amount}/Goal:{props.goal}</Text>
  </View>
);

function CategoryGen(props){
    switch(props.category){
        case 'Clothes':
            return <Text style={styles.clothes}>Clothes</Text>
        case 'Bills':
            return <Text style={styles.bills}>Bills</Text>
        case 'Food':
            return <Text style={styles.food}>Food</Text>
    }
}

export function Account(props){
 return(
  <React.Fragment>
    <Layout style={styles.topContainer} level='1'>

        <Card style={styles.card} header={Header(props)}>
            <Card>
                <Layout style={styles.container}>
                    <CategoryGen category={props.category}></CategoryGen>
                </Layout>
            </Card>
        </Card>

      {/*<Card style={styles.card}>
        <Text>{props.amount}</Text>
        </Card>8*/}

    </Layout>

    {/*<Card style={styles.card} header={Header} footer={Footer}>
      <Text>
        The Maldives, officially the Republic of Maldives, is a small country in South Asia, located in the Arabian Sea
        of the Indian Ocean. It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian
        continent
      </Text>
    </Card>*/}

  </React.Fragment>
);
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#356859",
  },
  card: {
    flex: 1,
    margin: 2,
    backgroundColor: '#b9e4c9',
  },
  container: {
    flexDirection: 'row'
  },
  food: {
    color:'red',
    backgroundColor:'white'
  },
  bills: {
    color:'blue',
    backgroundColor:'white'
  },
  clothes: {
    color:'orange',
    backgroundColor:'white'
  },

});