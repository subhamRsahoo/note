import React, { Component } from 'react';
import './design.css';
export default class FormDataComponent extends Component {
    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeName1 = this.onChangeName1.bind(this);
        this.onChangeName2 = this.onChangeName2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            name1: '',
            name2: ''
        }
    }

    // Form Values
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeName1(e) {
        this.setState({ name1: e.target.value })
    }

    onChangeName2(e) {
        this.setState({ name2: e.target.value })
    }


    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                name1: this.userData.name1,
                name2: this.userData.name2
            })
        } else {
            this.setState({
                name: '',
                name1: '',
                name2: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
    }


    render() {
        return (
            
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="contain">
                        <h1>Notes</h1>
                        <textarea type="text" placeholder="let's grow in life..." className="text1" value={this.state.name} onChange={this.onChangeName} />
                        {/* <button type="submit" className="btn1">Save</button> */}
                    </div>

                   
                    <div className="contain1">
                        <h2>WHAT I LEARNED FROM TODAY?</h2>
                        <textarea type="text" placeholder="What i learned from today noenough for Tomorrow" className="text2" value={this.state.name1} onChange={this.onChangeName1} />
                        {/* <button type="submit" className="btn2">Save</button> */}
                    </div>
                    
                    <div className="contain2">
                        <h2>HOW CAN I MAKE TOMORROW BETTER?</h2>
                        <textarea type="text" placeholder="let's change the lifestyle" className="text3" value={this.state.name2} onChange={this.onChangeName2} />
                        {/* <button type="submit" className="btn3">Save</button> */}
                    </div>
                </form>
            
        )
    }
}
