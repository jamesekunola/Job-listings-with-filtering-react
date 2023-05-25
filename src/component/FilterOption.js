import cancelBtn from "../Asset/icon-remove.svg";
import "./filteroption.css";
const FilterOption = ({ name, handleClick }) => {
  return (
    <div className="FilterOptions__container">
      <p>{name}</p>
      <button className="filterOptions__btn" onClick={handleClick}>
        <img src={cancelBtn} alt="remove icon" />
      </button>
    </div>
  );
};

export default FilterOption;
