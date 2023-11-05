import 'alpinejs'
import create from './create'
import { userCreateInterface } from "../interfaces/userCreateInterface"

declare global {
    interface Window {
        create: () => userCreateInterface
    }
}

window.create = create