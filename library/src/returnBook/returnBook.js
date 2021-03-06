import React from 'react';
import { NavBar } from '../navbar/navbar';

export class Return extends React.Component {
    constructor(props) {
        super(props);
        // this.submit = this.submit.bind(this);
    }
    render() {
        return (<div>
            <NavBar/>
            <div>
        <form onSubmit={this.submit}>
  <div className="form-row">
    <div className="form-group col-md-2">
      <label htmlFor="inputBookId4">Book Id</label>
      <input type="text" className="form-control" id="inputBookId4" placeholder="Book Id" onChange={(event) => this.getData('bookID',  event)}/>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputBookName4">Book Name</label>
      <input type="text" className="form-control" id="inputBookName4" placeholder="Book Name" onChange={(event) => this.getData('bookName',  event)}/>
    </div>
  </div>
  <div className="form-group col-md-2">
      <label htmlFor="inputUser4">User</label>
      <input type="text" className="form-control" id="inputUser4" placeholder="User Id" onChange={(event) => this.getData('userId',  event)}/>
    </div>
  <div className="form-group col-md-2">
    <label htmlFor="inputIssueDate">Issue Date</label>
    <input type="text" className="form-control" id="inputIssueDate" placeholder="dd/mm/yy" onChange={(event) => this.getData('issueDate',  event)}/>
  </div>
  <div className="form-group col-md-2">
    <label htmlFor="inputReturnDate">Return Date</label>
    <input type="text" className="form-control" id="inputReturnDate" placeholder="dd/mm/yy" onChange={(event) => this.getData('returnDate',  event)}/>
  </div>
  <button type="submit" className="btn btn-primary">Return</button>
</form>
</div>
        </div>
        )
    }
}