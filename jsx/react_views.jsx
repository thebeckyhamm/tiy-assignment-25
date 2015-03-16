$(function(){
    // create search bar
    var SearchBar = React.createClass({
        // get the initial state
        // using state because the value of input will change
        // set initial state of searchText to empty string
        getInitialState: function() {
            return ({searchText: ""})
        },

        // Set onSubmit prop on the form to tell us
        // what to do when submitted
        // Value is whatever the state of the search text is
        // When the input changes, run the onChange function
        render: function() {
            return (
                <form className="search-bar" onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.searchText} onChange={this.onChange}/>
                    <button type="submit" >Submit</button>
                </form>
            );
        },
        // when the form is submitted, prevent actual
        // submission, and call the newSearchText property
        // (which is defined by a parent)
        // and pass whatever the state of the searchText
        // is into newSearchText
        onSubmit: function(e) {
            e.preventDefault();
            this.props.newSearchText(this.state.searchText);

        },
        // when the input value changes, set the State 
        // of the search text to whatever the new value
        // is
        doDo: function(e) {
            this.setState({searchText: e.target.value});
        }
    });


    // Create the parent of the searchbar.
    // It handles what happens with the 
    // search text so we can use it elsewhere
    // (or in this case log it) so we use
    // props here.
    var SearchBox = React.createClass({

        // render a parent div and
        // the SearchBar element, and add
        // the newSearchText property to it, which
        // will take whatever data it has
        // from the searchbar to here
        render: function() {

            return (

                <div className="search-box">
                    <SearchBar newSearchText={this.props.onSearch} />
                </div>
            );
        }

    });
    // logs the keywords received from 
    // -- onSearch, which received them from
    // -- newSearchText, which received them from
    // -- onSubmit, where the keywords state was updated by
    // -- onChange
    var sendKeyword = function(keywords) {
        console.log("Keywords:", keywords);
    }

    var searchBox = React.render(<SearchBox onSearch={sendKeyword} />, document.body);

});


