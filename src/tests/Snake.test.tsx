import React from 'react';
import { render, screen } from '@testing-library/react';
import { TSnake } from '../models/TSnake';
import { size } from '../enums/Size';
import Snake from '../components/Snake/Snake';
import { roles } from '../enums/Roles';

const mockSnake:TSnake = [
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

    test('should have body backcolor blue', ()=>{
        render(<Snake  snake={mockSnakeWithOneBodyPiece}/>);
        const bodyElement = screen.getByRole(roles.SNAKE_BODY);
        const style = window.getComputedStyle(bodyElement)
        expect(style.backgroundColor).toBe('blue');
    })

    test('should have head backcolor red', ()=>{
        render(<Snake  snake={mockSnake}/>);
        const bodyElement = screen.getByRole(roles.SNAKE_HEAD);
        const style = window.getComputedStyle(bodyElement)
        expect(style.backgroundColor).toBe('red');
    })
})