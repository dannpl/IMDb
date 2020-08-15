import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
    overflow-y:auto;
  padding: 0px 40px;
  margin-top: 20px;

  @media (max-width: 768px) {
    padding: 0px 5px;
  }
`;
