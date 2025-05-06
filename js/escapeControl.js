const windows = [];
let listener = null;

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    const lastIndex = windows.length - 1;

    if (windows[lastIndex].condition && !windows[lastIndex].condition()) {
      return;
    };
    windows[lastIndex].closeFunction();
    windows.length = windows.length - 1;

    if (!windows.length) {
      document.removeEventListener('keydown', onDocumentKeydown);
      listener = null;
    }
  }
};

export const setEscapeControl = (closeFn, cond = null) => {
  windows.push({
    closeFunction: closeFn,
    condition: cond
  });
  if (!listener) {
    document.addEventListener('keydown', onDocumentKeydown);
    listener = true;
  }
};

export const removeEscapeControl = () => {
  windows.length = windows.length - 1;
  if (!windows.length) {
    document.removeEventListener('keydown', onDocumentKeydown);
    listener = null;
  }
};
