fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data)
})
.catch((error) => {
    console.log(error)
})

//! The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfullied once the response is available

//Interview question - //! you have requested from promise and got error 404 .WHere you will get the error => We will get the error in the response only and not on fetch, resolve or reject .

// The operations in fetch gets priority //! Micro task queue or priority queue and it gets priority queue

response = fetch('something')
//fetch Has two parts 
// 1.Onfulfilled[] (promise ka resolve), Onrejection[] (promise ka resolve)
// 2.Web browser/node => network request => agar kuch bhi response aaya bhale hi woh 404 error bhi kyu nah ho ,usko count kiya jata hai on fulfiled mai hi . Agar kuch nahi aaya ho toh use kehte hai onrejection