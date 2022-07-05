import Layout from "../../components/layout/layout";
import SearchForm from '../../components/inputs/SearchForm'
import UserCard from '../../components/card/usercard';

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

const UserPage = () => {
    return (
        <Layout buttons={buttons}>
            <section className="grid grid-cols-2 gap-10 ">
                <div >
                    <span className="w-full inline-flex justify-end">
                        <button className="btn rounded-full">Agregar</button>
                    </span>
                    <div className="card card-bordered border-gray-600 overflow-y-auto mt-3 p-3">
                        <SearchForm  />
                        <div className="space-y-4 mt-4">
                            <UserCard username="Natalan Hernandez " />
                            <UserCard username="Alan Martinez " />
                            <UserCard username="Maria Herrera" />
                            <UserCard username="Natalia Flores" />
                        </div>
                    </div>
                </div>
                <figure className="self-center">
                    <img src="/img/userPage.png" alt="userPage" />
                </figure>
            </section>
        </Layout>
    )
};

export default UserPage;
