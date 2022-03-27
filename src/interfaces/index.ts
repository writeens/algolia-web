/* eslint-disable no-unused-vars */
import { ChangeEventHandler, FocusEventHandler } from 'react';

export interface IRestaurantObject {
    objectID:string,
    name:string,
    address:string,
    area:string,
    city:string,
    country:string,
    image_url:string,
    mobile_reserve_url:string,
    payment_options:string[],
    phone:string,
    postal_code:string,
    price:number,
    reserve_url:string,
    state:string,
    _geoloc:{
      latitude:'37.090240',
      longitude:'-122.39657'
    }
    food_type:string
    stars_count:number,
    reviews_count:number,
    neighborhood:string,
    phone_number:string,
    price_range:string,
    dining_style:string,
    rounded_stars_count:number
  }

export interface IDeleteModalProps {
    name:string,
    objectId:string,
    modalIsOpen: boolean
    closeModal:Function
}

export interface INewRestaurantModalProps {
  modalIsOpen:boolean,
  closeModal:Function,
}

export interface ISelectFieldProps {
  selectClassName?:string,
  labelClassName?:string,
  containerClassName?:string,
  id:string,
  label:string,
  required:boolean,
  value: string | number
  onChange:ChangeEventHandler<HTMLSelectElement>,
  onBlur:FocusEventHandler<HTMLSelectElement>,
  error:string | undefined
  options:Array<{name:string, value:string | number}>
}

export interface ITextFieldProps {
  inputClassName?:string,
  labelClassName?:string,
  containerClassName?:string,
  id:string,
  label:string,
  type:string,
  value: string | number,
  required:boolean,
  min?:number,
  max?:number
  onChange:ChangeEventHandler<HTMLInputElement>,
  onBlur:FocusEventHandler<HTMLInputElement>,
  error:string | undefined
}

export interface IToastContentProps {
  title: string;
  message: string;
  type:'success' | 'error'
}

export interface ISearchContextInterface{
  refresh:boolean
  updateRefresh: (val:boolean) => void
}
