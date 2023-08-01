import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
export default function Error() {
    return (
        <motion.section 
			initial={{ opacity: 0,y : -100}}
            animate={{ opacity: 1,y : 0}}
            transition={{
                duration: 0.8,
                delay: 0.8,
            }} className="errorWrap">
            <h2>👾404👾</h2>
            <Link to="/" className="pBtn">Home</Link>
        </motion.section>
    )
}