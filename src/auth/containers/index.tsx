import { FormProvider, useForm } from "react-hook-form";
import AuthView from "../components";
import { AuthData } from "../types";

const Auth = () => {
    const methods = useForm();
    const onSubmit = (values: AuthData) => console.log(values)

    return (
        <FormProvider {...methods}>
            <AuthView onSubmit={onSubmit} />
        </FormProvider>
    )
}

export default Auth;