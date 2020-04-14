import React from 'react'

import styles from './.module.scss'

interface PropsType {
    name: string
}
const World = React.memo<PropsType>(props => {
    return <div className={styles.name}>{ props.name }</div>
})

export default World