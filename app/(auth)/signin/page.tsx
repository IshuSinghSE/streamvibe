import { signInWithEmailAndPassword } from "@/lib/actions/auth";

const SignIn = () =>{
  
  return (
    <form
      action={async (formData) => {
        "use server";
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        await signInWithEmailAndPassword({email, password});
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
      <button>Sign In</button>
    </form>
  );
}

export default SignIn;