import { _lenis } from "@/Script/Scroll";
import "@/Styles/Nav.scss";

type AnchorTarget = "#opening" | "#introduce" | "#shorts" | "#contact";

export default function Nav() {
  const click = (anchor: AnchorTarget) => {
    let height = 0;

    if (anchor === "#opening") height = 0;

    if (anchor === "#introduce") {
      height = (document.querySelector(anchor) as HTMLElement | null)?.offsetTop ?? 0;
      height += 300;
    }

    if (anchor === "#shorts") {
      height = (document.querySelector(anchor) as HTMLElement | null)?.offsetTop ?? 0;
      height += 2000;
    }

    if (anchor === "#contact") {
      height = (document.querySelector(anchor) as HTMLElement | null)?.offsetTop ?? 0;
      height += 2000;
    }

    _lenis?.scrollTo(height);
  };

  return (
    <nav className="navList">
      <ul>
        <li>
          <button className="pBtn" onClick={() => click("#opening")}>
            Hello
          </button>
        </li>
        <li>
          <button className="pBtn" onClick={() => click("#introduce")}>
            Introduce
          </button>
        </li>
        <li>
          <button className="pBtn" onClick={() => click("#shorts")}>
            Work
          </button>
        </li>
        <li>
          <button className="pBtn" onClick={() => click("#contact")}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
