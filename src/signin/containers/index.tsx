import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import SignInView from "../components";
import { SignInData } from "../types";

const SignIn: React.FC = () => {
    const methods = useForm();
    const onSubmit = (values: SignInData) => console.log(values);

    return (
        <FormProvider {...methods}>
            <SignInView onSubmit={onSubmit} />
        </FormProvider>
    )
}

export default SignIn;