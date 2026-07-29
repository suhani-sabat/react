import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hook/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const currencyOpt = Object.keys(currencyInfo)

  const swap = () => {
    let currFrom = from
    setFrom(to)
    setTo(currFrom)
    let currAmount = amount
    setAmount(convertedAmount)
    setConvertedAmount(currAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <div
        className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        // style={{
          // backgroundImage: `url(https://www.pexels.com/photo/new-york-skyline-15565076/)`
        // }}
      >
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5'>
            <form
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
            >
              <div className='w-full mb-1'>
                <InputBox 
                  label="From"
                  amount={amount}
                  currencyOptions = {currencyOpt}
                  onAmountChange={(amount)=>setAmount(amount)}
                  onCurrencyChange = {(currency) => setFrom(currency)}
                  selectCurrency = {from}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                  type='button'
                  className='absolute left-1/2
                  -translate-x-1/2
                  -translate-y-1/2 border-2
                  border-white rounded-md
                  bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className='w-full mb-1'>
                <InputBox 
                  label="To"
                  amount={convertedAmount}
                  currencyOptions = {currencyOpt}
                  onCurrencyChange = {(currency) => setTo(currency)}
                  selectCurrency = {to}
                />
              </div>
              <button 
              type="submit"
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
