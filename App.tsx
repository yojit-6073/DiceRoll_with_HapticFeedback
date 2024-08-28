import { StatusBar } from 'expo-status-bar';
import {TouchableOpacity, Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { useState, type PropsWithChildren } from 'react';

import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'
import * as Haptics from 'expo-haptics'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return(
    <View>
      <Image style = {styles.diceImage} source = {imageUrl}/>
    </View>
  )
}

export default function App():JSX.Element{
  const [DiceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const onDiceRoll = () => {
    let random = Math.floor((Math.random()*6)+1);
    switch (random) {
      case 1:
        setDiceImage(DiceOne)
        break;
    
      case 2:
        setDiceImage(DiceTwo)
        break;

      case 3:
        setDiceImage(DiceThree)
        break;

      case 4:
        setDiceImage(DiceFour)
        break;
      
      case 5:
        setDiceImage(DiceFive)
        break;

      case 6:
        setDiceImage(DiceSix)
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }
  }

  const handlePress = () => {
    onDiceRoll();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={DiceImage} />
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});