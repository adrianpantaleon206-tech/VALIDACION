document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registroForm');
  const btnSubmit = document.getElementById('btnSubmit');

  const inputs = {
    nombre: document.getElementById('nombre'),
    apellido: document.getElementById('apellido'),
    tipoCedula: document.getElementById('tipoCedula'),
    cedula: document.getElementById('cedula'),
    pais: document.getElementById('pais'),
    codigoPais: document.getElementById('codigoPais'),
    telefono: document.getElementById('telefono')
  };

  // --- BASE DE DATOS DE PAÍSES Y CÓDIGOS INTERNACIONALES COMPLETA ---
  const listaPaisesGlobales = [
    { nombre: "Afganistán", iso: "AF", prefijo: "+93" },
    { nombre: "Albania", iso: "AL", prefijo: "+355" },
    { nombre: "Alemania", iso: "DE", prefijo: "+49" },
    { nombre: "Andorra", iso: "AD", prefijo: "+376" },
    { nombre: "Angola", iso: "AO", prefijo: "+244" },
    { nombre: "Antigua y Barbuda", iso: "AG", prefijo: "+1-268" },
    { nombre: "Arabia Saudita", iso: "SA", prefijo: "+966" },
    { nombre: "Argelia", iso: "DZ", prefijo: "+213" },
    { nombre: "Argentina", iso: "AR", prefijo: "+54" },
    { nombre: "Armenia", iso: "AM", prefijo: "+374" },
    { nombre: "Australia", iso: "AU", prefijo: "+61" },
    { nombre: "Austria", iso: "AT", prefijo: "+43" },
    { nombre: "Azerbaiyán", iso: "AZ", prefijo: "+994" },
    { nombre: "Bahamas", iso: "BS", prefijo: "+1-242" },
    { nombre: "Bangladés", iso: "BD", prefijo: "+880" },
    { nombre: "Barbados", iso: "BB", prefijo: "+1-246" },
    { nombre: "Baréin", iso: "BH", prefijo: "+973" },
    { nombre: "Bélgica", iso: "BE", prefijo: "+32" },
    { nombre: "Belice", iso: "BZ", prefijo: "+501" },
    { nombre: "Benín", iso: "BJ", prefijo: "+229" },
    { nombre: "Bielorrusia", iso: "BY", prefijo: "+375" },
    { nombre: "Birmania (Myanmar)", iso: "MM", prefijo: "+95" },
    { nombre: "Bolivia", iso: "BO", prefijo: "+591" },
    { nombre: "Bosnia y Herzegovina", iso: "BA", prefijo: "+387" },
    { nombre: "Botsuana", iso: "BW", prefijo: "+267" },
    { nombre: "Brasil", iso: "BR", prefijo: "+55" },
    { nombre: "Brunéi", iso: "BN", prefijo: "+673" },
    { nombre: "Bulgaria", iso: "BG", prefijo: "+359" },
    { nombre: "Burkina Faso", iso: "BF", prefijo: "+226" },
    { nombre: "Burundi", iso: "BI", prefijo: "+257" },
    { nombre: "Bután", iso: "BT", prefijo: "+975" },
    { nombre: "Cabo Verde", iso: "CV", prefijo: "+238" },
    { nombre: "Camboya", iso: "KH", prefijo: "+855" },
    { nombre: "Camerún", iso: "CM", prefijo: "+237" },
    { nombre: "Canadá", iso: "CA", prefijo: "+1" },
    { nombre: "Catar", iso: "QA", prefijo: "+974" },
    { nombre: "Chad", iso: "TD", prefijo: "+235" },
    { nombre: "Chile", iso: "CL", prefijo: "+56" },
    { nombre: "China", iso: "CN", prefijo: "+86" },
    { nombre: "Chipre", iso: "CY", prefijo: "+357" },
    { nombre: "Colombia", iso: "CO", prefijo: "+57" },
    { nombre: "Comoras", iso: "KM", prefijo: "+269" },
    { nombre: "Corea del Norte", iso: "KP", prefijo: "+850" },
    { nombre: "Corea del Sur", iso: "KR", prefijo: "+82" },
    { nombre: "Costa de Marfil", iso: "CI", prefijo: "+225" },
    { nombre: "Costa Rica", iso: "CR", prefijo: "+506" },
    { nombre: "Croacia", iso: "HR", prefijo: "+385" },
    { nombre: "Cuba", iso: "CU", prefijo: "+53" },
    { nombre: "Dinamarca", iso: "DK", prefijo: "+45" },
    { nombre: "Dominica", iso: "DM", prefijo: "+1-767" },
    { nombre: "Ecuador", iso: "EC", prefijo: "+593" },
    { nombre: "Egipto", iso: "EG", prefijo: "+20" },
    { nombre: "El Salvador", iso: "SV", prefijo: "+503" },
    { nombre: "Emiratos Árabes Unidos", iso: "AE", prefijo: "+971" },
    { nombre: "Eritrea", iso: "ER", prefijo: "+291" },
    { nombre: "Eslovaquia", iso: "SK", prefijo: "+421" },
    { nombre: "Eslovenia", iso: "SI", prefijo: "+386" },
    { nombre: "España", iso: "ES", prefijo: "+34" },
    { nombre: "Estados Unidos", iso: "US", prefijo: "+1" },
    { nombre: "Estonia", iso: "EE", prefijo: "+372" },
    { nombre: "Etiopía", iso: "ET", prefijo: "+251" },
    { nombre: "Filipinas", iso: "PH", prefijo: "+63" },
    { nombre: "Finlandia", iso: "FI", prefijo: "+358" },
    { nombre: "Fiyi", iso: "FJ", prefijo: "+679" },
    { nombre: "Francia", iso: "FR", prefijo: "+33" },
    { nombre: "Gabón", iso: "GA", prefijo: "+241" },
    { nombre: "Gambia", iso: "GM", prefijo: "+220" },
    { nombre: "Georgia", iso: "GE", prefijo: "+995" },
    { nombre: "Ghana", iso: "GH", prefijo: "+233" },
    { nombre: "Granada", iso: "GD", prefijo: "+1-473" },
    { nombre: "Grecia", iso: "GR", prefijo: "+30" },
    { nombre: "Guatemala", iso: "GT", prefijo: "+502" },
    { nombre: "Guinea", iso: "GN", prefijo: "+224" },
    { nombre: "Guinea-Bisáu", iso: "GW", prefijo: "+245" },
    { nombre: "Guinea Ecuatorial", iso: "GQ", prefijo: "+240" },
    { nombre: "Guyana", iso: "GY", prefijo: "+592" },
    { nombre: "Haití", iso: "HT", prefijo: "+509" },
    { nombre: "Honduras", iso: "HN", prefijo: "+504" },
    { nombre: "Hungría", iso: "HU", prefijo: "+36" },
    { nombre: "India", iso: "IN", prefijo: "+91" },
    { nombre: "Indonesia", iso: "ID", prefijo: "+62" },
    { nombre: "Irak", iso: "IQ", prefijo: "+964" },
    { nombre: "Irán", iso: "IR", prefijo: "+98" },
    { nombre: "Irlanda", iso: "IE", prefijo: "+353" },
    { nombre: "Islandia", iso: "IS", prefijo: "+354" },
    { nombre: "Islas Marshall", iso: "MH", prefijo: "+692" },
    { nombre: "Islas Salomón", iso: "SB", prefijo: "+677" },
    { nombre: "Israel", iso: "IL", prefijo: "+972" },
    { nombre: "Italia", iso: "IT", prefijo: "+39" },
    { nombre: "Jamaica", iso: "JM", prefijo: "+1-876" },
    { nombre: "Japón", iso: "JP", prefijo: "+81" },
    { nombre: "Jordania", iso: "JO", prefijo: "+962" },
    { nombre: "Kazajistán", iso: "KZ", prefijo: "+7" },
    { nombre: "Kenia", iso: "KE", prefijo: "+254" },
    { nombre: "Kirguistán", iso: "KG", prefijo: "+996" },
    { nombre: "Kiribati", iso: "KI", prefijo: "+686" },
    { nombre: "Kuwait", iso: "KW", prefijo: "+965" },
    { nombre: "Laos", iso: "LA", prefijo: "+856" },
    { nombre: "Lesoto", iso: "LS", prefijo: "+266" },
    { nombre: "Letonia", iso: "LV", prefijo: "+371" },
    { nombre: "Líbano", iso: "LB", prefijo: "+961" },
    { nombre: "Liberia", iso: "LR", prefijo: "+231" },
    { nombre: "Libia", iso: "LY", prefijo: "+218" },
    { nombre: "Liechtenstein", iso: "LI", prefijo: "+423" },
    { nombre: "Lituania", iso: "LT", prefijo: "+370" },
    { nombre: "Luxemburgo", iso: "LU", prefijo: "+352" },
    { nombre: "Macedonia del Norte", iso: "MK", prefijo: "+389" },
    { nombre: "Madagascar", iso: "MG", prefijo: "+261" },
    { nombre: "Malasia", iso: "MY", prefijo: "+60" },
    { nombre: "Malaui", iso: "MW", prefijo: "+265" },
    { nombre: "Maldivas", iso: "MV", prefijo: "+960" },
    { nombre: "Malí", iso: "ML", prefijo: "+223" },
    { nombre: "Malta", iso: "MT", prefijo: "+356" },
    { nombre: "Marruecos", iso: "MA", prefijo: "+212" },
    { nombre: "Mauricio", iso: "MU", prefijo: "+230" },
    { nombre: "Mauritania", iso: "MR", prefijo: "+222" },
    { nombre: "México", iso: "MX", prefijo: "+52" },
    { nombre: "Micronesia", iso: "FM", prefijo: "+691" },
    { nombre: "Moldavia", iso: "MD", prefijo: "+373" },
    { nombre: "Mónaco", iso: "MC", prefijo: "+377" },
    { nombre: "Mongolia", iso: "MN", prefijo: "+976" },
    { nombre: "Montenegro", iso: "ME", prefijo: "+382" },
    { nombre: "Mozambique", iso: "MZ", prefijo: "+258" },
    { nombre: "Namibia", iso: "NA", prefijo: "+264" },
    { nombre: "Nauru", iso: "NR", prefijo: "+674" },
    { nombre: "Nepal", iso: "NP", prefijo: "+977" },
    { nombre: "Nicaragua", iso: "NI", prefijo: "+505" },
    { nombre: "Níger", iso: "NE", prefijo: "+227" },
    { nombre: "Nigeria", iso: "NG", prefijo: "+234" },
    { nombre: "Noruega", iso: "NO", prefijo: "+47" },
    { nombre: "Nueva Zelanda", iso: "NZ", prefijo: "+64" },
    { nombre: "Omán", iso: "OM", prefijo: "+968" },
    { nombre: "Países Bajos", iso: "NL", prefijo: "+31" },
    { nombre: "Pakistán", iso: "PK", prefijo: "+92" },
    { nombre: "Palaos", iso: "PW", prefijo: "+680" },
    { nombre: "Palestina", iso: "PS", prefijo: "+970" },
    { nombre: "Panamá", iso: "PA", prefijo: "+507" },
    { nombre: "Papúa Nueva Guinea", iso: "PG", prefijo: "+675" },
    { nombre: "Paraguay", iso: "PY", prefijo: "+595" },
    { nombre: "Perú", iso: "PE", prefijo: "+51" },
    { nombre: "Polonia", iso: "PL", prefijo: "+48" },
    { nombre: "Portugal", iso: "PT", prefijo: "+351" },
    { nombre: "Reino Unido", iso: "GB", prefijo: "+44" },
    { nombre: "República Centroafricana", iso: "CF", prefijo: "+236" },
    { nombre: "República Checa", iso: "CZ", prefijo: "+420" },
    { nombre: "República del Congo", iso: "CG", prefijo: "+242" },
    { nombre: "República Democrática del Congo", iso: "CD", prefijo: "+243" },
    { nombre: "República Dominicana", iso: "DO", prefijo: "+1-809" },
    { nombre: "Ruanda", iso: "RW", prefijo: "+250" },
    { nombre: "Rumanía", iso: "RO", prefijo: "+40" },
    { nombre: "Rusia", iso: "RU", prefijo: "+7" },
    { nombre: "Samoa", iso: "WS", prefijo: "+685" },
    { nombre: "San Cristóbal y Nieves", iso: "KN", prefijo: "+1-869" },
    { nombre: "San Marino", iso: "SM", prefijo: "+378" },
    { nombre: "San Vicente y las Granadinas", iso: "VC", prefijo: "+1-784" },
    { nombre: "Santa Lucía", iso: "LC", prefijo: "+1-758" },
    { nombre: "Santo Tomé y Príncipe", iso: "ST", prefijo: "+239" },
    { nombre: "Senegal", iso: "SN", prefijo: "+221" },
    { nombre: "Serbia", iso: "RS", prefijo: "+381" },
    { nombre: "Seychelles", iso: "SC", prefijo: "+248" },
    { nombre: "Sierra Leona", iso: "SL", prefijo: "+232" },
    { nombre: "Singapur", iso: "SG", prefijo: "+65" },
    { nombre: "Siria", iso: "SY", prefijo: "+963" },
    { nombre: "Somalia", iso: "SO", prefijo: "+252" },
    { nombre: "Sri Lanka", iso: "LK", prefijo: "+94" },
    { nombre: "Suazilandia", iso: "SZ", prefijo: "+268" },
    { nombre: "Sudáfrica", iso: "ZA", prefijo: "+27" },
    { nombre: "Sudán", iso: "SD", prefijo: "+249" },
    { nombre: "Sudán del Sur", iso: "SS", prefijo: "+211" },
    { nombre: "Suecia", iso: "SE", prefijo: "+46" },
    { nombre: "Suiza", iso: "CH", prefijo: "+41" },
    { nombre: "Surinam", iso: "SR", prefijo: "+597" },
    { nombre: "Tailandia", iso: "TH", prefijo: "+66" },
    { nombre: "Tanzania", iso: "TZ", prefijo: "+255" },
    { nombre: "Tayikistán", iso: "TJ", prefijo: "+992" },
    { nombre: "Timor Oriental", iso: "TL", prefijo: "+670" },
    { nombre: "Togo", iso: "TG", prefijo: "+228" },
    { nombre: "Tonga", iso: "TO", prefijo: "+676" },
    { nombre: "Trinidad y Tobago", iso: "TT", prefijo: "+1-868" },
    { nombre: "Túnez", iso: "TN", prefijo: "+216" },
    { nombre: "Turkmenistán", iso: "TM", prefijo: "+993" },
    { nombre: "Turquía", iso: "TR", prefijo: "+90" },
    { nombre: "Tuvalu", iso: "TV", prefijo: "+688" },
    { nombre: "Ucrania", iso: "UA", prefijo: "+380" },
    { nombre: "Uganda", iso: "UG", prefijo: "+256" },
    { nombre: "Uruguay", iso: "UY", prefijo: "+598" },
    { nombre: "Uzbekistán", iso: "UZ", prefijo: "+998" },
    { nombre: "Vanuatu", iso: "VU", prefijo: "+678" },
    { nombre: "Ciudad del Vaticano", iso: "VA", prefijo: "+379" },
    { nombre: "Venezuela", iso: "VE", prefijo: "+58" },
    { nombre: "Vietnam", iso: "VN", prefijo: "+84" },
    { nombre: "Yemen", iso: "YE", prefijo: "+967" },
    { nombre: "Yibuti", iso: "DJ", prefijo: "+253" },
    { nombre: "Zambia", iso: "ZM", prefijo: "+260" },
    { nombre: "Zimbabue", iso: "ZW", prefijo: "+263" }
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

  cargarPaisesLocales();

  // --- FORMATEO Y MÁSCARAS ---
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

  inputs.telefono.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
    validarCampo('telefono');
  });

  ['nombre', 'apellido'].forEach(campo => {
    inputs[campo].addEventListener('input', () => validarCampo(campo));
  });

  ['pais', 'codigoPais', 'tipoCedula'].forEach(campo => {
    inputs[campo].addEventListener('change', () => {
      const campoAValidar = campo === 'codigoPais' ? 'telefono' : (campo === 'tipoCedula' ? 'cedula' : campo);
      validarCampo(campoAValidar);
    });
  });

  // --- VALIDACIONES ---
  function validarCampo(campo) {
    const group = document.getElementById(`group-${campo}`);
    const val = inputs[campo].value.trim();
    let error = '';

    switch (campo) {
      case 'nombre':
      case 'apellido':
        if (!val) error = 'Este campo es requerido.';
        else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/.test(val)) error = 'Ingresa solo letras.';
        break;

      case 'cedula':
        const numCedula = val.replace(/\./g, '');
        if (!numCedula) error = 'Documento requerido.';
        else if (numCedula.length < 6 || numCedula.length > 9) error = 'Inválido (6 a 9 dígitos).';
        break;

      case 'pais':
        if (!val) error = 'Selecciona tu país.';
        break;

      case 'telefono':
        if (!inputs.codigoPais.value) error = 'Selecciona el código.';
        else if (!val) error = 'Número requerido.';
        else if (val.length < 7 || val.length > 12) error = 'Número incompleto.';
        break;
    }

    if (error) {
      group.classList.add('error');
      group.classList.remove('success');
      group.querySelector('.msg-error').textContent = error;
      return false;
    } else {
      group.classList.remove('error');
      group.classList.add('success');
      group.querySelector('.msg-error').textContent = '';
      return true;
    }
  }

  // --- SUBMIT ---
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const campos = ['nombre', 'apellido', 'cedula', 'pais', 'telefono'];
    const resultados = campos.map(campo => validarCampo(campo));
    const esValido = resultados.every(res => res === true);

    if (esValido) {
      btnSubmit.textContent = 'Enviando...';
      btnSubmit.style.opacity = '0.7';
      btnSubmit.disabled = true;

      setTimeout(() => {
        alert('¡Registro completado exitosamente!');
        form.reset();
        campos.forEach(campo => {
          document.getElementById(`group-${campo}`).classList.remove('success');
        });
        btnSubmit.textContent = 'Completar Registro';
        btnSubmit.style.opacity = '1';
        btnSubmit.disabled = false;
      }, 1200);
    }
  });
});