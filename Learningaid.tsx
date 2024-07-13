import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';


const Learningaid=()=>{
  const [pdfText, setPdfText] = useState('');

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });

      if (res.type === 'cancel') {
        alert('Cancelled');
        return;
      }

      console.log(res)

      const uri = res.assets[0].uri;
      const fileContent = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      const formData = new FormData();
      formData.append('pdf', {
        uri,
        name: res.assets[0].name,
        type: 'application/pdf',
      });
      const response = await axios.post('http://10.0.2.2:5600/extract-text', {
                fileContent,
                fileName: res.assets[0].name,
              }, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
    
    } catch (err) {
      alert('Error: ' + JSON.stringify(err));
    }
  };
  

  return (
    <View style={styles.container}>
      <Button title="Pick PDF" onPress={pickDocument} />
      <Text style={styles.text}>{pdfText}</Text>
    </View>
  );
}
export default  Learningaid
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
