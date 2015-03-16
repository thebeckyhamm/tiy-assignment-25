$(function(){

    var SearchBar = React.createClass({displayName: "SearchBar",

        getInitialState: function() {
            return ({searchText: ""})
        },

        render: function() {
            return (
                React.createElement("form", {className: "search-bar", onSubmit: this.onSubmit}, 
                    React.createElement("input", {type: "text", value: this.state.searchText, onChange: this.onChange}), 
                    React.createElement("button", {type: "submit"}, "Submit")
                )
            );
        },

        onSubmit: function(e) {
            e.preventDefault();
            this.props.onSearch(this.state.searchText);

        },

        onChange: function(e) {
            this.setState({searchText: e.target.value});
        }
    });



    var SearchBox = React.createClass({displayName: "SearchBox",

        render: function() {

            return (

                React.createElement("div", {className: "search-box"}, 
                    React.createElement(SearchBar, {onSearch: this.props.onSearch})
                )
            );
        }

    });

    var sendKeyword = function(keywords) {
        console.log("Keywords:", keywords);
    }

    var searchBox = React.render(React.createElement(SearchBox, {onSearch: sendKeyword}), document.body);

});


