import React from 'react';
import Highlight from 'react-highlight';

const valid = `function isValid(s) {
    let stack = [];
    const chars = {
      ')':'(',
      '}':'{',
      ']':'['
    }
    
    for(let i = 0; i < s.length; i += 1) {
      if(chars[s[i]]) {
        if(chars[s[i]] !== stack.pop()) {
          return false;
        }
      } else {
        stack.push(s[i]);
      }
    }
    return !stack.length;
  }; 
`;

export const ValidParens = () => {
  return (
    <Highlight language="javascript">
      {valid}
    </Highlight>
  );
}