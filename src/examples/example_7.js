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
async_class.method(function (){

    /// Local
    /// Return value: undefined
    /// this: global
    /// is_undefined: false

    const is_undefined = this === undefined

    const local_name = this.name

})