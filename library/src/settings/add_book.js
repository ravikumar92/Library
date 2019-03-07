import React from 'react';

export class AddBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName:'',
            bookId:'',
            author:'',
            publisher:'',
            bookType:'',
            bookCount:''
        }
        this.submitData = this.submitData.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    saveData(field, event) {
        this.setState({
            [field]:event.target.value
        })
    }

    submitData(event) {
        event.preventDefault();
        fetch('http://10.11.7.59:8080/save-book',{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((resp) => { 
            alert(resp.message);
            this.setState(()=>{
               return{
                    bookName:'',
                    bookId:'',
                    author:'',
                    publisher:'',
                    bookType:'',
                    bookCount:''
               }
            })
        })

    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <form onSubmit={this.submitData}>
                    <div className="form-group row">
                        <label htmlFor="bookName" className="col-sm-4 col-form-label">Book Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={this.state.bookName} onChange={(event) => this.saveData('bookName', event)}/>
                        </div>
                        {/* </div>
                    <div className="form-group row"> */}
                        <label htmlFor="bookId" className="col-sm-4 col-form-label">Book ID</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={this.state.bookId} onChange={(event) => this.saveData('bookId', event)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="author" className="col-sm-4 col-form-label">Author</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value = {this.state.author} onChange={(event) => this.saveData('author', event)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="publisher" className="col-sm-4 col-form-label">Publisher</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value = {this.state.publisher} onChange={(event) => this.saveData('publisher', event)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label>Book Type</label>
                        <select className="form-control" value={this.state.bookType} onChange={(event) => this.saveData('bookType', event)}>
                            <option></option>
                            <option>Technology</option>
                            <option>Comic</option>
                            <option>Novel</option>
                            <option>Economics</option>
                            <option>History</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="bookCount" className="col-sm-4 col-form-label">Number of Books</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" value={this.state.bookCount} onChange={(event) => this.saveData('bookCount', event)}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}