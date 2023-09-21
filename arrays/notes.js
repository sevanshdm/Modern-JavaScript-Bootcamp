const toDoList = ['Go home', 'Workout', 'Take a shower', 'Eat dinner', 'Go to bed']

//Delete the 3rd item
//add new item to the end.
//remove first item from the list
toDoList.splice(2,1)
toDoList.push('Sleep')
toDoList.shift()
console.log(toDoList)

const notes = [1,2,3,4]
//console.log(notes[notes.length-1]) //shows last item in list put -2 at end instead of -1 to show 2nd to last

// console.log(notes.pop())       // .pop() removes last item in array, it also produces a return value. console.log(notes.pop()) shows what was removed
// notes.push('My new note')      // .push() adds an item to the end of an array

// console.log(notes.shift())     // .shift() removes the first item from the array, it returns the removed item like .pop() does.
// notes.unshift('My first note') // .unshift() adds an item to the beginning of the array.

//notes.splice(1, 1, 'This is the new second item.') // Start at index of 1 and remove 1 item .splice(1,2) would start at index 1 and remove the items in both index 1 and 2. 
                                                   // .splice(1,0,'bacon') would place 'bacon in index 1 and move everything over to the right 1 position


//notes[2] = 'This is the new note 3' //swaps out index 2 for a new item
//console.log(notes.length)
//console.log(notes)