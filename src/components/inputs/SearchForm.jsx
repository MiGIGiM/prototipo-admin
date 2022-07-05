import { SearchIcon } from "@heroicons/react/outline"

const SearchForm = ({ placeholder }) => {
    return (
        <form className="flex items-center space-x-3">
            <span className="inline-flex items-center w-full border border-black">
                <SearchIcon className="w-6 h-6 m-2" />
                <input type="text" placeholder={placeholder}  className="input input-ghost input-md w-full focus:border-none" />
            </span>
            <button className="btn btn-sm rounded-full">Buscar</button>
        </form>
    )
};

export default SearchForm;