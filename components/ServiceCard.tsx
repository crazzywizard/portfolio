import { FunctionComponent } from 'react';
import { ServiceInterface } from '../type';

const ServiceCard: FunctionComponent<{ service: ServiceInterface }> = ({
  service: { Icon, about, title }
}) => {
  const createMarkup = () => {
    return {
      __html: about
    };
  };
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-orange" />
      <div>
        <h6 className="font-bold">{title}</h6>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
