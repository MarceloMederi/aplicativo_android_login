// Importando as dependências necessárias do React e do React Native
import React, { useState } from 'react';
import { View, Button } from 'react-native';

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
          <View style={{ marginVertical: 20 }}>
            <Button title="Sair" onPress={handleLogout} />
          </View>
        </View>
      )}
    </View>
  );
};

// Exporta o componente App para que possa ser utilizado como ponto de entrada da aplicação.
export default App;
