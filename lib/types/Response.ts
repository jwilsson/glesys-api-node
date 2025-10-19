export type Response<T> = {
    body: T;
    headers: Headers;
    status: number;
    statusText: string;
}
