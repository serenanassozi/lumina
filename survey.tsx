import React from "react";
import { View,TextInput,Text,TouchableOpacity,Button} from "react-native";
import { useState } from "react";
import surveyData from "./survey.json";
import Question from "./Question"


const survey =()=>{
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(-1);
  const [responses, setResponses] = useState([]);

  const handleNext = (answer) => {
    setResponses([...responses, { question: surveyData[currentQuestionIndex].qn, answer }]);
    if (currentQuestionIndex < surveyData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Survey Completed', responses);
    }
  };

  const startSurvey = () => {
    setCurrentQuestionIndex(0);
  };
    return(
        <View>
            {currentQuestionIndex === -1 ? (
                <Button title="Start Survey" onPress={startSurvey} />
            ) : currentQuestionIndex == surveyData.length -1? (
                <Text>Survey Completed!</Text>
              
            ) : (
                <View>
                <Question
data={surveyData[currentQuestionIndex]}
onNext={handleNext}
/>

      </View>
            )}
        </View>
    );

}

export default  survey