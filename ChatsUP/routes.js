import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './src/components/login/formLogin';
import Register from './src/components/register/registerForm';

export default props => (
    <Router>
        <Scene key='login' component={Login} title='Login' hideNavBar />
        <Scene key='register' component={Register} title='Crie sua conta' hideNavBar={false} />
    </Router>
);

//export { Routes };
