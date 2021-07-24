import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Currently pursuing a Bachelor of Science degree in Computer Science from Mount Vernon
        Nazerene University. Have 2+ years of experience in Voice App Development, as well as Full
        Stack development.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide"> What I can do....</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
