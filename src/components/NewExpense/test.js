// Pass data down with props

// App.js
const App = function (props) {
  // STEP 2: Create the function you set the custom attribute equal to
  const handler= function(transferredData){
    console.log('do things with the', transferredData)
  }
  // STEP 1: Create a custom attribute where your CCM tags are used
  return (<ExpenseForm onSaveExpenseData={handler} />);
};

// ExpenseForm.js 
const ExpenseForm = function (props) {
  props.onSaveExpenseData(expenseData) 
  // supply the object we just created
  // the function will now be executed in App.js
};


