import { type NextRequest, NextResponse } from "next/server";

const PROTECTED_ROUTES = ["/dashboard"];

const DEV_ONLY_ROUTES = ["/design-system"];

// const ROUTE_REDIRECTS = {
// 	"/dashboard": "/dashboard/profile",
// } as const;

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	// const session = await getSession();

	const isDevOnly = DEV_ONLY_ROUTES.some((route) => pathname.startsWith(route));
	if (isDevOnly && process.env.NODE_ENV !== "development") {
		return NextResponse.redirect(new URL("/", req.nextUrl));
	}

	// Check if the current route requires authentication
	const needsAuth = PROTECTED_ROUTES.some((route) =>
		pathname.startsWith(route),
	);
	if (!needsAuth) {
		return NextResponse.next();
	}

	// Redirect to login page if user is not logged in
	// if (!session?.isLoggedIn) {
	// 	return NextResponse.redirect(new URL("/login", req.nextUrl));
	// }

	// Redirect to specific page if the current route is a redirect
	// const redirectPath =
	// 	ROUTE_REDIRECTS[pathname as keyof typeof ROUTE_REDIRECTS];
	// if (redirectPath) {
	// 	return NextResponse.redirect(new URL(redirectPath, req.nextUrl));
	// }

	// Redirect to profile page if user is not allowed to access the current route
	// if (
	// 	session.role &&
	// 	pathname.startsWith("/dashboard") &&
	// 	tabsData[session.role].every((tab) => !pathname.startsWith(tab.href))
	// ) {
	// 	return NextResponse.redirect(new URL("/dashboard/profile", req.nextUrl));
	// }

	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*"],
};
