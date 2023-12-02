import { useForm } from "react-hook-form";
import validator from "validator";
import "./Form.css";


function Form() {
  const { 
    register,
    handleSubmit,
    formState: { errors }
   } = useForm();

   const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div  className="all-form">
      <div className="input-name-email">
        <div className="input-name">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            placeholder="Nome"
            className={errors?.name && 'input-error'}
            {...register('name', {required: true})}
          />
          {errors?.name?.type === 'required' && (
            <p className="error-message">O nome é obrigatório.</p>
          )}
        </div>
        <div className="email-input">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            placeholder="E-mail"
            className={errors?.name && 'input-error'}
            {...register('email', { required: true, validate: (value) => validator.isEmail(value) })}
          />
          {errors?.email?.type === 'required' && (
            <p className="error-message">O e-mail é obrigatório.</p>
          )}
          {errors?.email?.type === 'validate' && (
            <p className="error-message">O e-mail esta invalido.</p>
          )}
        </div>
      </div>
      <div className="password-input">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Senha"
          className={errors?.name && 'input-error'}
          {...register('password', {required: true ,minLength: 7})}
        />
        {errors?.password?.type === 'minLength' && (
          <p className="error-message">Senha precisa ter pelo menos 7 caracteres.</p>
        )}

        {errors?.password?.type === 'required' && (
          <p className="error-message">A senha é obrigatória</p>
        )}
      </div>

      <div className="accept-option">
        <input 
        type="checkbox"
        name="terms" 
        {...register('privacyTerms', {required: true})}
        />
        <label htmlFor="terms">
          Li e concordo com os <a href="">Termos de Serviço</a> e nossa{" "}
          <a href="">Política de Privacidade</a>.
        </label>
      </div>
      {errors?.privacyTerms?.type === 'required' && (
          <p className="error-message">Você precisa concordar com os termos.</p>
      )}
    <button onClick={() => handleSubmit(onSubmit)()}>Criar Conta</button>
    </div>
  );
  
}

export default Form;
