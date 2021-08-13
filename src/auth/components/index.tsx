import React from "react";
import { useFormContext } from "react-hook-form";
import { AuthData, AuthProps } from "../types";
import { Button, Header, Input } from "../../common/components";

const Auth: React.FC<AuthProps> = ({ onSubmit }) => {

    const methods = useFormContext<AuthData>();

    return (
        <div>
            <Header>Login</Header>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input {...methods.register("email")}/>
                <Input type={"password"} {...methods.register("password")}/>
                <Button>Log in</Button>
            </form>
        </div>
    );
}

export default Auth;