import React from "react";
import { View,TextInput,Text,TouchableOpacity, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import {useNavigation } from "@react-navigation/native"

const Home = () => {
    const navigation = useNavigation()
    const opensurvey=()=>{
        navigation.navigate("survey")
    }
    const opensupport=()=>{
        navigation.navigate("Support lines")
    }
    const openlearning=()=>{
        navigation.navigate("Learning aid")
    }
    return(
        <View style={ styles.container }>
            <View style={styles.welcome}>
                <Text style={ styles.welcomeText }>Hello Serena</Text>
            </View>
            <View style={styles.slider}><Text>boo</Text></View>
            <TouchableOpacity style={styles.continue}><View>
            <Text>Continue studying</Text>
            </View></TouchableOpacity>
            <View>

            </View>
            <View style={styles.categories}>
            <TouchableOpacity style={styles.category} onPress={opensurvey}><View>
                    <Text>Survey</Text>
                </View></TouchableOpacity>
                <TouchableOpacity style={styles.category}onPress={openlearning}><View>
                    <Text>Learning aid</Text>
                </View></TouchableOpacity>
                <TouchableOpacity style={styles.category}onPress={opensupport}><View>
                    <Text>Support lines</Text>
                </View></TouchableOpacity>
            </View>
        </View>
    
    )
}
export default  Home

const styles = StyleSheet.create({
	container: {
		flex: 10,
		alignItems: 'center',
		justifyContent: "center",
        backgroundColor:'white',
        paddingHorizontal:10,
        paddingVertical:10
	},
	welcome: {
		flex: 1
	},
	welcomeText: {
		fontSize: 30,
		fontWeight: "bold"
	},
	slider: {
		flex: 4,
		backgroundColor: "#000",
        width:Dimensions.get("window").width-30,
        borderRadius:30
	},
	continue: {
		flex: 2,
        marginVertical:15,
        backgroundColor:"#eee",
        width:Dimensions.get("window").width-60,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
	},
	
	categories: {
		flex: 2,
        flexDirection:"row"
	},
    category:{
        backgroundColor:"#ddd",
        marginHorizontal:10,
        flex:2/3,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"
    },
})