import EventTypeHero from '../../components/hero/eventTypeHero'
import CustomeHeader from '../../components/header/customHeader'
import FeaturedSection from '@/app/components/section/featuredSection';
import PopularDemandSection from '@/app/components/section/popularDemanSection';
import OnlineEventsSection from '@/app/components/section/onlineEventsSections';
import FreeEventsSection from '@/app/components/section/freeEventsSection';
import '../../components/styles/events-style/style.css'

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

                <EventTypeHero title={params.type}/>

            </section>

            <FeaturedSection title={params.type}/>

            <PopularDemandSection />

            <OnlineEventsSection />

            <FreeEventsSection />

        </>

    )
}
