import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton onCartModalOpen={props.onModalOpen} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
