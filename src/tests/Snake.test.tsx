import React from 'react';
import { render, screen } from '@testing-library/react';
import { TSnake } from '../models/TSnake';
import { size } from '../enums/Size';
import Snake from '../components/Snake/Snake';
import { roles } from '../enums/Roles';

const mockSnakeBody:TSnake = [
    {
        width: size.SNAKE_BODY,
        height: size.SNAKE_BODY,
        left: 10,
        top: 10,
    },
  
    {
        width: size.SNAKE_BODY,
        height: size.SNAKE_BODY,
        left: 10,
        top: 10,
    },        
]

const mockSnakeWithOnePiece = mockSnakeBody.filter((_,index)=>index === 0)

describe('render snake', () => {
    test('should render one body', () => {
    
      render(<Snake  snake={mockSnakeWithOnePiece}/>);
      const bodyElement = screen.getByRole(roles.SNAKE_BODY);
      expect(bodyElement).toBeInTheDocument();
    });

    test('should render more than one body', () => {
        
        render(<Snake  snake={mockSnakeBody}/>);
        const bodyElements = screen.getAllByRole(roles.SNAKE_BODY);
        expect(bodyElements).toHaveLength(2);
    });

    test('should have body backcolor blue', ()=>{
        
        render(<Snake  snake={mockSnakeWithOnePiece}/>);
        const bodyElement = screen.getByRole(roles.SNAKE_BODY);
        const style = window.getComputedStyle(bodyElement)
        expect(style.backgroundColor).toBe('blue');
    })
})