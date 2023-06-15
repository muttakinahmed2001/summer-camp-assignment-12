import { motion } from "framer-motion";

const Animation = ({ language }) => {
    const variants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    };

    const hoverVariants = {
        scale: 1.1,
        transition: { duration: 0.3 },
    };

    let content = "";

    switch (language) {
        case "english":
            content = "Welcome to our language school summer camp!";
            break;
        case "arabic":
            content = "أهلاً بك في مدرستنا الصيفية لتعلم اللغات!";
            break;
        case "mandarin":
            content = "欢迎来到我们的语言学校夏令营！";
            break;
        case "italian":
            content = "Benvenuti al nostro campo estivo di lingue!";
            break;
        case "japanese":
            content = "私たちの言語学校サマーキャンプへようこそ！";
            break;
        case "german":
            content = "Willkommen in unserem Sprachschul-Sommercamp!";
            break;
        default:
            content = "Welcome!";
    }

    return (
        <motion.div className="mx-auto"
            key={language}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
            whileHover={hoverVariants}
            whileTap={{ scale: 0.9 }}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "20vh",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",

            }}
        >
            {content}
        </motion.div>
    );
};

export default Animation;
