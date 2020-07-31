import React from 'react'
import { useRecoilValue } from 'recoil'

import { userInfo } from '../../util/recoilState'
import LatterPicture from './LatterPicture'
import {profileDisplay} from '../../util/recoilState'
const ProfileSidebar = () => {
    const getUserInfo = useRecoilValue(userInfo)
    const getProfileDisplay= useRecoilValue(profileDisplay)
    return (
        <div>
            <div id="contact-information" className="sidebar" style={{display:getProfileDisplay?'block':'none'}}>
                <header className="profile-header">
                    <ul className="list-inline mr-auto">
                        <li className="list-inline-item">
                            <a href="#" className="btn btn-outline-light text-danger" data-toggle="tooltip" title="Resolver">
                                <i className="ti-check" />
                            </a>
                        </li>
                    </ul>
                    <ul className="list-inline ml-auto">
                        <li className="list-inline-item">
                            <a href="#" className="btn btn-outline-light text-danger sidebar-close">
                                <i data-feather="x" />
                            </a>
                        </li>
                    </ul>
                </header>
                <div className="sidebar-body">
                    <div className="pl-4 pr-4">
                        <div className="text-center">
                            <h2 className="titulo-perfil">Perfil</h2>
                            <br />
                            <figure className="avatar avatar-xl mb-4">
                                {
                                    getUserInfo.img ?
                                        <img src={require("../../dist/media/img/usuario-cli.jpg")} className="rounded-circle" alt="image" />
                                        : <LatterPicture width="100px" height="100px" fontSize="55px" firstName={getUserInfo.firstName} />
                                }
                            </figure>
                            <h5 className="mb-1" style={{textTransform:'capitalize'}}> {getUserInfo.firstName+' '+getUserInfo.lastName} </h5>
                            <small className="text-muted font-italic">Ultimo chat: 22/04/2020</small>
                            <br />
                            <small className="text-muted font-italic">IP: 192.168.102.205</small>
                            <br />
                            <form action>
                                <select className="edit-despegable-perfil" name id>
                                    <option value="Estatus">Status</option>
                                    <option value={1}>Pendiente</option>
                                    <option value={2}>Resuelto</option>
                                </select>
                            </form>
                            <ul className="nav nav-tabs justify-content-center mt-5" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Media</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="mt-4 mb-4">
                                    <div className="box">
                                        <span className="edit"><i className="ti-pencil" /></span>
                                        <span className="save"><i className="ti-save" /></span>
                                        <div className="text form-scroll">
                                            Nombres y Apellidos
                    </div>
                                    </div>
                                    <br />
                                    <div className="box">
                                        <div className="text form-scroll">
                                            Correo electronico
                    </div>
                                    </div>
                                    <br />
                                    <div className="box">
                                        <div className="text form-scroll">
                                            Telefono
                    </div>
                                    </div>
                                    <br />
                                    <div className="box">
                                        <div className="text form-scroll">
                                            Empresa
                    </div>
                                    </div>
                                    <br />
                                    <div className="box">
                                        <div className="text scroll">
                                            comentario
                    </div>
                                    </div>
                                </div>
                                <div className="mt-4 mb-4">
                                    <h6 className="mb-3">Canales de Conexión</h6>
                                    <ul className="list-inline social-links media-social">
                                        <li className="list-inline-item">
                                            <a href="#" className="btn btn-sm btn-floating btn-facebook" data-toggle="tooltip" title="Facebook">
                                                <i className="fa fa-facebook" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn btn-sm btn-floating btn-twitter" data-toggle="tooltip" title="Twitter">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn btn-sm btn-floating btn-whatsapp" data-toggle="tooltip" title="Whatsapp">
                                                <i className="fa fa-whatsapp" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-4 mb-4">
                                    <div className="form-group">
                                        <div className="form-item custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="customSwitch11" />
                                            <label className="custom-control-label" htmlFor="customSwitch11">Bloquear</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-item custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" defaultChecked id="customSwitch12" />
                                            <label className="custom-control-label" htmlFor="customSwitch12">Silenciar</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h6 className="mb-3 d-flex align-items-center justify-content-between">
                                    <span>Recent Files</span>
                                    <a href="#" className="btn btn-link small">
                                        <i data-feather="upload" className="mr-2" /> Upload
                </a>
                                </h6>
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i className="fa fa-file-pdf-o text-danger mr-2" /> report4221.pdf
                    </a>
                                        </li>
                                        <li className="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i className="fa fa-image text-muted mr-2" /> avatar_image.png
                    </a>
                                        </li>
                                        <li className="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i className="fa fa-file-excel-o text-success mr-2" />
                        excel_report_file2020.xlsx
                    </a>
                                        </li>
                                        <li className="list-group-item pl-0 pr-0 d-flex align-items-center">
                                            <a href="#">
                                                <i className="fa fa-file-text-o text-warning mr-2" /> articles342133.txt
                    </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSidebar
