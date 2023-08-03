import { motion } from "framer-motion"
import ScrollBar from '@/Components/ScrollBar';

export default function PageUtil() {
    return (
        <>
            <motion.div
                initial={{ height: '100%'}}
                animate={{ height: 0}}
                transition={{
                    duration: 0.8,
                    delay: 1,
                }} className="maskWrap" />
            <ScrollBar />
        </>
    )
}