import { ServiceInterface, SkillInterface } from './type';
import { RiComputerLine, RiChatVoiceFill } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineApi } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
export const services: ServiceInterface[] = [
  {
    title: 'Frontend Development',
    about: 'Build beautiful SPA using <b> HTML</b>, <b>CSS</b> and <b>React.js</b>',
    Icon: RiComputerLine
  },
  {
    title: 'Backend Development',
    about: 'database, server, api using <b>Express </b> & other popular frameworks',
    Icon: FaServer
  },
  {
    title: 'API Development',
    about: "Build efficient API's using <b>FastAPI </b>",
    Icon: AiOutlineApi
  },
  {
    title: 'Voice App Development',
    about:
      'Develop voice apps for google assitant and amazon alexa utilizing <b>Jovo Framework </b>',
    Icon: RiChatVoiceFill
  }
];

export const languages: SkillInterface[] = [
  {
    name: 'Python',
    level: '55%',
    Icon: BsCircleFill
  },
  {
    name: 'Javascript',
    level: '85%',
    Icon: BsCircleFill
  },
  {
    name: 'C++',
    level: '35%',
    Icon: BsCircleFill
  },
  {
    name: 'Java',
    level: '35%',
    Icon: BsCircleFill
  },
  {
    name: 'React.js',
    level: '65%',
    Icon: BsCircleFill
  },
  {
    name: 'Jovo',
    level: '55%',
    Icon: BsCircleFill
  },
  {
    name: 'Typescript',
    level: '35%',
    Icon: BsCircleFill
  }
];
export const tools: SkillInterface[] = [
  {
    Icon: BsCircleFill,
    name: 'Docker',
    level: '75%'
  },
  {
    Icon: BsCircleFill,
    name: 'Argo Tunnel',
    level: '45%'
  }
];
