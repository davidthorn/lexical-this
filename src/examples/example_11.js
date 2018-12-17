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

        const promise = function(resolve, reject) {
            
            /// Local
            /// this: AsyncClass
            /// is_undefined: false
            /// local_name: "an_object"
            /// name_is_undefined: false
            
            const is_undefined = this === undefined
            const local_name = this.name
            const name_is_undefined = this.name === undefined
            resolve(true)
        }

        return new Promise(promise.bind(this))

    }

}

const object = new AsyncClass()
object.method().then(() => {
    console.log('promise called')
})