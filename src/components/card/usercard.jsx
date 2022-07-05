import { useNavigate } from "react-router-dom";

const UserCard = ({ username }) => {
    const navigate = useNavigate();
    return (
    <div className="card card-side card-bordered border-gray-500 items-center pr-6">
        <figure>
            <img src="/img/userEmpty.png" alt="user" className="w-36 h-36" />
        </figure>
        <div className="card card-bordered border-gray-600 flex-row justify-between items-center w-full h-fit p-6">
            <p className="card-title">{username}</p>
            <button onClick={() => navigate('/user-profile')} className="btn w-fit rounded-full">Gestionar</button>
        </div>
    </div>
)
}

export default UserCard;