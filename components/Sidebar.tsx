import Image from 'next/image';
import avatarPic from '../images/profile.jpg';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <div>
      <Image src={avatarPic} alt="user avatar" className="w-32 h-32 mx-auto rounded-full" />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-fuggles">
        <span className="text-orange">Sameer </span>
        Rasa
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Full Stack Engineer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* Social Icon */}
      <div className="flex justify-around w-9/12 my-5 text-orange md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Ohio, USA</span>
        </div>
        <p className="my-2">crazzywizard@gmail.com</p>
        <p className="my-2">7404850629</p>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-orange to-blue focus:outline-none"
        onClick={() => window.open('mailto:crazzywizard@gmail.com')}
      >
        Email
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-orange to-blue"
      >
        Toggle Theme
      </button>
    </div>
  );
};
export default Sidebar;
