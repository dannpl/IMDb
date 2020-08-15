import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  width: 20%;
  min-height: 328px;
  height: 100%;
  position: relative;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: transform;
  cursor: pointer;

  @media (max-width: 592px) {
    width: 50%;
  }

  @media (min-width: 593px) and (max-width: 1024px) {
    width: 33.3%;
  }

  .overlay {
    display: none;
    width: calc(100% - 20px);
    position: absolute;
    left: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    height: calc(100% - 20px);
    background-color: #00000085;
  }

  &:hover {
    transform: scale(1.05);

    .overlay {
      display: block;
    }

    .information {
      display: flex;
    }
  }

  .information {
    display: none;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    bottom: 40px;
    width: calc(100% - 20px);
    padding: 0px 15px;
    height: 50%;
    color: white;
    overflow: hidden;

    .title {
      font-size: 18px;
      font-weight: bold;
    }

    .description {
      margin-top: 10px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
