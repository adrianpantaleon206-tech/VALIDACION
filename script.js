document.addEventListener('DOMContentLoaded', () => {

  const countrySelect = document.getElementById('countryCode');
  const countryBadge = document.getElementById('countryBadge');
  const phoneInput = document.getElementById('telefono');
  const form = document.getElementById('cyberForm');
  const globalStatus = document.getElementById('globalStatus');

  // =========================================================================
  // 1. ARREGLO DE PAÍSES (VENEZUELA ACTUALIZADO A 11 DÍGITOS)
  // =========================================================================
  const allCountriesArray = [
    { flag: "🇻🇪", name: "Venezuela", code: "+58", regex: /^[0-9]{11}$/, pattern: "^[0-9]{11}$", hint: "11 dígitos" },
    { flag: "🇦🇫", name: "Afganistán", code: "+93", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇦🇱", name: "Albania", code: "+355", regex: /^[0-9]{8,9}$/, pattern: "^[0-9]{8,9}$", hint: "8 a 9 dígitos" },
    { flag: "🇩🇪", name: "Alemania", code: "+49", regex: /^[0-9]{10,11}$/, pattern: "^[0-9]{10,11}$", hint: "10 a 11 dígitos" },
    { flag: "🇦🇩", name: "Andorra", code: "+376", regex: /^[0-9]{6}$/, pattern: "^[0-9]{6}$", hint: "6 dígitos" },
    { flag: "🇦🇴", name: "Angola", code: "+244", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇦🇷", name: "Argentina", code: "+54", regex: /^[0-9]{10,11}$/, pattern: "^[0-9]{10,11}$", hint: "10 a 11 dígitos" },
    { flag: "🇦🇲", name: "Armenia", code: "+374", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" },
    { flag: "🇦🇺", name: "Australia", code: "+61", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇦🇹", name: "Austria", code: "+43", regex: /^[0-9]{10,11}$/, pattern: "^[0-9]{10,11}$", hint: "10 a 11 dígitos" },
    { flag: "🇧🇸", name: "Bahamas", code: "+1242", regex: /^[0-9]{7}$/, pattern: "^[0-9]{7}$", hint: "7 dígitos" },
    { flag: "🇧🇪", name: "Bélgica", code: "+32", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇧🇿", name: "Belice", code: "+501", regex: /^[0-9]{7}$/, pattern: "^[0-9]{7}$", hint: "7 dígitos" },
    { flag: "🇧🇴", name: "Bolivia", code: "+591", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" },
    { flag: "🇧🇷", name: "Brasil", code: "+55", regex: /^[0-9]{10,11}$/, pattern: "^[0-9]{10,11}$", hint: "10 a 11 dígitos" },
    { flag: "🇧🇬", name: "Bulgaria", code: "+359", regex: /^[0-9]{8,9}$/, pattern: "^[0-9]{8,9}$", hint: "8 a 9 dígitos" },
    { flag: "🇨🇦", name: "Canadá", code: "+1-CA", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇨🇱", name: "Chile", code: "+56", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇨🇳", name: "China", code: "+86", regex: /^[0-9]{11}$/, pattern: "^[0-9]{11}$", hint: "11 dígitos" },
    { flag: "🇨🇴", name: "Colombia", code: "+57", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇰🇷", name: "Corea del Sur", code: "+82", regex: /^[0-9]{9,10}$/, pattern: "^[0-9]{9,10}$", hint: "9 a 10 dígitos" },
    { flag: "🇨🇷", name: "Costa Rica", code: "+506", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" },
    { flag: "🇨🇺", name: "Cuba", code: "+53", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" },
    { flag: "🇩🇰", name: "Dinamarca", code: "+45", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" },
    { flag: "🇪🇨", name: "Ecuador", code: "+593", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇪🇬", name: "Egipto", code: "+20", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇸🇻", name: "El Salvador", code: "+503", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" },
    { flag: "🇦🇪", name: "Emiratos Árabes", code: "+971", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇪🇸", name: "España", code: "+34", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇺🇸", name: "EE.UU.", code: "+1", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇵🇭", name: "Filipinas", code: "+63", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇫🇮", name: "Finlandia", code: "+358", regex: /^[0-9]{7,10}$/, pattern: "^[0-9]{7,10}$", hint: "7 a 10 dígitos" },
    { flag: "🇫🇷", name: "Francia", code: "+33", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇬🇷", name: "Grecia", code: "+30", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇬🇹", name: "Guatemala", code: "+502", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" },
    { flag: "🇭🇳", name: "Honduras", code: "+504", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" },
    { flag: "🇮🇳", name: "India", code: "+91", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇮🇩", name: "Indonesia", code: "+62", regex: /^[0-9]{9,12}$/, pattern: "^[0-9]{9,12}$", hint: "9 a 12 dígitos" },
    { flag: "🇮🇪", name: "Irlanda", code: "+353", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇮🇱", name: "Israel", code: "+972", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇮🇹", name: "Italia", code: "+39", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇯🇵", name: "Japón", code: "+81", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇲🇦", name: "Marruecos", code: "+212", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇲🇽", name: "México", code: "+52", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇳🇮", name: "Nicaragua", code: "+505", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" },
    { flag: "🇳🇴", name: "Noruega", code: "+47", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" },
    { flag: "🇳🇱", name: "Países Bajos", code: "+31", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇵🇦", name: "Panamá", code: "+507", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" },
    { flag: "🇵🇾", name: "Paraguay", code: "+595", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇵🇪", name: "Perú", code: "+51", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇵🇱", name: "Polonia", code: "+48", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇵🇹", name: "Portugal", code: "+351", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇬🇧", name: "Reino Unido", code: "+44", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇩🇴", name: "R. Dominicana", code: "+1809", regex: /^[0-9]{7}$/, pattern: "^[0-9]{7}$", hint: "7 dígitos" },
    { flag: "🇷🇴", name: "Rumanía", code: "+40", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇷🇺", name: "Rusia", code: "+7", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇿🇦", name: "Sudáfrica", code: "+27", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇸🇪", name: "Suecia", code: "+46", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇨🇭", name: "Suiza", code: "+41", regex: /^[0-9]{9}$/, pattern: "^[0-9]{9}$", hint: "9 dígitos" },
    { flag: "🇹🇷", name: "Turquía", code: "+90", regex: /^[0-9]{10}$/, pattern: "^[0-9]{10}$", hint: "10 dígitos" },
    { flag: "🇺🇾", name: "Uruguay", code: "+598", regex: /^[0-9]{8}$/, pattern: "^[0-9]{8}$", hint: "8 dígitos" }
  ];

  allCountriesArray.sort((a, b) => a.name.localeCompare(b.name));

  allCountriesArray.forEach(c => {
    const option = document.createElement('option');
    option.value = c.code;
    option.textContent = `${c.flag} ${c.name}`;
    if (c.code === "+58") option.selected = true;
    countrySelect.appendChild(option);
  });

  // =========================================================================
  // 2. CONFIGURACIÓN DE REGEXP Y CAMPOS
  // =========================================================================
  const formFieldsArray = [
    {
      id: 'nombre',
      regex: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,30}$/,
      pattern: '^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{2,30}$',
      errorMsg: 'Solo letras (mínimo 2 caracteres).'
    },
    {
      id: 'apellido',
      regex: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,30}$/,
      pattern: '^[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]{2,30}$',
      errorMsg: 'Solo letras (mínimo 2 caracteres).'
    },
    {
      id: 'cedula',
      regex: /^[0-9]{7,8}$/,
      pattern: '^[0-9]{7,8}$',
      errorMsg: 'La cédula debe contener de 7 a 8 números.'
    },
    {
      id: 'correo',
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      errorMsg: 'Formato de correo no válido.'
    },
    {
      id: 'password',
      regex: /^[1-8]{8}$/,
      pattern: '^[1-8]{8}$',
      errorMsg: 'Formato o longitud de contraseña no válido.'
    }
  ];

  // =========================================================================
  // 3. FUNCIONES DE VALIDACIÓN
  // =========================================================================
  function validateSingleField(fieldConfig) {
    const input = document.getElementById(fieldConfig.id);
    const container = input.parentElement;
    const feedback = document.getElementById(`feedback-${fieldConfig.id}`);
    const value = input.value.trim();

    if (!value) {
      container.classList.remove('valid', 'invalid');
      feedback.textContent = '';
      return false;
    }

    const isValid = fieldConfig.regex.test(value);

    if (isValid) {
      container.classList.remove('invalid');
      container.classList.add('valid');
      feedback.textContent = '';
      return true;
    } else {
      container.classList.remove('valid');
      container.classList.add('invalid');
      feedback.textContent = fieldConfig.errorMsg;
      return false;
    }
  }

  function validatePhone() {
    const activeCountry = allCountriesArray.find(c => c.code === countrySelect.value) || allCountriesArray[0];
    const container = phoneInput.parentElement;
    const feedback = document.getElementById('feedback-telefono');
    const value = phoneInput.value.trim();

    countryBadge.textContent = `${activeCountry.flag} ${activeCountry.code}`;
    phoneInput.setAttribute('pattern', activeCountry.pattern);

    if (!value) {
      container.classList.remove('valid', 'invalid');
      feedback.textContent = '';
      return false;
    }

    const isValid = activeCountry.regex.test(value);

    if (isValid) {
      container.classList.remove('invalid');
      container.classList.add('valid');
      feedback.textContent = '';
      return true;
    } else {
      container.classList.remove('valid');
      container.classList.add('invalid');
      feedback.textContent = `Formato no válido para ${activeCountry.code}. Requiere: ${activeCountry.hint}`;
      return false;
    }
  }

  // =========================================================================
  // 4. EVENTOS
  // =========================================================================
  formFieldsArray.forEach(config => {
    const input = document.getElementById(config.id);
    input.setAttribute('pattern', config.pattern);

    input.addEventListener('input', () => {
      validateSingleField(config);
      updateGlobalStatus();
    });
  });

  countrySelect.addEventListener('change', () => {
    validatePhone();
    updateGlobalStatus();
  });

  phoneInput.addEventListener('input', () => {
    validatePhone();
    updateGlobalStatus();
  });

  function updateGlobalStatus() {
    const allFieldsValid = formFieldsArray.every(config => validateSingleField(config)) && validatePhone();

    if (allFieldsValid) {
      globalStatus.textContent = 'TODOS LOS CAMPOS VALIDADOS CORRECTAMENTE';
      globalStatus.style.color = 'var(--green-neon)';
    } else {
      globalStatus.textContent = 'ESPERANDO INGRESO DE DATOS VÁLIDOS...';
      globalStatus.style.color = 'var(--text-dim)';
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;

    formFieldsArray.forEach(config => {
      if (!validateSingleField(config)) isFormValid = false;
    });

    if (!validatePhone()) isFormValid = false;

    if (isFormValid && form.checkValidity()) {
      alert('¡REGISTRO EXITOSO!\nLas credenciales han sido verificadas y procesadas.');
    } else {
      globalStatus.textContent = 'ERROR EN REGISTRO: REVISA LOS CAMPOS RESALTADOS';
      globalStatus.style.color = 'var(--magenta-neon)';
      alert('Por favor corrige los datos antes de continuar.');
    }
  });

  validatePhone();
});
