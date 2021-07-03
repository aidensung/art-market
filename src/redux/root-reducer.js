import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// Using indexedDB (not local storage) for Redux Persist
import localForage from "localforage";

import sampleReducer from "./sample/sample.slice";

const rootPersistConfig = {
  key: "root",
  storage: localForage,
};

// Configuration for Nested Persist
// const samplePersistConfig = {
//   key: "sample",
//   storage: localForage,
//   blacklist: ["blacklist_name"],
// };

const rootReducer = combineReducers({
  // reducer_name: individualReducer (ex: boardReducer, reviewReducer, etc...)
  sample3: sampleReducer,
  // sample: persistReducer(samplePersistConfig, sampleReducer), // for nested persist config
});

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedRootReducer;
