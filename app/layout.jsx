import '@styles/globals.css';

export const metadata = {
  title: "Searchtopia",
  description: "discover & share ai prompt",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
            {children}
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
