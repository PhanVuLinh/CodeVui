import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form action="">
      <h1>Đăng Nhập</h1>
      <label className='taikhoang' htmlFor="email">Nhập Địa Chỉ Email</label>
      <input placeholder='Nhập email' type="text" className="glass-input " />
      <label className="password" for="">Mật Khẩu</label>
      <input placeholder="Nhập mật khẩu" type="password" className="glass-input" />
      <div class="row">
        <div class="form-group">
          <input type="checkbox" />
          <label for="checkbox">Nhớ Mật Khẩu</label>
        </div>
        <a href="">Quên Mật Khẩu?</a>
      </div>
      <button className="glass-button">Đăng Nhập</button>
      <div class="create-account">
        <label className="no-account">Chưa có tài khoản? </label>
        <a className='create' href=" "> Tạo Tài Khoản</a>
      </div>
    </form>
  );
}

export default App;
