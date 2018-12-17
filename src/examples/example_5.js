class ArrowClass {

    constructor() {
        this.name = "an_object"
    }

    method() {

        /// Local
        /// Return value: undefined
        /// this: ArrowClass
        /// is_undefined: false
        /// local_name: "an_object"
        /// name_is_undefined: false

        const is_undefined = this === undefined
        const name_is_undefined = this.name === undefined
        const local_name = this.name 
    }

}

let arrow_class = new ArrowClass()
console.log('method result is: ', arrow_class.method())