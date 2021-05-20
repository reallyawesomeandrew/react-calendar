import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";
import axios from "axios";

const initialState = {
    events: [],
    loading: true,
    error: false
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    async function getEvents(){
        try {
            const res = await axios.get("/api/v1/events")
            dispatch({
                type: "GET_EVENTS",
                payload: res.data.data
            })
        } catch (err) {
            console.error(err)
            dispatch({
                type: "EVENT_ERROR",
                payload: err.response.data.error
            })
        }
    }
    async function deleteEvent(id){
        try {
            await axios.delete(`/api/v1/events/${id}`)
        } catch (err) {
            console.error(err);
            dispatch({
                type: "EVENT_ERROR",
                payload: err.response.data.error
            })
        }
        dispatch({
            type: "DELETE_EVENT",
            payload: id
        })
    }
    async function addEvent(Event){
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const res = await axios.post("/api/v1/events", Event, config)
            dispatch({
                type: "ADD_EVENT",
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: "EVENT_ERROR",
                payload: err.response.data.error
            })
        }



    }
    async function editEvent(Event, id){
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const res = await axios.put(`/api/v1/events/${id}`, Event, config);
            dispatch({
                type: "EDIT_EVENT",
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: "EVENT_ERROR",
                payload: err.response.data.error
            })
        }



    }
    return (<GlobalContext.Provider value={{
        loading: state.loading,
        events: state.events,
        error: state.error,
        getEvents,
        deleteEvent,
        addEvent,
        editEvent,
    }}>
        {children}
    </GlobalContext.Provider>)
}