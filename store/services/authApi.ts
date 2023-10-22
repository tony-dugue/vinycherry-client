import { emptySplitApi as api } from '../emptyApi';
export const addTagTypes = ['auth'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      authControllerRegister: build.mutation<
        AuthControllerRegisterApiResponse,
        AuthControllerRegisterApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/local/register`,
          method: 'POST',
          body: queryArg.registerUserDto,
        }),
        invalidatesTags: ['auth'],
      }),
      authControllerLogin: build.mutation<
        AuthControllerLoginApiResponse,
        AuthControllerLoginApiArg
      >({
        query: (queryArg) => ({
          url: `/auth/local/login`,
          method: 'POST',
          body: queryArg.loginUserDto,
        }),
        invalidatesTags: ['auth'],
      }),
      authControllerLogout: build.mutation<
        AuthControllerLogoutApiResponse,
        AuthControllerLogoutApiArg
      >({
        query: () => ({ url: `/auth/logout`, method: 'POST' }),
        invalidatesTags: ['auth'],
      }),
      authControllerRefreshTokens: build.query<
        AuthControllerRefreshTokensApiResponse,
        AuthControllerRefreshTokensApiArg
      >({
        query: () => ({ url: `/auth/refresh` }),
        providesTags: ['auth'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as vinycherryApi };
export type AuthControllerRegisterApiResponse = unknown;
export type AuthControllerRegisterApiArg = {
  registerUserDto: RegisterUserDto;
};
export type AuthControllerLoginApiResponse = unknown;
export type AuthControllerLoginApiArg = {
  loginUserDto: LoginUserDto;
};
export type AuthControllerLogoutApiResponse = unknown;
export type AuthControllerLogoutApiArg = void;
export type AuthControllerRefreshTokensApiResponse = unknown;
export type AuthControllerRefreshTokensApiArg = void;
export type RegisterUserDto = {
  email: string;
  password: string;
  confirmationPassword: string;
  firstName: string;
  lastName: string;
};
export type LoginUserDto = {
  email: string;
  password: string;
};
export const {
  useAuthControllerRegisterMutation,
  useAuthControllerLoginMutation,
  useAuthControllerLogoutMutation,
  useAuthControllerRefreshTokensQuery,
} = injectedRtkApi;
