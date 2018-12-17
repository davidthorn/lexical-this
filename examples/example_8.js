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

let async_class = new AsyncClass()
const bound_async_class_function = binded_anon_function.bind(async_class)

async_class.method(bound_async_class_function)