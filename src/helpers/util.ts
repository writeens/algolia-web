/* eslint-disable import/prefer-default-export */
import { customAlphabet } from 'nanoid';

// REGEX FOR U.S PHONE NUMBER
export const phoneRegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// GENERATE A UNIQUE 6-DIGIT ID
export const generateID = () => customAlphabet('0123456789', 6)();
