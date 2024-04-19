import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AccountType = {
  accountCategory: AccountTypeCategory;
  book: Book;
  bookId: Scalars['String']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  glAccounts?: Maybe<Array<GlAccount>>;
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  system: Scalars['Boolean']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type AccountTypeBookIdNameCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export enum AccountTypeCategory {
  Asset = 'ASSET',
  Equity = 'EQUITY',
  Expense = 'EXPENSE',
  Liability = 'LIABILITY',
  Revenue = 'REVENUE'
}

export type AccountTypeCountAggregate = {
  _all: Scalars['Int']['output'];
  accountCategory: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  system: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type AccountTypeCreateManyBookInput = {
  accountCategory: AccountTypeCategory;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountTypeCreateManyBookInputEnvelope = {
  data: Array<AccountTypeCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountTypeCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<AccountTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountTypeCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<AccountTypeCreateWithoutBookInput>>;
  createMany?: InputMaybe<AccountTypeCreateManyBookInputEnvelope>;
};

export type AccountTypeCreateNestedOneWithoutGlAccountsInput = {
  connect?: InputMaybe<AccountTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AccountTypeCreateOrConnectWithoutGlAccountsInput>;
  create?: InputMaybe<AccountTypeCreateWithoutGlAccountsInput>;
};

export type AccountTypeCreateOrConnectWithoutBookInput = {
  create: AccountTypeCreateWithoutBookInput;
  where: AccountTypeWhereUniqueInput;
};

export type AccountTypeCreateOrConnectWithoutGlAccountsInput = {
  create: AccountTypeCreateWithoutGlAccountsInput;
  where: AccountTypeWhereUniqueInput;
};

export type AccountTypeCreateWithoutBookInput = {
  accountCategory: AccountTypeCategory;
  glAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutAccountTypeInput>;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountTypeCreateWithoutGlAccountsInput = {
  accountCategory: AccountTypeCategory;
  book: BookCreateNestedOneWithoutAccountTypesInput;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountTypeFindInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type AccountTypeListRelationFilter = {
  every?: InputMaybe<AccountTypeWhereInput>;
  none?: InputMaybe<AccountTypeWhereInput>;
  some?: InputMaybe<AccountTypeWhereInput>;
};

export type AccountTypeMaxAggregate = {
  accountCategory?: Maybe<AccountTypeCategory>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  system?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountTypeMinAggregate = {
  accountCategory?: Maybe<AccountTypeCategory>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  system?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountTypeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountTypeOrderByWithRelationInput = {
  accountCategory?: InputMaybe<SortOrder>;
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  glAccounts?: InputMaybe<GlAccountOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  system?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AccountTypeRelationFilter = {
  is?: InputMaybe<AccountTypeWhereInput>;
  isNot?: InputMaybe<AccountTypeWhereInput>;
};

export enum AccountTypeScalarFieldEnum {
  AccountCategory = 'accountCategory',
  BookId = 'bookId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  System = 'system',
  UpdatedAt = 'updatedAt'
}

export type AccountTypeScalarWhereInput = {
  AND?: InputMaybe<Array<AccountTypeScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountTypeScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountTypeScalarWhereInput>>;
  accountCategory?: InputMaybe<EnumAccountTypeCategoryFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  system?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AccountTypeUpdateManyMutationInput = {
  accountCategory?: InputMaybe<AccountTypeCategory>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountTypeUpdateManyWithWhereWithoutBookInput = {
  data: AccountTypeUpdateManyMutationInput;
  where: AccountTypeScalarWhereInput;
};

export type AccountTypeUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<AccountTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountTypeCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<AccountTypeCreateWithoutBookInput>>;
  createMany?: InputMaybe<AccountTypeCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<AccountTypeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountTypeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountTypeWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountTypeWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountTypeUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<AccountTypeUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<AccountTypeUpsertWithWhereUniqueWithoutBookInput>>;
};

export type AccountTypeUpdateOneRequiredWithoutGlAccountsNestedInput = {
  connect?: InputMaybe<AccountTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AccountTypeCreateOrConnectWithoutGlAccountsInput>;
  create?: InputMaybe<AccountTypeCreateWithoutGlAccountsInput>;
  update?: InputMaybe<AccountTypeUpdateToOneWithWhereWithoutGlAccountsInput>;
  upsert?: InputMaybe<AccountTypeUpsertWithoutGlAccountsInput>;
};

export type AccountTypeUpdateToOneWithWhereWithoutGlAccountsInput = {
  data: AccountTypeUpdateWithoutGlAccountsInput;
  where?: InputMaybe<AccountTypeWhereInput>;
};

export type AccountTypeUpdateWithWhereUniqueWithoutBookInput = {
  data: AccountTypeUpdateWithoutBookInput;
  where: AccountTypeWhereUniqueInput;
};

export type AccountTypeUpdateWithoutBookInput = {
  accountCategory?: InputMaybe<AccountTypeCategory>;
  glAccounts?: InputMaybe<GlAccountUpdateManyWithoutAccountTypeNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountTypeUpdateWithoutGlAccountsInput = {
  accountCategory?: InputMaybe<AccountTypeCategory>;
  book?: InputMaybe<BookUpdateOneRequiredWithoutAccountTypesNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountTypeUpsertWithWhereUniqueWithoutBookInput = {
  create: AccountTypeCreateWithoutBookInput;
  update: AccountTypeUpdateWithoutBookInput;
  where: AccountTypeWhereUniqueInput;
};

export type AccountTypeUpsertWithoutGlAccountsInput = {
  create: AccountTypeCreateWithoutGlAccountsInput;
  update: AccountTypeUpdateWithoutGlAccountsInput;
  where?: InputMaybe<AccountTypeWhereInput>;
};

export type AccountTypeWhereInput = {
  AND?: InputMaybe<Array<AccountTypeWhereInput>>;
  NOT?: InputMaybe<Array<AccountTypeWhereInput>>;
  OR?: InputMaybe<Array<AccountTypeWhereInput>>;
  accountCategory?: InputMaybe<EnumAccountTypeCategoryFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  glAccounts?: InputMaybe<GlAccountListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  system?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AccountTypeWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountTypeWhereInput>>;
  NOT?: InputMaybe<Array<AccountTypeWhereInput>>;
  OR?: InputMaybe<Array<AccountTypeWhereInput>>;
  accountCategory?: InputMaybe<EnumAccountTypeCategoryFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  bookId_name?: InputMaybe<AccountTypeBookIdNameCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  glAccounts?: InputMaybe<GlAccountListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  system?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AuthSession = {
  access_token: Scalars['String']['output'];
  activeBook?: Maybe<Book>;
  activeBookId?: Maybe<Scalars['String']['output']>;
  activeUser: User;
  activeUserId: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
};

export type AuthSessionStatus = {
  activeBook?: Maybe<Book>;
  activeBookId?: Maybe<Scalars['String']['output']>;
  activeUser: User;
  activeUserId: Scalars['String']['output'];
};

export type BaseBookResult = {
  bookNumber: Scalars['Int']['output'];
  envType: BookEnvironmentType;
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  isSeeded: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  system: Scalars['Boolean']['output'];
};

export type Book = {
  _count: BookCount;
  accountTypes?: Maybe<Array<AccountType>>;
  activeCurrencies?: Maybe<Array<Currency>>;
  bookEntities?: Maybe<Array<BookEntity>>;
  bookNumber: Scalars['Int']['output'];
  connectedBookUsers?: Maybe<Array<BookUser>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  envType: BookEnvironmentType;
  glAccounts?: Maybe<Array<GlAccount>>;
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isSeeded: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  periods?: Maybe<Array<Period>>;
  primaryCurrency: Currency;
  primaryCurrencyCode: Scalars['String']['output'];
  system: Scalars['Boolean']['output'];
  systemUser: User;
  systemUserId: Scalars['String']['output'];
  transactionLines?: Maybe<Array<TransactionLine>>;
  transactionTypes?: Maybe<Array<TransactionType>>;
  transactions?: Maybe<Array<Transaction>>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type BookAvgAggregate = {
  bookNumber?: Maybe<Scalars['Float']['output']>;
};

export type BookCount = {
  accountTypes: Scalars['Int']['output'];
  activeCurrencies: Scalars['Int']['output'];
  bookEntities: Scalars['Int']['output'];
  connectedBookUsers: Scalars['Int']['output'];
  glAccounts: Scalars['Int']['output'];
  periods: Scalars['Int']['output'];
  transactionLines: Scalars['Int']['output'];
  transactionTypes: Scalars['Int']['output'];
  transactions: Scalars['Int']['output'];
};

export type BookCountAggregate = {
  _all: Scalars['Int']['output'];
  bookNumber: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  envType: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Int']['output'];
  isSeeded: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  primaryCurrencyCode: Scalars['Int']['output'];
  system: Scalars['Int']['output'];
  systemUserId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type BookCreateManyPrimaryCurrencyInput = {
  bookNumber: Scalars['Int']['input'];
  envType: BookEnvironmentType;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUserId: Scalars['String']['input'];
};

export type BookCreateManyPrimaryCurrencyInputEnvelope = {
  data: Array<BookCreateManyPrimaryCurrencyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookCreateManySystemUserInput = {
  bookNumber: Scalars['Int']['input'];
  envType: BookEnvironmentType;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  primaryCurrencyCode: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookCreateManySystemUserInputEnvelope = {
  data: Array<BookCreateManySystemUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookCreateNestedManyWithoutActiveCurrenciesInput = {
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutActiveCurrenciesInput>>;
  create?: InputMaybe<Array<BookCreateWithoutActiveCurrenciesInput>>;
};

export type BookCreateNestedManyWithoutPrimaryCurrencyInput = {
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutPrimaryCurrencyInput>>;
  create?: InputMaybe<Array<BookCreateWithoutPrimaryCurrencyInput>>;
  createMany?: InputMaybe<BookCreateManyPrimaryCurrencyInputEnvelope>;
};

export type BookCreateNestedManyWithoutSystemUserInput = {
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutSystemUserInput>>;
  create?: InputMaybe<Array<BookCreateWithoutSystemUserInput>>;
  createMany?: InputMaybe<BookCreateManySystemUserInputEnvelope>;
};

export type BookCreateNestedOneWithoutAccountTypesInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutAccountTypesInput>;
  create?: InputMaybe<BookCreateWithoutAccountTypesInput>;
};

export type BookCreateNestedOneWithoutBookEntitiesInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutBookEntitiesInput>;
  create?: InputMaybe<BookCreateWithoutBookEntitiesInput>;
};

export type BookCreateNestedOneWithoutConnectedBookUsersInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutConnectedBookUsersInput>;
  create?: InputMaybe<BookCreateWithoutConnectedBookUsersInput>;
};

export type BookCreateNestedOneWithoutGlAccountsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutGlAccountsInput>;
  create?: InputMaybe<BookCreateWithoutGlAccountsInput>;
};

export type BookCreateNestedOneWithoutPeriodsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutPeriodsInput>;
  create?: InputMaybe<BookCreateWithoutPeriodsInput>;
};

export type BookCreateNestedOneWithoutTransactionLinesInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutTransactionLinesInput>;
  create?: InputMaybe<BookCreateWithoutTransactionLinesInput>;
};

export type BookCreateNestedOneWithoutTransactionTypesInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutTransactionTypesInput>;
  create?: InputMaybe<BookCreateWithoutTransactionTypesInput>;
};

export type BookCreateNestedOneWithoutTransactionsInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<BookCreateWithoutTransactionsInput>;
};

export type BookCreateOrConnectWithoutAccountTypesInput = {
  create: BookCreateWithoutAccountTypesInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutActiveCurrenciesInput = {
  create: BookCreateWithoutActiveCurrenciesInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutBookEntitiesInput = {
  create: BookCreateWithoutBookEntitiesInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutConnectedBookUsersInput = {
  create: BookCreateWithoutConnectedBookUsersInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutGlAccountsInput = {
  create: BookCreateWithoutGlAccountsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutPeriodsInput = {
  create: BookCreateWithoutPeriodsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutPrimaryCurrencyInput = {
  create: BookCreateWithoutPrimaryCurrencyInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutSystemUserInput = {
  create: BookCreateWithoutSystemUserInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutTransactionLinesInput = {
  create: BookCreateWithoutTransactionLinesInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutTransactionTypesInput = {
  create: BookCreateWithoutTransactionTypesInput;
  where: BookWhereUniqueInput;
};

export type BookCreateOrConnectWithoutTransactionsInput = {
  create: BookCreateWithoutTransactionsInput;
  where: BookWhereUniqueInput;
};

export type BookCreateWithoutAccountTypesInput = {
  activeCurrencies?: InputMaybe<CurrencyCreateNestedManyWithoutActiveCurrencyBooksInput>;
  bookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutBookInput>;
  bookNumber: Scalars['Int']['input'];
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutBookInput>;
  envType: BookEnvironmentType;
  glAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutBookInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  periods?: InputMaybe<PeriodCreateNestedManyWithoutBookInput>;
  primaryCurrency: CurrencyCreateNestedOneWithoutPrimaryCurrencyBooksInput;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser: UserCreateNestedOneWithoutSystemUserBooksInput;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutBookInput>;
  transactionTypes?: InputMaybe<TransactionTypeCreateNestedManyWithoutBookInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutActiveCurrenciesInput = {
  accountTypes?: InputMaybe<AccountTypeCreateNestedManyWithoutBookInput>;
  bookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutBookInput>;
  bookNumber: Scalars['Int']['input'];
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutBookInput>;
  envType: BookEnvironmentType;
  glAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutBookInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  periods?: InputMaybe<PeriodCreateNestedManyWithoutBookInput>;
  primaryCurrency: CurrencyCreateNestedOneWithoutPrimaryCurrencyBooksInput;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser: UserCreateNestedOneWithoutSystemUserBooksInput;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutBookInput>;
  transactionTypes?: InputMaybe<TransactionTypeCreateNestedManyWithoutBookInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutBookEntitiesInput = {
  accountTypes?: InputMaybe<AccountTypeCreateNestedManyWithoutBookInput>;
  activeCurrencies?: InputMaybe<CurrencyCreateNestedManyWithoutActiveCurrencyBooksInput>;
  bookNumber: Scalars['Int']['input'];
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutBookInput>;
  envType: BookEnvironmentType;
  glAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutBookInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  periods?: InputMaybe<PeriodCreateNestedManyWithoutBookInput>;
  primaryCurrency: CurrencyCreateNestedOneWithoutPrimaryCurrencyBooksInput;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser: UserCreateNestedOneWithoutSystemUserBooksInput;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutBookInput>;
  transactionTypes?: InputMaybe<TransactionTypeCreateNestedManyWithoutBookInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutConnectedBookUsersInput = {
  accountTypes?: InputMaybe<AccountTypeCreateNestedManyWithoutBookInput>;
  activeCurrencies?: InputMaybe<CurrencyCreateNestedManyWithoutActiveCurrencyBooksInput>;
  bookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutBookInput>;
  bookNumber: Scalars['Int']['input'];
  envType: BookEnvironmentType;
  glAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutBookInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  periods?: InputMaybe<PeriodCreateNestedManyWithoutBookInput>;
  primaryCurrency: CurrencyCreateNestedOneWithoutPrimaryCurrencyBooksInput;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser: UserCreateNestedOneWithoutSystemUserBooksInput;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutBookInput>;
  transactionTypes?: InputMaybe<TransactionTypeCreateNestedManyWithoutBookInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutGlAccountsInput = {
  accountTypes?: InputMaybe<AccountTypeCreateNestedManyWithoutBookInput>;
  activeCurrencies?: InputMaybe<CurrencyCreateNestedManyWithoutActiveCurrencyBooksInput>;
  bookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutBookInput>;
  bookNumber: Scalars['Int']['input'];
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutBookInput>;
  envType: BookEnvironmentType;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  periods?: InputMaybe<PeriodCreateNestedManyWithoutBookInput>;
  primaryCurrency: CurrencyCreateNestedOneWithoutPrimaryCurrencyBooksInput;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser: UserCreateNestedOneWithoutSystemUserBooksInput;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutBookInput>;
  transactionTypes?: InputMaybe<TransactionTypeCreateNestedManyWithoutBookInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutPeriodsInput = {
  accountTypes?: InputMaybe<AccountTypeCreateNestedManyWithoutBookInput>;
  activeCurrencies?: InputMaybe<CurrencyCreateNestedManyWithoutActiveCurrencyBooksInput>;
  bookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutBookInput>;
  bookNumber: Scalars['Int']['input'];
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutBookInput>;
  envType: BookEnvironmentType;
  glAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutBookInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  primaryCurrency: CurrencyCreateNestedOneWithoutPrimaryCurrencyBooksInput;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser: UserCreateNestedOneWithoutSystemUserBooksInput;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutBookInput>;
  transactionTypes?: InputMaybe<TransactionTypeCreateNestedManyWithoutBookInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutPrimaryCurrencyInput = {
  accountTypes?: InputMaybe<AccountTypeCreateNestedManyWithoutBookInput>;
  activeCurrencies?: InputMaybe<CurrencyCreateNestedManyWithoutActiveCurrencyBooksInput>;
  bookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutBookInput>;
  bookNumber: Scalars['Int']['input'];
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutBookInput>;
  envType: BookEnvironmentType;
  glAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutBookInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  periods?: InputMaybe<PeriodCreateNestedManyWithoutBookInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser: UserCreateNestedOneWithoutSystemUserBooksInput;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutBookInput>;
  transactionTypes?: InputMaybe<TransactionTypeCreateNestedManyWithoutBookInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutSystemUserInput = {
  accountTypes?: InputMaybe<AccountTypeCreateNestedManyWithoutBookInput>;
  activeCurrencies?: InputMaybe<CurrencyCreateNestedManyWithoutActiveCurrencyBooksInput>;
  bookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutBookInput>;
  bookNumber: Scalars['Int']['input'];
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutBookInput>;
  envType: BookEnvironmentType;
  glAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutBookInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  periods?: InputMaybe<PeriodCreateNestedManyWithoutBookInput>;
  primaryCurrency: CurrencyCreateNestedOneWithoutPrimaryCurrencyBooksInput;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutBookInput>;
  transactionTypes?: InputMaybe<TransactionTypeCreateNestedManyWithoutBookInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutTransactionLinesInput = {
  accountTypes?: InputMaybe<AccountTypeCreateNestedManyWithoutBookInput>;
  activeCurrencies?: InputMaybe<CurrencyCreateNestedManyWithoutActiveCurrencyBooksInput>;
  bookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutBookInput>;
  bookNumber: Scalars['Int']['input'];
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutBookInput>;
  envType: BookEnvironmentType;
  glAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutBookInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  periods?: InputMaybe<PeriodCreateNestedManyWithoutBookInput>;
  primaryCurrency: CurrencyCreateNestedOneWithoutPrimaryCurrencyBooksInput;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser: UserCreateNestedOneWithoutSystemUserBooksInput;
  transactionTypes?: InputMaybe<TransactionTypeCreateNestedManyWithoutBookInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutTransactionTypesInput = {
  accountTypes?: InputMaybe<AccountTypeCreateNestedManyWithoutBookInput>;
  activeCurrencies?: InputMaybe<CurrencyCreateNestedManyWithoutActiveCurrencyBooksInput>;
  bookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutBookInput>;
  bookNumber: Scalars['Int']['input'];
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutBookInput>;
  envType: BookEnvironmentType;
  glAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutBookInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  periods?: InputMaybe<PeriodCreateNestedManyWithoutBookInput>;
  primaryCurrency: CurrencyCreateNestedOneWithoutPrimaryCurrencyBooksInput;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser: UserCreateNestedOneWithoutSystemUserBooksInput;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutBookInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutBookInput>;
};

export type BookCreateWithoutTransactionsInput = {
  accountTypes?: InputMaybe<AccountTypeCreateNestedManyWithoutBookInput>;
  activeCurrencies?: InputMaybe<CurrencyCreateNestedManyWithoutActiveCurrencyBooksInput>;
  bookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutBookInput>;
  bookNumber: Scalars['Int']['input'];
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutBookInput>;
  envType: BookEnvironmentType;
  glAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutBookInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  periods?: InputMaybe<PeriodCreateNestedManyWithoutBookInput>;
  primaryCurrency: CurrencyCreateNestedOneWithoutPrimaryCurrencyBooksInput;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser: UserCreateNestedOneWithoutSystemUserBooksInput;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutBookInput>;
  transactionTypes?: InputMaybe<TransactionTypeCreateNestedManyWithoutBookInput>;
};

export type BookEntity = {
  book: Book;
  bookId: Scalars['String']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  createdBy: BookUser;
  createdById: Scalars['String']['output'];
  defaultAccount?: Maybe<GlAccount>;
  defaultAccountNumber?: Maybe<Scalars['Int']['output']>;
  entityId: Scalars['Int']['output'];
  entityType: EntityType;
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  system: Scalars['Boolean']['output'];
  transactionLines?: Maybe<Array<TransactionLine>>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type BookEntityAvgAggregate = {
  defaultAccountNumber?: Maybe<Scalars['Float']['output']>;
  entityId?: Maybe<Scalars['Float']['output']>;
};

export type BookEntityCountAggregate = {
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdById: Scalars['Int']['output'];
  defaultAccountNumber: Scalars['Int']['output'];
  entityId: Scalars['Int']['output'];
  entityType: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  system: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type BookEntityCreateManyBookInput = {
  createdById: Scalars['String']['input'];
  defaultAccountNumber?: InputMaybe<Scalars['Int']['input']>;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType: EntityType;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookEntityCreateManyBookInputEnvelope = {
  data: Array<BookEntityCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookEntityCreateManyCreatedByInput = {
  defaultAccountNumber?: InputMaybe<Scalars['Int']['input']>;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType: EntityType;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookEntityCreateManyCreatedByInputEnvelope = {
  data: Array<BookEntityCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookEntityCreateManyDefaultAccountInput = {
  createdById: Scalars['String']['input'];
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType: EntityType;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookEntityCreateManyDefaultAccountInputEnvelope = {
  data: Array<BookEntityCreateManyDefaultAccountInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookEntityCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookEntityCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<BookEntityCreateWithoutBookInput>>;
  createMany?: InputMaybe<BookEntityCreateManyBookInputEnvelope>;
};

export type BookEntityCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookEntityCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<BookEntityCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<BookEntityCreateManyCreatedByInputEnvelope>;
};

export type BookEntityCreateNestedManyWithoutDefaultAccountInput = {
  connect?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookEntityCreateOrConnectWithoutDefaultAccountInput>>;
  create?: InputMaybe<Array<BookEntityCreateWithoutDefaultAccountInput>>;
  createMany?: InputMaybe<BookEntityCreateManyDefaultAccountInputEnvelope>;
};

export type BookEntityCreateNestedOneWithoutTransactionLinesInput = {
  connect?: InputMaybe<BookEntityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookEntityCreateOrConnectWithoutTransactionLinesInput>;
  create?: InputMaybe<BookEntityCreateWithoutTransactionLinesInput>;
};

export type BookEntityCreateOrConnectWithoutBookInput = {
  create: BookEntityCreateWithoutBookInput;
  where: BookEntityWhereUniqueInput;
};

export type BookEntityCreateOrConnectWithoutCreatedByInput = {
  create: BookEntityCreateWithoutCreatedByInput;
  where: BookEntityWhereUniqueInput;
};

export type BookEntityCreateOrConnectWithoutDefaultAccountInput = {
  create: BookEntityCreateWithoutDefaultAccountInput;
  where: BookEntityWhereUniqueInput;
};

export type BookEntityCreateOrConnectWithoutTransactionLinesInput = {
  create: BookEntityCreateWithoutTransactionLinesInput;
  where: BookEntityWhereUniqueInput;
};

export type BookEntityCreateWithoutBookInput = {
  createdBy: BookUserCreateNestedOneWithoutCreatedBookEntitiesInput;
  defaultAccount?: InputMaybe<GlAccountCreateNestedOneWithoutBookEntityDefaultsInput>;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType: EntityType;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutEntityInput>;
};

export type BookEntityCreateWithoutCreatedByInput = {
  book: BookCreateNestedOneWithoutBookEntitiesInput;
  defaultAccount?: InputMaybe<GlAccountCreateNestedOneWithoutBookEntityDefaultsInput>;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType: EntityType;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutEntityInput>;
};

export type BookEntityCreateWithoutDefaultAccountInput = {
  book: BookCreateNestedOneWithoutBookEntitiesInput;
  createdBy: BookUserCreateNestedOneWithoutCreatedBookEntitiesInput;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType: EntityType;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutEntityInput>;
};

export type BookEntityCreateWithoutTransactionLinesInput = {
  book: BookCreateNestedOneWithoutBookEntitiesInput;
  createdBy: BookUserCreateNestedOneWithoutCreatedBookEntitiesInput;
  defaultAccount?: InputMaybe<GlAccountCreateNestedOneWithoutBookEntityDefaultsInput>;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType: EntityType;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookEntityEntityIdBookIdCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  entityId: Scalars['Int']['input'];
};

export type BookEntityIdBookIdCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type BookEntityListRelationFilter = {
  every?: InputMaybe<BookEntityWhereInput>;
  none?: InputMaybe<BookEntityWhereInput>;
  some?: InputMaybe<BookEntityWhereInput>;
};

export type BookEntityMaxAggregate = {
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  defaultAccountNumber?: Maybe<Scalars['Int']['output']>;
  entityId?: Maybe<Scalars['Int']['output']>;
  entityType?: Maybe<EntityType>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  system?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BookEntityMinAggregate = {
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  defaultAccountNumber?: Maybe<Scalars['Int']['output']>;
  entityId?: Maybe<Scalars['Int']['output']>;
  entityType?: Maybe<EntityType>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  system?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BookEntityNameBookIdCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type BookEntityNullableRelationFilter = {
  is?: InputMaybe<BookEntityWhereInput>;
  isNot?: InputMaybe<BookEntityWhereInput>;
};

export type BookEntityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookEntityScalarWhereInput = {
  AND?: InputMaybe<Array<BookEntityScalarWhereInput>>;
  NOT?: InputMaybe<Array<BookEntityScalarWhereInput>>;
  OR?: InputMaybe<Array<BookEntityScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringFilter>;
  defaultAccountNumber?: InputMaybe<IntNullableFilter>;
  entityId?: InputMaybe<IntFilter>;
  entityType?: InputMaybe<EnumEntityTypeFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  system?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BookEntitySumAggregate = {
  defaultAccountNumber?: Maybe<Scalars['Int']['output']>;
  entityId?: Maybe<Scalars['Int']['output']>;
};

export type BookEntityUpdateManyMutationInput = {
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType?: InputMaybe<EntityType>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookEntityUpdateManyWithWhereWithoutBookInput = {
  data: BookEntityUpdateManyMutationInput;
  where: BookEntityScalarWhereInput;
};

export type BookEntityUpdateManyWithWhereWithoutCreatedByInput = {
  data: BookEntityUpdateManyMutationInput;
  where: BookEntityScalarWhereInput;
};

export type BookEntityUpdateManyWithWhereWithoutDefaultAccountInput = {
  data: BookEntityUpdateManyMutationInput;
  where: BookEntityScalarWhereInput;
};

export type BookEntityUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookEntityCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<BookEntityCreateWithoutBookInput>>;
  createMany?: InputMaybe<BookEntityCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookEntityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  set?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  update?: InputMaybe<Array<BookEntityUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<BookEntityUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<BookEntityUpsertWithWhereUniqueWithoutBookInput>>;
};

export type BookEntityUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookEntityCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<BookEntityCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<BookEntityCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookEntityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  set?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  update?: InputMaybe<Array<BookEntityUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<BookEntityUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<BookEntityUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type BookEntityUpdateManyWithoutDefaultAccountNestedInput = {
  connect?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookEntityCreateOrConnectWithoutDefaultAccountInput>>;
  create?: InputMaybe<Array<BookEntityCreateWithoutDefaultAccountInput>>;
  createMany?: InputMaybe<BookEntityCreateManyDefaultAccountInputEnvelope>;
  delete?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookEntityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  set?: InputMaybe<Array<BookEntityWhereUniqueInput>>;
  update?: InputMaybe<Array<BookEntityUpdateWithWhereUniqueWithoutDefaultAccountInput>>;
  updateMany?: InputMaybe<Array<BookEntityUpdateManyWithWhereWithoutDefaultAccountInput>>;
  upsert?: InputMaybe<Array<BookEntityUpsertWithWhereUniqueWithoutDefaultAccountInput>>;
};

export type BookEntityUpdateOneWithoutTransactionLinesNestedInput = {
  connect?: InputMaybe<BookEntityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookEntityCreateOrConnectWithoutTransactionLinesInput>;
  create?: InputMaybe<BookEntityCreateWithoutTransactionLinesInput>;
  delete?: InputMaybe<BookEntityWhereInput>;
  disconnect?: InputMaybe<BookEntityWhereInput>;
  update?: InputMaybe<BookEntityUpdateToOneWithWhereWithoutTransactionLinesInput>;
  upsert?: InputMaybe<BookEntityUpsertWithoutTransactionLinesInput>;
};

export type BookEntityUpdateToOneWithWhereWithoutTransactionLinesInput = {
  data: BookEntityUpdateWithoutTransactionLinesInput;
  where?: InputMaybe<BookEntityWhereInput>;
};

export type BookEntityUpdateWithWhereUniqueWithoutBookInput = {
  data: BookEntityUpdateWithoutBookInput;
  where: BookEntityWhereUniqueInput;
};

export type BookEntityUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: BookEntityUpdateWithoutCreatedByInput;
  where: BookEntityWhereUniqueInput;
};

export type BookEntityUpdateWithWhereUniqueWithoutDefaultAccountInput = {
  data: BookEntityUpdateWithoutDefaultAccountInput;
  where: BookEntityWhereUniqueInput;
};

export type BookEntityUpdateWithoutBookInput = {
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedBookEntitiesNestedInput>;
  defaultAccount?: InputMaybe<GlAccountUpdateOneWithoutBookEntityDefaultsNestedInput>;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType?: InputMaybe<EntityType>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutEntityNestedInput>;
};

export type BookEntityUpdateWithoutCreatedByInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutBookEntitiesNestedInput>;
  defaultAccount?: InputMaybe<GlAccountUpdateOneWithoutBookEntityDefaultsNestedInput>;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType?: InputMaybe<EntityType>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutEntityNestedInput>;
};

export type BookEntityUpdateWithoutDefaultAccountInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutBookEntitiesNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedBookEntitiesNestedInput>;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType?: InputMaybe<EntityType>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutEntityNestedInput>;
};

export type BookEntityUpdateWithoutTransactionLinesInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutBookEntitiesNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedBookEntitiesNestedInput>;
  defaultAccount?: InputMaybe<GlAccountUpdateOneWithoutBookEntityDefaultsNestedInput>;
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entityType?: InputMaybe<EntityType>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookEntityUpsertWithWhereUniqueWithoutBookInput = {
  create: BookEntityCreateWithoutBookInput;
  update: BookEntityUpdateWithoutBookInput;
  where: BookEntityWhereUniqueInput;
};

export type BookEntityUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: BookEntityCreateWithoutCreatedByInput;
  update: BookEntityUpdateWithoutCreatedByInput;
  where: BookEntityWhereUniqueInput;
};

export type BookEntityUpsertWithWhereUniqueWithoutDefaultAccountInput = {
  create: BookEntityCreateWithoutDefaultAccountInput;
  update: BookEntityUpdateWithoutDefaultAccountInput;
  where: BookEntityWhereUniqueInput;
};

export type BookEntityUpsertWithoutTransactionLinesInput = {
  create: BookEntityCreateWithoutTransactionLinesInput;
  update: BookEntityUpdateWithoutTransactionLinesInput;
  where?: InputMaybe<BookEntityWhereInput>;
};

export type BookEntityWhereInput = {
  AND?: InputMaybe<Array<BookEntityWhereInput>>;
  NOT?: InputMaybe<Array<BookEntityWhereInput>>;
  OR?: InputMaybe<Array<BookEntityWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<BookUserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  defaultAccount?: InputMaybe<GlAccountNullableRelationFilter>;
  defaultAccountNumber?: InputMaybe<IntNullableFilter>;
  entityId?: InputMaybe<IntFilter>;
  entityType?: InputMaybe<EnumEntityTypeFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  system?: InputMaybe<BoolFilter>;
  transactionLines?: InputMaybe<TransactionLineListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BookEntityWhereUniqueInput = {
  AND?: InputMaybe<Array<BookEntityWhereInput>>;
  NOT?: InputMaybe<Array<BookEntityWhereInput>>;
  OR?: InputMaybe<Array<BookEntityWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<BookUserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  defaultAccount?: InputMaybe<GlAccountNullableRelationFilter>;
  defaultAccountNumber?: InputMaybe<IntNullableFilter>;
  entityId?: InputMaybe<IntFilter>;
  entityId_bookId?: InputMaybe<BookEntityEntityIdBookIdCompoundUniqueInput>;
  entityType?: InputMaybe<EnumEntityTypeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_bookId?: InputMaybe<BookEntityIdBookIdCompoundUniqueInput>;
  isActive?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  name_bookId?: InputMaybe<BookEntityNameBookIdCompoundUniqueInput>;
  system?: InputMaybe<BoolFilter>;
  transactionLines?: InputMaybe<TransactionLineListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum BookEnvironmentType {
  Development = 'DEVELOPMENT',
  Local = 'LOCAL',
  Production = 'PRODUCTION',
  Sandbox = 'SANDBOX'
}

export type BookFindInput = {
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  envType?: InputMaybe<BookEnvironmentType>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type BookListRelationFilter = {
  every?: InputMaybe<BookWhereInput>;
  none?: InputMaybe<BookWhereInput>;
  some?: InputMaybe<BookWhereInput>;
};

export type BookMaxAggregate = {
  bookNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  envType?: Maybe<BookEnvironmentType>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isSeeded?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  primaryCurrencyCode?: Maybe<Scalars['String']['output']>;
  system?: Maybe<Scalars['Boolean']['output']>;
  systemUserId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BookMinAggregate = {
  bookNumber?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  envType?: Maybe<BookEnvironmentType>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isSeeded?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  primaryCurrencyCode?: Maybe<Scalars['String']['output']>;
  system?: Maybe<Scalars['Boolean']['output']>;
  systemUserId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BookOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookOrderByWithRelationInput = {
  accountTypes?: InputMaybe<AccountTypeOrderByRelationAggregateInput>;
  activeCurrencies?: InputMaybe<CurrencyOrderByRelationAggregateInput>;
  bookEntities?: InputMaybe<BookEntityOrderByRelationAggregateInput>;
  bookNumber?: InputMaybe<SortOrder>;
  connectedBookUsers?: InputMaybe<BookUserOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  envType?: InputMaybe<SortOrder>;
  glAccounts?: InputMaybe<GlAccountOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  isSeeded?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  periods?: InputMaybe<PeriodOrderByRelationAggregateInput>;
  primaryCurrency?: InputMaybe<CurrencyOrderByWithRelationInput>;
  primaryCurrencyCode?: InputMaybe<SortOrder>;
  system?: InputMaybe<SortOrder>;
  systemUser?: InputMaybe<UserOrderByWithRelationInput>;
  systemUserId?: InputMaybe<SortOrder>;
  transactionLines?: InputMaybe<TransactionLineOrderByRelationAggregateInput>;
  transactionTypes?: InputMaybe<TransactionTypeOrderByRelationAggregateInput>;
  transactions?: InputMaybe<TransactionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BookRelationFilter = {
  is?: InputMaybe<BookWhereInput>;
  isNot?: InputMaybe<BookWhereInput>;
};

export enum BookScalarFieldEnum {
  BookNumber = 'bookNumber',
  CreatedAt = 'createdAt',
  EnvType = 'envType',
  Id = 'id',
  IsActive = 'isActive',
  IsSeeded = 'isSeeded',
  Name = 'name',
  PrimaryCurrencyCode = 'primaryCurrencyCode',
  System = 'system',
  SystemUserId = 'systemUserId',
  UpdatedAt = 'updatedAt'
}

export type BookScalarWhereInput = {
  AND?: InputMaybe<Array<BookScalarWhereInput>>;
  NOT?: InputMaybe<Array<BookScalarWhereInput>>;
  OR?: InputMaybe<Array<BookScalarWhereInput>>;
  bookNumber?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  envType?: InputMaybe<EnumBookEnvironmentTypeFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  isSeeded?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  primaryCurrencyCode?: InputMaybe<StringFilter>;
  system?: InputMaybe<BoolFilter>;
  systemUserId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BookSumAggregate = {
  bookNumber?: Maybe<Scalars['Int']['output']>;
};

export type BookUpdateManyMutationInput = {
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  envType?: InputMaybe<BookEnvironmentType>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookUpdateManyWithWhereWithoutActiveCurrenciesInput = {
  data: BookUpdateManyMutationInput;
  where: BookScalarWhereInput;
};

export type BookUpdateManyWithWhereWithoutPrimaryCurrencyInput = {
  data: BookUpdateManyMutationInput;
  where: BookScalarWhereInput;
};

export type BookUpdateManyWithWhereWithoutSystemUserInput = {
  data: BookUpdateManyMutationInput;
  where: BookScalarWhereInput;
};

export type BookUpdateManyWithoutActiveCurrenciesNestedInput = {
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutActiveCurrenciesInput>>;
  create?: InputMaybe<Array<BookCreateWithoutActiveCurrenciesInput>>;
  delete?: InputMaybe<Array<BookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookWhereUniqueInput>>;
  set?: InputMaybe<Array<BookWhereUniqueInput>>;
  update?: InputMaybe<Array<BookUpdateWithWhereUniqueWithoutActiveCurrenciesInput>>;
  updateMany?: InputMaybe<Array<BookUpdateManyWithWhereWithoutActiveCurrenciesInput>>;
  upsert?: InputMaybe<Array<BookUpsertWithWhereUniqueWithoutActiveCurrenciesInput>>;
};

export type BookUpdateManyWithoutPrimaryCurrencyNestedInput = {
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutPrimaryCurrencyInput>>;
  create?: InputMaybe<Array<BookCreateWithoutPrimaryCurrencyInput>>;
  createMany?: InputMaybe<BookCreateManyPrimaryCurrencyInputEnvelope>;
  delete?: InputMaybe<Array<BookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookWhereUniqueInput>>;
  set?: InputMaybe<Array<BookWhereUniqueInput>>;
  update?: InputMaybe<Array<BookUpdateWithWhereUniqueWithoutPrimaryCurrencyInput>>;
  updateMany?: InputMaybe<Array<BookUpdateManyWithWhereWithoutPrimaryCurrencyInput>>;
  upsert?: InputMaybe<Array<BookUpsertWithWhereUniqueWithoutPrimaryCurrencyInput>>;
};

export type BookUpdateManyWithoutSystemUserNestedInput = {
  connect?: InputMaybe<Array<BookWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookCreateOrConnectWithoutSystemUserInput>>;
  create?: InputMaybe<Array<BookCreateWithoutSystemUserInput>>;
  createMany?: InputMaybe<BookCreateManySystemUserInputEnvelope>;
  delete?: InputMaybe<Array<BookWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookWhereUniqueInput>>;
  set?: InputMaybe<Array<BookWhereUniqueInput>>;
  update?: InputMaybe<Array<BookUpdateWithWhereUniqueWithoutSystemUserInput>>;
  updateMany?: InputMaybe<Array<BookUpdateManyWithWhereWithoutSystemUserInput>>;
  upsert?: InputMaybe<Array<BookUpsertWithWhereUniqueWithoutSystemUserInput>>;
};

export type BookUpdateOneRequiredWithoutAccountTypesNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutAccountTypesInput>;
  create?: InputMaybe<BookCreateWithoutAccountTypesInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutAccountTypesInput>;
  upsert?: InputMaybe<BookUpsertWithoutAccountTypesInput>;
};

export type BookUpdateOneRequiredWithoutBookEntitiesNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutBookEntitiesInput>;
  create?: InputMaybe<BookCreateWithoutBookEntitiesInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutBookEntitiesInput>;
  upsert?: InputMaybe<BookUpsertWithoutBookEntitiesInput>;
};

export type BookUpdateOneRequiredWithoutConnectedBookUsersNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutConnectedBookUsersInput>;
  create?: InputMaybe<BookCreateWithoutConnectedBookUsersInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutConnectedBookUsersInput>;
  upsert?: InputMaybe<BookUpsertWithoutConnectedBookUsersInput>;
};

export type BookUpdateOneRequiredWithoutGlAccountsNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutGlAccountsInput>;
  create?: InputMaybe<BookCreateWithoutGlAccountsInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutGlAccountsInput>;
  upsert?: InputMaybe<BookUpsertWithoutGlAccountsInput>;
};

export type BookUpdateOneRequiredWithoutPeriodsNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutPeriodsInput>;
  create?: InputMaybe<BookCreateWithoutPeriodsInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutPeriodsInput>;
  upsert?: InputMaybe<BookUpsertWithoutPeriodsInput>;
};

export type BookUpdateOneRequiredWithoutTransactionLinesNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutTransactionLinesInput>;
  create?: InputMaybe<BookCreateWithoutTransactionLinesInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutTransactionLinesInput>;
  upsert?: InputMaybe<BookUpsertWithoutTransactionLinesInput>;
};

export type BookUpdateOneRequiredWithoutTransactionTypesNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutTransactionTypesInput>;
  create?: InputMaybe<BookCreateWithoutTransactionTypesInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutTransactionTypesInput>;
  upsert?: InputMaybe<BookUpsertWithoutTransactionTypesInput>;
};

export type BookUpdateOneRequiredWithoutTransactionsNestedInput = {
  connect?: InputMaybe<BookWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<BookCreateWithoutTransactionsInput>;
  update?: InputMaybe<BookUpdateToOneWithWhereWithoutTransactionsInput>;
  upsert?: InputMaybe<BookUpsertWithoutTransactionsInput>;
};

export type BookUpdateToOneWithWhereWithoutAccountTypesInput = {
  data: BookUpdateWithoutAccountTypesInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutBookEntitiesInput = {
  data: BookUpdateWithoutBookEntitiesInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutConnectedBookUsersInput = {
  data: BookUpdateWithoutConnectedBookUsersInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutGlAccountsInput = {
  data: BookUpdateWithoutGlAccountsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutPeriodsInput = {
  data: BookUpdateWithoutPeriodsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutTransactionLinesInput = {
  data: BookUpdateWithoutTransactionLinesInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutTransactionTypesInput = {
  data: BookUpdateWithoutTransactionTypesInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateToOneWithWhereWithoutTransactionsInput = {
  data: BookUpdateWithoutTransactionsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpdateWithWhereUniqueWithoutActiveCurrenciesInput = {
  data: BookUpdateWithoutActiveCurrenciesInput;
  where: BookWhereUniqueInput;
};

export type BookUpdateWithWhereUniqueWithoutPrimaryCurrencyInput = {
  data: BookUpdateWithoutPrimaryCurrencyInput;
  where: BookWhereUniqueInput;
};

export type BookUpdateWithWhereUniqueWithoutSystemUserInput = {
  data: BookUpdateWithoutSystemUserInput;
  where: BookWhereUniqueInput;
};

export type BookUpdateWithoutAccountTypesInput = {
  activeCurrencies?: InputMaybe<CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput>;
  bookEntities?: InputMaybe<BookEntityUpdateManyWithoutBookNestedInput>;
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutBookNestedInput>;
  envType?: InputMaybe<BookEnvironmentType>;
  glAccounts?: InputMaybe<GlAccountUpdateManyWithoutBookNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<PeriodUpdateManyWithoutBookNestedInput>;
  primaryCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutPrimaryCurrencyBooksNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser?: InputMaybe<UserUpdateOneRequiredWithoutSystemUserBooksNestedInput>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutBookNestedInput>;
  transactionTypes?: InputMaybe<TransactionTypeUpdateManyWithoutBookNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutActiveCurrenciesInput = {
  accountTypes?: InputMaybe<AccountTypeUpdateManyWithoutBookNestedInput>;
  bookEntities?: InputMaybe<BookEntityUpdateManyWithoutBookNestedInput>;
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutBookNestedInput>;
  envType?: InputMaybe<BookEnvironmentType>;
  glAccounts?: InputMaybe<GlAccountUpdateManyWithoutBookNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<PeriodUpdateManyWithoutBookNestedInput>;
  primaryCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutPrimaryCurrencyBooksNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser?: InputMaybe<UserUpdateOneRequiredWithoutSystemUserBooksNestedInput>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutBookNestedInput>;
  transactionTypes?: InputMaybe<TransactionTypeUpdateManyWithoutBookNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutBookEntitiesInput = {
  accountTypes?: InputMaybe<AccountTypeUpdateManyWithoutBookNestedInput>;
  activeCurrencies?: InputMaybe<CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput>;
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutBookNestedInput>;
  envType?: InputMaybe<BookEnvironmentType>;
  glAccounts?: InputMaybe<GlAccountUpdateManyWithoutBookNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<PeriodUpdateManyWithoutBookNestedInput>;
  primaryCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutPrimaryCurrencyBooksNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser?: InputMaybe<UserUpdateOneRequiredWithoutSystemUserBooksNestedInput>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutBookNestedInput>;
  transactionTypes?: InputMaybe<TransactionTypeUpdateManyWithoutBookNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutConnectedBookUsersInput = {
  accountTypes?: InputMaybe<AccountTypeUpdateManyWithoutBookNestedInput>;
  activeCurrencies?: InputMaybe<CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput>;
  bookEntities?: InputMaybe<BookEntityUpdateManyWithoutBookNestedInput>;
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  envType?: InputMaybe<BookEnvironmentType>;
  glAccounts?: InputMaybe<GlAccountUpdateManyWithoutBookNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<PeriodUpdateManyWithoutBookNestedInput>;
  primaryCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutPrimaryCurrencyBooksNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser?: InputMaybe<UserUpdateOneRequiredWithoutSystemUserBooksNestedInput>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutBookNestedInput>;
  transactionTypes?: InputMaybe<TransactionTypeUpdateManyWithoutBookNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutGlAccountsInput = {
  accountTypes?: InputMaybe<AccountTypeUpdateManyWithoutBookNestedInput>;
  activeCurrencies?: InputMaybe<CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput>;
  bookEntities?: InputMaybe<BookEntityUpdateManyWithoutBookNestedInput>;
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutBookNestedInput>;
  envType?: InputMaybe<BookEnvironmentType>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<PeriodUpdateManyWithoutBookNestedInput>;
  primaryCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutPrimaryCurrencyBooksNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser?: InputMaybe<UserUpdateOneRequiredWithoutSystemUserBooksNestedInput>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutBookNestedInput>;
  transactionTypes?: InputMaybe<TransactionTypeUpdateManyWithoutBookNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutPeriodsInput = {
  accountTypes?: InputMaybe<AccountTypeUpdateManyWithoutBookNestedInput>;
  activeCurrencies?: InputMaybe<CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput>;
  bookEntities?: InputMaybe<BookEntityUpdateManyWithoutBookNestedInput>;
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutBookNestedInput>;
  envType?: InputMaybe<BookEnvironmentType>;
  glAccounts?: InputMaybe<GlAccountUpdateManyWithoutBookNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primaryCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutPrimaryCurrencyBooksNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser?: InputMaybe<UserUpdateOneRequiredWithoutSystemUserBooksNestedInput>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutBookNestedInput>;
  transactionTypes?: InputMaybe<TransactionTypeUpdateManyWithoutBookNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutPrimaryCurrencyInput = {
  accountTypes?: InputMaybe<AccountTypeUpdateManyWithoutBookNestedInput>;
  activeCurrencies?: InputMaybe<CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput>;
  bookEntities?: InputMaybe<BookEntityUpdateManyWithoutBookNestedInput>;
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutBookNestedInput>;
  envType?: InputMaybe<BookEnvironmentType>;
  glAccounts?: InputMaybe<GlAccountUpdateManyWithoutBookNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<PeriodUpdateManyWithoutBookNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser?: InputMaybe<UserUpdateOneRequiredWithoutSystemUserBooksNestedInput>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutBookNestedInput>;
  transactionTypes?: InputMaybe<TransactionTypeUpdateManyWithoutBookNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutSystemUserInput = {
  accountTypes?: InputMaybe<AccountTypeUpdateManyWithoutBookNestedInput>;
  activeCurrencies?: InputMaybe<CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput>;
  bookEntities?: InputMaybe<BookEntityUpdateManyWithoutBookNestedInput>;
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutBookNestedInput>;
  envType?: InputMaybe<BookEnvironmentType>;
  glAccounts?: InputMaybe<GlAccountUpdateManyWithoutBookNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<PeriodUpdateManyWithoutBookNestedInput>;
  primaryCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutPrimaryCurrencyBooksNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutBookNestedInput>;
  transactionTypes?: InputMaybe<TransactionTypeUpdateManyWithoutBookNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutTransactionLinesInput = {
  accountTypes?: InputMaybe<AccountTypeUpdateManyWithoutBookNestedInput>;
  activeCurrencies?: InputMaybe<CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput>;
  bookEntities?: InputMaybe<BookEntityUpdateManyWithoutBookNestedInput>;
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutBookNestedInput>;
  envType?: InputMaybe<BookEnvironmentType>;
  glAccounts?: InputMaybe<GlAccountUpdateManyWithoutBookNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<PeriodUpdateManyWithoutBookNestedInput>;
  primaryCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutPrimaryCurrencyBooksNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser?: InputMaybe<UserUpdateOneRequiredWithoutSystemUserBooksNestedInput>;
  transactionTypes?: InputMaybe<TransactionTypeUpdateManyWithoutBookNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutTransactionTypesInput = {
  accountTypes?: InputMaybe<AccountTypeUpdateManyWithoutBookNestedInput>;
  activeCurrencies?: InputMaybe<CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput>;
  bookEntities?: InputMaybe<BookEntityUpdateManyWithoutBookNestedInput>;
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutBookNestedInput>;
  envType?: InputMaybe<BookEnvironmentType>;
  glAccounts?: InputMaybe<GlAccountUpdateManyWithoutBookNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<PeriodUpdateManyWithoutBookNestedInput>;
  primaryCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutPrimaryCurrencyBooksNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser?: InputMaybe<UserUpdateOneRequiredWithoutSystemUserBooksNestedInput>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutBookNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutBookNestedInput>;
};

export type BookUpdateWithoutTransactionsInput = {
  accountTypes?: InputMaybe<AccountTypeUpdateManyWithoutBookNestedInput>;
  activeCurrencies?: InputMaybe<CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput>;
  bookEntities?: InputMaybe<BookEntityUpdateManyWithoutBookNestedInput>;
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutBookNestedInput>;
  envType?: InputMaybe<BookEnvironmentType>;
  glAccounts?: InputMaybe<GlAccountUpdateManyWithoutBookNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<PeriodUpdateManyWithoutBookNestedInput>;
  primaryCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutPrimaryCurrencyBooksNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  systemUser?: InputMaybe<UserUpdateOneRequiredWithoutSystemUserBooksNestedInput>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutBookNestedInput>;
  transactionTypes?: InputMaybe<TransactionTypeUpdateManyWithoutBookNestedInput>;
};

export type BookUpsertWithWhereUniqueWithoutActiveCurrenciesInput = {
  create: BookCreateWithoutActiveCurrenciesInput;
  update: BookUpdateWithoutActiveCurrenciesInput;
  where: BookWhereUniqueInput;
};

export type BookUpsertWithWhereUniqueWithoutPrimaryCurrencyInput = {
  create: BookCreateWithoutPrimaryCurrencyInput;
  update: BookUpdateWithoutPrimaryCurrencyInput;
  where: BookWhereUniqueInput;
};

export type BookUpsertWithWhereUniqueWithoutSystemUserInput = {
  create: BookCreateWithoutSystemUserInput;
  update: BookUpdateWithoutSystemUserInput;
  where: BookWhereUniqueInput;
};

export type BookUpsertWithoutAccountTypesInput = {
  create: BookCreateWithoutAccountTypesInput;
  update: BookUpdateWithoutAccountTypesInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutBookEntitiesInput = {
  create: BookCreateWithoutBookEntitiesInput;
  update: BookUpdateWithoutBookEntitiesInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutConnectedBookUsersInput = {
  create: BookCreateWithoutConnectedBookUsersInput;
  update: BookUpdateWithoutConnectedBookUsersInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutGlAccountsInput = {
  create: BookCreateWithoutGlAccountsInput;
  update: BookUpdateWithoutGlAccountsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutPeriodsInput = {
  create: BookCreateWithoutPeriodsInput;
  update: BookUpdateWithoutPeriodsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutTransactionLinesInput = {
  create: BookCreateWithoutTransactionLinesInput;
  update: BookUpdateWithoutTransactionLinesInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutTransactionTypesInput = {
  create: BookCreateWithoutTransactionTypesInput;
  update: BookUpdateWithoutTransactionTypesInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUpsertWithoutTransactionsInput = {
  create: BookCreateWithoutTransactionsInput;
  update: BookUpdateWithoutTransactionsInput;
  where?: InputMaybe<BookWhereInput>;
};

export type BookUser = {
  book: Book;
  bookId: Scalars['String']['output'];
  bookRole: Role;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  createdBookEntities?: Maybe<Array<BookEntity>>;
  createdGlAccounts?: Maybe<Array<GlAccount>>;
  createdPeriods?: Maybe<Array<Period>>;
  createdTransactions?: Maybe<Array<Transaction>>;
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type BookUserCountAggregate = {
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  bookRole: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type BookUserCreateManyBookInput = {
  bookRole: Role;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['String']['input'];
};

export type BookUserCreateManyBookInputEnvelope = {
  data: Array<BookUserCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookUserCreateManyUserInput = {
  bookId: Scalars['String']['input'];
  bookRole: Role;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookUserCreateManyUserInputEnvelope = {
  data: Array<BookUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookUserCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<BookUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookUserCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<BookUserCreateWithoutBookInput>>;
  createMany?: InputMaybe<BookUserCreateManyBookInputEnvelope>;
};

export type BookUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<BookUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BookUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<BookUserCreateManyUserInputEnvelope>;
};

export type BookUserCreateNestedOneWithoutCreatedBookEntitiesInput = {
  connect?: InputMaybe<BookUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookUserCreateOrConnectWithoutCreatedBookEntitiesInput>;
  create?: InputMaybe<BookUserCreateWithoutCreatedBookEntitiesInput>;
};

export type BookUserCreateNestedOneWithoutCreatedGlAccountsInput = {
  connect?: InputMaybe<BookUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookUserCreateOrConnectWithoutCreatedGlAccountsInput>;
  create?: InputMaybe<BookUserCreateWithoutCreatedGlAccountsInput>;
};

export type BookUserCreateNestedOneWithoutCreatedPeriodsInput = {
  connect?: InputMaybe<BookUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookUserCreateOrConnectWithoutCreatedPeriodsInput>;
  create?: InputMaybe<BookUserCreateWithoutCreatedPeriodsInput>;
};

export type BookUserCreateNestedOneWithoutCreatedTransactionsInput = {
  connect?: InputMaybe<BookUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookUserCreateOrConnectWithoutCreatedTransactionsInput>;
  create?: InputMaybe<BookUserCreateWithoutCreatedTransactionsInput>;
};

export type BookUserCreateOrConnectWithoutBookInput = {
  create: BookUserCreateWithoutBookInput;
  where: BookUserWhereUniqueInput;
};

export type BookUserCreateOrConnectWithoutCreatedBookEntitiesInput = {
  create: BookUserCreateWithoutCreatedBookEntitiesInput;
  where: BookUserWhereUniqueInput;
};

export type BookUserCreateOrConnectWithoutCreatedGlAccountsInput = {
  create: BookUserCreateWithoutCreatedGlAccountsInput;
  where: BookUserWhereUniqueInput;
};

export type BookUserCreateOrConnectWithoutCreatedPeriodsInput = {
  create: BookUserCreateWithoutCreatedPeriodsInput;
  where: BookUserWhereUniqueInput;
};

export type BookUserCreateOrConnectWithoutCreatedTransactionsInput = {
  create: BookUserCreateWithoutCreatedTransactionsInput;
  where: BookUserWhereUniqueInput;
};

export type BookUserCreateOrConnectWithoutUserInput = {
  create: BookUserCreateWithoutUserInput;
  where: BookUserWhereUniqueInput;
};

export type BookUserCreateWithoutBookInput = {
  bookRole: Role;
  createdBookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutCreatedByInput>;
  createdGlAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutCreatedByInput>;
  createdPeriods?: InputMaybe<PeriodCreateNestedManyWithoutCreatedByInput>;
  createdTransactions?: InputMaybe<TransactionCreateNestedManyWithoutCreatedByInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  user: UserCreateNestedOneWithoutConnectedBookUsersInput;
};

export type BookUserCreateWithoutCreatedBookEntitiesInput = {
  book: BookCreateNestedOneWithoutConnectedBookUsersInput;
  bookRole: Role;
  createdGlAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutCreatedByInput>;
  createdPeriods?: InputMaybe<PeriodCreateNestedManyWithoutCreatedByInput>;
  createdTransactions?: InputMaybe<TransactionCreateNestedManyWithoutCreatedByInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  user: UserCreateNestedOneWithoutConnectedBookUsersInput;
};

export type BookUserCreateWithoutCreatedGlAccountsInput = {
  book: BookCreateNestedOneWithoutConnectedBookUsersInput;
  bookRole: Role;
  createdBookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutCreatedByInput>;
  createdPeriods?: InputMaybe<PeriodCreateNestedManyWithoutCreatedByInput>;
  createdTransactions?: InputMaybe<TransactionCreateNestedManyWithoutCreatedByInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  user: UserCreateNestedOneWithoutConnectedBookUsersInput;
};

export type BookUserCreateWithoutCreatedPeriodsInput = {
  book: BookCreateNestedOneWithoutConnectedBookUsersInput;
  bookRole: Role;
  createdBookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutCreatedByInput>;
  createdGlAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutCreatedByInput>;
  createdTransactions?: InputMaybe<TransactionCreateNestedManyWithoutCreatedByInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  user: UserCreateNestedOneWithoutConnectedBookUsersInput;
};

export type BookUserCreateWithoutCreatedTransactionsInput = {
  book: BookCreateNestedOneWithoutConnectedBookUsersInput;
  bookRole: Role;
  createdBookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutCreatedByInput>;
  createdGlAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutCreatedByInput>;
  createdPeriods?: InputMaybe<PeriodCreateNestedManyWithoutCreatedByInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  user: UserCreateNestedOneWithoutConnectedBookUsersInput;
};

export type BookUserCreateWithoutUserInput = {
  book: BookCreateNestedOneWithoutConnectedBookUsersInput;
  bookRole: Role;
  createdBookEntities?: InputMaybe<BookEntityCreateNestedManyWithoutCreatedByInput>;
  createdGlAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutCreatedByInput>;
  createdPeriods?: InputMaybe<PeriodCreateNestedManyWithoutCreatedByInput>;
  createdTransactions?: InputMaybe<TransactionCreateNestedManyWithoutCreatedByInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookUserFindInput = {
  bookId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type BookUserListRelationFilter = {
  every?: InputMaybe<BookUserWhereInput>;
  none?: InputMaybe<BookUserWhereInput>;
  some?: InputMaybe<BookUserWhereInput>;
};

export type BookUserMaxAggregate = {
  bookId?: Maybe<Scalars['String']['output']>;
  bookRole?: Maybe<Role>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BookUserMinAggregate = {
  bookId?: Maybe<Scalars['String']['output']>;
  bookRole?: Maybe<Role>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BookUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookUserOrderByWithRelationInput = {
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  bookRole?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBookEntities?: InputMaybe<BookEntityOrderByRelationAggregateInput>;
  createdGlAccounts?: InputMaybe<GlAccountOrderByRelationAggregateInput>;
  createdPeriods?: InputMaybe<PeriodOrderByRelationAggregateInput>;
  createdTransactions?: InputMaybe<TransactionOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type BookUserRelationFilter = {
  is?: InputMaybe<BookUserWhereInput>;
  isNot?: InputMaybe<BookUserWhereInput>;
};

export enum BookUserScalarFieldEnum {
  BookId = 'bookId',
  BookRole = 'bookRole',
  CreatedAt = 'createdAt',
  Id = 'id',
  IsActive = 'isActive',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type BookUserScalarWhereInput = {
  AND?: InputMaybe<Array<BookUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<BookUserScalarWhereInput>>;
  OR?: InputMaybe<Array<BookUserScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  bookRole?: InputMaybe<EnumRoleFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookUserUpdateManyMutationInput = {
  bookRole?: InputMaybe<Role>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookUserUpdateManyWithWhereWithoutBookInput = {
  data: BookUserUpdateManyMutationInput;
  where: BookUserScalarWhereInput;
};

export type BookUserUpdateManyWithWhereWithoutUserInput = {
  data: BookUserUpdateManyMutationInput;
  where: BookUserScalarWhereInput;
};

export type BookUserUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<BookUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookUserCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<BookUserCreateWithoutBookInput>>;
  createMany?: InputMaybe<BookUserCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<BookUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookUserWhereUniqueInput>>;
  set?: InputMaybe<Array<BookUserWhereUniqueInput>>;
  update?: InputMaybe<Array<BookUserUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<BookUserUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<BookUserUpsertWithWhereUniqueWithoutBookInput>>;
};

export type BookUserUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<BookUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BookUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BookUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<BookUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<BookUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BookUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BookUserWhereUniqueInput>>;
  set?: InputMaybe<Array<BookUserWhereUniqueInput>>;
  update?: InputMaybe<Array<BookUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<BookUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<BookUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type BookUserUpdateOneRequiredWithoutCreatedBookEntitiesNestedInput = {
  connect?: InputMaybe<BookUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookUserCreateOrConnectWithoutCreatedBookEntitiesInput>;
  create?: InputMaybe<BookUserCreateWithoutCreatedBookEntitiesInput>;
  update?: InputMaybe<BookUserUpdateToOneWithWhereWithoutCreatedBookEntitiesInput>;
  upsert?: InputMaybe<BookUserUpsertWithoutCreatedBookEntitiesInput>;
};

export type BookUserUpdateOneRequiredWithoutCreatedGlAccountsNestedInput = {
  connect?: InputMaybe<BookUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookUserCreateOrConnectWithoutCreatedGlAccountsInput>;
  create?: InputMaybe<BookUserCreateWithoutCreatedGlAccountsInput>;
  update?: InputMaybe<BookUserUpdateToOneWithWhereWithoutCreatedGlAccountsInput>;
  upsert?: InputMaybe<BookUserUpsertWithoutCreatedGlAccountsInput>;
};

export type BookUserUpdateOneRequiredWithoutCreatedPeriodsNestedInput = {
  connect?: InputMaybe<BookUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookUserCreateOrConnectWithoutCreatedPeriodsInput>;
  create?: InputMaybe<BookUserCreateWithoutCreatedPeriodsInput>;
  update?: InputMaybe<BookUserUpdateToOneWithWhereWithoutCreatedPeriodsInput>;
  upsert?: InputMaybe<BookUserUpsertWithoutCreatedPeriodsInput>;
};

export type BookUserUpdateOneRequiredWithoutCreatedTransactionsNestedInput = {
  connect?: InputMaybe<BookUserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BookUserCreateOrConnectWithoutCreatedTransactionsInput>;
  create?: InputMaybe<BookUserCreateWithoutCreatedTransactionsInput>;
  update?: InputMaybe<BookUserUpdateToOneWithWhereWithoutCreatedTransactionsInput>;
  upsert?: InputMaybe<BookUserUpsertWithoutCreatedTransactionsInput>;
};

export type BookUserUpdateToOneWithWhereWithoutCreatedBookEntitiesInput = {
  data: BookUserUpdateWithoutCreatedBookEntitiesInput;
  where?: InputMaybe<BookUserWhereInput>;
};

export type BookUserUpdateToOneWithWhereWithoutCreatedGlAccountsInput = {
  data: BookUserUpdateWithoutCreatedGlAccountsInput;
  where?: InputMaybe<BookUserWhereInput>;
};

export type BookUserUpdateToOneWithWhereWithoutCreatedPeriodsInput = {
  data: BookUserUpdateWithoutCreatedPeriodsInput;
  where?: InputMaybe<BookUserWhereInput>;
};

export type BookUserUpdateToOneWithWhereWithoutCreatedTransactionsInput = {
  data: BookUserUpdateWithoutCreatedTransactionsInput;
  where?: InputMaybe<BookUserWhereInput>;
};

export type BookUserUpdateWithWhereUniqueWithoutBookInput = {
  data: BookUserUpdateWithoutBookInput;
  where: BookUserWhereUniqueInput;
};

export type BookUserUpdateWithWhereUniqueWithoutUserInput = {
  data: BookUserUpdateWithoutUserInput;
  where: BookUserWhereUniqueInput;
};

export type BookUserUpdateWithoutBookInput = {
  bookRole?: InputMaybe<Role>;
  createdBookEntities?: InputMaybe<BookEntityUpdateManyWithoutCreatedByNestedInput>;
  createdGlAccounts?: InputMaybe<GlAccountUpdateManyWithoutCreatedByNestedInput>;
  createdPeriods?: InputMaybe<PeriodUpdateManyWithoutCreatedByNestedInput>;
  createdTransactions?: InputMaybe<TransactionUpdateManyWithoutCreatedByNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConnectedBookUsersNestedInput>;
};

export type BookUserUpdateWithoutCreatedBookEntitiesInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutConnectedBookUsersNestedInput>;
  bookRole?: InputMaybe<Role>;
  createdGlAccounts?: InputMaybe<GlAccountUpdateManyWithoutCreatedByNestedInput>;
  createdPeriods?: InputMaybe<PeriodUpdateManyWithoutCreatedByNestedInput>;
  createdTransactions?: InputMaybe<TransactionUpdateManyWithoutCreatedByNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConnectedBookUsersNestedInput>;
};

export type BookUserUpdateWithoutCreatedGlAccountsInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutConnectedBookUsersNestedInput>;
  bookRole?: InputMaybe<Role>;
  createdBookEntities?: InputMaybe<BookEntityUpdateManyWithoutCreatedByNestedInput>;
  createdPeriods?: InputMaybe<PeriodUpdateManyWithoutCreatedByNestedInput>;
  createdTransactions?: InputMaybe<TransactionUpdateManyWithoutCreatedByNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConnectedBookUsersNestedInput>;
};

export type BookUserUpdateWithoutCreatedPeriodsInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutConnectedBookUsersNestedInput>;
  bookRole?: InputMaybe<Role>;
  createdBookEntities?: InputMaybe<BookEntityUpdateManyWithoutCreatedByNestedInput>;
  createdGlAccounts?: InputMaybe<GlAccountUpdateManyWithoutCreatedByNestedInput>;
  createdTransactions?: InputMaybe<TransactionUpdateManyWithoutCreatedByNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConnectedBookUsersNestedInput>;
};

export type BookUserUpdateWithoutCreatedTransactionsInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutConnectedBookUsersNestedInput>;
  bookRole?: InputMaybe<Role>;
  createdBookEntities?: InputMaybe<BookEntityUpdateManyWithoutCreatedByNestedInput>;
  createdGlAccounts?: InputMaybe<GlAccountUpdateManyWithoutCreatedByNestedInput>;
  createdPeriods?: InputMaybe<PeriodUpdateManyWithoutCreatedByNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutConnectedBookUsersNestedInput>;
};

export type BookUserUpdateWithoutUserInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutConnectedBookUsersNestedInput>;
  bookRole?: InputMaybe<Role>;
  createdBookEntities?: InputMaybe<BookEntityUpdateManyWithoutCreatedByNestedInput>;
  createdGlAccounts?: InputMaybe<GlAccountUpdateManyWithoutCreatedByNestedInput>;
  createdPeriods?: InputMaybe<PeriodUpdateManyWithoutCreatedByNestedInput>;
  createdTransactions?: InputMaybe<TransactionUpdateManyWithoutCreatedByNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BookUserUpsertWithWhereUniqueWithoutBookInput = {
  create: BookUserCreateWithoutBookInput;
  update: BookUserUpdateWithoutBookInput;
  where: BookUserWhereUniqueInput;
};

export type BookUserUpsertWithWhereUniqueWithoutUserInput = {
  create: BookUserCreateWithoutUserInput;
  update: BookUserUpdateWithoutUserInput;
  where: BookUserWhereUniqueInput;
};

export type BookUserUpsertWithoutCreatedBookEntitiesInput = {
  create: BookUserCreateWithoutCreatedBookEntitiesInput;
  update: BookUserUpdateWithoutCreatedBookEntitiesInput;
  where?: InputMaybe<BookUserWhereInput>;
};

export type BookUserUpsertWithoutCreatedGlAccountsInput = {
  create: BookUserCreateWithoutCreatedGlAccountsInput;
  update: BookUserUpdateWithoutCreatedGlAccountsInput;
  where?: InputMaybe<BookUserWhereInput>;
};

export type BookUserUpsertWithoutCreatedPeriodsInput = {
  create: BookUserCreateWithoutCreatedPeriodsInput;
  update: BookUserUpdateWithoutCreatedPeriodsInput;
  where?: InputMaybe<BookUserWhereInput>;
};

export type BookUserUpsertWithoutCreatedTransactionsInput = {
  create: BookUserCreateWithoutCreatedTransactionsInput;
  update: BookUserUpdateWithoutCreatedTransactionsInput;
  where?: InputMaybe<BookUserWhereInput>;
};

export type BookUserUserIdBookIdCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type BookUserWhereInput = {
  AND?: InputMaybe<Array<BookUserWhereInput>>;
  NOT?: InputMaybe<Array<BookUserWhereInput>>;
  OR?: InputMaybe<Array<BookUserWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  bookRole?: InputMaybe<EnumRoleFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBookEntities?: InputMaybe<BookEntityListRelationFilter>;
  createdGlAccounts?: InputMaybe<GlAccountListRelationFilter>;
  createdPeriods?: InputMaybe<PeriodListRelationFilter>;
  createdTransactions?: InputMaybe<TransactionListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BookUserWhereUniqueInput = {
  AND?: InputMaybe<Array<BookUserWhereInput>>;
  NOT?: InputMaybe<Array<BookUserWhereInput>>;
  OR?: InputMaybe<Array<BookUserWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  bookRole?: InputMaybe<EnumRoleFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBookEntities?: InputMaybe<BookEntityListRelationFilter>;
  createdGlAccounts?: InputMaybe<GlAccountListRelationFilter>;
  createdPeriods?: InputMaybe<PeriodListRelationFilter>;
  createdTransactions?: InputMaybe<TransactionListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  userId_bookId?: InputMaybe<BookUserUserIdBookIdCompoundUniqueInput>;
};

export type BookWhereInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  accountTypes?: InputMaybe<AccountTypeListRelationFilter>;
  activeCurrencies?: InputMaybe<CurrencyListRelationFilter>;
  bookEntities?: InputMaybe<BookEntityListRelationFilter>;
  bookNumber?: InputMaybe<IntFilter>;
  connectedBookUsers?: InputMaybe<BookUserListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  envType?: InputMaybe<EnumBookEnvironmentTypeFilter>;
  glAccounts?: InputMaybe<GlAccountListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  isSeeded?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  periods?: InputMaybe<PeriodListRelationFilter>;
  primaryCurrency?: InputMaybe<CurrencyRelationFilter>;
  primaryCurrencyCode?: InputMaybe<StringFilter>;
  system?: InputMaybe<BoolFilter>;
  systemUser?: InputMaybe<UserRelationFilter>;
  systemUserId?: InputMaybe<StringFilter>;
  transactionLines?: InputMaybe<TransactionLineListRelationFilter>;
  transactionTypes?: InputMaybe<TransactionTypeListRelationFilter>;
  transactions?: InputMaybe<TransactionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BookWhereUniqueInput = {
  AND?: InputMaybe<Array<BookWhereInput>>;
  NOT?: InputMaybe<Array<BookWhereInput>>;
  OR?: InputMaybe<Array<BookWhereInput>>;
  accountTypes?: InputMaybe<AccountTypeListRelationFilter>;
  activeCurrencies?: InputMaybe<CurrencyListRelationFilter>;
  bookEntities?: InputMaybe<BookEntityListRelationFilter>;
  bookNumber?: InputMaybe<IntFilter>;
  connectedBookUsers?: InputMaybe<BookUserListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  envType?: InputMaybe<EnumBookEnvironmentTypeFilter>;
  glAccounts?: InputMaybe<GlAccountListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<BoolFilter>;
  isSeeded?: InputMaybe<BoolFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  periods?: InputMaybe<PeriodListRelationFilter>;
  primaryCurrency?: InputMaybe<CurrencyRelationFilter>;
  primaryCurrencyCode?: InputMaybe<StringFilter>;
  system?: InputMaybe<BoolFilter>;
  systemUser?: InputMaybe<UserRelationFilter>;
  systemUserId?: InputMaybe<StringFilter>;
  transactionLines?: InputMaybe<TransactionLineListRelationFilter>;
  transactionTypes?: InputMaybe<TransactionTypeListRelationFilter>;
  transactions?: InputMaybe<TransactionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type ConnectBookResult = {
  book: BaseBookResult;
  bookId: Scalars['String']['output'];
  bookRole: Role;
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  userId: Scalars['String']['output'];
};

export type Country = {
  code: Scalars['String']['output'];
  countryCurrencyCode?: Maybe<Scalars['String']['output']>;
  countryPrimaryCurrency?: Maybe<Currency>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  /** used by top level for killing countries */
  isActive: Scalars['Boolean']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  timezones?: Maybe<Array<Scalars['String']['output']>>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type CountryCountAggregate = {
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  countryCurrencyCode: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Int']['output'];
  locale: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  timezones: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CountryCreateManyCountryPrimaryCurrencyInput = {
  code: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  timezones?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CountryCreateManyCountryPrimaryCurrencyInputEnvelope = {
  data: Array<CountryCreateManyCountryPrimaryCurrencyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CountryCreateNestedManyWithoutCountryPrimaryCurrencyInput = {
  connect?: InputMaybe<Array<CountryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CountryCreateOrConnectWithoutCountryPrimaryCurrencyInput>>;
  create?: InputMaybe<Array<CountryCreateWithoutCountryPrimaryCurrencyInput>>;
  createMany?: InputMaybe<CountryCreateManyCountryPrimaryCurrencyInputEnvelope>;
};

export type CountryCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<CountryCreateWithoutUsersInput>;
};

export type CountryCreateOrConnectWithoutCountryPrimaryCurrencyInput = {
  create: CountryCreateWithoutCountryPrimaryCurrencyInput;
  where: CountryWhereUniqueInput;
};

export type CountryCreateOrConnectWithoutUsersInput = {
  create: CountryCreateWithoutUsersInput;
  where: CountryWhereUniqueInput;
};

export type CountryCreateWithoutCountryPrimaryCurrencyInput = {
  code: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  timezones?: InputMaybe<Array<Scalars['String']['input']>>;
  users?: InputMaybe<UserCreateNestedManyWithoutUserCountryInput>;
};

export type CountryCreateWithoutUsersInput = {
  code: Scalars['String']['input'];
  countryPrimaryCurrency?: InputMaybe<CurrencyCreateNestedOneWithoutCountriesInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  timezones?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CountryListRelationFilter = {
  every?: InputMaybe<CountryWhereInput>;
  none?: InputMaybe<CountryWhereInput>;
  some?: InputMaybe<CountryWhereInput>;
};

export type CountryMaxAggregate = {
  code?: Maybe<Scalars['String']['output']>;
  countryCurrencyCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CountryMinAggregate = {
  code?: Maybe<Scalars['String']['output']>;
  countryCurrencyCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CountryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CountryOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  countryCurrencyCode?: InputMaybe<SortOrderInput>;
  countryPrimaryCurrency?: InputMaybe<CurrencyOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  locale?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  timezones?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type CountryRelationFilter = {
  is?: InputMaybe<CountryWhereInput>;
  isNot?: InputMaybe<CountryWhereInput>;
};

export type CountryScalarWhereInput = {
  AND?: InputMaybe<Array<CountryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CountryScalarWhereInput>>;
  OR?: InputMaybe<Array<CountryScalarWhereInput>>;
  code?: InputMaybe<StringFilter>;
  countryCurrencyCode?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  locale?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  timezones?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CountryUpdateManyMutationInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  timezones?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CountryUpdateManyWithWhereWithoutCountryPrimaryCurrencyInput = {
  data: CountryUpdateManyMutationInput;
  where: CountryScalarWhereInput;
};

export type CountryUpdateManyWithoutCountryPrimaryCurrencyNestedInput = {
  connect?: InputMaybe<Array<CountryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CountryCreateOrConnectWithoutCountryPrimaryCurrencyInput>>;
  create?: InputMaybe<Array<CountryCreateWithoutCountryPrimaryCurrencyInput>>;
  createMany?: InputMaybe<CountryCreateManyCountryPrimaryCurrencyInputEnvelope>;
  delete?: InputMaybe<Array<CountryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CountryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CountryWhereUniqueInput>>;
  set?: InputMaybe<Array<CountryWhereUniqueInput>>;
  update?: InputMaybe<Array<CountryUpdateWithWhereUniqueWithoutCountryPrimaryCurrencyInput>>;
  updateMany?: InputMaybe<Array<CountryUpdateManyWithWhereWithoutCountryPrimaryCurrencyInput>>;
  upsert?: InputMaybe<Array<CountryUpsertWithWhereUniqueWithoutCountryPrimaryCurrencyInput>>;
};

export type CountryUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<CountryCreateWithoutUsersInput>;
  update?: InputMaybe<CountryUpdateToOneWithWhereWithoutUsersInput>;
  upsert?: InputMaybe<CountryUpsertWithoutUsersInput>;
};

export type CountryUpdateToOneWithWhereWithoutUsersInput = {
  data: CountryUpdateWithoutUsersInput;
  where?: InputMaybe<CountryWhereInput>;
};

export type CountryUpdateWithWhereUniqueWithoutCountryPrimaryCurrencyInput = {
  data: CountryUpdateWithoutCountryPrimaryCurrencyInput;
  where: CountryWhereUniqueInput;
};

export type CountryUpdateWithoutCountryPrimaryCurrencyInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  timezones?: InputMaybe<Array<Scalars['String']['input']>>;
  users?: InputMaybe<UserUpdateManyWithoutUserCountryNestedInput>;
};

export type CountryUpdateWithoutUsersInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  countryPrimaryCurrency?: InputMaybe<CurrencyUpdateOneWithoutCountriesNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  timezones?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CountryUpsertWithWhereUniqueWithoutCountryPrimaryCurrencyInput = {
  create: CountryCreateWithoutCountryPrimaryCurrencyInput;
  update: CountryUpdateWithoutCountryPrimaryCurrencyInput;
  where: CountryWhereUniqueInput;
};

export type CountryUpsertWithoutUsersInput = {
  create: CountryCreateWithoutUsersInput;
  update: CountryUpdateWithoutUsersInput;
  where?: InputMaybe<CountryWhereInput>;
};

export type CountryWhereInput = {
  AND?: InputMaybe<Array<CountryWhereInput>>;
  NOT?: InputMaybe<Array<CountryWhereInput>>;
  OR?: InputMaybe<Array<CountryWhereInput>>;
  code?: InputMaybe<StringFilter>;
  countryCurrencyCode?: InputMaybe<StringNullableFilter>;
  countryPrimaryCurrency?: InputMaybe<CurrencyNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  locale?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  timezones?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type CountryWhereUniqueInput = {
  AND?: InputMaybe<Array<CountryWhereInput>>;
  NOT?: InputMaybe<Array<CountryWhereInput>>;
  OR?: InputMaybe<Array<CountryWhereInput>>;
  code?: InputMaybe<Scalars['String']['input']>;
  countryCurrencyCode?: InputMaybe<StringNullableFilter>;
  countryPrimaryCurrency?: InputMaybe<CurrencyNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<BoolFilter>;
  locale?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  timezones?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type Currency = {
  code: Scalars['String']['output'];
  countries?: Maybe<Array<Country>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  currencyFraction: Scalars['String']['output'];
  currencyFractionUnits: Scalars['Int']['output'];
  currencySymbol: Scalars['String']['output'];
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  /** used by top level for killing currencies */
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type CurrencyAvgAggregate = {
  currencyFractionUnits?: Maybe<Scalars['Float']['output']>;
};

export type CurrencyCountAggregate = {
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  currencyFraction: Scalars['Int']['output'];
  currencyFractionUnits: Scalars['Int']['output'];
  currencySymbol: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CurrencyCreateNestedManyWithoutActiveCurrencyBooksInput = {
  connect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CurrencyCreateOrConnectWithoutActiveCurrencyBooksInput>>;
  create?: InputMaybe<Array<CurrencyCreateWithoutActiveCurrencyBooksInput>>;
};

export type CurrencyCreateNestedOneWithoutCountriesInput = {
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CurrencyCreateOrConnectWithoutCountriesInput>;
  create?: InputMaybe<CurrencyCreateWithoutCountriesInput>;
};

export type CurrencyCreateNestedOneWithoutPrimaryCurrencyBooksInput = {
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CurrencyCreateOrConnectWithoutPrimaryCurrencyBooksInput>;
  create?: InputMaybe<CurrencyCreateWithoutPrimaryCurrencyBooksInput>;
};

export type CurrencyCreateNestedOneWithoutTransactionsInput = {
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CurrencyCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<CurrencyCreateWithoutTransactionsInput>;
};

export type CurrencyCreateOrConnectWithoutActiveCurrencyBooksInput = {
  create: CurrencyCreateWithoutActiveCurrencyBooksInput;
  where: CurrencyWhereUniqueInput;
};

export type CurrencyCreateOrConnectWithoutCountriesInput = {
  create: CurrencyCreateWithoutCountriesInput;
  where: CurrencyWhereUniqueInput;
};

export type CurrencyCreateOrConnectWithoutPrimaryCurrencyBooksInput = {
  create: CurrencyCreateWithoutPrimaryCurrencyBooksInput;
  where: CurrencyWhereUniqueInput;
};

export type CurrencyCreateOrConnectWithoutTransactionsInput = {
  create: CurrencyCreateWithoutTransactionsInput;
  where: CurrencyWhereUniqueInput;
};

export type CurrencyCreateWithoutActiveCurrencyBooksInput = {
  code: Scalars['String']['input'];
  countries?: InputMaybe<CountryCreateNestedManyWithoutCountryPrimaryCurrencyInput>;
  currencyFraction: Scalars['String']['input'];
  currencyFractionUnits?: InputMaybe<Scalars['Int']['input']>;
  currencySymbol: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  primaryCurrencyBooks?: InputMaybe<BookCreateNestedManyWithoutPrimaryCurrencyInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutTransactionCurrencyInput>;
};

export type CurrencyCreateWithoutCountriesInput = {
  activeCurrencyBooks?: InputMaybe<BookCreateNestedManyWithoutActiveCurrenciesInput>;
  code: Scalars['String']['input'];
  currencyFraction: Scalars['String']['input'];
  currencyFractionUnits?: InputMaybe<Scalars['Int']['input']>;
  currencySymbol: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  primaryCurrencyBooks?: InputMaybe<BookCreateNestedManyWithoutPrimaryCurrencyInput>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutTransactionCurrencyInput>;
};

export type CurrencyCreateWithoutPrimaryCurrencyBooksInput = {
  activeCurrencyBooks?: InputMaybe<BookCreateNestedManyWithoutActiveCurrenciesInput>;
  code: Scalars['String']['input'];
  countries?: InputMaybe<CountryCreateNestedManyWithoutCountryPrimaryCurrencyInput>;
  currencyFraction: Scalars['String']['input'];
  currencyFractionUnits?: InputMaybe<Scalars['Int']['input']>;
  currencySymbol: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutTransactionCurrencyInput>;
};

export type CurrencyCreateWithoutTransactionsInput = {
  activeCurrencyBooks?: InputMaybe<BookCreateNestedManyWithoutActiveCurrenciesInput>;
  code: Scalars['String']['input'];
  countries?: InputMaybe<CountryCreateNestedManyWithoutCountryPrimaryCurrencyInput>;
  currencyFraction: Scalars['String']['input'];
  currencyFractionUnits?: InputMaybe<Scalars['Int']['input']>;
  currencySymbol: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  primaryCurrencyBooks?: InputMaybe<BookCreateNestedManyWithoutPrimaryCurrencyInput>;
};

export type CurrencyListRelationFilter = {
  every?: InputMaybe<CurrencyWhereInput>;
  none?: InputMaybe<CurrencyWhereInput>;
  some?: InputMaybe<CurrencyWhereInput>;
};

export type CurrencyMaxAggregate = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currencyFraction?: Maybe<Scalars['String']['output']>;
  currencyFractionUnits?: Maybe<Scalars['Int']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CurrencyMinAggregate = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currencyFraction?: Maybe<Scalars['String']['output']>;
  currencyFractionUnits?: Maybe<Scalars['Int']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CurrencyNullableRelationFilter = {
  is?: InputMaybe<CurrencyWhereInput>;
  isNot?: InputMaybe<CurrencyWhereInput>;
};

export type CurrencyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CurrencyOrderByWithRelationInput = {
  activeCurrencyBooks?: InputMaybe<BookOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  countries?: InputMaybe<CountryOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  currencyFraction?: InputMaybe<SortOrder>;
  currencyFractionUnits?: InputMaybe<SortOrder>;
  currencySymbol?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isActive?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  primaryCurrencyBooks?: InputMaybe<BookOrderByRelationAggregateInput>;
  transactions?: InputMaybe<TransactionOrderByRelationAggregateInput>;
};

export type CurrencyRelationFilter = {
  is?: InputMaybe<CurrencyWhereInput>;
  isNot?: InputMaybe<CurrencyWhereInput>;
};

export enum CurrencyScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  CurrencyFraction = 'currencyFraction',
  CurrencyFractionUnits = 'currencyFractionUnits',
  CurrencySymbol = 'currencySymbol',
  Id = 'id',
  IsActive = 'isActive',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CurrencyScalarWhereInput = {
  AND?: InputMaybe<Array<CurrencyScalarWhereInput>>;
  NOT?: InputMaybe<Array<CurrencyScalarWhereInput>>;
  OR?: InputMaybe<Array<CurrencyScalarWhereInput>>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currencyFraction?: InputMaybe<StringFilter>;
  currencyFractionUnits?: InputMaybe<IntFilter>;
  currencySymbol?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CurrencySumAggregate = {
  currencyFractionUnits?: Maybe<Scalars['Int']['output']>;
};

export type CurrencyUpdateManyMutationInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  currencyFraction?: InputMaybe<Scalars['String']['input']>;
  currencyFractionUnits?: InputMaybe<Scalars['Int']['input']>;
  currencySymbol?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CurrencyUpdateManyWithWhereWithoutActiveCurrencyBooksInput = {
  data: CurrencyUpdateManyMutationInput;
  where: CurrencyScalarWhereInput;
};

export type CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput = {
  connect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CurrencyCreateOrConnectWithoutActiveCurrencyBooksInput>>;
  create?: InputMaybe<Array<CurrencyCreateWithoutActiveCurrencyBooksInput>>;
  delete?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CurrencyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  set?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  update?: InputMaybe<Array<CurrencyUpdateWithWhereUniqueWithoutActiveCurrencyBooksInput>>;
  updateMany?: InputMaybe<Array<CurrencyUpdateManyWithWhereWithoutActiveCurrencyBooksInput>>;
  upsert?: InputMaybe<Array<CurrencyUpsertWithWhereUniqueWithoutActiveCurrencyBooksInput>>;
};

export type CurrencyUpdateOneRequiredWithoutPrimaryCurrencyBooksNestedInput = {
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CurrencyCreateOrConnectWithoutPrimaryCurrencyBooksInput>;
  create?: InputMaybe<CurrencyCreateWithoutPrimaryCurrencyBooksInput>;
  update?: InputMaybe<CurrencyUpdateToOneWithWhereWithoutPrimaryCurrencyBooksInput>;
  upsert?: InputMaybe<CurrencyUpsertWithoutPrimaryCurrencyBooksInput>;
};

export type CurrencyUpdateOneRequiredWithoutTransactionsNestedInput = {
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CurrencyCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<CurrencyCreateWithoutTransactionsInput>;
  update?: InputMaybe<CurrencyUpdateToOneWithWhereWithoutTransactionsInput>;
  upsert?: InputMaybe<CurrencyUpsertWithoutTransactionsInput>;
};

export type CurrencyUpdateOneWithoutCountriesNestedInput = {
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CurrencyCreateOrConnectWithoutCountriesInput>;
  create?: InputMaybe<CurrencyCreateWithoutCountriesInput>;
  delete?: InputMaybe<CurrencyWhereInput>;
  disconnect?: InputMaybe<CurrencyWhereInput>;
  update?: InputMaybe<CurrencyUpdateToOneWithWhereWithoutCountriesInput>;
  upsert?: InputMaybe<CurrencyUpsertWithoutCountriesInput>;
};

export type CurrencyUpdateToOneWithWhereWithoutCountriesInput = {
  data: CurrencyUpdateWithoutCountriesInput;
  where?: InputMaybe<CurrencyWhereInput>;
};

export type CurrencyUpdateToOneWithWhereWithoutPrimaryCurrencyBooksInput = {
  data: CurrencyUpdateWithoutPrimaryCurrencyBooksInput;
  where?: InputMaybe<CurrencyWhereInput>;
};

export type CurrencyUpdateToOneWithWhereWithoutTransactionsInput = {
  data: CurrencyUpdateWithoutTransactionsInput;
  where?: InputMaybe<CurrencyWhereInput>;
};

export type CurrencyUpdateWithWhereUniqueWithoutActiveCurrencyBooksInput = {
  data: CurrencyUpdateWithoutActiveCurrencyBooksInput;
  where: CurrencyWhereUniqueInput;
};

export type CurrencyUpdateWithoutActiveCurrencyBooksInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  countries?: InputMaybe<CountryUpdateManyWithoutCountryPrimaryCurrencyNestedInput>;
  currencyFraction?: InputMaybe<Scalars['String']['input']>;
  currencyFractionUnits?: InputMaybe<Scalars['Int']['input']>;
  currencySymbol?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primaryCurrencyBooks?: InputMaybe<BookUpdateManyWithoutPrimaryCurrencyNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutTransactionCurrencyNestedInput>;
};

export type CurrencyUpdateWithoutCountriesInput = {
  activeCurrencyBooks?: InputMaybe<BookUpdateManyWithoutActiveCurrenciesNestedInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  currencyFraction?: InputMaybe<Scalars['String']['input']>;
  currencyFractionUnits?: InputMaybe<Scalars['Int']['input']>;
  currencySymbol?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primaryCurrencyBooks?: InputMaybe<BookUpdateManyWithoutPrimaryCurrencyNestedInput>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutTransactionCurrencyNestedInput>;
};

export type CurrencyUpdateWithoutPrimaryCurrencyBooksInput = {
  activeCurrencyBooks?: InputMaybe<BookUpdateManyWithoutActiveCurrenciesNestedInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  countries?: InputMaybe<CountryUpdateManyWithoutCountryPrimaryCurrencyNestedInput>;
  currencyFraction?: InputMaybe<Scalars['String']['input']>;
  currencyFractionUnits?: InputMaybe<Scalars['Int']['input']>;
  currencySymbol?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutTransactionCurrencyNestedInput>;
};

export type CurrencyUpdateWithoutTransactionsInput = {
  activeCurrencyBooks?: InputMaybe<BookUpdateManyWithoutActiveCurrenciesNestedInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  countries?: InputMaybe<CountryUpdateManyWithoutCountryPrimaryCurrencyNestedInput>;
  currencyFraction?: InputMaybe<Scalars['String']['input']>;
  currencyFractionUnits?: InputMaybe<Scalars['Int']['input']>;
  currencySymbol?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  primaryCurrencyBooks?: InputMaybe<BookUpdateManyWithoutPrimaryCurrencyNestedInput>;
};

export type CurrencyUpsertWithWhereUniqueWithoutActiveCurrencyBooksInput = {
  create: CurrencyCreateWithoutActiveCurrencyBooksInput;
  update: CurrencyUpdateWithoutActiveCurrencyBooksInput;
  where: CurrencyWhereUniqueInput;
};

export type CurrencyUpsertWithoutCountriesInput = {
  create: CurrencyCreateWithoutCountriesInput;
  update: CurrencyUpdateWithoutCountriesInput;
  where?: InputMaybe<CurrencyWhereInput>;
};

export type CurrencyUpsertWithoutPrimaryCurrencyBooksInput = {
  create: CurrencyCreateWithoutPrimaryCurrencyBooksInput;
  update: CurrencyUpdateWithoutPrimaryCurrencyBooksInput;
  where?: InputMaybe<CurrencyWhereInput>;
};

export type CurrencyUpsertWithoutTransactionsInput = {
  create: CurrencyCreateWithoutTransactionsInput;
  update: CurrencyUpdateWithoutTransactionsInput;
  where?: InputMaybe<CurrencyWhereInput>;
};

export type CurrencyWhereInput = {
  AND?: InputMaybe<Array<CurrencyWhereInput>>;
  NOT?: InputMaybe<Array<CurrencyWhereInput>>;
  OR?: InputMaybe<Array<CurrencyWhereInput>>;
  activeCurrencyBooks?: InputMaybe<BookListRelationFilter>;
  code?: InputMaybe<StringFilter>;
  countries?: InputMaybe<CountryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currencyFraction?: InputMaybe<StringFilter>;
  currencyFractionUnits?: InputMaybe<IntFilter>;
  currencySymbol?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  primaryCurrencyBooks?: InputMaybe<BookListRelationFilter>;
  transactions?: InputMaybe<TransactionListRelationFilter>;
};

export type CurrencyWhereUniqueInput = {
  AND?: InputMaybe<Array<CurrencyWhereInput>>;
  NOT?: InputMaybe<Array<CurrencyWhereInput>>;
  OR?: InputMaybe<Array<CurrencyWhereInput>>;
  activeCurrencyBooks?: InputMaybe<BookListRelationFilter>;
  code?: InputMaybe<Scalars['String']['input']>;
  countries?: InputMaybe<CountryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  currencyFraction?: InputMaybe<StringFilter>;
  currencyFractionUnits?: InputMaybe<IntFilter>;
  currencySymbol?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  primaryCurrencyBooks?: InputMaybe<BookListRelationFilter>;
  transactions?: InputMaybe<TransactionListRelationFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EditAccountTypeInput = {
  accountCategory?: InputMaybe<AccountTypeCategory>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditBookInput = {
  activeCurrencies?: InputMaybe<CurrencyUpdateManyWithoutActiveCurrencyBooksNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isSeeded?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EditBookUserInput = {
  bookRole?: InputMaybe<Role>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EditTransactionTypeInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  normalBalanceClass?: InputMaybe<NormalBalanceGlClass>;
};

export enum EntityType {
  Customer = 'CUSTOMER',
  Employer = 'EMPLOYER',
  General = 'GENERAL',
  Tax = 'TAX',
  Utility = 'UTILITY',
  Vendor = 'VENDOR'
}

export enum EntryClass {
  InboundPayment = 'INBOUND_PAYMENT',
  Journal = 'JOURNAL',
  OutboundPayment = 'OUTBOUND_PAYMENT',
  Purchase = 'PURCHASE',
  Sale = 'SALE'
}

export type EnumAccountTypeCategoryFilter = {
  equals?: InputMaybe<AccountTypeCategory>;
  in?: InputMaybe<Array<AccountTypeCategory>>;
  not?: InputMaybe<NestedEnumAccountTypeCategoryFilter>;
  notIn?: InputMaybe<Array<AccountTypeCategory>>;
};

export type EnumBookEnvironmentTypeFilter = {
  equals?: InputMaybe<BookEnvironmentType>;
  in?: InputMaybe<Array<BookEnvironmentType>>;
  not?: InputMaybe<NestedEnumBookEnvironmentTypeFilter>;
  notIn?: InputMaybe<Array<BookEnvironmentType>>;
};

export type EnumEntityTypeFilter = {
  equals?: InputMaybe<EntityType>;
  in?: InputMaybe<Array<EntityType>>;
  not?: InputMaybe<NestedEnumEntityTypeFilter>;
  notIn?: InputMaybe<Array<EntityType>>;
};

export type EnumEntryClassFilter = {
  equals?: InputMaybe<EntryClass>;
  in?: InputMaybe<Array<EntryClass>>;
  not?: InputMaybe<NestedEnumEntryClassFilter>;
  notIn?: InputMaybe<Array<EntryClass>>;
};

export type EnumNormalBalanceGlClassFilter = {
  equals?: InputMaybe<NormalBalanceGlClass>;
  in?: InputMaybe<Array<NormalBalanceGlClass>>;
  not?: InputMaybe<NestedEnumNormalBalanceGlClassFilter>;
  notIn?: InputMaybe<Array<NormalBalanceGlClass>>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type FindJobQueueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type GeneratePeriodsInput = {
  toYear: Scalars['Int']['input'];
};

export type GeneratedPeriodsResponse = {
  bookId: Scalars['String']['output'];
  createdById: Scalars['String']['output'];
  existingCount: Scalars['Int']['output'];
  /** Number of Successful Results */
  successCount: Scalars['Int']['output'];
  throughYear: Scalars['Int']['output'];
};

export type GlAccount = {
  accountNumber: Scalars['Int']['output'];
  accountType: AccountType;
  accountTypeId: Scalars['String']['output'];
  book: Book;
  bookEntityDefaults?: Maybe<Array<BookEntity>>;
  bookId: Scalars['String']['output'];
  childAccounts?: Maybe<Array<GlAccount>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  createdBy: BookUser;
  createdById: Scalars['String']['output'];
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isExternal: Scalars['Boolean']['output'];
  isSummary: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<GlAccount>;
  parentNumber?: Maybe<Scalars['Int']['output']>;
  system: Scalars['Boolean']['output'];
  transactionLines?: Maybe<Array<TransactionLine>>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type GlAccountAvgAggregate = {
  accountNumber?: Maybe<Scalars['Float']['output']>;
  parentNumber?: Maybe<Scalars['Float']['output']>;
};

export type GlAccountBookIdAccountNumberCompoundUniqueInput = {
  accountNumber: Scalars['Int']['input'];
  bookId: Scalars['String']['input'];
};

export type GlAccountBookIdNameCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type GlAccountCountAggregate = {
  _all: Scalars['Int']['output'];
  accountNumber: Scalars['Int']['output'];
  accountTypeId: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdById: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Int']['output'];
  isExternal: Scalars['Int']['output'];
  isSummary: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  parentNumber: Scalars['Int']['output'];
  system: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GlAccountCreateManyAccountTypeInput = {
  accountNumber: Scalars['Int']['input'];
  bookId: Scalars['String']['input'];
  createdById: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parentNumber?: InputMaybe<Scalars['Int']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlAccountCreateManyAccountTypeInputEnvelope = {
  data: Array<GlAccountCreateManyAccountTypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlAccountCreateManyBookInput = {
  accountNumber: Scalars['Int']['input'];
  accountTypeId: Scalars['String']['input'];
  createdById: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parentNumber?: InputMaybe<Scalars['Int']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlAccountCreateManyBookInputEnvelope = {
  data: Array<GlAccountCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlAccountCreateManyCreatedByInput = {
  accountNumber: Scalars['Int']['input'];
  accountTypeId: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parentNumber?: InputMaybe<Scalars['Int']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlAccountCreateManyCreatedByInputEnvelope = {
  data: Array<GlAccountCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlAccountCreateManyParentInput = {
  accountNumber: Scalars['Int']['input'];
  accountTypeId: Scalars['String']['input'];
  createdById: Scalars['String']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlAccountCreateManyParentInputEnvelope = {
  data: Array<GlAccountCreateManyParentInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlAccountCreateNestedManyWithoutAccountTypeInput = {
  connect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GlAccountCreateOrConnectWithoutAccountTypeInput>>;
  create?: InputMaybe<Array<GlAccountCreateWithoutAccountTypeInput>>;
  createMany?: InputMaybe<GlAccountCreateManyAccountTypeInputEnvelope>;
};

export type GlAccountCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GlAccountCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<GlAccountCreateWithoutBookInput>>;
  createMany?: InputMaybe<GlAccountCreateManyBookInputEnvelope>;
};

export type GlAccountCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GlAccountCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<GlAccountCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<GlAccountCreateManyCreatedByInputEnvelope>;
};

export type GlAccountCreateNestedManyWithoutParentInput = {
  connect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GlAccountCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<GlAccountCreateWithoutParentInput>>;
  createMany?: InputMaybe<GlAccountCreateManyParentInputEnvelope>;
};

export type GlAccountCreateNestedOneWithoutBookEntityDefaultsInput = {
  connect?: InputMaybe<GlAccountWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GlAccountCreateOrConnectWithoutBookEntityDefaultsInput>;
  create?: InputMaybe<GlAccountCreateWithoutBookEntityDefaultsInput>;
};

export type GlAccountCreateNestedOneWithoutChildAccountsInput = {
  connect?: InputMaybe<GlAccountWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GlAccountCreateOrConnectWithoutChildAccountsInput>;
  create?: InputMaybe<GlAccountCreateWithoutChildAccountsInput>;
};

export type GlAccountCreateNestedOneWithoutTransactionLinesInput = {
  connect?: InputMaybe<GlAccountWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GlAccountCreateOrConnectWithoutTransactionLinesInput>;
  create?: InputMaybe<GlAccountCreateWithoutTransactionLinesInput>;
};

export type GlAccountCreateOrConnectWithoutAccountTypeInput = {
  create: GlAccountCreateWithoutAccountTypeInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountCreateOrConnectWithoutBookEntityDefaultsInput = {
  create: GlAccountCreateWithoutBookEntityDefaultsInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountCreateOrConnectWithoutBookInput = {
  create: GlAccountCreateWithoutBookInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountCreateOrConnectWithoutChildAccountsInput = {
  create: GlAccountCreateWithoutChildAccountsInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountCreateOrConnectWithoutCreatedByInput = {
  create: GlAccountCreateWithoutCreatedByInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountCreateOrConnectWithoutParentInput = {
  create: GlAccountCreateWithoutParentInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountCreateOrConnectWithoutTransactionLinesInput = {
  create: GlAccountCreateWithoutTransactionLinesInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountCreateWithoutAccountTypeInput = {
  accountNumber: Scalars['Int']['input'];
  book: BookCreateNestedOneWithoutGlAccountsInput;
  bookEntityDefaults?: InputMaybe<BookEntityCreateNestedManyWithoutDefaultAccountInput>;
  childAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutParentInput>;
  createdBy: BookUserCreateNestedOneWithoutCreatedGlAccountsInput;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<GlAccountCreateNestedOneWithoutChildAccountsInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutGlAccountInput>;
};

export type GlAccountCreateWithoutBookEntityDefaultsInput = {
  accountNumber: Scalars['Int']['input'];
  accountType: AccountTypeCreateNestedOneWithoutGlAccountsInput;
  book: BookCreateNestedOneWithoutGlAccountsInput;
  childAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutParentInput>;
  createdBy: BookUserCreateNestedOneWithoutCreatedGlAccountsInput;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<GlAccountCreateNestedOneWithoutChildAccountsInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutGlAccountInput>;
};

export type GlAccountCreateWithoutBookInput = {
  accountNumber: Scalars['Int']['input'];
  accountType: AccountTypeCreateNestedOneWithoutGlAccountsInput;
  bookEntityDefaults?: InputMaybe<BookEntityCreateNestedManyWithoutDefaultAccountInput>;
  childAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutParentInput>;
  createdBy: BookUserCreateNestedOneWithoutCreatedGlAccountsInput;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<GlAccountCreateNestedOneWithoutChildAccountsInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutGlAccountInput>;
};

export type GlAccountCreateWithoutChildAccountsInput = {
  accountNumber: Scalars['Int']['input'];
  accountType: AccountTypeCreateNestedOneWithoutGlAccountsInput;
  book: BookCreateNestedOneWithoutGlAccountsInput;
  bookEntityDefaults?: InputMaybe<BookEntityCreateNestedManyWithoutDefaultAccountInput>;
  createdBy: BookUserCreateNestedOneWithoutCreatedGlAccountsInput;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<GlAccountCreateNestedOneWithoutChildAccountsInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutGlAccountInput>;
};

export type GlAccountCreateWithoutCreatedByInput = {
  accountNumber: Scalars['Int']['input'];
  accountType: AccountTypeCreateNestedOneWithoutGlAccountsInput;
  book: BookCreateNestedOneWithoutGlAccountsInput;
  bookEntityDefaults?: InputMaybe<BookEntityCreateNestedManyWithoutDefaultAccountInput>;
  childAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutParentInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<GlAccountCreateNestedOneWithoutChildAccountsInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutGlAccountInput>;
};

export type GlAccountCreateWithoutParentInput = {
  accountNumber: Scalars['Int']['input'];
  accountType: AccountTypeCreateNestedOneWithoutGlAccountsInput;
  book: BookCreateNestedOneWithoutGlAccountsInput;
  bookEntityDefaults?: InputMaybe<BookEntityCreateNestedManyWithoutDefaultAccountInput>;
  childAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutParentInput>;
  createdBy: BookUserCreateNestedOneWithoutCreatedGlAccountsInput;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineCreateNestedManyWithoutGlAccountInput>;
};

export type GlAccountCreateWithoutTransactionLinesInput = {
  accountNumber: Scalars['Int']['input'];
  accountType: AccountTypeCreateNestedOneWithoutGlAccountsInput;
  book: BookCreateNestedOneWithoutGlAccountsInput;
  bookEntityDefaults?: InputMaybe<BookEntityCreateNestedManyWithoutDefaultAccountInput>;
  childAccounts?: InputMaybe<GlAccountCreateNestedManyWithoutParentInput>;
  createdBy: BookUserCreateNestedOneWithoutCreatedGlAccountsInput;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<GlAccountCreateNestedOneWithoutChildAccountsInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlAccountIdBookIdCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type GlAccountListRelationFilter = {
  every?: InputMaybe<GlAccountWhereInput>;
  none?: InputMaybe<GlAccountWhereInput>;
  some?: InputMaybe<GlAccountWhereInput>;
};

export type GlAccountMaxAggregate = {
  accountNumber?: Maybe<Scalars['Int']['output']>;
  accountTypeId?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isExternal?: Maybe<Scalars['Boolean']['output']>;
  isSummary?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentNumber?: Maybe<Scalars['Int']['output']>;
  system?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GlAccountMinAggregate = {
  accountNumber?: Maybe<Scalars['Int']['output']>;
  accountTypeId?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isExternal?: Maybe<Scalars['Boolean']['output']>;
  isSummary?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parentNumber?: Maybe<Scalars['Int']['output']>;
  system?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GlAccountNullableRelationFilter = {
  is?: InputMaybe<GlAccountWhereInput>;
  isNot?: InputMaybe<GlAccountWhereInput>;
};

export type GlAccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GlAccountRelationFilter = {
  is?: InputMaybe<GlAccountWhereInput>;
  isNot?: InputMaybe<GlAccountWhereInput>;
};

export type GlAccountScalarWhereInput = {
  AND?: InputMaybe<Array<GlAccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<GlAccountScalarWhereInput>>;
  OR?: InputMaybe<Array<GlAccountScalarWhereInput>>;
  accountNumber?: InputMaybe<IntFilter>;
  accountTypeId?: InputMaybe<StringFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  isExternal?: InputMaybe<BoolFilter>;
  isSummary?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  parentNumber?: InputMaybe<IntNullableFilter>;
  system?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GlAccountSumAggregate = {
  accountNumber?: Maybe<Scalars['Int']['output']>;
  parentNumber?: Maybe<Scalars['Int']['output']>;
};

export type GlAccountUpdateManyMutationInput = {
  accountNumber?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlAccountUpdateManyWithWhereWithoutAccountTypeInput = {
  data: GlAccountUpdateManyMutationInput;
  where: GlAccountScalarWhereInput;
};

export type GlAccountUpdateManyWithWhereWithoutBookInput = {
  data: GlAccountUpdateManyMutationInput;
  where: GlAccountScalarWhereInput;
};

export type GlAccountUpdateManyWithWhereWithoutCreatedByInput = {
  data: GlAccountUpdateManyMutationInput;
  where: GlAccountScalarWhereInput;
};

export type GlAccountUpdateManyWithWhereWithoutParentInput = {
  data: GlAccountUpdateManyMutationInput;
  where: GlAccountScalarWhereInput;
};

export type GlAccountUpdateManyWithoutAccountTypeNestedInput = {
  connect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GlAccountCreateOrConnectWithoutAccountTypeInput>>;
  create?: InputMaybe<Array<GlAccountCreateWithoutAccountTypeInput>>;
  createMany?: InputMaybe<GlAccountCreateManyAccountTypeInputEnvelope>;
  delete?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GlAccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  set?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  update?: InputMaybe<Array<GlAccountUpdateWithWhereUniqueWithoutAccountTypeInput>>;
  updateMany?: InputMaybe<Array<GlAccountUpdateManyWithWhereWithoutAccountTypeInput>>;
  upsert?: InputMaybe<Array<GlAccountUpsertWithWhereUniqueWithoutAccountTypeInput>>;
};

export type GlAccountUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GlAccountCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<GlAccountCreateWithoutBookInput>>;
  createMany?: InputMaybe<GlAccountCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GlAccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  set?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  update?: InputMaybe<Array<GlAccountUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<GlAccountUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<GlAccountUpsertWithWhereUniqueWithoutBookInput>>;
};

export type GlAccountUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GlAccountCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<GlAccountCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<GlAccountCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GlAccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  set?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  update?: InputMaybe<Array<GlAccountUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<GlAccountUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<GlAccountUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type GlAccountUpdateManyWithoutParentNestedInput = {
  connect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GlAccountCreateOrConnectWithoutParentInput>>;
  create?: InputMaybe<Array<GlAccountCreateWithoutParentInput>>;
  createMany?: InputMaybe<GlAccountCreateManyParentInputEnvelope>;
  delete?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GlAccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  set?: InputMaybe<Array<GlAccountWhereUniqueInput>>;
  update?: InputMaybe<Array<GlAccountUpdateWithWhereUniqueWithoutParentInput>>;
  updateMany?: InputMaybe<Array<GlAccountUpdateManyWithWhereWithoutParentInput>>;
  upsert?: InputMaybe<Array<GlAccountUpsertWithWhereUniqueWithoutParentInput>>;
};

export type GlAccountUpdateOneRequiredWithoutTransactionLinesNestedInput = {
  connect?: InputMaybe<GlAccountWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GlAccountCreateOrConnectWithoutTransactionLinesInput>;
  create?: InputMaybe<GlAccountCreateWithoutTransactionLinesInput>;
  update?: InputMaybe<GlAccountUpdateToOneWithWhereWithoutTransactionLinesInput>;
  upsert?: InputMaybe<GlAccountUpsertWithoutTransactionLinesInput>;
};

export type GlAccountUpdateOneWithoutBookEntityDefaultsNestedInput = {
  connect?: InputMaybe<GlAccountWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GlAccountCreateOrConnectWithoutBookEntityDefaultsInput>;
  create?: InputMaybe<GlAccountCreateWithoutBookEntityDefaultsInput>;
  delete?: InputMaybe<GlAccountWhereInput>;
  disconnect?: InputMaybe<GlAccountWhereInput>;
  update?: InputMaybe<GlAccountUpdateToOneWithWhereWithoutBookEntityDefaultsInput>;
  upsert?: InputMaybe<GlAccountUpsertWithoutBookEntityDefaultsInput>;
};

export type GlAccountUpdateOneWithoutChildAccountsNestedInput = {
  connect?: InputMaybe<GlAccountWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GlAccountCreateOrConnectWithoutChildAccountsInput>;
  create?: InputMaybe<GlAccountCreateWithoutChildAccountsInput>;
  delete?: InputMaybe<GlAccountWhereInput>;
  disconnect?: InputMaybe<GlAccountWhereInput>;
  update?: InputMaybe<GlAccountUpdateToOneWithWhereWithoutChildAccountsInput>;
  upsert?: InputMaybe<GlAccountUpsertWithoutChildAccountsInput>;
};

export type GlAccountUpdateToOneWithWhereWithoutBookEntityDefaultsInput = {
  data: GlAccountUpdateWithoutBookEntityDefaultsInput;
  where?: InputMaybe<GlAccountWhereInput>;
};

export type GlAccountUpdateToOneWithWhereWithoutChildAccountsInput = {
  data: GlAccountUpdateWithoutChildAccountsInput;
  where?: InputMaybe<GlAccountWhereInput>;
};

export type GlAccountUpdateToOneWithWhereWithoutTransactionLinesInput = {
  data: GlAccountUpdateWithoutTransactionLinesInput;
  where?: InputMaybe<GlAccountWhereInput>;
};

export type GlAccountUpdateWithWhereUniqueWithoutAccountTypeInput = {
  data: GlAccountUpdateWithoutAccountTypeInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountUpdateWithWhereUniqueWithoutBookInput = {
  data: GlAccountUpdateWithoutBookInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: GlAccountUpdateWithoutCreatedByInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountUpdateWithWhereUniqueWithoutParentInput = {
  data: GlAccountUpdateWithoutParentInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountUpdateWithoutAccountTypeInput = {
  accountNumber?: InputMaybe<Scalars['Int']['input']>;
  book?: InputMaybe<BookUpdateOneRequiredWithoutGlAccountsNestedInput>;
  bookEntityDefaults?: InputMaybe<BookEntityUpdateManyWithoutDefaultAccountNestedInput>;
  childAccounts?: InputMaybe<GlAccountUpdateManyWithoutParentNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedGlAccountsNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<GlAccountUpdateOneWithoutChildAccountsNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutGlAccountNestedInput>;
};

export type GlAccountUpdateWithoutBookEntityDefaultsInput = {
  accountNumber?: InputMaybe<Scalars['Int']['input']>;
  accountType?: InputMaybe<AccountTypeUpdateOneRequiredWithoutGlAccountsNestedInput>;
  book?: InputMaybe<BookUpdateOneRequiredWithoutGlAccountsNestedInput>;
  childAccounts?: InputMaybe<GlAccountUpdateManyWithoutParentNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedGlAccountsNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<GlAccountUpdateOneWithoutChildAccountsNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutGlAccountNestedInput>;
};

export type GlAccountUpdateWithoutBookInput = {
  accountNumber?: InputMaybe<Scalars['Int']['input']>;
  accountType?: InputMaybe<AccountTypeUpdateOneRequiredWithoutGlAccountsNestedInput>;
  bookEntityDefaults?: InputMaybe<BookEntityUpdateManyWithoutDefaultAccountNestedInput>;
  childAccounts?: InputMaybe<GlAccountUpdateManyWithoutParentNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedGlAccountsNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<GlAccountUpdateOneWithoutChildAccountsNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutGlAccountNestedInput>;
};

export type GlAccountUpdateWithoutChildAccountsInput = {
  accountNumber?: InputMaybe<Scalars['Int']['input']>;
  accountType?: InputMaybe<AccountTypeUpdateOneRequiredWithoutGlAccountsNestedInput>;
  book?: InputMaybe<BookUpdateOneRequiredWithoutGlAccountsNestedInput>;
  bookEntityDefaults?: InputMaybe<BookEntityUpdateManyWithoutDefaultAccountNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedGlAccountsNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<GlAccountUpdateOneWithoutChildAccountsNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutGlAccountNestedInput>;
};

export type GlAccountUpdateWithoutCreatedByInput = {
  accountNumber?: InputMaybe<Scalars['Int']['input']>;
  accountType?: InputMaybe<AccountTypeUpdateOneRequiredWithoutGlAccountsNestedInput>;
  book?: InputMaybe<BookUpdateOneRequiredWithoutGlAccountsNestedInput>;
  bookEntityDefaults?: InputMaybe<BookEntityUpdateManyWithoutDefaultAccountNestedInput>;
  childAccounts?: InputMaybe<GlAccountUpdateManyWithoutParentNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<GlAccountUpdateOneWithoutChildAccountsNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutGlAccountNestedInput>;
};

export type GlAccountUpdateWithoutParentInput = {
  accountNumber?: InputMaybe<Scalars['Int']['input']>;
  accountType?: InputMaybe<AccountTypeUpdateOneRequiredWithoutGlAccountsNestedInput>;
  book?: InputMaybe<BookUpdateOneRequiredWithoutGlAccountsNestedInput>;
  bookEntityDefaults?: InputMaybe<BookEntityUpdateManyWithoutDefaultAccountNestedInput>;
  childAccounts?: InputMaybe<GlAccountUpdateManyWithoutParentNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedGlAccountsNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactionLines?: InputMaybe<TransactionLineUpdateManyWithoutGlAccountNestedInput>;
};

export type GlAccountUpdateWithoutTransactionLinesInput = {
  accountNumber?: InputMaybe<Scalars['Int']['input']>;
  accountType?: InputMaybe<AccountTypeUpdateOneRequiredWithoutGlAccountsNestedInput>;
  book?: InputMaybe<BookUpdateOneRequiredWithoutGlAccountsNestedInput>;
  bookEntityDefaults?: InputMaybe<BookEntityUpdateManyWithoutDefaultAccountNestedInput>;
  childAccounts?: InputMaybe<GlAccountUpdateManyWithoutParentNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedGlAccountsNestedInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isExternal?: InputMaybe<Scalars['Boolean']['input']>;
  isSummary?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<GlAccountUpdateOneWithoutChildAccountsNestedInput>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlAccountUpsertWithWhereUniqueWithoutAccountTypeInput = {
  create: GlAccountCreateWithoutAccountTypeInput;
  update: GlAccountUpdateWithoutAccountTypeInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountUpsertWithWhereUniqueWithoutBookInput = {
  create: GlAccountCreateWithoutBookInput;
  update: GlAccountUpdateWithoutBookInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: GlAccountCreateWithoutCreatedByInput;
  update: GlAccountUpdateWithoutCreatedByInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountUpsertWithWhereUniqueWithoutParentInput = {
  create: GlAccountCreateWithoutParentInput;
  update: GlAccountUpdateWithoutParentInput;
  where: GlAccountWhereUniqueInput;
};

export type GlAccountUpsertWithoutBookEntityDefaultsInput = {
  create: GlAccountCreateWithoutBookEntityDefaultsInput;
  update: GlAccountUpdateWithoutBookEntityDefaultsInput;
  where?: InputMaybe<GlAccountWhereInput>;
};

export type GlAccountUpsertWithoutChildAccountsInput = {
  create: GlAccountCreateWithoutChildAccountsInput;
  update: GlAccountUpdateWithoutChildAccountsInput;
  where?: InputMaybe<GlAccountWhereInput>;
};

export type GlAccountUpsertWithoutTransactionLinesInput = {
  create: GlAccountCreateWithoutTransactionLinesInput;
  update: GlAccountUpdateWithoutTransactionLinesInput;
  where?: InputMaybe<GlAccountWhereInput>;
};

export type GlAccountWhereInput = {
  AND?: InputMaybe<Array<GlAccountWhereInput>>;
  NOT?: InputMaybe<Array<GlAccountWhereInput>>;
  OR?: InputMaybe<Array<GlAccountWhereInput>>;
  accountNumber?: InputMaybe<IntFilter>;
  accountType?: InputMaybe<AccountTypeRelationFilter>;
  accountTypeId?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookEntityDefaults?: InputMaybe<BookEntityListRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  childAccounts?: InputMaybe<GlAccountListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<BookUserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BoolFilter>;
  isExternal?: InputMaybe<BoolFilter>;
  isSummary?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<GlAccountNullableRelationFilter>;
  parentNumber?: InputMaybe<IntNullableFilter>;
  system?: InputMaybe<BoolFilter>;
  transactionLines?: InputMaybe<TransactionLineListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GlAccountWhereUniqueInput = {
  AND?: InputMaybe<Array<GlAccountWhereInput>>;
  NOT?: InputMaybe<Array<GlAccountWhereInput>>;
  OR?: InputMaybe<Array<GlAccountWhereInput>>;
  accountNumber?: InputMaybe<IntFilter>;
  accountType?: InputMaybe<AccountTypeRelationFilter>;
  accountTypeId?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookEntityDefaults?: InputMaybe<BookEntityListRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  bookId_accountNumber?: InputMaybe<GlAccountBookIdAccountNumberCompoundUniqueInput>;
  bookId_name?: InputMaybe<GlAccountBookIdNameCompoundUniqueInput>;
  childAccounts?: InputMaybe<GlAccountListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<BookUserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_bookId?: InputMaybe<GlAccountIdBookIdCompoundUniqueInput>;
  isActive?: InputMaybe<BoolFilter>;
  isExternal?: InputMaybe<BoolFilter>;
  isSummary?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<GlAccountNullableRelationFilter>;
  parentNumber?: InputMaybe<IntNullableFilter>;
  system?: InputMaybe<BoolFilter>;
  transactionLines?: InputMaybe<TransactionLineListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JobQueueApi = {
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  dailyCheck: Scalars['Boolean']['output'];
  defaultMaxAttempts: Scalars['Int']['output'];
  hourlyCheck: Scalars['Boolean']['output'];
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  instances?: Maybe<Array<JobQueueInstanceApi>>;
  isBookQueue: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  priority: Scalars['Int']['output'];
  runAsUser: JobQueueApiUser;
  runAsUserId: Scalars['String']['output'];
  system: Scalars['Boolean']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type JobQueueApiUser = {
  birthday: Scalars['DateTime']['output'];
  canUseAnalyticsData: Scalars['Boolean']['output'];
  connectedBookUsers?: Maybe<Array<BookUser>>;
  countryCode: Scalars['String']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role: Role;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};

export type JobQueueInstanceApi = {
  attempts: Scalars['Int']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  createdByUserId: Scalars['String']['output'];
  error?: Maybe<Scalars['JSON']['output']>;
  failedAt?: Maybe<Scalars['DateTime']['output']>;
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  maxAttempts?: Maybe<Scalars['Int']['output']>;
  notBefore?: Maybe<Scalars['DateTime']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  priority: Scalars['Int']['output'];
  processedAt?: Maybe<Scalars['DateTime']['output']>;
  progress: Scalars['Int']['output'];
  queueKey: Scalars['String']['output'];
  result?: Maybe<Scalars['JSON']['output']>;
  runAt: Scalars['DateTime']['output'];
  sourceId: Scalars['String']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LogoutResponse = {
  email: Scalars['String']['output'];
  /** UUID From Token */
  uid: Scalars['String']['output'];
  /** User UUID Result */
  userId: Scalars['ID']['output'];
};

export type Mutation = {
  addBookNumberToUser: Array<ConnectBookResult>;
  clearActiveBook: AuthSession;
  createAccountType: AccountType;
  createBookUser: BookUser;
  createTransactionType: TransactionType;
  generatePeriods: GeneratedPeriodsResponse;
  logout: LogoutResponse;
  newProductionBook: Book;
  refreshSession: AuthSession;
  removeAccountType: AccountType;
  removeBook: Book;
  removeBookUser: BookUser;
  removeTransactionType: TransactionType;
  seedProductionBook: Book;
  setActiveBook: AuthSession;
  signin: SignInResponse;
  signup: User;
  triggerSystemQueues: TriggerQueuesResponse;
  updateAccountType: AccountType;
  updateBook: Book;
  updateBookUser: BookUser;
  updateTransactionType: TransactionType;
};


export type MutationAddBookNumberToUserArgs = {
  input: UserConnectBookNumberInput;
};


export type MutationCreateAccountTypeArgs = {
  input: NewAccountTypeInput;
};


export type MutationCreateBookUserArgs = {
  input: NewBookUserInput;
};


export type MutationCreateTransactionTypeArgs = {
  input: NewTransactionTypeInput;
};


export type MutationGeneratePeriodsArgs = {
  input: GeneratePeriodsInput;
};


export type MutationNewProductionBookArgs = {
  input: NewProductionBookInput;
};


export type MutationRemoveAccountTypeArgs = {
  input: AccountTypeFindInput;
};


export type MutationRemoveBookArgs = {
  input: BookFindInput;
};


export type MutationRemoveBookUserArgs = {
  input: BookUserFindInput;
};


export type MutationRemoveTransactionTypeArgs = {
  input: TransactionTypeFindInput;
};


export type MutationSeedProductionBookArgs = {
  id: Scalars['String']['input'];
};


export type MutationSetActiveBookArgs = {
  bookId: Scalars['String']['input'];
};


export type MutationSigninArgs = {
  input: LoginInput;
};


export type MutationSignupArgs = {
  data: RegisterUserInput;
};


export type MutationUpdateAccountTypeArgs = {
  get: AccountTypeFindInput;
  input: EditAccountTypeInput;
};


export type MutationUpdateBookArgs = {
  get: BookFindInput;
  input: EditBookInput;
};


export type MutationUpdateBookUserArgs = {
  get: BookUserFindInput;
  input: EditBookUserInput;
};


export type MutationUpdateTransactionTypeArgs = {
  get: TransactionTypeFindInput;
  input: EditTransactionTypeInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumAccountTypeCategoryFilter = {
  equals?: InputMaybe<AccountTypeCategory>;
  in?: InputMaybe<Array<AccountTypeCategory>>;
  not?: InputMaybe<NestedEnumAccountTypeCategoryFilter>;
  notIn?: InputMaybe<Array<AccountTypeCategory>>;
};

export type NestedEnumBookEnvironmentTypeFilter = {
  equals?: InputMaybe<BookEnvironmentType>;
  in?: InputMaybe<Array<BookEnvironmentType>>;
  not?: InputMaybe<NestedEnumBookEnvironmentTypeFilter>;
  notIn?: InputMaybe<Array<BookEnvironmentType>>;
};

export type NestedEnumEntityTypeFilter = {
  equals?: InputMaybe<EntityType>;
  in?: InputMaybe<Array<EntityType>>;
  not?: InputMaybe<NestedEnumEntityTypeFilter>;
  notIn?: InputMaybe<Array<EntityType>>;
};

export type NestedEnumEntryClassFilter = {
  equals?: InputMaybe<EntryClass>;
  in?: InputMaybe<Array<EntryClass>>;
  not?: InputMaybe<NestedEnumEntryClassFilter>;
  notIn?: InputMaybe<Array<EntryClass>>;
};

export type NestedEnumNormalBalanceGlClassFilter = {
  equals?: InputMaybe<NormalBalanceGlClass>;
  in?: InputMaybe<Array<NormalBalanceGlClass>>;
  not?: InputMaybe<NestedEnumNormalBalanceGlClassFilter>;
  notIn?: InputMaybe<Array<NormalBalanceGlClass>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NewAccountTypeInput = {
  accountCategory: AccountTypeCategory;
  name: Scalars['String']['input'];
};

export type NewBookUserInput = {
  bookId: Scalars['String']['input'];
  bookRole: Role;
  userId: Scalars['String']['input'];
};

export type NewProductionBookInput = {
  bookNumber?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  primaryCurrencyCode: Scalars['String']['input'];
};

export type NewTransactionTypeInput = {
  abbreviation: Scalars['String']['input'];
  entryClass: EntryClass;
  name: Scalars['String']['input'];
  normalBalanceClass: NormalBalanceGlClass;
};

export enum NormalBalanceGlClass {
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  None = 'NONE'
}

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Period = {
  book: Book;
  bookId: Scalars['String']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  createdBy: BookUser;
  createdById: Scalars['String']['output'];
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  locked: Scalars['Boolean']['output'];
  month: Scalars['Int']['output'];
  transactions?: Maybe<Array<Transaction>>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  year: Scalars['Int']['output'];
};

export type PeriodAvgAggregate = {
  month?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

export type PeriodBookIdYearMonthCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type PeriodCountAggregate = {
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdById: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  locked: Scalars['Int']['output'];
  month: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type PeriodCreateManyBookInput = {
  createdById: Scalars['String']['input'];
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type PeriodCreateManyBookInputEnvelope = {
  data: Array<PeriodCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PeriodCreateManyCreatedByInput = {
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type PeriodCreateManyCreatedByInputEnvelope = {
  data: Array<PeriodCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PeriodCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PeriodCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<PeriodCreateWithoutBookInput>>;
  createMany?: InputMaybe<PeriodCreateManyBookInputEnvelope>;
};

export type PeriodCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PeriodCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<PeriodCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<PeriodCreateManyCreatedByInputEnvelope>;
};

export type PeriodCreateNestedOneWithoutTransactionsInput = {
  connect?: InputMaybe<PeriodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeriodCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<PeriodCreateWithoutTransactionsInput>;
};

export type PeriodCreateOrConnectWithoutBookInput = {
  create: PeriodCreateWithoutBookInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodCreateOrConnectWithoutCreatedByInput = {
  create: PeriodCreateWithoutCreatedByInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodCreateOrConnectWithoutTransactionsInput = {
  create: PeriodCreateWithoutTransactionsInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodCreateWithoutBookInput = {
  createdBy: BookUserCreateNestedOneWithoutCreatedPeriodsInput;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  month: Scalars['Int']['input'];
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutPostingPeriodInput>;
  year: Scalars['Int']['input'];
};

export type PeriodCreateWithoutCreatedByInput = {
  book: BookCreateNestedOneWithoutPeriodsInput;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  month: Scalars['Int']['input'];
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutPostingPeriodInput>;
  year: Scalars['Int']['input'];
};

export type PeriodCreateWithoutTransactionsInput = {
  book: BookCreateNestedOneWithoutPeriodsInput;
  createdBy: BookUserCreateNestedOneWithoutCreatedPeriodsInput;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type PeriodFindInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type PeriodListRelationFilter = {
  every?: InputMaybe<PeriodWhereInput>;
  none?: InputMaybe<PeriodWhereInput>;
  some?: InputMaybe<PeriodWhereInput>;
};

export type PeriodMaxAggregate = {
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type PeriodMinAggregate = {
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type PeriodOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PeriodOrderByWithRelationInput = {
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<BookUserOrderByWithRelationInput>;
  createdById?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  month?: InputMaybe<SortOrder>;
  transactions?: InputMaybe<TransactionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type PeriodRelationFilter = {
  is?: InputMaybe<PeriodWhereInput>;
  isNot?: InputMaybe<PeriodWhereInput>;
};

export enum PeriodScalarFieldEnum {
  BookId = 'bookId',
  CreatedAt = 'createdAt',
  CreatedById = 'createdById',
  Id = 'id',
  Locked = 'locked',
  Month = 'month',
  UpdatedAt = 'updatedAt',
  Year = 'year'
}

export type PeriodScalarWhereInput = {
  AND?: InputMaybe<Array<PeriodScalarWhereInput>>;
  NOT?: InputMaybe<Array<PeriodScalarWhereInput>>;
  OR?: InputMaybe<Array<PeriodScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  locked?: InputMaybe<BoolFilter>;
  month?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<IntFilter>;
};

export type PeriodSumAggregate = {
  month?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type PeriodUpdateManyMutationInput = {
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type PeriodUpdateManyWithWhereWithoutBookInput = {
  data: PeriodUpdateManyMutationInput;
  where: PeriodScalarWhereInput;
};

export type PeriodUpdateManyWithWhereWithoutCreatedByInput = {
  data: PeriodUpdateManyMutationInput;
  where: PeriodScalarWhereInput;
};

export type PeriodUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PeriodCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<PeriodCreateWithoutBookInput>>;
  createMany?: InputMaybe<PeriodCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PeriodScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  set?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  update?: InputMaybe<Array<PeriodUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<PeriodUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<PeriodUpsertWithWhereUniqueWithoutBookInput>>;
};

export type PeriodUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PeriodCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<PeriodCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<PeriodCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PeriodScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  set?: InputMaybe<Array<PeriodWhereUniqueInput>>;
  update?: InputMaybe<Array<PeriodUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<PeriodUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<PeriodUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type PeriodUpdateOneRequiredWithoutTransactionsNestedInput = {
  connect?: InputMaybe<PeriodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PeriodCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<PeriodCreateWithoutTransactionsInput>;
  update?: InputMaybe<PeriodUpdateToOneWithWhereWithoutTransactionsInput>;
  upsert?: InputMaybe<PeriodUpsertWithoutTransactionsInput>;
};

export type PeriodUpdateToOneWithWhereWithoutTransactionsInput = {
  data: PeriodUpdateWithoutTransactionsInput;
  where?: InputMaybe<PeriodWhereInput>;
};

export type PeriodUpdateWithWhereUniqueWithoutBookInput = {
  data: PeriodUpdateWithoutBookInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: PeriodUpdateWithoutCreatedByInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodUpdateWithoutBookInput = {
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedPeriodsNestedInput>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutPostingPeriodNestedInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type PeriodUpdateWithoutCreatedByInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutPeriodsNestedInput>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutPostingPeriodNestedInput>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type PeriodUpdateWithoutTransactionsInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutPeriodsNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedPeriodsNestedInput>;
  locked?: InputMaybe<Scalars['Boolean']['input']>;
  month?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type PeriodUpsertWithWhereUniqueWithoutBookInput = {
  create: PeriodCreateWithoutBookInput;
  update: PeriodUpdateWithoutBookInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: PeriodCreateWithoutCreatedByInput;
  update: PeriodUpdateWithoutCreatedByInput;
  where: PeriodWhereUniqueInput;
};

export type PeriodUpsertWithoutTransactionsInput = {
  create: PeriodCreateWithoutTransactionsInput;
  update: PeriodUpdateWithoutTransactionsInput;
  where?: InputMaybe<PeriodWhereInput>;
};

export type PeriodWhereInput = {
  AND?: InputMaybe<Array<PeriodWhereInput>>;
  NOT?: InputMaybe<Array<PeriodWhereInput>>;
  OR?: InputMaybe<Array<PeriodWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<BookUserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  locked?: InputMaybe<BoolFilter>;
  month?: InputMaybe<IntFilter>;
  transactions?: InputMaybe<TransactionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<IntFilter>;
};

export type PeriodWhereUniqueInput = {
  AND?: InputMaybe<Array<PeriodWhereInput>>;
  NOT?: InputMaybe<Array<PeriodWhereInput>>;
  OR?: InputMaybe<Array<PeriodWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  bookId_year_month?: InputMaybe<PeriodBookIdYearMonthCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<BookUserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  locked?: InputMaybe<BoolFilter>;
  month?: InputMaybe<IntFilter>;
  transactions?: InputMaybe<TransactionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<IntFilter>;
};

export type Query = {
  activeBook: Book;
  book?: Maybe<Book>;
  books: Array<Book>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  currencies: Array<Currency>;
  currency?: Maybe<Currency>;
  currentSession: AuthSessionStatus;
  getAccountType?: Maybe<AccountType>;
  getBookUser?: Maybe<BookUser>;
  getJobQueue?: Maybe<JobQueueApi>;
  getPeriod?: Maybe<Period>;
  getTransactionType?: Maybe<TransactionType>;
  me: User;
  searchAccountTypes: Array<AccountType>;
  searchBookUsers: Array<BookUser>;
  searchPeriods: Array<Period>;
  searchTransactionTypes: Array<TransactionType>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryBookArgs = {
  input: BookFindInput;
};


export type QueryBooksArgs = {
  cursor?: InputMaybe<BookWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookWhereInput>;
};


export type QueryCountriesArgs = {
  input: CountryWhereInput;
};


export type QueryCountryArgs = {
  input: CountryWhereUniqueInput;
};


export type QueryCurrenciesArgs = {
  cursor?: InputMaybe<CurrencyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CurrencyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CurrencyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CurrencyWhereInput>;
};


export type QueryCurrencyArgs = {
  input: CurrencyWhereUniqueInput;
};


export type QueryGetAccountTypeArgs = {
  input: AccountTypeFindInput;
};


export type QueryGetBookUserArgs = {
  input: BookUserFindInput;
};


export type QueryGetJobQueueArgs = {
  input: FindJobQueueInput;
};


export type QueryGetPeriodArgs = {
  input: PeriodFindInput;
};


export type QueryGetTransactionTypeArgs = {
  input: TransactionTypeFindInput;
};


export type QuerySearchAccountTypesArgs = {
  cursor?: InputMaybe<AccountTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountTypeWhereInput>;
};


export type QuerySearchBookUsersArgs = {
  cursor?: InputMaybe<BookUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BookUserWhereInput>;
};


export type QuerySearchPeriodsArgs = {
  cursor?: InputMaybe<PeriodWhereUniqueInput>;
  distinct?: InputMaybe<Array<PeriodScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PeriodOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PeriodWhereInput>;
};


export type QuerySearchTransactionTypesArgs = {
  cursor?: InputMaybe<TransactionTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TransactionTypeWhereInput>;
};


export type QueryUserArgs = {
  input: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterUserInput = {
  birthday: Scalars['DateTime']['input'];
  canUseAnalyticsData?: InputMaybe<Scalars['Boolean']['input']>;
  connectBookNumber?: InputMaybe<Scalars['Int']['input']>;
  countryCode: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
};

export enum Role {
  Admin = 'ADMIN',
  ReadOnly = 'READ_ONLY',
  System = 'SYSTEM',
  User = 'USER'
}

export type SignInResponse = {
  access_token: Scalars['String']['output'];
  birthday: Scalars['DateTime']['output'];
  canUseAnalyticsData: Scalars['Boolean']['output'];
  countryCode: Scalars['String']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
  role: Role;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Transaction = {
  _count: TransactionCount;
  book: Book;
  bookId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: BookUser;
  createdById: Scalars['String']['output'];
  currencyCode: Scalars['String']['output'];
  exchangeRate: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  idReversalOf?: Maybe<Scalars['String']['output']>;
  isPosted: Scalars['Boolean']['output'];
  lines?: Maybe<Array<TransactionLine>>;
  memo: Scalars['String']['output'];
  originalDate: Scalars['DateTime']['output'];
  postingMonth: Scalars['Int']['output'];
  postingPeriod: Period;
  postingYear: Scalars['Int']['output'];
  reversalOf?: Maybe<Transaction>;
  reversedTransaction?: Maybe<Transaction>;
  tranDate: Scalars['DateTime']['output'];
  tranNumber: Scalars['Int']['output'];
  transactionCurrency: Currency;
  transactionType: TransactionType;
  transactionTypeAbbreviation: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TransactionAvgAggregate = {
  exchangeRate?: Maybe<Scalars['Float']['output']>;
  postingMonth?: Maybe<Scalars['Float']['output']>;
  postingYear?: Maybe<Scalars['Float']['output']>;
  tranNumber?: Maybe<Scalars['Float']['output']>;
};

export type TransactionBookIdTranNumberCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  tranNumber: Scalars['Int']['input'];
};

export type TransactionCount = {
  lines: Scalars['Int']['output'];
};

export type TransactionCountAggregate = {
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdById: Scalars['Int']['output'];
  currencyCode: Scalars['Int']['output'];
  exchangeRate: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  idReversalOf: Scalars['Int']['output'];
  isPosted: Scalars['Int']['output'];
  memo: Scalars['Int']['output'];
  originalDate: Scalars['Int']['output'];
  postingMonth: Scalars['Int']['output'];
  postingYear: Scalars['Int']['output'];
  tranDate: Scalars['Int']['output'];
  tranNumber: Scalars['Int']['output'];
  transactionTypeAbbreviation: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type TransactionCreateManyBookInput = {
  createdById: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  idReversalOf?: InputMaybe<Scalars['String']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  postingMonth: Scalars['Int']['input'];
  postingYear: Scalars['Int']['input'];
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionTypeAbbreviation: Scalars['String']['input'];
};

export type TransactionCreateManyBookInputEnvelope = {
  data: Array<TransactionCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionCreateManyCreatedByInput = {
  currencyCode: Scalars['String']['input'];
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  idReversalOf?: InputMaybe<Scalars['String']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  postingMonth: Scalars['Int']['input'];
  postingYear: Scalars['Int']['input'];
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionTypeAbbreviation: Scalars['String']['input'];
};

export type TransactionCreateManyCreatedByInputEnvelope = {
  data: Array<TransactionCreateManyCreatedByInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionCreateManyPostingPeriodInput = {
  createdById: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  idReversalOf?: InputMaybe<Scalars['String']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionTypeAbbreviation: Scalars['String']['input'];
};

export type TransactionCreateManyPostingPeriodInputEnvelope = {
  data: Array<TransactionCreateManyPostingPeriodInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionCreateManyTransactionCurrencyInput = {
  bookId: Scalars['String']['input'];
  createdById: Scalars['String']['input'];
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  idReversalOf?: InputMaybe<Scalars['String']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  postingMonth: Scalars['Int']['input'];
  postingYear: Scalars['Int']['input'];
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionTypeAbbreviation: Scalars['String']['input'];
};

export type TransactionCreateManyTransactionCurrencyInputEnvelope = {
  data: Array<TransactionCreateManyTransactionCurrencyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionCreateManyTransactionTypeInput = {
  createdById: Scalars['String']['input'];
  currencyCode: Scalars['String']['input'];
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  idReversalOf?: InputMaybe<Scalars['String']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  postingMonth: Scalars['Int']['input'];
  postingYear: Scalars['Int']['input'];
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
};

export type TransactionCreateManyTransactionTypeInputEnvelope = {
  data: Array<TransactionCreateManyTransactionTypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutBookInput>>;
  createMany?: InputMaybe<TransactionCreateManyBookInputEnvelope>;
};

export type TransactionCreateNestedManyWithoutCreatedByInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<TransactionCreateManyCreatedByInputEnvelope>;
};

export type TransactionCreateNestedManyWithoutPostingPeriodInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutPostingPeriodInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutPostingPeriodInput>>;
  createMany?: InputMaybe<TransactionCreateManyPostingPeriodInputEnvelope>;
};

export type TransactionCreateNestedManyWithoutTransactionCurrencyInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutTransactionCurrencyInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutTransactionCurrencyInput>>;
  createMany?: InputMaybe<TransactionCreateManyTransactionCurrencyInputEnvelope>;
};

export type TransactionCreateNestedManyWithoutTransactionTypeInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutTransactionTypeInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutTransactionTypeInput>>;
  createMany?: InputMaybe<TransactionCreateManyTransactionTypeInputEnvelope>;
};

export type TransactionCreateNestedOneWithoutLinesInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutLinesInput>;
  create?: InputMaybe<TransactionCreateWithoutLinesInput>;
};

export type TransactionCreateNestedOneWithoutReversalOfInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutReversalOfInput>;
  create?: InputMaybe<TransactionCreateWithoutReversalOfInput>;
};

export type TransactionCreateNestedOneWithoutReversedTransactionInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutReversedTransactionInput>;
  create?: InputMaybe<TransactionCreateWithoutReversedTransactionInput>;
};

export type TransactionCreateOrConnectWithoutBookInput = {
  create: TransactionCreateWithoutBookInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutCreatedByInput = {
  create: TransactionCreateWithoutCreatedByInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutLinesInput = {
  create: TransactionCreateWithoutLinesInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutPostingPeriodInput = {
  create: TransactionCreateWithoutPostingPeriodInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutReversalOfInput = {
  create: TransactionCreateWithoutReversalOfInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutReversedTransactionInput = {
  create: TransactionCreateWithoutReversedTransactionInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutTransactionCurrencyInput = {
  create: TransactionCreateWithoutTransactionCurrencyInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutTransactionTypeInput = {
  create: TransactionCreateWithoutTransactionTypeInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateWithoutBookInput = {
  createdBy: BookUserCreateNestedOneWithoutCreatedTransactionsInput;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineCreateNestedManyWithoutTransactionInput>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  postingPeriod: PeriodCreateNestedOneWithoutTransactionsInput;
  reversalOf?: InputMaybe<TransactionCreateNestedOneWithoutReversedTransactionInput>;
  reversedTransaction?: InputMaybe<TransactionCreateNestedOneWithoutReversalOfInput>;
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency: CurrencyCreateNestedOneWithoutTransactionsInput;
  transactionType: TransactionTypeCreateNestedOneWithoutTransactionsInput;
};

export type TransactionCreateWithoutCreatedByInput = {
  book: BookCreateNestedOneWithoutTransactionsInput;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineCreateNestedManyWithoutTransactionInput>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  postingPeriod: PeriodCreateNestedOneWithoutTransactionsInput;
  reversalOf?: InputMaybe<TransactionCreateNestedOneWithoutReversedTransactionInput>;
  reversedTransaction?: InputMaybe<TransactionCreateNestedOneWithoutReversalOfInput>;
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency: CurrencyCreateNestedOneWithoutTransactionsInput;
  transactionType: TransactionTypeCreateNestedOneWithoutTransactionsInput;
};

export type TransactionCreateWithoutLinesInput = {
  book: BookCreateNestedOneWithoutTransactionsInput;
  createdBy: BookUserCreateNestedOneWithoutCreatedTransactionsInput;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  postingPeriod: PeriodCreateNestedOneWithoutTransactionsInput;
  reversalOf?: InputMaybe<TransactionCreateNestedOneWithoutReversedTransactionInput>;
  reversedTransaction?: InputMaybe<TransactionCreateNestedOneWithoutReversalOfInput>;
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency: CurrencyCreateNestedOneWithoutTransactionsInput;
  transactionType: TransactionTypeCreateNestedOneWithoutTransactionsInput;
};

export type TransactionCreateWithoutPostingPeriodInput = {
  book: BookCreateNestedOneWithoutTransactionsInput;
  createdBy: BookUserCreateNestedOneWithoutCreatedTransactionsInput;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineCreateNestedManyWithoutTransactionInput>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  reversalOf?: InputMaybe<TransactionCreateNestedOneWithoutReversedTransactionInput>;
  reversedTransaction?: InputMaybe<TransactionCreateNestedOneWithoutReversalOfInput>;
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency: CurrencyCreateNestedOneWithoutTransactionsInput;
  transactionType: TransactionTypeCreateNestedOneWithoutTransactionsInput;
};

export type TransactionCreateWithoutReversalOfInput = {
  book: BookCreateNestedOneWithoutTransactionsInput;
  createdBy: BookUserCreateNestedOneWithoutCreatedTransactionsInput;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineCreateNestedManyWithoutTransactionInput>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  postingPeriod: PeriodCreateNestedOneWithoutTransactionsInput;
  reversedTransaction?: InputMaybe<TransactionCreateNestedOneWithoutReversalOfInput>;
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency: CurrencyCreateNestedOneWithoutTransactionsInput;
  transactionType: TransactionTypeCreateNestedOneWithoutTransactionsInput;
};

export type TransactionCreateWithoutReversedTransactionInput = {
  book: BookCreateNestedOneWithoutTransactionsInput;
  createdBy: BookUserCreateNestedOneWithoutCreatedTransactionsInput;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineCreateNestedManyWithoutTransactionInput>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  postingPeriod: PeriodCreateNestedOneWithoutTransactionsInput;
  reversalOf?: InputMaybe<TransactionCreateNestedOneWithoutReversedTransactionInput>;
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency: CurrencyCreateNestedOneWithoutTransactionsInput;
  transactionType: TransactionTypeCreateNestedOneWithoutTransactionsInput;
};

export type TransactionCreateWithoutTransactionCurrencyInput = {
  book: BookCreateNestedOneWithoutTransactionsInput;
  createdBy: BookUserCreateNestedOneWithoutCreatedTransactionsInput;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineCreateNestedManyWithoutTransactionInput>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  postingPeriod: PeriodCreateNestedOneWithoutTransactionsInput;
  reversalOf?: InputMaybe<TransactionCreateNestedOneWithoutReversedTransactionInput>;
  reversedTransaction?: InputMaybe<TransactionCreateNestedOneWithoutReversalOfInput>;
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionType: TransactionTypeCreateNestedOneWithoutTransactionsInput;
};

export type TransactionCreateWithoutTransactionTypeInput = {
  book: BookCreateNestedOneWithoutTransactionsInput;
  createdBy: BookUserCreateNestedOneWithoutCreatedTransactionsInput;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineCreateNestedManyWithoutTransactionInput>;
  memo: Scalars['String']['input'];
  originalDate: Scalars['DateTime']['input'];
  postingPeriod: PeriodCreateNestedOneWithoutTransactionsInput;
  reversalOf?: InputMaybe<TransactionCreateNestedOneWithoutReversedTransactionInput>;
  reversedTransaction?: InputMaybe<TransactionCreateNestedOneWithoutReversalOfInput>;
  tranDate: Scalars['DateTime']['input'];
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency: CurrencyCreateNestedOneWithoutTransactionsInput;
};

export type TransactionIdBookIdCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type TransactionLine = {
  book: Book;
  bookId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  credit: Scalars['Float']['output'];
  debit: Scalars['Float']['output'];
  entity?: Maybe<BookEntity>;
  entityId?: Maybe<Scalars['String']['output']>;
  glAccount: GlAccount;
  glAccountNumber: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  isReconciled: Scalars['Boolean']['output'];
  lineNumber: Scalars['Int']['output'];
  memo: Scalars['String']['output'];
  transaction: Transaction;
  transactionId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TransactionLineAvgAggregate = {
  credit?: Maybe<Scalars['Float']['output']>;
  debit?: Maybe<Scalars['Float']['output']>;
  glAccountNumber?: Maybe<Scalars['Float']['output']>;
  lineNumber?: Maybe<Scalars['Float']['output']>;
};

export type TransactionLineCountAggregate = {
  _all: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  credit: Scalars['Int']['output'];
  debit: Scalars['Int']['output'];
  entityId: Scalars['Int']['output'];
  glAccountNumber: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isReconciled: Scalars['Int']['output'];
  lineNumber: Scalars['Int']['output'];
  memo: Scalars['Int']['output'];
  transactionId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type TransactionLineCreateManyBookInput = {
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  entityId?: InputMaybe<Scalars['String']['input']>;
  glAccountNumber: Scalars['Int']['input'];
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber: Scalars['Int']['input'];
  memo: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
};

export type TransactionLineCreateManyBookInputEnvelope = {
  data: Array<TransactionLineCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionLineCreateManyEntityInput = {
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  glAccountNumber: Scalars['Int']['input'];
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber: Scalars['Int']['input'];
  memo: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
};

export type TransactionLineCreateManyEntityInputEnvelope = {
  data: Array<TransactionLineCreateManyEntityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionLineCreateManyGlAccountInput = {
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  entityId?: InputMaybe<Scalars['String']['input']>;
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber: Scalars['Int']['input'];
  memo: Scalars['String']['input'];
  transactionId: Scalars['String']['input'];
};

export type TransactionLineCreateManyGlAccountInputEnvelope = {
  data: Array<TransactionLineCreateManyGlAccountInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionLineCreateManyTransactionInput = {
  bookId: Scalars['String']['input'];
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  entityId?: InputMaybe<Scalars['String']['input']>;
  glAccountNumber: Scalars['Int']['input'];
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber: Scalars['Int']['input'];
  memo: Scalars['String']['input'];
};

export type TransactionLineCreateManyTransactionInputEnvelope = {
  data: Array<TransactionLineCreateManyTransactionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionLineCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionLineCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<TransactionLineCreateWithoutBookInput>>;
  createMany?: InputMaybe<TransactionLineCreateManyBookInputEnvelope>;
};

export type TransactionLineCreateNestedManyWithoutEntityInput = {
  connect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionLineCreateOrConnectWithoutEntityInput>>;
  create?: InputMaybe<Array<TransactionLineCreateWithoutEntityInput>>;
  createMany?: InputMaybe<TransactionLineCreateManyEntityInputEnvelope>;
};

export type TransactionLineCreateNestedManyWithoutGlAccountInput = {
  connect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionLineCreateOrConnectWithoutGlAccountInput>>;
  create?: InputMaybe<Array<TransactionLineCreateWithoutGlAccountInput>>;
  createMany?: InputMaybe<TransactionLineCreateManyGlAccountInputEnvelope>;
};

export type TransactionLineCreateNestedManyWithoutTransactionInput = {
  connect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionLineCreateOrConnectWithoutTransactionInput>>;
  create?: InputMaybe<Array<TransactionLineCreateWithoutTransactionInput>>;
  createMany?: InputMaybe<TransactionLineCreateManyTransactionInputEnvelope>;
};

export type TransactionLineCreateOrConnectWithoutBookInput = {
  create: TransactionLineCreateWithoutBookInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineCreateOrConnectWithoutEntityInput = {
  create: TransactionLineCreateWithoutEntityInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineCreateOrConnectWithoutGlAccountInput = {
  create: TransactionLineCreateWithoutGlAccountInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineCreateOrConnectWithoutTransactionInput = {
  create: TransactionLineCreateWithoutTransactionInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineCreateWithoutBookInput = {
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  entity?: InputMaybe<BookEntityCreateNestedOneWithoutTransactionLinesInput>;
  glAccount: GlAccountCreateNestedOneWithoutTransactionLinesInput;
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber: Scalars['Int']['input'];
  memo: Scalars['String']['input'];
  transaction: TransactionCreateNestedOneWithoutLinesInput;
};

export type TransactionLineCreateWithoutEntityInput = {
  book: BookCreateNestedOneWithoutTransactionLinesInput;
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  glAccount: GlAccountCreateNestedOneWithoutTransactionLinesInput;
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber: Scalars['Int']['input'];
  memo: Scalars['String']['input'];
  transaction: TransactionCreateNestedOneWithoutLinesInput;
};

export type TransactionLineCreateWithoutGlAccountInput = {
  book: BookCreateNestedOneWithoutTransactionLinesInput;
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  entity?: InputMaybe<BookEntityCreateNestedOneWithoutTransactionLinesInput>;
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber: Scalars['Int']['input'];
  memo: Scalars['String']['input'];
  transaction: TransactionCreateNestedOneWithoutLinesInput;
};

export type TransactionLineCreateWithoutTransactionInput = {
  book: BookCreateNestedOneWithoutTransactionLinesInput;
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  entity?: InputMaybe<BookEntityCreateNestedOneWithoutTransactionLinesInput>;
  glAccount: GlAccountCreateNestedOneWithoutTransactionLinesInput;
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber: Scalars['Int']['input'];
  memo: Scalars['String']['input'];
};

export type TransactionLineListRelationFilter = {
  every?: InputMaybe<TransactionLineWhereInput>;
  none?: InputMaybe<TransactionLineWhereInput>;
  some?: InputMaybe<TransactionLineWhereInput>;
};

export type TransactionLineMaxAggregate = {
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  credit?: Maybe<Scalars['Float']['output']>;
  debit?: Maybe<Scalars['Float']['output']>;
  entityId?: Maybe<Scalars['String']['output']>;
  glAccountNumber?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isReconciled?: Maybe<Scalars['Boolean']['output']>;
  lineNumber?: Maybe<Scalars['Int']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TransactionLineMinAggregate = {
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  credit?: Maybe<Scalars['Float']['output']>;
  debit?: Maybe<Scalars['Float']['output']>;
  entityId?: Maybe<Scalars['String']['output']>;
  glAccountNumber?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isReconciled?: Maybe<Scalars['Boolean']['output']>;
  lineNumber?: Maybe<Scalars['Int']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TransactionLineOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TransactionLineScalarWhereInput = {
  AND?: InputMaybe<Array<TransactionLineScalarWhereInput>>;
  NOT?: InputMaybe<Array<TransactionLineScalarWhereInput>>;
  OR?: InputMaybe<Array<TransactionLineScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  credit?: InputMaybe<FloatFilter>;
  debit?: InputMaybe<FloatFilter>;
  entityId?: InputMaybe<StringNullableFilter>;
  glAccountNumber?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  isReconciled?: InputMaybe<BoolFilter>;
  lineNumber?: InputMaybe<IntFilter>;
  memo?: InputMaybe<StringFilter>;
  transactionId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TransactionLineSumAggregate = {
  credit?: Maybe<Scalars['Float']['output']>;
  debit?: Maybe<Scalars['Float']['output']>;
  glAccountNumber?: Maybe<Scalars['Int']['output']>;
  lineNumber?: Maybe<Scalars['Int']['output']>;
};

export type TransactionLineTransactionIdLineNumberCompoundUniqueInput = {
  lineNumber: Scalars['Int']['input'];
  transactionId: Scalars['String']['input'];
};

export type TransactionLineUpdateManyMutationInput = {
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionLineUpdateManyWithWhereWithoutBookInput = {
  data: TransactionLineUpdateManyMutationInput;
  where: TransactionLineScalarWhereInput;
};

export type TransactionLineUpdateManyWithWhereWithoutEntityInput = {
  data: TransactionLineUpdateManyMutationInput;
  where: TransactionLineScalarWhereInput;
};

export type TransactionLineUpdateManyWithWhereWithoutGlAccountInput = {
  data: TransactionLineUpdateManyMutationInput;
  where: TransactionLineScalarWhereInput;
};

export type TransactionLineUpdateManyWithWhereWithoutTransactionInput = {
  data: TransactionLineUpdateManyMutationInput;
  where: TransactionLineScalarWhereInput;
};

export type TransactionLineUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionLineCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<TransactionLineCreateWithoutBookInput>>;
  createMany?: InputMaybe<TransactionLineCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionLineScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionLineUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<TransactionLineUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<TransactionLineUpsertWithWhereUniqueWithoutBookInput>>;
};

export type TransactionLineUpdateManyWithoutEntityNestedInput = {
  connect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionLineCreateOrConnectWithoutEntityInput>>;
  create?: InputMaybe<Array<TransactionLineCreateWithoutEntityInput>>;
  createMany?: InputMaybe<TransactionLineCreateManyEntityInputEnvelope>;
  delete?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionLineScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionLineUpdateWithWhereUniqueWithoutEntityInput>>;
  updateMany?: InputMaybe<Array<TransactionLineUpdateManyWithWhereWithoutEntityInput>>;
  upsert?: InputMaybe<Array<TransactionLineUpsertWithWhereUniqueWithoutEntityInput>>;
};

export type TransactionLineUpdateManyWithoutGlAccountNestedInput = {
  connect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionLineCreateOrConnectWithoutGlAccountInput>>;
  create?: InputMaybe<Array<TransactionLineCreateWithoutGlAccountInput>>;
  createMany?: InputMaybe<TransactionLineCreateManyGlAccountInputEnvelope>;
  delete?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionLineScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionLineUpdateWithWhereUniqueWithoutGlAccountInput>>;
  updateMany?: InputMaybe<Array<TransactionLineUpdateManyWithWhereWithoutGlAccountInput>>;
  upsert?: InputMaybe<Array<TransactionLineUpsertWithWhereUniqueWithoutGlAccountInput>>;
};

export type TransactionLineUpdateManyWithoutTransactionNestedInput = {
  connect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionLineCreateOrConnectWithoutTransactionInput>>;
  create?: InputMaybe<Array<TransactionLineCreateWithoutTransactionInput>>;
  createMany?: InputMaybe<TransactionLineCreateManyTransactionInputEnvelope>;
  delete?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionLineScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionLineWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionLineUpdateWithWhereUniqueWithoutTransactionInput>>;
  updateMany?: InputMaybe<Array<TransactionLineUpdateManyWithWhereWithoutTransactionInput>>;
  upsert?: InputMaybe<Array<TransactionLineUpsertWithWhereUniqueWithoutTransactionInput>>;
};

export type TransactionLineUpdateWithWhereUniqueWithoutBookInput = {
  data: TransactionLineUpdateWithoutBookInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineUpdateWithWhereUniqueWithoutEntityInput = {
  data: TransactionLineUpdateWithoutEntityInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineUpdateWithWhereUniqueWithoutGlAccountInput = {
  data: TransactionLineUpdateWithoutGlAccountInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineUpdateWithWhereUniqueWithoutTransactionInput = {
  data: TransactionLineUpdateWithoutTransactionInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineUpdateWithoutBookInput = {
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  entity?: InputMaybe<BookEntityUpdateOneWithoutTransactionLinesNestedInput>;
  glAccount?: InputMaybe<GlAccountUpdateOneRequiredWithoutTransactionLinesNestedInput>;
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<TransactionUpdateOneRequiredWithoutLinesNestedInput>;
};

export type TransactionLineUpdateWithoutEntityInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutTransactionLinesNestedInput>;
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  glAccount?: InputMaybe<GlAccountUpdateOneRequiredWithoutTransactionLinesNestedInput>;
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<TransactionUpdateOneRequiredWithoutLinesNestedInput>;
};

export type TransactionLineUpdateWithoutGlAccountInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutTransactionLinesNestedInput>;
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  entity?: InputMaybe<BookEntityUpdateOneWithoutTransactionLinesNestedInput>;
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<TransactionUpdateOneRequiredWithoutLinesNestedInput>;
};

export type TransactionLineUpdateWithoutTransactionInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutTransactionLinesNestedInput>;
  credit?: InputMaybe<Scalars['Float']['input']>;
  debit?: InputMaybe<Scalars['Float']['input']>;
  entity?: InputMaybe<BookEntityUpdateOneWithoutTransactionLinesNestedInput>;
  glAccount?: InputMaybe<GlAccountUpdateOneRequiredWithoutTransactionLinesNestedInput>;
  isReconciled?: InputMaybe<Scalars['Boolean']['input']>;
  lineNumber?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionLineUpsertWithWhereUniqueWithoutBookInput = {
  create: TransactionLineCreateWithoutBookInput;
  update: TransactionLineUpdateWithoutBookInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineUpsertWithWhereUniqueWithoutEntityInput = {
  create: TransactionLineCreateWithoutEntityInput;
  update: TransactionLineUpdateWithoutEntityInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineUpsertWithWhereUniqueWithoutGlAccountInput = {
  create: TransactionLineCreateWithoutGlAccountInput;
  update: TransactionLineUpdateWithoutGlAccountInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineUpsertWithWhereUniqueWithoutTransactionInput = {
  create: TransactionLineCreateWithoutTransactionInput;
  update: TransactionLineUpdateWithoutTransactionInput;
  where: TransactionLineWhereUniqueInput;
};

export type TransactionLineWhereInput = {
  AND?: InputMaybe<Array<TransactionLineWhereInput>>;
  NOT?: InputMaybe<Array<TransactionLineWhereInput>>;
  OR?: InputMaybe<Array<TransactionLineWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  credit?: InputMaybe<FloatFilter>;
  debit?: InputMaybe<FloatFilter>;
  entity?: InputMaybe<BookEntityNullableRelationFilter>;
  entityId?: InputMaybe<StringNullableFilter>;
  glAccount?: InputMaybe<GlAccountRelationFilter>;
  glAccountNumber?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  isReconciled?: InputMaybe<BoolFilter>;
  lineNumber?: InputMaybe<IntFilter>;
  memo?: InputMaybe<StringFilter>;
  transaction?: InputMaybe<TransactionRelationFilter>;
  transactionId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TransactionLineWhereUniqueInput = {
  AND?: InputMaybe<Array<TransactionLineWhereInput>>;
  NOT?: InputMaybe<Array<TransactionLineWhereInput>>;
  OR?: InputMaybe<Array<TransactionLineWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  credit?: InputMaybe<FloatFilter>;
  debit?: InputMaybe<FloatFilter>;
  entity?: InputMaybe<BookEntityNullableRelationFilter>;
  entityId?: InputMaybe<StringNullableFilter>;
  glAccount?: InputMaybe<GlAccountRelationFilter>;
  glAccountNumber?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isReconciled?: InputMaybe<BoolFilter>;
  lineNumber?: InputMaybe<IntFilter>;
  memo?: InputMaybe<StringFilter>;
  transaction?: InputMaybe<TransactionRelationFilter>;
  transactionId?: InputMaybe<StringFilter>;
  transactionId_lineNumber?: InputMaybe<TransactionLineTransactionIdLineNumberCompoundUniqueInput>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TransactionListRelationFilter = {
  every?: InputMaybe<TransactionWhereInput>;
  none?: InputMaybe<TransactionWhereInput>;
  some?: InputMaybe<TransactionWhereInput>;
};

export type TransactionMaxAggregate = {
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  exchangeRate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  idReversalOf?: Maybe<Scalars['String']['output']>;
  isPosted?: Maybe<Scalars['Boolean']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  originalDate?: Maybe<Scalars['DateTime']['output']>;
  postingMonth?: Maybe<Scalars['Int']['output']>;
  postingYear?: Maybe<Scalars['Int']['output']>;
  tranDate?: Maybe<Scalars['DateTime']['output']>;
  tranNumber?: Maybe<Scalars['Int']['output']>;
  transactionTypeAbbreviation?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TransactionMinAggregate = {
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdById?: Maybe<Scalars['String']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  exchangeRate?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  idReversalOf?: Maybe<Scalars['String']['output']>;
  isPosted?: Maybe<Scalars['Boolean']['output']>;
  memo?: Maybe<Scalars['String']['output']>;
  originalDate?: Maybe<Scalars['DateTime']['output']>;
  postingMonth?: Maybe<Scalars['Int']['output']>;
  postingYear?: Maybe<Scalars['Int']['output']>;
  tranDate?: Maybe<Scalars['DateTime']['output']>;
  tranNumber?: Maybe<Scalars['Int']['output']>;
  transactionTypeAbbreviation?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TransactionNullableRelationFilter = {
  is?: InputMaybe<TransactionWhereInput>;
  isNot?: InputMaybe<TransactionWhereInput>;
};

export type TransactionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TransactionRelationFilter = {
  is?: InputMaybe<TransactionWhereInput>;
  isNot?: InputMaybe<TransactionWhereInput>;
};

export type TransactionScalarWhereInput = {
  AND?: InputMaybe<Array<TransactionScalarWhereInput>>;
  NOT?: InputMaybe<Array<TransactionScalarWhereInput>>;
  OR?: InputMaybe<Array<TransactionScalarWhereInput>>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<StringFilter>;
  currencyCode?: InputMaybe<StringFilter>;
  exchangeRate?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  idReversalOf?: InputMaybe<StringNullableFilter>;
  isPosted?: InputMaybe<BoolFilter>;
  memo?: InputMaybe<StringFilter>;
  originalDate?: InputMaybe<DateTimeFilter>;
  postingMonth?: InputMaybe<IntFilter>;
  postingYear?: InputMaybe<IntFilter>;
  tranDate?: InputMaybe<DateTimeFilter>;
  tranNumber?: InputMaybe<IntFilter>;
  transactionTypeAbbreviation?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TransactionSumAggregate = {
  exchangeRate?: Maybe<Scalars['Float']['output']>;
  postingMonth?: Maybe<Scalars['Int']['output']>;
  postingYear?: Maybe<Scalars['Int']['output']>;
  tranNumber?: Maybe<Scalars['Int']['output']>;
};

export type TransactionType = {
  abbreviation: Scalars['String']['output'];
  book: Book;
  bookId: Scalars['String']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  entryClass: EntryClass;
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  normalBalanceClass: NormalBalanceGlClass;
  system: Scalars['Boolean']['output'];
  transactions?: Maybe<Array<Transaction>>;
  uiHidden: Scalars['Boolean']['output'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
};

export type TransactionTypeAbbreviationBookIdCompoundUniqueInput = {
  abbreviation: Scalars['String']['input'];
  bookId: Scalars['String']['input'];
};

export type TransactionTypeCountAggregate = {
  _all: Scalars['Int']['output'];
  abbreviation: Scalars['Int']['output'];
  bookId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  entryClass: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  normalBalanceClass: Scalars['Int']['output'];
  system: Scalars['Int']['output'];
  uiHidden: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type TransactionTypeCreateManyBookInput = {
  abbreviation: Scalars['String']['input'];
  entryClass: EntryClass;
  name: Scalars['String']['input'];
  normalBalanceClass: NormalBalanceGlClass;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  uiHidden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionTypeCreateManyBookInputEnvelope = {
  data: Array<TransactionTypeCreateManyBookInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionTypeCreateNestedManyWithoutBookInput = {
  connect?: InputMaybe<Array<TransactionTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionTypeCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<TransactionTypeCreateWithoutBookInput>>;
  createMany?: InputMaybe<TransactionTypeCreateManyBookInputEnvelope>;
};

export type TransactionTypeCreateNestedOneWithoutTransactionsInput = {
  connect?: InputMaybe<TransactionTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionTypeCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<TransactionTypeCreateWithoutTransactionsInput>;
};

export type TransactionTypeCreateOrConnectWithoutBookInput = {
  create: TransactionTypeCreateWithoutBookInput;
  where: TransactionTypeWhereUniqueInput;
};

export type TransactionTypeCreateOrConnectWithoutTransactionsInput = {
  create: TransactionTypeCreateWithoutTransactionsInput;
  where: TransactionTypeWhereUniqueInput;
};

export type TransactionTypeCreateWithoutBookInput = {
  abbreviation: Scalars['String']['input'];
  entryClass: EntryClass;
  name: Scalars['String']['input'];
  normalBalanceClass: NormalBalanceGlClass;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactions?: InputMaybe<TransactionCreateNestedManyWithoutTransactionTypeInput>;
  uiHidden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionTypeCreateWithoutTransactionsInput = {
  abbreviation: Scalars['String']['input'];
  book: BookCreateNestedOneWithoutTransactionTypesInput;
  entryClass: EntryClass;
  name: Scalars['String']['input'];
  normalBalanceClass: NormalBalanceGlClass;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  uiHidden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionTypeFindInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TransactionTypeListRelationFilter = {
  every?: InputMaybe<TransactionTypeWhereInput>;
  none?: InputMaybe<TransactionTypeWhereInput>;
  some?: InputMaybe<TransactionTypeWhereInput>;
};

export type TransactionTypeMaxAggregate = {
  abbreviation?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  entryClass?: Maybe<EntryClass>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  normalBalanceClass?: Maybe<NormalBalanceGlClass>;
  system?: Maybe<Scalars['Boolean']['output']>;
  uiHidden?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TransactionTypeMinAggregate = {
  abbreviation?: Maybe<Scalars['String']['output']>;
  bookId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  entryClass?: Maybe<EntryClass>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  normalBalanceClass?: Maybe<NormalBalanceGlClass>;
  system?: Maybe<Scalars['Boolean']['output']>;
  uiHidden?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TransactionTypeNameBookIdCompoundUniqueInput = {
  bookId: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type TransactionTypeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TransactionTypeOrderByWithRelationInput = {
  abbreviation?: InputMaybe<SortOrder>;
  book?: InputMaybe<BookOrderByWithRelationInput>;
  bookId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  entryClass?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  normalBalanceClass?: InputMaybe<SortOrder>;
  system?: InputMaybe<SortOrder>;
  transactions?: InputMaybe<TransactionOrderByRelationAggregateInput>;
  uiHidden?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TransactionTypeRelationFilter = {
  is?: InputMaybe<TransactionTypeWhereInput>;
  isNot?: InputMaybe<TransactionTypeWhereInput>;
};

export enum TransactionTypeScalarFieldEnum {
  Abbreviation = 'abbreviation',
  BookId = 'bookId',
  CreatedAt = 'createdAt',
  EntryClass = 'entryClass',
  Id = 'id',
  Name = 'name',
  NormalBalanceClass = 'normalBalanceClass',
  System = 'system',
  UiHidden = 'uiHidden',
  UpdatedAt = 'updatedAt'
}

export type TransactionTypeScalarWhereInput = {
  AND?: InputMaybe<Array<TransactionTypeScalarWhereInput>>;
  NOT?: InputMaybe<Array<TransactionTypeScalarWhereInput>>;
  OR?: InputMaybe<Array<TransactionTypeScalarWhereInput>>;
  abbreviation?: InputMaybe<StringFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  entryClass?: InputMaybe<EnumEntryClassFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  normalBalanceClass?: InputMaybe<EnumNormalBalanceGlClassFilter>;
  system?: InputMaybe<BoolFilter>;
  uiHidden?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TransactionTypeUpdateManyMutationInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  entryClass?: InputMaybe<EntryClass>;
  name?: InputMaybe<Scalars['String']['input']>;
  normalBalanceClass?: InputMaybe<NormalBalanceGlClass>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  uiHidden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionTypeUpdateManyWithWhereWithoutBookInput = {
  data: TransactionTypeUpdateManyMutationInput;
  where: TransactionTypeScalarWhereInput;
};

export type TransactionTypeUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<TransactionTypeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionTypeCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<TransactionTypeCreateWithoutBookInput>>;
  createMany?: InputMaybe<TransactionTypeCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<TransactionTypeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionTypeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionTypeWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionTypeWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionTypeUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<TransactionTypeUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<TransactionTypeUpsertWithWhereUniqueWithoutBookInput>>;
};

export type TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput = {
  connect?: InputMaybe<TransactionTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionTypeCreateOrConnectWithoutTransactionsInput>;
  create?: InputMaybe<TransactionTypeCreateWithoutTransactionsInput>;
  update?: InputMaybe<TransactionTypeUpdateToOneWithWhereWithoutTransactionsInput>;
  upsert?: InputMaybe<TransactionTypeUpsertWithoutTransactionsInput>;
};

export type TransactionTypeUpdateToOneWithWhereWithoutTransactionsInput = {
  data: TransactionTypeUpdateWithoutTransactionsInput;
  where?: InputMaybe<TransactionTypeWhereInput>;
};

export type TransactionTypeUpdateWithWhereUniqueWithoutBookInput = {
  data: TransactionTypeUpdateWithoutBookInput;
  where: TransactionTypeWhereUniqueInput;
};

export type TransactionTypeUpdateWithoutBookInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  entryClass?: InputMaybe<EntryClass>;
  name?: InputMaybe<Scalars['String']['input']>;
  normalBalanceClass?: InputMaybe<NormalBalanceGlClass>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  transactions?: InputMaybe<TransactionUpdateManyWithoutTransactionTypeNestedInput>;
  uiHidden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionTypeUpdateWithoutTransactionsInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  book?: InputMaybe<BookUpdateOneRequiredWithoutTransactionTypesNestedInput>;
  entryClass?: InputMaybe<EntryClass>;
  name?: InputMaybe<Scalars['String']['input']>;
  normalBalanceClass?: InputMaybe<NormalBalanceGlClass>;
  system?: InputMaybe<Scalars['Boolean']['input']>;
  uiHidden?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TransactionTypeUpsertWithWhereUniqueWithoutBookInput = {
  create: TransactionTypeCreateWithoutBookInput;
  update: TransactionTypeUpdateWithoutBookInput;
  where: TransactionTypeWhereUniqueInput;
};

export type TransactionTypeUpsertWithoutTransactionsInput = {
  create: TransactionTypeCreateWithoutTransactionsInput;
  update: TransactionTypeUpdateWithoutTransactionsInput;
  where?: InputMaybe<TransactionTypeWhereInput>;
};

export type TransactionTypeWhereInput = {
  AND?: InputMaybe<Array<TransactionTypeWhereInput>>;
  NOT?: InputMaybe<Array<TransactionTypeWhereInput>>;
  OR?: InputMaybe<Array<TransactionTypeWhereInput>>;
  abbreviation?: InputMaybe<StringFilter>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  entryClass?: InputMaybe<EnumEntryClassFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  normalBalanceClass?: InputMaybe<EnumNormalBalanceGlClassFilter>;
  system?: InputMaybe<BoolFilter>;
  transactions?: InputMaybe<TransactionListRelationFilter>;
  uiHidden?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TransactionTypeWhereUniqueInput = {
  AND?: InputMaybe<Array<TransactionTypeWhereInput>>;
  NOT?: InputMaybe<Array<TransactionTypeWhereInput>>;
  OR?: InputMaybe<Array<TransactionTypeWhereInput>>;
  abbreviation?: InputMaybe<StringFilter>;
  abbreviation_bookId?: InputMaybe<TransactionTypeAbbreviationBookIdCompoundUniqueInput>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  entryClass?: InputMaybe<EnumEntryClassFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  name_bookId?: InputMaybe<TransactionTypeNameBookIdCompoundUniqueInput>;
  normalBalanceClass?: InputMaybe<EnumNormalBalanceGlClassFilter>;
  system?: InputMaybe<BoolFilter>;
  transactions?: InputMaybe<TransactionListRelationFilter>;
  uiHidden?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TransactionUpdateManyMutationInput = {
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  originalDate?: InputMaybe<Scalars['DateTime']['input']>;
  tranDate?: InputMaybe<Scalars['DateTime']['input']>;
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
};

export type TransactionUpdateManyWithWhereWithoutBookInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithWhereWithoutCreatedByInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithWhereWithoutPostingPeriodInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithWhereWithoutTransactionCurrencyInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithWhereWithoutTransactionTypeInput = {
  data: TransactionUpdateManyMutationInput;
  where: TransactionScalarWhereInput;
};

export type TransactionUpdateManyWithoutBookNestedInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutBookInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutBookInput>>;
  createMany?: InputMaybe<TransactionCreateManyBookInputEnvelope>;
  delete?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionUpdateWithWhereUniqueWithoutBookInput>>;
  updateMany?: InputMaybe<Array<TransactionUpdateManyWithWhereWithoutBookInput>>;
  upsert?: InputMaybe<Array<TransactionUpsertWithWhereUniqueWithoutBookInput>>;
};

export type TransactionUpdateManyWithoutCreatedByNestedInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutCreatedByInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutCreatedByInput>>;
  createMany?: InputMaybe<TransactionCreateManyCreatedByInputEnvelope>;
  delete?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionUpdateWithWhereUniqueWithoutCreatedByInput>>;
  updateMany?: InputMaybe<Array<TransactionUpdateManyWithWhereWithoutCreatedByInput>>;
  upsert?: InputMaybe<Array<TransactionUpsertWithWhereUniqueWithoutCreatedByInput>>;
};

export type TransactionUpdateManyWithoutPostingPeriodNestedInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutPostingPeriodInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutPostingPeriodInput>>;
  createMany?: InputMaybe<TransactionCreateManyPostingPeriodInputEnvelope>;
  delete?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionUpdateWithWhereUniqueWithoutPostingPeriodInput>>;
  updateMany?: InputMaybe<Array<TransactionUpdateManyWithWhereWithoutPostingPeriodInput>>;
  upsert?: InputMaybe<Array<TransactionUpsertWithWhereUniqueWithoutPostingPeriodInput>>;
};

export type TransactionUpdateManyWithoutTransactionCurrencyNestedInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutTransactionCurrencyInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutTransactionCurrencyInput>>;
  createMany?: InputMaybe<TransactionCreateManyTransactionCurrencyInputEnvelope>;
  delete?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionUpdateWithWhereUniqueWithoutTransactionCurrencyInput>>;
  updateMany?: InputMaybe<Array<TransactionUpdateManyWithWhereWithoutTransactionCurrencyInput>>;
  upsert?: InputMaybe<Array<TransactionUpsertWithWhereUniqueWithoutTransactionCurrencyInput>>;
};

export type TransactionUpdateManyWithoutTransactionTypeNestedInput = {
  connect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionCreateOrConnectWithoutTransactionTypeInput>>;
  create?: InputMaybe<Array<TransactionCreateWithoutTransactionTypeInput>>;
  createMany?: InputMaybe<TransactionCreateManyTransactionTypeInputEnvelope>;
  delete?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionUpdateWithWhereUniqueWithoutTransactionTypeInput>>;
  updateMany?: InputMaybe<Array<TransactionUpdateManyWithWhereWithoutTransactionTypeInput>>;
  upsert?: InputMaybe<Array<TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput>>;
};

export type TransactionUpdateOneRequiredWithoutLinesNestedInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutLinesInput>;
  create?: InputMaybe<TransactionCreateWithoutLinesInput>;
  update?: InputMaybe<TransactionUpdateToOneWithWhereWithoutLinesInput>;
  upsert?: InputMaybe<TransactionUpsertWithoutLinesInput>;
};

export type TransactionUpdateOneWithoutReversalOfNestedInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutReversalOfInput>;
  create?: InputMaybe<TransactionCreateWithoutReversalOfInput>;
  delete?: InputMaybe<TransactionWhereInput>;
  disconnect?: InputMaybe<TransactionWhereInput>;
  update?: InputMaybe<TransactionUpdateToOneWithWhereWithoutReversalOfInput>;
  upsert?: InputMaybe<TransactionUpsertWithoutReversalOfInput>;
};

export type TransactionUpdateOneWithoutReversedTransactionNestedInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutReversedTransactionInput>;
  create?: InputMaybe<TransactionCreateWithoutReversedTransactionInput>;
  delete?: InputMaybe<TransactionWhereInput>;
  disconnect?: InputMaybe<TransactionWhereInput>;
  update?: InputMaybe<TransactionUpdateToOneWithWhereWithoutReversedTransactionInput>;
  upsert?: InputMaybe<TransactionUpsertWithoutReversedTransactionInput>;
};

export type TransactionUpdateToOneWithWhereWithoutLinesInput = {
  data: TransactionUpdateWithoutLinesInput;
  where?: InputMaybe<TransactionWhereInput>;
};

export type TransactionUpdateToOneWithWhereWithoutReversalOfInput = {
  data: TransactionUpdateWithoutReversalOfInput;
  where?: InputMaybe<TransactionWhereInput>;
};

export type TransactionUpdateToOneWithWhereWithoutReversedTransactionInput = {
  data: TransactionUpdateWithoutReversedTransactionInput;
  where?: InputMaybe<TransactionWhereInput>;
};

export type TransactionUpdateWithWhereUniqueWithoutBookInput = {
  data: TransactionUpdateWithoutBookInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithWhereUniqueWithoutCreatedByInput = {
  data: TransactionUpdateWithoutCreatedByInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithWhereUniqueWithoutPostingPeriodInput = {
  data: TransactionUpdateWithoutPostingPeriodInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithWhereUniqueWithoutTransactionCurrencyInput = {
  data: TransactionUpdateWithoutTransactionCurrencyInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithWhereUniqueWithoutTransactionTypeInput = {
  data: TransactionUpdateWithoutTransactionTypeInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpdateWithoutBookInput = {
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedTransactionsNestedInput>;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineUpdateManyWithoutTransactionNestedInput>;
  memo?: InputMaybe<Scalars['String']['input']>;
  originalDate?: InputMaybe<Scalars['DateTime']['input']>;
  postingPeriod?: InputMaybe<PeriodUpdateOneRequiredWithoutTransactionsNestedInput>;
  reversalOf?: InputMaybe<TransactionUpdateOneWithoutReversedTransactionNestedInput>;
  reversedTransaction?: InputMaybe<TransactionUpdateOneWithoutReversalOfNestedInput>;
  tranDate?: InputMaybe<Scalars['DateTime']['input']>;
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutTransactionsNestedInput>;
  transactionType?: InputMaybe<TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput>;
};

export type TransactionUpdateWithoutCreatedByInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutTransactionsNestedInput>;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineUpdateManyWithoutTransactionNestedInput>;
  memo?: InputMaybe<Scalars['String']['input']>;
  originalDate?: InputMaybe<Scalars['DateTime']['input']>;
  postingPeriod?: InputMaybe<PeriodUpdateOneRequiredWithoutTransactionsNestedInput>;
  reversalOf?: InputMaybe<TransactionUpdateOneWithoutReversedTransactionNestedInput>;
  reversedTransaction?: InputMaybe<TransactionUpdateOneWithoutReversalOfNestedInput>;
  tranDate?: InputMaybe<Scalars['DateTime']['input']>;
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutTransactionsNestedInput>;
  transactionType?: InputMaybe<TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput>;
};

export type TransactionUpdateWithoutLinesInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutTransactionsNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedTransactionsNestedInput>;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['String']['input']>;
  originalDate?: InputMaybe<Scalars['DateTime']['input']>;
  postingPeriod?: InputMaybe<PeriodUpdateOneRequiredWithoutTransactionsNestedInput>;
  reversalOf?: InputMaybe<TransactionUpdateOneWithoutReversedTransactionNestedInput>;
  reversedTransaction?: InputMaybe<TransactionUpdateOneWithoutReversalOfNestedInput>;
  tranDate?: InputMaybe<Scalars['DateTime']['input']>;
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutTransactionsNestedInput>;
  transactionType?: InputMaybe<TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput>;
};

export type TransactionUpdateWithoutPostingPeriodInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutTransactionsNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedTransactionsNestedInput>;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineUpdateManyWithoutTransactionNestedInput>;
  memo?: InputMaybe<Scalars['String']['input']>;
  originalDate?: InputMaybe<Scalars['DateTime']['input']>;
  reversalOf?: InputMaybe<TransactionUpdateOneWithoutReversedTransactionNestedInput>;
  reversedTransaction?: InputMaybe<TransactionUpdateOneWithoutReversalOfNestedInput>;
  tranDate?: InputMaybe<Scalars['DateTime']['input']>;
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutTransactionsNestedInput>;
  transactionType?: InputMaybe<TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput>;
};

export type TransactionUpdateWithoutReversalOfInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutTransactionsNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedTransactionsNestedInput>;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineUpdateManyWithoutTransactionNestedInput>;
  memo?: InputMaybe<Scalars['String']['input']>;
  originalDate?: InputMaybe<Scalars['DateTime']['input']>;
  postingPeriod?: InputMaybe<PeriodUpdateOneRequiredWithoutTransactionsNestedInput>;
  reversedTransaction?: InputMaybe<TransactionUpdateOneWithoutReversalOfNestedInput>;
  tranDate?: InputMaybe<Scalars['DateTime']['input']>;
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutTransactionsNestedInput>;
  transactionType?: InputMaybe<TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput>;
};

export type TransactionUpdateWithoutReversedTransactionInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutTransactionsNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedTransactionsNestedInput>;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineUpdateManyWithoutTransactionNestedInput>;
  memo?: InputMaybe<Scalars['String']['input']>;
  originalDate?: InputMaybe<Scalars['DateTime']['input']>;
  postingPeriod?: InputMaybe<PeriodUpdateOneRequiredWithoutTransactionsNestedInput>;
  reversalOf?: InputMaybe<TransactionUpdateOneWithoutReversedTransactionNestedInput>;
  tranDate?: InputMaybe<Scalars['DateTime']['input']>;
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutTransactionsNestedInput>;
  transactionType?: InputMaybe<TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput>;
};

export type TransactionUpdateWithoutTransactionCurrencyInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutTransactionsNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedTransactionsNestedInput>;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineUpdateManyWithoutTransactionNestedInput>;
  memo?: InputMaybe<Scalars['String']['input']>;
  originalDate?: InputMaybe<Scalars['DateTime']['input']>;
  postingPeriod?: InputMaybe<PeriodUpdateOneRequiredWithoutTransactionsNestedInput>;
  reversalOf?: InputMaybe<TransactionUpdateOneWithoutReversedTransactionNestedInput>;
  reversedTransaction?: InputMaybe<TransactionUpdateOneWithoutReversalOfNestedInput>;
  tranDate?: InputMaybe<Scalars['DateTime']['input']>;
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionType?: InputMaybe<TransactionTypeUpdateOneRequiredWithoutTransactionsNestedInput>;
};

export type TransactionUpdateWithoutTransactionTypeInput = {
  book?: InputMaybe<BookUpdateOneRequiredWithoutTransactionsNestedInput>;
  createdBy?: InputMaybe<BookUserUpdateOneRequiredWithoutCreatedTransactionsNestedInput>;
  exchangeRate?: InputMaybe<Scalars['Float']['input']>;
  isPosted?: InputMaybe<Scalars['Boolean']['input']>;
  lines?: InputMaybe<TransactionLineUpdateManyWithoutTransactionNestedInput>;
  memo?: InputMaybe<Scalars['String']['input']>;
  originalDate?: InputMaybe<Scalars['DateTime']['input']>;
  postingPeriod?: InputMaybe<PeriodUpdateOneRequiredWithoutTransactionsNestedInput>;
  reversalOf?: InputMaybe<TransactionUpdateOneWithoutReversedTransactionNestedInput>;
  reversedTransaction?: InputMaybe<TransactionUpdateOneWithoutReversalOfNestedInput>;
  tranDate?: InputMaybe<Scalars['DateTime']['input']>;
  tranNumber?: InputMaybe<Scalars['Int']['input']>;
  transactionCurrency?: InputMaybe<CurrencyUpdateOneRequiredWithoutTransactionsNestedInput>;
};

export type TransactionUpsertWithWhereUniqueWithoutBookInput = {
  create: TransactionCreateWithoutBookInput;
  update: TransactionUpdateWithoutBookInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpsertWithWhereUniqueWithoutCreatedByInput = {
  create: TransactionCreateWithoutCreatedByInput;
  update: TransactionUpdateWithoutCreatedByInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpsertWithWhereUniqueWithoutPostingPeriodInput = {
  create: TransactionCreateWithoutPostingPeriodInput;
  update: TransactionUpdateWithoutPostingPeriodInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpsertWithWhereUniqueWithoutTransactionCurrencyInput = {
  create: TransactionCreateWithoutTransactionCurrencyInput;
  update: TransactionUpdateWithoutTransactionCurrencyInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpsertWithWhereUniqueWithoutTransactionTypeInput = {
  create: TransactionCreateWithoutTransactionTypeInput;
  update: TransactionUpdateWithoutTransactionTypeInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionUpsertWithoutLinesInput = {
  create: TransactionCreateWithoutLinesInput;
  update: TransactionUpdateWithoutLinesInput;
  where?: InputMaybe<TransactionWhereInput>;
};

export type TransactionUpsertWithoutReversalOfInput = {
  create: TransactionCreateWithoutReversalOfInput;
  update: TransactionUpdateWithoutReversalOfInput;
  where?: InputMaybe<TransactionWhereInput>;
};

export type TransactionUpsertWithoutReversedTransactionInput = {
  create: TransactionCreateWithoutReversedTransactionInput;
  update: TransactionUpdateWithoutReversedTransactionInput;
  where?: InputMaybe<TransactionWhereInput>;
};

export type TransactionWhereInput = {
  AND?: InputMaybe<Array<TransactionWhereInput>>;
  NOT?: InputMaybe<Array<TransactionWhereInput>>;
  OR?: InputMaybe<Array<TransactionWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<BookUserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  currencyCode?: InputMaybe<StringFilter>;
  exchangeRate?: InputMaybe<FloatFilter>;
  id?: InputMaybe<StringFilter>;
  idReversalOf?: InputMaybe<StringNullableFilter>;
  isPosted?: InputMaybe<BoolFilter>;
  lines?: InputMaybe<TransactionLineListRelationFilter>;
  memo?: InputMaybe<StringFilter>;
  originalDate?: InputMaybe<DateTimeFilter>;
  postingMonth?: InputMaybe<IntFilter>;
  postingPeriod?: InputMaybe<PeriodRelationFilter>;
  postingYear?: InputMaybe<IntFilter>;
  reversalOf?: InputMaybe<TransactionNullableRelationFilter>;
  reversedTransaction?: InputMaybe<TransactionNullableRelationFilter>;
  tranDate?: InputMaybe<DateTimeFilter>;
  tranNumber?: InputMaybe<IntFilter>;
  transactionCurrency?: InputMaybe<CurrencyRelationFilter>;
  transactionType?: InputMaybe<TransactionTypeRelationFilter>;
  transactionTypeAbbreviation?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TransactionWhereUniqueInput = {
  AND?: InputMaybe<Array<TransactionWhereInput>>;
  NOT?: InputMaybe<Array<TransactionWhereInput>>;
  OR?: InputMaybe<Array<TransactionWhereInput>>;
  book?: InputMaybe<BookRelationFilter>;
  bookId?: InputMaybe<StringFilter>;
  bookId_tranNumber?: InputMaybe<TransactionBookIdTranNumberCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<BookUserRelationFilter>;
  createdById?: InputMaybe<StringFilter>;
  currencyCode?: InputMaybe<StringFilter>;
  exchangeRate?: InputMaybe<FloatFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  idReversalOf?: InputMaybe<Scalars['String']['input']>;
  id_bookId?: InputMaybe<TransactionIdBookIdCompoundUniqueInput>;
  isPosted?: InputMaybe<BoolFilter>;
  lines?: InputMaybe<TransactionLineListRelationFilter>;
  memo?: InputMaybe<StringFilter>;
  originalDate?: InputMaybe<DateTimeFilter>;
  postingMonth?: InputMaybe<IntFilter>;
  postingPeriod?: InputMaybe<PeriodRelationFilter>;
  postingYear?: InputMaybe<IntFilter>;
  reversalOf?: InputMaybe<TransactionNullableRelationFilter>;
  reversedTransaction?: InputMaybe<TransactionNullableRelationFilter>;
  tranDate?: InputMaybe<DateTimeFilter>;
  tranNumber?: InputMaybe<IntFilter>;
  transactionCurrency?: InputMaybe<CurrencyRelationFilter>;
  transactionType?: InputMaybe<TransactionTypeRelationFilter>;
  transactionTypeAbbreviation?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TriggerQueuesResponse = {
  queueKeys: Array<Scalars['String']['output']>;
  /** Number of Successful Results */
  successCount: Scalars['Int']['output'];
};

export type User = {
  birthday: Scalars['DateTime']['output'];
  canUseAnalyticsData: Scalars['Boolean']['output'];
  connectedBookUsers?: Maybe<Array<BookUser>>;
  countryCode: Scalars['String']['output'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** Generated Instance CUID */
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role: Role;
  suspended: Scalars['Boolean']['output'];
  systemUserBooks?: Maybe<Array<Book>>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime']['output'];
  userCountry: Country;
  verified: Scalars['Boolean']['output'];
};

export type UserConnectBookNumberInput = {
  bookNumber: Scalars['Int']['input'];
  bookRole: Role;
};

export type UserCountAggregate = {
  _all: Scalars['Int']['output'];
  birthday: Scalars['Int']['output'];
  canUseAnalyticsData: Scalars['Int']['output'];
  countryCode: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  firstName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  phoneNumber: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  suspended: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  verified: Scalars['Int']['output'];
};

export type UserCreateManyUserCountryInput = {
  birthday: Scalars['DateTime']['input'];
  canUseAnalyticsData?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  suspended?: InputMaybe<Scalars['Boolean']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateManyUserCountryInputEnvelope = {
  data: Array<UserCreateManyUserCountryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateNestedManyWithoutUserCountryInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUserCountryInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUserCountryInput>>;
  createMany?: InputMaybe<UserCreateManyUserCountryInputEnvelope>;
};

export type UserCreateNestedOneWithoutConnectedBookUsersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConnectedBookUsersInput>;
  create?: InputMaybe<UserCreateWithoutConnectedBookUsersInput>;
};

export type UserCreateNestedOneWithoutSystemUserBooksInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSystemUserBooksInput>;
  create?: InputMaybe<UserCreateWithoutSystemUserBooksInput>;
};

export type UserCreateOrConnectWithoutConnectedBookUsersInput = {
  create: UserCreateWithoutConnectedBookUsersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSystemUserBooksInput = {
  create: UserCreateWithoutSystemUserBooksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserCountryInput = {
  create: UserCreateWithoutUserCountryInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutConnectedBookUsersInput = {
  birthday: Scalars['DateTime']['input'];
  canUseAnalyticsData?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  suspended?: InputMaybe<Scalars['Boolean']['input']>;
  systemUserBooks?: InputMaybe<BookCreateNestedManyWithoutSystemUserInput>;
  userCountry?: InputMaybe<CountryCreateNestedOneWithoutUsersInput>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateWithoutSystemUserBooksInput = {
  birthday: Scalars['DateTime']['input'];
  canUseAnalyticsData?: InputMaybe<Scalars['Boolean']['input']>;
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutUserInput>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  suspended?: InputMaybe<Scalars['Boolean']['input']>;
  userCountry?: InputMaybe<CountryCreateNestedOneWithoutUsersInput>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateWithoutUserCountryInput = {
  birthday: Scalars['DateTime']['input'];
  canUseAnalyticsData?: InputMaybe<Scalars['Boolean']['input']>;
  connectedBookUsers?: InputMaybe<BookUserCreateNestedManyWithoutUserInput>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  suspended?: InputMaybe<Scalars['Boolean']['input']>;
  systemUserBooks?: InputMaybe<BookCreateNestedManyWithoutSystemUserInput>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  birthday?: Maybe<Scalars['DateTime']['output']>;
  canUseAnalyticsData?: Maybe<Scalars['Boolean']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  suspended?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type UserMinAggregate = {
  birthday?: Maybe<Scalars['DateTime']['output']>;
  canUseAnalyticsData?: Maybe<Scalars['Boolean']['output']>;
  countryCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  suspended?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  birthday?: InputMaybe<SortOrder>;
  canUseAnalyticsData?: InputMaybe<SortOrder>;
  connectedBookUsers?: InputMaybe<BookUserOrderByRelationAggregateInput>;
  countryCode?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  suspended?: InputMaybe<SortOrder>;
  systemUserBooks?: InputMaybe<BookOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userCountry?: InputMaybe<CountryOrderByWithRelationInput>;
  verified?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Birthday = 'birthday',
  CanUseAnalyticsData = 'canUseAnalyticsData',
  CountryCode = 'countryCode',
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  Password = 'password',
  PhoneNumber = 'phoneNumber',
  Role = 'role',
  Suspended = 'suspended',
  UpdatedAt = 'updatedAt',
  Verified = 'verified'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  birthday?: InputMaybe<DateTimeFilter>;
  canUseAnalyticsData?: InputMaybe<BoolFilter>;
  countryCode?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  suspended?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  verified?: InputMaybe<BoolFilter>;
};

export type UserUpdateManyMutationInput = {
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  canUseAnalyticsData?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  suspended?: InputMaybe<Scalars['Boolean']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateManyWithWhereWithoutUserCountryInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutUserCountryNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutUserCountryInput>>;
  create?: InputMaybe<Array<UserCreateWithoutUserCountryInput>>;
  createMany?: InputMaybe<UserCreateManyUserCountryInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutUserCountryInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutUserCountryInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutUserCountryInput>>;
};

export type UserUpdateOneRequiredWithoutConnectedBookUsersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutConnectedBookUsersInput>;
  create?: InputMaybe<UserCreateWithoutConnectedBookUsersInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutConnectedBookUsersInput>;
  upsert?: InputMaybe<UserUpsertWithoutConnectedBookUsersInput>;
};

export type UserUpdateOneRequiredWithoutSystemUserBooksNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSystemUserBooksInput>;
  create?: InputMaybe<UserCreateWithoutSystemUserBooksInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSystemUserBooksInput>;
  upsert?: InputMaybe<UserUpsertWithoutSystemUserBooksInput>;
};

export type UserUpdateToOneWithWhereWithoutConnectedBookUsersInput = {
  data: UserUpdateWithoutConnectedBookUsersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSystemUserBooksInput = {
  data: UserUpdateWithoutSystemUserBooksInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithWhereUniqueWithoutUserCountryInput = {
  data: UserUpdateWithoutUserCountryInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutConnectedBookUsersInput = {
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  canUseAnalyticsData?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  suspended?: InputMaybe<Scalars['Boolean']['input']>;
  systemUserBooks?: InputMaybe<BookUpdateManyWithoutSystemUserNestedInput>;
  userCountry?: InputMaybe<CountryUpdateOneRequiredWithoutUsersNestedInput>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateWithoutSystemUserBooksInput = {
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  canUseAnalyticsData?: InputMaybe<Scalars['Boolean']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  suspended?: InputMaybe<Scalars['Boolean']['input']>;
  userCountry?: InputMaybe<CountryUpdateOneRequiredWithoutUsersNestedInput>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateWithoutUserCountryInput = {
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  canUseAnalyticsData?: InputMaybe<Scalars['Boolean']['input']>;
  connectedBookUsers?: InputMaybe<BookUserUpdateManyWithoutUserNestedInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  suspended?: InputMaybe<Scalars['Boolean']['input']>;
  systemUserBooks?: InputMaybe<BookUpdateManyWithoutSystemUserNestedInput>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpsertWithWhereUniqueWithoutUserCountryInput = {
  create: UserCreateWithoutUserCountryInput;
  update: UserUpdateWithoutUserCountryInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutConnectedBookUsersInput = {
  create: UserCreateWithoutConnectedBookUsersInput;
  update: UserUpdateWithoutConnectedBookUsersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSystemUserBooksInput = {
  create: UserCreateWithoutSystemUserBooksInput;
  update: UserUpdateWithoutSystemUserBooksInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  birthday?: InputMaybe<DateTimeFilter>;
  canUseAnalyticsData?: InputMaybe<BoolFilter>;
  connectedBookUsers?: InputMaybe<BookUserListRelationFilter>;
  countryCode?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  suspended?: InputMaybe<BoolFilter>;
  systemUserBooks?: InputMaybe<BookListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userCountry?: InputMaybe<CountryRelationFilter>;
  verified?: InputMaybe<BoolFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  birthday?: InputMaybe<DateTimeFilter>;
  canUseAnalyticsData?: InputMaybe<BoolFilter>;
  connectedBookUsers?: InputMaybe<BookUserListRelationFilter>;
  countryCode?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  suspended?: InputMaybe<BoolFilter>;
  systemUserBooks?: InputMaybe<BookListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userCountry?: InputMaybe<CountryRelationFilter>;
  verified?: InputMaybe<BoolFilter>;
};

export type AuthUserTokensFragment = { refresh_token: string, access_token: string };

export type AuthSessionTokensFragment = { refresh_token: string, access_token: string };

export type AuthUserFragment = { id: string, email: string, firstName: string, lastName: string, role: Role, birthday: any, canUseAnalyticsData: boolean, countryCode: string, createdAt: any, updatedAt: any };

export type AppUserFragment = { birthday: any, canUseAnalyticsData: boolean, countryCode: string, createdAt: any, email: string, firstName: string, id: string, lastName: string, phoneNumber?: string | null, role: Role, suspended: boolean, updatedAt: any, verified: boolean, connectedBookUsers?: Array<{ bookId: string, bookRole: Role, isActive: boolean }> | null };

export type AppBookFragment = { id: string, createdAt: any, updatedAt: any, bookNumber: number, envType: BookEnvironmentType, isActive: boolean, isSeeded: boolean, name: string, primaryCurrencyCode: string, system: boolean, systemUserId: string };

export type SessionRefreshDataFragment = { activeUserId: string, activeBookId?: string | null, refresh_token: string, access_token: string, activeUser: { birthday: any, canUseAnalyticsData: boolean, countryCode: string, createdAt: any, email: string, firstName: string, id: string, lastName: string, phoneNumber?: string | null, role: Role, suspended: boolean, updatedAt: any, verified: boolean, connectedBookUsers?: Array<{ bookId: string, bookRole: Role, isActive: boolean }> | null }, activeBook?: { id: string, createdAt: any, updatedAt: any, bookNumber: number, envType: BookEnvironmentType, isActive: boolean, isSeeded: boolean, name: string, primaryCurrencyCode: string, system: boolean, systemUserId: string } | null };

export type AuthSessionStatusFragment = { activeUserId: string, activeBookId?: string | null, activeUser: { birthday: any, canUseAnalyticsData: boolean, countryCode: string, createdAt: any, email: string, firstName: string, id: string, lastName: string, phoneNumber?: string | null, role: Role, suspended: boolean, updatedAt: any, verified: boolean, connectedBookUsers?: Array<{ bookId: string, bookRole: Role, isActive: boolean }> | null }, activeBook?: { id: string, createdAt: any, updatedAt: any, bookNumber: number, envType: BookEnvironmentType, isActive: boolean, isSeeded: boolean, name: string, primaryCurrencyCode: string, system: boolean, systemUserId: string } | null };

export type SigninMutationVariables = Exact<{
  input: LoginInput;
}>;


export type SigninMutation = { signin: { access_token: string, id: string, email: string, firstName: string, lastName: string, role: Role, birthday: any, canUseAnalyticsData: boolean, countryCode: string, createdAt: any, updatedAt: any } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout: { uid: string, userId: string, email: string } };

export type RefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokensMutation = { refreshSession: { activeUserId: string, activeBookId?: string | null, refresh_token: string, access_token: string, activeUser: { birthday: any, canUseAnalyticsData: boolean, countryCode: string, createdAt: any, email: string, firstName: string, id: string, lastName: string, phoneNumber?: string | null, role: Role, suspended: boolean, updatedAt: any, verified: boolean, connectedBookUsers?: Array<{ bookId: string, bookRole: Role, isActive: boolean }> | null }, activeBook?: { id: string, createdAt: any, updatedAt: any, bookNumber: number, envType: BookEnvironmentType, isActive: boolean, isSeeded: boolean, name: string, primaryCurrencyCode: string, system: boolean, systemUserId: string } | null } };

export type ActiveUserQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveUserQuery = { me: { birthday: any, canUseAnalyticsData: boolean, countryCode: string, createdAt: any, email: string, firstName: string, id: string, lastName: string, phoneNumber?: string | null, role: Role, suspended: boolean, updatedAt: any, verified: boolean, connectedBookUsers?: Array<{ bookId: string, bookRole: Role, isActive: boolean }> | null } };

export type SetCurrentBookMutationVariables = Exact<{
  bookId: Scalars['String']['input'];
}>;


export type SetCurrentBookMutation = { setActiveBook: { activeUserId: string, activeBookId?: string | null, refresh_token: string, access_token: string, activeUser: { birthday: any, canUseAnalyticsData: boolean, countryCode: string, createdAt: any, email: string, firstName: string, id: string, lastName: string, phoneNumber?: string | null, role: Role, suspended: boolean, updatedAt: any, verified: boolean, connectedBookUsers?: Array<{ bookId: string, bookRole: Role, isActive: boolean }> | null }, activeBook?: { id: string, createdAt: any, updatedAt: any, bookNumber: number, envType: BookEnvironmentType, isActive: boolean, isSeeded: boolean, name: string, primaryCurrencyCode: string, system: boolean, systemUserId: string } | null } };

export type ClearCurrentBookMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearCurrentBookMutation = { clearActiveBook: { activeUserId: string, activeBookId?: string | null, refresh_token: string, access_token: string, activeUser: { birthday: any, canUseAnalyticsData: boolean, countryCode: string, createdAt: any, email: string, firstName: string, id: string, lastName: string, phoneNumber?: string | null, role: Role, suspended: boolean, updatedAt: any, verified: boolean, connectedBookUsers?: Array<{ bookId: string, bookRole: Role, isActive: boolean }> | null }, activeBook?: { id: string, createdAt: any, updatedAt: any, bookNumber: number, envType: BookEnvironmentType, isActive: boolean, isSeeded: boolean, name: string, primaryCurrencyCode: string, system: boolean, systemUserId: string } | null } };

export type ActiveBookUserQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveBookUserQuery = { me: { birthday: any, canUseAnalyticsData: boolean, countryCode: string, createdAt: any, email: string, firstName: string, id: string, lastName: string, phoneNumber?: string | null, role: Role, suspended: boolean, updatedAt: any, verified: boolean, connectedBookUsers?: Array<{ bookId: string, bookRole: Role, isActive: boolean }> | null } };

export type CurrentSessionDataQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentSessionDataQuery = { currentSession: { activeUserId: string, activeBookId?: string | null, activeUser: { birthday: any, canUseAnalyticsData: boolean, countryCode: string, createdAt: any, email: string, firstName: string, id: string, lastName: string, phoneNumber?: string | null, role: Role, suspended: boolean, updatedAt: any, verified: boolean, connectedBookUsers?: Array<{ bookId: string, bookRole: Role, isActive: boolean }> | null }, activeBook?: { id: string, createdAt: any, updatedAt: any, bookNumber: number, envType: BookEnvironmentType, isActive: boolean, isSeeded: boolean, name: string, primaryCurrencyCode: string, system: boolean, systemUserId: string } | null } };

export type StaticCountryFragment = { code: string, countryCurrencyCode?: string | null, id: string, locale?: string | null, name: string, timezones?: Array<string> | null };

export type StaticCurrencyFragment = { code: string, currencyFraction: string, currencyFractionUnits: number, currencySymbol: string, id: string, name: string };

export type SelectCountryFragment = { code: string, name: string };

export type SelectCurrencyFragment = { code: string, name: string, currencySymbol: string };

export type StaticListsQueryVariables = Exact<{ [key: string]: never; }>;


export type StaticListsQuery = { countries: Array<{ code: string, countryCurrencyCode?: string | null, id: string, locale?: string | null, name: string, timezones?: Array<string> | null }>, currencies: Array<{ code: string, currencyFraction: string, currencyFractionUnits: number, currencySymbol: string, id: string, name: string }> };

export type DropdownStaticListsQueryVariables = Exact<{ [key: string]: never; }>;


export type DropdownStaticListsQuery = { countries: Array<{ code: string, name: string }>, currencies: Array<{ code: string, name: string, currencySymbol: string }> };

export type SearchCountriesPublicQueryVariables = Exact<{
  input: CountryWhereInput;
}>;


export type SearchCountriesPublicQuery = { countries: Array<{ code: string, countryCurrencyCode?: string | null, id: string, locale?: string | null, name: string, timezones?: Array<string> | null }> };

export const AuthUserTokensFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'authUserTokens' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'SignInResponse' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'refresh_token' } }, { kind: 'Field', name: { kind: 'Name', value: 'access_token' } }] } }] } as unknown as DocumentNode<AuthUserTokensFragment, unknown>
export const AuthUserFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'authUser' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'SignInResponse' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }, { kind: 'Field', name: { kind: 'Name', value: 'role' } }, { kind: 'Field', name: { kind: 'Name', value: 'birthday' } }, { kind: 'Field', name: { kind: 'Name', value: 'canUseAnalyticsData' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }] } }] } as unknown as DocumentNode<AuthUserFragment, unknown>
export const AuthSessionTokensFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'authSessionTokens' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthSession' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'refresh_token' } }, { kind: 'Field', name: { kind: 'Name', value: 'access_token' } }] } }] } as unknown as DocumentNode<AuthSessionTokensFragment, unknown>
export const AppUserFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appUser' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'birthday' } }, { kind: 'Field', name: { kind: 'Name', value: 'canUseAnalyticsData' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }, { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'role' } }, { kind: 'Field', name: { kind: 'Name', value: 'suspended' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'verified' } }, { kind: 'Field', name: { kind: 'Name', value: 'connectedBookUsers' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'bookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookRole' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }] } }] } }] } as unknown as DocumentNode<AppUserFragment, unknown>
export const AppBookFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appBook' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Book' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'envType' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }, { kind: 'Field', name: { kind: 'Name', value: 'isSeeded' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'primaryCurrencyCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'system' } }, { kind: 'Field', name: { kind: 'Name', value: 'systemUserId' } }] } }] } as unknown as DocumentNode<AppBookFragment, unknown>
export const SessionRefreshDataFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'sessionRefreshData' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthSession' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'authSessionTokens' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeUserId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeUser' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appUser' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBook' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appBook' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'authSessionTokens' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthSession' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'refresh_token' } }, { kind: 'Field', name: { kind: 'Name', value: 'access_token' } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appUser' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'birthday' } }, { kind: 'Field', name: { kind: 'Name', value: 'canUseAnalyticsData' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }, { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'role' } }, { kind: 'Field', name: { kind: 'Name', value: 'suspended' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'verified' } }, { kind: 'Field', name: { kind: 'Name', value: 'connectedBookUsers' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'bookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookRole' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appBook' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Book' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'envType' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }, { kind: 'Field', name: { kind: 'Name', value: 'isSeeded' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'primaryCurrencyCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'system' } }, { kind: 'Field', name: { kind: 'Name', value: 'systemUserId' } }] } }] } as unknown as DocumentNode<SessionRefreshDataFragment, unknown>
export const AuthSessionStatusFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'authSessionStatus' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthSessionStatus' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'activeUserId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeUser' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appUser' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBook' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appBook' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appUser' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'birthday' } }, { kind: 'Field', name: { kind: 'Name', value: 'canUseAnalyticsData' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }, { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'role' } }, { kind: 'Field', name: { kind: 'Name', value: 'suspended' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'verified' } }, { kind: 'Field', name: { kind: 'Name', value: 'connectedBookUsers' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'bookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookRole' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appBook' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Book' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'envType' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }, { kind: 'Field', name: { kind: 'Name', value: 'isSeeded' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'primaryCurrencyCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'system' } }, { kind: 'Field', name: { kind: 'Name', value: 'systemUserId' } }] } }] } as unknown as DocumentNode<AuthSessionStatusFragment, unknown>
export const StaticCountryFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'staticCountry' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCurrencyCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'locale' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'timezones' } }] } }] } as unknown as DocumentNode<StaticCountryFragment, unknown>
export const StaticCurrencyFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'staticCurrency' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Currency' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'currencyFraction' } }, { kind: 'Field', name: { kind: 'Name', value: 'currencyFractionUnits' } }, { kind: 'Field', name: { kind: 'Name', value: 'currencySymbol' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }] } }] } as unknown as DocumentNode<StaticCurrencyFragment, unknown>
export const SelectCountryFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'selectCountry' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }] } }] } as unknown as DocumentNode<SelectCountryFragment, unknown>
export const SelectCurrencyFragmentDoc = { kind: 'Document', definitions: [{ kind: 'FragmentDefinition', name: { kind: 'Name', value: 'selectCurrency' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Currency' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'currencySymbol' } }] } }] } as unknown as DocumentNode<SelectCurrencyFragment, unknown>
export const SigninDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'signin' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'LoginInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'signin' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'access_token' } }, { kind: 'FragmentSpread', name: { kind: 'Name', value: 'authUser' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'authUser' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'SignInResponse' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }, { kind: 'Field', name: { kind: 'Name', value: 'role' } }, { kind: 'Field', name: { kind: 'Name', value: 'birthday' } }, { kind: 'Field', name: { kind: 'Name', value: 'canUseAnalyticsData' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }] } }] } as unknown as DocumentNode<SigninMutation, SigninMutationVariables>
export const LogoutDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'logout' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'logout' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'uid' } }, { kind: 'Field', name: { kind: 'Name', value: 'userId' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }] } }] } }] } as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>
export const RefreshTokensDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'refreshTokens' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'refreshSession' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'sessionRefreshData' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'authSessionTokens' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthSession' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'refresh_token' } }, { kind: 'Field', name: { kind: 'Name', value: 'access_token' } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appUser' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'birthday' } }, { kind: 'Field', name: { kind: 'Name', value: 'canUseAnalyticsData' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }, { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'role' } }, { kind: 'Field', name: { kind: 'Name', value: 'suspended' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'verified' } }, { kind: 'Field', name: { kind: 'Name', value: 'connectedBookUsers' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'bookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookRole' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appBook' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Book' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'envType' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }, { kind: 'Field', name: { kind: 'Name', value: 'isSeeded' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'primaryCurrencyCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'system' } }, { kind: 'Field', name: { kind: 'Name', value: 'systemUserId' } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'sessionRefreshData' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthSession' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'authSessionTokens' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeUserId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeUser' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appUser' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBook' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appBook' } }] } }] } }] } as unknown as DocumentNode<RefreshTokensMutation, RefreshTokensMutationVariables>
export const ActiveUserDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'activeUser' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'me' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appUser' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appUser' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'birthday' } }, { kind: 'Field', name: { kind: 'Name', value: 'canUseAnalyticsData' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }, { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'role' } }, { kind: 'Field', name: { kind: 'Name', value: 'suspended' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'verified' } }, { kind: 'Field', name: { kind: 'Name', value: 'connectedBookUsers' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'bookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookRole' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }] } }] } }] } as unknown as DocumentNode<ActiveUserQuery, ActiveUserQueryVariables>
export const SetCurrentBookDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'setCurrentBook' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'bookId' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'setActiveBook' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'bookId' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'bookId' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'sessionRefreshData' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'authSessionTokens' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthSession' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'refresh_token' } }, { kind: 'Field', name: { kind: 'Name', value: 'access_token' } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appUser' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'birthday' } }, { kind: 'Field', name: { kind: 'Name', value: 'canUseAnalyticsData' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }, { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'role' } }, { kind: 'Field', name: { kind: 'Name', value: 'suspended' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'verified' } }, { kind: 'Field', name: { kind: 'Name', value: 'connectedBookUsers' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'bookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookRole' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appBook' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Book' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'envType' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }, { kind: 'Field', name: { kind: 'Name', value: 'isSeeded' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'primaryCurrencyCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'system' } }, { kind: 'Field', name: { kind: 'Name', value: 'systemUserId' } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'sessionRefreshData' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthSession' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'authSessionTokens' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeUserId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeUser' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appUser' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBook' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appBook' } }] } }] } }] } as unknown as DocumentNode<SetCurrentBookMutation, SetCurrentBookMutationVariables>
export const ClearCurrentBookDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'mutation', name: { kind: 'Name', value: 'clearCurrentBook' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'clearActiveBook' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'sessionRefreshData' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'authSessionTokens' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthSession' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'refresh_token' } }, { kind: 'Field', name: { kind: 'Name', value: 'access_token' } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appUser' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'birthday' } }, { kind: 'Field', name: { kind: 'Name', value: 'canUseAnalyticsData' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }, { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'role' } }, { kind: 'Field', name: { kind: 'Name', value: 'suspended' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'verified' } }, { kind: 'Field', name: { kind: 'Name', value: 'connectedBookUsers' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'bookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookRole' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appBook' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Book' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'envType' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }, { kind: 'Field', name: { kind: 'Name', value: 'isSeeded' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'primaryCurrencyCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'system' } }, { kind: 'Field', name: { kind: 'Name', value: 'systemUserId' } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'sessionRefreshData' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthSession' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'authSessionTokens' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeUserId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeUser' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appUser' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBook' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appBook' } }] } }] } }] } as unknown as DocumentNode<ClearCurrentBookMutation, ClearCurrentBookMutationVariables>
export const ActiveBookUserDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'activeBookUser' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'me' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appUser' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appUser' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'birthday' } }, { kind: 'Field', name: { kind: 'Name', value: 'canUseAnalyticsData' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }, { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'role' } }, { kind: 'Field', name: { kind: 'Name', value: 'suspended' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'verified' } }, { kind: 'Field', name: { kind: 'Name', value: 'connectedBookUsers' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'bookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookRole' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }] } }] } }] } as unknown as DocumentNode<ActiveBookUserQuery, ActiveBookUserQueryVariables>
export const CurrentSessionDataDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'currentSessionData' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'currentSession' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'authSessionStatus' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appUser' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'birthday' } }, { kind: 'Field', name: { kind: 'Name', value: 'canUseAnalyticsData' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'email' } }, { kind: 'Field', name: { kind: 'Name', value: 'firstName' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'lastName' } }, { kind: 'Field', name: { kind: 'Name', value: 'phoneNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'role' } }, { kind: 'Field', name: { kind: 'Name', value: 'suspended' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'verified' } }, { kind: 'Field', name: { kind: 'Name', value: 'connectedBookUsers' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'bookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookRole' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'appBook' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Book' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } }, { kind: 'Field', name: { kind: 'Name', value: 'bookNumber' } }, { kind: 'Field', name: { kind: 'Name', value: 'envType' } }, { kind: 'Field', name: { kind: 'Name', value: 'isActive' } }, { kind: 'Field', name: { kind: 'Name', value: 'isSeeded' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'primaryCurrencyCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'system' } }, { kind: 'Field', name: { kind: 'Name', value: 'systemUserId' } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'authSessionStatus' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AuthSessionStatus' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'activeUserId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBookId' } }, { kind: 'Field', name: { kind: 'Name', value: 'activeUser' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appUser' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'activeBook' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'appBook' } }] } }] } }] } as unknown as DocumentNode<CurrentSessionDataQuery, CurrentSessionDataQueryVariables>
export const StaticListsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'staticLists' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countries' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'ObjectValue', fields: [{ kind: 'ObjectField', name: { kind: 'Name', value: 'isActive' }, value: { kind: 'ObjectValue', fields: [{ kind: 'ObjectField', name: { kind: 'Name', value: 'equals' }, value: { kind: 'BooleanValue', value: true } }] } }] } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'staticCountry' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'currencies' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'where' }, value: { kind: 'ObjectValue', fields: [{ kind: 'ObjectField', name: { kind: 'Name', value: 'isActive' }, value: { kind: 'ObjectValue', fields: [{ kind: 'ObjectField', name: { kind: 'Name', value: 'equals' }, value: { kind: 'BooleanValue', value: true } }] } }] } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'staticCurrency' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'staticCountry' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCurrencyCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'locale' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'timezones' } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'staticCurrency' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Currency' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'currencyFraction' } }, { kind: 'Field', name: { kind: 'Name', value: 'currencyFractionUnits' } }, { kind: 'Field', name: { kind: 'Name', value: 'currencySymbol' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }] } }] } as unknown as DocumentNode<StaticListsQuery, StaticListsQueryVariables>
export const DropdownStaticListsDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'dropdownStaticLists' }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countries' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'ObjectValue', fields: [{ kind: 'ObjectField', name: { kind: 'Name', value: 'isActive' }, value: { kind: 'ObjectValue', fields: [{ kind: 'ObjectField', name: { kind: 'Name', value: 'equals' }, value: { kind: 'BooleanValue', value: true } }] } }] } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'selectCountry' } }] } }, { kind: 'Field', name: { kind: 'Name', value: 'currencies' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'where' }, value: { kind: 'ObjectValue', fields: [{ kind: 'ObjectField', name: { kind: 'Name', value: 'isActive' }, value: { kind: 'ObjectValue', fields: [{ kind: 'ObjectField', name: { kind: 'Name', value: 'equals' }, value: { kind: 'BooleanValue', value: true } }] } }] } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'selectCurrency' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'selectCountry' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'selectCurrency' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Currency' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'currencySymbol' } }] } }] } as unknown as DocumentNode<DropdownStaticListsQuery, DropdownStaticListsQueryVariables>
export const SearchCountriesPublicDocument = { kind: 'Document', definitions: [{ kind: 'OperationDefinition', operation: 'query', name: { kind: 'Name', value: 'searchCountriesPublic' }, variableDefinitions: [{ kind: 'VariableDefinition', variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } }, type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'CountryWhereInput' } } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'countries' }, arguments: [{ kind: 'Argument', name: { kind: 'Name', value: 'input' }, value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } } }], selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'FragmentSpread', name: { kind: 'Name', value: 'staticCountry' } }] } }] } }, { kind: 'FragmentDefinition', name: { kind: 'Name', value: 'staticCountry' }, typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'Country' } }, selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'code' } }, { kind: 'Field', name: { kind: 'Name', value: 'countryCurrencyCode' } }, { kind: 'Field', name: { kind: 'Name', value: 'id' } }, { kind: 'Field', name: { kind: 'Name', value: 'locale' } }, { kind: 'Field', name: { kind: 'Name', value: 'name' } }, { kind: 'Field', name: { kind: 'Name', value: 'timezones' } }] } }] } as unknown as DocumentNode<SearchCountriesPublicQuery, SearchCountriesPublicQueryVariables>