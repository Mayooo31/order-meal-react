import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvalaibleMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvalaibleMeals />
    </Fragment>
  );
};

export default Meals;
