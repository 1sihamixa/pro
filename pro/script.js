let poid = document.getElementById("poids").value;
let longueu = document.getElementById("longueur").value;
let largeu = document.getElementById("largeur").value;
let hauteu = document.getElementById("hauteur").value;

const loaded = async () => {
    try {
        const api = await fetch("dropdrone.json");
        const data = await api.json();
        console.log(data);

        let filterBase = data.tarifs.standard.base;
        let filterPoids = data.tarifs.standard.poids;
        let filterDimension = data.tarifs.standard.dimension;
        console.log(filterBase);
}};

// الوصول إلى قيمة "base" في "standard"
const baseValueStandard = jsonData.tarifs.standard.base;
console.log("قيمة 'base' في 'standard':", baseValueStandard);

// الوصول إلى قيمة "base" في "express"
const baseValueExpress = jsonData.tarifs.express.base;
console.log("قيمة 'base' في 'express':", baseValueExpress);

// الوصول إلى عناصر "distance" في "standard"
const distanceStandard = jsonData.tarifs.standard.distance;
console.log("عناصر 'distance' في 'standard':", distanceStandard);

// الوصول إلى عناصر "distance" في "express"
const distanceExpress = jsonData.tarifs.express.distance;
console.log("عناصر 'distance' في 'express':", distanceExpress);


// ال JSON المقدم
const jsonData = {
    "tarifs": {
      "standard": {
        "base": 20,
        "poids": 5,
        "dimension": 0.1,
        "distance": {
          "moins de 10 km": 5,
          "entre 10km et 50km": 10,
          "entre 50km et 100km": 15,
          "entre 100km et 300km": 30,
          "plus de 300km": 50
        }
      },
      "express": {
        "base": 30,
        "poids": 7,
        "dimension": 0.2,
        "distance": {
          "moins de 10 km": 7,
          "entre 10km et 50km": 15,
          "entre 50km et 100km": 22,
          "entre 100km et 300km": 40,
          "plus de 300km": 65
        }
      }
    }
  };
  
  // الوزن والمسافة للحساب
  const weight = 6; // يمكن تغيير قيمة الوزن كما تشاء
  const distance = "entre 50km et 100km"; // يمكن تغيير المسافة كما تشاء
  
  // اختيار نوع الشحن (standard أو express)
  const shippingType = "standard"; // يمكن تغيير نوع الشحن كما تشاء
  
  // استخراج القيم من الملف JSON
  const baseCost = jsonData.tarifs[shippingType].base;
  const weightCost = jsonData.tarifs[shippingType].poids * weight;
  const distanceCost = jsonData.tarifs[shippingType].distance[distance];
  
  // حساب التكلفة الإجمالية
  const totalCost = baseCost + weightCost + distanceCost;
  
  // طباعة نتيجة الحساب
  console.log("تكلفة الشحن الإجمالية:", totalCost);
  
loaded();