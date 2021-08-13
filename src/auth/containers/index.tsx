import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {validationSchema} from "./validationSchema";
import AuthView from "../components";
import { AuthData } from "../types";
import { loginUser } from "../../common/api";

const Auth = () => {
    const methods = useForm<AuthData>({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (values: AuthData) => loginUser(values).then(console.log)

    return (
        <FormProvider {...methods}>
            <AuthView onSubmit={onSubmit} />
        </FormProvider>
    )
}

export default Auth;