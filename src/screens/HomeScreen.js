import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F7FA', padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: '700', color: '#0078D4', marginBottom: 20 }}>
        Motiva App
      </Text>

      <View style={{
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 18,
        shadowColor: '#000',
        shadowOpacity: 0.12,
        shadowRadius: 5,
        elevation: 3,
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0078D4',
            borderRadius: 12,
            paddingVertical: 16,
            marginBottom: 14,
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 3,
          }}
          onPress={() => navigation.navigate('Ocorrencias')}
        >
          <Text style={{ color: '#FFF', fontSize: 17, fontWeight: '600', textAlign: 'center' }}>
            Ver Ocorrências
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#0078D4',
            borderRadius: 12,
            paddingVertical: 16,
            marginBottom: 14,
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 3,
          }}
          onPress={() => navigation.navigate('Trechos')}
        >
          <Text style={{ color: '#FFF', fontSize: 17, fontWeight: '600', textAlign: 'center' }}>
            Ver Trechos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#0078D4',
            borderRadius: 12,
            paddingVertical: 16,
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowRadius: 4,
            elevation: 3,
          }}
          onPress={() => navigation.navigate('Perfil')}
        >
          <Text style={{ color: '#FFF', fontSize: 17, fontWeight: '600', textAlign: 'center' }}>
            Perfil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}