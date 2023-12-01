const {USER_NAME, PASSWORD} = process.env
export const CONNECT_DB_URL: string =`mongodb+srv://${USER_NAME}:${PASSWORD}@cluster-mern-app.8lriu.mongodb.net/localExp?retryWrites=true&w=majority`



type user = {
        id: number;
        name: string;
        age: number;
        email: string;
    };
    type UserStoreType = {
        [key: string]: user
    }

export const user: UserStoreType = { 
    0: {
        id: 0,
        name: "user 0",
        age: 0,
        email: "email 0",
    },
    1: {
        id: 1,
        name: "user 1",
        age: 1,
        email: "email 1",
    },
    2: {
        id: 2,
        name: "user 2",
        age: 2,
        email: "email 2",
    },
    3: {
        id: 3,
        name: "user 3",
        age: 3,
        email: "email 3",
    },
    4: {
        id: 4,
        name: "user 4",
        age: 4,
        email: "email 4",
    }

};