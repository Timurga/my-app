import FooterRegistrationButton from "./FooterRegistrationButton";
import FooterRegistrationInfo from "./FooterRegistrationInfo";

function FooterRegistration() {
    return (
        <a href="/" className="bg-gradient-to-r from-[#af2896] to-[#509bf5] text-white py-4 px-8 flex flex-wrap justify-between items-center gap-y-2 gap-x-6">
            <FooterRegistrationInfo />
            <FooterRegistrationButton />
        </a>
    );
  }
  
  export default FooterRegistration;