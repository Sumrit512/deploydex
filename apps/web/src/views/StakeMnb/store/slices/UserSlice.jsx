import { createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
    addUser(state, action) { console.log(1)},
    removeUser(state, action){ console.log(1)},
    deleteUser(state, action) { console.log(1)},
    },
})



export default userSlice.reducer;