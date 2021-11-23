import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Second from './Second';

const Navigat= createStackNavigator();

const Navigation = ({navigation}) => (
<Navigat.Navigator headerMode='none'>
<Navigat.Screen name ="Second" component = {Second}/>
</Navigat.Navigator>
);
export default Navigation;