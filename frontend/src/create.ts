import http from "./helpers/http"
import { userCreateInterface } from "../interfaces/userCreateInterface"
import { errorValidateInterface } from "../interfaces/errorValidateInterface"
import { EMAIL_DUPLICATED, USER_CREATED } from "./helpers/constants"
import Swal from "sweetalert2"

function create(): userCreateInterface {
    return {
        created: false,
        errors: {
            email_duplicated: false,
        },
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
                    Swal.fire({
                        title: "Sucesso!",
                        text: "Usuário cadastrado com sucesso!",
                        icon: "success"
                    });
                    // this.created = true
                    // setTimeout(() => {
                    //     this.created = false
                    // }, 3000)
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
                } else {
                    switch(error.response?.data) {
                        case EMAIL_DUPLICATED:
                            Swal.fire({
                                title: "Atenção!",
                                text: "Este e-mail já está sendo utilizado!",
                                icon: "warning"
                            });
                            // this.errors.email_duplicated = true
                            // const elementValidation = document.querySelector(`#error-email`) as HTMLSpanElement
                            // elementValidation.innerHTML = 'Email already exists'

                            // setTimeout(() => {
                            //     elementValidation.innerHTML = ''
                            // }, 3000)
                            break
                        default:
                            break
                    }

                    setTimeout(() => {
                        this.errors.email_duplicated = false
                    }, 3000)
                }
            }
        },
    }
}

export default create