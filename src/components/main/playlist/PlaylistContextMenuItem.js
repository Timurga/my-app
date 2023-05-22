import PlaylistContextMenu from "./PlaylistContextMenu";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function PlaylistContextMenuItem({children: label, submenuItems}) {
    if(submenuItems) {
        return(
            <li className="relative">
                <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                    {label} 
                    <ChevronRightIcon className="h-4 w-4"/>
                </button>
                <PlaylistContextMenu menuItems={submenuItems} classes="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl"/>
            </li>
        );
    }

    return(
        <li>
            <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">{label}</button>
        </li>
    );
}

export default PlaylistContextMenuItem;