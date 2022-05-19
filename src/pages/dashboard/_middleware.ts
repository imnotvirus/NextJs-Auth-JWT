import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
const AuthMiddleware = async (req: NextRequest, ev: NextFetchEvent) => {
  const token = req.cookies["next-token"];
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
};
export default AuthMiddleware;
