import React, { useEffect, useState } from 'react';
import params from './src/params';
import MineField from './src/Components/MineField'
import { SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import Header from './src/Components/Header';
import LevelSelection from './src/Components/screens/LevelSelection';

import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/functions'

export default function App() {
  const cols = params.getColumnsAmount();
  const rows = params.getRowsAmount();
  const [board, setBoard] = useState(createMinedBoard(rows, cols, Math.ceil(cols * rows * params.difficultLevel)));
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [showLevelSelection,setShowLevelSelection] = useState(false);
  // console.log(board)


  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();

    return Math.ceil(cols * rows * params.difficultLevel);

  }

  const createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    setBoard(createMinedBoard(rows, cols, Math.ceil(cols * rows * params.difficultLevel)))
  }

  const onOpenField = (row, column) => {
    const boardCloned = cloneBoard(board);
    openField(boardCloned, row, column);
    const lost = hadExplosion(boardCloned);
    const won = wonGame(boardCloned);

    if (lost) {
      showMines(boardCloned);
      Alert.alert("Perdeu")
    }

    if (won) {
      Alert.alert("Parabens")
    }

    setBoard(boardCloned);
    setWon(won);
    setLost(lost);

  }

  const onSelectField = (row, column) => {
    const boardCloned = cloneBoard(board);
    invertFlag(boardCloned, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns', 'Você ganhou!!!!!')
    }

    setBoard(boardCloned);
    setWon(won);


  }

  const onLevelSelected = (level) =>{
    params.difficultLevel = level;
    setBoard(createMinedBoard(rows, cols, Math.ceil(cols * rows * params.difficultLevel)))
    setWon(false)
    setLost(false)
    setShowLevelSelection(false)
  }

  return (
    <View style={styles.container}>
       <LevelSelection 
        isVisible={showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={()=>setShowLevelSelection(false)}
      />
      <Header 
        flagsLeft={minesAmount() - flagsUsed(board)}
        onNewGame={()=>{
          createState()
          setWon(false)
          setLost(false)
        }}
        onFlagPress={()=>setShowLevelSelection(true)}
      />

      <View style={styles.board}>
        <MineField
          board={board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  }
})