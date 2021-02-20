import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import settingsReducer from "./settings/settings.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["settings"],
};

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default persistReducer(persistConfig, rootReducer);
