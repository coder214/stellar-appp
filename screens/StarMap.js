import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView, ImageBackgrounda, ImageBackground, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';import React, { Component } from 'react';

export default class StartMapScreen extends Component{
    constructor() {
        super()
        this.state={
            longitude: '',
            latitude: ''
        }
    }

    render(){
        const {longitude, latitude} = this.state
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.upperContainer}>
                    <Text style={styles.titleText}>Star Map</Text>

                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Enter your longitude'
                        placeholderTextColor='white'
                        onChangeText={(text) => {this.setState({longitude: text})}}
                    />

                    <TextInput
                        style={styles.inputStyle}
                        placeholder='Enter your latitude'
                        placeholderTextColor='white'
                        onChangeText={(text) => {this.setState({latitude: text})}}
                    />
                </View>
                <WebView
                    scalesPageToFit={true}
                    style={{marginTop:20, marginBottom:20}}
                    source={{uri : path}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#1a0023'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    upperContainer: {
        flex: 0.3,
        alignItems: 'center',
        marginTop: 20
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        alignContent: 'center',
        justifyContent: 'center'
    },
    inputStyle: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        marginRight:20,
        marginLeft:20,
        textAlign: 'center',
        color: 'white'
    }
})