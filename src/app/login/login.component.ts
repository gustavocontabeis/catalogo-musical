import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  exibirResposta: any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.username = 'ok';
    this.password = '123';
  }

  login() {
    console.log('login');
    this.loginService.login().subscribe(resposta => {
      const respostaAny = resposta as any;
      this.exibirResposta = respostaAny;
      console.log(respostaAny);
      localStorage.setItem('id_token', respostaAny.access_token);
      }, error => {
        console.log(error);
        alert(error.ok);
      }
    );
  }

  logout() {
    localStorage.removeItem('id_token');
    this.exibirResposta = null;
  }

  onSubmit(loginForm) {

  }


}
