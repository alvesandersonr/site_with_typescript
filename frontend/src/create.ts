import http from "./helpers/http"

function create() {
    return {
        user: {
            firstName: 'Anderson',
            lastName: '',
            email: 'admin@admin.com',
            password: 'admin123',
        },

        createUser: async function() {
            try {
                const {data} = await http.post('/user/create', this.user)
                console.log(data)
            } catch(error: any) {
                const errors = error.response?.data?.errors
                if (errors) {
                    errors.forEach((e: any) => {
                        const elementValidation = document.querySelector(`#error-${e.path}`) as HTMLSpanElement
                        elementValidation.innerHTML = e.msg

                        setTimeout(() => {
                            elementValidation.innerHTML = ''
                        }, 3000)
                    })
                }
                
                console.log(error.response.data)
            }
        },
    }
}

export default create