import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeArea} />              
                <ImageBackground 
                    source={require('../assets/stars.gif')}
                    style={styles.backgroundImage}
                    >

                    <View style={styles.titleBar}>
                        <Image source={require('../assets/main-icon.png')} style={{width:150, height:150}}/>
                        <Text style={styles.titleText}>Stellar</Text>
                        <Text style={styles.titleText}>App</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() => this.props.navigation.navigate('SpaceCraft')}
                    >
                        <Image source={require('../assets/space_crafts.png')} style={styles.routeImage}/>
                        <Text style={styles.routeText}>Spacecrafts</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() => this.props.navigation.navigate('StarMap')}
                    >
                        <Image source={require('../assets/star_map.png')} style={styles.routeImage}/>
                        <Text style={styles.routeText}>Star Map</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() => this.props.navigation.navigate('DailyPic')}
                    >
                        <Image source={require('../assets/daily_pictures.png')} style={styles.routeImage}/>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backgroundImage:{
        flex: 1,
        resizeMode: 'cover'
    },

    androidSafeArea: {
        marginTop: Platform.OS === "android" ? Statusbar.currentHeight : 0
    },

    titleBar: {
        flex:0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },

    routeCard: {
        flex: 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'white',
        borderRadius: 100
    },

    routeText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#D11583',
        justifyContent: 'center',
        alignItems: 'center'
    },

    routeImage: {
        position: 'absolute',
        width: 80,
        height: 80,
        top: -20,
        right: -15,
        resizeMode: 'contain'
    }
})