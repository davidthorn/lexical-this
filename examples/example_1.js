'use strict'

const anon_function = function() {

    /// Local
    /// Return value: true
    /// this: undefined
    /// is_undefined: true

    const is_undefined = this === undefined
    return is_undefined
}

const anon_function_result = anon_function()  // true
console.log("this used within Anonymous function: " , anon_function_result)
/// this used within Anonymous function: true