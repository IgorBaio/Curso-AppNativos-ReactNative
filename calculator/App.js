import React, { Component, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import Button from "./src/components/Button";
import Display from "./src/components/Display";
import { configureSaveReducer } from "./src/store/configureStore";

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: '',
    values: [0, 0],
    current: 0,
}

export default () => {
    const [displayValue, setDisplayValue] = useState(initialState.displayValue)
    const [clearDisplay, setClearDisplay] = useState(initialState.clearDisplay)
    const [operationState, setOperationState] = useState(initialState.operation)
    const [values, setValues] = useState(initialState.values)
    const [current, setCurrent] = useState(initialState.current)
    // Alert.alert(state.displayValue.toString())
    const dispatch = useDispatch()
    const marked = useSelector(state => state.save.marked)
    const store = configureSaveReducer()
    const addDigit = (n) => {
        console.debug(typeof displayValue)
        console.debug(displayValue)


        const clearDisplayConst = displayValue === '0' || clearDisplay || operationState === null

        if (n === '.' && !clearDisplayConst && displayValue.includes('.')) {
            return
        }

        const currentValue = clearDisplayConst !== undefined && clearDisplayConst !== null && clearDisplayConst !== false ? '' : displayValue
        const displayValueConst = currentValue !== undefined && currentValue !== null ? currentValue + n : '' + n
        console.log(displayValueConst)
        setDisplayValue(displayValueConst)
        setClearDisplay(false)

        if (n !== '.') {
            const newValue = parseFloat(displayValueConst)
            const valuesConst = [...values]
            valuesConst[current] = newValue
            setValues(valuesConst)
        }
    }

    const clearMemory = () => {
        setDisplayValue(initialState.displayValue)
        setClearDisplay(initialState.clearDisplay)
        setOperationState(initialState.operation)
        setValues(initialState.values)
        setCurrent(initialState.current)
        dispatch({
            type: 'marked',
            marked: false,
            markedLabel: ''
        })
    }

    const setOperation = (operation) => {
        if (current === 0) {
            setOperationState(operation);
            setCurrent(1);
            setClearDisplay(true);
            dispatch({
                type: 'marked',
                marked: true,
                markedLabel: operation
            })
        } else {
            const equals = operation === '='
            const valuesConst = [...values]
            try {
                valuesConst[0] = eval(`${valuesConst[0]} ${operationState} ${valuesConst[1]}`);

            } catch (e) {
                valuesConst[0] = values[0]
            }
            valuesConst[1] = 0
            setDisplayValue(`${valuesConst[0]}`)
            setOperationState(equals ? null : operation)
            setCurrent(equals ? 0:1)
            setClearDisplay(!equals)
            setValues(valuesConst)
            if(equals){
                dispatch({
                    type: 'marked',
                    marked: false,
                    markedLabel: ''
                })    
            }else{

                dispatch({
                    type: 'marked',
                    marked: true,
                    markedLabel: operation
                })
            }
        }
    }

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Display value={displayValue} />
                <View style={styles.buttons}>
                    <Button label='AC' triple onClick={clearMemory} />
                    <Button label='/' operation onClick={setOperation} />
                    <Button label='7' onClick={addDigit} />
                    <Button label='8' onClick={addDigit} />
                    <Button label='9' onClick={addDigit} />
                    <Button label='+' operation onClick={setOperation} />
                    <Button label='4' onClick={addDigit} />
                    <Button label='5' onClick={addDigit} />
                    <Button label='6' onClick={addDigit} />
                    <Button label='-' operation onClick={setOperation} />
                    <Button label='1' onClick={addDigit} />
                    <Button label='2' onClick={addDigit} />
                    <Button label='3' onClick={addDigit} />
                    <Button label='*' operation onClick={setOperation} />
                    <Button label='0' double onClick={addDigit} />
                    <Button label='.' onClick={addDigit} />
                    <Button label='=' operation onClick={setOperation} />

                </View>
            </View>
        </Provider >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

})