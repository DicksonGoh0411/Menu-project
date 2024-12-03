import './App.css'

function MenuItem({ name, price, nutritionInfo }) {
  return (
    <>
      <p>
        <strong>{name}</strong> | {price}
        <NutritionalInfo nutritionInfo={nutritionInfo} />
      </p>
    </>
  )
}

function Category({ titles, foods }) {
  return (
    <>
      <div>
        <h2>{titles}</h2>
        {foods}
      </div>

    </>
  )
}

const friedChicken = (
  <>
    <MenuItem name={'2 pcs Fried Chicken Set'} price={'RM 10.00'} nutritionInfo={{ calories: 540, protein: 31, carbs: 35, fat: 29 }} />
    <MenuItem name={'5 pcs Fried Chicken Set'} price={'RM 23.00'} nutritionInfo={{ calories: 1350, protein: 80, carbs: 88, fat: 73 }} />
    <MenuItem name={'6 pcs Chicken Nuggets Set'} price={'RM 12.00'} nutritionInfo={{ calories: 270, protein: 13, carbs: 16, fat: 16 }} />
    <MenuItem name={'9 pcs Chicken Nuggets Set'} price={'RM 16.00'} nutritionInfo={{ calories: 405, protein: 20, carbs: 24, fat: 24 }} />
  </>
)

const Burgers = (
  <>
    <MenuItem name={'Double Cheeseburger Set'} price={'RM 11.50'} />
    <MenuItem name={'Bacon Burger Set'} price={'RM 11.50'} />
  </>
)

const Beverages = (
  <>
    <MenuItem name={'Soft Drinks'} price={'RM 2.50'} />
    <MenuItem name={'Juices'} price={'RM 5.00'} />
    <MenuItem name={'Drinking Water'} price={'RM 0.50'} />
  </>
)

function NutritionalInfo({ nutritionInfo }) {
  return (
    <>
      <div>
        <p>Calories: {nutritionInfo?.calories} kcal</p>
        <p>Protein: {nutritionInfo?.protein} g</p>
        <p>Carbs: {nutritionInfo?.carbs} g</p>
        <p>Fat: {nutritionInfo?.fat} g</p>
      </div>
    </>
  )
}



function App() {
  return (
    <>
      <h1>Uncle Haris Fried Chicken</h1>
      <Category titles={"Chicken"} foods={friedChicken} />
      <Category titles={"Burgers"} foods={Burgers} />
      <Category titles={"Beverages"} foods={Beverages} />
    </>
  )
}
export default App
