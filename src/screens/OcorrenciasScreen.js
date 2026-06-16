import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function OcorrenciasScreen() {
  const ocorrencia = { descricao: 'Vegetação obstruindo sinalização', status: 'Pendente' };
  const [status, setStatus] = useState(ocorrencia.status);

  const resolverOcorrencia = () => setStatus('Resolvido');

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F7FA', padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: '700', color: '#0078D4', marginBottom: 20 }}>
        Ocorrências
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
        <Text style={{ fontSize: 17, fontWeight: '600', marginBottom: 8 }}>{ocorrencia.descricao}</Text>
        <Text style={{ fontSize: 15, color: '#555', marginBottom: 14 }}>Status: {status}</Text>

        <TouchableOpacity
          style={{
            backgroundColor: status === 'Resolvido' ? '#107C10' : '#D83B01',
            borderRadius: 12,
            paddingVertical: 14,
            shadowColor: '#000',
            shadowOpacity: 0.12,
            shadowRadius: 4,
            elevation: 3,
          }}
          onPress={resolverOcorrencia}
        >
          <Text style={{ color: '#FFF', fontSize: 16, fontWeight: '600', textAlign: 'center' }}>
            {status === 'Resolvido' ? 'Resolvido ✅' : 'Marcar como resolvido'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}