import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
interface MyFormValues {
  formValues: {
    login: string;
    password: string;
  };
  accessToken: string;
}

interface Values {
  login: string;
  password: string;
}

interface Token {
  accessToken: string;
  expire: string;
}

interface Info {
  eventFiltersInfo: {
    usedCompanyCount: number;
    companyLimit: number;
  };
}

const initialState: MyFormValues = {
  formValues: {
    login: '',
    password: '',
  },
  accessToken: '',
};

export const getAccessToken = createAsyncThunk<Token, Values, { rejectValue: string }>(
  'input/getAccessToken',
  async function (values, { rejectWithValue }) {
    try {
      console.log('values:', values);
      const response = await axios({
        method: 'post',
        url: 'https://gateway.scan-interfax.ru/api/v1/account/login',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json-patch+json',
        },
        // withCredentials: true,
        data: JSON.stringify(values),
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
        return rejectWithValue('bad request');
      }
    }
  }
);



export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    // inputValues: (state, action) => {
    //   //  return action.payload;
    //   state.formValues.login = action.payload.login;
    //   state.formValues.password = action.payload.password;
    // },
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccessToken.fulfilled, (state, action) => {
      console.log('action', action.payload);
      state.accessToken = action.payload.accessToken;
    });
  },
});

export const { logout } = inputSlice.actions;
export default inputSlice.reducer;
