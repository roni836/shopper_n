import { signIn } from "@/auth";
import Image from "next/image";

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("google");
            }}
        >
            <button
                type="submit"
                className="flex items-center justify-center w-full max-w-xs px-4 py-2 mt-4 text-white  bg-pink-50 shadow rounded-lg"
            >
                <Image
                    src="https://authjs.dev/img/providers/google.svg"
                    width={30}
                    height={30}
                    alt="Google Logo"
                    className="mr-3"
                />
                <span class="text-blue-500  text-2xl">Sign in with Google</span>
            </button>
        </form>
    );
}
