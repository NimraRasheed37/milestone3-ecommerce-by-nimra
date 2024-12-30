import Link from "next/link";
import Image from "next/image";


export default function Login() {
  return (
    <>
      <div className="lg:flex lg:justify-between lg:items-center w-full h-screen">
        <div className="w-full">
          <Image
            className="hidden lg:block lg:w-full md:h-screen"
            src="/img/login-page.jpg"
            alt="booksImage"
            width={500}
            height={50}
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center h-screen ">
          <Link href={"/"}>
            <Image
              src="/img/logo/Ababeel (4).png"
              className="mb-8 "
              alt="logo"
              width={150}
              height={50}
            />
          </Link>
          <h1 className="text-2xl font-bold mb-4 font-sans">Login</h1>
          <form className="w-full max-w-sm p-4">
            <div className="mb-4">
              <label className="block text-red-900 text-md font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="shadow-red-800 shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-6">
              <label className="block text-red-900 text-md  font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="shadow-red-800 shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 m-4 rounded"
              >
                Login
              </button>
            </div>
            <div className="text-center my-2">
              <p>
                Don&apos;t have an account?{" "}
                <Link
                  href={"/register"}
                  className="text-red-800 font-bold py-1 hover:border-b-2 border-b-red-900"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
