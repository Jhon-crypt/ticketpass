import EventTypeHero from '../../components/hero/eventTypeHero'
import CustomeHeader from '../../components/header/customHeader'
import FeaturedSection from '@/app/components/section/featuredSection';
import PopularDemandSection from '@/app/components/section/popularDemanSection';
import OnlineEventsSection from '@/app/components/section/onlineEventsSections';
import FreeEventsSection from '@/app/components/section/freeEventsSection';
import '../../components/styles/events-style/style.css'

export function generateStaticParams() {
    return [{ type: '1' }]
}

export default function Events({ params }) {

    const { type } = params

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

                <EventTypeHero title={type}/>

            </section>

            <FeaturedSection title={type}/>

            <PopularDemandSection />

            <OnlineEventsSection />

            <FreeEventsSection />

        </>

    )
}
