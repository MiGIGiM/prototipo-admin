import Layout from '../../components/layout/layout';

const buttons = [{ name: 'Inicio', route: '/home' }, { name: 'Usuarios', route: '/users' }, { name: 'Log out', route: '/' }]

const AddUser = () => {
    return (
        <Layout buttons={buttons}>
            <section className="flex justify-between items-center mt-20">
                <div className="card card-bordered h-[600px] border-gray-400 w-fit p-5 flex-row items-center space-x-10 ml-28">
                    <form className="">
                        <p className="text-4xl">Nombre:</p>
                        <input
                            type="text"
                            placeholder=""
                            className="transition-all duration-200 w-[400px] border-t-0 border-l-0 border-r-0 borber-b-2 border-b-black text-2xl focus:border-b-2 focus:border-0 focus:ring-0"
                        />
                        <p className="text-4xl mt-4">Edad:</p>
                        <span className="inline-flex items-center space-x-3 mt-4">
                            <input
                                type="number"
                                placeholder=""
                                className="transition-all duration-200 w-fit max-w-[100px] input input-bordered border-gray-400 text-2xl"
                            />
                            <p className="text-2xl">años</p>
                        </span>
                        <p className="text-4xl mt-4">Correo electronico:</p>
                        <input
                            type="text"
                            placeholder=""
                            className="transition-all duration-200 w-[400px] border-t-0 border-l-0 border-r-0 borber-b-2 border-b-black text-2xl focus:border-b-2 focus:border-0 focus:ring-0"
                        />
                        <span className="w-full inline-flex justify-end mt-10">
                            <button type="submit" className="btn rounded-full">Registrar</button>
                        </span>
                    </form>
                </div>
                    <figure><img src="/img/addUser.png" alt="" /></figure>
            </section>
        </Layout>
    )
};

export default AddUser;