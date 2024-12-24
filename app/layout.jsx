import "@styles/globals.css";

export const metadata = {
    title: "Searchtopia",
    description: "discover & share ai prompt",
};
import Nav from "@components/Nav";
import Provider from  "@components/Provider";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
