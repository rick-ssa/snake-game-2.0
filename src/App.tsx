import React from 'react';
import Snake from './components/Snake/Snake';
import { size } from './enums/Size';
import moveSnake from './functions/moveSnake';
import { keyboardArrows } from './enums/KeyboardArrows';

function App() {
  const mockSnake = [
    {
      width: size.SNAKE_BODY,
      height: size.SNAKE_BODY,
      left: 80,
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
      left: 60,
      top: 50,
    },
    {
      width: size.SNAKE_BODY,
      height: size.SNAKE_BODY,
      left: 50  ,
      top: 50,
    }
  ]
  let snake = moveSnake({arrow: keyboardArrows.ARROW_DOWN, direction: 'vertical'}, mockSnake)
  snake = moveSnake({arrow: keyboardArrows.ARROW_RIGHT, direction: 'horizontal'}, snake)
  snake = moveSnake({arrow: keyboardArrows.ARROW_DOWN, direction: 'vertical'}, snake)
  return (
    <div className="App">
      <Snake snake={snake}/>
    </div>
  );
}

export default App;
