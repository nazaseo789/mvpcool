export default {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
    <meta name="google-site-verification" content="DdEgye0t2Tti9nJ6Fwq7q3NR_zpsdq5FfBW_72YqY7Q" />
    <meta name=”robots” content=”index, follow”>
<meta name="description" content="sample meta description."></meta>
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  script: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      defer: true,
      id: 'netlify-identity-widget-script'
    }
  ]
}
