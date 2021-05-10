import styled from 'styled-components';

const Style = {
  UsersTable: styled.table`
    margin: 0 auto;
    font-size: 20px;
    & > tr > th {
      padding: 10px;
      text-align: center;
    }
    & > tr > td {
      padding: 10px;
      text-align: center;
    }
  `,
  Buttons: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};

export default Style;
