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
      <div className="flex mt-2">
        <div className=" flex flex-col">
          <p className="text-xs my-1">08/31/23 10:43</p>
          <ProgressDisplay />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
