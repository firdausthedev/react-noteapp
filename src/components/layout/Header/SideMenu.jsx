import UserIcon from "../../assets/user-icon.png";
import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NotesContext from "../../context/NoteContext";

const SideMenu = () => {
  const { theme, dispatch } = useContext(NotesContext);
  const [isSideModalOpen, setIsSideModalOpen] = useState(false);

  const handleDarkMode = e => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      dispatch({ type: "SET_DARK_THEME" });
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      dispatch({ type: "SET_LIGHT_THEME" });
    }
  };

  return (
    <div id="header-menu">
      <div className="menu-wrap shadow">
        <input
          type="checkbox"
          className="toggler"
          onChange={() => {
            setIsSideModalOpen(!isSideModalOpen);
          }}
          checked={isSideModalOpen ? true : false}
        />
        <div className="hamburger">
          <div></div>
        </div>
        <AnimatePresence>
          {isSideModalOpen && (
            <motion.div
              className="menu"
              key="side-menu"
              initial={{ left: "-100vw" }}
              animate={{ left: 0 }}
              exit={{ left: "-100vw" }}
              transition={{ duration: 0.2 }}>
              <button
                className="close-btn"
                onClick={() => {
                  setIsSideModalOpen(false);
                }}>
                &times;
              </button>
              <div className="menu-item">
                <p>Dark Mode</p>
                <div className="dark-mode">
                  <label className="theme-switch" htmlFor="checkbox">
                    <input
                      type="checkbox"
                      id="checkbox"
                      onChange={handleDarkMode}
                      checked={theme == "dark" ? true : false}
                    />
                    <div className="slider round"></div>
                  </label>
                </div>
              </div>
              <div className="menu-item bottom">
                <img src={UserIcon} alt="dev icon" />
                <div className="dev-info">
                  <h2>firdausthedev</h2>
                  <a
                    href="https://github.com/firdausthedev"
                    rel="noopener noreferrer"
                    target="_blank">
                    https://github.com/firdausthedev
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SideMenu;
