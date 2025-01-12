import {signUp} from "@/lib/actions/auth";

export default function SignUp() {
  return (
    <form
      action={async (formData) => {
        "use server";
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const fullName = formData.get('password') as string;
        await signUp({ email, password, fullName });
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign Up</button>
    </form>
  );
}