export type AuthData = {
    login: string;
    password: string;
}

export type AuthProps = {
    onSubmit: (value: AuthData) => void;
}