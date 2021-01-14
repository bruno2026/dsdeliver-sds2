import React from 'react';
import { StyleSheet,ScrollView, View } from 'react-native';
import Header from '../Header';
import Ordercard from '../OrderCard';

function Orders() {
    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                <Ordercard />
                <Ordercard />
                <Ordercard />
                <Ordercard />
                <Ordercard />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container :{
        paddingRight: '5%',
        paddingLeft: '5%',
    }
});

export default Orders;