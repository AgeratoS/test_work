import React from "react";
import {useFormContext} from "react-hook-form";
import {SignInData, SignInProps} from "../types";
import {
    Header,
    Input,
    Button,
    InputBlock,
    Form
} from "../../common/components";

const SignIn: React.FC<SignInProps> = ({ onSubmit }) => {
    const methods = useFormContext<SignInData>();
    const { formState: { errors }} = methods;

    return (
        <div>
            <Header>Sign in</Header>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
                <InputBlock>
                    <Input {...methods.register("login")}/>
                    {errors?.login?.message}
                </InputBlock>
                <InputBlock>
                    <Input {...methods.register("email")}/>
                    {errors?.email?.message}
                </InputBlock>
                <InputBlock>
                    <Input type="password" {...methods.register("password")}/>
                    {errors?.password?.message}
                </InputBlock>
                <Button type="submit">Sign in</Button>
            </Form>
        </div>
    );
}

export default SignIn;