import React, { Component } from 'react';
import { Table } from 'fundamental-react/lib/Table/Table';
import { Button } from 'fundamental-react/lib/Button/Button';
import { Pagination } from 'fundamental-react/lib/Pagination/Pagination';
import { ActionBar, ActionBarActions, ActionBarHeader } from 'fundamental-react/lib/ActionBar/ActionBar';
import NewsKey from './NewsKey.json';
import './App.css';

const tableHeaders = ['Title', 'Description', 'Author', 'Source', ''];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "tableData": [],
      "count": 1,
      "page": 1,
      "sourceData": null
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  _buildTableRows() {
    const aArticles = this.state.sourceData;

    const tableData = aArticles.map((oHeadline) => {
      const sTitle = oHeadline.title;
      const sDescription = oHeadline.description;
      const sAuthor = oHeadline.author;
      const sSource = oHeadline.source.name;
      const uURL = oHeadline.url;
      
      const cButton = <Button option="emphasized" glyph="initiative" onClick={() => window.open(uURL, "_blank")}>Read</Button>;

      const aTableRow = [sTitle, sDescription, sAuthor, sSource, cButton];
      return {"rowData": aTableRow};
    });

    this.setState({"tableData": tableData});
  }

  _fetchData() {
    const iPageNumber = this.state.page;

    fetch(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${NewsKey.key}&pageSize=10&page=${iPageNumber}`)
      .then((response) => response.json())
      .then((oNews) => {
        this.setState({"count": oNews.totalResults});

        return oNews.articles;
      })
      .catch((oError) => console.error(oError))
      .then((aArticles) => this.setState({"sourceData": aArticles}))
      .then(()=> this._buildTableRows());
  }

  render() {
    return (
      <div className="app-container fd-has-margin-large">
        <ActionBar>
          <ActionBarHeader title={"Leon's Fiori App"} description={"React Edition"} />
          <ActionBarActions>
            <Button glyph="refresh" option="light" onClick={() => this._fetchData()}>Refresh</Button>
          </ActionBarActions>
        </ActionBar>

        <Table
            headers={tableHeaders}
            tableData={this.state.tableData}>
        </Table>

        <Pagination itemsTotal={this.state.count} onClick={(e) => {
          if (typeof e === "number") {
            this.setState({"page": e}, () => this._fetchData());
          }
        }}/>
      </div>
    );
  }
}

export default App;
