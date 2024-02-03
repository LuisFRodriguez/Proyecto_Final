async function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    try {
      // Realizar la solicitud a la API utilizando fetch
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      });

      const data = await response.json();
      console.log(data.token);

      if (response.status === 200) {
        // Redireccionar al home.html si la respuesta es 200
        //window.location.href = 'home.html';
        console.log("Ingreso exitoso")
      } else {
        // Mostrar una alerta si la respuesta no es 200
        alert('Usuario inválido');
      }
    } catch (error) {
      // Manejar errores de la solicitud
      alert('Error al conectar con la API');
    }
  }