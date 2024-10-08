import linkedInSvg from "../assets/linkedin-logo.svg";

const Header = () => {
  return (
    <nav className="flex w-full justify-around p-4">
      <a
        className="flex items-center"
        target="_blank"
        href="https://www.linkedin.com/in/leoprietsch/"
      >
        <img className="h-8" src={linkedInSvg} />
        <p className="text-offwhite text-xl">LinkedIn</p>
      </a>
      <a
        className="flex items-center"
        target="_blank"
        href="https://github.com/leoprietsch"
      >
        <img className="h-8" src={linkedInSvg} />
        <p className="text-offwhite text-xl">GitHub</p>
      </a>
    </nav>
  );
};

export default Header;
