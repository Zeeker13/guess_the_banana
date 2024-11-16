function LoginPage() {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/image/loginpge.jpg')" }}
      ></div>

      <div className="relative flex items-center justify-center w-full h-full">
        <img
          className="max-w-full max-h-full object-contain "
          src="\src\assets\image\highestscorewood.png"
          alt="login"
        />
      </div>

      <div className="relative flex items-center justify-center w-full h-full pb-36">
        <img
          className="max-w-full max-h-full object-contain "
          src="/src/assets/image/logintxt.png"
          alt="login"
        />
      </div>
    </div>
  );
}

export default LoginPage;
