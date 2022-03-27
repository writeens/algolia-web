/* eslint-disable import/prefer-default-export */
import { Handler, HandlerEvent } from '@netlify/functions';
import algoliasearch from 'algoliasearch';
import { IRestaurantObject } from '../src/interfaces';

const {
  REACT_APP_ALGOLIA_INDEX_NAME,
  REACT_APP_ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY,
} = process.env;

const handler:Handler = async (event:HandlerEvent) => {
  const client = algoliasearch(REACT_APP_ALGOLIA_APP_ID || '', ALGOLIA_ADMIN_API_KEY || '');
  const index = client.initIndex(REACT_APP_ALGOLIA_INDEX_NAME || '');

  const data:IRestaurantObject = JSON.parse(event.body || '');

  try {
    const res = await index.saveObject(data);

    // WAIT FOR SAVE OBJECT TASK TO COMPLETE
    await index.waitTask(res.taskID);
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 'ok',
        message: 'success',
        data: { taskID: res.taskID, objectID: res.objectID },
      }),
    };
  } catch (error) {
    return {
      body: JSON.stringify({
        status: 'fail',
        message: 'Server error',
      }),
      statusCode: 500,
    };
  }
};

export { handler };
