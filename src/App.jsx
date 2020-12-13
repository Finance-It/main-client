import './App.less';
import ProLayout, {DefaultFooter} from '@ant-design/pro-layout';
import {Route, Switch} from 'react-router-dom';
import {GithubOutlined} from '@ant-design/icons';
import HomePage from "./pages/HomePage/HomePage.page";
import Login from "./pages/Login/Login.page"
import SignUp from "./pages/SignUp/SignUp.page"
import GlobalHeaderRight from "./components/GlobalHeaderRight/GlobalHeaderRight.component"
import axios from "axios";

import CampaignPage from "./pages/CampaignPage/campaign.page";
import MyInvestmentsPage from "./pages/InvestmentsPage/myInvestments.page";
import PaymentSuccessPage from "./pages/paymentSuccess.page";
import NewCampaign from "./pages/NewCampaignPage/newCampaign.page";
import CampaignAdminPage from "./pages/CampaignAdminPage/campaign.page";
import MyCampaignsPage from "./pages/CampaignPage/myCampaigns";

const defaultFooterDom = (
    <DefaultFooter
        copyright={`${new Date().getFullYear()} Finance It`}
        links={[
            {
                key: 'Website',
                title: 'Website',
                href: 'https://financeit.cf',
                blankTarget: true,
            },
            {
                key: 'github',
                title: <GithubOutlined/>,
                href: 'https://github.com/Finance-It',
                blankTarget: true,
            },
            {
                key: 'Hackathon',
                title: 'FTX Hackathon',
                href: 'ftx-hackathon.devfolio.co',
                blankTarget: true,
            },
        ]}
    />
);

function App() {
    if (sessionStorage.getItem('token'))
        axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem('token')}`;

    return (
        <Switch>

            <ProLayout
                title="Finance It"
                // logo="https://pict.acm.org/radiance/img/PASC-W2.png"
                layout="top"
                fixedHeader="true"
                footerRender={() => defaultFooterDom}
                rightContentRender={() => <GlobalHeaderRight/>}


            >
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/campaign/:id/admin" component={CampaignAdminPage}/>
                <Route exact path="/campaign/:id" component={CampaignPage}/>
                <Route exact path="/investments" component={MyInvestmentsPage}/>
                <Route exact path="/payment_success" component={PaymentSuccessPage}/>
                <Route exact path="/campaigns/new" component={NewCampaign}/>
                <Route exact path="/mycampaigns" component={MyCampaignsPage}/>

            </ProLayout>
        </Switch>

    )
        ;
}

export default App;
