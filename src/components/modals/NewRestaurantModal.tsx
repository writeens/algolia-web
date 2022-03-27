/* eslint-disable no-unused-vars */
import { useFormik } from 'formik';
import React, {
  ChangeEvent, FormEvent, useContext, useEffect, useState,
} from 'react';
import Modal from 'react-modal';
import {
  CITIES, PAYMENT_OPTIONS, PRICES, STATES,
} from '../../constants/strings';
import { newRestaurantSchema } from '../../helpers/schema';
import { generateID } from '../../helpers/util';
import { INewRestaurantModalProps, IRestaurantObject } from '../../interfaces';
import SelectField from '../SelectField';
import TextField from '../TextField';

const NewRestaurantModal = ({ modalIsOpen, closeModal }:INewRestaurantModalProps) => {
  const [isAddingRestaurant, setIsAddingRestaurant] = useState(false);
  const [stateOptions, setStateOptions] = useState([{ name: 'Please select a state', value: '' }]);
  const [cityOptions, setCityOptions] = useState([{ name: 'Please select a city', value: '' }]);
  const [spendOptions, setSpendOptions] = useState([{ name: 'How expensive is your restaurant', value: '' }]);
  const {
    resetForm, handleBlur, errors,
    touched, validateForm, handleChange,
    setFieldTouched, setFieldValue,
    values: formValues,
  } = useFormik({
    initialValues: {
      name: '',
      address: '',
      phone: '',
      postalCode: '',
      state: '',
      city: '',
      paymentOptions: [] as string[],
      spend: 0,
      foodType: '',
      reviewCount: 0,
      rangeOptions: '',
      priceRange: 0,
      diningStyle: '',
      url: '',
      starCount: 0,
    },
    validationSchema: newRestaurantSchema,
    onSubmit: () => {},
  });

  const handleSelectCheckbox = (e:ChangeEvent<HTMLInputElement>) => {
    const object = formValues.paymentOptions.reduce((prev:{[key:string]:number}, curr:string) => {
      const val = prev;
      val[curr] = 1;
      return val;
    }, {});
    object[e.target.name] = Number(e.target.value);

    setFieldValue('paymentOptions', Object.keys(object).filter((i) => object[i] === 1), false);
  };

  const handleSubmit = async (restaurantObject:IRestaurantObject) => {
    closeModal();
  };

  const preSubmit = async (e:FormEvent<HTMLFormElement>) => {

  };

  const handleModalClose = () => {
    resetForm();
    closeModal();
  };

  // ON MOUNT SET THE INITIAL STATE OPTIONS
  // ON MOUNT SET THE SPEND OPTIONS
  useEffect(() => {
    setStateOptions([...stateOptions, ...STATES]);

    const options = Object.entries(PRICES).map((entry) => ({
      name: entry[1],
      value: entry[0],
    }));
    setSpendOptions([...spendOptions, ...options]);
  }, []);

  // UPDATE THE CITIES DROPDOWN WHEN STATE CHANGES
  useEffect(() => {
    if (formValues.state) {
      const fullState = STATES.find((state) => state
        .value === formValues.state) as {name:string, value:string};
      const cities = CITIES[fullState.name];
      const options = cities.map((city) => ({ name: city, value: city }));
      setCityOptions([cityOptions[0], ...options]);
      setFieldValue('city', '', true);
    }
  }, [formValues.state]);

  const isInvalidPaymentOption = touched.paymentOptions && Boolean(errors.paymentOptions);
  const isInvalidPriceRange = touched.priceRange && Boolean(errors.priceRange);
  const isInvalidRangeOptions = touched.rangeOptions && Boolean(errors.rangeOptions);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleModalClose}
      className="modal add-modal"
      overlayClassName="modal-overlay add-modal-overlay"
    >
      <header className="add-modal-header">
        <h2 className="add-modal-title">New Restaurant</h2>
      </header>
      <div className="add-modal-body">
        <p className="add-modal-desc">
          Kindly submit the form below and start receiving guests at your restaurant.
        </p>
        <form className="add-modal-container" onSubmit={preSubmit}>
          <TextField
            label="Name"
            id="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            error={touched.name && Boolean(errors.name) ? errors.name : ''}
          />
          <TextField
            label="Address"
            id="address"
            type="text"
            value={formValues.address}
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            error={touched.address && Boolean(errors.address) ? errors.address : ''}
          />
          <TextField
            label="Phone"
            id="phone"
            value={formValues.phone}
            type="tel"
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            error={touched.phone && Boolean(errors.phone) ? errors.phone : ''}
          />
          <TextField
            label="Postal Code"
            id="postalCode"
            type="text"
            value={formValues.postalCode}
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            error={touched.postalCode && Boolean(errors.postalCode) ? errors.postalCode : ''}
          />
          <SelectField
            label="State"
            id="state"
            value={formValues.state}
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            options={stateOptions}
            error={touched.state && Boolean(errors.state) ? errors.state : ''}
          />
          <SelectField
            label="City"
            id="city"
            value={formValues.city}
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            options={cityOptions}
            error={touched.city && Boolean(errors.city) ? errors.city : ''}
          />
          <TextField
            label="Restaurant Image URL"
            id="url"
            type="text"
            value={formValues.url}
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            error={touched.url && Boolean(errors.url) ? errors.url : ''}
          />
          <SelectField
            label="Spend"
            id="spend"
            value={formValues.spend}
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            options={spendOptions}
            error={touched.spend && Boolean(errors.spend) ? errors.spend : ''}
          />
          <TextField
            label="Food Type"
            id="foodType"
            type="text"
            value={formValues.foodType}
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            error={touched.foodType && Boolean(errors.foodType) ? errors.foodType : ''}
          />
          <TextField
            label="Star Count"
            id="starCount"
            type="number"
            value={formValues.starCount}
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            max={5}
            error={touched.starCount && Boolean(errors.starCount) ? errors.starCount : ''}
          />
          <TextField
            label="Review Count"
            id="reviewCount"
            type="number"
            value={formValues.reviewCount}
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            error={touched.reviewCount && Boolean(errors.reviewCount) ? errors.reviewCount : ''}
          />
          <TextField
            label="Dining Style"
            id="diningStyle"
            type="text"
            value={formValues.diningStyle}
            onChange={handleChange}
            onBlur={handleBlur}
            required={false}
            error={touched.diningStyle && Boolean(errors.diningStyle) ? errors.diningStyle : ''}
          />
          <div className="payment-type">
            <span>Payment Options</span>
            <fieldset className={`payment-type-checkbox-container ${isInvalidPaymentOption ? 'invalid-input' : ''}`}>
              {PAYMENT_OPTIONS.map((item) => (
                <label key={item} className="payment-type-label" htmlFor={item}>
                  <span>{item}</span>
                  <input
                    value={formValues.paymentOptions.includes(item) ? 0 : 1}
                    checked={formValues.paymentOptions.includes(item)}
                    id={item}
                    name={item}
                    className="form-checkbox"
                    type="checkbox"
                    onChange={handleSelectCheckbox}
                  />
                </label>
              ))}

            </fieldset>
            {isInvalidPaymentOption
            && <span className="error-message">{errors.paymentOptions}</span>}

          </div>
          <div className="range-section">
            <span>Price Range</span>
            <div className="range-section-body">
              <span className="range-section-dollar">$</span>
              <label htmlFor="priceRange">
                <input
                  id="priceRange"
                  name="priceRange"
                  className={`form-input ${isInvalidPriceRange ? 'invalid-input' : ''}`}
                  aria-label="priceRange"
                  type="number"
                  value={formValues.priceRange}
                  onChange={handleChange}
                  min={0}
                />
              </label>
              <span className="range-section-and">and</span>
              <label htmlFor="rangeOptions">
                <select
                  id="rangeOptions"
                  name="rangeOptions"
                  className={`form-select ${isInvalidRangeOptions ? 'invalid-input' : ''}`}
                  aria-label="rangeOptions"
                  value={formValues.rangeOptions}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="Over">Over</option>
                  <option value="Under">Under</option>
                </select>
              </label>
            </div>
            {(isInvalidPriceRange
              || isInvalidRangeOptions) && (
              <span className="error-message">
                {errors.priceRange
              || errors.rangeOptions}
              </span>
            )}
          </div>
          <div className="add-modal-button-container">
            <button disabled={isAddingRestaurant} type="button" onClick={handleModalClose}>Close</button>
            <button disabled={isAddingRestaurant} type="submit">{isAddingRestaurant ? 'Submitting...' : 'Submit'}</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default NewRestaurantModal;
