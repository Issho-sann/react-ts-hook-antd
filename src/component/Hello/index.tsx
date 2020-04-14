import React from 'react'
import { Button } from 'antd'

import styles from './.module.scss'
import './index.scss'

interface HelloProps {
    compiler: number,
    children: JSX.Element
}

interface HelloState {
    name: string,
    age: number
}

enum Color { red, blue }

const Hello = React.memo((props: HelloProps) => {
    const [state, setState] = React.useState<HelloState>({
        name: 'lin',
        age: 12,
    })

    React.useEffect(() => {
        document.title = String(state.age)
    }, [state.age])

    const color: Color = Color.red
    return (
        <>
            <h2 className={styles.compiler}>{ props.compiler }</h2>
            <h3 className={styles.name}>{ state.name }</h3>
            <h4>{ state.age }</h4>
            <Button type="primary" onClick={() => setState(prev => ({...prev, age: prev.age + 1}))}>setState{color}</Button>
            { props.children }
        </>
    )
})

// class Hello extends React.PureComponent<HelloProps, HelloState> {
//     state = {
//         name: 'lin',
//         age: 12
//     }
//     private color: Color = Color.blue

//     static defaultProps = {
//         compiler: 1
//     }
    
//     render() {
//         return (
//             <>
//                 <h2>{ this.props.compiler }</h2>
//                 <h3>{ this.state.name }</h3>
//                 <h4>{ this.state.age }</h4>
//                 <button onClick={() => this.setState(prev => ({age: prev.age + 1}))}>setState{this.color}</button>
//             </>
//         )
//     }
// }

export default Hello