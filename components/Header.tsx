const Header = () => {
  return (
    <header className='w-full fixed py-8'>
      <div className='flex w-11/12 mx-auto justify-between text-xl'>
        <span className='font-bold'>LYNE</span>
        <nav className='flex gap-x-10'>
          <span>Home</span>
          <span>Projects</span>
          <span>About</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
