export const throttle = (func: () => any, delay = 250) => {
  let timeout: number | undefined;

  return function (this: any) {
    const context: any = this;
    const args = arguments;

    if (!timeout) {
      const later = () => {
        func.apply(context, [args]);
        clearTimeout(timeout);
      };
      timeout = window.setTimeout(later, delay);
    }
  };
};

export const debounce = (next: () => any, delay = 250) => {
  let timeout: number | undefined;

  return function (this: any) {
    const context: any = this;
    const args = arguments;

    const later = () => next.apply(context, [args]);
    clearTimeout(timeout);
    timeout = window.setTimeout(later, delay);
  };
};
