import React from 'react'

const TransfarModal = () => {
    return (
        <div>
            <div className="modal fade" id="transferir" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">
                        <i className="mr-2 ti-user" /> Transferir
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="ti-close" />
                    </button>
                    </div>
                    <div className="modal-body">
                    <div className="mt-4 mb-4 scrollmodal">
                        <div className="cont_list_agente">
                        <ul>
                            <li><a href="#">Anna Cabrera</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Transferir</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TransfarModal
