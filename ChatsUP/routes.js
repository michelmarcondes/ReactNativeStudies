import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './src/components/formLogin';
import Register from './src/components/registerForm';
import Welcome from './src/components/welcome';
import Main from './src/components/main';
import AddContacts from './src/components/addContact';
import Chat from './src/components/chat';

export default props => (
    <Router 
        navigationBarStyle={{ backgroundColor: '#115e54' }} 
        titleStyle={{ color: '#fff' }}
    >
        <Scene key='login' component={Login} title='Login' hideNavBar />
        <Scene key='register' component={Register} title='Crie sua conta' hideNavBar={false} />
        <Scene key='welcome' component={Welcome} title='Bem-vindo!' hideNavBar />
        <Scene key='main' component={Main} title='ChatsUP!' hideNavBar />
        <Scene 
            key='addContact' 
            component={AddContacts} 
            title='Adicionar Contato' 
            hideNavBar={false} 
            
        />
        <Scene key='chat' component={Chat} title='' hideNavBar={false} />
    </Router>
);

//export { Routes };
