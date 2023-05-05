import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useLogin } from './useLogin'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login, error, isLoading, success} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }
    
    
    return(
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 font-poppins">
        <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-blue sm:text-3xl">
            Welcome back!
            </h1>

            <p className="mx-auto mt-4 max-w-md text-center text-deepgray">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
            dolores deleniti inventore quaerat mollitia?
            </p>

            <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
            <p className="text-center text-lg font-medium text-deepgray">Log in to your account</p>

            {error && <p className='text-red text-sm mt-4 font-bold'>{error}</p>}

            {success && <p className='text-green text-sm mt-4 font-bold'>Registered successfully</p>}

            <div>
                <label htmlFor="email" className="sr-only">Email</label>

                <div className="relative">
                <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    onChange= {e => setEmail(e.target.value)}
                    value={email}
                />

                
                </div>
            </div>

            <div>
                <label htmlFor="password" className="sr-only">Password</label>

                <div className="relative">
                <input
                    type="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                    onChange={e => setPassword(e.target.value)}
                    value = {password}
                />

                
                </div>
            </div>

            <button
                type="submit"
                className="block w-full rounded-lg bg-blue px-5 py-3 text-sm font-medium text-snow
                disabled:opacity-50"
                disabled={isLoading}
            >
                Log in
            </button>

            <p className="text-center text-sm text-lightgray">
                No account?
                <Link className="underline text-deepgray" to='/signup'>Sign up</Link>
            </p>
            </form>
        </div>
    </div>

    )
}