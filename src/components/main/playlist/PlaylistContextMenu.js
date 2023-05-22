import PlaylistContextMenuItem from "./PlaylistContextMenuItem";

function PlaylistContextMenu( {classes, menuItems} ) {
    return(
        <ul className={classes}>
            {menuItems.map(({label, submenuItems}) => (
                <PlaylistContextMenuItem key={label} submenuItems={submenuItems}>
                    {label}
                </PlaylistContextMenuItem>
            ))}
            
        </ul>
    );
}

export default PlaylistContextMenu;