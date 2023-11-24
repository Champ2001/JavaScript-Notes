const coding = ["js", "ruby", "java", "python"]

coding.forEach(function(val){
    console.log(val)
} )

coding.forEach( (item) => {
    console.log(item)
} )

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)//! we have to give the reference of the funtion and not execute it .printMe only and not printMe()

coding.forEach( (item, index, arr) =>{
    console.log(item , index, arr); //js 0 [ 'js', 'ruby', 'java', 'python' ] These are the different parameters present in forEach
} )

const myCoding =[
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName:"c++",
        languageFileName: "cpp"
    },
    {
        languageName:"python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})