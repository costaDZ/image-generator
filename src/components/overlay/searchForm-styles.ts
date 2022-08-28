import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

export const SerachIcon = styled(Search)`
  height: 2em;
`;
export const SearchFormStyles = styled.form`
  display: flex;
  width: 40%;

  @media (max-width: 768px) {
    width: 80%;
  }

  .search-btn {
    border: none;
    border-radius: 4px;
    position: relative;
    left: 5px;
    cursor: pointer;
    padding: 1em;
    color: var(--grey-text);
    transition: var(--transition);
    &:hover {
      color: black;
    }
  }

  .search-input {
    font-weight: 700;
    font-size: 1em;
    padding: 13px;
    border-radius: 4px;
    outline: none;
    border: none;
    width: 100%;
  }
`;

export const PopulairImagesStyle = styled.div`
  h4 {
    display: inline-block;
    margin: 0;
    color: black;
    border: 4px solid var(--green-color);
    border-radius: 30px;
    background: var(--green-color);
  }
  button {
    font-size: 0.8em;
    background: white;
    border: 4px solid var(--green-color);
    border-radius: 30px;
    color: black;
    cursor: pointer;
    padding: 0.2em 0.4em;
    margin: 0.2em 0.2em;
    font-weight: 700;
    transition: var(--transition);

    &:hover {
      background: var(--green-color);
      color: black;
    }
  }
`;
