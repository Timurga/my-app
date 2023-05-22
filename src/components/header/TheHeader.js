import {ChevronLeftIcon, ChevronRightIcon, Bars3Icon} from '@heroicons/react/24/outline';
import TheLoginButton from './TheLoginButton';
import TheRegistrationButton from './TheRegistrationButton';

function TheHeader() {
  return (
        <header className="bg-[#070707] flex flex-1 justify-between items-center py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
            <div className="flex">
                <a href="#sidebar" className="text-[#969696] p-1 -ml-1.5 mr-[8px] inline-block lg:hidden">
                    <Bars3Icon className="h-6 w-6" />

                </a>

                <a href="/" className="text-[#969696] p-1 cursor-not-allowed mr-[8px]">
                    <ChevronLeftIcon className="h-6 w-6" />
                </a>

                <a href="/" className="text-[#969696] p-1 cursor-not-allowed ml-[8px]">
                    <ChevronRightIcon className="h-6 w-6" />
                </a>
            </div>

            <div className="">
                <TheRegistrationButton />
                <TheLoginButton />
            </div>
        </header>
  );
}

export default TheHeader;