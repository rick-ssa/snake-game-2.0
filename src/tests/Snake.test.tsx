import React from 'react';
import { render, screen } from '@testing-library/react';
import { TSnake } from '../models/TSnake';
import { size } from '../enums/Size';
import Snake from '../components/Snake';
import { roles } from '../enums/Roles';

describe('render snake', () => {
    test('should render one body', () => {
      const snakeBody:TSnake = [
        {
          width: size.SNAKE_BODY,
          height: size.SNAKE_BODY,
          left: 10,
          top: 10,
        },
      ]
      render(<Snake  snake={snakeBody}/>);
      const bodyElement = screen.getByRole(roles.SNAKE_BODY);
      expect(bodyElement).toBeInTheDocument();
    });

    test('should render more than one body', () => {
        const snakeBody:TSnake = [
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
        render(<Snake  snake={snakeBody}/>);
        const bodyElements = screen.getAllByRole(roles.SNAKE_BODY);
        expect(bodyElements).toHaveLength(2);
      });

      test('should have body backcolor blue', ()=>{
        const snakeBody:TSnake = [
            {
              width: size.SNAKE_BODY,
              height: size.SNAKE_BODY,
              left: 10,
              top: 10,
            },
          ]
          render(<Snake  snake={snakeBody}/>);
          const bodyElement = screen.getByRole(roles.SNAKE_BODY);
          const style = window.getComputedStyle(bodyElement)
          expect(style.backgroundColor).toBe('blue');
      })
})