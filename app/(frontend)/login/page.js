import SignIn from './_components/sign-in';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const Page = async () => {
  const session = await auth();

  // Redirect if the user is already logged in
  if (session?.user) {
    redirect('/'); // Redirect to the home page or any protected route
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-300">
      <h1 className="text-4xl font-semibold text-white mb-3">Login Here</h1>
      <SignIn />
    </div>
  );
};

export default Page;
