import React from "react";
import { View,TextInput,Text,TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import {useNavigation } from "@react-navigation/native"
const Register = () => {
    const navigation = useNavigation()
    const goHome = () => {
        navigation.navigate('Home')
    }
    return(
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
       <TextInput placeholder="what is your home" style={styles.input}/>
       <TouchableOpacity style={styles.btn}  onPress={goHome}>
	      <Text style={styles.btn_text}>Continue</Text>
        </TouchableOpacity>
     

    </View>
    )
}
export default Register

const styles = StyleSheet.create({
	input: {  borderWidth:1,borderColor: 'black',
        borderRadius: 5,paddingVertical: 10,
        paddingHorizontal: 25
	},
    btn: {
        marginVertical: 20,
        backgroundColor: "blue",
    },
    btn_text: {
        color: "white"}
    }
)