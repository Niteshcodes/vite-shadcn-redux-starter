
import { useDispatch } from "react-redux";
import { z } from "zod";
import { FormSchema, LoginForm } from "./form";
import { LOGIN } from "@/store/actionTypes";

export default function LoginPage() {
    const dispatch = useDispatch();
    function onSubmit(data: z.infer<typeof FormSchema>) {
        dispatch({ type: LOGIN, payload: data })
    }
    return (
        <div >
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}
