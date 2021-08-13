import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import SignInView from "../components";
import { SignInData } from "../types";
import { signInUser } from "../../common/api";

const SignIn: React.FC = () => {
    const methods = useForm();
    const onSubmit = (values: SignInData) => signInUser(values)

    return (
        <FormProvider {...methods}>
            <SignInView onSubmit={onSubmit} />
        </FormProvider>
    )
}

export default SignIn;