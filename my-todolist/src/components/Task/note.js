import React, { Component } from "react";
import styles from "@/components/task/taskpage.module.css"

class Note extends Component {
render() {
    return (
        <div className={styles.note} onClick={this.props.deleteMethod}>
            {this.props.text}
        </div>
        );
    }
}

export default Note;
