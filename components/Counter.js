import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, Fragment } from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

const Counter = () => {

    const [count, setCount]= useState(0);

    return (
        <View>
            <Text style={styles.mainText}>Count: {count}</Text>
            <Separator />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button 
                    title="Increment"
                    onPress={()=>setCount(count+1)}
                />
                <Button
                    title="Reset"
                    onPress={()=>setCount(0)}
                />
                <Button 
                    title="Decrement"
                    onPress={()=>setCount(count-1)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
   
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    mainText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

});

export default Counter;
  