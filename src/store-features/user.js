import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
    name: 'user',
    initialState: {
        email: '',
        name: '',
        profileImage: '',
    },
    reducers: {
        setUser: (state, action) => {
            const { email, name, profileImage } = action.payload;
            state.email = email;
            state.name = name;
            state.profileImage = profileImage;
            console.log(`State Update ${JSON.stringify(state, 2, 2)}`)
        },
        resetUser: (state) => {
            state.email = ''
            state.name = ''
            state.profileImage = ''
        }
    },

});

export const { setUser, resetUser } = user.actions
export default user.reducers