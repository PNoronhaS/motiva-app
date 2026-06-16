export const theme = {
  colors: {
    primary: '#0078D4',   // Azul Motiva
    background: '#F5F7FA',
    card: '#FFFFFF',
    text: '#333333',
    caption: '#555555',
    success: '#107C10',
    danger: '#D83B01',
  },
  typography: {
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: '#0078D4',
      marginBottom: 16,
    },
    body: {
      fontSize: 16,
      color: '#333333',
    },
    caption: {
      fontSize: 14,
      color: '#555555',
    },
  },
  components: {
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    button: {
      backgroundColor: '#0078D4',
      borderRadius: 8,
      paddingVertical: 14,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
      textAlign: 'center',
    },
  },
};