// Importando as dependências necessárias do React e do React Native
import React from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

// Definindo o componente Dia como uma função
const Dia = () => {

  // Array de objetos que contém dias e códigos associados
  const dias = [
    { dia: 1, codigo: '06/08' }, //colocar uma imagem no objeto
    { dia: 2, codigo: '07/08' },
    { dia: 3, codigo: '08/08' },
    { dia: 4, codigo: '09/08' },
    { dia: 5, codigo: '10/08' },
    { dia: 6, codigo: '11/08' },
    { dia: 7, codigo: '12/08' },
  ];

  // Função chamada quando um dia é pressionado
  const handleDayPress = (day) => {
    // Procura o dia selecionado no array de dias
    const diaSelecionado = dias.find(item => item.dia === day);
    if (diaSelecionado) {
      // Exibe um alerta com o número do dia e o código correspondente
      Alert.alert(`Dia ${diaSelecionado.dia}: -${diaSelecionado.codigo}`);
    }
  };

  // Retorna a estrutura do componente, a ser renderizada na tela.
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Selecione o Dia</Text>
      {/* Mapeia o array de dias para renderizar a lista de botões */}
      {dias.map(item => (
        // TouchableOpacity é um botão que fornece feedback visual ao ser pressionado
        <TouchableOpacity key={item.dia} onPress={() => handleDayPress(item.dia)} style={estilos.botao}>
          {/* Texto exibindo o número do dia e o código correspondente */}
          <Text style={estilos.textoBotao}>Dia {item.dia}: -{item.codigo}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Estilos do componente definidos usando StyleSheet.create
const estilos = StyleSheet.create({
  titulo:{
    fontSize: 35,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 40,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#1A4888",
  },
  botao: {
    backgroundColor: "#F7941E",
    marginBottom: 25,
    padding: 20,
    paddingHorizontal: 70,
    minWidth: 200,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

// Exporta o componente Dia para que possa ser utilizado em outros locais do código.
export default Dia;
