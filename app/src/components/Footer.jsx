import Github from "../icons/Github";
const Footer = () => {
  return (
    <div className="flex justify-evenly py-5  flex-wrap font-0 text-white bg-indigo-800 fixed bottom-0 w-full">
      <div>Games Inventory</div>
      <div className="flex gap-1">
        <a
          href="https://github.com/AtmaniChouaib22"
          target="_blank"
          rel="noreferrer"
        >
          AtmaniChouaib22
        </a>
        <Github />
      </div>
    </div>
  );
};

export default Footer;
