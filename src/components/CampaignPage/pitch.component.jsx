import React from 'react'
import {Tabs, Typography} from 'antd';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const {Title, Paragraph, Text, Link} = Typography;

const {TabPane} = Tabs;

function PitchComponent(props) {
    return <>
        <Typography>
            <Title>{props.campaign.name}</Title>
                <ReactMarkdown plugins={[gfm]} children={props.campaign.pitch} />

        </Typography>

    </>
}

export default PitchComponent

{/*In the process of internal desktop applications development, many different design specs and*/
}
{/*implementations would be involved, which might cause designers and developers difficulties and*/
}
{/*duplication and reduce the efficiency of development.*/
}