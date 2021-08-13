import React from "react";
import { useFormContext } from "react-hook-form";
import { AuthData, AuthProps } from "../types";
import {
    Button,
    Header,
    Input,
    InputBlock,
    Form
} from "../../common/components";

const Auth: React.FC<AuthProps> = ({ onSubmit }) => {

    const methods = useFormContext<AuthData>();
    const { formState: { errors }} = methods;

    return (
        <div>
            <Header>Login</Header>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <InputBlock>
                    <Input {...methods.register("login")} />
                    {errors?.login?.message}
                </InputBlock>
                <InputBlock>
                    <Input {...methods.register("password")} />
                    {errors?.password?.message}
                </InputBlock>
                <Button>Log in</Button>
            </Form>
        </div>
    );
}

export default Auth;