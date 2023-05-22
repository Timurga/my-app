import FooterItem from "./FooterItem";

function TheFooter() {
    return (
        <footer className="mt-auto mb-8 ml-6">
            <ul>
                {['Cookies', 'Privacy'].map((label) => (
                    <FooterItem key={label}>
                        {label}
                    </FooterItem>
                ))}
            </ul>
        </footer>
    );
}

export default TheFooter;