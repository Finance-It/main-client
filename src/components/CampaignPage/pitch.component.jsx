import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'


function PitchComponent(props) {
    return (
        <div>
            <ReactMarkdown plugins={[gfm]} children={props.campaign.pitch}/>
        </div>
    )
}

export default PitchComponent

