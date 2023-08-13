import React from 'react';
import { View,Text,Image, Dimensions,Pressable, StyleSheet } from 'react-native';
import CustomTextInputComponent from './CustomTextInput.component';
const QUESTIONS = [
    'What is the business about?',
    'Who is the Owner of the business?',
    'Where are you located?',
    'What is your license code (Leave blank if not applicable)?',
    'How many employees',
    'What are you selling',
    'how do you think this platform will help you',
    'What is your Phone number? (This will help us contact you)',

    'Any Questions you wish to ask?'
];

const {width,height} = Dimensions.get('window');
function BusinessQuestionsComponent(navRegister: ()=>void) {
    const [question, setQuestion] = React.useState(0);
    const [questionResponse,setQuestionResponse] = React.useState<{[key: number]: string}>({})

    function handleNextQuestion(){
        if(question < QUESTIONS.length - 1){
            setQuestion(question + 1);
        }else{
            setQuestion(0);
            navRegister();
        }
    }
    function handlePreviousQuestion(){
        if(question > 0){
            setQuestion(question - 1);
        }else{
            setQuestion(0);
        }
    }
    function handleTextChange(text:string){
        setQuestionResponse({...questionResponse, [question]: text});
        console.log(question);
    }
    return (
        <View style={{flex:1, marginLeft: 20,}}>
            <Image 
                source={require('../assets/quiz.jpg')} 
                style={{width: width*.9, height: width/2, resizeMode: 'contain',}}

                />
            <Text style={styles.grayedtext}>QUESTION {question+1}/{QUESTIONS.length}</Text>
            <Text style={styles.text}>{question+1}. {question===QUESTIONS.length? 'One last'+QUESTIONS[question]:  QUESTIONS[question]}</Text>
            <CustomTextInputComponent value={questionResponse[question]} onChangeText={(text)=>handleTextChange(text)} placeholder='....'/>
            {/* <CustomTextInput value={questionResponse[question]} onChangeText={(text)=>handleTextChange(text)} placeholder='....'/> */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Pressable onPress={handlePreviousQuestion} style={styles.nextBtn}>
                    <Text style={styles.boldtext}>Prev</Text>
                </Pressable>
                <Pressable onPress={handleNextQuestion} style={styles.nextBtn}>
                    <Text style={styles.boldtext}>Next</Text>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    boldtext:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        textTransform: 'uppercase',
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        textTransform: 'uppercase',
    },
    grayedtext:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ccc'
    },
    pressableBtn:{
        width:'42%',
        marginVertical:20,
        marginHorizontal: 8,
        borderWidth:3,
        padding:4,
    },
    // nextBtn:{
    //     paddingHorizontal: 10,
    //     marginTop: 50,
    //     marginBottom: 4,
    //     alignItems:'center',
    //     marginRight: 30,
    //     backgroundColor: 'white',
    //     alignSelf: 'flex-end'
    // },
    nextBtn:{
        paddingHorizontal: 30,
        marginTop: 50,
        paddingVertical: 5,
        marginBottom: 4,
        alignItems: 'center',
        alignSelf: 'flex-end',
        // borderRadius: 1,
        // borderWidth: 1,
    }
});
export default BusinessQuestionsComponent;