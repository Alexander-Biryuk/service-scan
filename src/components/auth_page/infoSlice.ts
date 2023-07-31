import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

interface Info {
  eventFiltersInfo: {
    usedCompanyCount: number;
    companyLimit: number;
  };
}

const initialState: Info = {
  eventFiltersInfo: {
    usedCompanyCount: 0,
    companyLimit: 0,
  },
};

export const getInfo = createAsyncThunk<Info, string, { rejectValue: string }>(
  'input/getInfo',
  async function (token, { rejectWithValue }) {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://gateway.scan-interfax.ru/api/v1/account/info',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      return data;
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        return rejectWithValue(axiosError.message);
      } else if (axiosError.request) {
        return rejectWithValue('No response from server');
      } else {
        rejectWithValue('Bad request');
      }
    }
  }
);

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInfo.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default infoSlice.reducer;
