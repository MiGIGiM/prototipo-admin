import Layout from "../../components/layout/layout";
import SportCard from "../../components/card/sportcard";
import FoodCard from "../../components/card/foodcard";
import EntityTable from "../../components/entitytable";

const buttons = [
    {
        name: 'Inicio',
        route: '/home',
    },
    {
        name: 'Log out',
        route: '/',
    }
];

const sports = [
    {
        name: 'Yoga',
        img: '/img/sports/yoga.png',
    },
    {
        name: 'Pesas',
        img: '/img/sports/pesas.png',
    },
    {
        name: 'Caminar',
        img: '/img/sports/caminar.png',
    },
    {
        name: 'Cinta de correr',
        img: '/img/sports/correr.png',
    },
];

const foods = [
    {
        name: 'Frijoles refritos',
        kcal: 475,
    },
    {
        name: 'Pollo a la plancha',
        kcal: 284,
    },
    {
        name: 'Mandarina',
        kcal: 42,
    },
    {
        name: 'Chocolate',
        kcal: 248,
    },
];

const EntitiesPage = () => {
    return (
        <Layout buttons={buttons}>
            <section className="grid grid-cols-2 gap-10 mt-5">
                    <EntityTable tableName="Ejercicios" placeholder="Ejercicio" to="/add-sport">
                        {
                            sports.map((sport) => (
                                <SportCard key={sport.name} sportName={sport.name} sportImg={sport.img} />
                            ))
                        }
                    </EntityTable>
                    <EntityTable tableName="Comidas" placeholder="Comida" to="/add-food" >
                        {
                            foods.map((food) => (
                                <FoodCard key={food.name} foodName={food.name} foodKcal={food.kcal} />
                            ))
                        }
                    </EntityTable>
            </section>
        </Layout>
    )
}

export default EntitiesPage;
