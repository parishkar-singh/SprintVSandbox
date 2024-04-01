import { motion } from "framer-motion";
import { invoke } from '@tauri-apps/api/tauri';

interface AuthButtonProps {
  text: string;
  sidebar?: boolean;
  ButtonClass?: string;
  href?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ href, text, sidebar, ButtonClass }) => {
  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
  };
  return (
    <motion.button
      onClick={handleClick}
      className={`rounded-3xl ${ButtonClass} bg-blue-500 transition duration-100 hover:bg-yellow-600 h-12 p-2 px-6 font-semibold `}
      whileHover={{ scale: 1.17 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
};

export default AuthButton;
