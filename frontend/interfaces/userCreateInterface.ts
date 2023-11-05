export interface userCreateInterface {
    user: {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
    }
    createUser: () => void
}