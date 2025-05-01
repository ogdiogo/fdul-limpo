import { useState, useEffect, useRef } from "react";
import { LogIn, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("prof.regente.rutesaraiva@fd.ulisboa.pt");
  const [password, setPassword] = useState("direitodosmercadosfinanceiros");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const loginRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      email === "prof.regente.rutesaraiva@fd.ulisboa.pt" &&
      password === "direitodosmercadosfinanceiros"
    ) {
      console.log("Login successful!");
    } else {
      console.log("Incorrect credentials");
      alert("Incorrect email or password");
    }
  };

  useEffect(() => {
    if (loginRef.current) {
      loginRef.current.classList.add("slide-in");
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-12 flex items-center justify-center bg-[#f8f9fa] px-4">
      <div
        ref={loginRef}
        className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm transition-opacity opacity-0"
      >
        <div className="text-center mb-4">
          <LogIn className="mx-auto text-[#081b33] w-10 h-10 mb-2" />
          <h2 className="text-xl font-semibold text-[#081b33]">Área de Cliente</h2>
          <p className="text-sm text-[#6b7280]">Aceda com segurança à sua conta</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#081b33]">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#d4af37] focus:border-[#d4af37] py-2 px-3 text-sm"
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-[#081b33]">
              Palavra-passe
            </label>
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#d4af37] focus:border-[#d4af37] py-2 px-3 text-sm"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6b7280] hover:text-[#d4af37] focus:outline-none"
            >
              {passwordVisible ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#081b33] text-white font-semibold rounded-lg shadow-md hover:bg-[#0f2a4c] transition-all duration-200"
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
