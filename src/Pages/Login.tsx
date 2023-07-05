import { useState } from "react";
import { authService } from "../services/auth";

const Login = () => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await authService.login(register);
    if (data.info) {
      console.log(data.info);
      setRegister({ email: "", password: "" });
      alert("entro");
    } else {
      alert("No existe el email");
    }

    console.log(data);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-[354px] pt-24 flex flex-col items-center">
      <div className="flex justify-center">
        <img
          className="w-[220px] h-[41px] object-contain"
          src="./img/logo.png"
          alt=""
        />
      </div>
      <nav className="flex mt-12 ">
        <div className="box-nav  relative">
          <h3 className="font-semibold text-base text-white">Cadastrar</h3>
        </div>
        <div className="box-nav box-nav-active">
          <button>
            <h3 className="font-semibold text-base text-white">Login</h3>
          </button>
        </div>
      </nav>
      <>
        {/* Formulario */}
        <form
          action=""
          onSubmit={handleSubmit}
          className=" w-[284px] flex-col items-center justify-center m-0 mr-0"
        >
          <div className="style-input relative mt-6">
            <label htmlFor="" className="font-semibold text-xs text-white">
              E-mail ou Telefone
            </label>

            <input
              type="email"
              placeholder="Digite seu e-mail ou telefone"
              className="w-full bg-transparent border-b-2 py-4 text-white"
              onChange={handleInput}
              name="email"
              required
            />
          </div>
          <div className="style-input relative mt-6">
            <label htmlFor="" className="font-semibold text-xs text-white">
              Senha
            </label>
            <button className="absolute right-0 bottom-4">
              <img
                className="w-[24px] h-[24px] object-contain"
                src="./img/visibility.png"
                alt=""
              />
            </button>
            <input
              type="password"
              placeholder="Digite seu senha"
              className="w-full bg-transparent border-b-2 py-4 text-white"
              onChange={handleInput}
              name="password"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-9 w-full style-button2 font-semibold text-base py-[14px] "
          >
            Confirmar
          </button>
        </form>
      </>
      <button className="mt-2 w-full style-button font-semibold text-base py-[14px]">
        Esqueci minha senha ou nome de usuário
      </button>
      <div className="flex items-center justify-center">
        <div className="text-center  mt-3 pb-12">
          <p className="text-base text-white font-light w-full">
            © Copyright PlayGreen 2023 <br />
            <span className="font-normal w-full">
              Todos os direitos reservados
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
