import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import OcorrenciasScreen from '../screens/OcorrenciasScreen';
import TrechosScreen from '../screens/TrechosScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          animation: 'fade',
          headerStyle: { 
            backgroundColor: '#0078D4',
            height: 90, // aumenta a altura da barra azul
          },
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{
              color: '#FFF',
              fontSize: 26,
              fontWeight: '900',
              letterSpacing: 3,
              textTransform: 'uppercase',
              textShadowColor: 'rgba(0,0,0,0.25)',
              textShadowOffset: { width: 1, height: 2 },
              textShadowRadius: 3,
            }}>
              MOTIVA
            </Text>
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ocorrencias" component={OcorrenciasScreen} />
        <Stack.Screen name="Trechos" component={TrechosScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}