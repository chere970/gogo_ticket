interface PageProps {
  params: any; // Replace 'any' with a more specific type if possible
}

const page = ({ params }: PageProps) => {
  return <div>page {params.id}</div>;
};
export default page;
