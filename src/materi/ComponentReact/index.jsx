import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

export default class ComponentReact extends React.Component {
    render() {
        return (
            <div>
                <ClassComponent nama="vicky" />
                <FunctionalComponent />
            </div>
        );
    }
}
