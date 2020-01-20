import styled from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  width: 100%;
  height: 100%;

  .section {
    width: 50%;
    height: 100%;
  }
`;

export const EditorWrapper = styled('div')`
  width: 100%;
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
    height: 100%;
    width: 100%;
    padding: .5rem;

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
    width: 100%;
    border: 1px solid lightgrey;
    z-index: 100;
    padding: 1.25rem;
  }

  #code-result {

  }
`;