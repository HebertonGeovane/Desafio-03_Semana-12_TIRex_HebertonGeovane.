import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSignIn, useSignUp } from "@clerk/clerk-react";

const LoginForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isClerkFlow, setIsClerkFlow] = useState(false); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { signIn } = useSignIn();
    const { signUp } = useSignUp();

    
    const validateForm = () => {
        const newErrors = {};

        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Enter a valid email.";
        }

        if (!password.trim() || password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
        }

        if (isSignUp && !isClerkFlow) {
            if (!firstName.trim()) {
                newErrors.firstName = "First Name is required.";
            }

            if (!lastName.trim()) {
                newErrors.lastName = "Last Name is required.";
            }

            if (email !== confirmEmail) {
                newErrors.confirmEmail = "Emails do not match.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (isSignUp && isClerkFlow) {
                
                try {
                    await signUp.create({
                        firstName,
                        lastName,
                        emailAddress: email,
                        password,
                    });
                    alert("Sign Up successful!");
                    setIsSignUp(false);
                } catch (err) {
                    console.error("Error during sign up:", err);
                }
            } else if (!isSignUp && isClerkFlow) {
                
                try {
                    await signIn.create({
                        identifier: email,
                        password,
                    });
                    alert("Login successful!");
                    navigate("/shop");
                } catch (err) {
                    console.error("Error during login:", err);
                }
            } else {
                
                alert(isSignUp ? "Sign Up successful!" : "Login successful!");
                setIsSignUp(false);
                navigate("/shop");
            }
        }
    };

    
    const handleFacebookLogin = async () => {
        try {
            await signIn.authenticateWithRedirect({
                strategy: "oauth_facebook",
                redirectUrl: "/shop",
                redirectUrlComplete: "/shop",
            });
        } catch (err) {
            console.error("Error during Facebook login:", err);
        }
    };

    
    const handleGoogleLogin = async () => {
        try {
            await signIn.authenticateWithRedirect({
                strategy: "oauth_google",
                redirectUrl: "/shop",
                redirectUrlComplete: "/shop",
            });
        } catch (err) {
            console.error("Error during Google login:", err);
        }
    };

    return (
        <div className="w-full bg-[#F9F1E7] pt-[100px] flex justify-center items-center min-h-screen">
            <div className="w-[531px] bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-black text-[36px] font-poppins font-semibold leading-[54px] text-center">
                    {isSignUp ? "Sign Up" : "Login to Your Account"}
                </h1>

                <form onSubmit={handleSubmit}>
                    {isSignUp && !isClerkFlow && (
                        <div className="flex space-x-4 mt-6">
                            <div className="flex-1">
                                <label className="text-black text-[16px] font-poppins font-medium">First Name</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full h-[50px] border border-[#9F9F9F] rounded-[10px] px-4"
                                    placeholder="Sylford"
                                />
                                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[16px] font-poppins font-medium">Last Name</label>
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full h-[50px] border border-[#9F9F9F] rounded-[10px] px-4"
                                    placeholder="Walker"
                                />
                                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                            </div>
                        </div>
                    )}

                    <div className="mt-6">
                        <label className="text-black text-[16px] font-poppins font-medium">Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-[50px] border border-[#9F9F9F] rounded-[10px] px-4 mt-2"
                            placeholder="Abc@def.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {isSignUp && !isClerkFlow && (
                        <div className="mt-6">
                            <label className="text-black text-[16px] font-poppins font-medium">Confirm Email</label>
                            <input
                                type="email"
                                value={confirmEmail}
                                onChange={(e) => setConfirmEmail(e.target.value)}
                                className="w-full h-[50px] border border-[#9F9F9F] rounded-[10px] px-4 mt-2"
                                placeholder="Confirm your email"
                            />
                            {errors.confirmEmail && <p className="text-red-500 text-sm">{errors.confirmEmail}</p>}
                        </div>
                    )}

                    <div className="mt-6">
                        <label className="text-black text-[16px] font-poppins font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-[50px] border border-[#9F9F9F] rounded-[10px] px-4 mt-2"
                            placeholder="********"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full h-[50px] bg-[#B88E2F] text-white text-[16px] font-poppins font-medium rounded-[5px] mt-6"
                    >
                        {isSignUp ? "Sign Up" : "Login"}
                    </button>
                </form>

                <div className="flex space-x-4 mt-6">
                    <button
                        onClick={handleFacebookLogin}
                        className="w-1/2 h-[50px] bg-[#3B5998] text-white flex items-center justify-center rounded-[5px]"
                    >
                        <FaFacebook size={20} className="mr-2" /> Facebook
                    </button>
                    <button
                        onClick={handleGoogleLogin}
                        className="w-1/2 h-[50px] bg-[#DB4437] text-white flex items-center justify-center rounded-[5px]"
                    >
                        <FaGoogle size={20} className="mr-2" /> Google
                    </button>
                </div>

                <div className="text-center mt-6">
                    <p className="text-black text-[14px] font-poppins font-normal">
                        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                        <span
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="text-[#B88E2F] font-medium hover:underline cursor-pointer"
                        >
                            {isSignUp ? "Login" : "Sign Up"}
                        </span>
                    </p>
                    <div className="mt-4">
                        <button
                            onClick={() => setIsClerkFlow(!isClerkFlow)}
                            className="text-[#B88E2F] font-medium hover:underline cursor-pointer"
                        >
                            {isClerkFlow ? "Switch to Normal Registration" : "Use Clerk to Register"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
