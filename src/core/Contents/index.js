import Review from '../../pages/Review';
import AboutUs from '../../pages/AboutUs';
import HowItWorks from '../../pages/HowItWorks';
import PlanYourTrip from '../../pages/PlanYourTrip';
import Tour from '../../pages/Tour';
import MakeaPayment from '../../pages/MakeaPayment';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Contents() {
    return <Switch>
        <Route path="/reviews">
            <Review />
        </Route>
        <Route path="/about-us">
            <AboutUs />
        </Route>
        <Route path="/how-it-Works">
            <HowItWorks />
        </Route>
        <Route path="/plan-Your-Trip">
            <PlanYourTrip />
        </Route>
        <Route path="/tour">
            <Tour />
        </Route>
        <Route path="/make-a-Payment">
            <MakeaPayment />
        </Route>
        <Route exact path="/">
            <Review />
        </Route>
    </Switch>
}

export default Contents;