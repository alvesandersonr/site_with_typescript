import http from "./helpers/http"
import { userCreateInterface } from "../interfaces/userCreateInterface"
import { errorValidateInterface } from "../interfaces/errorValidateInterface"
import { USER_CREATED } from "./helpers/constants"

function create(): userCreateInterface {
    return {
        created: false,
        user: {
            firstName: 'Admin',
            lastName: 'Full',
            email: 'admin@admin.com',
            password: '123123',
        },

        createUser: async function() {
            try {
                const {data} = await http.post('/user/store', this.user)
                if (data === USER_CREATED) {
                    this.created = true
                    setTimeout(() => {
                        this.created = false
                    }, 3000)
                }
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