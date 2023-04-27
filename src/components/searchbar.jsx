import React, { useState } from "react";
import styles from "@/styles/Searchbar.module.scss";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineSearch } from 'react-icons/ai'
import Dropdown from "./dropdown";

export default function Query({options, option, handleOption, search, handleSearch}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className={styles.container}>
      <form action="" noValidate className={styles.search}>
        <label htmlFor="search">
          <div>
          <AiOutlineSearch />
          </div>
          <input
            id="search"
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={handleSearch}
          />
        </label>
      </form>
      <Dropdown
        trigger={
          <button className={styles.filterbtn} onClick={handleOpen}>
            Filter by Region: {option}
            <FiChevronDown />
          </button>
        }
        options={options}
        open={open}
        handleClose={handleClose}
        handleOption={handleOption}
      />
    </section>
  );
}
