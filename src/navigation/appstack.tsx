import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Dashboard } from '../screens'

const { Navigator, Screen } = createStackNavigator();

const AppStack: FunctionComponent = () => {
    return (
        <Navigator>
            <Screen name="home" component={Home} />
            <Screen name="dashboard" component={Dashboard} />


        </Navigator>
    )
}

export default AppStack;