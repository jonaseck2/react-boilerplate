/** @jsx React.DOM */

var React = require('react');

var InputBox = React.createClass({

    handleSubmit: function(e) {
        e.preventDefault();

        var url = React.findDOMNode(this.refs.url).value.trim();

        React.findDOMNode(this.refs.url).value = '';

        return;
    },

    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label htmlFor="exampleInputUrl">URL</label>
                <input ref="url" type="text" className="form-control" id="exampleInputUrl" placeholder="URL" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-default pull-right">Skicka</button>
              </div>
            </form>
        );
    }

});

var ItemList = React.createClass({

    render: function() {
        var links = [];
        
        this.props.items.forEach(function(item) {
            links.push(<Item url={item.url} text={item.text} />);
        });


        return (
            <section className="item-list">
                <ul>
                    {links}
                </ul>
            </section>
        );
    }

});

var Item = React.createClass({

    render: function() {
        return (
            <li><a href={this.props.url}>{this.props.text}</a></li>
        );
    }

});


var APP = React.createClass({

    getInitialState: function() {
        return {
            items: [
                {text: 'Thinking in React', url: 'http://facebook.github.io/react/blog/2013/11/05/thinking-in-react.html'},
                {text: 'Coming to React from Angular', url: 'http://www.stridenyc.com/blog/2015/3/4/coming-to-react-from-angular'},
                {text: 'React tips and best practices', url: 'http://aeflash.com/2015-02/react-tips-and-best-practices.html'},
            ]
        };
    },

    render: function() {

        console.log(this.state);
        return(
            <div>
                <h1>React boilerplate</h1>
                <InputBox />
                <ItemList items={this.state.items} />
            </div>
        );
    }
    
});

React.render(<APP />, document.getElementById('main'));