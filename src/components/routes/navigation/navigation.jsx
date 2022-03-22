import react from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import './navigation.scss';

const Navigation = () => {
    return(
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo/>
            </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/shop'>
                ABOUT US
            </Link>
            <Link className='nav-link' to='/sign-in'>
                SIGN IN 
            </Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    );
};

export default Navigation;