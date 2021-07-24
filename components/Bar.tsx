import { FunctionComponent } from 'react';
import { SkillInterface } from '../type';

const Bar: FunctionComponent<{ data: SkillInterface }> = ({ data: { Icon, level, name } }) => {
  console.log('name', name);
  console.log('icon', Icon);
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-orange to-blue"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
