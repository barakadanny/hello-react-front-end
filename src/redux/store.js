import { configureStore } from '@reduxjs/toolkit'
import greetingSlice from './slice/greetingSlice'

const store = configureStore({
    reducer: {
        greeting: greetingSlice
    }
})

export default store
