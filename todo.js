import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function TodoItem({item,pressHandle,}){

return (
    <TouchableOpacity onPress={()=>pressHandle(item.key)

    }><View style={styles.item}><MaterialIcons name="delete" size={20} color='coral'/>
        <Text style={styles.itemT}>
         {item.text}</Text></View>
    </TouchableOpacity>
)
}
const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'coral',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        flexDirection:'row',
    },
    itemT:{
        marginLeft:10
    }

})