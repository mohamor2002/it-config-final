const Header = ({ title, description,keyword }) => {
  return (
    <div className=" font-roboto space-y-1 md:space-y-2 text-base md:text-xl ">
      <p className=" font-bold tracking-normal md:tracking-wide ">
        [IT Config@${keyword} ∼] $ <span className=" font-normal"> git status</span>
      </p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Header;
