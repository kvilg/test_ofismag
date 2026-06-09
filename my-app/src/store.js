import { configureStore, createSlice } from '@reduxjs/toolkit'

// Создаём slice (кусочек состояния)
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    }
  }
})

// Экспортируем actions (команды)
export const { setValue } = counterSlice.actions

// Создаём store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})