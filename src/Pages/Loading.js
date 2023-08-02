import { motion } from "framer-motion"
import '@/Styles/Loading.scss';

export default function Loading(props) {
    return(
        <section className="loadingWrap">
            <span className="percent">{`${props.progress}%`}</span>

            {/* <span className="txt">-START-</span> */}
        </section>
    )
}