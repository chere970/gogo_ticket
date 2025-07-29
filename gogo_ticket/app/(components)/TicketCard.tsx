import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg- bg-purple-400 rounded-md shadow-md p-4 m-2">
      <div className="flex mb-3">
        <PriorityDisplay />
        <div>
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px boder-0 bg-purple-950 mb-2" />
      <p className="white"> This is Ticket Description</p>
      <ProgressDisplay />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;
