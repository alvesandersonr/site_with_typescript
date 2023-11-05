import http from "./helpers/http"
import { userCreateInterface } from "../interfaces/userCreateInterface"
import { errorValidateInterface } from "../interfaces/errorValidateInterface"

function create(): userCreateInterface {
    return {
        user: {
            firstName: 'Anderson',
            lastName: 'Alves',
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
                    errors.forEach((e: errorValidateInterface) => {
                        const elementValidation = document.querySelector(`#error-${e.path}`) as HTMLSpanElement
                        elementValidation.innerHTML = e.msg

                        setTimeout(() => {
                            elementValidation.innerHTML = ''
                        }, 3000)
                    })
                }
            }
        },
    }
}

export default create