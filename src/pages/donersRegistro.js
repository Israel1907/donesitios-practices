import React from 'react'
import '../styles/app-home.css'
class DonerRegistro extends React.Component {
    render() {
        return (
            <section _ngcontent-rkk-c5="">
                <div _ngcontent-rkk-c5="" class="container-fluid">
                    <div _ngcontent-rkk-c5="" class="row full-height-vh">
                        <div _ngcontent-rkk-c5="" class="col-sm-7 login-block">
                            <div _ngcontent-rkk-c5="" class="row">
                                <div _ngcontent-rkk-c5="" class="col ml-4">
                                    <p _ngcontent-rkk-c5="" class="font-large-1 text-bold-600 white">D'OneBusiness</p>
                                </div>
                            </div>
                            <div _ngcontent-rkk-c5="" class="row">
                                <div _ngcontent-rkk-c5="" class="col ml-4">
                                    <p _ngcontent-rkk-c5="" class="font-medium-3 text-bold-500 white">Crecemos junto a ti </p>
                                </div>
                            </div>
                            <div _ngcontent-rkk-c5="" class="row">
                                <div _ngcontent-rkk-c5="" class="col-md-4 ml-4">
                                    <div _ngcontent-rkk-c5="" class="card">
                                        <div _ngcontent-rkk-c5="" class="card-body">
                                            <p _ngcontent-rkk-c5="" class="m-2 font-medium-1">Hoja de vida</p>
                                            <ul _ngcontent-rkk-c5="" class="no-list-style">
                                                <li _ngcontent-rkk-c5="" class="mb-2">
                                                    <span _ngcontent-rkk-c5="" class="text-bold-300">
                                                        <a _ngcontent-rkk-c5=""> Certificado de antecedentes penales</a>
                                                    </span>
                                                </li>
                                                <li _ngcontent-rkk-c5="" class="mb-2">
                                                    <span _ngcontent-rkk-c5="" class="text-bold-300">
                                                        <a _ngcontent-rkk-c5=""> Copia de cédula</a>
                                                    </span>
                                                </li>
                                                <li _ngcontent-rkk-c5="" class="mb-2">
                                                    <span _ngcontent-rkk-c5="" class="text-bold-300">
                                                        <a _ngcontent-rkk-c5=""> Copia de licencia (Mensajeros)</a>
                                                    </span>
                                                </li>
                                                <li _ngcontent-rkk-c5="" class="mb-2">
                                                    <span _ngcontent-rkk-c5="" class="text-bold-300">
                                                        <a _ngcontent-rkk-c5=""> Copia de matricula de moto o vehiculo (Mensajeros)</a>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-rkk-c5="" class="col-sm-5">
                            <div _ngcontent-rkk-c5="" class="row">
                                <div _ngcontent-rkk-c5="" class="col m-3">
                                    <p _ngcontent-rkk-c5="" class="text-right font-medium-1">Tienes una cuenta?
                                        <a _ngcontent-rkk-c5="" class="amber text-uppercase text-bold-600">Iniciar Sesión</a>
                                    </p>
                                </div>
                            </div>
                            <div _ngcontent-rkk-c5="" class="row">
                                <div _ngcontent-rkk-c5="" class="col-12 d-flex align-items-center justify-content-center">
                                    <div _ngcontent-rkk-c5="" class="width-400 mt-4 text-center">
                                        <div _ngcontent-rkk-c5="" class="card-img overlap">
                                            <img _ngcontent-rkk-c5="" alt="icon app" class="done-logos" src="../../../../assets/img/app-play-store/play-store-mensajero.png" width="110" />
                                        </div>
                                        <div _ngcontent-rkk-c5="" class="card-body">
                                            <h2 _ngcontent-rkk-c5="" class="font-medium-3 text-bold-600 black register">Registrarse</h2>
                                            <div _ngcontent-rkk-c5="" class="card-block">
                                                <form _ngcontent-rkk-c5="" novalidate="" class="ng-untouched ng-pristine ng-invalid">
                                                    <div _ngcontent-rkk-c5="" class="form__group field">
                                                        <input _ngcontent-rkk-c5="" class="form__field ng-untouched ng-pristine ng-invalid" formcontrolname="name" id="name" type="input" />
                                                        <label _ngcontent-rkk-c5="" class="form__label" for="name">Nombre</label>
                                                        <div _ngcontent-rkk-c5="" class="invalid-feedback">
                                                            <div _ngcontent-rkk-c5="">Campo necesario</div>
                                                        </div>
                                                    </div>
                                                    <div _ngcontent-rkk-c5="" class="form__group field">
                                                        <input _ngcontent-rkk-c5="" class="form__field ng-untouched ng-pristine ng-invalid" formcontrolname="email_r" id="email_r" type="email" />
                                                        <label _ngcontent-rkk-c5="" class="form__label" for="name">Email</label>
                                                        <div _ngcontent-rkk-c5="" class="invalid-feedback">
                                                            <div _ngcontent-rkk-c5="">Campo necesario</div>
                                                        </div>
                                                    </div>
                                                    <div _ngcontent-rkk-c5="" class="form__group field">
                                                        <fieldset _ngcontent-rkk-c5="" class="file-input form-group">
                                                            <label _ngcontent-rkk-c5="" for="form__label">Hoja de vida</label>
                                                            <div _ngcontent-rkk-c5="" class="custom-file center-block d-block">
                                                                <input _ngcontent-rkk-c5="" accept="application/pdf" class="custom-file-input ng-untouched ng-pristine ng-invalid" formcontrolname="curriculum_pdf" id="inputGroupFile01" type="file" />
                                                                <label _ngcontent-rkk-c5="" class="custom-file-label" for="inputGroupFile01">Escoger archivo</label>
                                                                <div _ngcontent-rkk-c5="" class="invalid-feedback">
                                                                    <div _ngcontent-rkk-c5="">Campo necesario</div>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                    <div _ngcontent-rkk-c5="" class="form__group field">
                                                        <select _ngcontent-rkk-c5="" class="form__field ng-untouched ng-pristine ng-invalid" formcontrolname="job_type" id="job_type">
                                                            <option _ngcontent-rkk-c5="" value="mensajero">Mensajero</option>
                                                            <option _ngcontent-rkk-c5="" value="asesor">Asesor</option>
                                                        </select>
                                                        <label _ngcontent-rkk-c5="" class="form__label" for="name">Puesto</label>
                                                        <div _ngcontent-rkk-c5="" class="invalid-feedback">
                                                            <div _ngcontent-rkk-c5="">Campo necesario</div>
                                                        </div>
                                                    </div>
                                                    <div _ngcontent-rkk-c5="" class="form__group field">
                                                        <select _ngcontent-rkk-c5="" class="form__field ng-untouched ng-pristine ng-invalid" formcontrolname="city_id" id="city_id">
                                                            <option _ngcontent-rkk-c5="" value="cfeed6d910019b05">Cuenca</option>
                                                            <option _ngcontent-rkk-c5="" value="c49da4cb798defc1">El Carmen</option>
                                                            <option _ngcontent-rkk-c5="" value="ee790c39ea6d77c5">Esmeraldas</option>
                                                            <option _ngcontent-rkk-c5="" value="267f6a17ff54a8b2">Guayaquil</option>
                                                            <option _ngcontent-rkk-c5="" value="8d58a16f4fb710d7">La Concordia</option>
                                                            <option _ngcontent-rkk-c5="" value="6e1c3a41d8625539">Lago Agrio</option>
                                                            <option _ngcontent-rkk-c5="" value="5ec85f3117f71276">Loja</option>
                                                            <option _ngcontent-rkk-c5="" value="9739b707075ca67f">Macara</option>
                                                            <option _ngcontent-rkk-c5="" value="d248cc05e8d21530">Machala</option>
                                                            <option _ngcontent-rkk-c5="" value="fc69be463af1fd3f">Portoviejo</option>
                                                            <option _ngcontent-rkk-c5="" value="47bf3868e6745a8c">Quito</option>
                                                            <option _ngcontent-rkk-c5="" value="f1bb15da8b92e012">Santo Domingo</option>
                                                            <option _ngcontent-rkk-c5="" value="ebd71c790901e8a2">Yantzaza</option>
                                                            <option _ngcontent-rkk-c5="" value="097be07214a5b40b">Zamora</option>
                                                        </select>
                                                        <label _ngcontent-rkk-c5="" class="form__label" for="name">Ciudad</label>
                                                        <div _ngcontent-rkk-c5="" class="invalid-feedback">
                                                            <div _ngcontent-rkk-c5="">Campo necesario</div>
                                                        </div>
                                                    </div>
                                                    <div _ngcontent-rkk-c5="" class="form-group">
                                                        <div _ngcontent-rkk-c5="" class="col-md-12">
                                                            <button _ngcontent-rkk-c5="" class="btn btn-amber btn-block btn-raised font-medium-3 text-bold-600 mt-5" type="submit" disabled="">Registrarse</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default DonerRegistro