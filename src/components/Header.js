import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
        // this.onInputChangeHandler = this.onInputChangeHandler.bind();
    }

    inputChangeHandler = (e) => {
        this.setState({keyword: e.target.value})
        this.props.keywordChangeHandler(e.target.value)
    }


    render() {
        return (
            <nav className="nav-section">
                <h2 >
                    <span >RECOMMEND VIDEO</span>
                </h2>
                <form>
                    <input
                        onChange={this.inputChangeHandler} value={this.state.keyword}
                        type="text" placeholder="検索..." aria-label="検索..." 
                    />
                </form>
            </nav>
        )
    }
}

export default Header;