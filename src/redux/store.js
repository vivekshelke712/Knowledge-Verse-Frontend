import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authSlice from "./slice/authSlice";
import { resourceApi } from "./api/resourceApi";
// import { ResourceApi } from "./api/resourceApi";
// import { ResourceApi } from "./api/resourceApi";
// import resourceModel from "../../../server/models/resourceModel";
// import { adminApi } from "./api/adminApi";
// import { userApi } from "./api/userApi";

const reduxStore = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [resourceApi.reducerPath]: resourceApi.reducer,
    // [adminApi.reducerPath]: adminApi.reducer,
    // [userApi.reducerPath]: userApi.reducer,
    user: authSlice,
  },
  middleware: (def) => [
    ...def(),
    authApi.middleware,
    resourceApi.middleware,
    // adminApi.middleware,
    // userApi.middleware,
  ],
});

export default reduxStore;
