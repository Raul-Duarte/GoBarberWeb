export function singInRequest (email,password) {
    return {
        type:'@auth/SING_IN_REQUEST',
        payload: {email,password},
    }
}