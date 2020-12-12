import './App.less';
import ProLayout, {DefaultFooter} from '@ant-design/pro-layout';
import {Route, Switch} from 'react-router-dom';
import {GithubOutlined} from '@ant-design/icons';
import HomePage from "./pages/HomePage/HomePage.page";
import Login from "./pages/Login/Login.page"
import SignUp from "./pages/SignUp/SignUp.page"
import GlobalHeaderRight from "./components/GlobalHeaderRight/GlobalHeaderRight.component"

const defaultFooterDom = (
    <DefaultFooter
        copyright={`${new Date().getFullYear()} Finance It`}
        links={[
            {
                key: 'Website',
                title: 'Website',
                href: 'https://pict.acm.org',
                blankTarget: true,
            },
            {
                key: 'github',
                title: <GithubOutlined/>,
                href: 'https://github.com/PICT-ACM-Student-Chapter',
                blankTarget: true,
            },
            {
                key: 'LinkedIn',
                title: 'LinkedIn',
                href: 'https://ant.design',
                blankTarget: true,
            },
        ]}
    />
);

function App() {
    return (

        <ProLayout
            title="Finance It"
            logo="https://pict.acm.org/radiance/img/PASC-W2.png"
            layout="top"
            fixedHeader="true"
            footerRender={() => defaultFooterDom}
            rightContentRender={() => <GlobalHeaderRight/>}


        >
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
            </Switch>
        </ProLayout>
    );
}

export default App;
