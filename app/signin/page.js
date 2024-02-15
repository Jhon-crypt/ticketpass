import Header from "../components/header/header"
import SigninSection from "../components/section/signinSection";

export default function SignIn() {

    const Section = {
        background: "#6A3CB5",
        height: "100%",
    };

    return (

        <>

            <div>
                <section style={Section}>
                    <Header />
                    <div className="container px-5" style={{ backgroundImage: "url('https://res.cloudinary.com/db7wwc9ex/image/upload/v1708033865/headerImg_md8vpx.png')" }}>
                        <SigninSection />
                    </div>
                    <br />
                </section>
            </div>

        </>

    )

}