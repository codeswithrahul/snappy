import { Client, Account, Databases, Avatars, Storage } from "appwrite"

export const appWriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID
}

export const client = new Client();
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Avatars(client);
export const avatars = new Storage(client);
