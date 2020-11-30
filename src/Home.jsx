import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PlaybackScreen from './PlaybackScreen';

const ytdata = [
    {   id : 'qG3eNG2rO7o',
        title :'Bill & Melinda Gates Talk Taxing The Wealthy',
       details : "For the first time ever, Bill Gates sat down with Ellen, and he chatted about becoming a young billionaire, the trampoline room in his house, and the outstanding work he's doing with the Bill & Melinda Gates Foundation"
    },
    {
        id: 'rZnXbPZ6R3w',
        title :'Macey Meets President Obama',
        details : "The presidential expert got to meet a President for the first time, and asked him some very important questions."
    },
    {
        id: 'yc0kcGgg3o0',
        title :'Michelle Obama Talks with Birthday Girl Ellen About Post-White House Life',
        details : "In her first TV interview since leaving the White House, former First Lady Michelle Obama chatted with Ellen about her family's \"normal\" life in Washington, D.C., the awkward gift she received from the Trumps at the Inauguration, and a special birthday present from Michelle and Ellen's favorite"
    },
]

const Card = ({data, navigation}) => {
    const {title, details} = data
    return(
        <TouchableOpacity
            style={styles.card}
            onPress={()=>navigation.navigate('Playback', {data})}
        >
            <Text style={styles.cardTitle}>{title}</Text>
            <Text>{details}</Text>
        </TouchableOpacity>
    )
}


function Home({navigation}) {
    return(
        <ScrollView>
            {
                ytdata.map(item=> <Card key={item.id} data={item} navigation={navigation}/>)
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        borderBottomColor: 'gray',
        borderBottomWidth: .5,
        padding: 4,
        marginHorizontal: 5
    },
    cardTitle : {
        fontWeight: 'bold'
    }
})

export default Home;