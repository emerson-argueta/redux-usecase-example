export const initLoginState: ILoginState = {
    email: '',
    password: '',
    isLoading: false
};
export interface ILoginState {
    email: string;
    password: string;
    isLoading: boolean;
}