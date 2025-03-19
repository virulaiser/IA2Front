import React from 'react';
import Chat from './components/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <div className="App">
        <h1 className="text-center mt-3">
          Nur-IA{"\uD83D\uDC04"}
          {"\uD83C\uDF3F"}
        </h1>
        <h3>
          <p className="text-center container">
            Ejemplo: como formulo una ración para vaquillonas de 360 kg , el
            requerimiento es para 50 % de los requerimientos? o una pradera de
            trébol y festuca de 4000 kg/ms/ha, para cuantos terneros habría
            alimentos y para cuantos días para que ganen 500 gr por día , cada
            uno ? o cuantos kilos de urea , necesito para una soja de 4000kg ?
          </p>
        </h3>

        <Chat />
      </div>
    );
}

export default App;