import { NavLink } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



export function AppHeader() {

    return (
        <header className='app-header'>

            <nav>
                <ul className="main-nav">
                    <li><a><NavLink to="/">Home</NavLink></a></li>
                    <li><a><NavLink to="/toy">Toys</NavLink></a></li>
                    <li><a><NavLink to="/dashboard">Dashboard</NavLink></a></li>
                </ul>
            </nav>

            <ul className='header-icons'>
                <li><FavoriteBorderIcon /></li>
                <li><PersonOutlineIcon /></li>
                <li><ShoppingCartOutlinedIcon /></li>
            </ul>
        </header>
    )
}