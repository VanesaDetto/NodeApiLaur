//1. ALMACENAMIENTO DE LA CAJA CONTENEDORA
const aceitesContainer = document.querySelector("#aceites-container");

//2. ALMACENAMIENTO DE LA URL

const laurURL1 = "http://localhost:8080/api/aceites/getAll";

let previousaceites = "";

//3.ETAPA DE SINCRONISIDAD

const initAceites = async () => {
  const aceites = await getAceites();
  mapAceites(aceites);
};

const getAceites = async () => {
  const rawData = await fetch(laurURL1);
  const jsonData = await rawData.json();
  return jsonData;
};

//3. ETAPA DE MAPEO

const mapAceites = (list) => {
  list.data.aceites.map((item) =>
    generateHTML({
      name: item.name,
      descripcion: item.descripcion,
      imagen: item.imagen,
      precio: item.precio,
    })
  );
};

//4. ARMO HTML

const generateHTML = (item) => {
  const myFigure = ` 
  <figure class="figureaceites_container">
    <img src="${item.imagen}" alt="${item.name}" referrerpolicy="no-referrer"/>
    <div class="texto-aceite">
      <h3>${item.name}</h3>
      <h4>${item.descripcion}</h4>
      <h5>${item.precio}</h5>
      <button class="boton">COMPRAR</button>
    </div>
    </figure>
    
    `;

  print(myFigure);
};

const print = (figure) => {
  aceitesContainer.innerHTML += figure;
};

initAceites();

/*-------------------------------------------------------*/
//VINOS------------------------------------//

//1. ALMACENAMIENTO DE LA CAJA CONTENEDORA
const vinosContainer = document.querySelector("#vinos-container");

//2. ALMACENAMIENTO DE LA URL

const laurURL2 = "http://localhost:8080/api/vinos/getAll";

let previousvinos = "";

//3.ETAPA DE SINCRONISIDAD

const initVinos = async () => {
  const vinos = await getVinos();
  mapVinos(vinos);
};

const getVinos = async () => {
  const rawData = await fetch(laurURL2);
  const jsonData = await rawData.json();
  return jsonData;
};

//3. ETAPA DE MAPEO

const mapVinos = (list) => {
  list.data.vinos.map((item) =>
    createHTML({
      name: item.name,
      descripcion: item.descripcion,
      imagen: item.imagen,
      precio: item.precio,
    })
  );
};

//4. ARMO HTML

const createHTML = (item) => {
  const myFigure = ` 
  <figure class="figurevinos_container">
    <img src="${item.imagen}" alt="${item.name}" referrerpolicy="no-referrer"/>
    <div class="texto-vinos">
      <h3>${item.name}</h3>
      <h4>${item.descripcion}</h4>
      <h5>${item.precio}</h5>
      <button class="boton">COMPRAR</button>
    </div>
    </figure>
    
    `;

  printvinos(myFigure);
};

const printvinos = (figure) => {
  vinosContainer.innerHTML += figure;
};

initVinos();

/*-------------------------------------------------------*/
//ACEITUNAS------------------------------------//

//1. ALMACENAMIENTO DE LA CAJA CONTENEDORA
const aceitunasContainer = document.querySelector("#aceitunas-container");

//2. ALMACENAMIENTO DE LA URL

const laurURL3 = "http://localhost:8080/api/aceitunas/getAll";

let previousaceitunas = "";

//3.ETAPA DE SINCRONISIDAD

const initAceitunas = async () => {
  const aceitunas = await getAceitunas();
  mapAceitunas(aceitunas);
};

const getAceitunas = async () => {
  const rawData = await fetch(laurURL3);
  const jsonData = await rawData.json();
  return jsonData;
};

//3. ETAPA DE MAPEO

const mapAceitunas = (list) => {
  list.data.aceituna.map((item) =>
    crearHTML({
      name: item.name,
      descripcion: item.descripcion,
      imagen: item.imagen,
      precio: item.precio,
    })
  );
};

//4. ARMO HTML

const crearHTML = (item) => {
  const myFigure = ` 
  <figure class="figureaceitunas_container">
    <img src="${item.imagen}" alt="${item.name}" referrerpolicy="no-referrer"/>
    <div class="texto-aceitunas">
      <h3>${item.name}</h3>
      <h4>${item.descripcion}</h4>
      <h5>${item.precio}</h5>
      <button class="boton">COMPRAR</button>
    </div>
    </figure>
    
    `;

  printAceitunas(myFigure);
};

const printAceitunas = (figure) => {
  aceitunasContainer.innerHTML += figure;
};

initAceitunas();

/*-------------------------------------------------------*/
//ACETOS------------------------------------//

//1. ALMACENAMIENTO DE LA CAJA CONTENEDORA
const acetosContainer = document.querySelector("#acetos-container");

//2. ALMACENAMIENTO DE LA URL

const laurURL4 = "http://localhost:8080/api/acetos/getAll";

let previousacetos = "";

//3.ETAPA DE SINCRONISIDAD

const initAcetos = async () => {
  const acetos = await getAcetos();
  mapAcetos(acetos);
};

const getAcetos = async () => {
  const rawData = await fetch(laurURL4);
  const jsonData = await rawData.json();
  return jsonData;
};

//3. ETAPA DE MAPEO

const mapAcetos = (list) => {
  list.data.acetos.map((item) =>
    armarHTML({
      name: item.name,
      descripcion: item.descripcion,
      imagen: item.imagen,
      precio: item.precio,
    })
  );
};

//4. ARMO HTML

const armarHTML = (item) => {
  const myFigure = ` 
  <figure class="figureacetos_container">
    <img src="${item.imagen}" alt="${item.name}" referrerpolicy="no-referrer"/>
    <div class="texto-acetos">
      <h3>${item.name}</h3>
      <h4>${item.descripcion}</h4>
      <h5>${item.precio}</h5>
      <button class="boton">COMPRAR</button>
    </div>
    </figure>
    
    `;

  printAcetos(myFigure);
};

const printAcetos = (figure) => {
  acetosContainer.innerHTML += figure;
};

initAcetos();
