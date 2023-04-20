export type PageRoute = {
    id: string;
    name: String;
    path: string;
    element:()=> JSX.Element;
    children?: PageRoute[];
}