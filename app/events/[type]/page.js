import EventTypeHero from '../../components/hero/eventTypeHero'
import CustomeHeader from '../../components/header/customHeader'
import FeaturedSection from '@/app/components/section/featuredSection';

export default function Events({ params }) {

    const Section = {
        backgroundImage: "url('/eventType.png')",
        height: "36rem",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    return (

        <>

            <section style={Section}>

                <CustomeHeader />

                <EventTypeHero />

            </section>

            <FeaturedSection />

        </>

    )
}
