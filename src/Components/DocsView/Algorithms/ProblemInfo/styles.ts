import styled from 'styled-components';

export const InfoWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .info-content {
    height: 100%;
    position: relative;
    overflow: auto;
  }

  .info-title {
    padding: 1rem;
    border-bottom: 1px solid lightgrey;
    > span {
      font-size: 1.25rem;
    }
  }

  .info-description {
    width: 100%;
    height: 900px;
    overflow-y: auto;

    > p {
      padding: 1rem;
    }
  }

  .info-footer {
    width: 100%;
    height: 44px;
    z-index: 100;
  }
`;
