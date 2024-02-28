import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderStyles } from './src/components/Header/styles';
import styled from 'styled-components';
import { Header } from './src/components/Header';

export default function App() {
  return (
    <View>
      <Header/>
    </View>
  );
}


