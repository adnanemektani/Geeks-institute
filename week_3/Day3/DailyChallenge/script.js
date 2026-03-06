const form = document.getElementById("form");
const toSelect = document.getElementById("to");
const fromSelect = document.getElementById("from");
const amount = document.getElementById('Amount')
const result  = document.getElementById('result')

async function fetchCurrencies() {
  try {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/226d8204890504dc4eade06d/codes",
    );
    if (!response.ok) {
      throw new Error("Problem");
    }
    const data = await response.json();
    data.supported_codes.forEach(([code, name]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = `${code} - ${name}`;
      fromSelect.appendChild(option);
      const option2 = document.createElement("option");
      option2.value = code;
      option2.textContent = `${code} - ${name}`;
      toSelect.appendChild(option2);
    });
  } catch (err) {
    console.log(err);
  }
}
fetchCurrencies();
form.addEventListener('submit', async(e)=>{
    e.preventDefault()

    const fromVal = fromSelect.value
    const toVal = toSelect.value
    const amountVal = amount.value

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/226d8204890504dc4eade06d/pair/${fromVal}/${toVal}/${amountVal}`)
        if (!response.ok){
            throw new Error('problem')
        }
        const data  = await response.json()
        result.textContent = `${amountVal} ${fromVal} = ${data.conversion_result} ${toVal}`
    } catch (err) {
        console.log(err)
    }
})
const switchBtn = document.getElementById('switch')

switchBtn.addEventListener('click', () => {
    const temp = fromSelect.value
    fromSelect.value = toSelect.value
    toSelect.value = temp
})