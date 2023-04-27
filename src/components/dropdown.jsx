import styles from "@/styles/Searchbar.module.scss";
import { useEffect, useRef } from "react";


export default function Dropdown({trigger, options, open, handleClose, handleOption}) {
    const handleOutsideClick = () => handleClose()

    const useOutsideClick = (callback) => {
        const ref = useRef()

        useEffect(() => {
            const handleClick = (e) => {
                if (ref.current && !ref.current.contains(e.target)) callback()
            }

            document.addEventListener('click', handleClick)

            return () => document.removeEventListener('click', handleClick)
        }, [ref])

        return ref
    }

    const ref = useOutsideClick(handleOutsideClick)
    
    return (
        <div ref={ref} className={styles.filter}>
        {trigger}
        {open ? (
          <ul>
            {options.map((option) => (
              <li key={option}>
                <button onClick={(e) => {
                  handleOption(e);
                  handleClose();
                }}>{option}</button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    )
}