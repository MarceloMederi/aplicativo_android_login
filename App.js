// Importando as dependências necessárias do React e do React Native
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';

// Importando os componentes personalizados Login e Dia
import Login from './src/components/Login';
import Dia from './src/components/Dia';

// Definindo o componente principal App como uma função
const App = () => {

  // Criando um estado chamado loggedIn e uma função setLoggedIn para atualizar o estado
  const [loggedIn, setLoggedIn] = useState(false);

  // Função chamada quando o login é bem-sucedido
  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  // Função chamada quando o botão "Sair" é pressionado
  const handleLogout = () => {
    setLoggedIn(false);
  };

  // Retorna a estrutura do componente, a ser renderizada na tela.
  return (
    <View style={{ flex: 1 }}>
      {/* Se o usuário não está logado, exibe a tela de login */}
      {!loggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
      {/* Se o usuário está logado, exibe a tela Dia e um botão para sair */}
      {loggedIn && (
        <View style={{ flex: 1 }}>
          <Dia />
          <View style={estilos.container}>
            <TouchableOpacity style={estilos.botao} onPress={handleLogout}>
              <Text style={estilos.textoBotao}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const estilos = StyleSheet.create({
  container:{
    
  },
  botao:{
    backgroundColor:"#FFFFFF",
    borderRadius: 5,
    padding: 10,
    
  },
  textoBotao:{
    fontSize: 25,
    textAlign:"center",
    color: "#1A4888",
    fontWeight: "bold",
  },
})

// Exporta o componente App para que possa ser utilizado como ponto de entrada da aplicação.
export default App;
