/**
 * 
 * Write a generic method which takes dimension and kind as parameters 
 * and output in the folliwng format.
 *  Expected output format:
 * {
 *   name: 'object1',
 *   kind: 'ratio',
 *   value: 0.5
 * }
 * 
 The function should cater for the following.
 *
 * For kind 'ratio’, the `value` is expected to be width/height
 * For kind ‘volume’, the `value` is expected to be width * height * depth
 * For kind ‘datetime’, the `value` is the current time on the browser
 *
 * Write tests for each 'kind' of your method using console.log
 *
 *
 */

const dimensions = {
  width: 300,
  height: 600,
  depth: 800
};

const kind = ['Ratio', 'Volume', 'DateTime'];
