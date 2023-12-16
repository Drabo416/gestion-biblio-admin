function objectIsEmpty(object:Object) {
    for (const property in object) {
      return false;
    }
    return true;
  }

export { objectIsEmpty }