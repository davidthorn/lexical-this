'use strict'

/// this is undefined because 
const anon_function = function() {
    const is_undefined = this === undefined /// true
    return is_undefined
}

/// this used with a Anonymous function without using the new
/// keyword will produce this being undefined
const anon_function_result = anon_function() 
console.log("this used within Anonymous function: " , anon_function_result)

const anon_function_object_result = new anon_function()
console.log('this used with an object' , anon_function_object_result )


/// this within a method in an object
const arrow_object = {
    name: "an_object",
    arrow_function : () => {
        const is_undefined = this === undefined
        const name_is_undefined = this.name === undefined
    }

}

const arrow_object_result = arrow_object.arrow_function()

/// this within a method in an object
const anon_object = {
    name: "an_object",
    anon_function : function() {
        const is_undefined = this === undefined
        const name_is_undefined = this.name === undefined
        const local_name = this.name
    }

}

const anon_object_result = anon_object.anon_function()
console.log('result is: ' , anon_object_result)


class ArrowClass {

    constructor() {
        this.name = "an_object"
    }

    method() {

        const is_undefined = this === undefined
        const name_is_undefined = this.name === undefined
        const local_name = this.name 

    }

}

let arrow_class = new ArrowClass()
console.log('method result is: ', arrow_class.method())

class AsyncClass {

    constructor() {
        this.name = "an_object"
    }

    method(callback) {

        const is_undefined = this === undefined
        const name_is_undefined = this.name === undefined
        const local_name = this.name 
        callback()
    }

}

let async_class = new AsyncClass()
async_class.method(() => {

    /// Local
    /// Return value: undefined
    /// this: undefined
    /// is_undefined: false
    /// local_name: undefined
    /// name_is_undefined: true

    const is_undefined = this === undefined
    const name_is_undefined = this.name === undefined
    const local_name = this.name 

})

async_class.method(function (){

    /// Local
    /// Return value: undefined
    /// this: undefined
    /// is_undefined: true
    
    const is_undefined = this === undefined
    /// using this will cause a TypeError: 
    /// Cannot read property of 'name' of undefined
    ///const local_name = this.name 

})


const binded_anon_function = function() {
    
    /// Local
    /// Return value: undefined
    /// this: AsyncClass
    /// is_undefined: false
    /// local_name: "an_object"
    /// name_is_undefined: false

    const is_undefined = this === undefined
    const name_is_undefined = this.name === undefined
    const local_name = this.name 

}

const bound_async_class_function = binded_anon_function.bind(async_class)

async_class.method(bound_async_class_function)



