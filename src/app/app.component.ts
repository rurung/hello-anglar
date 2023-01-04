import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // 태그네임
  templateUrl: './app.component.html', // html 태그들을 가지고 있는지 보여줌
  styleUrls: ['./app.component.css'] // css값이 들어간 컴포넌트
})
export class AppComponent {
  title = 'front-end';
}
