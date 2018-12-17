'use_strict'

/// this within a method in an object
const an_object = {
    name: "an_object",
    arrow_function : () => {

        /// Local
        /// this: Object
        /// is_undefined: false
        /// name_is_undefined: true

        const is_undefined = this === undefined
        const name_is_undefined = this.name === undefined
    }

}

const anon_object_result = an_object.arrow_function()
console.log('result is: ' , anon_object_result)