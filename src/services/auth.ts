interface Response {
    token: string;
    user:{
        name: string;
        email: string;
    }
}


export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'ihgdfjkahbdflakjshdbfalkjhdfbgasdlkfbasdklhjfb',
                user: {
                    name: 'André',
                    email: 'andre.augusto222@gmail.com',
                }
            });
        }, 2000)
    });
}