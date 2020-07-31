import React from 'react'

const AllModal = () => {
    return (
        <div>
            <div>
                <div className="modal fade" id="chat" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                        <div className="modal-content" style={{border:'1px solid  gray'}}>
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i className="mr-2 ti-comment" /> conversación #User_6545676545
          </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <i className="ti-close" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="contenedor-info_chat">
                                    <div className="cont_chat">
                                        <div className="chat_usuario">
                                            <div className="bot-icon-us">
                                                <img src="./dist/media/img/logo_Botcenter.png" alt="" />
                                            </div>
                                            <div className="bot-chat-us">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                <div className="bot-fechaus">
                                                    <p>April 13, 11:16 PM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat_cliente">
                                            <div className="bot-chat-clie">
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                                <div className="bot-fecha_client">
                                                    <p>April 13, 11:18 PM</p>
                                                    <p className="name-chat_info">Usuario#5474545</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat_usuario">
                                            <div className="bot-icon-us">
                                                <img src="./dist/media/img/logo_Botcenter.png" alt="" />
                                            </div>
                                            <div className="bot-chat-us">
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                                <div className="bot-fechaus">
                                                    <p>April 13, 11:16 PM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat_cliente">
                                            <div className="bot-chat-clie">
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                                <div className="bot-fecha_client">
                                                    <p>April 13, 11:18 PM</p>
                                                    <p className="name-chat_info">Usuario#5474545</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Modal Editar   */}
                <div className="modal fade" id="editar" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                        <div className="modal-content" style={{border:'1px solid  gray'}}>
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i className="mr-2 ti-pencil" /> Editar
          </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <i className="ti-close" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#detalles" role="tab" aria-controls="detalles" aria-selected="true">Detalles</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#notas" role="tab" aria-controls="notas" aria-selected="false">Notas</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane show active" id="detalles" role="tabpanel">
                                        <form action>
                                            <input type="text" className="edit-input" name id placeholder="Nombres" required />
                                            <input type="text" className="edit-input" name id placeholder="Correo Electronico" required />
                                            <input type="text" className="edit-input" name id placeholder="Telefono" required />
                                            <input type="text" className="edit-input" name id placeholder="Empresa" required />
                                            <select className="edit-despegable" name id>
                                                <option value="Estatus">Estado</option>
                                                <option value={1}>En Linea</option>
                                                <option value={2}>Ocupado</option>
                                                <option value={3}>No disponible</option>
                                            </select>
                                            <button type="button" className="btn btn-primary boton-save">Guardar</button>
                                        </form>
                                    </div>
                                    <div className="tab-pane" id="notas" role="tabpanel">
                                        <form action>
                                            <textarea className="edit-textarea" name id cols={0} rows={0} placeholder="Comentario" required defaultValue={""} />
                                            <button type="button" className="btn btn-primary boton-save">Guardar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Eliminar */}
                <div className="modal fade" id="eliminar" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                        <div className="modal-content" style={{border:'1px solid  gray'}}>
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i className="mr-2 ti-trash" /> Elimninar
          </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <i className="ti-close" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Si eliminas esta conversación sera de manare definitiva y no podra recuperarla. ¿Estas Seguro de elimilar la conversación?</p>
                                <p className="dat-eliminar"><strong>Escriba la palabra ELIMINAR y haga click en el botón ELIMINAR</strong></p>
                                <input type="text" className="input-eliminar" name placeholder="ELIMINAR" required />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Cancelar</button>
                                <button type="button" className="btn red">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Agregar Canal */}
                <div className="modal fade" id tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                        <div className="modal-content" style={{border:'1px solid  gray'}}>
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i className="mr-2 ti-plus" /> Agregar Canal
          </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <i className="ti-close" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <h3>Conecta Tu Canal</h3>
                                <p>Seleccione el canal que desee conectar</p>
                                <div className="contenedor-canales">
                                    <div className="grid-canales">
                                        <a href="#">
                                            <span className="avanzado">Avanzado</span>
                                            <img src="../dist/media/img/icono-whatsaap.png" alt="" />
                                            <p>WhatsApp</p>
                                        </a>
                                    </div>
                                    <div className="grid-canales">
                                        <a href="#">
                                            <span className="facil">Facil</span>
                                            <img src="../dist/media/img/icono-mesenger.png" alt="" />
                                            <p>Messenger</p>
                                        </a>
                                    </div>
                                    <div className="grid-canales">
                                        <a href="#">
                                            <span className="moderada">Moderada</span>
                                            <img src="../dist/media/img/icono-webchat.png" alt="" />
                                            <p>Web Chat</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Cancelar</button>
                                <button type="button" className="btn btn-primary">Siguiente</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Agregar Canal Parte 2 */}
                <div className="modal fade" id="Agregar-Canal" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                        <div className="modal-content" style={{border:'1px solid  gray'}}>
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i className="mr-2 ti-plus" /> Agregar Canal
          </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <i className="ti-close" />
                                </button>
                            </div>
                            <div className="modal-body">
                                <h3>Conectando el widget de WhatsApp</h3>
                                <p>Esta integración permite que su equipo chatee con los visitantes de su sitio web</p>
                                <br />
                                <br />
                                <p>1.- Agregue los sitios web donde se agregará el widget</p>
                                <br />
                                <p>2.- Seleccione un color de tema para el widget</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Cancelar</button>
                                <button type="button" className="btn btn-primary">Siguiente</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Configurar Canal*/}
                <div className="modal fade" id="Configurar" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-zoom" role="document">
                        <div className="modal-content" style={{border:'1px solid  gray'}}>
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    <i className="mr-2 ti-pencil" /> Configurar
          </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <i className="ti-close" />
                                </button>
                            </div>
                            <div className="modal-body">
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Siguiente</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllModal
