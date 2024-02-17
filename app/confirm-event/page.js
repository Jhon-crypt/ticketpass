import DashboardHeader from '../components/header/dashbaordHeader'
import DashbaordSidebar from '../components/header/dashboardSidebar'
import ConfirmEventsForm from '../components/forms/confirmEventsForm'
import '../components/styles/dashboard-styles/styles.css'

export default function ConfirmEventsDashboard() {

    return (

        <>

            <DashboardHeader />

            <div className='container-fluid'>

                <div className='row'>

                    <DashbaordSidebar
                        nav_item_color1="black"
                        nav_item_color2="#6A3CB5"
                        nav_item_color3="black"
                        nav_item_color4="black"
                        nav_item_color5="black"
                    />

                    <main class="col-md-9 height-container ms-sm-auto col-lg-10 px-md-4 h-100" style={{ backgroundColor: "#F2F4F7" }}>

                        <ConfirmEventsForm />

                    </main>

                </div>

            </div>

        </>

    )

}