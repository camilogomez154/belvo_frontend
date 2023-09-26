import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faAt, faXmark, faKey, faPaperPlane, faEyeSlash, faEye, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { useState } from "react";

import { CenterLayout } from "../../layouts";

import { SigninInformationData } from './signin.validator';
import { SigninInitialState } from "./signin.constants";

import './signin.styles.scss'

export function SignupView() {

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const SignInFormClassValidatorResolver = classValidatorResolver(SigninInformationData)

    const { handleSubmit, register, formState } = useForm({
        resolver: SignInFormClassValidatorResolver,
        defaultValues: SigninInitialState,
        reValidateMode: "onChange"
    })

    const onSubmitForm = (values: Required<SigninInformationData>) => {
        console.log(values)
    }

    const onShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <CenterLayout>
            <div className="signin">
                <header className="signin-header">
                    <h1>
                        Welcome to product manager of belvo!!
                    </h1>
                    <FontAwesomeIcon size="2x" icon={faHand} />
                </header>
                <main className="signin-main">
                    <form onSubmit={handleSubmit(onSubmitForm)}>
                        <section className="input-control">
                            <FontAwesomeIcon className="input-control-icon" icon={faAt} />
                            <section className="input-control-main">
                                <label htmlFor="email">Email</label>
                                <input {...register('email')} id="email" type="email" autoComplete="false" placeholder="put your email to access." />
                                {
                                    formState.errors.email &&
                                    <div className="input-control-error">
                                        <FontAwesomeIcon icon={faXmark} />
                                        <span>{formState.errors.email.message}</span>
                                    </div>
                                }
                            </section>
                        </section>
                        <section className="input-control">
                            <FontAwesomeIcon className="input-control-icon" icon={faKey} />
                            <section className="input-control-main">
                                <label htmlFor="password">Password</label>
                                <input {...register('password')} id="password" type={showPassword ? 'text' : 'password'} autoComplete="false" placeholder="put your password to access." />
                                {
                                    formState.errors.password &&
                                    <div className="input-control-error">
                                        <FontAwesomeIcon icon={faXmark} />
                                        <span>{formState.errors.password.message}</span>
                                    </div>
                                }
                            </section>
                            <FontAwesomeIcon onClick={onShowPassword} className="input-control-icon" icon={showPassword ? faEyeSlash : faEye} />
                        </section>

                        <section className="checkbox-control">
                            <input
                                {...register('rememberMe')}
                                type="checkbox"
                                id="rememberMe"
                            />
                            <label htmlFor="rememberMe">remember me?</label>
                        </section>

                        <section className="submit-control">
                            <button type="submit">
                                <span>sign in</span>
                                <FontAwesomeIcon className="submit-control-icon" icon={faPaperPlane} />
                            </button>
                        </section>
                    </form>
                </main>
                <footer className="signin-footer">
                    <p>If you haven't an account, you can create here.</p>
                    <Link to='/signup'>
                        <span>sign up</span>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </Link>.
                </footer>
            </div>
        </CenterLayout>
    )
}