'use_strict'

const anon_object = {
    
    name: "an_object",
    anon_function : function() {

        /// Local
        /// this: Object
        /// Return value: undefined
        /// is_undefined: false
        /// local_name: "an_object"
        /// name_is_undefined: false

        const is_undefined = this === undefined
        const name_is_undefined = this.name === undefined
        const local_name = this.name
    }

}

const anon_object_result = anon_object.anon_function()
console.log('result is: ' , anon_object_result)