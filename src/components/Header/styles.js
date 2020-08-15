import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  height: 68px;
  z-index: 10;
  background-color: #141414;

  @media (max-width: 768px) {
    padding: 0px 10px;
  }

  .header__left {
    flex: 1;
    height: 100%;
    img {
      height: 100%;
    }
  }

  .header__center {
    flex: 1;

    @media (max-width: 768px) {
      flex: 3;
      margin-left: 10px;
    }

    .wrapper__input {
      width: 80%;
      position: relative;
      display: flex;

      @media (max-width: 768px) {
        width: 100%;
      }

      .search__icon {
        position: absolute;
        top: 8px;
        right: 10px;
        color: white;
        font-size: 16px;
        cursor: pointer;
      }

      input {
        color: white;
        padding: 0px 30px 0px 15px;
        width: 100%;
        height: 35px;
        background-color: transparent;
        border: 1px solid white;

        ::placeholder {
          color: white;
        }
      }
    }
  }

  .header__right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      border-radius: 100%;
    }

    .name {
      color: white;
      font-size: 15px;
      margin-right: 10px;
      text-decoration: none;
      font-weight: bold;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;
