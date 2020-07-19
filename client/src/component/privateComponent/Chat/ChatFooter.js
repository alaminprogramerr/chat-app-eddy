import React from 'react'

const ChatFooter = () => {
    return (
        <div>
            
        <div className="chat-footer">
        <form>
        <div>
            <button className="btn btn-light mr-3" data-toggle="tooltip" title="Emoji" type="button">
            <i data-feather="smile" />
            </button>
        </div>
        <input type="text" className="form-control" placeholder="Write a message." />
        <div className="form-buttons">
            <button className="btn btn-light" data-toggle="tooltip" title="Add files" type="button">
            <i data-feather="paperclip" />
            </button>
            <button className="btn btn-light" data-toggle="tooltip" title="Send a voice record" type="button">
            <i data-feather="mic" />
            </button>
            <button className="btn btn-primary" type="submit">
            <i data-feather="send" />
            </button>
        </div>
        </form>
    </div>
        </div>
    )
}

export default ChatFooter
