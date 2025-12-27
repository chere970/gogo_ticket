import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex  justify-between items-center p-4 bg-purple-200 shadow-md">
      <div className="flex flex-row ">
        <div className="flex space-x-4 items-center">
          <Link href="/">
            <FontAwesomeIcon icon={faHome} className="icon" />
          </Link>
          <Link href="/TicketPage/New">
            <FontAwesomeIcon icon={faTicket} className="icon" />
          </Link>
        </div>
        <div>
          <p className="text-black text-center">che@gmail.com</p>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
