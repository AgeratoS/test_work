export type AuthData = {
    email: string;
    password: string;
}

export type AuthProps = {
    onSubmit: (value: AuthData) => void;
}