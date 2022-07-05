import Layout from "../../components/layout/layout";

const buttons = [
    {
        name: 'Inicio',
        route: '/home',
    },
    {
        name: 'Log out',
        route: '/login',
    }
]

const AdminProfile = () => {
    return (
        <Layout buttons={buttons}>
            <section className="mt-24">
                <div className="w-full card-bordered border-black card pb-28">
                    <p className="text-7xl card-title ml-11 mt-5">Diego Hernandez</p>
                    <span className="flex items-start">
                        <figure><img src="/img/userEmpty.png" alt="User" /></figure>
                        <div className="card-body text-6xl  space-y-7">
                            <p>Correo: HernandezW&H@gmail.com</p>
                            <p>Empleado desde : 30/02/2022</p>
                            <p>Rol: Administrador</p>
                        </div>
                    </span>
                </div>
            </section>
        </Layout>
    )
};

export default AdminProfile;