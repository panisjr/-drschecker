import { useState, ReactNode } from "react";
import { UserContext } from "./UserContext";
import { User } from "./types";

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User []>([]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
