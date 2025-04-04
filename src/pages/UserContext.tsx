import { createContext } from "react";
import { User } from "./types";

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

// Export only the context here
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
