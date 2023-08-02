import {_lenis} from '@/Script/Scroll.js';
import '@/Styles/Nav.scss';

export default function Nav() {
    
    const click = (anchor) => {
        _lenis.scrollTo(anchor);
    }
    return (
        <nav className="navList">
            <ul>
                <li>
                    <button className="pBtn" onClick={() => {click('#opening')}}>Hello</button>
                </li>
                <li>
                    <button className="pBtn" onClick={() => {click('#introduce')}}>Introduce</button>
                </li>
                <li>
                    <button className="pBtn" onClick={() => {click('#shorts')}}>Work</button>
                </li>
                <li>
                    <button className="pBtn" onClick={() => {click('#contact')}}>Contact</button>
                </li>
            </ul>
        </nav>
    )
}