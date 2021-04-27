const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let array_collection = Object.values(collection)
      for (let i = 0; i < array_collection.length; i++) {
        callback(array_collection[i])
      }
      return collection

    },

    map: function(collection, callback) {
      let array_collection = Object.values(collection)
      let results = []
      for (let i = 0; i < array_collection.length; i++) {
        results.push(callback(array_collection[i]))
      }
      return results
    },

    reduce: function(collection, callback, acc) {
      let array_collection = Object.values(collection)
      let results = acc; 
      for (let i = 0; i < array_collection.length; i++) {
        if (!!results) {
          results = callback(results, array_collection[i], array_collection)
        } else {
          results = array_collection[i]
        }
      }
      return results
    },


    find: function(collection, predicate) {
      let array_collection = collection
      let result;
        for (let i = 0; i < array_collection.length; i++) {
          if (predicate(array_collection[i])) {
            result = array_collection[i]
            break
          }
        }
        return result
    },

    filter: function(collection, predicate) {
      let array_collection = collection
      let result = [];
        for (let i = 0; i < array_collection.length; i++) {
          if (predicate(array_collection[i])) {
            result.push(array_collection[i])
          }
        }
        return result

    },

    size: function(collection) {
      let size = (collection.isArray) ? collection.length : Object.values(collection).length
      return size
    },

    first: function(collection, n) {
      let num = (n) ? n: 1
      let result = collection.slice(0,num)
      if (result.length === 1) { result = result[0]}
      return result
    },

    last: function(collection, n) {
      let num = (n) ? n: 1
      let start = collection.length - num
      let result = collection.slice(start,(start+num))
      if (result.length === 1) { result = result[0]}
      return result
    },

    compact: function(array) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
          if (array[i]) {
            result.push(array[i])
          }
        }
        return result
    },

    sortBy: function(array, callback) {
      let newArray = array.slice()
      newArray.sort(function(a, b){return callback(a) - callback(b)});
      return newArray
    },

    flatten: function(array, onlyOne) {
      let runAgain = true
      let newArray = []
      let ultimateArray = array.slice()
      while (runAgain) {
        runAgain = false
          for (let i = 0; i < ultimateArray.length; i++) {
            if (Array.isArray(ultimateArray[i])) {
                newArray = [...newArray, ...ultimateArray[i]]
                runAgain = true
              } else {
                newArray.push(ultimateArray[i])
              }
          }
          ultimateArray = newArray.slice()
          newArray = []
          if (onlyOne) {runAgain = false}
        }
      return ultimateArray
    },

    uniqHelp: function(array, value) {
      let result = false
      for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
          result = true
          break;
        }
      }
      return result
    },

    uniq: function(array, isSorted, itt) {
      let basicSort = function (val) { return val }
      let newArray = array
      if (!isSorted) {newArray = this.sortBy(array, basicSort )}
      let testSet = []
      let result = []
      result.push(newArray[0])
      let value 
      if (itt) {
        testSet.push(itt(newArray[0]))
      } else {
        testSet.push(newArray[0])
      }
      for (let i = 1; i < newArray.length; i++) {
        if (itt) { value = itt(newArray[i]) }
        else { value = newArray[i]}
        if (this.uniqHelp(testSet,value)) {
          // do nothing
        } else {
          testSet.push(value)
          result.push(newArray[i])
        }
      }
      return result
    },

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys

    },

    values: function(obj) {
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values


    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
