import { useState } from "react";
import { LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Logging in with", { email, password });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f8f9fa] px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <LogIn className="mx-auto text-[#081b33] w-10 h-10 mb-2" />
          <h2 className="text-2xl font-bold text-[#081b33]">Área de Cliente</h2>
          <p className="text-sm text-[#6b7280]">Aceda com segurança à sua conta</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#081b33]">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d4af37] focus:ring-[#d4af37]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#081b33]">Palavra-passe</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d4af37] focus:ring-[#d4af37]"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#081b33] text-white font-semibold rounded-lg shadow-md hover:bg-[#0f2a4c] transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
