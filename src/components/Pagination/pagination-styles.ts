import styled from 'styled-components';

export const PaginationStyles = styled.div`
  display: flex;
  padding: 3em 0;
  text-align: center;
  justify-content: space-around;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    height: 9em;
  }

  .left_box_info {
    @media (min-width: 992px) {
      padding-left: 2em;
    }
  }

  .left_box_info {
    .key_span {
      color: var(--green-color);
      font-weight: 700;
    }
  }
  .right_box_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    font-weight: 700;
    width: 14em;

    .current_page {
      border: 1px solid #b7b7b7;
      padding: 0.2em 0.5em;
    }
    .left-row,
    .right-row {
      background-color: #00d07769;
      border-radius: 12px;
      font-size: 1em;
      border: none;
      padding: 0.2em 0.6em;
      transition: var(--transition);
      margin: 0 0.5em;
      outline: none;
    }

    .active-btn {
      &:hover {
        cursor: pointer;
        background-color: var(--green-color);
      }
    }

    .desactive-btn {
      background: #d4d4d4;
    }

    .total_passed_pages,
    .total_pages {
      padding: 0 0.5em;
    }
  }
`;
