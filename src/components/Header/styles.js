import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;
  height: 70px;
  background-color: #092f57;

  .user-menu {
    display: flex;
    align-items: center;

    .no-data {
      &.img {
        height: 45px;
        margin: auto;
        border-radius: 100%;
        width: 45px;
      }
    }

    .name {
      color: white;
      font-size: 15px;
      margin-left: 10px;
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: #61dafb;
      }

      .no-data {
        height: 1rem;
        margin: auto;
        border-radius: 2px;
        width: 120px;
      }
    }
  }
`;
