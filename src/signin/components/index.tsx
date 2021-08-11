import React from "react";
import { Header, Input } from "../../common/components";

const SignIn: React.FC = () => (
    <div>
        <Header>Sign in</Header>
        <form action="">
            <Input name="login" />
            <Input name="email" />
            <Input name="password" type="password"/>
        </form>
    </div>
)

export default SignIn;