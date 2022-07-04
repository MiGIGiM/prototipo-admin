const Card = ({ title, color }) => (
    <div className="bg-white flex  space-x-4 items-center rounded-2xl w-[600px] px-5">
        <div className={`bg-${color}-300 my-2 rounded-full  w-20 h-16`} />
        <p className="uppercase text-xl text-black">{title}</p>
    </div>
)

export default Card;