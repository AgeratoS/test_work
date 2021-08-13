import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validationSchema";
import SignInView from "../components";
import { SignInData } from "../types";
import { signInUser } from "../../common/api";

const SignIn: React.FC = () => {
    const methods = useForm<SignInData>({
        resolver: yupResolver(validationSchema)
    });
    const onSubmit = (values: SignInData) => signInUser(values)

    return (
        <FormProvider {...methods}>
            <SignInView onSubmit={onSubmit} />
        </FormProvider>
    )
}

export default SignIn;