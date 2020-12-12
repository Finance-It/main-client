import logo from './logo.svg';
import './App.less';
import ProLayout, {DefaultFooter} from '@ant-design/pro-layout';
import {GithubOutlined} from '@ant-design/icons';

const defaultFooterDom = (
    <DefaultFooter
        copyright={`${new Date().getFullYear()} PICT ACM Student Chapter`}
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
          title="PASC OJ"
          logo="https://pict.acm.org/radiance/img/PASC-W2.png"
          layout="top"
          fixedHeader="true"
          footerRender={() => defaultFooterDom}

      >
          <h1>sflsdkfldj</h1>
      </ProLayout>
  );
}

export default App;
