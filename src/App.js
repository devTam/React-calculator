import './App.css';
import Button from './Button';

function App() {

  const handleClick = () => {
    console.log('Button clicked')
  }
  return (
    <div className="App">
      <div className="display">0</div>
      <div className="buttons">
        <Button value='C'  handleClick={handleClick}/>
        <Button value='±' type='function' handleClick={handleClick}/>
        <Button value='÷' type='function' handleClick={handleClick}/>
        <Button value='x' type='function' handleClick={handleClick}/>
        <Button value='7' handleClick={handleClick}/>
        <Button value='8' handleClick={handleClick}/>
        <Button value='9' handleClick={handleClick}/>
        <Button value='-' type='function' handleClick={handleClick}/>
        <Button value='4' handleClick={handleClick}/>
        <Button value='5' handleClick={handleClick}/>
        <Button value='6' handleClick={handleClick}/>
        <Button value='+' type='function' handleClick={handleClick}/>
        <Button value='1' handleClick={handleClick}/>
        <Button value='2' handleClick={handleClick}/>
        <Button value='3' handleClick={handleClick}/>
        <Button value='=' type='function' handleClick={handleClick}/>
        <Button value='0' handleClick={handleClick}/>
        <Button value='.' handleClick={handleClick}/>
        <Button value='%' handleClick={handleClick}/>
        
      </div>
    </div>
  );
}

export default App;
