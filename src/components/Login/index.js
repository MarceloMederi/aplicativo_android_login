// Importando as dependências necessárias do React e do React Native
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Logo from "../../../assets/logo.png"

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
    <View style={estilos.formulario}>
      {/* View que agrupa os campos de entrada de texto e o botão */}

      <Image source={Logo} style={estilos.logo}></Image>
      {/* Importação da imagem e estilização na constante 'estilos' */}

      <View>
        {/* Campo de entrada para o nome de usuário */}
        <TextInput
          placeholder="Usuário"
          placeholderTextColor={"#a2a29d"}
          value={username}
          onChangeText={text => setUsername(text)} // Quando o texto é alterado, atualiza o estado username.
          style={estilos.input}
        />
        {/* Campo de entrada para a senha */}
        <TextInput
          placeholder="Senha"
          placeholderTextColor={"#a2a29d"}
          secureTextEntry // Define que o texto digitado será exibido de forma oculta.
          value={password}
          onChangeText={text => setPassword(text)} // Quando o texto é alterado, atualiza o estado password.
          style={estilos.input}
        />
        {/* Botão para realizar o login */}

        <TouchableOpacity style={estilos.botao} onPress={handleLogin}>
          <Text style={estilos.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Exporta o componente Login para que possa ser utilizado em outros locais do código.
export default Login;

const estilos = StyleSheet.create({
  formulario:{
    backgroundColor: "#1A4888",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo:{
    width: 250,
    height: 250,
  },
  input:{
    marginBottom: 20,
    paddingHorizontal: 100,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: "#F7941E",
    borderRadius: 10,
    color: "#FFFFFF",
    fontSize: 18,
  },
  botao:{
    marginTop: 20,
    backgroundColor: "#F7941E",
    paddingVertical: 20,
    borderRadius: 10,

  },
  textoBotao:{
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  
})
