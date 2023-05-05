import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UnsplashPhotoResponse } from '../../models/unsplash';

type IPhotoSlice = { photo :UnsplashPhotoResponse | null }

const initialState: IPhotoSlice = {
 photo: null,
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setPhoto(state: IPhotoSlice, action: PayloadAction<IPhotoSlice>) {
      state.photo = action.payload.photo;
    },
    removePhoto(state: IPhotoSlice) {
      state.photo = null;
    },
  },
});
