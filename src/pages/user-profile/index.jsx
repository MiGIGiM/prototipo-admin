import Layout from "../../components/layout/layout";

const buttons = [
    {
        name: 'Inicio',
        route: '/home',
    },
    {
        name: 'Usuarios',
        route: '/users',
    },
    {
        name: 'Log out',
        route: '/login',
    }
]

const UserProfile = () => {
    return (
        <Layout buttons={buttons}>
            <section className="mt-24">
                <div className="w-full card-bordered border-black card pb-28">
                    <p className="text-7xl card-title ml-11 mt-5">Natalan Hernandez </p>
                    <span className="flex items-start">
                        <figure><img src="/img/userEmpty.png" alt="User" /></figure>
                        <div className="card-body text-4xl  space-y-7">
                            <p>Se unió: 20/05/2022</p>
                            <p>Días activo : 15 días</p>
                            <p>Deportes:</p>
                            <span className="flex justify-between w-full">
                                <div className="card card-side space-x-10 card-bordered p-4 border-gray-600">
                                    <figure><img src="/img/sports/yoga.png" alt="yofa" /></figure>
                                    <div className="card-title text-6xl">Yoga</div>
                                </div>
                                <button className="btn rounded-full btn-xl text-6xl h-fit p-4 ">Eliminar</button>
                            </span>
                        </div>
                    </span>
                </div>
            </section>
        </Layout>
    )
};

export default UserProfile;