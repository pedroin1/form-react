import { useState } from "react";
import styles from "./style.module.css";
import InputComponent from "../input";
import ButtonComponent from "../button";
import logo from "../../assets/logoForm.jpeg";

export default function FormularioComponent() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sexo, setSexo] = useState("");
  const [errors, setErrors] = useState({
    nome: "",
    dataNascimento: "",
    email: "",
    senha: "",
    sexo: "",
  });

  const clearErrors = () => {
    setErrors({
      nome: "",
      email: "",
      senha: "",
      sexo: "",
    });
  };

  const handleClearForm = (e) => {
    e.preventDefault();
    setNome("");
    setDataNascimento("");
    setEmail("");
    setSenha("");
    setSexo("");
    clearErrors();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    clearErrors();
    validateFields();
  };

  const validateFields = () => {
    if (nome === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nome: "O nome deve ser preenchido",
      }));
    }
    if (dataNascimento === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        dataNascimento: "A data de nascimento deve ser preenchida",
      }));
    }
    if (email === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "O email deve ser preenchido",
      }));
    }
    if (senha === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        senha: "A senha deve ser preenchida",
      }));
    }
    if (sexo === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        sexo: "O Sexo deve ser preenchido",
      }));
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.form_container}>
      <img src={logo} alt="" />
      <InputComponent
        label="Digite Seu Nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
      {errors.nome && (
        <div style={{ color: "red", fontSize: "12px" }}>*{errors.nome}</div>
      )}
      <InputComponent
        label="Digite sua data de nascimento"
        type="date"
        value={dataNascimento}
        setValue={setDataNascimento}
      />
      {errors.dataNascimento && (
        <div style={{ color: "red", fontSize: "12px" }}>
          *{errors.dataNascimento}
        </div>
      )}
      <InputComponent
        label="Digite seu email"
        type="email"
        value={email}
        setValue={setEmail}
      />
      {errors.email && (
        <div style={{ color: "red", fontSize: "12px" }}>*{errors.email}</div>
      )}
      <InputComponent
        label="Digite sua senha"
        type="password"
        value={senha}
        setValue={setSenha}
      />
      {errors.senha && (
        <div style={{ color: "red", fontSize: "12px" }}>*{errors.senha}</div>
      )}
      <InputComponent
        label="Digite seu sexo"
        type="text"
        value={sexo}
        setValue={setSexo}
      />
      {errors.sexo && (
        <div style={{ color: "red", fontSize: "12px" }}>*{errors.sexo}</div>
      )}
      <div className={styles.buttons_wrapper}>
        <ButtonComponent primary onClick={handleSubmitForm}>
          Enviar
        </ButtonComponent>
        <ButtonComponent secondary onClick={handleClearForm}>
          Limpar
        </ButtonComponent>
      </div>
    </form>
  );
}
