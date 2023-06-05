import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  color: #fef9f9;
  background: #54adff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 16px;
  gap: 15px;
  cursor: pointer;
  border: none;

  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;

export const ButtonLink = styled(NavLink)`
  color: #fef9f9;
  background: #54adff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 40px;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 16px;
  gap: 15px;
  cursor: pointer;
  border: none;

  &:hover {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;

export const ButtonFilled = styled.button`
  position: relative;  
  width: 240px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  color: #fef9f9;
  background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  background-position: 0 0, center;
  background-size: 0% 0%, cover;
  background-repeat: no-repeat;
  background-color: #54adff;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: all 250ms ease-in;

  :hover {    
    background-size: 100% 100%, cover;
  }

  :disabled {
    opacity: 0.5;
  }
`;
