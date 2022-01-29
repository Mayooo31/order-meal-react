import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Skvělé jídlo, doručeno až k vám</h2>
      <p>
        Vyberte si své oblíbené jídlo z naší široké nabídky dostupných jídel a
        vychutnejte si lahodný oběd nebo večeři doma.
      </p>
      <p>
        Všechna naše jídla jsou připravována z vysoce kvalitních surovin, včas a
        samozřejmě zkušenými kuchaři !
      </p>
    </section>
  );
};

export default MealsSummary;
