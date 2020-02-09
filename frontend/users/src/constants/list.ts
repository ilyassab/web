export const load = '@@aunited/users/list/LOAD'
export const clear = '@@aunited/users/list/CLEAR'

export interface RowParams {
    id: number
    email: string
    profile: {
      firstName: string,
      lastName: string,
    }
    registeredAt: Date
    lastLogonAt: Date
}
