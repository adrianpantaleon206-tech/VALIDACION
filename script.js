document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // CATALOGO DE VALIDACION - 1. LISTA DE PAISES
  // ==========================================
  const CODE_PHONE_COUNTRIES = [
    { iso: "AF", nombre: "Afganistán", prefijo: "+93" },
    { iso: "AL", nombre: "Albania", prefijo: "+355" },
    { iso: "DE", nombre: "Alemania", prefijo: "+49" },
    { iso: "AD", nombre: "Andorra", prefijo: "+376" },
    { iso: "AO", nombre: "Angola", prefijo: "+244" },
    { iso: "AG", nombre: "Antigua y Barbuda", prefijo: "+1268" },
    { iso: "SA", nombre: "Arabia Saudita", prefijo: "+966" },
    { iso: "DZ", nombre: "Argelia", prefijo: "+213" },
    { iso: "AR", nombre: "Argentina", prefijo: "+54" },
    { iso: "AM", nombre: "Armenia", prefijo: "+374" },
    { iso: "AU", nombre: "Australia", prefijo: "+61" },
    { iso: "AT", nombre: "Austria", prefijo: "+43" },
    { iso: "AZ", nombre: "Azerbaiyán", prefijo: "+994" },
    { iso: "BS", nombre: "Bahamas", prefijo: "+1242" },
    { iso: "BD", nombre: "Bangladés", prefijo: "+880" },
    { iso: "BB", nombre: "Barbados", prefijo: "+1246" },
    { iso: "BH", nombre: "Baréin", prefijo: "+973" },
    { iso: "BE", nombre: "Bélgica", prefijo: "+32" },
    { iso: "BZ", nombre: "Belice", prefijo: "+501" },
    { iso: "BJ", nombre: "Benín", prefijo: "+229" },
    { iso: "BY", nombre: "Bielorrusia", prefijo: "+375" },
    { iso: "BO", nombre: "Bolivia", prefijo: "+591" },
    { iso: "BA", nombre: "Bosnia y Herzegovina", prefijo: "+387" },
    { iso: "BW", nombre: "Botsuana", prefijo: "+267" },
    { iso: "BR", nombre: "Brasil", prefijo: "+55" },
    { iso: "BN", nombre: "Brunéi", prefijo: "+673" },
    { iso: "BG", nombre: "Bulgaria", prefijo: "+359" },
    { iso: "BF", nombre: "Burkina Faso", prefijo: "+226" },
    { iso: "BI", nombre: "Burundi", prefijo: "+257" },
    { iso: "BT", nombre: "Bután", prefijo: "+975" },
    { iso: "CV", nombre: "Cabo Verde", prefijo: "+238" },
    { iso: "KH", nombre: "Camboya", prefijo: "+855" },
    { iso: "CM", nombre: "Camerún", prefijo: "+237" },
    { iso: "CA", nombre: "Canadá", prefijo: "+1" },
    { iso: "QA", nombre: "Catar", prefijo: "+974" },
    { iso: "TD", nombre: "Chad", prefijo: "+235" },
    { iso: "CL", nombre: "Chile", prefijo: "+56" },
    { iso: "CN", nombre: "China", prefijo: "+86" },
    { iso: "CY", nombre: "Chipre", prefijo: "+357" },
    { iso: "CO", nombre: "Colombia", prefijo: "+57" },
    { iso: "KM", nombre: "Comoras", prefijo: "+269" },
    { iso: "CG", nombre: "Congo", prefijo: "+242" },
    { iso: "CR", nombre: "Costa Rica", prefijo: "+506" },
    { iso: "HR", nombre: "Croacia", prefijo: "+385" },
    { iso: "CU", nombre: "Cuba", prefijo: "+53" },
    { iso: "DK", nombre: "Dinamarca", prefijo: "+45" },
    { iso: "DM", nombre: "Dominica", prefijo: "+1767" },
    { iso: "EC", nombre: "Ecuador", prefijo: "+593" },
    { iso: "EG", nombre: "Egipto", prefijo: "+20" },
    { iso: "SV", nombre: "El Salvador", prefijo: "+503" },
    { iso: "AE", nombre: "Emiratos Árabes Unidos", prefijo: "+971" },
    { iso: "SK", nombre: "Eslovaquia", prefijo: "+421" },
    { iso: "SI", nombre: "Eslovenia", prefijo: "+386" },
    { iso: "ES", nombre: "España", prefijo: "+34" },
    { iso: "US", nombre: "Estados Unidos", prefijo: "+1" },
    { iso: "EE", nombre: "Estonia", prefijo: "+372" },
    { iso: "ET", nombre: "Etiopía", prefijo: "+251" },
    { iso: "PH", nombre: "Filipinas", prefijo: "+63" },
    { iso: "FI", nombre: "Finlandia", prefijo: "+358" },
    { iso: "FJ", nombre: "Fiyi", prefijo: "+679" },
    { iso: "FR", nombre: "Francia", prefijo: "+33" },
    { iso: "GA", nombre: "Gabón", prefijo: "+241" },
    { iso: "GM", nombre: "Gambia", prefijo: "+220" },
    { iso: "GE", nombre: "Georgia", prefijo: "+995" },
    { iso: "GH", nombre: "Ghana", prefijo: "+233" },
    { iso: "GD", nombre: "Granada", prefijo: "+1473" },
    { iso: "GR", nombre: "Grecia", prefijo: "+30" },
    { iso: "GT", nombre: "Guatemala", prefijo: "+502" },
    { iso: "GN", nombre: "Guinea", prefijo: "+224" },
    { iso: "GQ", nombre: "Guinea Ecuatorial", prefijo: "+240" },
    { iso: "GY", nombre: "Guyana", prefijo: "+592" },
    { iso: "HT", nombre: "Haití", prefijo: "+509" },
    { iso: "HN", nombre: "Honduras", prefijo: "+504" },
    { iso: "HU", nombre: "Hungría", prefijo: "+36" },
    { iso: "IN", nombre: "India", prefijo: "+91" },
    { iso: "ID", nombre: "Indonesia", prefijo: "+62" },
    { iso: "IQ", nombre: "Irak", prefijo: "+964" },
    { iso: "IR", nombre: "Irán", prefijo: "+98" },
    { iso: "IE", nombre: "Irlanda", prefijo: "+353" },
    { iso: "IS", nombre: "Islandia", prefijo: "+354" },
    { iso: "IL", nombre: "Israel", prefijo: "+972" },
    { iso: "IT", nombre: "Italia", prefijo: "+39" },
    { iso: "JM", nombre: "Jamaica", prefijo: "+1876" },
    { iso: "JP", nombre: "Japón", prefijo: "+81" },
    { iso: "JO", nombre: "Jordania", prefijo: "+962" },
    { iso: "KZ", nombre: "Kazajistán", prefijo: "+7" },
    { iso: "KE", nombre: "Kenia", prefijo: "+254" },
    { iso: "KW", nombre: "Kuwait", prefijo: "+965" },
    { iso: "LA", nombre: "Laos", prefijo: "+856" },
    { iso: "LS", nombre: "Lesoto", prefijo: "+266" },
    { iso: "LV", nombre: "Letonia", prefijo: "+371" },
    { iso: "LB", nombre: "Líbano", prefijo: "+961" },
    { iso: "LR", nombre: "Liberia", prefijo: "+231" },
    { iso: "LY", nombre: "Libia", prefijo: "+218" },
    { iso: "LI", nombre: "Liechtenstein", prefijo: "+423" },
    { iso: "LT", nombre: "Lituania", prefijo: "+370" },
    { iso: "LU", nombre: "Luxemburgo", prefijo: "+352" },
    { iso: "MK", nombre: "Macedonia del Norte", prefijo: "+389" },
    { iso: "MG", nombre: "Madagascar", prefijo: "+261" },
    { iso: "MY", nombre: "Malasia", prefijo: "+60" },
    { iso: "MW", nombre: "Malaui", prefijo: "+265" },
    { iso: "MV", nombre: "Maldivas", prefijo: "+960" },
    { iso: "ML", nombre: "Malí", prefijo: "+223" },
    { iso: "MT", nombre: "Malta", prefijo: "+356" },
    { iso: "MA", nombre: "Marruecos", prefijo: "+212" },
    { iso: "MU", nombre: "Mauricio", prefijo: "+230" },
    { iso: "MR", nombre: "Mauritania", prefijo: "+222" },
    { iso: "MX", nombre: "México", prefijo: "+52" },
    { iso: "FM", nombre: "Micronesia", prefijo: "+691" },
    { iso: "MD", nombre: "Moldavia", prefijo: "+373" },
    { iso: "MC", nombre: "Mónaco", prefijo: "+377" },
    { iso: "MN", nombre: "Mongolia", prefijo: "+976" },
    { iso: "ME", nombre: "Montenegro", prefijo: "+382" },
    { iso: "MZ", nombre: "Mozambique", prefijo: "+258" },
    { iso: "NA", nombre: "Namibia", prefijo: "+264" },
    { iso: "NP", nombre: "Nepal", prefijo: "+977" },
    { iso: "NI", nombre: "Nicaragua", prefijo: "+505" },
    { iso: "NE", nombre: "Níger", prefijo: "+227" },
    { iso: "NG", nombre: "Nigeria", prefijo: "+234" },
    { iso: "NO", nombre: "Noruega", prefijo: "+47" },
    { iso: "NZ", nombre: "Nueva Zelanda", prefijo: "+64" },
    { iso: "OM", nombre: "Omán", prefijo: "+968" },
    { iso: "NL", nombre: "Países Bajos", prefijo: "+31" },
    { iso: "PK", nombre: "Pakistán", prefijo: "+92" },
    { iso: "PA", nombre: "Panamá", prefijo: "+507" },
    { iso: "PG", nombre: "Papúa Nueva Guinea", prefijo: "+675" },
    { iso: "PY", nombre: "Paraguay", prefijo: "+595" },
    { iso: "PE", nombre: "Perú", prefijo: "+51" },
    { iso: "PL", nombre: "Polonia", prefijo: "+48" },
    { iso: "PT", nombre: "Portugal", prefijo: "+351" },
    { iso: "GB", nombre: "Reino Unido", prefijo: "+44" },
    { iso: "DO", nombre: "República Dominicana", prefijo: "+1809" },
    { iso: "RW", nombre: "Ruanda", prefijo: "+250" },
    { iso: "RO", nombre: "Rumania", prefijo: "+40" },
    { iso: "RU", nombre: "Rusia", prefijo: "+7" },
    { iso: "WS", nombre: "Samoa", prefijo: "+685" },
    { iso: "SM", nombre: "San Marino", prefijo: "+378" },
    { iso: "LC", nombre: "Santa Lucía", prefijo: "+1758" },
    { iso: "SN", nombre: "Senegal", prefijo: "+221" },
    { iso: "RS", nombre: "Serbia", prefijo: "+381" },
    { iso: "SC", nombre: "Seychelles", prefijo: "+248" },
    { iso: "SL", nombre: "Sierra Leona", prefijo: "+232" },
    { iso: "SG", nombre: "Singapur", prefijo: "+65" },
    { iso: "SY", nombre: "Siria", prefijo: "+963" },
    { iso: "SO", nombre: "Somalia", prefijo: "+252" },
    { iso: "LK", nombre: "Sri Lanka", prefijo: "+94" },
    { iso: "ZA", nombre: "Sudáfrica", prefijo: "+27" },
    { iso: "SD", nombre: "Sudán", prefijo: "+249" },
    { iso: "SE", nombre: "Suecia", prefijo: "+46" },
    { iso: "CH", nombre: "Suiza", prefijo: "+41" },
    { iso: "SR", nombre: "Surinam", prefijo: "+597" },
    { iso: "TH", nombre: "Tailandia", prefijo: "+66" },
    { iso: "TZ", nombre: "Tanzania", prefijo: "+255" },
    { iso: "TJ", nombre: "Tayikistán", prefijo: "+992" },
    { iso: "TL", nombre: "Timor Oriental", prefijo: "+670" },
    { iso: "TG", nombre: "Togo", prefijo: "+228" },
    { iso: "TO", nombre: "Tonga", prefijo: "+676" },
    { iso: "TT", nombre: "Trinidad y Tobago", prefijo: "+1868" },
    { iso: "TN", nombre: "Túnez", prefijo: "+216" },
    { iso: "TM", nombre: "Turkmenistán", prefijo: "+993" },
    { iso: "TR", nombre: "Turquía", prefijo: "+90" },
    { iso: "UA", nombre: "Ucrania", prefijo: "+380" },
    { iso: "UG", nombre: "Uganda", prefijo: "+256" },
    { iso: "UY", nombre: "Uruguay", prefijo: "+598" },
    { iso: "UZ", nombre: "Uzbekistán", prefijo: "+998" },
    { iso: "VU", nombre: "Vanuatu", prefijo: "+678" },
    { iso: "VA", nombre: "Vaticano", prefijo: "+379" },
    { iso: "VE", nombre: "Venezuela", prefijo: "+58" },
    { iso: "VN", nombre: "Vietnam", prefijo: "+84" },
    { iso: "YE", nombre: "Yemen", prefijo: "+967" },
    { iso: "ZM", nombre: "Zambia", prefijo: "+260" },
    { iso: "ZW", nombre: "Zimbabue", prefijo: "+263" }
  ];

  // ==========================================
  // CATALOGO DE VALIDACION - 2. ELEMENTOS Y ORDEN DE CAMPOS
  // ==========================================
  const form = document.getElementById('registroForm');
  const btnSubmit = document.getElementById('btnSubmit');

  const inputs = {
    nombre: document.getElementById('nombre'),
    apellido: document.getElementById('apellido'),
    tipoCedula: document.getElementById('tipoCedula'),
    cedula: document.getElementById('cedula'),
    pais: document.getElementById('pais'),
    codigoPais: document.getElementById('codigoPais'),
    telefono: document.getElementById('telefono'),
    correo: document.getElementById('correo'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirmPassword')
  };

  const FIELD_ORDER = [
    'nombre',
    'apellido',
    'tipoCedula',
    'cedula',
    'pais',
    'codigoPais',
    'telefono',
    'correo',
    'password',
    'confirmPassword'
  ];

  // ==========================================
  // CATALOGO DE VALIDACION - 3. REGLAS DE VALIDACION
  // ==========================================
  const VALIDATION_RULES = {
    nombre: (val) => {
      if (!val) return 'Requerido.';
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/.test(val)) return 'Solo letras.';
      return '';
    },
    apellido: (val) => {
      if (!val) return 'Requerido.';
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/.test(val)) return 'Solo letras.';
      return '';
    },
    cedula: (val) => {
      const numCedula = val.replace(/\./g, '');
      if (!numCedula) return 'Documento requerido.';
      if (numCedula.length < 6 || numCedula.length > 9) return 'Inválido.';
      return '';
    },
    pais: (val) => (!val ? 'Selecciona un país.' : ''),
    telefono: (val) => {
      if (!inputs.codigoPais.value) return 'Selecciona el código.';
      if (!val) return 'Número requerido.';
      if (val.length < 7 || val.length > 12) return 'Número incompleto.';
      return '';
    },
    correo: (val) => {
      if (!val) return 'Correo requerido.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'Correo inválido.';
      return '';
    },
    password: (val) => {
      if (!val) return 'Contraseña requerida.';
      if (val.length < 6) return 'Mínimo 6 caracteres.';
      return '';
    },
    confirmPassword: (val) => {
      if (!val) return 'Confirma tu clave.';
      if (val !== inputs.password.value) return 'No coinciden.';
      return '';
    }
  };

  // ==========================================
  // CATALOGO DE VALIDACION - 4. FUNCIONES Y ALERTAS
  // ==========================================
  function cargarPaisesLocales() {
    if (!inputs.pais || !inputs.codigoPais) return;

    inputs.pais.innerHTML = '<option value="">Selecciona tu país</option>';
    inputs.codigoPais.innerHTML = '<option value="">Código</option>';

    CODE_PHONE_COUNTRIES.forEach(({ iso, nombre, prefijo }) => {
      const optPais = new Option(nombre, iso);
      inputs.pais.add(optPais);

      const optCod = new Option(`${iso} (${prefijo})`, prefijo);
      inputs.codigoPais.add(optCod);
    });
  }

  function validarCampo(campo) {
    const group = document.getElementById(`group-${campo}`);
    if (!group || !VALIDATION_RULES[campo]) return true;

    const val = inputs[campo] ? inputs[campo].value.trim() : '';
    const errorMsg = VALIDATION_RULES[campo](val);
    const msgEl = group.querySelector('.msg-error');

    if (errorMsg) {
      group.classList.add('error');
      group.classList.remove('success');
      if (msgEl) msgEl.textContent = errorMsg;
      return false;
    } else {
      group.classList.remove('error');
      group.classList.add('success');
      if (msgEl) msgEl.textContent = '';
      return true;
    }
  }

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

  // ==========================================
  // CATALOGO DE VALIDACION - 5. MANEJADORES DE EVENTOS
  // ==========================================
  function inicializarListeners() {
    if (inputs.cedula) {
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
    }

    if (inputs.telefono) {
      inputs.telefono.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
        validarCampo('telefono');
      });
    }

    const camposTexto = ['nombre', 'apellido', 'correo', 'cedula', 'telefono', 'password', 'confirmPassword'];
    camposTexto.forEach(campo => {
      if (inputs[campo]) {
        inputs[campo].addEventListener('input', () => validarCampo(campo));
      }
    });

    ['pais', 'codigoPais', 'tipoCedula'].forEach(campo => {
      if (inputs[campo]) {
        inputs[campo].addEventListener('change', () => {
          if (campo === 'codigoPais') validarCampo('telefono');
          else if (campo === 'tipoCedula') validarCampo('cedula');
          else validarCampo(campo);
        });
      }
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const resultados = FIELD_ORDER.map(campo => validarCampo(campo));
        const esValido = resultados.every(res => res === true);

        if (esValido) {
          btnSubmit.textContent = 'Enviando...';
          btnSubmit.style.opacity = '0.7';
          btnSubmit.disabled = true;

          setTimeout(() => {
            mostrarAlertaExito();
            form.reset();

            FIELD_ORDER.forEach(campo => {
              const group = document.getElementById(`group-${campo}`);
              if (group) group.classList.remove('success');
            });

            btnSubmit.textContent = 'Completar Registro';
            btnSubmit.style.opacity = '1';
            btnSubmit.disabled = false;
          }, 1200);
        }
      });
    }
  }

  // ==========================================
  // CATALOGO DE VALIDACION - 6. INICIALIZACION
  // ==========================================
  function init() {
    cargarPaisesLocales();
    inicializarListeners();
  }

  init();
});
