import { motion } from "framer-motion"
import '@/Styles/Loading.scss';

export default function Loading(props) {
    let _color = '';
    if (props.progress <= 30) _color="hsl(0,89%,48%)";
    if (props.progress > 30 && props.progress < 70) _color="hsl(54,96%,44%)";
    if (props.progress >= 70) _color="hsl(105, 69%, 50%)";
    return(
        <section className="loadingWrap">
            <div className="progressBar">
                <span className="percent">{`${props.progress}%`}</span>
                <svg viewBox="0 0 800 800">
                    <defs>
                        <pattern id="loadingPixel" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="translate(0 0) scale(40) rotate(0)">
                            <rect width="1" height="4" x="0" y="8" fill="hsl(0, 0%, 20%)"></rect>
                            <rect width="18" height="1" x="1" y="7" fill="hsl(0, 0%, 20%)"></rect>
                            <rect width="18" height="1" x="1" y="12" fill="hsl(0, 0%, 20%)"></rect>
                            <rect width="1" height="4" x="19" y="8" fill="hsl(0, 0%, 20%)"></rect>

                            <rect width={props.progress*0.16} height="2" x="2" y="9" fill={_color}></rect>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#loadingPixel)"></rect>
                </svg>
            </div>
        </section>
    )
}