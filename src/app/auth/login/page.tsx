import FormLogin from "@/components/pages/login/form-login";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Login",
  description: "Login Page",
};

function LoginPage() {
  return (
    <div className="debug flex flex-col items-center w-full px-4">
      <h2 className="text-2xl">Login</h2>
      <FormLogin />
    </div>
  );
}

export default LoginPage;
