import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = ({
    handleCheckboxChange,
    navRef,
    containerNavRef,
    btnCheckBoxRef, children
}) => {
    return (
        <>
            <Header
                handleCheckboxChange={handleCheckboxChange}
                nav={navRef}
                containerNav={containerNavRef}
                btnCheckBox={btnCheckBoxRef}
            />
            <main>
                {children}
            </main>
            <Footer />

        </>
    )
}

export default MainLayout
