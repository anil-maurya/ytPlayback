import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

import YouTube from 'react-native-youtube';

function PlaybackScreen({route}) {
    const [data, setData] = useState(route.params.data)
    
    console.log(data)
    return(
        <View style={styles.container}>
            <YouTube 
                apiKey='AIzaSyBJXdT6miMpWaWoR2wBmpCr0q0Nd0ovgss'
                videoId={data.id} // The YouTube video ID
                play={false} // control playback of video with true/false
                loop // control whether the video should loop when ended
                onReady={e => console.log(e)}
                showinfo={false}
                // onChangeState={e => this.setState({ status: e.state })}
                // onChangeQuality={e => this.setState({ quality: e.quality })}
                // onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
        
                <Text>{data.title}</Text>
                <Text>{data.details}</Text>
  
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-start',
    },
    list: {
        flexGrow: 1,
        backgroundColor: 'blue'
    }

})

export default PlaybackScreen;
