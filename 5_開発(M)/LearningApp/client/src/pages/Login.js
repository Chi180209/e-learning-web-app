import React from 'react'
import {Link} from 'react-router-dom'

const Login = (props) => {
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
                            <div className="form-group row mt-4">
                                <label htmlFor="gmail" className="col-3 pl-0 reglable">
                                     ユーザ名 :
                                </label>
                                <input
                                    type="email"
                                    className="form-control col-9"
                                    placeholder="Nguyen Van A"
                                    id="gmail"/>
                            </div>
                            <div className="form-group row mt-2">
                                <label htmlFor="password" className="col-3 pl-0 reglable">
                                    パスワード :
                                </label>
                                <input
                                    type="password"
                                    className="form-control col-9"
                                    placeholder="**********"
                                    id="password"/>              
                                </div>
                                <p className="text-white-75 font-weight-light mb-2">
                                    ※ 登録済みではない方は{" "}
                                    <Link to='./register'>登録</Link>下さい
                                </p>
                                <button className="col-3 btn-primary btn-xl js-scroll-trigger mr-3">
                                    ログイン
                                </button>  
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login