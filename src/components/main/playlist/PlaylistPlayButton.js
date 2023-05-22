import { ChevronRightIcon } from "@heroicons/react/24/outline";

function PlaylistPlayButton() {
    return(
        <button className="h-10 w-10 rounded-full bg-[#1cb955] shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
            <ChevronRightIcon className="h-5 w-5" />
        </button>
    );
}

export default PlaylistPlayButton;