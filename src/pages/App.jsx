import React, {Component} from 'react';
import {Twitter} from "../component";

class App extends Component {

    state = {
        loading: false,
        actived: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: true,
            });
        }, 3000)
    }

    onRemove = () => {
        this.setState({
            actived: false,
        });
    }

    posts = [
        {
            title: 'xpto',
            description: 'foo'
        },
        {
            title: 'xp',
            description: 'level UP!'
        }
    ];

    render() {

        return (
            <div>
                <h1>Ciclo de vida</h1>
                {this.state.actived && (<Twitter posts={this.posts} loading={this.state.loading}/>)}
                <button onClick={this.onRemove}>Remover Componente</button>
            </div>
        );
    }
}

export default App;