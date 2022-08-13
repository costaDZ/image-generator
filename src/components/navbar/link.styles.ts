import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkStyles = styled(NavLink)`
  color: black;
  text-decoration: none;
  transition: 0.2s;
  margin: 0 1em;

  &:not([href='/']) {
    @media (max-width: 768px) {
      margin: 0;
      color: var(--text-grey-color);
      -webkit-transition: var(--transition);
      transition: var(--transition);
      padding: 0.5em 1em;
      margin: auto;
      width: 25%;
      display: block;
      &:hover {
        background-color: var(--green-color);
        color: black;
      }
    }

    &::after {
      content: '';
      display: block;
      height: 2px;
      background-color: var(--green-color);
      position: relative;
      border-radius: 20px;
      top: 5px;
      width: 0;
    }

    &.active-link::after {
      transition: ease 0.3s;
      width: 100%;
    }
  }
`;
