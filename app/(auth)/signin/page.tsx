import { LoginForm } from "@/components/auth/login-form";
// import { signInWithEmailAndPassword } from "@/lib/actions/auth";

const SignIn = () => {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <LoginForm  formType="signin"/>
            </div>
        </div>
    );
};

export default SignIn;
