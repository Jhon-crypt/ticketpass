import DashboardHeader from '../components/header/dashbaordHeader'
import DashbaordSidebar from '../components/header/dashboardSidebar'
import '../components/styles/dashboard-styles/styles.css'

export default function CreateEventsDashboard() {

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

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ backgroundColor: "#F2F4F7" }}>

                        <div class="blankslate">
                            <img class="blankslate-top-img" src="/images/blankslate/1.png" />
                            <div class="blankslate-body">
                                <h4>You don't have access to this issue</h4>
                                <p>
                                    Make sure the issue exists in this project. If it does, ask a project
                                    admin for permission to see the project's issues.
                                </p>
                            </div>
                            <div class="blankslate-actions">
                                <button class="btn btn-default" type="button">Secondary action</button>
                                <button class="btn btn-primary" type="button">Primary action</button>
                            </div>
                        </div>

                    </main>

                </div>

            </div>

        </>

    )

}