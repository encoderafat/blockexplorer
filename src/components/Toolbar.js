import React,{useState} from 'react';
import {Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Toolbar = () => {
    const [activeItem,setActiveItem] = useState('HOME');

    const menuClick = (e) => {
        //console.log(e);
    }
    return (
        <Menu pointing secondary>
            <Menu.Item header as={Link}
            name='BLOCK EXPLORER'
            active={activeItem === 'BLOCK EXPLORER'}
            onClick={menuClick}
            to='/'
            />
            <Menu.Item as={Link}
            name='SEARCH'
            active={activeItem === 'SEARCH'}
            onClick={menuClick}
            to='search'
            />
        </Menu>
    )
}

export default Toolbar;