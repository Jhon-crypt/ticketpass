import DashboardHeader from '../components/header/dashbaordHeader'
import DashbaordSidebar from '../components/header/dashboardSidebar'
import BuisnessDashboardSection from '../components/section/BuisnessdashboardSection'
import '../components/styles/dashboard-styles/styles.css'

export default function BuisnessDashbaord() {

    return (

        <>

            <DashboardHeader />

            <div className='container-fluid'>

                <div className='row'>

                    <DashbaordSidebar />

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ backgroundColor: "#F2F4F7" }}>

                        <BuisnessDashboardSection />
                        
                    </main>


                </div>

            </div>

        </>

    )

}