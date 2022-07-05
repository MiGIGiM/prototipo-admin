import CloseButton from "../buttons/closebutton";

const SportCard = ({ sportName, sportImg }) => {
    return (
        <div className="items-center p-5 rounded-xl border border-gray-400 flex justify-between w-full">
            <span className="inline-flex space-x-10">
                <figure className="w-20 h-20">
                    <img src={sportImg} alt={sportName} />
                </figure>
                <p className="text-black text-4xl card-title font-normal">{sportName}</p>
            </span>
            <CloseButton />
        </div>
    )
};

export default SportCard;
