import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class SpaceCraftScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>SPACE CRAFT SCREEN</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})