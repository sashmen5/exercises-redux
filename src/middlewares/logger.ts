// @ts-ignore
function logger({getState}) {
  return function wrapDispatchToAddLogging(next: Function) {
    return function dispatchAndLog(action: any) {
      console.log('dispatching', action);
      let result = next(action);
      console.log('next state', getState());
      return result
    }
  }
}

export default logger;