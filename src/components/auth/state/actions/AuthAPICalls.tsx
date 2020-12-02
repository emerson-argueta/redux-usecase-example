export const loginAPICall = async (email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            if (email === 'test' && password === 'test') {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}