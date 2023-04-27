import React, { useRef } from "react"
import { useLoginMutation } from "../../redux/features/api/apiSlice"

export function Login() {
    const [login, { isSuccess, data }] = useLoginMutation()
    const name = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        login({ name: name.current!.value, password: password.current!.value })
    }

    return (
        <div className="bg-background-color flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-full">
            <div className="w-full rounded-lg shadow border sm:max-w-md xl:p-0 bg-info-color border-info-border-color">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-2xl font-bold leading-tight tracking-tight text-text-color">
                        Sign in to your account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-text-color">Your username</label>
                            <input ref={name} type="text" name="name" pattern="[a-zA-Z0-9_]+" id="name"
                                className="border sm:text-sm rounded-lg block w-full p-2.5 bg-field-color border-field-border-color placeholder-text-color-placeholder text-text-color focus:border-active-color outline-none" placeholder="user_name" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-text-color">Password</label>
                            <input ref={password} type="password" name="password" id="password" placeholder="••••••••"
                                className="border sm:text-sm rounded-lg block w-full p-2.5 bg-field-color border-field-border-color placeholder-text-color-placeholder text-text-color focus:border-active-color outline-none" required />
                        </div>
                        <a href="#" className="block text-sm font-medium hover:underline text-link-color">Forgot password?</a>
                        <button type="submit" className="w-full text-white bg-active-color hover:bg-active-color-hover active:bg-active-color-pressed outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                    </form>
                </div>
            </div>
        </div >
    )
}
