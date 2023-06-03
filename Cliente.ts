import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Cliente{
        private _nome: String;
        private _cpf: number;
        private _data_nascimento: number;
        private _sexo: String;
        private _endereco: Endereco;
        private _telefones: Telefone[];

        constructor(nome: String, cpf: number, dataNascimento: number, sexo: String, endereco: Endereco, telefones: Telefone[]){
            this._nome = nome;
            this._cpf = cpf;
            this._data_nascimento = dataNascimento;
            this._sexo = sexo;
            this._endereco = endereco;
            this._telefones = telefones;
        }

        get nome() : String {
            return this._nome;
        }
    
        set nome(nome: String){
            this._nome = nome;
        } 

        get cpf() : number {
            return this._cpf;
        }
    
        set cpf(cpf: number){
            this._cpf = cpf;
        } 

        get dataNascimento() : number {
            return this._data_nascimento;
        }
    
        set dataNascimento(dataNascimento: number){
            this._data_nascimento = dataNascimento;
        } 

        get sexo() : String {
            return this._sexo;
        }
    
        set sexo(sexo: String){
            this._sexo = sexo;
        } 

        get endereco() : Endereco {
            return this._endereco;
        }
    
        set endereco(endereco: Endereco){
            this._endereco = endereco;
        } 

        get telefones() : Telefone[] {
            return this._telefones;
        }
    
        set telefones(telefones: Telefone[]){
            this._telefones = telefones;
        } 
        
}