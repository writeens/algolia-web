/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const newRestaurantSchema = Yup.object({
  name: Yup.string().required('Please provide a name for your restaurant'),
  address: Yup.string().required('Please provide an address for your restaurant'),
  phone: Yup.string().required('Please provide a phone number for your restaurant').matches(phoneRegExp, 'Please enter a valid phone number'),
  postalCode: Yup.string().required('Please provide a postal code for your restaurant'),
  city: Yup.string().required('Please provide a city where your restaurant is based'),
  paymentOptions: Yup.array().min(1, 'Please select a payment option'),
  spend: Yup.number().required('Please select a spending category').min(1, 'Please select a spending category'),
  foodType: Yup.string().required('Please provide a cusine type.'),
  reviewCount: Yup.number().required('Please provide a review count').min(1, 'Please set a review count greater than 0'),
  rangeOptions: Yup.string().required('Please select a valid option'),
  priceRange: Yup.number().required('Please provide a valid price').min(1, 'Please set a price greater than 0'),
  diningStyle: Yup.string().required('Please provide a valid dining style'),
  url: Yup.string(),
  state: Yup.string().required('Please select the state where your restaurant is based'),
  starCount: Yup.number().required('Please provide an estimate of the number of stars your restaurant has received').min(1, 'Please set a star count greater than 0'),
});
