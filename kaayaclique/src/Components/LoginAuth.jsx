import React from "react";

const LoginAuth = () => {
    const loginWithGoogle = () => {
       window.open("http://localhost:8000/auth/google/callback", "_self");
    }
    return (
        <div className="flex flex-col justify-center border-blue-200 rounded-sm">
            <div id = "login-header" className="m-4">
                <h1 className="text-4xl text-slate-600"> Login</h1>
            </div>
            <div id = "google-login-button" className="m-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded"
                        onClick={loginWithGoogle}>
                            Continue with Google
                </button>
            </div>
        </div>
    )
};

export default LoginAuth;