import { useMemo } from "react";
import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

interface State {
  [key: string]: number;
}

interface Action {
  id: string;
  type: string;
}

let store: Store<State, Action> | undefined;

const initialState: State = {};

const reducer = (state: State = initialState, action: Action) => {
  const itemID: string = action.id;

  switch (action.type) {
    case "INCREMENT":
      const newItemAmount = itemID in state ? state[itemID] + 1 : 1;
      return {
        ...state,
        [itemID]: newItemAmount,
      };
    case "DECREMENT":
      if (state?.[itemID] > 0) {
        return {
          ...state,
          [itemID]: state[itemID] - 1,
        };
      }
      return state;
    default:
      return state;
  }
};

function initStore(preloadedState: State = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState?: State) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: State) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
