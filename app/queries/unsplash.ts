import { axios } from '../config/axios';
import { UnsplashPhotoResponse } from '../models/unsplash';

export const unsplashQuery = {
  get: () => ({
    key: ['Photos'],
    fn: async () => {
      const { data } = await axios.get<UnsplashPhotoResponse[]>('/');
      return data;
    },
  }),
  getById: (id: string) => ({
    key: ['Photo'],
    fn: async () => {
      const { data } = await axios.get<UnsplashPhotoResponse>('/' + id);
      return data;
    },
  }),
};
