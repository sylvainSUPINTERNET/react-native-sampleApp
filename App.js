'use strict';

import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Image,
    StyleSheet
} from 'react-native';

import { Card, ListItem } from 'react-native-elements'


import { StackNavigator } from 'react-navigation';

import styles from './css/Home'

//test for card
const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
];

//A chaque scene creer une class (qu'on register ensuite dans la StackNavigator qu'on a coller a l'app enregistrer (nom de note projet)

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'MyFirstBlog - Home',
    };
    render() {
        const { navigate } = this.props.navigation; //function native qui va representer la fonction qui  va chercher dans stackNavigator
        let text = "Hello, you're welcom on my first react-native Blog !";
        return (
            <View>
                <Text style={styles.welcome}>{text}</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />


                <Card title="That's my first blog">
                    {

                        /* equivalent de for each en twig */
                        users.map((u, i) => {
                            return (
                                <View key={i}>
                                    <Image
                                        resizeMode="cover"
                                        source={ { uri: u.avatar } }
                                        style= { { height:50, width:50 } }
                                    />
                                    <Text>{u.name}</Text>
                                </View>
                            );
                        })
                    }
                </Card>
            </View>

        );
    }
}
//Autre page (qu'on peut split dans un autre fichier du style Tchat.js sans oublier de l'exporter et de l'importer sur App.js)
class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Tchat page',
    };
    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}



//Routing reactSampleApp et Appregistry bien mettre le meme nom que le nom du projet
const reactSampleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: {screen: ChatScreen}
});




AppRegistry.registerComponent('reactSampleApp', () => reactSampleApp);