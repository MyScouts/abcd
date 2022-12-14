import { title } from 'process';
import React, { createContext, useEffect, useReducer } from 'react';

export const AlertType = {
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
    INFO: "INFO",
    IDE: "IDE"
}

const initialState = {
    message: "",
    type: AlertType.IDE
};

function alertReducer(state, action) {
    switch (action.type) {
        case AlertType.ERROR: {
            return {
                ...state,
                message: action.payload.message,
                type: AlertType.ERROR
            }
        }
        case AlertType.SUCCESS: {
            return {
                ...state,
                message: action.payload.message,
                type: AlertType.SUCCESS
            }
        }
        case AlertType.INFO: {
            return {
                ...state,
                message: action.payload.message,
                type: AlertType.INFO
            }
        }
        case AlertType.IDE: {
            return {
                ...state,
                type: AlertType.IDE
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

const AlertContext = createContext(initialState);

function AlertProvider({ children }) {
    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (type, message) => {
        dispatch({
            type: type,
            payload: {
                message: message,
                type: type
            },
        });
    };

    const value = { message: state.message, title: state.title, type: state.type, setAlert: setAlert }
    return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
}


export { AlertProvider, AlertContext }