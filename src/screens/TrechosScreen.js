import React from 'react';
import { View, Text } from 'react-native';

export default function TrechosScreen() {
  const trechos = [
    { id: 12, descricao: 'Km 12 - Vegetação alta', prioridade: 'Alta' },
    { id: 45, descricao: 'Km 45 - Limpeza necessária', prioridade: 'Média' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F7FA', padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: '700', color: '#0078D4', marginBottom: 20 }}>
        Trechos
      </Text>

      {trechos.map(trecho => (
        <View
          key={trecho.id}
          style={{
            backgroundColor: '#FFF',
            borderRadius: 12,
            padding: 18,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOpacity: 0.12,
            shadowRadius: 5,
            elevation: 3,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: '600', marginBottom: 6 }}>{trecho.descricao}</Text>
          <Text style={{ fontSize: 15, color: '#555' }}>Prioridade: {trecho.prioridade}</Text>
        </View>
      ))}
    </View>
  );
}