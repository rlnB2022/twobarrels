import './Header.css';
import Logo from './Logo';
import Menu from './Menu';
import BodyOverlay from './BodyOverlay';
import MobileMenuTrigger from './MobileMenuTrigger';
import background from '../assets/tboverlay4.png';
import ExitMobile from './ExitMobile';

const Header = (props) => {

    console.log(props.componentWidth);

    return (
        <div className='header' style={{ backgroundImage: `url(${background})`}}>
            <Logo />
            <Menu menuOpen={props.menuOpen} activePage={props.activePage} changeMenuOpen={props.changeMenuOpen}/>
            {props.appWidth < 768 ? <MobileMenuTrigger onchange={() => props.changeMenuOpen()} /> : null}

            <ExitMobile menuOpen={props.menuOpen} changeMenuOpen={() => props.changeMenuOpen()}/>
            {props.menuOpen ? <BodyOverlay changeMenuOpen={() => props.changeMenuOpen()}/> : null}
        </div>
    )
}

export default Header;