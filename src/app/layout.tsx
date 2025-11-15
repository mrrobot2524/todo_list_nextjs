import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: 'Next Todo',
  description: "Простой Todo на Next.js"
}

export default function RootLayout({children} : { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{display:'flex', justifyContent:'center', padding:'24px'}}>
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
