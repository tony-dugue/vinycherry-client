import { emptySplitApi as api } from '../emptyApi';
export const addTagTypes = ['users'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      userControllerGetUser: build.query<
        UserControllerGetUserApiResponse,
        UserControllerGetUserApiArg
      >({
        query: () => ({ url: `/users/informations` }),
        providesTags: ['users'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as vinycherryApi };
export type UserControllerGetUserApiResponse = /** status 200 Opération réussie */ UserDto;
export type UserControllerGetUserApiArg = void;
export type UserDto = {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'USER';
};
export const { useUserControllerGetUserQuery } = injectedRtkApi;
