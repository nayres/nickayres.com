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

  .info-header {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgrey;
    padding: 1rem 1.25rem;

    .info-title {
      margin-right: .75rem;
      margin-bottom: .75rem;
      > strong {
        font-size: 1.5rem;
      }
    }

    .info-meta-data {
      display: flex;
      flex-direction: row;
      margin-right: .75rem;
      font-size: .75rem;

      > p {
        margin-right: .25rem;
        color: grey;
      }
      > span {
        margin-right: .75rem;
      }
    }
  }

  .info-data {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 1.25rem;

    .info-data-item {
      &:first-child {
        margin-bottom: 1rem;
      }

      > p {
        margin-bottom: .5rem;
        font-size: .75rem;
      }
      .info-text-block {
        padding: 1rem;
        background: #eeeeee;
        font-size: .75rem;
      }
    }
  }

  .info-footer {
    width: 100%;
    height: 44px;
    z-index: 100;
  }
`;
