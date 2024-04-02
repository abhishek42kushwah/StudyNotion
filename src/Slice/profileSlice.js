import {createSlice} from "@reduxjs/toolkit"

const initialState =  {
    lading:false,
user : localStorage.getItem("user")
? JSON.parse(localStorage.getItem("user") )
: null,

}   ;

const profileSlice = createSlice({
    name:"profile",
    initialState : initialState,
    reducers:{
        setUser(state,value){
            state.user = value.payload
        },
        setLoading(state,value){
            state.lading =value.payload;
    }
}})

export const {setUser,setLoading} =profileSlice.actions;
export default profileSlice.reducer;