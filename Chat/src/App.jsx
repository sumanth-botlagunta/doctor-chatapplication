import React from 'react';

import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import 'stream-chat-react/dist/css/index.css';
import './App.css';

import { ChannelContainer, ChannelListContainer } from './components';

const apiKey = '8ks8eashyr8a';
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
