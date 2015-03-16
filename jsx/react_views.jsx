$(function(){

    var SearchBar = React.createClass({

        getInitialState: function() {
            return ({searchText: ""})
        },

        render: function() {
            return (
                <form className="search-bar" onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.searchText} onChange={this.onChange}/>
                    <button type="submit" >Submit</button>
                </form>
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



    var SearchBox = React.createClass({

        render: function() {

            return (

                <div className="search-box">
                    <SearchBar onSearch={this.props.onSearch} />
                </div>
            );
        }

    });

    var sendKeyword = function(keywords) {
        console.log("Keywords:", keywords);
    }

    var searchBox = React.render(<SearchBox onSearch={sendKeyword} />, document.body);

});


