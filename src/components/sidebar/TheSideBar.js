import TheLogo from './TheLogo';
import TheNav from './TheNav';
import TheFooter from './TheFooter';

function TheSideBar() {
  return (
    <aside id="sidebar" className="bg-black w-[256px] text-[#b2b2b2] flex flex-col fixed lg:sticky overflow-hidden top-0 z-30 h-screen lg:h-auto -translate-x-full lg:translate-x-0 target:translate-x-0 transition-transform peer">
        <TheLogo />
        <TheNav />
        <TheFooter />
    </aside>
  );
}

export default TheSideBar;
