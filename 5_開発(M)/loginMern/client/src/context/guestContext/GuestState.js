import React, {useReducer} from 'react';
import GuestContext from './guestContext'
import guestReducer from './guestReducer'
import {
    TOGGLE_FILTER,
    SEARCH_GUEST,
    CLEAR_SEARCH,
    ADD_GUEST,
    REMOVE_GUEST,
    UPDATE_GUEST,
    EDIT_GUEST,
    CLEAR_EDIT
} from '../types'

const GuestState = (props) => {
    const initialState = {
        filterGuest: false,
        search:null,
        editAble:null,
        guests:[
            {
                id:1,
                name: "Trieu Duc Duy",
                phone: "626 526 468",
                dietary:'Vegan',
                isconfirmed:false

            },
            {
                id:2,
                name: "Tran Le Anh",
                phone: "856 526 468",
                dietary:'Non-Veg',
                isconfirmed:true

            },
            {
                id:3,
                name: "Bui Phuong Linh",
                phone: "626 526 548",
                dietary:'Pescatarian',
                isconfirmed:false

            }
        ]
    }
    const [state, dispatch] = useReducer(guestReducer, initialState)
    
    const addGuest = (guest) =>{
        guest.id = Date.now()
        guest.isconfirmed=false
        dispatch({
            type:ADD_GUEST,
            payload:guest
        })
    }

    const removeGuest = (id) =>{
        dispatch({
            type: REMOVE_GUEST,
            payload: id
        })
    }

    const updateGuest = (guest) =>{
        dispatch({
            type: UPDATE_GUEST,
            payload: guest
        })
    }
    const editGuest = (guest) =>{
        dispatch({
            type: EDIT_GUEST,
            payload:guest
        })
    }
    const clearEdit = () =>{
        dispatch({
            type: CLEAR_EDIT
        })
    }
    const toggleFilter = () =>{
        dispatch({
            type: TOGGLE_FILTER
        })
    }

    const searchGuest = (guest) =>{
        dispatch({
            type: SEARCH_GUEST,
            payload: guest
        })
    }

    const clearSearch = () =>{
        dispatch ({
            type: CLEAR_SEARCH
        })
    }

    return (
            <GuestContext.Provider
                value={{
                    guests:state.guests,
                    filterGuest:state.filterGuest,
                    search:state.search,
                    editAble:state.editAble,
                    addGuest,
                    updateGuest,
                    removeGuest,
                    clearEdit,
                    editGuest,
                    toggleFilter, 
                    searchGuest,
                    clearSearch
                }}
            >{props.children}</GuestContext.Provider>
    );
}

export default GuestState;
//Nơi chứa tập thông tin của các khách mời
