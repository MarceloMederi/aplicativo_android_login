// Importando as dependências necessárias do React e do React Native
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

// Definindo o componente Login como uma função. Ele recebe uma prop chamada onLoginSuccess.
const Login = ({ onLoginSuccess }) => {

  // Criando dois estados locais: username e password, utilizando o hook useState.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função chamada quando o botão de login é pressionado.
  const handleLogin = () => {
    // Verificando as credenciais aqui
    if (username === 'teste' && password === 'teste') {
      // Se as credenciais são válidas, exibe um alerta indicando o login bem-sucedido.
      Alert.alert('Login bem-sucedido!');
      // Chamando a função onLoginSuccess passada como prop para atualizar o estado loggedIn no App.js
      onLoginSuccess();
    } else {
      // Se as credenciais não são válidas, exibe um alerta indicando credenciais inválidas.
      Alert.alert('Credenciais inválidas!');
    }
  };

  // Retorna a estrutura do componente, a ser renderizada na tela.
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E1F5FE' }}>
      {/* View que agrupa os campos de entrada de texto e o botão */}
      <View>
        {/* Campo de entrada para o nome de usuário */}
        <TextInput
          placeholder="Nome de usuário"
          value={username}
          onChangeText={text => setUsername(text)} // Quando o texto é alterado, atualiza o estado username.
          style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
        />
        {/* Campo de entrada para a senha */}
        <TextInput
          placeholder="Senha"
          secureTextEntry // Define que o texto digitado será exibido de forma oculta.
          value={password}
          onChangeText={text => setPassword(text)} // Quando o texto é alterado, atualiza o estado password.
          style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
        />
        {/* Botão para realizar o login */}
        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </View>
  );
};

// Exporta o componente Login para que possa ser utilizado em outros locais do código.
export default Login;
