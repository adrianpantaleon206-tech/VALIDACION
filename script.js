document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registroForm');
  const btnSubmit = document.getElementById('btnSubmit');

  const inputs = {
    nombre: document.getElementById('nombre'),
    apellido: document.getElementById('apellido'),
    correo: document.getElementById('correo'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword'),
    tipoCedula: document.getElementById('tipoCedula'),
    cedula: document.getElementById('cedula'),
    pais: document.getElementById('pais'),
    codigoPais: document.getElementById('codigoPais'),
    telefono: document.getElementById('telefono')
  };

  const listaPaisesGlobales = [
    { nombre: "Afganistán", iso: "AF", prefijo: "+93" },
    { nombre: "Alemania", iso: "DE", prefijo: "+49" },
    { nombre: "Argentina", iso: "AR", prefijo: "+54" },
    { nombre: "Brasil", iso: "BR", prefijo: "+55" },
    { nombre: "Canadá", iso: "CA", prefijo: "+1" },
    { nombre: "Chile", iso: "CL", prefijo: "+56" },
    { nombre: "Colombia", iso: "CO", prefijo: "+57" },
    { nombre: "España", iso: "ES", prefijo: "+34" },
    { nombre: "Estados Unidos", iso: "US", prefijo: "+1" },
    { nombre: "México", iso: "MX", prefijo: "+52" },
    { nombre: "Perú", iso: "PE", prefijo: "+51" },
    { nombre: "Venezuela", iso: "VE", prefijo: "+58" }
  ];

  function cargarPaisesLocales() {
    inputs.pais.innerHTML = '<option value="">Selecciona tu país</option>';
    inputs.codigoPais.innerHTML = '<option value="">Código</option>';

    listaPaisesGlobales.forEach(item => {
      const optPais = document.createElement('option');
      optPais.value = item.iso;
      optPais.textContent = item.nombre;
      inputs.pais.appendChild(optPais);

      const optCod = document.createElement('option');
      optCod.value = item.prefijo;
      optCod.textContent = `${item.iso} (${item.prefijo})`;
      inputs.codigoPais.appendChild(optCod);
    });
  }

  // Ejecutamos la carga de países de inmediato
  cargarPaisesLocales();

  // Formateador de cédula
  inputs.cedula.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 3 && val.length <= 6) {
      val = val.replace(/(\d{3})(\d+)/, '$1.$2');
    } else if (val.length > 6) {
      val = val.replace(/(\d{1,3})(\d{3})(\d+)/, '$1.$2.$3');
    }
    e.target.value = val;
    validarCampo('cedula');
  });

  // Solo números en teléfono
  inputs.telefono.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
    validarCampo('telefono');
  });

  // Eventos de entrada (input) para campos de texto y claves
  ['nombre', 'apellido', 'correo', 'password', 'confirmPassword', 'telefono', 'cedula'].forEach(campo => {
    if (inputs[campo]) {
      inputs[campo].addEventListener('input', () => validarCampo(campo));
    }
  });

  // Eventos de cambio (change) para todos los selectores
  ['pais', 'codigoPais', 'tipoCedula'].forEach(campo => {
    if (inputs[campo]) {
      inputs[campo].addEventListener('change', () => {
        if (campo === 'codigoPais') validarCampo('telefono');
        else if (campo === 'tipoCedula') validarCampo('cedula');
        else validarCampo(campo);
      });
    }
  });

  function validarCampo(campo) {
    const group = document.getElementById(`group-${campo}`);
    if (!group) return true;
    
    const val = inputs[campo].value.trim();
    let error = '';

    switch (campo) {
      case 'nombre':
      case 'apellido':
        if (!val) error = 'Requerido.';
        else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/.test(val)) error = 'Solo letras.';
        break;

      case 'correo':
        if (!val) error = 'Correo requerido.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) error = 'Correo inválido.';
        break;

      case 'password':
        if (!val) error = 'Contraseña requerida.';
        else if (val.length < 6) error = 'Mínimo 6 caracteres.';
        break;

      case 'confirmPassword':
        if (!val) error = 'Confirma tu clave.';
        else if (val !== inputs.password.value) error = 'No coinciden.';
        break;

      case 'cedula':
        const numCedula = val.replace(/\./g, '');
        if (!numCedula) error = 'Documento requerido.';
        else if (numCedula.length < 6 || numCedula.length > 9) error = 'Inválido.';
        break;

      case 'pais':
        if (!val) error = 'Selecciona un país.';
        break;

      case 'telefono':
        if (!inputs.codigoPais.value) error = 'Selecciona el código.';
        else if (!val) error = 'Número requerido.';
        else if (val.length < 7 || val.length > 12) error = 'Número incompleto.';
        break;
    }

    const msgEl = group.querySelector('.msg-error');

    if (error) {
      group.classList.add('error');
      group.classList.remove('success');
      if (msgEl) msgEl.textContent = error;
      return false;
    } else {
      group.classList.remove('error');
      group.classList.add('success');
      if (msgEl) msgEl.textContent = '';
      return true;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const campos = ['nombre', 'apellido', 'correo', 'password', 'confirmPassword', 'cedula', 'pais', 'telefono'];
    const resultados = campos.map(campo => validarCampo(campo));
    const esValido = resultados.every(res => res === true);

    if (esValido) {
      btnSubmit.textContent = 'Enviando...';
      btnSubmit.style.opacity = '0.7';
      btnSubmit.disabled = true;

      setTimeout(() => {
        mostrarAlertaExito();
        form.reset();
        inputs.password.value = "12345678";
        inputs.confirmPassword.value = "12345678";
        campos.forEach(campo => {
          const g = document.getElementById(`group-${campo}`);
          if(g) g.classList.remove('success');
        });
        btnSubmit.textContent = 'Completar Registro';
        btnSubmit.style.opacity = '1';
        btnSubmit.disabled = false;
      }, 1200);
    }
  });

  function mostrarAlertaExito() {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(3, 7, 18, 0.8); backdrop-filter: blur(10px);
      display: grid; place-items: center; z-index: 9999;
    `;

    modal.innerHTML = `
      <div style="background: #0b1120; border: 1px solid #34d399; padding: 2.5rem; border-radius: 1.2rem; text-align: center; max-width: 380px; box-shadow: 0 0 30px rgba(52, 211, 153, 0.3);">
        <h3 style="color: #fff; font-size: 1.5rem; font-weight: 800; margin-bottom: 0.5rem;">¡Registro Exitoso!</h3>
        <p style="color: #cbd5e1; font-size: 0.95rem; margin-bottom: 1.5rem;">Tus datos han sido validados correctamente.</p>
        <button id="btnCerrarModal" style="background: #34d399; color: #030712; border: none; padding: 0.8rem 1.5rem; font-weight: 800; border-radius: 0.6rem; cursor: pointer; font-size: 1rem; width: 100%;">Aceptar</button>
      </div>
    `;

    document.body.appendChild(modal);
    document.getElementById('btnCerrarModal').addEventListener('click', () => modal.remove());
  }
});
