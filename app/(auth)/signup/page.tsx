import { LoginForm } from '@/components/auth/login-form';

export default function SignUp() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center">
            <div className="w-full max-w-sm md:max-w-3xl">
                <LoginForm formType='signup'/>
            </div>
        </div>
    );
}
