import { useState, useEffect } from 'react';
import {
    registerOnMessageCallback,
    registerOnSessionCallback,
    send,
  } from "./websocket";
import MessageWindow from "./MessageWindow";
import TextBar from "./TextBar";
import Notification from "./Notifications";
import ProfilePage from '../pages/profilepage';
import {useRouter} from 'next/router';
import SecNavbar from './SecNavbar';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
const App = (): any => {

    const router = useRouter();
    const initialState: {
      messages: any[];
      username: string;
      session: any;
    } = {
      messages: [],
      username: "chaks",
      session: {},
    };
  
    const [state, setState] = useState(initialState);
    
    const scrollToBottom = () => {
      window.scrollTo(0, document.body.scrollHeight);
    };
  
    useEffect((): void => {
      registerOnMessageCallback(onMessageReceived);
      registerOnSessionCallback(onSessionCreated);
      scrollToBottom();
    }, [state]);
  
    const onSessionCreated = (session: any) => {
      console.log({ session });
      setState({
        ...state,
        session: session,
      });
    };
  
    const onMessageReceived = (msg: any) => {
      // let message = msg.content.title;
      // if (msg.content.choices && msg.content.choices.length > 0) {
      //   for (let i = 0; i < msg.content.choices.length; i++) {
      //     message =
      //       message +
      //       "\n" +
      //       msg.content.choices[i].key +
      //       ". " +
      //       msg.content.choices[i].text;
      //   }
      //   console.log(msg.content.choices);
      // }
      setState({
        ...state,
        messages: state.messages.concat({
          username: "UCI",
          text: msg.content.title,
          choices: msg.content.choices,
        }),
      });
    };
  
    const setUserName = (name: string) => {
      setState({
        ...state,
        username: name,
      });
    };
  
    const sendMessage = (text: any) => {
      send(text, state.session);
      setState({
        ...state,
        messages: state.messages.concat({
          username: state.username,
          text: text,
        }),
      });
    };
    if (state.username === null) {
      console.log("Please set a username first");
      return (
        <div className="container">
          <div className="container-title">Enter username</div>
          <TextBar onSend={setUserName} />
        </div>
      );
    }
  
    const selected = (option: any) => {
      const toSend = option.key+" "+option.text;
      sendMessage(toSend);
    }
    //wallpaper url
    

   
    

    //const imgUrl = "https://images.wallpapersden.com/image/download/black-panther-4k-dark_bGxta2WUmZqaraWkpJRobWllrWdma2U.jpg";
    return (
      <>
        <div className="chat-header">
          <div className="chat__header--info">
            <h3>Chakshu Gautam</h3>
          </div>
          <SecNavbar />
          {/* <button onClick={()=>router.push('/profilepage')}>Profile Page</button> */}
          <div className="chat__header--right">
            {/* <Notification /> */}
          </div>
        </div>
        <div className="chat-body-container">
          <div 
            className="chat-body" 
          >         
            <MessageWindow messages={state.messages} username={state.username} selected={selected}/>          
          </div>
          <TextBar onSend={sendMessage} />
        </div>
      </>
    );
  };


export default App;