import Layout from "../../components/layout/layout";
import MenuCard from "../../components/card/menucard";

const Home = () => {
    return (
        <Layout buttons={[{ name: 'Log out', route: '/' }]}>
            <section className="w-full flex justify-between mt-28">
                <div className="grid grid-cols-2 grid-rows-2 gap-12">
                    <MenuCard icon="/img/users.png" title="Administrar usuarios" to="/users" />
                    <MenuCard icon="/img/admin.png" title="Perfil de administrador" to="/admin-profile" />
                    <MenuCard
                        className="col-span-2"
                        icon="/img/entity.png"
                        title="Administrar entidades "
                        to="/entities"
                        isLarge
                    />
                </div>
                <figure><img src="/img/home.png" alt="Home" /></figure>
            </section>
        </Layout>
    )
};

export default Home;