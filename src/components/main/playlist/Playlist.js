import PlaylistContextMenu from "./PlaylistContextMenu";
import PlaylistCover from "./PlaylistCover";
import PlaylistPlayButton from "./PlaylistPlayButton";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistDescription from "./PlaylistDescription";

const menuItems = [
    {
        label: "Add to Your Library"
    },
    {
        label: "Share",
        submenuItems: [
            {
                label: "Copy link to playlist"
            },
            {
                label: "Embed playlist"
            }
        ],
    },
    {
        label: "About recommendations"
    },
    {
        label: "Open in Desktop App"
    },
];

function Playlist() {
    return(
        <a href="/" className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group cursor-default">
                            <div className="relative">
                                <PlaylistCover /> 
                                <PlaylistPlayButton />
                            </div>

                            <PlaylistTitle />
                            <PlaylistDescription />

                            <PlaylistContextMenu menuItems={menuItems} classes="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] divide-y divide-[#3e3e3e] text-sm p-1 rounded shadow-xl whitespace-nowrap z-10 hidden group-hover:block"/>
                        </a>
    );
}

export default Playlist;