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

  .editor-controls {
    display: flex;
    justify-content: flex-end;
    z-index: 100;
    padding: .75rem;
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