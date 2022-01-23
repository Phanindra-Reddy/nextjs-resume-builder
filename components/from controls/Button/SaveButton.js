import React from 'react'
import styles from "../../../styles/Input.module.css"

function SaveButton(props) {
    const {title, icon, ...rest} = props
    return (
        <div>
            <button type="submit" {...rest} className={styles.saveButton}>{title ? title : icon}</button>
        </div>
    )
}

export default SaveButton
