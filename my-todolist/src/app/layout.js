import './globals.css';


export const metadata = {
  title: 'ToDo List',
  description: 'Created by Johnson and Enoch',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
        {children}
      </>
    </html>
  );
}
