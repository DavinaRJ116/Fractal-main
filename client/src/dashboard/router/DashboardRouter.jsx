import { Route,Routes} from "react-router-dom"
import Dashboard from "../components/Dashboard"

const DashboardRouter = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Dashboard/>}>

            </Route>
        </Routes>
        </>
    )
}

export default DashboardRouter