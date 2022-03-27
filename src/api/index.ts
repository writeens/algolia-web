/* eslint-disable no-unused-vars */
import { IRestaurantObject } from '../interfaces';

// DELETE AN OBJECT FROM THE INDEX
export const deleteObject = async (objectId:string) => {
  const ENDPOINT = '/.netlify/functions/deleteObject';
  try {
    const raw = await fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({ objectId }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (raw.status !== 200) {
      return false;
    }

    const response = await raw.json();
    return true;
  } catch (error) {
    return false;
  }
};

// ADD AN OBJECT TO THE INDEX
export const addObject = async (object:IRestaurantObject) => {
  const ENDPOINT = '/.netlify/functions/addObject';

  try {
    const raw = await fetch(ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(object),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (raw.status !== 200) {
      return false;
    }

    const response = await raw.json();
    return true;
  } catch (error) {
    return false;
  }
};
