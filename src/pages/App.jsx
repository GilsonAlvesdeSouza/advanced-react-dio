import React, {Component} from 'react'
import {Twitter} from "../components";

class App extends Component {

    state = {
        loading: false,
        active: true,
        posts: [{
            title: 'xpto',
            description: 'foo',
        }, {
            title: 'src',
            description: 'foo-bar',
        }]
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: true,
                // posts: [{
                //     title: "resposta async",
                //     description: 'teste',
                // }]
            });
        }, 3000);
    }

    onRemove = () => {
        this.setState({
            active: false,
        });
    }

    onUpdate = () => {
        this.setState({
            posts: [{
                title: "resposta async",
                description: 'teste',
            }]
        });
    }

    render() {
        return (
            <div>
                {this.state.active &&
                (<Twitter posts={this.state.posts} loading={this.state.loading}/>)}
                <button onClick={this.onRemove}>Remover Componente</button>
                <button onClick={this.onUpdate}>atualizar Componente</button>
            </div>
        )
    }
}

export default App;