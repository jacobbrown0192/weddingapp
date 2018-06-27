//CommentForm.js
import React, {Component} from 'react';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { author: '', text: '' };
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }
    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        let author = this.state.author.trim();
        let text = this.state.text.trim();
        if(!text || !author)
        {
            return;
        }
        this.props.onCommentSubmit(this.createNewComment(text, author));
        this.setState({ author: '', text: ''});
        console.log('${this.state.author} said "${this.state.text}"')
        //we will be tying this into the POST method in a bit
    }

    createNewComment(text, author)
    {
        return this.createComment(text,author,false,0)
    }

    createComment(text, author, hidden, votes)
    {
        var comment = {
           author: author,
           text: text,
           hidden: hidden,
           votes: votes
        };
        return comment;
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form_section">
                    <div className="form_row_full">
                        <label>NAME</label>
                        <input
                            type='text'
                            placeholder='Your name…'
                            className="form_input required"
                            value={ this.state.author }
                            onChange={ this.handleAuthorChange } />
                    </div>
                    <div className="form_row_full">
                        <label>MESSAGE</label>
                        <input
                            type='text'
                            placeholder='Tell us a story!'
                            className="form_input required"
                            value={ this.state.text }
                            onChange={ this.handleTextChange } />
                    </div>
                    <div className="form_row_full">
                        <input type="submit" name="submit" className="form_submit_contact" value="POST" />
                    </div>
                </div>
            </form>
        )
    }
}
export default CommentForm;