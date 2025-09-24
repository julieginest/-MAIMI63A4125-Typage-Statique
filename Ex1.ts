function add(num1: number, num2: number):number{
    return num1 + num2
}

function greet(name: string = "Guest"): void {
    console.log("Hello, " + name);
}

const multiply = (num1: number, num2: number): number => {
    return num1 * num2
}

function multArray(arr: Array<number>): Array<number> {
    const newArr = arr.map(
        (n: number) =>n*2
    )
    return newArr
}

function returnMe<T>(arr: T[]): T[]{
    return arr
}
function first<T>(arr: T[]): T{
    return arr[0]
}
function id(id:number|string): void{
    switch(
        typeof(id)
    ){
        case "number":
            console.log("ID: "+id)
            break;
        case "string":
            console.log("User: "+id)
            break;
    }
}
function pow(base: number, exponent: number = 2): number{
    return base ** exponent
}
function getLength<T extends {length:number}>(arg: T): number{
    return arg.length
}
function merge<T,U>(a:T, b:U): T & U{
    return Object.assign({}, a, b);
}


console.log("1 - ADDITION")
console.log(add(5,3))

//////////////////////////////////////////

console.log("\n2 - GREET")
greet()
greet("michel")

//////////////////////////////////////////

console.log("\n3 - MULT")
console.log(multiply(5,7))

//////////////////////////////////////////

console.log("\n4 - MULT ARRAY")
console.log(multArray([1,2,3]))

//////////////////////////////////////////

console.log("\n5 - RETURN ME")
console.log(returnMe(["a",1,"b"]))
console.log(returnMe(["a","1","b"]))
console.log(returnMe([3,2,1]))

//////////////////////////////////////////

console.log("\n6 - FIRST")
console.log(first(["a",1,"b"]))
console.log(first(["a","1","b"]))
console.log(first([3,2,1]))

//////////////////////////////////////////

console.log("\n7 - TYPEVAR")
id("Mich")
id(3)

//////////////////////////////////////////

console.log("\n8 - POW")
console.log(pow(8))
console.log(pow(8,3))

//////////////////////////////////////////

console.log("\n9 - LENGTH")
console.log(getLength(""))
console.log(getLength(["a","","b"]))

/////////////////////////////////////////

console.log("\n10 - MERGE")
console.log(merge({name:"Alice"}, {age:25}))


console.log("\n#### FINI ####")

