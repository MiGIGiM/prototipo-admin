import Layout from "../../components/layout/layout";
import Google from "../../components/icons/Google";
const Login = () => {
    return (
        <Layout>
            <section className="flex mt-48 justify-between">
                <figure><img src="/img/login.png" alt="login-img" /></figure>
                <form action="submit" className="w-72 mr-36">
                    <p className="mb-7 text-center text-2xl text-black">Iniciar Sesión</p>
                    <input type="text" placeholder="Correo electrónico"  className="input input-bordered w-full max-w-xs rounded-full" />
                    <input type="password" placeholder="Contraseña"  className="input input-bordered w-full max-w-xs rounded-full mb-6 mt-3" />
                    <button type="submit" className="btn w-full rounded-full" >Iniciar Sesión</button>
                    <p className="text-center my-8">o</p>
                    <button type="submit" className="btn w-full rounded-full justify-between">
                        Continuar con Google
                        <Google className="w-8 h-8" />
                    </button>
                </form>
            </section>
        </Layout>
    )
};

export default Login;