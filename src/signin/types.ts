export type SignInData = {
    login: string;
    email: string;
    password: string;
}

export type SignInProps = {
    onSubmit: (value: SignInData) => void;
}