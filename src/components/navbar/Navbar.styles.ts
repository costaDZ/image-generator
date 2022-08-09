import styled from 'styled-components';

export const NavbarStyles = styled.header`
  position: fixed;
  background: white;
  z-index: 10;
  width: 100%;
  transition: ease-in-out 0.3s;

  height: 4em;
  border-bottom: 1px solid var(--green-color);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .nav-section {
    display: flex;
    justify-content: space-between;

    .nav-list {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
        transform: translateX(100%);
        position: absolute;
        background: var(--dark-blue-color);
        text-align: center;
        top: 4em;
        display: block;
        transition: ease-in-out 0.3s;
        z-index: 0;
        line-height: 3;
        width: 100%;
        left: 0;
      }

      .collection_btn {
        background-color: var(--green-color);
        border-radius: 40px;
        outline: none;
        border: none;
        padding: 0.5em 1em;
        font-weight: 700;
        border: 2px solid white;

        &:hover {
          transition: var(--transition);
          background-color: white;
          border-color: var(--green-color);
          cursor: pointer;
        }
      }
    }

    .show_menu {
      transform: translateX(0%);
    }

    .bi-list {
      font-size: 3em;
      color: var(--text-gey-color);
      align-items: center;
      height: 100%;
      position: relative;
      top: 10px;
      display: none;

      &:hover {
        cursor: pointer;
        color: black;
      }

      @media (max-width: 768px) {
        display: block;
      }
    }
  }
`;
