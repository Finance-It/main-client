import React from 'react'
import {Tabs} from 'antd';
import {BookOutlined, BulbOutlined, SketchOutlined} from '@ant-design/icons';
import PitchComponent from "./pitch.component";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const {TabPane} = Tabs;

//TODO: Change tab icons
function TabComponent(props) {

    // const campaign = {
    //
    //     name: "Execute It Mega Workspace Fund Raiser",
    //     pitch: 'The Elevator Pitch\n' +
    //         'The speaker has 30 seconds to introduce the business idea and to offer a first impression about the startup. The name “Elevator-Pitch“ is deduced from the idea of creating attention of a potential investor within a very short time. For the length of the (imaginary) elevator ride with the investor, you have the possibility to convince the him of your idea and invite him to a longer talk in a follow-up. Also, you usually do not use further presentation materials like slides during the Elevator-Pitch.\n' +
    //         '\n' +
    //         'The Pitch Deck\n' +
    //         'During a common pitch, which is not as short as the “Elavator-Pitch“, you hae the possibility to use presentations to underline your speech. Although you do have more time, it is important to keep the presentation as clean and short as possible, because the attention span of the audience usually is limited to approximately 15 minutes. The slides of your presentation are usually called „Pitch Deck“. In the following, we introduce you to a model which is recommended by many famous investors like David Cowan and Dave McClure. Your presenation should be about 10-13 minutes and should include all important information concerning your Startup. Make use of meaningful pictures instead of using to long texts. An impressive pitch deck is quite simple and minimalistic, but uses many visual details. The text should be spoken freely and and be included not on the slides but in the notes of the Pitch Deck. This way,  you can easily send you presentation in PDF format.'
    //
    // }

    const children = {
        guide: `The proposed accredited investors who may be allowed to invest through crowdfunding platforms are as under: 
-  Qualified Institutional Buyers (QIBs) as defined in SEBI (Issue of Capital and Disclosure Requirements) regulations, 2009 as amended from time to time, 
-  Companies incorporated under the Companies Act of India, with a minimum net worth10
-  High Net Worth Individuals (HNIs) with a minimum net worth Rs. 2 Crores or more (excluding the value of the primary residence or any loan secured on such property), and of Rs. 20 Crore, 
-  Eligible Retail Investors (ERIs): 
\t-  who receive investment advice from an Investment Adviser, or o who avail services of a Portfolio manager, or \t
\t-  who have passed an Appropriateness Test (may be conducted by an institution accredited by NISM or the crowdfunding platforms), 
\t**and**
\t- who have a minimum annual gross income of Rs. 10 Lacs, 
\t- who have filed Income Tax return for at least last 3 financial years, 
\t- who certify that they will not invest more than Rs. 60,000 in an issue through crowdfunding platform, 
\t- who certify that they will not invest more than 10% of their net worth through crowdfunding. (Net worth excludes the value of the primary residence or any loan secured on such property).`
    }


    return <>
        <Tabs defaultActiveKey="1">
            <TabPane
                tab={
                    <span>

         <h2> <BulbOutlined/> Proposal</h2>
        </span>
                }
                key="1"
            >
                <PitchComponent campaign={props.campaign}/>
            </TabPane>
            <TabPane
                tab={
                    <span>
          <h2> <BookOutlined/> SEBI GUIDELINES</h2>
        </span>
                }
                key="2"
            >
               <h1> <ReactMarkdown plugins={[gfm]} children={children.guide}/></h1>
            </TabPane>
            {props.campaign.type === 'Reward' && <TabPane
                tab={
                    <span>
          <h2> <SketchOutlined/> REWARDS</h2>
        </span>
                }
                key="3"
            >
                <h1><ReactMarkdown plugins={[gfm]} children={props.campaign.reward}/></h1>
            </TabPane>}
        </Tabs>
    </>
}

export default TabComponent