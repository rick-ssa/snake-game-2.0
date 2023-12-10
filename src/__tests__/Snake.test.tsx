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

const renderWithProvider = (component:React.ReactNode) => render(
    <Provider store={store}>
        {component}
    </Provider>
)

const wrapper = ({children}:{children:any}) => <Provider store={store}>{children}</Provider>

const mockSnake:TSnake = [
    {
        width: size.SNAKE_BODY,
        height: size.SNAKE_BODY,
        left: 30,
        top: 10,
    },
  
    {
        width: size.SNAKE_BODY,
        height: size.SNAKE_BODY,
        left: 20,
        top: 10,
    },   
    
    {
        width: size.SNAKE_BODY,
        height: size.SNAKE_BODY,
        left: 10,
        top: 10,
    },   
]

const mockSnakeWithOneBodyPiece = mockSnake.filter((_,index) => index < 2)

describe('render snake', () => {
    test('should render the head', () => {
        render(<Snake  snake={mockSnake}/>);
        const bodyElement = screen.getByRole(roles.SNAKE_HEAD);
        expect(bodyElement).toBeInTheDocument();
    });

    test('should render one body', () => {
    
      render(<Snake  snake={mockSnakeWithOneBodyPiece}/>);
      const bodyElement = screen.getByRole(roles.SNAKE_BODY);
      expect(bodyElement).toBeInTheDocument();
    });

    test('should render more than one body', () => {
        
        render(<Snake  snake={mockSnake}/>);
        const bodyElements = screen.getAllByRole(roles.SNAKE_BODY);
        expect(bodyElements).toHaveLength(2);
    });

    test('should body have class snake_body', ()=>{
        render(<Snake  snake={mockSnakeWithOneBodyPiece}/>);
        const bodyElement = screen.getByRole(roles.SNAKE_BODY);
        expect(bodyElement).toHaveClass('snake_body');
    })

    test('should head have class snake_head', ()=>{
        render(<Snake  snake={mockSnake}/>);
        const headElement = screen.getByRole(roles.SNAKE_HEAD);
        expect(headElement).toHaveClass('snake_head');
    })
})

describe("move snake", ()=> {
    it("should move one pace left", ()=>{
        const {result} = renderHook(() => useMoveSnake(),{wrapper})
        const movedSnake = result.current({path: {direction: 'horizontal', arrow: keyboardArrows.ARROW_LEFT}, snake: mockSnake})
        renderWithProvider(<Snake snake={movedSnake} />)
        const snakeHead = screen.getByRole(roles.SNAKE_HEAD)
        const style = window.getComputedStyle(snakeHead)
        expect(style.left).toBe('20px')
    })

    it("should move one pace right", ()=>{
        const {result} = renderHook(() => useMoveSnake(),{wrapper})
        const movedSnake = result.current({path: {direction: 'horizontal', arrow: keyboardArrows.ARROW_RIGHT}, snake: mockSnake})
        renderWithProvider(<Snake snake={movedSnake} />)
        const snakeHead = screen.getByRole(roles.SNAKE_HEAD)
        const style = window.getComputedStyle(snakeHead)
        expect(style.left).toBe('40px')
    })

    it("should move one pace up", ()=>{
        const {result} = renderHook(() => useMoveSnake(),{wrapper})
        const movedSnake = result.current({path: {direction: 'vertical', arrow: keyboardArrows.ARROW_UP}, snake: mockSnake})
        renderWithProvider(<Snake snake={movedSnake} />)
        const snakeHead = screen.getByRole(roles.SNAKE_HEAD)
        const style = window.getComputedStyle(snakeHead)
        expect(style.top).toBe('0px')
    })

    it("should move one pace down", ()=>{
        const {result} = renderHook(() => useMoveSnake(),{wrapper})
        const movedSnake = result.current({path: {direction: 'vertical', arrow: keyboardArrows.ARROW_DOWN}, snake: mockSnake})
        renderWithProvider(<Snake snake={movedSnake} />)
        const snakeHead = screen.getByRole(roles.SNAKE_HEAD)
        const style = window.getComputedStyle(snakeHead)
        expect(style.top).toBe('20px')
    })
}) 