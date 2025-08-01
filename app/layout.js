import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      <link rel="icon" type="image/x-icon" href="/assets/Asset 1.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Portfolio of Charaf Eddine Charouit, a Front-end Developer" />
      <meta name="keywords" content="Front-end Developer, Portfolio, Charaf Eddine Charouit, Web Development" />
      <meta name="author" content="Charaf Eddine Charouit" />
      <title>Charaf Eddine Charouit - Portfolio</title>
      <meta property="og:title" content="Charaf Eddine Charouit - Portfolio" />
      <meta property="og:description" content="Explore the portfolio of Charaf Eddine Charouit, showcasing expertise in front-end development." />
      </head>
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}
