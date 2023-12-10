import React from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import { TSnake } from '../models/TSnake';
import { size } from '../enums/Size';
import Snake from '../components/Snake/Snake';
import { roles } from '../enums/Roles';
import { keyboardArrows } from '../enums/KeyboardArrows';
import useMoveSnake from '../hooks/moveSnake';
import { Provider } from 'react-redux';
import store from '../store/store';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setGameStatus, setPath, setVelocity } from '../store/gameControllerSlice';
import { addColider, growSnake } from '../store/gamePartsSlice';

const wrapper = ({children}:{children:any}) => <Provider store={store}>{children}</Provider>

describe("Game Controlls", ()=>{
    it("should turn status to play", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(setGameStatus('play'))
        const {result:gameStatus} = renderHook(() => useAppSelector(state => state.gameController.gameStatus), {wrapper})
        expect(gameStatus.current).toBe('play')
    })

    it("should turn status to stop", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(setGameStatus('stop'))
        const {result:gameStatus} = renderHook(() => useAppSelector(state => state.gameController.gameStatus), {wrapper})
        expect(gameStatus.current).toBe('stop')
    })

    it("should turn status to pause", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(setGameStatus('pause'))
        const {result:gameStatus} = renderHook(() => useAppSelector(state => state.gameController.gameStatus), {wrapper})
        expect(gameStatus.current).toBe('pause')
    })

    it("should turn status to start", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(setGameStatus('start'))
        const {result:gameStatus} = renderHook(() => useAppSelector(state => state.gameController.gameStatus), {wrapper})
        expect(gameStatus.current).toBe('start')
    })

    it("should turn status to over", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(setGameStatus('over'))
        const {result:gameStatus} = renderHook(() => useAppSelector(state => state.gameController.gameStatus), {wrapper})
        expect(gameStatus.current).toBe('over')
    })

    it("should turn velocity to 200", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(setVelocity(200))
        const {result:velocity} = renderHook(() => useAppSelector(state => state.gameController.velocity), {wrapper})
        expect(velocity.current).toBe(200)
    })

    it("should change path to left", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(setPath({direction: 'horizontal', arrow: keyboardArrows.ARROW_LEFT}))
        const {result:path} = renderHook(() => useAppSelector(state => state.gameController.path), {wrapper})
        expect(path.current.arrow).toBe(keyboardArrows.ARROW_LEFT)
    })

    it("should change path to right", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(setPath({direction: 'horizontal', arrow: keyboardArrows.ARROW_RIGHT}))
        const {result:path} = renderHook(() => useAppSelector(state => state.gameController.path), {wrapper})
        expect(path.current.arrow).toBe(keyboardArrows.ARROW_RIGHT)
    })

    it("should change path to up", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(setPath({direction: 'vertical', arrow: keyboardArrows.ARROW_UP}))
        const {result:path} = renderHook(() => useAppSelector(state => state.gameController.path), {wrapper})
        expect(path.current.arrow).toBe(keyboardArrows.ARROW_UP)
    })

    it("should change path to down", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(setPath({direction: 'vertical', arrow: keyboardArrows.ARROW_DOWN}))
        const {result:path} = renderHook(() => useAppSelector(state => state.gameController.path), {wrapper})
        expect(path.current.arrow).toBe(keyboardArrows.ARROW_DOWN)
    })
})

describe("Game parts", ()=>{
    it("should have one object in coliders", () => {
        const {result:coliders} = renderHook(() => useAppSelector(state => state.gameParts.coliders), {wrapper})
        expect(coliders.current).toHaveLength(1)
    })

    it("should have two object in coliders", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(addColider({left:10, top: 10, name: 'test'}))
        const {result:coliders} = renderHook(() => useAppSelector(state => state.gameParts.coliders), {wrapper})
        expect(coliders.current).toHaveLength(2)
    })

    it("should have three object in coliders", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(addColider({left:12, top: 10, name: 'test2'}))
        const {result:coliders} = renderHook(() => useAppSelector(state => state.gameParts.coliders), {wrapper})
        expect(coliders.current).toHaveLength(3)
    })

    it("should mantain three object in coliders", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(addColider({left:60, top: 85, name: 'test'}))
        const {result:coliders} = renderHook(() => useAppSelector(state => state.gameParts.coliders), {wrapper})
        expect(coliders.current).toHaveLength(3)
    })

    it("should snake initiate with three pieces", () => {
        const {result:snake} = renderHook(() => useAppSelector(state => state.gameParts.snake), {wrapper})
        expect(snake.current).toHaveLength(3)
    })

    it("should make snake have four pieces", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(growSnake())
        const {result:snake} = renderHook(() => useAppSelector(state => state.gameParts.snake), {wrapper})
        expect(snake.current).toHaveLength(4)
    })

    it("should make snake have five pieces", () => {
        const {result:dispatch} = renderHook(() => useAppDispatch(),{wrapper})
        dispatch.current(growSnake())
        const {result:snake} = renderHook(() => useAppSelector(state => state.gameParts.snake), {wrapper})
        expect(snake.current).toHaveLength(5)
    })
})