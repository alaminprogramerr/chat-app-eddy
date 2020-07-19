import React from 'react'

const AddFreindModal = () => {
    return (
        <div>
            <div className="modal fade" id="addFriends" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">
                        <i data-feather="user-plus" className="mr-2" /> Add Friends
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="ti-close" />
                    </button>
                    </div>
                    <div className="modal-body">
                    <div className="alert alert-info">Send invitations to friends.</div>
                    <form>
                        <div className="form-group">
                        <label htmlFor="emails" className="col-form-label">Email addresses</label>
                        <input type="text" className="form-control" id="emails" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="message" className="col-form-label">Invitation message</label>
                        <textarea className="form-control" id="message" defaultValue={""} />
                        </div>
                    </form>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AddFreindModal
