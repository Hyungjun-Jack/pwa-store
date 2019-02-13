import React from 'react'
import Header from '../components/Header';

const withLayout = (Component) => {
    return class extends React.Component{
        render() {
            return (
                <div>
                    <Header></Header>
                    <Component></Component>
                </div>
            )
        }
    }
}

export default withLayout;