import React from 'react'
import {Link} from 'react-router-dom'

const Register = (props) => {
  return (
    <div className="masthead">
        <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-10 align-self-end">
                    <h1 className="text-uppercase text-white font-weight-bold">
                    ベトナム人のeラーニングコミュニティへよこそ
                    </h1>
                    <hr className="divider my-4" />
                </div>
                <div className="col-lg-8 align-self-baseline">
                    <p class="text-white-75 font-weight-light mb-5">
                        将来、日本で就職する予定がある方、お仕事のため専門用語を学びたい方に向けるeラーニング
                    </p>
                    <form action="/action_page.php">
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="enterprise"
                          name="permission"
                        />
                        <label className="custom-control-label" htmlFor="enterprise">
                        企業
                        </label>
                      </div>
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="personal"
                          name="permission"
                        />
                        <label className="custom-control-label" htmlFor="personal">
                        個人
                        </label>
                      </div>
                      <div>
                      <div className="form-group row mt-4">
                      <label htmlFor="gmail" className="col-3 pl-0 reglable">
                      ユーザ名 :
                      </label>
                      <input
                            type="email"
                            className="form-control col-9"
                            placeholder="Nguyen Van A"
                            id="gmail"
                            />
                        </div>
                        <div className="form-group row mt-2">
                        <label htmlFor="password" className="col-3 pl-0 reglable">
                          パスワード :
                        </label>
                        <input
                            type="password"
                            className="form-control col-9"
                            placeholder="**********"
                            id="password"
                            />
                          </div>
                          <div className="form-group row mt-2">
                          <label htmlFor="repwd" className="col-3 pl-0 reglable">
                           パスワード確認 :
                          </label>
                          <input
                              type="password"
                              className="form-control col-9"
                              placeholder="**********"
                              id="repwd"
                              />
                          </div>
                        </div>
                        <div>
                          <p className="text-white-75 font-weight-light mb-2">
                            ※ 登録済みの方は{" "}
                            <Link to='./login'>ログイン</Link>下さい
                          </p>
                          <div className="btn col-3 btn-primary btn-xl js-scroll-trigger mr-3"
                            href="#search">
                            登録
                          </div>
                          <div>
                            <link rel="icon" type="image/x-icon" href='../Images/Logo/favicon.ico' />
                          </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Register
