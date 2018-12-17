class AsyncClass {

    constructor() {
        this.name = "an_object"
    }

    method() {
       
        /// Local
        /// this: AysncClass
        /// scope_is_undefined: false
        /// scope_local_name: "an_object"
        /// scope_name_is_undefined: false

        const scope_is_undefined = this === undefined
        const scope_name_is_undefined = this.name === undefined
        const scope_local_name = this.name 

        return new Promise(function(resolve, reject){
            
            /// Local 
            /// this: undefined
            /// is_undefined: false
            
            const is_undefined = this === undefined

            /// Cannot read property of 'name' of undefined
            //const name_is_undefined = this.name === undefined
            resolve(true)
        })

    }

}

const object = new AsyncClass()
object.method().then(() => {
    console.log('promise called')
})