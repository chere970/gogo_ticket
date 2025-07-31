import TicketForm from "@/app/(components)/TicketForm";

interface PageProps {
  params: any; // Replace 'any' with a more specific type if possible
}

const page = ({ params }: PageProps) => {
  return (
    <div>
      <TicketForm />
    </div>
  );
};
export default page;
