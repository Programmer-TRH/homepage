import LoginForm from "@/components/forms/login-form";

export default function LoginPage() {
  return (
    <main className="pt-28 px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <h1 className="text-3xl font-bold text-center">Admin Login</h1>
      <LoginForm />
    </main>
  );
}
