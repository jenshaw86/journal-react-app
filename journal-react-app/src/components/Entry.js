import React from "react"
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

const Entry = (props) => {
        const [value, setValue] = React.useState(props.entry.content);
        const [selectedTab, setSelectedTab] = React.useState("write")
        // const setValue = (newValue) => {
            
        // }
        return ( 
            <div>
                <h1>Title: {props.entry.title}</h1>
                <ReactMde
                    value={value}
                    onChange={setValue}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))}
                />
            </div>
        )
}

export default Entry