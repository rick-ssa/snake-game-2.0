import React, { useEffect, useRef } from 'react';
import Snake from './components/Snake/Snake';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import getPath from './functions/getPath';
import { setPath } from './store/gameControllerSlice';
import { growSnake, setFood, setSnake } from './store/gamePartsSlice';
import { TPath } from './models/TPath';
import Board from './components/Board/Board';
import Food from './components/Food/Food';
import useMoveFood from './hooks/useMoveFood';
import useMoveSnake from './hooks/moveSnake';
import useCollisionTrigger from './hooks/CollisionPool/ColisionTrigger';


function App() {
  const dispatch = useAppDispatch()
  const snake = useAppSelector(state => state.gameParts.snake)
  const status = useAppSelector(state => state.gameController.gameStatus)
  const path = useAppSelector(state => state.gameController.path)
  const velocity = useAppSelector(state => state.gameController.velocity)
  const food = useAppSelector(state => state.gameParts.food)
  const collisionTrigger = useCollisionTrigger()
  const runRef = useRef<NodeJS.Timeout>()
  const foodRunRef = useRef<NodeJS.Timeout>()
  const moveFood = useMoveFood()
  const moveSnake = useMoveSnake()

  const run = (path:TPath) => {
    if(status === 'play') {
      const newSnake = moveSnake({path,snake,onColide: collisionTrigger})
      dispatch(setSnake(newSnake))
    }
    runRef.current = setTimeout(()=>run(path),velocity)
  }

  useEffect(()=>{  
    clearTimeout(runRef.current)
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

  useEffect(()=>{
    clearTimeout(foodRunRef.current)

    if(status === 'play') {
      const mileseconds = food.visible ? 7000 : 400
      foodRunRef.current = setTimeout(()=>{
        const newFood = moveFood(food)
        dispatch(setFood(newFood))
      }, mileseconds)
    }

    return ()=>{
      clearTimeout(foodRunRef.current)
    }
  },[food])

  return (
    <div className="App">
      <Board>
        <Food left={food.left} top={food.top} visible={food.visible}/>
        <Snake snake={snake}/>
      </Board>
    </div>
  );
}

export default App;
