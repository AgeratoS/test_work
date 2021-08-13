import { AuthData } from "../../auth/types";
import { concatPath, post } from "../helpers";
import { SignInData } from "../../signin/types";

// host maybe undefined so we set default value to "localhost"
const host = process.env.REACT_APP_API_HOST ?? "localhost";

export const loginUser = (values: AuthData) => post(concatPath(host, 'login'), values);
export const signInUser = (values: SignInData) => post(concatPath(host, 'register'), values);