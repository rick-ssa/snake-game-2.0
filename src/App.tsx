import React from 'react';
import Snake from './components/Snake';
import { size } from './enums/Size';

function App() {
  return (
    <div className="App">
      <Snake snake={[
        {
          width: size.SNAKE_BODY,
          height: size.SNAKE_BODY,
          left: 50,
          top: 50,
        },
        {
          width: size.SNAKE_BODY,
          height: size.SNAKE_BODY,
          left: 60,
          top: 50,
        },
        {
          width: size.SNAKE_BODY,
          height: size.SNAKE_BODY,
          left: 70,
          top: 50,
        },
        {
          width: size.SNAKE_BODY,
          height: size.SNAKE_BODY,
          left: 80,
          top: 50,
        }
      ]}/>
    </div>
  );
}

export default App;
