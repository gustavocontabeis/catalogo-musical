import { environment } from './../../environments/environment';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  exibirResposta: any;

  apiUrl: string;

  constructor(
    private loginService: LoginService,
    private httpClient: HttpClient) {
      this.apiUrl = environment.apiUrl + '/bandas';
    }

  ngOnInit(): void {
    // this.username = 'ok';
    // this.password = '123';
    this.username = 'emploee1';
    this.password = '123';
  }

  login() {
    console.log('login');
    this.loginService.login().subscribe(resposta => {
      console.log(resposta);
      // const respostaAny = resposta as any;
      // this.exibirResposta = respostaAny;
      // console.log(respostaAny);
      // localStorage.setItem('token', respostaAny.access_token);
      }, error => {
        alert('error component!');
        console.log(error);
        alert('OK? ' + error.ok);
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.exibirResposta = null;
  }

  naoAutorizado() {
    console.log('naoAutorizado');
    this.loginService.naoAutorizado().subscribe(resposta => {
      console.log(resposta);
      // const respostaAny = resposta as any;
      // this.exibirResposta = respostaAny;
      // console.log(respostaAny);
      // localStorage.setItem('token', respostaAny.access_token);
      }, error => {
        alert('erro component!');
        console.log(error);
        alert(error.ok);
      }
    );
  }

  onSubmit(loginForm) {

  }


}
