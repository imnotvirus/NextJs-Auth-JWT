import type { NextPage } from "next";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const LogoutPage: NextPage = () => {
  const { logOut } = useAuth();
  useEffect(() => {
    logOut();
  }, [logOut]);
  return <section className=""></section>;
};
export default LogoutPage;