import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

const InfoBlock = () => {

    return (
        <div className={classNames(
            "ml-auto w-full col-start-6 col-span-7",
            "",
            ""
        )}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        translateX: "100%",
                        opacity: 0
                    },
                    visible: {
                        translateX: 0,
                        opacity: 1,
                    }
                }}
                transition={{type: "tween"}}
                className={classNames(
                    "absolute top-0 w-full h-full bg-yellow-600",
                    "",
                    ""
                )}>
            </motion.div>
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1
                    }
                }}
                transition={{delay: 0.25}}
                className="z-50 relative"
            >
                THIS IS THE CONTAINER FOR CONTENT!!!

                Orci phasellus egestas tellus rutrum tellus pellentesque eu. Pellentesque eu tincidunt tortor aliquam nulla. Sollicitudin nibh sit amet commodo. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Enim tortor at auctor urna nunc. Nisi scelerisque eu ultrices vitae. Eget mauris pharetra et ultrices neque. Netus et malesuada fames ac. Pellentesque massa placerat duis ultricies lacus sed turpis. Ipsum a arcu cursus vitae.
            </motion.div>

        </div>

    )
}

export default InfoBlock;