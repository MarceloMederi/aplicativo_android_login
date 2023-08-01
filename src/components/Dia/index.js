import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

const Dia = () => {
  const dias = [
    { dia: 1, codigo: '06/08', detalhes: 'Detalhes do Dia 1' },
    { dia: 2, codigo: '07/08', detalhes: 'Detalhes do Dia 2' },
    { dia: 3, codigo: '08/08', detalhes: 'Detalhes do Dia 3' },
    { dia: 4, codigo: '09/08', detalhes: 'Detalhes do Dia 4' },
    { dia: 5, codigo: '10/08', detalhes: 'Detalhes do Dia 5' },
    { dia: 6, codigo: '11/08', detalhes: 'Detalhes do Dia 6' },
    { dia: 7, codigo: '12/08', detalhes: 'Detalhes do Dia 7' },
  ];

  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayPress = (day) => {
    // Se o dia já estava selecionado, desselecione-o
    setSelectedDay((prevSelected) => (prevSelected === day ? null : day));
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Selecione o Dia</Text>
      {/* Mostra a lista de botões dos dias ou os detalhes do dia selecionado */}
      {selectedDay === null ? (
        // Mostra os botões dos dias
        dias.map(item => (
          <TouchableOpacity
            key={item.dia}
            onPress={() => handleDayPress(item.dia)}
            style={[
              estilos.botao,
              selectedDay === item.dia && estilos.botaoSelecionado
            ]}
          >
            <Text style={estilos.textoBotao}>Dia {item.dia}: -{item.codigo}</Text>
          </TouchableOpacity>
        ))
      ) : (
        // Mostra os detalhes do dia selecionado
        <View style={estilos.detalhesContainer}>
          <Text style={estilos.detalhesTitulo}>Detalhes do Dia {selectedDay}</Text>
          <Text style={estilos.detalhesTexto}>
            {dias[selectedDay - 1].detalhes}
          </Text>
          <TouchableOpacity
            style={estilos.botaoFecharDetalhes}
            onPress={() => setSelectedDay(null)}
          >
            <Text style={estilos.textoBotao}>Fechar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A4888',
  },
  botao: {
    backgroundColor: '#F7941E',
    marginBottom: 25,
    padding: 20,
    paddingHorizontal: 70,
    minWidth: 200,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  botaoSelecionado: {
    backgroundColor: '#FFFFFF',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  detalhesContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  detalhesTitulo: {
    fontSize: 18,
    color: '#1A4888',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detalhesTexto: {
    fontSize: 16,
    color: '#1A4888',
    textAlign: 'center',
  },
  botaoFecharDetalhes: {
    backgroundColor: '#F7941E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});

export default Dia;
