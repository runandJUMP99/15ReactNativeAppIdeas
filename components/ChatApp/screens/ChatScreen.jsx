import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Platform, SafeAreaView} from "react-native";
import {GiftedChat} from "react-native-gifted-chat";
import Fire from "../Fire";

const ChatScreen = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        Fire.get(message => setMessages(prevMessages => {
            GiftedChat.append(prevMessages, message);
        }));

        return Fire.off();
    });

    function user() {
        return {
            _id: Fire.uid,
            name: props.navigation.state.params.name
        }
    }

    const chat = <GiftedChat messages={messages} onSend={Fire.send} user={{}} />;

    if (Platform.OS === "android") {
        return (
            <KeyboardAvoidingView behavior="padding" enabled keyboardVerticalOffset={30} style={{flex: 1}}>
                {chat}
            </KeyboardAvoidingView>
        )
    }

    return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;
}

export default ChatScreen;