import React from 'react';

class TodoSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const searchText = this.refs.searchText.value;
    const showCompleted = this.refs.showCompleted.checked;

    this.props.onSearch(searchText, showCompleted);
  }

  render() {
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
};

export default TodoSearch;
