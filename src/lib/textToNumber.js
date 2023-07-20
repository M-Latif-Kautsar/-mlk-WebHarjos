function textToNumber(text) {
    let number = 0;
    for (let i = 0; i < text.length; i++) {
      number = number + text.charCodeAt(i);
    }
    return number;
  }
  
  export default textToNumber;