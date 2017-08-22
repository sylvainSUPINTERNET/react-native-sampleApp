import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';


import { StackNavigator } from 'react-navigation';

//A chaque scene creer une class (qu'on register ensuite dans la StackNavigator qu'on a coller a l'app enregistrer (nom de note projet)

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation; //function native qui va representer la fonction qui  va chercher dans stackNavigator

        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />
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