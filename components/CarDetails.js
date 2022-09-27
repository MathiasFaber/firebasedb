import React, {useState} from 'react';
import {Button,Text,
    View,
    TextInput,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import firebase from "firebase/compat";


function CarDetails() {
    return (
        <View>
            <Text style={styles.header}>Car List</Text>
            <TextInput/>
        </View>
    );
}

//Lokal styling til brug i SignUpForm
const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
    },
    header: {
        fontSize: 40,
    },
});

export default CarDetails