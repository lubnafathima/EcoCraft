import { useState } from "react";
import styles from "./Filter.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { filter_data } from "../../utils/filter";

const Filter = () => {
  const [openSections, setOpenSections] = useState({
    Category: true,
    Gender: true,
    Price: true,
    Rating: true,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    Category: [],
    Gender: [],
    Price: "",
    Rating: 0,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      Category: [],
      Gender: [],
      Price: "",
      Rating: 0,
    });
  };

  const handleCheckboxChange = (filterType, value) => {
    setSelectedFilters((prevState) => {
      const currentValues = prevState[filterType];
      if (currentValues.includes(value)) {
        return {
          ...prevState,
          [filterType]: currentValues.filter((v) => v !== value),
        };
      } else {
        return {
          ...prevState,
          [filterType]: [...currentValues, value],
        };
      }
    });
  };

  const handleRadioChange = (filterType, value) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterType]: value,
    }));
  };

  const handleStarClick = (rating) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      Rating: prevState.Rating === rating ? 0 : rating,
    }));
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filter_header}>
        <h4 className={styles.title}>
          <FaFilter className={styles.filter_icon} /> Filter
        </h4>
        <button className={styles.clear} onClick={handleClearFilters}>
          Clear all
        </button>
      </div>

      <div className={styles.filter_section}>
        <div
          className={styles.filter_section_header}
          onClick={() => toggleSection("Category")}
        >
          <h6 className={styles.filter_title}>Category</h6>
          {openSections.Category ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openSections.Category && (
          <div className={styles.filter_options}>
            {filter_data.Category.map((option, index) => (
              <div key={index} className={styles.filter_option}>
                <input
                  type="checkbox"
                  id={option}
                  name={option}
                  value={option}
                  checked={selectedFilters.Category.includes(option)}
                  onChange={() => handleCheckboxChange("Category", option)}
                  className={styles.filter_checkbox}
                />
                <label htmlFor={option} className={styles.filter_label}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filter_section}>
        <div
          className={styles.filter_section_header}
          onClick={() => toggleSection("Gender")}
        >
          <h6 className={styles.filter_title}>Gender</h6>
          {openSections.Gender ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openSections.Gender && (
          <div className={styles.filter_options}>
            {filter_data.Gender.map((option, index) => (
              <div key={index} className={styles.filter_option}>
                <input
                  type="checkbox"
                  id={option}
                  name={option}
                  value={option}
                  checked={selectedFilters.Gender.includes(option)}
                  onChange={() => handleCheckboxChange("Gender", option)}
                  className={styles.filter_checkbox}
                />
                <label htmlFor={option} className={styles.filter_label}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filter_section}>
        <div
          className={styles.filter_section_header}
          onClick={() => toggleSection("Price")}
        >
          <h6 className={styles.filter_title}>Price</h6>
          {openSections.Price ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openSections.Price && (
          <div className={styles.filter_options}>
            {filter_data.Price.map((option, index) => (
              <div key={index} className={styles.filter_option}>
                <input
                  type="radio"
                  id={option}
                  name="price"
                  value={option}
                  checked={selectedFilters.Price === option}
                  onChange={() => handleRadioChange("Price", option)}
                  className={styles.filter_checkbox}
                />
                <label htmlFor={option} className={styles.filter_label}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filter_section}>
        <div
          className={styles.filter_section_header}
          onClick={() => toggleSection("Rating")}
        >
          <h6 className={styles.filter_title}>Rating</h6>
          {openSections.Rating ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {openSections.Rating && (
          <div className={styles.filter_stars_options}>
            {[1, 2, 3, 4, 5].map((rating) => (
              <div
                key={rating}
                className={styles.filter_star}
                onClick={() => handleStarClick(rating)}
              >
                {rating <= selectedFilters.Rating ? (
                  <FaStar className={styles.star_icon} />
                ) : (
                  <FaRegStar className={styles.star_icon} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
