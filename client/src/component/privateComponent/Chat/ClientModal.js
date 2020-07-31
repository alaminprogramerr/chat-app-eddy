import React from 'react'
import '../../dist/css/buscador.css'

const ClientModal = () => {
    return (
        <div>
            <div className="modal fade" id="clients" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-zoom " style={{ maxWidth: '80%' }} role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div >
                                <div className="modal-body">
                                    <div className="box-adminmenu">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="tab" href="#usuarios" role="tab" aria-controls="usuarios" aria-selected="true">Usuarios</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="tab" href="#configuracion" role="tab" aria-controls="configuracion" aria-selected="false">Configuración</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane show active padded" id="usuarios" role="tabpanel">
                                                <div className="contenedor_buscador">
                                                    <div className="box-contenedor_se">
                                                        <form action className="search-bar">
                                                            <input type="search" name="search" pattern=".*\S.*" placeholder required />
                                                            <button className="search-btn" type="submit">
                                                                <span>Search</span>
                                                            </button>
                                                        </form>
                                                    </div>
                                                    <div className="box-contenedor_se">
                                                        <div className="box-con-input">
                                                            <div className="input-group masked-input tab_bl">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="zmdi ti-calendar" /></span>
                                                                </div>
                                                                <input type="text" className="form-control date" placeholder="Desde: 30/07/2016" />
                                                            </div>
                                                        </div>
                                                        <div className="box-con-input">
                                                            <div className="input-group masked-input tab_bl">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text"><i className="zmdi ti-calendar" /></span>
                                                                </div>
                                                                <input type="text" className="form-control date" placeholder="Hasta: 30/07/2016" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="box-contenedor_se exportar">
                                                        <a href /><p><a href>Exportar<i className="fa fa-download" /></a></p>
                                                    </div>
                                                </div>
                                                <table className="table table-hover mb-0 c_list c_table">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <div className="checkbox">
                                                                    <input id="delete_1" type="checkbox" />
                                                                    <label htmlFor="delete_1">&nbsp;</label>
                                                                </div>
                                                            </th>
                                                            <th>Name</th>
                                                            <th data-breakpoints="xs">Phone</th>
                                                            <th data-breakpoints="xs sm md">Email</th>
                                                            <th data-breakpoints="xs sm md">Address</th>
                                                            <th data-breakpoints="xs">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="checkbox">
                                                                    <input id="delete_2" type="checkbox" />
                                                                    <label htmlFor="delete_2">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="c_name">John Smith</p>
                                                            </td>
                                                            <td>
                                                                <span className="phone"><i className="zmdi zmdi-whatsapp mr-2" />264-625-2583</span>
                                                            </td>
                                                            <td>
                                                                <span className="email"><a href="javascript:void(0);" title>johnsmith@gmail.com</a></span>
                                                            </td>
                                                            <td>
                                                                <address><i className="zmdi zmdi-pin" />123 6th St. Melbourne, FL 32904</address>
                                                            </td>
                                                            <td>
                                                                <button className="btn plomo btn-sm" data-toggle="tooltip" title="Chat">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#chat">
                                                                        <i className="ti-comment" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-primary btn-sm" data-toggle="tooltip" title="Editar">
                                                                    <a className="btn-outline-light" href="#" data-toggle="modal" data-target="#editar">
                                                                        <i className="ti-pencil" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-danger btn-sm" data-toggle="tooltip" title="Elimiar">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#eliminar">
                                                                        <i className="ti-trash" />
                                                                    </a>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="checkbox">
                                                                    <input id="delete_3" type="checkbox" />
                                                                    <label htmlFor="delete_3">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="c_name">Hossein Shams</p>
                                                            </td>
                                                            <td>
                                                                <span className="phone"><i className="zmdi zmdi-whatsapp mr-2" />264-625-5689</span>
                                                            </td>
                                                            <td>
                                                                <span className="email"><a href="javascript:void(0);" title>hosseinshams@gmail.com</a></span>
                                                            </td>
                                                            <td>
                                                                <address><i className="zmdi zmdi-pin" />44 Shirley Ave. West Chicago, IL 60185</address>
                                                            </td>
                                                            <td>
                                                                <button className="btn plomo btn-sm" data-toggle="tooltip" title="Chat">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#chat">
                                                                        <i className="ti-comment" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-primary btn-sm" data-toggle="tooltip" title="Editar">
                                                                    <a className="btn-outline-light" href="#" data-toggle="modal" data-target="#editar">
                                                                        <i className="ti-pencil" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-danger btn-sm" data-toggle="tooltip" title="Elimiar">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#eliminar">
                                                                        <i className="ti-trash" />
                                                                    </a>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="checkbox">
                                                                    <input id="delete_4" type="checkbox" />
                                                                    <label htmlFor="delete_4">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="c_name">Maryam Amiri</p>
                                                            </td>
                                                            <td>
                                                                <span className="phone"><i className="zmdi zmdi-whatsapp mr-2" />264-625-9513</span>
                                                            </td>
                                                            <td>
                                                                <span className="email"><a href="javascript:void(0);" title>maryamamiri@gmail.com</a></span>
                                                            </td>
                                                            <td>
                                                                <address><i className="zmdi zmdi-pin" />123 6th St. Melbourne, FL 32904</address>
                                                            </td>
                                                            <td>
                                                                <button className="btn plomo btn-sm" data-toggle="tooltip" title="Chat">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#chat">
                                                                        <i className="ti-comment" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-primary btn-sm" data-toggle="tooltip" title="Editar">
                                                                    <a className="btn-outline-light" href="#" data-toggle="modal" data-target="#editar">
                                                                        <i className="ti-pencil" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-danger btn-sm" data-toggle="tooltip" title="Elimiar">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#eliminar">
                                                                        <i className="ti-trash" />
                                                                    </a>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="checkbox">
                                                                    <input id="delete_5" type="checkbox" />
                                                                    <label htmlFor="delete_5">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="c_name">Tim Hank</p>
                                                            </td>
                                                            <td>
                                                                <span className="phone"><i className="zmdi zmdi-whatsapp mr-2" />264-625-1212</span>
                                                            </td>
                                                            <td>
                                                                <span className="email"><a href="javascript:void(0);" title>timhank@gmail.com</a></span>
                                                            </td>
                                                            <td>
                                                                <address><i className="zmdi zmdi-pin" />70 Bowman St. South Windsor, CT 06074</address>
                                                            </td>
                                                            <td>
                                                                <button className="btn plomo btn-sm" data-toggle="tooltip" title="Chat">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#chat">
                                                                        <i className="ti-comment" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-primary btn-sm" data-toggle="tooltip" title="Editar">
                                                                    <a className="btn-outline-light" href="#" data-toggle="modal" data-target="#editar">
                                                                        <i className="ti-pencil" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-danger btn-sm" data-toggle="tooltip" title="Elimiar">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#eliminar">
                                                                        <i className="ti-trash" />
                                                                    </a>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="checkbox">
                                                                    <input id="delete_6" type="checkbox" />
                                                                    <label htmlFor="delete_6">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="c_name">Fidel Tonn</p>
                                                            </td>
                                                            <td>
                                                                <span className="phone"><i className="zmdi zmdi-whatsapp mr-2" />264-625-2323</span>
                                                            </td>
                                                            <td>
                                                                <span className="email"><a href="javascript:void(0);" title>fideltonn@gmail.com</a></span>
                                                            </td>
                                                            <td>
                                                                <address><i className="zmdi zmdi-pin" />514 S. Magnolia St. Orlando, FL 32806</address>
                                                            </td>
                                                            <td>
                                                                <button className="btn plomo btn-sm" data-toggle="tooltip" title="Chat">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#chat">
                                                                        <i className="ti-comment" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-primary btn-sm" data-toggle="tooltip" title="Editar">
                                                                    <a className="btn-outline-light" href="#" data-toggle="modal" data-target="#editar">
                                                                        <i className="ti-pencil" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-danger btn-sm" data-toggle="tooltip" title="Elimiar">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#eliminar">
                                                                        <i className="ti-trash" />
                                                                    </a>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="checkbox">
                                                                    <input id="delete_7" type="checkbox" />
                                                                    <label htmlFor="delete_7">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="c_name">Gary Camara</p>
                                                            </td>
                                                            <td>
                                                                <span className="phone"><i className="zmdi zmdi-whatsapp mr-2" />264-625-1005</span>
                                                            </td>
                                                            <td>
                                                                <span className="email"><a href="javascript:void(0);" title>garycamara@gmail.com</a></span>
                                                            </td>
                                                            <td>
                                                                <address><i className="zmdi zmdi-pin" />44 Shirley Ave. West Chicago, IL 60185</address>
                                                            </td>
                                                            <td>
                                                                <button className="btn plomo btn-sm" data-toggle="tooltip" title="Chat">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#chat">
                                                                        <i className="ti-comment" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-primary btn-sm" data-toggle="tooltip" title="Editar">
                                                                    <a className="btn-outline-light" href="#" data-toggle="modal" data-target="#editar">
                                                                        <i className="ti-pencil" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-danger btn-sm" data-toggle="tooltip" title="Elimiar">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#eliminar">
                                                                        <i className="ti-trash" />
                                                                    </a>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="checkbox">
                                                                    <input id="delete_8" type="checkbox" />
                                                                    <label htmlFor="delete_8">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="c_name">Frank Camly</p>
                                                            </td>
                                                            <td>
                                                                <span className="phone"><i className="zmdi zmdi-whatsapp mr-2" />264-625-9999</span>
                                                            </td>
                                                            <td>
                                                                <span className="email"><a href="javascript:void(0);" title>frankcamly@gmail.com</a></span>
                                                            </td>
                                                            <td>
                                                                <address><i className="zmdi zmdi-pin" />123 6th St. Melbourne, FL 32904</address>
                                                            </td>
                                                            <td>
                                                                <button className="btn plomo btn-sm" data-toggle="tooltip" title="Chat">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#chat">
                                                                        <i className="ti-comment" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-primary btn-sm" data-toggle="tooltip" title="Editar">
                                                                    <a className="btn-outline-light" href="#" data-toggle="modal" data-target="#editar">
                                                                        <i className="ti-pencil" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-danger btn-sm" data-toggle="tooltip" title="Elimiar">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#eliminar">
                                                                        <i className="ti-trash" />
                                                                    </a>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="checkbox">
                                                                    <input id="delete_9" type="checkbox" />
                                                                    <label htmlFor="delete_9">&nbsp;</label>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className="c_name">Tim Hank</p>
                                                            </td>
                                                            <td>
                                                                <span className="phone"><i className="zmdi zmdi-whatsapp mr-2" />264-625-1212</span>
                                                            </td>
                                                            <td>
                                                                <span className="email"><a href="javascript:void(0);" title>timhank@gmail.com</a></span>
                                                            </td>
                                                            <td>
                                                                <address><i className="zmdi zmdi-pin" />70 Bowman St. South Windsor, CT 06074</address>
                                                            </td>
                                                            <td>
                                                                <button className="btn plomo btn-sm" data-toggle="tooltip" title="Chat">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#chat">
                                                                        <i className="ti-comment" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-primary btn-sm" data-toggle="tooltip" title="Editar">
                                                                    <a className="btn-outline-light" href="#" data-toggle="modal" data-target="#editar">
                                                                        <i className="ti-pencil" />
                                                                    </a>
                                                                </button>
                                                                <button className="btn btn-danger btn-sm" data-toggle="tooltip" title="Elimiar">
                                                                    <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#eliminar">
                                                                        <i className="ti-trash" />
                                                                    </a>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <section className="paginacion">
                                                    <ul>
                                                        <li><a href className="active">1</a></li>
                                                        <li><a href>2</a></li>
                                                        <li><a href>3</a></li>
                                                        <li><a href>4</a></li>
                                                        <li><a href>5</a></li>
                                                    </ul>
                                                </section>
                                            </div>
                                            <div className="tab-pane padded" id="configuracion" role="tabpanel">
                                                <div className="box-configuracion">
                                                    <h4>CANALES</h4>
                                                    <button className="btn btn-primary" data-toggle="tooltip" title="Agregar Canal">
                                                        <a className="btn-outline-light" href="#" data-toggle="modal" data-target="#Agregar-Canal">
                                                            AGREGAR CANAL
              </a>
                                                    </button>
                                                    <div className="box-canales">
                                                        <div className="canales-left">
                                                            <div className="icono whatssap">
                                                                <img src="../dist/media/img/icono-whatsaap.png" alt="" />
                                                            </div>
                                                            <h3>Chat API (04)</h3>
                                                            <p>Chat API</p>
                                                        </div>
                                                        <div className="canales-right">
                                                            <button className="btn btn-primary" data-toggle="tooltip" title="Eliminar">
                                                                <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#eliminar">
                                                                    <i className /> ELiminar
                  </a>
                                                            </button>
                                                            <button className="btn btn-danger" data-toggle="tooltip" title="Configurar">
                                                                <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#Configurar">
                                                                    <i className /> Configurar
                  </a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="box-canales">
                                                        <div className="canales-left">
                                                            <div className="icono mesenger">
                                                                <img src="../dist/media/img/icono-mesenger.png" alt="" />
                                                            </div>
                                                            <h3>Facebook Messenger (02)</h3>
                                                            <p>Facebook Messenger</p>
                                                        </div>
                                                        <div className="canales-right">
                                                            <button className="btn btn-primary" data-toggle="tooltip" title="Eliminar">
                                                                <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#eliminar">
                                                                    <i className /> ELiminar
                  </a>
                                                            </button>
                                                            <button className="btn btn-danger" data-toggle="tooltip" title="Configurar">
                                                                <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#Configurar">
                                                                    <i className /> Configurar
                  </a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="box-canales">
                                                        <div className="canales-left">
                                                            <div className="icono webchat">
                                                                <img src="../dist/media/img/icono-webchat.png" alt="" />
                                                            </div>
                                                            <h3>Web Chat</h3>
                                                            <p>Web Chat</p>
                                                        </div>
                                                        <div className="canales-right">
                                                            <button className="btn btn-primary" data-toggle="tooltip" title="Eliminar">
                                                                <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#eliminar">
                                                                    <i className /> ELiminar
                  </a>
                                                            </button>
                                                            <button className="btn btn-danger" data-toggle="tooltip" title="Configurar">
                                                                <a href="#" className="btn-outline-light" data-toggle="modal" data-target="#Configurar">
                                                                    <i className /> Configurar
                  </a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientModal
