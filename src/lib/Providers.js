"use client";
import AuthProvider from "@/AuthProvider/AuthProvider";
import { store } from "@/redux/store";
import { Provider } from "react-redux";


const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <AuthProvider>
                {children}
            </AuthProvider>
        </Provider>

    );
};

export default Providers;