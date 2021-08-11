import React from "react";
import { LoginProps } from "../types";
import { Header, Input } from "../../common/components";

const Login: React.FC<LoginProps> = ({ email, password }) => (
    <div>
        <Header>Login</Header>
        <form action="">
            <Input name="email" value={email}/>
            <Input name="password" value={password} type={"password"}/>
        </form>
    </div>
)

export default Login;