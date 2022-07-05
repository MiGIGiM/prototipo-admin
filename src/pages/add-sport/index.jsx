import Layout from '../../components/layout/layout';

const buttons = [{ name: 'Inicio', route: '/home' }, { name: 'Entidades', route: '/entities' }, { name: 'Log out', route: '/' }]

const AddSport = () => {
    return (
        <Layout buttons={buttons}>
            <section className="flex justify-center items-center mt-20">
                <div className="card card-bordered h-[600px] border-gray-400 w-1/2 p-5 flex-row items-center space-x-10">
                    <form className="">
                        <p className="text-4xl">Nombre del ejercicio:</p>
                        <input
                            type="text"
                            placeholder=""
                            className="transition-all duration-200 w-[400px] border-t-0 border-l-0 border-r-0 borber-b-2 border-b-black text-2xl focus:border-b-2 focus:border-0 focus:ring-0"
                        />
                        <p className="text-4xl mt-4">Numero de repeticiones por set:</p>
                        <span className="inline-flex items-center space-x-3 mt-4">
                            <input
                                type="number"
                                placeholder=""
                                className="transition-all duration-200 w-fit max-w-[100px] input input-bordered border-gray-400 text-2xl"
                            />
                        </span>
                        <p className="text-4xl mt-4">Calorías quemadas:</p>
                        <span className="inline-flex items-center space-x-3 mt-4">
                            <input
                                type="number"
                                placeholder=""
                                className="transition-all duration-200 w-fit max-w-[100px] input input-bordered border-gray-400 text-2xl"
                            />
                            <p className="text-2xl">Kcal</p>
                        </span>
                        <span className="w-full inline-flex justify-end mt-10">
                            <button type="submit" className="btn rounded-full">Registrar</button>
                        </span>
                    </form>
                    <figure><img src="/img/sports/nadar.png" alt="" /></figure>
                </div>
            </section>
        </Layout>
    )
};

export default AddSport;
