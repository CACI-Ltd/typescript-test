# typescript-test
Use either your own environment or Stackblitz to perform this task 
Using typescript, write a method which takes the dimensions and kind as parameters

const dimensions = {  

width: 300,

  height: 600,

  depth: 800

};

const kind = ["Ratio", "Volume", "DateTime"];



      and produces the following format

Expected output format:

  {

   name: 'object1',

   kind: 'ratio',

    value: 0.5

  }

The function should cater for the following

For kind ‘ratio’ the value is expected to be width/height
For kind ‘volume’ the value is expected to be width * height * depth
For kind ‘datetime’ the value is current time on the browser.
