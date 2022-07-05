import CloseButton from "../buttons/closebutton";

const FoodCard = ({ foodName, foodKcal }) => {
    return (
        <div className="items-center p-5 rounded-xl border border-gray-400 flex justify-between w-full">
            <p className="text-black text-4xl font-normal w-[290px]">{foodName}</p>
            <p className="text-black text-4xl font-normal">{`${foodKcal} kcal`}</p>
            <CloseButton />
        </div>
    )
};

export default FoodCard;
