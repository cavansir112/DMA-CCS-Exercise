import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

let booksUrl = "http://localhost:7090/books";
let authorsUrl = "http://localhost:7090/authors";
let jhanerasUrl = "http://localhost:7090/jhaneras";

export const getAllBooks = createAsyncThunk("books/getAllBooks",async()=>{
    let reponse = await axios.get(booksUrl)
    return reponse?.data;
});

export const getAllAuthors = createAsyncThunk("authors/getAllAuthors",async()=>{
    let reponse = await axios.get(authorsUrl)
    return reponse?.data;
});

export const getAllJhaneras = createAsyncThunk("jhaneras/getAllJhaneras",async()=>{
    let reponse = await axios.get(jhanerasUrl)
    return reponse?.data;
});

export const addBook = createAsyncThunk("books/addBook", async (newBook) => {
    let response = await axios.post(booksUrl, newBook);
    return response.data;
});

export const deleteBook = createAsyncThunk("books/deleteBook", async (bookId) => {
    let response = await axios.delete(`${booksUrl}/${bookId}`);
    return bookId; 
});

export const updateBook = createAsyncThunk("books/updateBook", async (updatedBook) => {
    let response = await axios.put(`${booksUrl}/${updatedBook.id}`, updatedBook);
    return response.data;
});

export const addAuther = createAsyncThunk("authors/addAuther", async (newAuther) => {
    let response = await axios.post(authorsUrl, newAuther);
    return response.data;
});

export const deleteAuther = createAsyncThunk("authors/deleteAuther", async (autherId) => {
    let response = await axios.delete(`${authorsUrl}/${autherId}`);
    return autherId; 
});

export const updateAuther = createAsyncThunk("authors/updateAuther", async (updatedAuther) => {
    let response = await axios.put(`${authorsUrl}/${updatedAuther.id}`, updatedAuther);
    return response.data;
});

export const addJhanera = createAsyncThunk("jhaneras/addJhanera", async (newJhanera) => {
    let response = await axios.post(jhanerasUrl, newJhanera);
    return response.data;
});

export const deleteJhanera = createAsyncThunk("jhaneras/deleteJhanera", async (jhaneraId) => {
    let response = await axios.delete(`${jhanerasUrl}/${jhaneraId}`);
    return jhaneraId; 
});

export const updateJhanera = createAsyncThunk("jhaneras/updateJhanera", async (updatedJhanera) => {
    let response = await axios.put(`${jhanerasUrl}/${updatedJhanera.id}`, updatedJhanera);
    return response.data;
});


export const bookSlice = createSlice({
    name: 'bookSection',
    initialState:{
      books:[],
      authors:[],
      jhaneras:[]
    },
    extraReducers:(builder)=>{
      builder.addCase(getAllBooks.fulfilled,(state,action)=>{
          state.books = action.payload;
      })
      builder.addCase(getAllAuthors.fulfilled,(state,action)=>{
          state.authors = action.payload;
      })
      builder.addCase(getAllJhaneras.fulfilled,(state,action)=>{
          state.jhaneras = action.payload;
      })
      builder.addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      });
      builder.addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter(book => book.id !== action.payload);  // Silinmiş kitabı çıxar
      });

      builder.addCase(updateBook.fulfilled, (state, action) => {
      state.books = state.books.map(book => 
        book.id === action.payload.id ? action.payload : book
      )});

      builder.addCase(addAuther.fulfilled, (state, action) => {
        state.authors.push(action.payload);
      });

      builder.addCase(deleteAuther.fulfilled, (state, action) => {
        state.authors = state.authors.filter(auther => auther.id !== action.payload);  // Silinmiş kitabı çıxar
      });
      builder.addCase(updateAuther.fulfilled, (state, action) => {
      state.authors = state.authors.map(auther => 
        auther.id === action.payload.id ? action.payload : auther
      );
      
      });
      builder.addCase(addJhanera.fulfilled, (state, action) => {
        state.jhaneras.push(action.payload);
      });

      builder.addCase(deleteJhanera.fulfilled, (state, action) => {
        state.jhaneras = state.jhaneras.filter(jhanera => jhanera.id !== action.payload);  // Silinmiş kitabı çıxar
      });
      builder.addCase(updateJhanera.fulfilled, (state, action) => {
      state.jhaneras = state.jhaneras.map(jhanera => 
        jhanera.id === action.payload.id ? action.payload : jhanera
      );
      });

    },
  })
  
  // Action creators are generated for each case reducer function
  // export const { increment, decrement, incrementByAmount } = counterSlice.actions
  
  export default bookSlice.reducer;