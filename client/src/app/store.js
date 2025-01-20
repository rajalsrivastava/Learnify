import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "@/features/apis/authApi";
import { courseApi } from "@/features/apis/courseApi";
import { purchaseApi } from "@/features/apis/purchaseApi";
export const appStore = configureStore({
    reducer: rootReducer,
    middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware, courseApi.middleware,purchaseApi.middleware)
});

const initializeApp = async () => {
await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}));
}
initializeApp();
