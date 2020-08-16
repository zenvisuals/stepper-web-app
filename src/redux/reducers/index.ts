import { combineReducers } from '@reduxjs/toolkit';
import partsReducer from './parts';

export default combineReducers({ parts: partsReducer });
