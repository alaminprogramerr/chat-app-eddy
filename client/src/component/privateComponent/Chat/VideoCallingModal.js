import React from 'react'

const VideoCallingModal = () => {
    return (
        <div>
            <div className="modal call fade" id="videoCall" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                        <div className="call">
                            <div>
                            <figure className="mb-4 avatar avatar-xl">
                                <img src="http://via.placeholder.com/128X128" className="rounded-circle" alt="image" />
                            </figure>
                            <h4>Brietta Blogg <span className="text-success">video calling...</span></h4>
                            <div className="action-button">
                                <button type="button" className="btn btn-danger btn-floating btn-lg" data-dismiss="modal">
                                <i data-feather="x" />
                                </button>
                                <button type="button" className="btn btn-success btn-pulse btn-floating btn-lg">
                                <i data-feather="video" />
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCallingModal
