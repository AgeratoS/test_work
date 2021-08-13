import React from "react";
import {useFormContext} from "react-hook-form";
import {SignInData, SignInProps} from "../types";
import { Header, Input, Button } from "../../common/components";

const SignIn: React.FC<SignInProps> = ({ onSubmit }) => {
    const methods = useFormContext<SignInData>();

    return (
        <div>
            <Header>Sign in</Header>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input {...methods.register("login")}/>
                <Input {...methods.register("email")}/>
                <Input type="password" {...methods.register("password")}/>
                <Button type="submit">Sign in</Button>
            </form>
        </div>
    );
}

export default SignIn;