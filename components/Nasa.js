import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const Nasa = ({ navigation }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=qSlGOjPnCXc7pgWt5QcdsI3nw45FfocwP6EggaOZ')
      .then((res) => res.json())
      .then((json) => setImages(json))
  }, [])

  return (

    <Container>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Title>{images.title}</Title>
          <Image
            source={{ uri: images.url }}
            style={{ width: 350, height: 200, marginVertical: 2 }} />

          <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}>
            <Date>{images.date} More >></Date>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Alien')}>
            <Title>Alien >></Title>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Container>
  )
}


const Container = styled.View`
  flex:1;
  background-color: #222;
  justify-content: center;
  align-items: center;
  paddingHorizontal: 10;
  paddingVertical: 10;
`

const Title = styled.Text`
  font-size: 20px;
  color: palevioletred;
  font-weight: bold;
  paddingHorizontal: 30;
  paddingVertical: 30;
`

const Date = styled.Text`
  font-size: 24px;
  color: violet;
  paddingHorizontal: 0;
  paddingVertical: 0;
`
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    paddingHorizontal: 10,
    backgroundColor:'#222',
  },
  text: {
    fontSize: 42,
    paddingHorizontal: 10,
    color: '#fff',
  }
})