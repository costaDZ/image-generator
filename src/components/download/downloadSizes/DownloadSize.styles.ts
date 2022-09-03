import styled from 'styled-components';

export const DownloadSizeStyles = styled.div`
  position: absolute;
  top: 6.5em;
  min-width: 18em;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: black;
  display: none;
  padding: 0.5em;

  form {
    color: white;
    position: relative;
    line-height: 3;
    padding: 0.5em;
    text-align: center;

    input {
      cursor: pointer;
    }
  }

  ::before {
    content: '';
    border-style: solid;
    border-width: 8px;
    border-color: transparent transparent #0a0909 transparent;
    height: 0;
    width: 0;
    position: absolute;
    bottom: 10em;
    left: 60px;
  }

  button {
    width: 80%;
    margin: auto;
    width: 80%;
    display: block;
    margin: auto;
  }
`;
