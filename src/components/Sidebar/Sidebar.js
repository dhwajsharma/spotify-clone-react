import { Home, LibraryMusic, Search } from '@material-ui/icons'
import React from 'react'
import { useDataLayerValue } from '../../DataLayer'
import SidebarOption from '../SidebarOption/SidebarOption'
import "./Sidebar.css"

const Sidebar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();
    console.log(playlists);

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" />
            <SidebarOption Icon={Home} title="Home" />
            <SidebarOption Icon={Search} title="Search" />
            <SidebarOption Icon={LibraryMusic} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}

        </div>
    )
}

export default Sidebar
