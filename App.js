import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View ,FlatList, Alert, TouchableHighlight, TouchableWithoutFeedback,Keyboard} from 'react-native';
import TodoItem from './todo';
import Header  from "./heder";
import AddTodo from './components/addtodo';
export default function App() {
  const [todos, setTodos]=useState(
    [
{text: 'buy coffee',key :'1'},
{text: 'create app',key :'2'},
{text: 'play of switch',key :'3'}
    ]
  );
  const pressHandle =(key)=>{
    setTodos((pretode)=>{
      return pretode.filter(todos=>todos.key!=key)
    })
  }

  const submitHandle=(text)=>{
   
    setTodos((pretode)=>{
      return [
        {text:text,key:Math.random().toString()},
        ...pretode
      ];
    });
  
  }
  return (
    <TouchableWithoutFeedback onPress ={()=>{Keyboard.dismiss()}}>
    <View style={styles.container}>
    
     <Header/>

     <View style={styles.form}>
     <AddTodo submitHandle={submitHandle}/>
     {/* form*/}
     <View style={styles.list}>
     {/* list*/}
<FlatList data={todos} 
renderItem={({item})=>(
  
  <TodoItem item={item} pressHandle={pressHandle}/>
)}
>

 </FlatList>
      
    </View>
      
    </View>
    </View></TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  form:{
    padding:40,
    flex:1,
    backgroundColor:'pink'

  },
  list:{
marginTop:20,
flex:2,

  }
});
