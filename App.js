import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'kendine kahve yap', key: '1' },
    { text: 'bilgisayarını aç ', key: '2' },
    { text: 'React-native çalış!!!', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    
    if(text.length > 3){

      setTodos((prevTodos) =>{
       return [
          { text: text,key: Math.random().toString()},
         ...prevTodos
       ];
     })
   } else {
     Alert.alert('HATA!','Notlar en az 3 harf olmalı!', [
       {text: 'Anlaşıldı', onPress:() => console.log('alert closed')}
     ]);
   }
  }

  return (
    //<Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismessed keyboard');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex:1,
  },
  list: {
    marginTop: 20, 
    flex: 1,
  },
});
