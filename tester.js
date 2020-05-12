// This function returns a squared array. The input's length will be greater than zero, and each element will be a number greater than zero.

// solution function
function squareArray(arr) {
    let buffer
    let resultArr = []
  
    for (let i = 0; i < arr.length; i++) {
      buffer = arr[i] * arr[i]
      resultArr.push(buffer)
    }
  
    return 'hello world'
  }
  
  // test cases
  let inputs = [
    {
      input: [1, 2, 3, 4],
      expected: [1, 4, 9, 16]
    },
    {
      input: [2, 4, 6, 8],
      expected: [4, 16, 36, 64]
    },
    {
      input: [0, 0, 0, -4],
      expected: [0, 0, 0, 16]
    },
    // {
    //   // add more test cases here
    //   input: [5, 4, 3, 2, 10, 12, 7],
    //   expected: [25, 16, 9, 4, 100, 144, 49]
    // },
  ]
  
  function test(func, inputs) {
    let result
    let currentTest
    for (let i = 0; i < inputs.length; i++) {
      currentTest = inputs[i]
      result = func(currentTest.input)
      if (result[i] != currentTest.expected[i]) {
        console.log(`Running Test ${i + 1}...`)
        console.log('')
        console.warn(`Test ${i + 1} Failed.`)
        console.log('')
        console.warn(`expected: ${currentTest.expected}`)
        console.warn(`type: ${typeof currentTest.expected}`)
        console.log('')
        console.warn(`received: ${result}`)
        console.warn(`type: ${typeof result}`)
        console.log('')
        console.log(`Test ${i + 1} Complete.`)
        console.log('')
        console.log('-')
        console.log('')
  
        
      } else {
        console.log(`Running Test ${i + 1}...`)
        console.log('')
        console.log(`Success!!`)
        console.log('')
        console.warn(`expected: ${currentTest.expected}`)
        console.warn(`type: ${typeof currentTest.expected}`)
        console.log('')
        console.warn(`received: ${result}`)
        console.warn(`type: ${typeof result}`)
        console.log('')
        console.log(`Test ${i + 1} Complete.`)
        console.log('')
        console.log('-')
        console.log('')
      }
    }
  }
  
  // test runs here
  test(squareArray, inputs)