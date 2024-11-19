import { View } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'


const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
        <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
            <ThemeText variant='h1'>20 x 20</ThemeText>
            <ThemeText variant='h2'>400</ThemeText>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton label='C' blackText={true} color={Colors.ligthGray} onPress={() => console.log('C')}/>
            <CalculatorButton label='+/-' blackText={true} color={Colors.ligthGray} onPress={() => console.log('nada')}/>
            <CalculatorButton label='del' blackText={true} color={Colors.ligthGray} onPress={() => console.log('C')}/>
            <CalculatorButton label='÷' color={Colors.orange} onPress={() => console.log('C')}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton label='7' blackText={true} color={Colors.ligthGray} onPress={() => console.log('C')}/>
            <CalculatorButton label='8' blackText={true} color={Colors.ligthGray} onPress={() => console.log('nada')}/>
            <CalculatorButton label='9' blackText={true} color={Colors.ligthGray} onPress={() => console.log('C')}/>
            <CalculatorButton label='*' color={Colors.orange} onPress={() => console.log('C')}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton label='4' blackText={true} color={Colors.ligthGray} onPress={() => console.log('C')}/>
            <CalculatorButton label='5' blackText={true} color={Colors.ligthGray} onPress={() => console.log('nada')}/>
            <CalculatorButton label='6' blackText={true} color={Colors.ligthGray} onPress={() => console.log('C')}/>
            <CalculatorButton label='-' color={Colors.orange} onPress={() => console.log('C')}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton label='1' blackText={true} color={Colors.ligthGray} onPress={() => console.log('C')}/>
            <CalculatorButton label='2' blackText={true} color={Colors.ligthGray} onPress={() => console.log('nada')}/>
            <CalculatorButton label='3' blackText={true} color={Colors.ligthGray} onPress={() => console.log('C')}/>
            <CalculatorButton label='+' color={Colors.orange} onPress={() => console.log('C')}/>
        </View>
        <View style={globalStyles.row}>
            <CalculatorButton label='0' blackText={true} color={Colors.ligthGray} doubleSize={true} onPress={() => console.log('C')}/>
            <CalculatorButton label='.' blackText={true} color={Colors.ligthGray} onPress={() => console.log('nada')}/>
            <CalculatorButton label='=' color={Colors.orange} onPress={() => console.log('C')}/>
        </View>
    </View>
  )
}

export default CalculatorApp