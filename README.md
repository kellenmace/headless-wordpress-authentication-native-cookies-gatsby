# Headless WordPress Authentication with Native Cookies - Gatsby

This Gatsby app is a port of the Next.js app codebase from this blog post: https://developers.wpengine.com/blog/headless-wordpress-authentication-native-cookies/

This app shows how to authenticate users using WordPress' own native auth cookies.

## Steps to Use:

1. Clone down this repo
1. Create a `.env.development` file inside of the app’s root folder. Open that file in a text editor and paste in `GATSBY_WORDPRESS_API_URL=https://headlesswpcookieauth.local/graphql`, replacing `headlesswpcookieauth.local` with the domain for your local WordPress site. This is the endpoint that Apollo Client will use when it sends requests to your WordPress backend.
1. Run `npm install` (or `yarn`) to install the app’s NPM dependencies.
1. Run `npm run develop` to get the server running locally.
1. You should now be able to visit http://localhost:8000/ in a web browser and see the app’s homepage.

See the blog post linked above for details on how to set up the WordPress backend, and for a tour of the app's features.
