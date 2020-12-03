import React,{useState} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Button} from 'react-native';

export default function AddTodo({submitHandle}){
    const [text,setText]=useState('');
    
    const changeHandler =(val)=>{
setText (val);
    }
    return  <View>
        <TextInput style={styles.input}
        placeholder="new Todos"
            onChangeText={changeHandler}
        />
        <Button 
        onPress={()=>submitHandle(text)} color='coral' title='Submit' ></Button>
    </View>
}

const styles=StyleSheet.create({
    input:{
        padding:16,
        marginTop:16,
        marginBottom:20,
        borderColor:'coral',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
      
    },
    button:{
        
        borderRadius:10,
        
    }
})