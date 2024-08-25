import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Button from "../Components/Button";

export default function Calc() {
    const [firstNumber, setFirstNumber] = React.useState<string>("");
    const [secondNumber, setSecondNumber] = React.useState<string>("");
    const [operation, setOperation] = React.useState<string>("");
    const [result, setResult] = React.useState<number | null>(null);

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        if (result !== null) {
            setSecondNumber(result.toString());
            setResult(null); 
        } else {
            setSecondNumber(firstNumber);
        }
        setOperation(buttonValue);
        setFirstNumber(""); 
    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    const formatNumber = (number: number): string => {
        let formattedResult = number.toFixed(10);
        formattedResult = parseFloat(formattedResult).toString();
        if (formattedResult.length > 8) {
            formattedResult = formattedResult.slice(0, 10);
        }
        return formattedResult;
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text>{formatNumber(result)}</Text>;
        }
        return <Text>{firstNumber}</Text>;
    };

    const getResult = () => {
        if (firstNumber && secondNumber && operation) {
            let calculatedResult: number;
            switch (operation) {
                case "+":
                    calculatedResult = parseFloat(secondNumber) + parseFloat(firstNumber);
                    break;
                case "-":
                    calculatedResult = parseFloat(secondNumber) - parseFloat(firstNumber);
                    break;
                case "x":
                    calculatedResult = parseFloat(secondNumber) * parseFloat(firstNumber);
                    break;
                case "/":
                    calculatedResult = parseFloat(secondNumber) / parseFloat(firstNumber);
                    break;
                case "％":
                    const percentage = parseFloat(firstNumber) / 100;
                    calculatedResult = parseFloat(secondNumber) * percentage;
                    break;
                default:
                    calculatedResult = 0;
                    break;
            }

            setResult(calculatedResult);
            setFirstNumber("");
            setSecondNumber("");
            setOperation(""); 
        }
    };

    return (
        <View style={{ backgroundColor: '#F8F8F8' }}>
            {/* App icon and name */}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 16, paddingLeft: 12, marginBottom: 16, backgroundColor: '#FFFFF' }}>
                <Image
                    source={require('../assets/images/icon.png')}
                    style={{ width: 50, height: 40 }}
                />
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: "black", marginLeft: 8 }}>
                    NeuCalc.
                </Text>
            </View>

            {/* Display area */}
            <ImageBackground
                source={require('../assets/images/2.png')} 
                style={{ width: 330, height: 200, justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 16, marginLeft: 12 }}
            >
                <View style={{ flexDirection: 'row', paddingBottom: 8, paddingRight: 16 }}>
                    <Text style={{ fontSize: 36, fontWeight: '500', color: "black" }}>
                        {secondNumber}
                    </Text>
                    <Text style={{ fontSize: 36, fontWeight: '500', color: "black" }}>
                        {operation}
                    </Text>
                    <Text style={{ fontSize: 36, fontWeight: '500', color: "black" }}>
                        {firstNumberDisplay()}
                    </Text>
                </View>
            </ImageBackground>

            {/* Buttons */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button iconSource={require('../assets/images/a.png')} onPress={clear} />
                <Button iconSource={require('../assets/images/undo.png')} onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <Button iconSource={require('../assets/images/pers.png')} onPress={() => handleOperationPress("％")} />
                <Button iconSource={require('../assets/images/bol.png')} onPress={() => handleOperationPress("/")} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="7" onPress={() => handleNumberPress("7")} />
                <Button title="8" onPress={() => handleNumberPress("8")} />
                <Button title="9" onPress={() => handleNumberPress("9")} />
                <Button iconSource={require('../assets/images/carp.png')} onPress={() => handleOperationPress("x")} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="4" onPress={() => handleNumberPress("4")} />
                <Button title="5" onPress={() => handleNumberPress("5")} />
                <Button title="6" onPress={() => handleNumberPress("6")} />
                <Button iconSource={require('../assets/images/minus.png')} onPress={() => handleOperationPress("-")} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="1" onPress={() => handleNumberPress("1")} />
                <Button title="2" onPress={() => handleNumberPress("2")} />
                <Button title="3" onPress={() => handleNumberPress("3")} />
                <Button iconSource={require('../assets/images/plus.png')} onPress={() => handleOperationPress("+")} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="0" onPress={() => handleNumberPress("0")} 
                    style={{ width: 152 }}
                />
                <Button title="." onPress={() => handleNumberPress(".")} />
                <Button iconSource={require('../assets/images/equal.png')} onPress={getResult} />
            </View>
        </View>
    );
}
