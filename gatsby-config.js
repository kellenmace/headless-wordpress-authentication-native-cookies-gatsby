require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "headless-wp-cookie-auth-gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.GATSBY_WORDPRESS_API_URL,
      },
    },
  ],
};
