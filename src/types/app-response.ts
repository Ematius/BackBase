export type AppResponse<T> = {
    results: T[] | null;
    error: string;
};
