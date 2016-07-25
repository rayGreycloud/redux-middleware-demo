export default function ({ dispatch }) {
  return next => action => {
    // if action has no payload or
    // payload doesn't have .then send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    // Make sure action promise resolves
    action.payload
      .then(function (response) {
        // create new action and replace promise
        // with response data
        const newAction =  {...action, payload: response };
        dispatch(newAction);
      });
  };
}
