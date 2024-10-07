import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Partit = () => {
    return (
        <View style={estils.estilCasella}>
            <Text style={estils.nomEquips}>          València - Barcelona FC</Text>
            <Text style={estils.resultat}>                  2     -      2</Text>
        </View>
    );
};

const estils = StyleSheet.create({
    estilCasella: {
        backgroundColor: '#BEEE62',
        padding:5,
        margin: 5,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
    },
    nomEquips: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    resultat: {
        fontSize: 24,
        fontWeight: '400',
        color: 'red',
    }
});

export default Partit;