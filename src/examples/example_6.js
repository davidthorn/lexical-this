class AsyncClass {

    constructor() {
        this.name = "an_object"
    }

    method(callback) {
        
        /// Local
        /// Return value: undefined
        /// this: ArrowClass
        /// is_undefined: false
        /// local_name: "an_object"
        /// name_is_undefined: false

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
    /// this: global
    /// is_undefined: false
    /// local_name: undefined
    /// name_is_undefined: true

    const is_undefined = this === undefined
    const name_is_undefined = this.name === undefined
    const local_name = this.name 

})