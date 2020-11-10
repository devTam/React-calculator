import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const compute = (value) => () => {
    const num = Number(value);
    const displayNumber = Number(display);

    switch (value) {
      case 'C':
        setDisplay("0")
        setPreviousValue(null)
        setOperator(null)
        break;

      case '%':
        setDisplay(`${displayNumber / 100}`)
        setPreviousValue(null)
        setOperator(null)
        break

      case '±':
        setDisplay(`${displayNumber * -1 }`)
        break

      case '.':
        if(display.includes('.')) return;
        setDisplay(display + '.')
        break

      case '+':
        if(operator !== null) {
          if(operator === '+') {
            setPreviousValue(previousValue + displayNumber)
          }
          else if(operator === '-') {
            setPreviousValue(previousValue - displayNumber)
          }
          else if(operator === '*') {
            setPreviousValue(previousValue * displayNumber)
          } 
          else if(operator === '/') {
            setPreviousValue(previousValue / displayNumber)
          }  
        }else {
          setPreviousValue(displayNumber)
        }
        setDisplay('0')
        setOperator('+')
        break

      case '-':
        if(operator !== null) {
          if(operator === '+') {
            setPreviousValue(previousValue + displayNumber)
          }
          else if(operator === '-') {
            setPreviousValue(previousValue - displayNumber)
          }
          else if(operator === '*') {
            setPreviousValue(previousValue * displayNumber)
          } 
          else if(operator === '/') {
            setPreviousValue(previousValue / displayNumber)
          }  
        }else {
          setPreviousValue(displayNumber)
        }
        setDisplay('0')
        setOperator('-')
        break

      case 'x':
        if(operator !== null) {
          if(operator === '+') {
            setPreviousValue(previousValue + displayNumber)
          }
          else if(operator === '-') {
            setPreviousValue(previousValue - displayNumber)
          }
          else if(operator === '*') {
            setPreviousValue(previousValue * displayNumber)
          } 
          else if(operator === '/') {
            setPreviousValue(previousValue / displayNumber)
          }  
        }else {
          setPreviousValue(displayNumber)
        }
        setDisplay('0')
        setOperator('*')
        break

      case '÷':
        if(operator !== null) {
          if(operator === '+') {
            setPreviousValue(previousValue + displayNumber)
          }
          else if(operator === '-') {
            setPreviousValue(previousValue - displayNumber)
          }
          else if(operator === '*') {
            setPreviousValue(previousValue * displayNumber)
          } 
          else if(operator === '/') {
            setPreviousValue(previousValue / displayNumber)
          }  
        }else {
          setPreviousValue(displayNumber)
        }
        setDisplay('0')
        setOperator('/')
        break


      case '=':
        if(!operator) return;
      
        if(operator === '+') {
          setDisplay(`${previousValue + displayNumber}`)
        }else if(operator === '-') {
          setDisplay(`${previousValue - displayNumber}`)
        }else if(operator === '*') {
          setDisplay(`${previousValue * displayNumber}`)
        }else if(operator === '/') {
          setDisplay(`${previousValue / displayNumber}`)
        }
        break

      default: 
      if(display[display.length - 1] === '.') {
        setDisplay(display + value)
      }else {
        setDisplay(`${Number(display + num)}`)
      }
    }
    
  }


  return (
    <div className="App">
      <div className={`display ${display.length >= 8 ? 'reduce' : ''}`}>{`${parseFloat(Number(display).toFixed(4))}`}</div>
      <div className="buttons">
        <Button value='C' handleClick={compute} />
        <Button value='±' type='function' handleClick={compute} />
        <Button value='÷' type='function' handleClick={compute} />
        <Button value='x' type='function' handleClick={compute} />
        <Button value='7' handleClick={compute} />
        <Button value='8' handleClick={compute} />
        <Button value='9' handleClick={compute} />
        <Button value='-' type='function' handleClick={compute} />
        <Button value='4' handleClick={compute} />
        <Button value='5' handleClick={compute} />
        <Button value='6' handleClick={compute} />
        <Button value='+' type='function' handleClick={compute} />
        <Button value='1' handleClick={compute} />
        <Button value='2' handleClick={compute} />
        <Button value='3' handleClick={compute} />
        <Button value='=' type='function' handleClick={compute} id = 'equals'/>
        <Button value='0' handleClick={compute} />
        <Button value='.' handleClick={compute} />
        <Button value='%' handleClick={compute} />

      </div>
    </div>
  );
}

export default App;
