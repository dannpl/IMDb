import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  padding: 0 45px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px 0px;
  }

  .image {
    width: 30%;
    z-index: 1;

    @media (max-width: 768px) {
      width: 80%;
      margin: 20px auto;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .background {
    width: 100%;
    height: calc(100vh - 55px);
    position: absolute;
    opacity: 0.2;
    top: -45px;
    left: 0%;
    z-index: 0;
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
      height: 100vh;
    }
  }

  .iformations {
    z-index: 1;
    display: flex;
    width: 70%;
    padding: 0 100px 0px 50px;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0px 20px;
    }

    .title {
      font-weight: bold;
      font-size: 35px;
    }

    .release {
      margin-bottom: 20px;
      font-weight: bold;
    }

    .more__infos {
      margin-top: 20px;
      display: flex;
      align-items: center;

      .average {
        margin-right: 10px;
        .icon {
          margin-right: 5px;
        }
      }

      .count {
        display: flex;
        align-items: center;
        margin-right: 10px;

        .icon {
          margin-right: 5px;
        }
      }

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: white;

        .icon {
          color: white;
          margin-right: 5px;
        }
      }
    }
  }
`;
