import './Header.css';
import logo from './amazon_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./Firebase";

const Header = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <>
            <div className='header'>
                <Link to='/'>
                    <img className='header__logo' alt='Amazon-logo' src={logo} />
                </Link>

                <div className='header__search'>
                    <input type='text' className='header__searchBox' />
                    <span className='header__searchLogo'> <SearchIcon /> </span>
                </div>

                <div className="header__nav">
                    <Link to={!user && '/login'}>
                        <div onClick={handleAuthenticaton} className="header__option">
                            <span className="option__lineOne">Hello {!user ? 'Guest' : user.email}</span>
                            <span className="option__lineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    <div className='header__option'>
                        <span className='option__lineOne'>Returns</span>
                        <span className='option__lineTwo'>& Orders</span>
                    </div>
                    <div className='header__option'>
                        <span className='option__lineOne'>Your</span>
                        <span className='option__lineTwo'>Prime</span>
                    </div>
                    <Link to='/checkout'>
                        <div className='header__optionBasket'>
                            <ShoppingCartIcon />
                            <span className='option__lineTwo basketCount'>{basket?.length}</span>
                        </div>
                    </Link>
                </div>
            </div >
            
            <div className='header__searchMobile'>
                    <input type='text' className='header__searchBoxMobile' />
                    <span className='header__searchLogoMobile'> <SearchIcon /> </span>
                </div>
        </>
    )
}

export default Header;