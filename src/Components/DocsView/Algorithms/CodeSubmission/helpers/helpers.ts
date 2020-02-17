function readableBytes(bytes: number) {
  let sizeType;
  const sizes = ['Bytes', 'KB', 'MB']
  if (bytes === 0) {
    return "n/a";
  }
  sizeType = Math.floor(Math.log(bytes) / Math.log(1024));
 
  if (sizeType === 0) {
    return bytes + '' + sizes[sizeType];
  }
 
  return (bytes / Math.pow(1024, sizeType)).toFixed(2) + ' ' + sizes[sizeType];
}

function parseSpecialChars(s: string) {
  return s.replace(/[+]+/g, '\n\n');
}

function removeSpecialChars(s: string) {
  return s.replace(/\n/g, '');
}

export {
  readableBytes,
  parseSpecialChars,
  removeSpecialChars
};
