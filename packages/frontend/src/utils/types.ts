export type Nullable<T> = T | null;

export type Values<T> = T[keyof T];

export type Override<T, U> = Omit<T, keyof U> & U; // override properties
