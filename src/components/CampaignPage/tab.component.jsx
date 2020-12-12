import React from 'react'
import {Tabs} from 'antd';
import {AndroidOutlined, AppleOutlined} from '@ant-design/icons';
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

    const children = {guide: 'Frequently Asked Questions\n\n' +
        '1.What\'s the warranty policy?\n\n' +
        'We have a 2-years warranty period. If there any issues with the product, you can send a service request to usa@ciga-design.com with the receipt, serial number, detailed description of the problem, and a photo or video attached. We will repair or replace the unit if the mechanism or workmanship is found to be defective or malfunction. This limited warranty does not cover damage resulting from abuse, accident, misuse, and improper storage.\n' +
        '2.When will the watch begin to ship?\n\n' +
        'Feb 2021, but we are working with the factory and planning to ship 1st small batch when the campaign ends, let you guys receive the watch ASAP. And the massive production will be after.\n' +
        '3.Does this watch needs a battery?\n\n' +
        'No, CIGA Design X Series has an automatic mechanical movement, which means you have 2 ways to provide energy to the watch. 1. Screw the crown 2. Casually swing your arm while walking.\n' +
        '4.What\'s the difference between Titanium Edition and Stainless Steel Edition?\n\n' +
        'The titanium version is lighter, slimmer, and more comfortable to wear. Highly recommended.\n\n' +
        '5.How many straps does these perks contain?\n\n' +
        'There will be one silicone and one nylon straps, a total of two straps.\n\n' +
        '6.Can my wrist fit the watch?\n\n' +
        'CIGA Design X Series straps have a total length of 258mm(with Nylon Strap)/ 259mm(with Silicone Strap), fitting most of the human wrists.\n' +
        '7.Do I need any tools for switching the straps?\n\n' +
        'CIGA Design X Series have the quick-switch function: you can totally switch them by hands, no tools needed. Just push the bar on the strap with your finger to release the strap. Any straps with a width of 22mm will fit this watch.\n' +
        '8.Can I keep wearing it in a hot bath?\n\n' +
        'Although CIGA Design x Series reaches 3ATM waterproof grade, do not keep the watch in the environment of steam and relatively high temperature.'}


    return <>
        <Tabs defaultActiveKey="1">
            <TabPane
                tab={
                    <span>

         <h2> <AppleOutlined/> Proposal</h2>
        </span>
                }
                key="1"
            >
                <PitchComponent campaign={props.campaign}/>
            </TabPane>
            <TabPane
                tab={
                    <span>
          <h2> <AndroidOutlined/>SEBI GUIDELINES</h2>
        </span>
                }
                key="2"
            >
                <ReactMarkdown plugins={[gfm]} children={children.guide} />
            </TabPane>
        </Tabs>
    </>
}

export default TabComponent