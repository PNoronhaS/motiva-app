import React from 'react';
import { View, Text } from 'react-native';

export default function PerfilScreen() {
  const perfil = {
    nome: 'Pedro',
    cargo: 'Inspetor de Trechos',
    ultimaInspecao: '15/06/2026',
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F7FA', padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: '700', color: '#0078D4', marginBottom: 20 }}>
        Perfil
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
        <Text style={{ fontSize: 17, fontWeight: '600', marginBottom: 8 }}>Nome: {perfil.nome}</Text>
        <Text style={{ fontSize: 17, fontWeight: '600', marginBottom: 8 }}>Cargo: {perfil.cargo}</Text>
        <Text style={{ fontSize: 16, color: '#555' }}>Data da inspeção: {perfil.ultimaInspecao}</Text>
      </View>
    </View>
  );
}