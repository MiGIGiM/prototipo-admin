import SearchForm from "./inputs/SearchForm";
import { useNavigate } from "react-router-dom";

const EntityTable = ({ tableName, placeholder, to, children }) => {
    const navigate = useNavigate();
    return(
        <div className="card card-bordered border-gray-300 py-5 px-10 h-full">
            <span className="inline-flex justify-between items-center mb-16">
                <p className="text-6xl text-black">{tableName}</p>
                <button onClick={() => navigate(to)} className="btn">Agregar</button>
            </span>
            <SearchForm placeholder={placeholder} />
            <div className="mt-4 space-y-4">
                { children }
            </div>
        </div>
    )
};

export default EntityTable;
