import { XIcon } from "@heroicons/react/outline";
const CloseButton = () => {
    return (
        <button type="button" className="w-16 h-16 btn btn-square">
            <XIcon stroke="10" className="stroke-white" />
        </button>
    )
};

export default CloseButton;