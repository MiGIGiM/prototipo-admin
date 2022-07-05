import { useNavigate } from 'react-router-dom';

const MenuCard = ({ className, title, icon, isLarge, to }) => {
    const navigate = useNavigate();
    return(
        <button onClick={() => navigate(to)} className={`${className} border border-black rounded-2xl px-3 py-4`}>
            <p className={`text-4xl ${isLarge ? 'text-center' : '' }`}>{title}</p>
            <figure><img src={icon} alt={title} className="mx-auto mt-6" /></figure>
        </button>
    )
};

export default MenuCard
