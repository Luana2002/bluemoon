import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({name}){
    return (
        <View style = {styles.container}>
            <View style = {styles.content}>
            <Text style={styles.username}> Olá, {name}!</Text>

            <TouchableOpacity activeOpacity={0.9} style={styles.ButtonUser}>
                <Feather name='user' size={27} color='#fff'/>
            </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: ' #4d4dff',
        paddingTop: StatusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
    },
    username:{
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold'
    },
    ButtonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44/2,
    }
})