import styled from 'styled-components';

export const EditorWrapper = styled('div')`
  height: 100%;
  position: relative;
  overflow: hidden;

  .editorWrapper {
    position: relative;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .CodeMirror {
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    padding-top: 1rem;

    span {
      margin: 0 .12rem;
      line-height: 1.25rem;
    }
  }
`;

export const Content = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  .editor-controls {
    display: flex;
    justify-content: flex-end;
    padding: .75rem;
    z-index: 200;
    background: #eeeeee;
  }

  #code-result {
    #run-button {
      border: 0;
      padding: .5rem 2rem;
      font-size: 1rem;
      color: #eeeeee;
      background: #1565c0;
      cursor: pointer;
      &:hover {
        background: #0d47a1;
      }
    }
  }
`;

export const SubmissionWrapper = styled('div')`
  display: flex;
  width: inherit;
  position: absolute;
  top: 0;
  background: rgba(1,1,1,0.8);
  height: 100%;
  z-index: 200;

  .sub-content {
    color: white;
    padding: 1.25rem;
    width: inherit;
    display: flex;
    flex-direction: column;

    .sub-controls {
      display: flex;
      margin-bottom: 1rem;
    }

    #sub-back-button {
      background: black;
      border: 1px solid white;
      padding: .25rem 1rem;
      color: white;
      border-radius: none;

      &:hover {
        background: #212121;
      }
    }

    .sub-binary-result {
      margin-bottom: .25rem;
      .sub-result {
        font-size: 1.25rem;
        font-weight: 600;
      }

      #incorrect {
        color: #d32f2f;
      }

      #correct {
        color: #85bb5c;
      }
    }

    .sub-console {
      display: flex;
      flex-direction: row;
      margin-bottom: .25rem;
      > h2 {
        color: #bdbdbd;
        margin-right: .25rem;
      }
      > span {
        font-weight: 600;
      }
    }
  }
`;