/* eslint-disable import/prefer-default-export */
import { customAlphabet } from 'nanoid';

// GENERATE A UNIQUE 6-DIGIT ID
export const generateID = () => customAlphabet('0123456789', 6)();
