import Header from "../components/header/header";

export const metadata = {
    title: 'Select Ticket | TicketPass',
    description: 'Ticket',
  }
  
  export default function EventsLayout({ children }) {
    const Section = {
      background: "#6A3CB5",
      height: "36rem",
      borderBottomLeftRadius: "50px", // Adjust the value as needed
      borderBottomRightRadius: "50px", // Adjust the value as needed
    };

    return (
      <html lang="en">
        <body>
        <Header />
          {children}
        </body>
      </html>
    )
  }
  