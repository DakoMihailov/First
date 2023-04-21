import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};

const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type LoginResponse = {
	token: Scalars['String'];
	user: User;
};

export type SignResponse = {
	token: Scalars['String'];
	user: User;
};

export type User = {
	id: Scalars['Int'];
	email: Scalars['String'];
	password?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
	email: Scalars['String'];
	password: Scalars['String'];
}>;

export type LoginMutation = {
	login: {
		token: string;
		user: { email: string; id: number };
	};
};

export const LoginDocument = gql`
	mutation login($email: String!, $password: String!) {
		login(login: { email: $email, password: $password }) {
			_id
			email
			token
		}
	}
`;
export type LoginMutationFn = Apollo.MutationFunction<
	LoginMutation,
	LoginMutationVariables
>;
export function useLoginMutation(
	baseOptions?: Apollo.MutationHookOptions<
		LoginMutation,
		LoginMutationVariables
	>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
		LoginDocument,
		options
	);
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
	LoginMutation,
	LoginMutationVariables
>;
export type SignMutationVariables = Exact<{
	email: Scalars['String'];
	password: Scalars['String'];
}>;

export type SignMutation = {
	signup: {
		user: { email: string; id: number };
	};
};

export const SignDocument = gql`
	mutation signup($email: String!, $password: String!) {
		signup(signup: { email: $email, password: $password }) {
			_id
			email
			token
		}
	}
`;
export type SignMutationFn = Apollo.MutationFunction<
	SignMutation,
	SignMutationVariables
>;
export function useSignMutation(
	baseOptions?: Apollo.MutationHookOptions<SignMutation, SignMutationVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useMutation<SignMutation, SignMutationVariables>(
		SignDocument,
		options
	);
}
export type SignMutationHookResult = ReturnType<typeof useSignMutation>;
export type SignMutationResult = Apollo.MutationResult<SignMutation>;
export type SignMutationOptions = Apollo.BaseMutationOptions<
	SignMutation,
	SignMutationVariables
>;
