import {_lenis} from '@/Script/Scroll.js';
import '@/Styles/Nav.scss';

export default function Nav() {
    
    const click = (anchor) => {
        let h;
        if (anchor === '#opening') h = 0;
        if (anchor === '#introduce') h = document.querySelector(anchor).offsetTop + 300;
        if (anchor === '#shorts') h = document.querySelector(anchor).offsetTop + 2000;
        if (anchor === '#contact') h = document.querySelector(anchor).offsetTop + 2000;
        _lenis.scrollTo(h);
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