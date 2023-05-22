import TheSideBar from './sidebar/TheSideBar';
import TheSideBarOverlay from './sidebar/TheSideBarOverlay';
import TheHeader from './header/TheHeader';
import TheMain from './main/TheMain';
import FooterRegistration from './footerRegistration/FooterRegistration';

function App() {
    return (
        <>
            <div className="flex flex-grow overflow-auto">
                <TheSideBar />
                <TheSideBarOverlay />
                <div className="flex-1 overflow-auto">
                    <TheHeader />
                    <TheMain />
                </div>
            </div>
            <FooterRegistration />
        </>
    );
}

export default App;