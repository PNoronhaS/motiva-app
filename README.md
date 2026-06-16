# Motiva App

Aplicativo desenvolvido em **React Native/Expo** como parte da Sprint 2 do projeto Motiva.

## 🚀 Objetivo
O app simula os fluxos principais da solução definida na Sprint 1, utilizando **dados mockados** para representar ocorrências, trechos e perfil de inspetor.  
A integração com APIs reais será feita em sprints futuras.

---

## 📱 Funcionalidades
- Navegação entre telas principais: **Home, Ocorrências, Trechos e Perfil**.
- **Mock de dados** representando:
  - Ocorrências (descrição e status).
  - Trechos da rodovia (km, prioridade).
  - Perfil do inspetor (nome, cargo, última inspeção).
- Fluxo funcional: usuário marca ocorrência como resolvida → interface atualiza o estado.
- Consistência visual com protótipo da Sprint 1 (barra azul fixa com título MOTIVA, botões e cards estilizados).

---

## 🛠️ Tecnologias
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)

---

## 📂 Estrutura de Pastas
```
motiva-app/
 ├── src/
 │   ├── navigation/
 │   │   └── AppNavigator.js
 │   ├── screens/
 │   │   ├── HomeScreen.js
 │   │   ├── OcorrenciasScreen.js
 │   │   ├── TrechosScreen.js
 │   │   └── PerfilScreen.js
 │   └── data/
 │       └── mockData.js
 └──  App.js
```

---

## 🔧 Instalação e Execução
1. Clone o repositório:
   ```bash
   git clone https://github.com/PNoronhaS/motiva-app.git
   cd motiva-app
---
2.Instale as dependências:
  ```bash
npm install
  ```
---
3.Execute o app:
  ```bash
npx expo start
  ```
4. Abra no emulador ou dispositivo físico via Expo Go.

---

## 📊 Mock de Dados
Exemplo de estrutura utilizada:
  ```json
{
  "ocorrencias": [
    { "id": 1, "descricao": "Vegetação obstruindo sinalização", "status": "Pendente" }
  ],
  "trechos": [
    { "id": 12, "descricao": "Km 12 - Vegetação alta", "prioridade": "Alta" }
  ],
  "perfil": {
    "nome": "Pedro",
    "cargo": "Inspetor de Trechos",
    "ultimaInspecao": "15/06/2026"
  }
}
  ```
---

## 🎥 Vídeo de Demonstração
Link para o vídeo: 

---

## 👥 Integrantes
.Thiago Ono Sakai - 563448
.Lucas Franco de Godoy Fortes - 561723
.Rafael Silva Oliveira Nascimento - 565415
.Gabriel Nacarelli Pinheiro - 565298
.Pedro Mitsuo Risardi Nisiaymamoto - 561710
.Luiz Claro Lima - 563014
.Pedro Noronha dos Santos - 564572
