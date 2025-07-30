import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}
