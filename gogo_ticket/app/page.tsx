import TicketCard from "./(components)/TicketCard";

const DashBoard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};
export default DashBoard;
