import React from 'react';
import Button from './components/ui/Button/Button';
import './App.css';

function App(props) {
  const clickEvent = (action) => {
    //alert(args);
    console.log('Clic ' + action);
  }
  return (
    <>
      <div className='App'>Salut</div>
      <Button
        action='VALIDER'
        bgColor='skyblue'
        text="Valider"
        clickEvent={(args) => { clickEvent(args); }} 
        style={{textDecoration : 'underline'}}
        />
      <Button
        action='ANNULER'
        bgColor='tomato'
        text="Annuler"
        shadow={false}
        clickEvent={(args) => { clickEvent(args); }} 
        />
      <Button
        action='RESET'
        text="Reset"
        clickEvent={(args) => { clickEvent(args); }} 
        />
    </>
  );
}

export default App;
