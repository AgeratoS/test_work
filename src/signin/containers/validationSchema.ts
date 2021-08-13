import * as yup from "yup";

export const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    login: yup.string().min(4).max(64).required(),
    password: yup.string().min(6).required()
})