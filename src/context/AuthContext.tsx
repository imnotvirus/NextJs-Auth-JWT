import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
type userProps = {
  id: string;
  email: string;
  name: string;
};
type signInData = {
  email: string;
  password: string;
};
type AuthContextType = {
  isAuthenticated: boolean;
  user?: userProps;
  signIn: (data: signInData) => Promise<void>;
};
export const AuthContext = createContext({} as AuthContextType);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<userProps>();
  const isAuthenticated = !!userInfo;

  useEffect(() => {
    const { "next-token": token } = parseCookies();
    if (token) {
      api.get("/profile").then((res) => {
        setUserInfo(res.data);
      });
    }
  }, []);

  async function signIn(data: signInData) {
    try {
      const response = await api.post("http://localhost:4000/auth-user", {
        email: data.email,
        password: data.password,
      });
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      setUserInfo(response.data.user);
      setCookie(undefined, "next-token", response.data.token, {
        maxAge: 60 * 60 * 1,
      });
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user: userInfo, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
