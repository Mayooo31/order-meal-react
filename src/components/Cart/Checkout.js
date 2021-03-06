import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = value => value.trim() === "";
const isFiveChars = value => value.trim().length === 5;

const Checkout = props => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = event => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Cel?? jm??no</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Zadejte pros??m platn?? jm??no!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Ulice</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Zadejte pros??m platnou ulici!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Po??tovn?? sm??rovac?? ????slo</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Zadejte pros??m platn?? PS?? ( 5 znak?? )!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">M??sto</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Zadejte pros??m platn?? m??sto!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          zru??it
        </button>
        <button className={classes.submit}>Potvrdit</button>
      </div>
    </form>
  );
};

export default Checkout;
