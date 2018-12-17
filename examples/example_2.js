'use_strict'

const anon_function = function() {

    /// Local
    /// Return value: anon_function{ }
    /// this: anon_function
    /// is_undefined: false
 
    const is_undefined = this === undefined
    return is_undefined
 }
 
 const anon_function_object_result = new anon_function()
 console.log('this used with an object' , anon_function_object_result )
 /// this used with an object
 /// anon_function {}