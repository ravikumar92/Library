import React from 'react';

export class RemoveBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookId:'',
            bookName:''
        }
        this.updateData = this.updateData.bind(this);
        this.removeData = this.removeData.bind(this);
    }

    updateData(field, event) {
        this.setState({
            [field]:event.target.value
        })
    }

    removeData(event) {
        event.preventDefault();
        fetch('http://10.11.7.59:8080/remove-book', {
            method:'DELETE',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((resp) => {
            alert(resp.message);
            this.setState({
                bookId:'',
                bookName:''
            })
        })
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                  <form onSubmit={this.removeData}>
                  <div className="form-group row">
                        <label htmlFor="bookName" className="col-sm-4 col-form-label">Book Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={this.state.bookName} onChange={(event) => this.updateData('bookName', event)}/>
                        </div>
                        <label htmlFor="bookId" className="col-sm-4 col-form-label">Book ID</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={this.state.bookId} onChange={(event) => this.updateData('bookId', event)} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
            </div>
        )
    }
}