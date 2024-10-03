# LAB TEST 1 - COMP 3123 submission

-- question 1
In the lowerCase function we are return a promise where checking is the provied array is array if yes then continue else return rejected.
After getting the array we are filtering out all the non string object then mapping .toLowerCase() function to all the remaing function.
If all these process completed successfully then return a resolve.

-- question 2
Taking inspiration from the provided callbacks.js file we have create two promises where the first one resolvedPromise only resolvs promise and the seocnd one onyl rejects all the promise.

-- question 3
Here we are utilizing fs(file system) and path modules.
We get the curr dir path using global variable (\_\_dirname)

- add.js
  we check if the Logs directory exists if it does not then create it.
  aftre dir creation we are running a loop 10 times and creating 10 files and writing in them.

- remove.js
  we check if the Logs fir exists it is does then we run a loop and delete all the files in them and log it.
  At the end remove the directory as well.
