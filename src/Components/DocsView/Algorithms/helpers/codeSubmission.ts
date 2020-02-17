import axios from 'axios';

interface RunTestsTypes {
  testCases: [];
  endpoint: string;
  userSubmission: string;
}

function removeSpecialChars(s: string) {
  return s.replace(/\n/g, '');
}

function runAllTests(testCases: [], endpoint: string, userSubmission: string) {
  let result;
  testCases.forEach((test: { functionCall: any; expectedResult: string; }) => {
    axios({
      method: 'post',
      url: endpoint,
      data: {
        functionCall: test.functionCall,
        userSubmission: userSubmission
      }
    })
    .then(res => {
      // if(removeSpecialChars(result.data.stdout) !== test.expectedResult) {
      //   return false;
      // }
      return res.data.stdout;
    })
    .catch(err => console.log(err));
  });
}

export { runAllTests };
