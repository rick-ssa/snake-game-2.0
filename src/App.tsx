import React, { useEffect, useRef } from 'react';
import Snake from './components/Snake/Snake';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import getPath from './functions/getPath';
import { setPath } from './store/gameControllerSlice';
import { setSnake } from './store/gamePartsSlice';
import moveSnake from './functions/moveSnake';
import { TPath } from './models/TPath';
import Board from './components/Board/Board';
import Food from './components/Food/Food';


function App() {
  const dispatch = useAppDispatch()
  const snake = useAppSelector(state => state.gameParts.snake)
  const status = useAppSelector(state => state.gameController.gameStatus)
  const path = useAppSelector(state => state.gameController.path)
  const velocity = useAppSelector(state => state.gameController.velocity)
  const runRef = useRef<NodeJS.Timeout>()

  const run = (path:TPath) => {
    if(status === 'play') {
      const newSnake = moveSnake(path,snake)
      dispatch(setSnake(newSnake))
    }
    runRef.current = setTimeout(()=>run(path),velocity)
  }

  useEffect(()=>{  
    const func = (e:KeyboardEvent) => {
      e.preventDefault()
      const newPath = getPath(e.key)
      if(newPath && newPath.direction !== path.direction) {
        clearTimeout(runRef.current)
        dispatch(setPath(newPath))
        run(newPath)
      }
    }   

    runRef.current = setTimeout(()=>run(path),velocity)

    document.addEventListener('keydown',func)

    return ()=>{
      document.removeEventListener('keydown', func)
      clearTimeout(runRef.current)
    }
  },[snake])

  return (
    <div className="App">
      <Board>
        <Food left={340} top={560} visible/>
        <Snake snake={snake}/>
      </Board>
    </div>
  );
}

export default App;
