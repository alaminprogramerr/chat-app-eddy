import React from 'react'

const ProfileSettingModal = () => {
    return (
        <div>
            <div className="modal fade" id="settingModal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">
                        <i data-feather="settings" className="mr-2" /> Settings
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="ti-close" />
                    </button>
                    </div>
                    <div className="modal-body">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#account" role="tab" aria-controls="account" aria-selected="true">Account</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#notification" role="tab" aria-controls="notification" aria-selected="false">Notification</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Security</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane show active" id="account" role="tabpanel">
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" defaultChecked id="customSwitch1" />
                            <label className="custom-control-label" htmlFor="customSwitch1">Allow connected contacts</label>
                        </div>
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" defaultChecked id="customSwitch2" />
                            <label className="custom-control-label" htmlFor="customSwitch2">Confirm message requests</label>
                        </div>
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" defaultChecked id="customSwitch3" />
                            <label className="custom-control-label" htmlFor="customSwitch3">Profile privacy</label>
                        </div>
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch4" />
                            <label className="custom-control-label" htmlFor="customSwitch4">Developer mode options</label>
                        </div>
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" defaultChecked id="customSwitch5" />
                            <label className="custom-control-label" htmlFor="customSwitch5">Two-step security
                            verification</label>
                        </div>
                        </div>
                        <div className="tab-pane" id="notification" role="tabpanel">
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" defaultChecked id="customSwitch6" />
                            <label className="custom-control-label" htmlFor="customSwitch6">Allow mobile notifications</label>
                        </div>
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch7" />
                            <label className="custom-control-label" htmlFor="customSwitch7">Notifications from your
                            friends</label>
                        </div>
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch8" />
                            <label className="custom-control-label" htmlFor="customSwitch8">Send notifications by email</label>
                        </div>
                        </div>
                        <div className="tab-pane" id="contact" role="tabpanel">
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch9" />
                            <label className="custom-control-label" htmlFor="customSwitch9">Suggest changing passwords every
                            month.</label>
                        </div>
                        <div className="form-item custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" defaultChecked id="customSwitch10" />
                            <label className="custom-control-label" htmlFor="customSwitch10">Let me know about suspicious
                            entries to your account</label>
                        </div>
                        <div className="form-item">
                            <p>
                            <a className="btn btn-light" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <i data-feather="plus" className="mr-2" /> Security Questions
                            </a>
                            </p>
                            <div className="collapse" id="collapseExample">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Question 1" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Answer 1" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Question 2" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Answer 2" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettingModal
