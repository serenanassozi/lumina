import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Checkbox } from 'expo-checkbox';

export default Question =  ({ data, onNext }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const toggleAnswer = (answer) => {
    if (selectedAnswers.includes(answer)) {
      setSelectedAnswers(selectedAnswers.filter((item) => item !== answer));
    } else {
      setSelectedAnswers([...selectedAnswers, answer]);
    }
  };

  const handleNext = () => {
    onNext(selectedAnswers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{data.qn}</Text>
      {data.ans.map((answer, index) => (
        <View key={index} style={styles.answerContainer}>
          <Checkbox
            value={selectedAnswers.includes(answer)}
            onValueChange={() => toggleAnswer(answer)}
          />
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      ))}
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  answerText: {
    marginLeft: 10,
  },
});


