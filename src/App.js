import React from 'react';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {x:1}
    }
    onClick = () => {
        this.setState({
                x: this.state.x + 1  // 1
            }, ()=>{
                this.setState({
                    x: this.state.x + 1  // 1
                })
            }
        )
    }

    onClick2 = () => {
        this.setState((state) => ({x: state.x + 1}))
        this.setState((state) => ({x: state.x + 1}))
    }

    render() {
        return (
            <div className="App">
                App
                <button onClick={this.onClick2}>+1</button>
                <B name={this.state.x}/>
            </div>
        )
    }
}

class B extends React.Component {
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log('旧的 props')
        console.log(this.props);
        console.log('props 变化了');
        console.log('新的 props');
        console.log(nextProps);
    }

    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

export default App;
